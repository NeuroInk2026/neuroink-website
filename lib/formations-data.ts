// lib/formations-data.ts
// Donnees completes des formations NeuroInk

export type FormationLevel = 'debutant' | 'intermediaire' | 'avance';

export interface FormationModule {
  title: string;
  description: string;
  duration: string;
}

export interface FormationSection {
  title: string;
  paragraphs: string[];
}

export interface Formation {
  slug: string;
  title: string;
  shortDescription: string;
  level: FormationLevel;
  duration: string;
  status: 'available' | 'coming_soon';
  modules: FormationModule[];
  sections: FormationSection[];
  objectives: string[];
  prerequisites: string[];
  targetAudience: string[];
}

export const levelLabels: Record<FormationLevel, string> = {
  debutant: 'Debutant',
  intermediaire: 'Intermediaire',
  avance: 'Avance',
};

export const levelColors: Record<FormationLevel, { bg: string; text: string; badge: string }> = {
  debutant: { bg: 'rgba(64, 224, 208, 0.15)', text: '#40E0D0', badge: '#40E0D0' },
  intermediaire: { bg: 'rgba(0, 163, 224, 0.15)', text: '#00A3E0', badge: '#00A3E0' },
  avance: { bg: 'rgba(107, 63, 160, 0.15)', text: '#6B3FA0', badge: '#6B3FA0' },
};

export const formations: Formation[] = [
  // -------------------------------------------------------
  // FORMATION 1 : Introduction a l'IA - DEBUTANT
  // -------------------------------------------------------
  {
    slug: 'introduction-intelligence-artificielle',
    title: "Introduction a l'Intelligence Artificielle",
    shortDescription: "Les bases de l'IA expliquees simplement, sans prerequis techniques. Comprenez enfin ce que tout le monde en dit.",
    level: 'debutant',
    duration: '4 semaines',
    status: 'coming_soon',
    objectives: [
      "Comprendre ce qu'est l'intelligence artificielle et ce qu'elle n'est pas",
      "Connaitre les principaux types d'IA et leurs applications",
      "Utiliser des outils d'IA generative (ChatGPT, Gemini, Claude) efficacement",
      "Maitriser les bases du prompt engineering",
      "Identifier les opportunites et les risques de l'IA dans votre quotidien",
      "Developper un esprit critique face aux discours sur l'IA",
    ],
    prerequisites: [
      'Aucun prerequis technique',
      'Savoir utiliser un ordinateur et naviguer sur Internet',
      'Curiosite et envie d\'apprendre',
    ],
    targetAudience: [
      'Professionnels souhaitant comprendre l\'IA',
      'Etudiants debutant leur parcours en numerique',
      'Entrepreneurs curieux des opportunites de l\'IA',
      'Enseignants voulant integrer l\'IA dans leur pratique',
      'Toute personne curieuse de comprendre l\'IA',
    ],
    modules: [
      {
        title: 'Module 1 : Qu\'est-ce que l\'IA ?',
        description: 'Histoire, definitions et concepts fondamentaux. Du test de Turing aux grands modeles de langage.',
        duration: '3 heures',
      },
      {
        title: 'Module 2 : Les types d\'IA',
        description: 'IA etroite vs IA generale, machine learning, deep learning, IA generative. Comprendre les differences.',
        duration: '3 heures',
      },
      {
        title: 'Module 3 : L\'IA en pratique',
        description: 'Utiliser ChatGPT, Gemini et Claude. Prompt engineering debutant. Applications concretes au quotidien.',
        duration: '4 heures',
      },
      {
        title: 'Module 4 : Enjeux et perspectives',
        description: 'Ethique, biais algorithmiques, impact sur l\'emploi, reglementation (AI Act). Preparer son avenir avec l\'IA.',
        duration: '3 heures',
      },
    ],
    sections: [
      {
        title: 'Pourquoi cette formation ?',
        paragraphs: [
          "L'intelligence artificielle est partout : dans votre telephone, vos recommandations Netflix, votre GPS, vos emails. Pourtant, pour la majorite d'entre nous, elle reste un mystere entoure de fantasmes et de craintes. Cette formation a ete concue pour demystifier l'IA et vous donner les cles pour la comprendre et l'utiliser au quotidien.",
          "En 4 semaines, vous passerez de \"je ne comprends rien a l'IA\" a \"je sais ce que c'est, comment ca marche, et comment m'en servir\". Pas de jargon technique, pas de mathematiques complexes : uniquement des explications claires, des exemples concrets et des exercices pratiques.",
          "Cette formation s'appuie sur les meilleures ressources pedagogiques mondiales, notamment le cours \"Elements of AI\" de l'Universite d'Helsinki (750 000 apprenants), les publications du Stanford HAI, et l'experience de Franklin KAMCHE aupres de plus de 15 000 apprenants depuis 2021.",
        ],
      },
      {
        title: 'Ce que vous apprendrez',
        paragraphs: [
          "Vous decouvrirez comment les machines \"apprennent\" a partir de donnees, pourquoi ChatGPT peut rediger un texte coherent sans comprendre ce qu'il ecrit, et comment les algorithmes de recommandation devinent vos gouts. Ces connaissances vous permettront d'utiliser l'IA de maniere eclairee et efficace.",
          "Vous apprendrez egalement le prompt engineering : l'art de formuler des instructions claires pour obtenir les meilleurs resultats d'une IA generative. Cette competence est devenue indispensable dans le monde professionnel d'aujourd'hui, selon le World Economic Forum.",
          "Enfin, vous aborderez les questions ethiques cruciales : les biais algorithmiques, la protection de la vie privee, l'impact sur l'emploi et la reglementation europeenne (AI Act). Comprendre ces enjeux vous permettra d'etre un utilisateur responsable et eclaire.",
        ],
      },
      {
        title: 'Methodologie pedagogique',
        paragraphs: [
          "Chaque module combine des explications theoriques accessibles, des demonstrations en direct et des exercices pratiques. Vous travaillerez avec de vrais outils d'IA (ChatGPT, Claude, Gemini) pour experimenter par vous-meme.",
          "La progression est pensee pour les debutants complets : chaque concept s'appuie sur le precedent, avec des rappels reguliers et des quiz d'auto-evaluation. Vous avancez a votre rythme, sans pression.",
          "A la fin de la formation, vous realiserez un mini-projet personnel : utiliser l'IA pour resoudre un probleme concret de votre choix (professionnel ou personnel). C'est la meilleure facon d'ancrer vos apprentissages.",
        ],
      },
    ],
  },

  // -------------------------------------------------------
  // FORMATION 2 : Machine Learning Pratique - INTERMEDIAIRE
  // -------------------------------------------------------
  {
    slug: 'fondamentaux-machine-learning',
    title: 'Fondamentaux du Machine Learning',
    shortDescription: 'Comprenez les concepts essentiels du Machine Learning avec des exemples concrets et des cas pratiques.',
    level: 'intermediaire',
    duration: '6 semaines',
    status: 'coming_soon',
    objectives: [
      'Comprendre les algorithmes de Machine Learning fondamentaux',
      'Differencier apprentissage supervise, non supervise et par renforcement',
      'Preparer et nettoyer des donnees pour le ML',
      'Evaluer la performance d\'un modele de ML',
      'Realiser un projet complet de classification ou de regression',
      'Utiliser Python et scikit-learn pour implementer des modeles',
    ],
    prerequisites: [
      'Connaissance de base en programmation (Python recommande)',
      'Notions de mathematiques (niveau lycee)',
      'Avoir suivi la formation "Introduction a l\'IA" ou equivalent',
    ],
    targetAudience: [
      'Developpeurs souhaitant integrer le ML dans leurs projets',
      'Analystes de donnees voulant monter en competence',
      'Etudiants en informatique ou data science',
      'Professionnels en reconversion vers les metiers de l\'IA',
    ],
    modules: [
      {
        title: 'Module 1 : Fondations du Machine Learning',
        description: 'Types d\'apprentissage, pipeline ML complet, preparation des donnees. Introduction a Python et scikit-learn.',
        duration: '5 heures',
      },
      {
        title: 'Module 2 : Apprentissage supervise',
        description: 'Regression lineaire, logistique. Arbres de decision, Random Forest, SVM. Metriques d\'evaluation.',
        duration: '6 heures',
      },
      {
        title: 'Module 3 : Apprentissage non supervise',
        description: 'Clustering (K-Means, DBSCAN), reduction de dimensionnalite (PCA). Analyse exploratoire des donnees.',
        duration: '5 heures',
      },
      {
        title: 'Module 4 : Evaluation et optimisation',
        description: 'Validation croisee, overfitting, regularisation, hyperparametres. Grid search et random search.',
        duration: '4 heures',
      },
      {
        title: 'Module 5 : Feature engineering',
        description: 'Selection de variables, encodage, normalisation, gestion des valeurs manquantes. Pipelines scikit-learn.',
        duration: '4 heures',
      },
      {
        title: 'Module 6 : Projet final',
        description: 'Projet complet de ML : de la collecte des donnees au deploiement d\'un modele. Presentation et code review.',
        duration: '6 heures',
      },
    ],
    sections: [
      {
        title: 'Pourquoi apprendre le Machine Learning ?',
        paragraphs: [
          "Le Machine Learning est le moteur de l'intelligence artificielle moderne. C'est grace au ML que Netflix vous recommande des films, que Google traduit des textes en 100 langues, et que votre banque detecte les fraudes sur votre carte. Comprendre le ML, c'est comprendre comment fonctionnent ces systemes qui faconnent notre quotidien.",
          "Selon le rapport LinkedIn Jobs on the Rise 2024, les competences en Machine Learning figurent parmi les 5 plus demandees par les recruteurs, avec une croissance de 40% des offres d'emploi en un an. Que vous soyez developpeur, analyste ou entrepreneur, le ML est un atout majeur pour votre carriere.",
          "Cette formation vous donne les bases solides pour demarrer : pas de theorie abstraite, mais des concepts illustres par des exemples concrets et des projets pratiques que vous pourrez presenter dans votre portfolio.",
        ],
      },
      {
        title: 'Notre approche pedagogique',
        paragraphs: [
          "Chaque concept est introduit par un probleme concret du monde reel, puis explique de maniere progressive. Par exemple, vous decouvrirez la regression lineaire en predisant le prix de logements, et la classification en detectant des emails frauduleux.",
          "Les exercices pratiques representent 60% du temps de formation. Vous travaillerez avec des datasets reels (Kaggle, UCI ML Repository) et utiliserez les outils standards de l'industrie : Python, Jupyter Notebooks, pandas, numpy, matplotlib et scikit-learn.",
          "Le projet final vous permettra de mettre en pratique l'ensemble des competences acquises sur un sujet de votre choix. Vous serez guide pas a pas, de la definition du probleme jusqu'au deploiement du modele.",
        ],
      },
      {
        title: 'Competences acquises',
        paragraphs: [
          "A l'issue de cette formation, vous serez capable d'analyser un jeu de donnees, de choisir l'algorithme de ML adapte a votre probleme, d'entrainer et d'evaluer un modele, puis d'interpreter ses resultats. Ces competences sont directement applicables en entreprise.",
          "Vous maitriserez les metriques d'evaluation (precision, recall, F1-score, AUC-ROC) et saurez detecter et corriger les problemes courants : overfitting, underfitting, biais dans les donnees, variables mal encodees.",
          "Cette formation constitue le socle ideal pour poursuivre vers le Deep Learning, le NLP (traitement du langage naturel) ou la Computer Vision. C'est exactement le parcours que nous proposons chez NeuroInk.",
        ],
      },
    ],
  },

  // -------------------------------------------------------
  // FORMATION 3 : Deep Learning et IA Generative - AVANCE
  // -------------------------------------------------------
  {
    slug: 'ia-quotidien-professionnel',
    title: "L'IA dans votre quotidien professionnel",
    shortDescription: "Utilisez les outils d'IA pour ameliorer votre productivite au travail. Cas pratiques par metier.",
    level: 'avance',
    duration: '8 semaines',
    status: 'coming_soon',
    objectives: [
      'Comprendre les architectures de reseaux de neurones profonds',
      'Maitriser les Transformers et les mecanismes d\'attention',
      'Entrainer et fine-tuner des modeles de deep learning avec PyTorch',
      'Comprendre le fonctionnement des LLM (GPT, BERT, Llama)',
      'Creer des applications d\'IA generative (texte, image, code)',
      'Deployer des modeles en production avec les bonnes pratiques MLOps',
    ],
    prerequisites: [
      'Bonne maitrise de Python',
      'Connaissances en Machine Learning (formation Intermediaire ou equivalent)',
      'Notions d\'algebre lineaire et de calcul differentiel',
      'Connaissance basique de la ligne de commande',
    ],
    targetAudience: [
      'Data scientists souhaitant approfondir le deep learning',
      'Ingenieurs ML voulant maitriser les architectures modernes',
      'Developpeurs souhaitant creer des applications d\'IA generative',
      'Chercheurs en IA ou doctorants',
    ],
    modules: [
      {
        title: 'Module 1 : Reseaux de neurones profonds',
        description: 'Perceptrons, backpropagation, fonctions d\'activation. CNN pour la vision, RNN pour les sequences. Introduction a PyTorch.',
        duration: '8 heures',
      },
      {
        title: 'Module 2 : Architectures Transformer',
        description: 'Mecanisme d\'attention, self-attention, multi-head attention. Architecture encodeur-decodeur. Positional encoding.',
        duration: '8 heures',
      },
      {
        title: 'Module 3 : Grands Modeles de Langage (LLM)',
        description: 'GPT, BERT, T5, Llama. Pre-entrainement, fine-tuning, RLHF. Tokenisation et generation de texte.',
        duration: '8 heures',
      },
      {
        title: 'Module 4 : IA Generative avancee',
        description: 'Diffusion Models (Stable Diffusion), VAE, GAN. Generation d\'images, de code et de contenu multimedia.',
        duration: '6 heures',
      },
      {
        title: 'Module 5 : RAG et applications LLM',
        description: 'Retrieval-Augmented Generation, embeddings, bases vectorielles. LangChain, LlamaIndex. Chatbots avances.',
        duration: '6 heures',
      },
      {
        title: 'Module 6 : Fine-tuning et optimisation',
        description: 'LoRA, QLoRA, quantification. Entrainement distribue. Evaluation et benchmarking des modeles.',
        duration: '6 heures',
      },
      {
        title: 'Module 7 : MLOps et deploiement',
        description: 'Docker, API REST, monitoring. CI/CD pour le ML. Gestion des couts et de la latence en production.',
        duration: '5 heures',
      },
      {
        title: 'Module 8 : Projet capstone',
        description: 'Projet complet de bout en bout : conception, entrainement, evaluation et deploiement d\'une application d\'IA generative.',
        duration: '8 heures',
      },
    ],
    sections: [
      {
        title: 'Le Deep Learning au coeur de la revolution IA',
        paragraphs: [
          "Le Deep Learning est la technologie qui a rendu possible la revolution de l'IA generative. De ChatGPT a Midjourney, de DALL-E a Claude, tous ces systemes reposent sur des architectures de reseaux de neurones profonds, en particulier les Transformers inventes par Google en 2017.",
          "Comprendre ces architectures en profondeur vous donne un avantage competitif majeur dans le marche de l'IA. Selon le AI Index Report 2024 de Stanford, les specialistes en deep learning comptent parmi les profils les plus recherches et les mieux remuneres du secteur technologique, avec des salaires medians depassant les 100 000 euros en Europe.",
          "Cette formation ne se contente pas de survoler la theorie : vous implementerez chaque concept en PyTorch, le framework de reference utilise par Meta AI, Google DeepMind et la majorite des laboratoires de recherche. A la fin, vous serez capable de creer, entrainer et deployer vos propres modeles de deep learning.",
        ],
      },
      {
        title: 'Un parcours progressif et exigeant',
        paragraphs: [
          "La formation commence par les fondamentaux des reseaux de neurones (perceptrons, backpropagation, CNN, RNN) avant de plonger dans les architectures modernes : Transformers, mecanismes d'attention, et grands modeles de langage. Chaque concept est illustre par du code PyTorch fonctionnel que vous ecrirez vous-meme.",
          "Les modules 3 a 5 vous plongent dans l'univers des LLM et de l'IA generative. Vous comprendrez comment GPT genere du texte, comment Stable Diffusion cree des images, et comment construire des applications RAG (Retrieval-Augmented Generation) qui combinent la puissance des LLM avec vos propres donnees.",
          "Les deux derniers modules sont consacres aux aspects pratiques indispensables : fine-tuning avec des techniques efficientes (LoRA), optimisation des performances, et deploiement en production avec les bonnes pratiques MLOps. Ces competences font la difference entre un prototype de laboratoire et un produit utilisable en entreprise.",
        ],
      },
      {
        title: 'Projet capstone et portfolio',
        paragraphs: [
          "Le projet final represente 30% de la formation. Vous concevrez et implementerez de bout en bout une application d'IA generative de votre choix : chatbot specialise, generateur de contenu, systeme de recherche semantique, assistant de code, ou tout autre projet ambitieux.",
          "Ce projet sera deploye sur une infrastructure cloud et documente de maniere professionnelle. Il constituera la piece maitresse de votre portfolio pour demontrer vos competences aux recruteurs ou a vos clients.",
          "Tout au long du projet, vous beneficierez d'un accompagnement structure et de retours constructifs pour vous aider a atteindre un niveau de qualite professionnel.",
        ],
      },
    ],
  },
];

// =========================================================
// FONCTIONS UTILITAIRES
// =========================================================

export function getFormationBySlug(slug: string): Formation | undefined {
  return formations.find((f) => f.slug === slug);
}

export function filterFormations(level?: FormationLevel | 'all'): Formation[] {
  if (!level || level === 'all') return formations;
  return formations.filter((f) => f.level === level);
}
