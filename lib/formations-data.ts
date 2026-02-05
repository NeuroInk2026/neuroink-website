// lib/formations-data.ts

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
  duration: string;
  level: FormationLevel;
  isFree: boolean; // TRUE uniquement pour les 2 formations gratuites
  sections: FormationSection[];
  modules: FormationModule[];
  objectives: string[];
  prerequisites: string[];
  targetAudience: string[];
}

// ==========================================
// FORMATIONS DÉBUTANT (6 formations)
// ==========================================

export const formations: Formation[] = [
  // DÉBUTANT 1 - GRATUIT
  {
    slug: 'introduction-ia',
    title: 'Introduction à l\'Intelligence Artificielle',
    shortDescription: 'Les bases de l\'IA expliquées simplement, sans prérequis technique. Comprenez enfin ce que tout le monde en dit.',
    duration: '4 semaines',
    level: 'debutant',
    isFree: true, // ✅ GRATUIT
    sections: [
      {
        title: 'Qu\'allez-vous apprendre ?',
        paragraphs: [
          'Cette formation est conçue pour les débutants absolus. Vous découvrirez ce qu\'est réellement l\'intelligence artificielle, au-delà des fantasmes et des peurs.',
          'Nous aborderons les concepts clés avec des exemples concrets du quotidien : assistants vocaux, recommandations Netflix, filtres anti-spam, et bien plus encore.',
        ],
      },
      {
        title: 'Pourquoi cette formation ?',
        paragraphs: [
          'L\'IA transforme tous les secteurs d\'activité. Que vous soyez étudiant, professionnel ou simplement curieux, comprendre l\'IA est devenu essentiel.',
          'Cette formation vous donnera les clés pour comprendre les débats actuels, anticiper les évolutions de votre métier, et utiliser l\'IA au quotidien.',
        ],
      },
    ],
    modules: [
      {
        title: 'Qu\'est-ce que l\'IA ? Mythes et réalités',
        description: 'Définitions, histoire, différence entre IA faible et IA forte',
        duration: '2',
      },
      {
        title: 'L\'IA dans notre quotidien',
        description: 'Applications concrètes : assistants vocaux, recommandations, traduction',
        duration: '2',
      },
      {
        title: 'Comment les machines apprennent',
        description: 'Introduction au Machine Learning avec des exemples simples',
        duration: '3',
      },
      {
        title: 'Les enjeux éthiques de l\'IA',
        description: 'Biais algorithmiques, vie privée, emploi du futur',
        duration: '2',
      },
    ],
    objectives: [
      'Comprendre ce qu\'est l\'IA et ce qu\'elle n\'est pas',
      'Identifier les applications de l\'IA dans la vie quotidienne',
      'Appréhender les enjeux éthiques et sociétaux',
      'Se préparer aux évolutions professionnelles liées à l\'IA',
    ],
    prerequisites: [
      'Aucun prérequis technique',
      'Curiosité et envie d\'apprendre',
      'Ordinateur avec connexion internet',
    ],
    targetAudience: [
      'Grand public sans formation technique',
      'Professionnels souhaitant comprendre l\'IA',
      'Étudiants en sciences humaines ou gestion',
      'Toute personne curieuse des nouvelles technologies',
    ],
  },

  // DÉBUTANT 2 - GRATUIT
  {
    slug: 'maitriser-chatgpt',
    title: 'Maîtriser ChatGPT pour gagner en productivité',
    shortDescription: 'Apprenez à utiliser ChatGPT efficacement pour automatiser vos tâches quotidiennes et gagner un temps précieux.',
    duration: '3 semaines',
    level: 'debutant',
    isFree: true, // ✅ GRATUIT
    sections: [
      {
        title: 'ChatGPT : votre assistant IA au quotidien',
        paragraphs: [
          'ChatGPT est devenu incontournable en quelques mois. Mais savez-vous vraiment comment en tirer le meilleur parti ?',
          'Cette formation vous apprendra à formuler des prompts efficaces, à structurer vos conversations, et à éviter les pièges courants.',
        ],
      },
      {
        title: 'Applications concrètes',
        paragraphs: [
          'Rédaction de mails professionnels, résumés de documents, génération d\'idées créatives, aide à la programmation... Les usages sont infinis.',
          'Vous découvrirez des cas d\'usage concrets dans votre domaine et des templates de prompts prêts à l\'emploi.',
        ],
      },
    ],
    modules: [
      {
        title: 'Premiers pas avec ChatGPT',
        description: 'Créer un compte, comprendre l\'interface, premières interactions',
        duration: '1',
      },
      {
        title: 'L\'art du prompt engineering',
        description: 'Comment formuler des instructions claires et obtenir des réponses précises',
        duration: '3',
      },
      {
        title: 'Cas d\'usage professionnels',
        description: 'Emails, rapports, brainstorming, analyse de documents',
        duration: '2',
      },
      {
        title: 'Cas d\'usage créatifs',
        description: 'Écriture, marketing, contenus réseaux sociaux',
        duration: '2',
      },
      {
        title: 'Limites et bonnes pratiques',
        description: 'Ce que ChatGPT ne sait pas faire, vérification des informations',
        duration: '1',
      },
    ],
    objectives: [
      'Utiliser ChatGPT de manière professionnelle',
      'Maîtriser les techniques de prompt engineering',
      'Automatiser des tâches répétitives',
      'Gagner 5-10 heures par semaine',
    ],
    prerequisites: [
      'Aucun prérequis technique',
      'Avoir un compte ChatGPT (gratuit ou payant)',
      'Utilisation basique d\'un ordinateur',
    ],
    targetAudience: [
      'Professionnels de tous secteurs',
      'Entrepreneurs et indépendants',
      'Étudiants',
      'Créateurs de contenu',
    ],
  },

  // DÉBUTANT 3 - PAYANT
  {
    slug: 'gemini-google',
    title: 'Google Gemini : l\'IA de Google au service de vos projets',
    shortDescription: 'Découvrez Gemini, l\'assistant IA de Google, et apprenez à l\'utiliser pour vos recherches et projets créatifs.',
    duration: '3 semaines',
    level: 'debutant',
    isFree: false,
    sections: [
      {
        title: 'Gemini vs les autres IA',
        paragraphs: [
          'Gemini est l\'assistant IA de Google, conçu pour s\'intégrer parfaitement à l\'écosystème Google (Gmail, Docs, Drive...).',
          'Il se distingue par sa multimodalité : texte, images, vidéos, et bientôt le son. Cette formation vous montrera comment en tirer parti.',
        ],
      },
      {
        title: 'Intégration professionnelle',
        paragraphs: [
          'Gemini peut transformer votre façon de travailler avec Google Workspace : rédaction dans Docs, analyse de données dans Sheets, automatisation d\'emails...',
          'Vous apprendrez à l\'intégrer dans vos workflows professionnels quotidiens.',
        ],
      },
    ],
    modules: [
      {
        title: 'Découverte de Gemini',
        description: 'Interface, fonctionnalités, différences avec ChatGPT',
        duration: '2',
      },
      {
        title: 'Gemini et Google Workspace',
        description: 'Utiliser Gemini dans Docs, Sheets, Gmail, Drive',
        duration: '3',
      },
      {
        title: 'Recherche et analyse d\'information',
        description: 'Exploiter la puissance de recherche de Google',
        duration: '2',
      },
      {
        title: 'Création de contenus multimédias',
        description: 'Génération d\'idées, scripts vidéo, plans de présentation',
        duration: '2',
      },
    ],
    objectives: [
      'Maîtriser les fonctionnalités de Gemini',
      'Intégrer Gemini dans Google Workspace',
      'Optimiser ses recherches d\'information',
      'Créer des contenus professionnels rapidement',
    ],
    prerequisites: [
      'Compte Google (Gmail)',
      'Utilisation basique de Google Workspace',
      'Aucun prérequis technique',
    ],
    targetAudience: [
      'Utilisateurs de Google Workspace',
      'Professionnels en entreprise',
      'Enseignants et formateurs',
      'Créateurs de contenu',
    ],
  },

  // DÉBUTANT 4 - PAYANT
  {
    slug: 'ia-quotidien-professionnel',
    title: 'L\'IA dans votre quotidien professionnel',
    shortDescription: 'Utilisez les outils d\'IA pour améliorer votre productivité au travail. Cas pratiques par métier.',
    duration: '4 semaines',
    level: 'debutant',
    isFree: false,
    sections: [
      {
        title: 'L\'IA pour chaque métier',
        paragraphs: [
          'Que vous soyez dans le marketing, les RH, la finance, le juridique ou l\'enseignement, l\'IA peut transformer votre quotidien.',
          'Cette formation présente des outils concrets et des cas d\'usage par secteur d\'activité.',
        ],
      },
      {
        title: 'Méthode progressive',
        paragraphs: [
          'Nous commencerons par les outils les plus simples, puis monterons progressivement en complexité.',
          'Chaque semaine, vous implémenterez un nouvel outil dans votre workflow professionnel.',
        ],
      },
    ],
    modules: [
      {
        title: 'Panorama des outils IA par métier',
        description: 'Marketing, RH, Finance, Juridique, Enseignement, Santé',
        duration: '2',
      },
      {
        title: 'Rédaction et communication',
        description: 'Emails, rapports, newsletters, présentations',
        duration: '3',
      },
      {
        title: 'Organisation et gestion de projet',
        description: 'Planification, automatisation, prise de notes',
        duration: '2',
      },
      {
        title: 'Création de contenu',
        description: 'Visuels, vidéos, podcasts avec l\'IA',
        duration: '3',
      },
    ],
    objectives: [
      'Identifier les outils IA adaptés à votre métier',
      'Implémenter au moins 3 outils dans votre workflow',
      'Gagner en productivité et en qualité de travail',
      'Mesurer les gains de temps réels',
    ],
    prerequisites: [
      'Aucun prérequis technique',
      'Être en activité professionnelle ou en formation',
      'Avoir un ordinateur',
    ],
    targetAudience: [
      'Professionnels de tous secteurs',
      'Managers et chefs de projet',
      'Entrepreneurs',
      'Consultants et freelances',
    ],
  },

  // DÉBUTANT 5 - PAYANT
  {
    slug: 'ia-pour-creatifs',
    title: 'IA pour créatifs : design, vidéo, contenu',
    shortDescription: 'Exploitez l\'IA générative pour créer des visuels, vidéos et contenus créatifs professionnels.',
    duration: '5 semaines',
    level: 'debutant',
    isFree: false,
    sections: [
      {
        title: 'La révolution créative de l\'IA',
        paragraphs: [
          'Midjourney, Stable Diffusion, DALL-E, Runway... Les outils d\'IA générative révolutionnent la création visuelle.',
          'Cette formation vous apprendra à les utiliser comme de véritables assistants créatifs.',
        ],
      },
      {
        title: 'Création professionnelle',
        paragraphs: [
          'Vous apprendrez à créer des visuels pour réseaux sociaux, des illustrations, des mockups, des vidéos et bien plus.',
          'L\'objectif : produire du contenu professionnel sans être designer ou vidéaste.',
        ],
      },
    ],
    modules: [
      {
        title: 'Génération d\'images avec l\'IA',
        description: 'Midjourney, DALL-E, Stable Diffusion : lesquels choisir ?',
        duration: '3',
      },
      {
        title: 'Création vidéo assistée par IA',
        description: 'Runway, Synthesia, D-ID pour créer des vidéos',
        duration: '3',
      },
      {
        title: 'Design graphique et mockups',
        description: 'Logos, bannières, posts réseaux sociaux',
        duration: '2',
      },
      {
        title: 'Écriture créative et storytelling',
        description: 'Scripts, scénarios, contenus marketing',
        duration: '2',
      },
    ],
    objectives: [
      'Créer des visuels professionnels sans compétences design',
      'Produire des vidéos courtes pour réseaux sociaux',
      'Automatiser la création de contenus',
      'Développer son identité visuelle avec l\'IA',
    ],
    prerequisites: [
      'Aucun prérequis en design ou vidéo',
      'Créativité et curiosité',
      'Ordinateur performant (recommandé)',
    ],
    targetAudience: [
      'Community managers',
      'Créateurs de contenu',
      'Entrepreneurs',
      'Marketeurs',
    ],
  },

  // DÉBUTANT 6 - PAYANT
  {
    slug: 'premiers-pas-data',
    title: 'Premiers pas dans la data et l\'IA',
    shortDescription: 'Comprenez les données et leur rôle dans l\'IA. Une introduction accessible pour futurs data scientists.',
    duration: '4 semaines',
    level: 'debutant',
    isFree: false,
    sections: [
      {
        title: 'Les données, carburant de l\'IA',
        paragraphs: [
          'Toute IA se nourrit de données. Cette formation vous apprendra à comprendre leur rôle, à les analyser et à les visualiser.',
          'Vous découvrirez les concepts essentiels sans mathématiques complexes.',
        ],
      },
      {
        title: 'De la data à l\'IA',
        paragraphs: [
          'Nous ferons le pont entre données brutes et modèles d\'IA. Vous comprendrez comment les données deviennent intelligence.',
          'Cette formation pose les bases pour aller vers des formations plus techniques ensuite.',
        ],
      },
    ],
    modules: [
      {
        title: 'Qu\'est-ce que la data ?',
        description: 'Types de données, collecte, nettoyage, bases de données',
        duration: '2',
      },
      {
        title: 'Analyser et visualiser des données',
        description: 'Excel, Google Sheets, introduction aux graphiques',
        duration: '3',
      },
      {
        title: 'Introduction au Machine Learning',
        description: 'Comment les algorithmes apprennent des données',
        duration: '3',
      },
      {
        title: 'Premiers pas avec Python (optionnel)',
        description: 'Découverte du langage de programmation de l\'IA',
        duration: '2',
      },
    ],
    objectives: [
      'Comprendre le rôle des données dans l\'IA',
      'Analyser des jeux de données simples',
      'Créer des visualisations parlantes',
      'Décider de poursuivre vers la data science',
    ],
    prerequisites: [
      'Aucun prérequis technique',
      'Bases en Excel recommandées',
      'Esprit logique et analytique',
    ],
    targetAudience: [
      'Futurs data scientists',
      'Professionnels en reconversion',
      'Étudiants',
      'Curieux de la data',
    ],
  },

  // ==========================================
  // FORMATIONS INTERMÉDIAIRE (5 formations)
  // ==========================================

  // INTERMÉDIAIRE 1 - PAYANT
  {
    slug: 'fondamentaux-machine-learning',
    title: 'Fondamentaux du Machine Learning',
    shortDescription: 'Comprenez les concepts essentiels du Machine Learning avec des exemples concrets et des cas pratiques.',
    duration: '6 semaines',
    level: 'intermediaire',
    isFree: false,
    sections: [
      {
        title: 'Du concept à la pratique',
        paragraphs: [
          'Cette formation vous fera passer de la théorie à la pratique. Vous comprendrez les algorithmes clés du Machine Learning et apprendrez à les implémenter.',
          'Nous utiliserons Python et scikit-learn pour créer vos premiers modèles prédictifs.',
        ],
      },
      {
        title: 'Apprentissage par la pratique',
        paragraphs: [
          'Chaque concept sera illustré par un mini-projet concret : prédiction de prix, classification d\'images, détection de fraude...',
          'À la fin de la formation, vous aurez un portfolio de 5 projets ML.',
        ],
      },
    ],
    modules: [
      {
        title: 'Introduction au Machine Learning',
        description: 'Apprentissage supervisé, non supervisé, par renforcement',
        duration: '2',
      },
      {
        title: 'Algorithmes de classification',
        description: 'Régression logistique, arbres de décision, forêts aléatoires',
        duration: '4',
      },
      {
        title: 'Algorithmes de régression',
        description: 'Régression linéaire, polynomiale, ridge, lasso',
        duration: '3',
      },
      {
        title: 'Clustering et réduction de dimensionnalité',
        description: 'K-means, PCA, t-SNE',
        duration: '3',
      },
      {
        title: 'Évaluation et optimisation',
        description: 'Métriques, validation croisée, grid search',
        duration: '3',
      },
    ],
    objectives: [
      'Maîtriser les algorithmes fondamentaux du ML',
      'Implémenter des modèles avec scikit-learn',
      'Évaluer et optimiser les performances',
      'Créer un portfolio de projets ML',
    ],
    prerequisites: [
      'Bases en Python',
      'Notions de statistiques',
      'Formation "Premiers pas data et IA" recommandée',
    ],
    targetAudience: [
      'Développeurs souhaitant se spécialiser en ML',
      'Data analysts en évolution',
      'Étudiants en informatique',
      'Professionnels en reconversion data',
    ],
  },

  // INTERMÉDIAIRE 2 - PAYANT
  {
    slug: 'python-pour-ia',
    title: 'Python pour l\'Intelligence Artificielle',
    shortDescription: 'Maîtrisez Python et ses librairies essentielles : NumPy, Pandas, Matplotlib pour préparer votre transition vers l\'IA.',
    duration: '6 semaines',
    level: 'intermediaire',
    isFree: false,
    sections: [
      {
        title: 'Python, langage de l\'IA',
        paragraphs: [
          'Python est LE langage de l\'intelligence artificielle. Cette formation vous enseignera Python spécifiquement orienté data et IA.',
          'Vous maîtriserez NumPy pour le calcul scientifique, Pandas pour la manipulation de données, et Matplotlib pour la visualisation.',
        ],
      },
      {
        title: 'Pédagogie progressive',
        paragraphs: [
          'Nous partirons de zéro et progresserons rapidement vers des manipulations complexes de données.',
          'Chaque concept sera accompagné d\'exercices pratiques et de mini-projets.',
        ],
      },
    ],
    modules: [
      {
        title: 'Bases de Python',
        description: 'Variables, types, structures de contrôle, fonctions',
        duration: '3',
      },
      {
        title: 'NumPy : calcul scientifique',
        description: 'Arrays, opérations matricielles, algèbre linéaire',
        duration: '3',
      },
      {
        title: 'Pandas : manipulation de données',
        description: 'DataFrames, nettoyage, transformation, agrégation',
        duration: '4',
      },
      {
        title: 'Matplotlib et Seaborn : visualisation',
        description: 'Graphiques, subplots, visualisations avancées',
        duration: '2',
      },
      {
        title: 'Projet final',
        description: 'Analyse complète d\'un jeu de données réel',
        duration: '3',
      },
    ],
    objectives: [
      'Maîtriser Python pour la data science',
      'Manipuler des données avec Pandas',
      'Créer des visualisations professionnelles',
      'Être prêt pour le Machine Learning',
    ],
    prerequisites: [
      'Bases en programmation recommandées',
      'Logique et rigueur',
      'Formation "Premiers pas data" utile mais non obligatoire',
    ],
    targetAudience: [
      'Futurs data scientists',
      'Développeurs en reconversion',
      'Analystes de données',
      'Chercheurs et ingénieurs',
    ],
  },

  // INTERMÉDIAIRE 3 - PAYANT
  {
    slug: 'data-science-entreprise',
    title: 'Data Science appliquée en entreprise',
    shortDescription: 'Apprenez à mener des projets data de bout en bout : collecte, nettoyage, analyse, modélisation, déploiement.',
    duration: '8 semaines',
    level: 'intermediaire',
    isFree: false,
    sections: [
      {
        title: 'Le cycle complet d\'un projet data',
        paragraphs: [
          'En entreprise, un data scientist ne fait pas que coder. Il collecte des données, les nettoie, les explore, construit des modèles, les déploie et les maintient.',
          'Cette formation vous apprendra à gérer toutes ces étapes.',
        ],
      },
      {
        title: 'Méthodologie professionnelle',
        paragraphs: [
          'Vous apprendrez les bonnes pratiques : gestion de versions, documentation, tests, reproductibilité, collaboration.',
          'Nous utiliserons Git, Jupyter, Docker et des outils de MLOps.',
        ],
      },
    ],
    modules: [
      {
        title: 'Cadrage d\'un projet data',
        description: 'Définir les objectifs, KPIs, données nécessaires',
        duration: '2',
      },
      {
        title: 'Collecte et stockage des données',
        description: 'APIs, web scraping, bases de données SQL/NoSQL',
        duration: '3',
      },
      {
        title: 'Nettoyage et feature engineering',
        description: 'Gestion des valeurs manquantes, outliers, création de features',
        duration: '4',
      },
      {
        title: 'Modélisation et évaluation',
        description: 'Choix d\'algorithmes, optimisation, métriques business',
        duration: '4',
      },
      {
        title: 'Déploiement et monitoring',
        description: 'APIs, conteneurs Docker, suivi des performances',
        duration: '3',
      },
    ],
    objectives: [
      'Mener un projet data de A à Z',
      'Maîtriser les bonnes pratiques professionnelles',
      'Déployer des modèles en production',
      'Communiquer efficacement avec les stakeholders',
    ],
    prerequisites: [
      'Maîtrise de Python',
      'Bases en Machine Learning',
      'Notions de SQL recommandées',
    ],
    targetAudience: [
      'Data scientists juniors',
      'Data analysts évoluant vers la data science',
      'Ingénieurs souhaitant se spécialiser',
      'Consultants data',
    ],
  },

  // INTERMÉDIAIRE 4 - PAYANT
  {
    slug: 'nlp-traitement-texte',
    title: 'NLP : Traitement du langage naturel',
    shortDescription: 'Analysez et générez du texte avec l\'IA : sentiment analysis, chatbots, résumés automatiques, traduction.',
    duration: '6 semaines',
    level: 'intermediaire',
    isFree: false,
    sections: [
      {
        title: 'L\'IA qui comprend le langage',
        paragraphs: [
          'Le NLP (Natural Language Processing) est au cœur de ChatGPT, Google Translate, et des assistants vocaux.',
          'Cette formation vous enseignera les techniques pour analyser, comprendre et générer du texte.',
        ],
      },
      {
        title: 'Des bases aux transformers',
        paragraphs: [
          'Nous commencerons par les techniques classiques (tokenisation, TF-IDF, embeddings), puis explorerons les transformers et BERT.',
          'Vous créerez des applications concrètes : chatbot, analyseur de sentiment, résumeur de texte.',
        ],
      },
    ],
    modules: [
      {
        title: 'Introduction au NLP',
        description: 'Tokenisation, stemming, lemmatisation, stop words',
        duration: '2',
      },
      {
        title: 'Représentation du texte',
        description: 'Bag of Words, TF-IDF, Word2Vec, embeddings',
        duration: '3',
      },
      {
        title: 'Classification de texte',
        description: 'Sentiment analysis, catégorisation, spam detection',
        duration: '3',
      },
      {
        title: 'Modèles avancés : Transformers',
        description: 'BERT, GPT, fine-tuning de modèles pré-entraînés',
        duration: '4',
      },
      {
        title: 'Applications pratiques',
        description: 'Chatbot, résumé automatique, traduction',
        duration: '3',
      },
    ],
    objectives: [
      'Maîtriser les techniques de NLP',
      'Créer un chatbot fonctionnel',
      'Analyser le sentiment de textes',
      'Utiliser des modèles transformers pré-entraînés',
    ],
    prerequisites: [
      'Python intermédiaire',
      'Bases en Machine Learning',
      'Formation "Fondamentaux ML" recommandée',
    ],
    targetAudience: [
      'Data scientists',
      'Développeurs d\'applications conversationnelles',
      'Analystes marketing',
      'Chercheurs en linguistique computationnelle',
    ],
  },

  // INTERMÉDIAIRE 5 - PAYANT
  {
    slug: 'ia-entreprises-strategie',
    title: 'Intégrer l\'IA dans l\'entreprise : stratégie et mise en œuvre',
    shortDescription: 'Menez la transformation IA de votre entreprise. Stratégie, gouvernance, change management, ROI.',
    duration: '5 semaines',
    level: 'intermediaire',
    isFree: false,
    sections: [
      {
        title: 'Piloter la transformation IA',
        paragraphs: [
          'Intégrer l\'IA en entreprise ne se résume pas à déployer des outils. C\'est un projet stratégique qui touche tous les métiers.',
          'Cette formation vous donnera les clés pour réussir cette transformation : cadrage, gouvernance, conduite du changement.',
        ],
      },
      {
        title: 'Cas concrets d\'entreprises',
        paragraphs: [
          'Nous étudierons des cas réels d\'entreprises ayant réussi (ou raté) leur transformation IA.',
          'Vous repartirez avec une roadmap adaptable à votre contexte.',
        ],
      },
    ],
    modules: [
      {
        title: 'État des lieux et stratégie IA',
        description: 'Audit des besoins, définition de la vision, priorités',
        duration: '2',
      },
      {
        title: 'Gouvernance et éthique',
        description: 'Comité IA, règles d\'usage, conformité RGPD',
        duration: '2',
      },
      {
        title: 'Conduite du changement',
        description: 'Formation des équipes, accompagnement, gestion des résistances',
        duration: '3',
      },
      {
        title: 'Mesure du ROI',
        description: 'KPIs, suivi des bénéfices, reporting',
        duration: '2',
      },
      {
        title: 'Études de cas',
        description: 'Analyses de transformations IA réussies et ratées',
        duration: '3',
      },
    ],
    objectives: [
      'Définir une stratégie IA adaptée à l\'entreprise',
      'Mettre en place une gouvernance IA',
      'Accompagner le changement culturel',
      'Mesurer et communiquer le ROI',
    ],
    prerequisites: [
      'Expérience en gestion de projet ou management',
      'Compréhension basique de l\'IA',
      'Contexte professionnel en entreprise',
    ],
    targetAudience: [
      'Managers et dirigeants',
      'Chefs de projet transformation digitale',
      'Consultants',
      'Responsables innovation',
    ],
  },

  // ==========================================
  // FORMATIONS AVANCÉ (4 formations)
  // ==========================================

  // AVANCÉ 1 - PAYANT
  {
    slug: 'deep-learning',
    title: 'Deep Learning : réseaux de neurones profonds',
    shortDescription: 'Maîtrisez les réseaux de neurones avec PyTorch. CNN, RNN, Transformers pour vision et NLP.',
    duration: '10 semaines',
    level: 'avance',
    isFree: false,
    sections: [
      {
        title: 'L\'IA de pointe',
        paragraphs: [
          'Le Deep Learning est la technologie derrière ChatGPT, les voitures autonomes, la reconnaissance faciale.',
          'Cette formation intensive vous enseignera les architectures avancées de réseaux de neurones.',
        ],
      },
      {
        title: 'PyTorch en pratique',
        paragraphs: [
          'Nous utiliserons PyTorch, le framework préféré des chercheurs. Vous apprendrez à construire, entraîner et déployer des modèles deep learning.',
          'Projets concrets : classificateur d\'images, générateur de texte, détecteur d\'objets.',
        ],
      },
    ],
    modules: [
      {
        title: 'Fondamentaux du Deep Learning',
        description: 'Perceptron, backpropagation, optimiseurs, fonctions de perte',
        duration: '3',
      },
      {
        title: 'PyTorch et tensors',
        description: 'Manipulation de tenseurs, autograd, construction de modèles',
        duration: '3',
      },
      {
        title: 'CNN : réseaux convolutifs',
        description: 'Vision par ordinateur, classification d\'images, transfer learning',
        duration: '5',
      },
      {
        title: 'RNN et LSTM',
        description: 'Séries temporelles, génération de texte, séquences',
        duration: '4',
      },
      {
        title: 'Transformers et attention',
        description: 'Architecture des transformers, fine-tuning BERT/GPT',
        duration: '5',
      },
      {
        title: 'Projet final',
        description: 'Développement d\'un modèle complet de bout en bout',
        duration: '5',
      },
    ],
    objectives: [
      'Maîtriser PyTorch',
      'Construire des CNN pour la vision',
      'Créer des RNN pour les séquences',
      'Comprendre et utiliser les transformers',
    ],
    prerequisites: [
      'Python avancé',
      'Machine Learning maîtrisé',
      'Mathématiques (algèbre linéaire, calcul différentiel)',
    ],
    targetAudience: [
      'Data scientists expérimentés',
      'Chercheurs en IA',
      'Ingénieurs ML seniors',
      'Doctorants',
    ],
  },

  // AVANCÉ 2 - PAYANT
  {
    slug: 'computer-vision',
    title: 'Computer Vision : vision par ordinateur',
    shortDescription: 'Détection d\'objets, segmentation, reconnaissance faciale. Créez des systèmes de vision artificielle.',
    duration: '8 semaines',
    level: 'avance',
    isFree: false,
    sections: [
      {
        title: 'Apprendre aux machines à voir',
        paragraphs: [
          'La computer vision permet aux machines de comprendre le contenu des images et vidéos.',
          'Cette formation vous enseignera les techniques de détection d\'objets, segmentation, et reconnaissance faciale.',
        ],
      },
      {
        title: 'Architectures state-of-the-art',
        paragraphs: [
          'Vous travaillerez avec les architectures les plus avancées : YOLO, Mask R-CNN, ViT (Vision Transformers).',
          'Projets : système de surveillance, comptage d\'objets, diagnostic médical par image.',
        ],
      },
    ],
    modules: [
      {
        title: 'Bases de la computer vision',
        description: 'Traitement d\'image, filtres, détection de contours',
        duration: '2',
      },
      {
        title: 'Classification d\'images',
        description: 'CNN, transfer learning, data augmentation',
        duration: '3',
      },
      {
        title: 'Détection d\'objets',
        description: 'YOLO, Faster R-CNN, SSD',
        duration: '4',
      },
      {
        title: 'Segmentation',
        description: 'Sémantique, instance, panoptique avec Mask R-CNN',
        duration: '3',
      },
      {
        title: 'Vision Transformers',
        description: 'ViT, CLIP, architectures récentes',
        duration: '3',
      },
      {
        title: 'Projet industriel',
        description: 'Système de vision complet déployable',
        duration: '5',
      },
    ],
    objectives: [
      'Maîtriser les techniques de computer vision',
      'Détecter et localiser des objets dans des images',
      'Créer des systèmes de segmentation',
      'Déployer des modèles vision en production',
    ],
    prerequisites: [
      'Deep Learning maîtrisé',
      'PyTorch ou TensorFlow',
      'Formation "Deep Learning" fortement recommandée',
    ],
    targetAudience: [
      'Ingénieurs vision',
      'Data scientists spécialisés',
      'Chercheurs en IA',
      'Développeurs de systèmes autonomes',
    ],
  },

  // AVANCÉ 3 - PAYANT
  {
    slug: 'llm-gpt',
    title: 'LLM et GPT : créer et fine-tuner des modèles de langage',
    shortDescription: 'Comprenez l\'architecture des LLM, fine-tunez GPT, créez vos propres modèles de langage.',
    duration: '8 semaines',
    level: 'avance',
    isFree: false,
    sections: [
      {
        title: 'L\'architecture derrière ChatGPT',
        paragraphs: [
          'Les Large Language Models (LLM) comme GPT ont révolutionné l\'IA. Cette formation vous apprendra à les comprendre et les maîtriser.',
          'Vous découvrirez l\'architecture des transformers, l\'attention multi-têtes, et les techniques d\'entraînement.',
        ],
      },
      {
        title: 'Fine-tuning et deployment',
        paragraphs: [
          'Vous apprendrez à fine-tuner GPT sur vos propres données, à créer des assistants spécialisés, et à les déployer.',
          'Projets : chatbot d\'entreprise, assistant juridique, générateur de code spécialisé.',
        ],
      },
    ],
    modules: [
      {
        title: 'Architecture des transformers',
        description: 'Attention, encoders, decoders, positional encoding',
        duration: '3',
      },
      {
        title: 'Préentraînement de LLM',
        description: 'Tokenisation, objectifs d\'apprentissage, scaling laws',
        duration: '3',
      },
      {
        title: 'Fine-tuning de GPT',
        description: 'Techniques de fine-tuning, LoRA, RLHF',
        duration: '4',
      },
      {
        title: 'Prompting avancé',
        description: 'Few-shot, chain-of-thought, agents',
        duration: '2',
      },
      {
        title: 'Deployment et optimisation',
        description: 'Quantification, distillation, serving',
        duration: '3',
      },
      {
        title: 'Projet : LLM sur mesure',
        description: 'Fine-tuning complet pour un use case professionnel',
        duration: '5',
      },
    ],
    objectives: [
      'Comprendre l\'architecture des LLM',
      'Fine-tuner GPT sur des données métier',
      'Créer des assistants IA spécialisés',
      'Optimiser et déployer des LLM',
    ],
    prerequisites: [
      'Deep Learning maîtrisé',
      'NLP intermédiaire',
      'PyTorch avancé',
    ],
    targetAudience: [
      'ML engineers expérimentés',
      'Chercheurs en NLP',
      'Architectes IA',
      'Lead data scientists',
    ],
  },

  // AVANCÉ 4 - PAYANT
  {
    slug: 'mlops-production',
    title: 'MLOps : déployer et maintenir des modèles en production',
    shortDescription: 'CI/CD pour ML, monitoring, versioning, orchestration. Industrialisez vos modèles.',
    duration: '8 semaines',
    level: 'avance',
    isFree: false,
    sections: [
      {
        title: 'De l\'expérimentation à la production',
        paragraphs: [
          'Le MLOps est l\'ensemble des pratiques pour déployer, monitorer et maintenir des modèles ML en production.',
          'Cette formation vous enseignera les outils et méthodologies indispensables : MLflow, Kubeflow, DVC, Airflow.',
        ],
      },
      {
        title: 'DevOps rencontre ML',
        paragraphs: [
          'Vous apprendrez à mettre en place des pipelines CI/CD pour le ML, à versionner données et modèles, à monitorer les performances.',
          'Projets : pipeline ML complet, système de retraining automatique, tableau de bord de monitoring.',
        ],
      },
    ],
    modules: [
      {
        title: 'Introduction au MLOps',
        description: 'Défis de la prod ML, architecture MLOps, outils',
        duration: '2',
      },
      {
        title: 'Versioning et tracking',
        description: 'Git, DVC, MLflow, gestion des expériences',
        duration: '3',
      },
      {
        title: 'CI/CD pour ML',
        description: 'Pipelines automatisés, tests de modèles, déploiement',
        duration: '4',
      },
      {
        title: 'Orchestration et serving',
        description: 'Airflow, Kubeflow, APIs, conteneurisation',
        duration: '4',
      },
      {
        title: 'Monitoring et retraining',
        description: 'Data drift, model drift, retraining automatique',
        duration: '3',
      },
      {
        title: 'Projet : pipeline MLOps complet',
        description: 'De l\'entraînement au monitoring en production',
        duration: '4',
      },
    ],
    objectives: [
      'Maîtriser les outils MLOps essentiels',
      'Mettre en place des pipelines CI/CD pour ML',
      'Déployer des modèles en production',
      'Monitorer et maintenir des modèles',
    ],
    prerequisites: [
      'Machine Learning maîtrisé',
      'Python avancé',
      'Notions de DevOps (Docker, Git, CI/CD)',
    ],
    targetAudience: [
      'ML engineers',
      'Data engineers',
      'DevOps engineers se spécialisant en ML',
      'Architectes data/ML',
    ],
  },
];

// ==========================================
// FONCTIONS UTILITAIRES
// ==========================================

export const levelLabels: Record<FormationLevel, string> = {
  debutant: 'Débutant',
  intermediaire: 'Intermédiaire',
  avance: 'Avancé',
};

export const levelColors: Record<
  FormationLevel,
  { badge: string; bg: string; text: string }
> = {
  debutant: {
    badge: '#40E0D0',
    bg: 'rgba(64, 224, 208, 0.15)',
    text: '#00897B',
  },
  intermediaire: {
    badge: '#00A3E0',
    bg: 'rgba(0, 163, 224, 0.15)',
    text: '#0277BD',
  },
  avance: {
    badge: '#6B3FA0',
    bg: 'rgba(107, 63, 160, 0.15)',
    text: '#6B3FA0',
  },
};

export function getFormationBySlug(slug: string): Formation | undefined {
  return formations.find((f) => f.slug === slug);
}

export function filterFormations(
  level: FormationLevel | 'all'
): Formation[] {
  if (level === 'all') return formations;
  return formations.filter((f) => f.level === level);
}
