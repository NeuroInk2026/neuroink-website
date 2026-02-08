import { NextResponse } from 'next/server';

// Rate limiting simple en mémoire
const submissions = new Map<string, { count: number; lastReset: number }>();
const RATE_LIMIT = 5;
const RATE_WINDOW = 15 * 60 * 1000; // 15 minutes

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const record = submissions.get(ip);

  if (!record || now - record.lastReset > RATE_WINDOW) {
    submissions.set(ip, { count: 1, lastReset: now });
    return true;
  }

  if (record.count >= RATE_LIMIT) {
    return false;
  }

  record.count++;
  return true;
}

// Validation et sanitization
function sanitize(str: string): string {
  if (!str || typeof str !== 'string') return '';
  return str
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .trim();
}

function isValidEmail(email: string): boolean {
  if (!email || typeof email !== 'string') return false;
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  try {
    // Rate limiting
    const forwarded = request.headers.get('x-forwarded-for');
    const ip = forwarded?.split(',')[0] || 'unknown';

    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: 'Trop de soumissions. Veuillez réessayer dans 15 minutes.' },
        { status: 429 }
      );
    }

    // Parse body
    let body;
    try {
      body = await request.json();
    } catch (e) {
      console.error('JSON parsing error:', e);
      return NextResponse.json(
        { error: 'Format de données invalide.' },
        { status: 400 }
      );
    }

    // Log pour debug (à retirer en production)
    console.log('📥 Données reçues:', {
      name: body.name,
      email: body.email,
      subject: body.subject,
      messageLength: body.message?.length,
      rgpd: body.rgpd,
    });

    const { name, email, subject, message, rgpd } = body;

    // Validation des champs obligatoires
    if (!name || typeof name !== 'string' || name.trim() === '') {
      console.log('❌ Validation échouée: nom manquant ou invalide');
      return NextResponse.json(
        { error: 'Le nom est requis.' },
        { status: 400 }
      );
    }

    if (!email || !isValidEmail(email)) {
      console.log('❌ Validation échouée: email invalide');
      return NextResponse.json(
        { error: 'Adresse email invalide.' },
        { status: 400 }
      );
    }

    if (!subject || typeof subject !== 'string') {
      console.log('❌ Validation échouée: sujet manquant');
      return NextResponse.json(
        { error: 'Le sujet est requis.' },
        { status: 400 }
      );
    }

    if (!message || typeof message !== 'string' || message.trim() === '') {
      console.log('❌ Validation échouée: message manquant');
      return NextResponse.json(
        { error: 'Le message est requis.' },
        { status: 400 }
      );
    }

    if (message.length > 2000) {
      console.log('❌ Validation échouée: message trop long');
      return NextResponse.json(
        { error: 'Le message ne doit pas dépasser 2000 caractères.' },
        { status: 400 }
      );
    }

    // Validation RGPD - accepte true, "true", "on", ou 1
    const rgpdAccepted = rgpd === true || rgpd === 'true' || rgpd === 'on' || rgpd === 1;
    if (!rgpdAccepted) {
      console.log('❌ Validation échouée: RGPD non accepté', rgpd);
      return NextResponse.json(
        { error: 'Vous devez accepter la politique de confidentialité.' },
        { status: 400 }
      );
    }

    const validSubjects = ['general', 'partenariat', 'presse', 'autre'];
    if (!validSubjects.includes(subject)) {
      console.log('❌ Validation échouée: sujet invalide', subject);
      return NextResponse.json(
        { error: 'Sujet invalide.' },
        { status: 400 }
      );
    }

    // Sanitize
    const cleanName = sanitize(name);
    const cleanEmail = sanitize(email);
    const cleanMessage = sanitize(message);

    const subjectLabels: Record<string, string> = {
      general: 'Question générale',
      partenariat: 'Partenariat',
      presse: 'Presse',
      autre: 'Autre',
    };

    console.log('✅ Validation réussie - Envoi en cours...');

    // === OPTION 1 : Envoi par Formspree (recommandé - gratuit) ===
    // ⚠️ MODIFICATION : Cherche d'abord FORMSPREE_FORM_ID (Vercel), puis FORMSPREE_ID (local)
    const FORMSPREE_ID = process.env.FORMSPREE_FORM_ID || process.env.FORMSPREE_ID || process.env.NEXT_PUBLIC_FORMSPREE_ID;

    if (FORMSPREE_ID) {
      console.log('📧 Envoi via Formspree...');
      console.log('📧 FORMSPREE_ID détecté:', FORMSPREE_ID);
      
      try {
        const formspreeRes = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
          method: 'POST',
          headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            name: cleanName,
            email: cleanEmail,
            subject: subjectLabels[subject] || subject,
            message: cleanMessage,
            _replyto: cleanEmail,
            _subject: `[NeuroInk Contact] ${subjectLabels[subject]} - ${cleanName}`,
          }),
        });

        const responseText = await formspreeRes.text();
        console.log('📬 Réponse Formspree:', formspreeRes.status, responseText);

        if (!formspreeRes.ok) {
          console.error('❌ Erreur Formspree:', responseText);
          return NextResponse.json(
            { error: 'Erreur lors de l\'envoi. Veuillez réessayer.' },
            { status: 500 }
          );
        }

        console.log('✅ Email envoyé avec succès via Formspree');
        return NextResponse.json({ 
          success: true,
          message: 'Message envoyé avec succès !'
        });
      } catch (fetchError) {
        console.error('❌ Erreur réseau Formspree:', fetchError);
        return NextResponse.json(
          { error: 'Erreur de connexion. Veuillez réessayer.' },
          { status: 500 }
        );
      }
    }

    // === OPTION 2 : Log en console (dev / fallback) ===
    console.log('⚠️ FORMSPREE_ID non configuré - Mode développement');
    console.log('=== NOUVEAU MESSAGE DE CONTACT ===');
    console.log(`Nom: ${cleanName}`);
    console.log(`Email: ${cleanEmail}`);
    console.log(`Sujet: ${subjectLabels[subject]}`);
    console.log(`Message: ${cleanMessage}`);
    console.log(`Date: ${new Date().toISOString()}`);
    console.log('===================================');

    return NextResponse.json({ 
      success: true,
      message: 'Message reçu (mode développement)'
    });

  } catch (error) {
    console.error('❌ Erreur générale:', error);
    return NextResponse.json(
      { error: 'Erreur interne du serveur.' },
      { status: 500 }
    );
  }
}
