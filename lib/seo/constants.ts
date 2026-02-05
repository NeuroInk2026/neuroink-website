// ═══════════════════════════════════════════════════════════════════
// 🎯 CONSTANTES SEO - NEUROINK
// ═══════════════════════════════════════════════════════════════════
// Configuration centralisée pour le référencement Google + IA

export const SITE_CONFIG = {
  name: 'NeuroInk',
  fullName: 'NeuroInk',
  url: 'https://neuroink.fr',
  domain: 'neuroink.fr',
  description: 'NeuroInk démocratise l\'intelligence artificielle avec des formations, des livres clairs et progressifs. Découvrez L\'Odyssée de l\'IA en 30 jours par Franklin KAMCHE.',
  tagline: 'L\'intelligence artificielle accessible à tous',
  email: 'contact@neuroink.fr',
  phone: null,
  address: null,
  locale: 'fr_FR',
  language: 'fr',
} as const;

export const AUTHOR = {
  name: 'Franklin KAMCHE',
  fullName: 'Franklin KAMCHE',
  role: 'Ingénieur, Auteur, Formateur IA',
  bio: 'Ingénieur diplômé de l\'École Centrale de Nantes et de l\'IPSA, Franklin KAMCHE a transformé ses échecs en une carrière internationale de plus de 10 ans chez Safran, General Electric et les Chantiers de l\'Atlantique. Depuis 2021, il a formé plus de 15 000 apprenants à l\'IA. Fin 2025, il lance NeuroInk, sa plateforme dédiée à la démocratisation de l\'intelligence artificielle.',
  credentials: [
    'Diplômé de l\'École Centrale de Nantes',
    'Diplômé de l\'IPSA',
    'Formations avancées en IA (CNAM Paris, Sorbonne Université)',
    'Doctorant en IA et Mécanique',
    '10+ ans d\'expérience chez Safran, GE, Chantiers de l\'Atlantique',
    '15 000+ apprenants formés à l\'IA depuis 2021'
  ],
  image: '/images/photo-franklin.jpg',
  email: 'contact@neuroink.fr',
  linkedin: 'https://www.linkedin.com/in/franklin-kamche',
  linktree: 'https://linktr.ee/neuroink',
} as const;

export const SOCIAL_LINKS = {
  linkedin: 'https://www.linkedin.com/company/neuroinkai',
  linkedinPersonal: 'https://www.linkedin.com/in/franklin-kamche',
  instagram: 'https://www.instagram.com/neuroink.official',
  linktree: 'https://linktr.ee/neuroink',
  facebook: null,
  twitter: null,
  youtube: null,
  tiktok: null,
} as const;

export const SEO_KEYWORDS = {
  primary: [
    'Franklin KAMCHE',
    'NeuroInk',
    'intelligence artificielle',
    'IA',
    'livre IA',
    'L\'Odyssée de l\'IA',
  ],
  secondary: [
    'machine learning',
    'ChatGPT',
    'deep learning',
    'IA générative',
    'formation IA',
    'apprentissage automatique',
    'livre intelligence artificielle français',
    'démocratisation IA',
    'apprendre IA',
    'comprendre IA',
  ],
  technical: [
    'neural networks',
    'algorithmes IA',
    'éthique IA',
    'applications IA',
    'MOOC IA',
    'cours IA en ligne',
  ],
} as const;

// Pages metadata
export const PAGES_META = {
  home: {
    title: 'NeuroInk - L\'intelligence artificielle accessible à tous | Franklin KAMCHE',
    description: 'NeuroInk démocratise l\'IA avec des formations, des livres clairs et progressifs. Découvrez L\'Odyssée de l\'IA en 30 jours par Franklin KAMCHE, ingénieur et formateur.',
    keywords: [...SEO_KEYWORDS.primary, ...SEO_KEYWORDS.secondary.slice(0, 5)],
  },
  livres: {
    title: 'Nos livres sur l\'IA - NeuroInk | Franklin KAMCHE',
    description: 'Explorez notre catalogue de livres pour apprendre l\'intelligence artificielle sans prérequis. Du débutant à l\'expert. Par Franklin KAMCHE.',
    keywords: ['livre IA', 'L\'Odyssée de l\'IA', 'Franklin KAMCHE', ...SEO_KEYWORDS.secondary.slice(0, 4)],
  },
  blog: {
    title: 'Blog IA - Actualités et tutoriels | NeuroInk',
    description: 'Articles, tutoriels et réflexions sur l\'intelligence artificielle par Franklin KAMCHE et l\'équipe NeuroInk.',
    keywords: ['blog IA', 'actualités IA', 'tutoriels IA', 'Franklin KAMCHE', ...SEO_KEYWORDS.secondary.slice(0, 3)],
  },
  formations: {
    title: 'Formations IA - MOOC et cours | NeuroInk',
    description: 'Développez vos compétences en IA avec nos formations accessibles à tous les niveaux. Par Franklin KAMCHE.',
    keywords: ['formation IA', 'MOOC IA', 'cours IA', 'Franklin KAMCHE', ...SEO_KEYWORDS.secondary.slice(0, 3)],
  },
  contact: {
    title: 'Contact - NeuroInk | Franklin KAMCHE',
    description: 'Contactez l\'équipe NeuroInk pour toute question sur nos publications, formations ou partenariats.',
    keywords: ['contact NeuroInk', 'Franklin KAMCHE', 'partenariat IA', 'questions IA'],
  },
  mentionsLegales: {
    title: 'Mentions légales - NeuroInk',
    description: 'Mentions légales du site NeuroInk Publishing, éditeur de livres sur l\'intelligence artificielle.',
    keywords: ['mentions légales', 'NeuroInk'],
  },
  confidentialite: {
    title: 'Politique de confidentialité - NeuroInk',
    description: 'Protection de vos données personnelles. Politique de confidentialité conforme RGPD de NeuroInk.',
    keywords: ['confidentialité', 'RGPD', 'données personnelles', 'NeuroInk'],
  },
  cgv: {
    title: 'Conditions Générales de Vente - NeuroInk',
    description: 'Conditions de vente des livres NeuroInk. Livraison, retours, droits RGPD.',
    keywords: ['CGV', 'conditions de vente', 'livres NeuroInk'],
  },
} as const;

// Open Graph images par défaut
// Utilise les images existantes (couverture livre + logo)
export const OG_IMAGES = {
  default: `${SITE_CONFIG.url}/images/logo-neuroink.png`, // Logo NeuroInk
  home: `${SITE_CONFIG.url}/images/hero-background.jpg`, // Hero existant
  book: `${SITE_CONFIG.url}/images/couverture-odyssee-ia.jpg`, // Couverture livre
} as const;
