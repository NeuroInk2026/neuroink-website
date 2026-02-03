export interface Formation {
  id: string;
  title: string;
  slug: string;
  description: string;
  shortDescription: string;
  duration: string;
  level: 'debutant' | 'intermediaire' | 'avance';
  price: number | 'gratuit';
  coverImage: string;
  externalUrl?: string;
  status: 'available' | 'coming_soon';
  order: number;
  features: string[];
}

export const levelLabels: Record<string, string> = {
  debutant: 'Débutant',
  intermediaire: 'Intermédiaire',
  avance: 'Avancé',
};

export const levelColors: Record<string, string> = {
  debutant: '#40E0D0',
  intermediaire: '#00A3E0',
  avance: '#6B3FA0',
};

// Formations exemples - seront remplacées par Sanity CMS en Phase 5
export const allFormations: Formation[] = [
  {
    id: '1',
    title: 'Introduction à l\'Intelligence Artificielle',
    slug: 'introduction-ia',
    description: 'Découvrez les fondamentaux de l\'IA, du Machine Learning au Deep Learning, en passant par les applications concrètes et les enjeux éthiques. Formation idéale pour débuter votre parcours dans l\'IA.',
    shortDescription: 'Les bases de l\'IA expliquées simplement, sans prérequis technique.',
    duration: '4 semaines',
    level: 'debutant',
    price: 'gratuit',
    coverImage: '/images/formations/intro-ia.jpg',
    status: 'coming_soon',
    order: 1,
    features: [
      'Comprendre le vocabulaire de l\'IA',
      'Découvrir le Machine Learning et le Deep Learning',
      'Explorer les applications concrètes',
      'Aborder les enjeux éthiques',
    ],
  },
  {
    id: '2',
    title: 'Maîtriser ChatGPT et les IA génératives',
    slug: 'maitriser-chatgpt',
    description: 'Apprenez à utiliser efficacement ChatGPT, Midjourney et les autres outils d\'IA générative pour booster votre productivité personnelle et professionnelle.',
    shortDescription: 'Devenez expert des outils d\'IA générative au quotidien.',
    duration: '3 semaines',
    level: 'debutant',
    price: 'gratuit',
    coverImage: '/images/formations/chatgpt-masterclass.jpg',
    status: 'coming_soon',
    order: 2,
    features: [
      'Rédiger des prompts efficaces',
      'Automatiser vos tâches quotidiennes',
      'Créer du contenu avec l\'IA',
      'Analyser des données avec ChatGPT',
    ],
  },
  {
    id: '3',
    title: 'Python pour la Data Science et l\'IA',
    slug: 'python-data-science',
    description: 'De zéro à autonome en Python pour le traitement de données et les premiers modèles de Machine Learning. Exercices pratiques et projets concrets inclus.',
    shortDescription: 'Apprenez Python appliqué à l\'IA et au traitement de données.',
    duration: '8 semaines',
    level: 'intermediaire',
    price: 'gratuit',
    coverImage: '/images/formations/python-ia.jpg',
    status: 'coming_soon',
    order: 3,
    features: [
      'Python de zéro (variables, boucles, fonctions)',
      'NumPy, Pandas, Matplotlib',
      'Premiers modèles scikit-learn',
      'Projet complet de A à Z',
    ],
  },
];

export function getAvailableFormations(): Formation[] {
  return allFormations
    .sort((a, b) => a.order - b.order);
}
