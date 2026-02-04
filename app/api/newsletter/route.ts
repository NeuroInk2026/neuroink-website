import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    // Validation de l'email
    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Email invalide' },
        { status: 400 }
      );
    }

    // Récupération de l'ID Formspree
    const FORMSPREE_FORM_ID = process.env.FORMSPREE_FORM_ID;

    if (!FORMSPREE_FORM_ID) {
      console.error('FORMSPREE_FORM_ID manquant');
      return NextResponse.json(
        { error: 'Configuration serveur manquante' },
        { status: 500 }
      );
    }

    // Envoi à Formspree
    const response = await fetch(`https://formspree.io/f/${FORMSPREE_FORM_ID}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        _subject: '📧 Nouvelle inscription à la newsletter NeuroInk',
        source: 'neuroink-website',
      }),
    });

    if (!response.ok) {
      console.error('Erreur Formspree:', await response.text());
      return NextResponse.json(
        { error: 'Erreur lors de l\'inscription' },
        { status: 500 }
      );
    }

    // Succès
    return NextResponse.json(
      { success: true, message: 'Inscription réussie !' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Erreur newsletter:', error);
    return NextResponse.json(
      { error: 'Une erreur est survenue' },
      { status: 500 }
    );
  }
}
