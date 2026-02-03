// ═══════════════════════════════════════════════════════════════════
// 📚 DONNÉES LIVRES - NEUROINK
// ═══════════════════════════════════════════════════════════════════
// À remplacer par Sanity CMS en Phase 6

export interface Book {
  id: string;
  title: string;
  subtitle: string;
  slug: string;
  description: string;
  shortDescription: string;
  price: number;
  priceEbook: number;
  currency: string;
  status: 'available' | 'preorder' | 'coming_soon';
  releaseDate: string;
  coverImage: string;
  isbn: string;
  pages: number;
  buyLinks: {
    amazon: string;
    amazonEbook: string;
    fnac: string;
    cultura: string;
    publishroom: string;
  };
  extractPdf: string;
  features: string[];
  targetAudience: string;
  faq: {
    question: string;
    answer: string;
  }[];
  author: string;
  publisher: string;
  language: string;
  keywords: string[];
}

export const odysseeIA: Book = {
  id: '1',
  title: "L'Odyssée de l'IA en 30 jours",
  subtitle: "Apprendre l'intelligence artificielle pas à pas",
  slug: 'odyssee-ia',
  shortDescription: "Et si 30 jours suffisaient pour comprendre la révolution qui transforme notre monde ?",
  description: `ChatGPT, algorithmes de recommandation, véhicules autonomes… L'intelligence artificielle est partout. Pourtant, elle reste un mystère pour la plupart d'entre nous.

Ce livre vous emmène dans une odyssée fascinante au cœur de l'IA. Chaque jour, un chapitre. Chaque chapitre, une découverte. Sans jargon technique. Sans prérequis.

De l'histoire aux enjeux éthiques, des applications concrètes aux métiers du futur, vous explorerez tous les aspects essentiels. Avec des exemples du quotidien, des exercices pratiques, des dialogues captivants, et des références scientifiques rigoureuses (MIT, Stanford, Nature, Science).

En 30 jours, vous ne serez plus spectateur. Vous en deviendrez acteur éclairé.`,
  price: 39.90,
  priceEbook: 19.90,
  currency: 'EUR',
  status: 'available',
  releaseDate: '2025-12-01',
  coverImage: '/images/couverture-odyssee-ia.jpg',
  isbn: '978-2-38713-218-5',
  pages: 512,
  buyLinks: {
    amazon: 'https://www.amazon.fr/LOdyssée-lIA-jours-lintelligence-artificielle/dp/2387132181',
    amazonEbook: 'https://www.amazon.fr/Franklin-KAMCHE-ebook/dp/B0GCKWK3YL',
    fnac: 'https://www.fnac.com/a22464504/Franklin-Kamche-L-Odyssee-de-l-IA-en-30-jours',
    cultura: 'https://www.cultura.com/p-l-odyssee-de-l-ia-en-30-jours-9782387132185.html',
    publishroom: 'https://www.publishroom.com/pratique/1818-54175-lodyssee-de-lia-en-30-jours.html'
  },
  extractPdf: '/documents/extrait-odyssee-ia.pdf',
  features: [
    "Comment les machines apprennent vraiment - sans mathématiques complexes",
    "Les applications concrètes : santé, éducation, transports, créativité",
    "Les enjeux éthiques : biais algorithmiques, vie privée, emplois du futur",
    "Comment vous préparer professionnellement à l'ère de l'IA",
    "Votre projet personnel avec l'IA : outils, ressources, plan d'action"
  ],
  targetAudience: "Étudiants, professionnels, entrepreneurs, enseignants ou simplement curieux. Aucun prérequis technique nécessaire.",
  faq: [
    {
      question: "Où acheter le livre ?",
      answer: "Le livre est disponible sur Amazon (papier et ebook), Fnac, Cultura, Publishroom et dans plus de 5 000 librairies dans le monde."
    },
    {
      question: "Le livre est-il disponible en ebook ?",
      answer: "Oui ! La version ebook est disponible sur Amazon Kindle au prix de 19,90€."
    },
    {
      question: "Comment accéder aux ressources QR codes ?",
      answer: "Tous les QR codes du livre renvoient vers des ressources gratuites accessibles sans inscription."
    },
    {
      question: "Puis-je obtenir un remboursement ?",
      answer: "Conformément à la réglementation européenne, vous disposez de 14 jours pour exercer votre droit de rétractation (sauf pour les ebooks téléchargés)."
    }
  ],
  author: 'Franklin KAMCHE',
  publisher: 'Publishroom',
  language: 'fr',
  keywords: [
    'intelligence artificielle',
    'IA',
    'machine learning',
    'ChatGPT',
    'deep learning',
    'IA générative',
    'apprentissage automatique',
    'éthique IA',
    'formation IA',
    'livre IA français',
    'Franklin KAMCHE'
  ]
};

export const allBooks: Book[] = [odysseeIA];
