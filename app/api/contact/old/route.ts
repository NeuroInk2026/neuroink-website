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
  return str
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .trim();
}

function isValidEmail(email: string): boolean {
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

    const body = await request.json();
    const { name, email, subject, message, rgpd } = body;

    // Validation
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Tous les champs obligatoires doivent être remplis.' },
        { status: 400 }
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: 'Adresse email invalide.' },
        { status: 400 }
      );
    }

    if (message.length > 2000) {
      return NextResponse.json(
        { error: 'Le message ne doit pas dépasser 2000 caractères.' },
        { status: 400 }
      );
    }

    if (!rgpd) {
      return NextResponse.json(
        { error: 'Vous devez accepter la politique de confidentialité.' },
        { status: 400 }
      );
    }

    const validSubjects = ['general', 'partenariat', 'presse', 'autre'];
    if (!validSubjects.includes(subject)) {
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

    // === OPTION 1 : Envoi par Formspree (recommandé - gratuit) ===
    // Remplacez VOTRE_FORM_ID par l'ID obtenu sur formspree.io
    const FORMSPREE_ID = process.env.FORMSPREE_ID;

    if (FORMSPREE_ID) {
      const formspreeRes = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: cleanName,
          email: cleanEmail,
          subject: subjectLabels[subject] || subject,
          message: cleanMessage,
          _replyto: cleanEmail,
          _subject: `[NeuroInk Contact] ${subjectLabels[subject]} - ${cleanName}`,
        }),
      });

      if (!formspreeRes.ok) {
        console.error('Formspree error:', await formspreeRes.text());
        return NextResponse.json(
          { error: 'Erreur lors de l\'envoi. Veuillez réessayer.' },
          { status: 500 }
        );
      }

      return NextResponse.json({ success: true });
    }

    // === OPTION 2 : Log en console (dev / fallback) ===
    console.log('=== NOUVEAU MESSAGE DE CONTACT ===');
    console.log(`Nom: ${cleanName}`);
    console.log(`Email: ${cleanEmail}`);
    console.log(`Sujet: ${subjectLabels[subject]}`);
    console.log(`Message: ${cleanMessage}`);
    console.log(`Date: ${new Date().toISOString()}`);
    console.log('===================================');

    return NextResponse.json({ success: true });

  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Erreur interne du serveur.' },
      { status: 500 }
    );
  }
}
