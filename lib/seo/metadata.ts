// ═══════════════════════════════════════════════════════════════════
// 🏷️ GÉNÉRATEUR METADATA - NEUROINK
// ═══════════════════════════════════════════════════════════════════
// Génération automatique des meta tags Next.js

import type { Metadata } from 'next';
import { SITE_CONFIG, AUTHOR, OG_IMAGES } from './constants';

interface GenerateMetadataOptions {
  title: string;
  description: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'book';
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  noIndex?: boolean;
}

// ─────────────────────────────────────────────────────────────────────
// 📝 GÉNÉRATEUR PRINCIPAL
// ─────────────────────────────────────────────────────────────────────
export function generateMetadata(options: GenerateMetadataOptions): Metadata {
  const {
    title,
    description,
    keywords = [],
    image = OG_IMAGES.default,
    url,
    type = 'website',
    publishedTime,
    modifiedTime,
    author = AUTHOR.name,
    noIndex = false,
  } = options;

  const fullUrl = url ? `${SITE_CONFIG.url}${url}` : SITE_CONFIG.url;
  const fullImage = image.startsWith('http') ? image : `${SITE_CONFIG.url}${image}`;

  return {
    // Basic meta
    title,
    description,
    keywords: keywords.length > 0 ? keywords.join(', ') : undefined,
    authors: [{ name: author }],
    creator: author,
    publisher: SITE_CONFIG.fullName,

    // Robots
    robots: noIndex
      ? {
          index: false,
          follow: false,
        }
      : {
          index: true,
          follow: true,
          'max-image-preview': 'large',
          'max-snippet': -1,
          'max-video-preview': -1,
        },

    // Open Graph (Facebook, LinkedIn)
    openGraph: {
      type,
      url: fullUrl,
      title,
      description,
      siteName: SITE_CONFIG.fullName,
      locale: SITE_CONFIG.locale,
      images: [
        {
          url: fullImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      ...(publishedTime && { publishedTime }),
      ...(modifiedTime && { modifiedTime }),
      ...(type === 'article' && {
        authors: [author],
      }),
    },

    // Twitter Card
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [fullImage],
      creator: '@neuroink',
      site: '@neuroink',
    },

    // Alternate languages (prêt pour i18n)
    alternates: {
      canonical: fullUrl,
      languages: {
        'fr-FR': fullUrl,
        // 'en-US': `${SITE_CONFIG.url}/en${url || ''}`, // Pour V2
      },
    },

    // Verification (à ajouter si besoin)
    // verification: {
    //   google: 'google-verification-code',
    // },
  };
}

// ─────────────────────────────────────────────────────────────────────
// 🏠 METADATA PAGES SPÉCIFIQUES
// ─────────────────────────────────────────────────────────────────────

export const homeMetadata = (): Metadata =>
  generateMetadata({
    title: 'NeuroInk - L\'intelligence artificielle accessible à tous | Franklin KAMCHE',
    description:
      'NeuroInk démocratise l\'IA avec des livres clairs et progressifs. Découvrez L\'Odyssée de l\'IA en 30 jours par Franklin KAMCHE, ingénieur et formateur.',
    keywords: [
      'Franklin KAMCHE',
      'NeuroInk',
      'intelligence artificielle',
      'IA',
      'livre IA',
      'L\'Odyssée de l\'IA',
      'machine learning',
      'ChatGPT',
      'formation IA',
    ],
    image: OG_IMAGES.home,
    url: '/',
  });

export const livresMetadata = (): Metadata =>
  generateMetadata({
    title: 'Nos livres sur l\'IA - NeuroInk | Franklin KAMCHE',
    description:
      'Explorez notre catalogue de livres pour apprendre l\'intelligence artificielle sans prérequis. Du débutant à l\'expert. Par Franklin KAMCHE.',
    keywords: ['livre IA', 'L\'Odyssée de l\'IA', 'Franklin KAMCHE', 'apprendre IA', 'livre intelligence artificielle'],
    image: OG_IMAGES.book,
    url: '/livres',
  });

export const blogMetadata = (): Metadata =>
  generateMetadata({
    title: 'Blog IA - Actualités et tutoriels | NeuroInk',
    description: 'Articles, tutoriels et réflexions sur l\'intelligence artificielle par Franklin KAMCHE et l\'équipe NeuroInk.',
    keywords: ['blog IA', 'actualités IA', 'tutoriels IA', 'Franklin KAMCHE'],
    url: '/blog',
  });

export const formationsMetadata = (): Metadata =>
  generateMetadata({
    title: 'Formations IA - MOOC et cours | NeuroInk',
    description: 'Développez vos compétences en IA avec nos formations accessibles à tous les niveaux. Par Franklin KAMCHE.',
    keywords: ['formation IA', 'MOOC IA', 'cours IA', 'Franklin KAMCHE'],
    url: '/formations',
  });

export const contactMetadata = (): Metadata =>
  generateMetadata({
    title: 'Contact - NeuroInk | Franklin KAMCHE',
    description: 'Contactez l\'équipe NeuroInk pour toute question sur nos publications, formations ou partenariats.',
    keywords: ['contact NeuroInk', 'Franklin KAMCHE', 'partenariat IA'],
    url: '/contact',
  });

export const mentionsLegalesMetadata = (): Metadata =>
  generateMetadata({
    title: 'Mentions légales - NeuroInk',
    description: 'Mentions légales du site NeuroInk Publishing, éditeur de livres sur l\'intelligence artificielle.',
    url: '/mentions-legales',
    noIndex: true,
  });

export const confidentialiteMetadata = (): Metadata =>
  generateMetadata({
    title: 'Politique de confidentialité - NeuroInk',
    description: 'Protection de vos données personnelles. Politique de confidentialité conforme RGPD de NeuroInk.',
    url: '/confidentialite',
    noIndex: true,
  });

export const cgvMetadata = (): Metadata =>
  generateMetadata({
    title: 'Conditions Générales de Vente - NeuroInk',
    description: 'Conditions de vente des livres NeuroInk. Livraison, retours, droits RGPD.',
    url: '/cgv',
    noIndex: true,
  });
