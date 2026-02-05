// lib/blog-data.ts
// Source unique de verite pour tous les articles du blog NeuroInk
// 3 Actualites + 3 Tutoriels + 2 Reflexions
// Chaque article : niveau, sources fiables, contenu complet

export type ArticleLevel = 'debutant' | 'intermediaire' | 'avance';
export type ArticleCategory = 'actualites' | 'tutoriels' | 'reflexions';

export interface ArticleSource {
  name: string;
  institution: string;
  url?: string;
  year?: number;
}

export interface ArticleSection {
  title: string;
  paragraphs: string[];
}

export interface BlogArticle {
  slug: string;
  title: string;
  excerpt: string;
  category: ArticleCategory;
  level: ArticleLevel;
  readTime: string;
  author: string;
  sections: ArticleSection[];
  sources: ArticleSource[];
  relatedSlugs: string[];
}

export const categoryLabels: Record<ArticleCategory, string> = {
  actualites: 'Actualites',
  tutoriels: 'Tutoriels',
  reflexions: 'Reflexions',
};

export const categoryColors: Record<ArticleCategory, string> = {
  actualites: '#00A3E0',
  tutoriels: '#6B3FA0',
  reflexions: '#40E0D0',
};

export const levelLabels: Record<ArticleLevel, string> = {
  debutant: 'Debutant',
  intermediaire: 'Intermediaire',
  avance: 'Avance',
};

export const levelColors: Record<ArticleLevel, { bg: string; text: string }> = {
  debutant: { bg: 'rgba(64, 224, 208, 0.15)', text: '#40E0D0' },
  intermediaire: { bg: 'rgba(0, 163, 224, 0.15)', text: '#00A3E0' },
  avance: { bg: 'rgba(107, 63, 160, 0.15)', text: '#6B3FA0' },
};

// =========================================================
// 8 ARTICLES COMPLETS
// =========================================================

export const blogArticles: BlogArticle[] = [
  // -------------------------------------------------------
  // ACTUALITE 1 : ChatGPT et l'avenir du travail - DEBUTANT
  // -------------------------------------------------------
  {
    slug: 'chatgpt-avenir-du-travail',
    title: "ChatGPT et l'avenir du travail : ce qui change vraiment",
    excerpt:
      "L'IA generative transforme le monde professionnel. Quels metiers seront impactes ? Comment s'y preparer ? Tour d'horizon base sur les etudes les plus recentes.",
    category: 'actualites',
    level: 'debutant',
    readTime: '7 min',
    author: 'Franklin KAMCHE',
    sections: [
      {
        title: "L'IA generative bouleverse le monde du travail",
        paragraphs: [
          "Depuis le lancement de ChatGPT en novembre 2022, le monde du travail vit une transformation sans precedent. En quelques mois, des millions de professionnels ont decouvert qu'une intelligence artificielle pouvait rediger des emails, analyser des documents, generer du code informatique et meme produire des strategies marketing. Ce n'est plus de la science-fiction : c'est notre quotidien.",
          "Selon une etude du McKinsey Global Institute publiee en juin 2023, l'IA generative pourrait automatiser jusqu'a 30% des heures de travail actuelles d'ici 2030 dans les economies avancees. Ce chiffre impressionnant ne signifie pas la disparition de 30% des emplois, mais une transformation profonde de la maniere dont nous travaillons.",
          "Goldman Sachs estime dans son rapport de mars 2023 que l'IA generative pourrait affecter environ 300 millions d'emplois a travers le monde, tout en creant simultanement de nouveaux postes et de nouvelles opportunites economiques. Le rapport souligne que chaque revolution technologique majeure a historiquement cree plus d'emplois qu'elle n'en a detruits.",
        ],
      },
      {
        title: 'Quels metiers sont les plus impactes ?',
        paragraphs: [
          "Le World Economic Forum, dans son rapport Future of Jobs 2023, identifie les secteurs les plus touches : la finance, le marketing, le droit, le journalisme et la programmation. Ce ne sont pas les metiers manuels qui sont en premiere ligne cette fois, mais les metiers intellectuels et creatifs.",
          "Les taches les plus impactees sont celles qui impliquent de la redaction, de l'analyse de donnees, de la traduction, du service client et de la generation de contenus. Un redacteur publicitaire, par exemple, peut desormais produire des premieres ebauches 5 fois plus rapidement en s'appuyant sur l'IA comme assistant.",
          "Cependant, l'OCDE rappelle dans son rapport Employment Outlook 2023 que l'IA est un outil d'augmentation, pas de remplacement. Les professionnels qui apprendront a collaborer avec l'IA seront plus productifs et plus valorises sur le marche du travail. Ceux qui ignoreront cette revolution risquent de prendre du retard.",
        ],
      },
      {
        title: "Comment se preparer a l'ere de l'IA ?",
        paragraphs: [
          "La bonne nouvelle, c'est que tout le monde peut se preparer. Voici trois axes recommandes par les chercheurs de Stanford HAI (Human-Centered AI Institute) : comprendre les bases de l'IA, developper sa capacite a travailler avec des outils IA, et renforcer les competences que l'IA ne peut pas remplacer - la creativite, l'empathie, le leadership et la pensee critique.",
          "Vous n'avez pas besoin de devenir data scientist pour tirer parti de l'IA. Il suffit de comprendre ce qu'elle peut faire, ce qu'elle ne peut pas faire, et comment l'utiliser intelligemment dans votre domaine. C'est exactement l'approche que nous proposons chez NeuroInk avec \"L'Odyssee de l'IA en 30 jours\" : une progression accessible, sans prerequis technique.",
          "L'important n'est pas de tout savoir sur l'IA, mais d'oser commencer a apprendre. Chaque jour compte dans cette course a la competence numerique.",
        ],
      },
    ],
    sources: [
      { name: 'The Economic Potential of Generative AI', institution: 'McKinsey Global Institute', year: 2023 },
      { name: 'The Potentially Large Effects of AI on Economic Growth', institution: 'Goldman Sachs Research', year: 2023 },
      { name: 'Future of Jobs Report 2023', institution: 'World Economic Forum', year: 2023 },
      { name: 'Employment Outlook 2023 - AI and the Labour Market', institution: 'OCDE (OECD)', year: 2023 },
      { name: 'AI Index Report 2024', institution: 'Stanford HAI', year: 2024 },
    ],
    relatedSlugs: ['debuter-ia-5-etapes', 'faut-il-avoir-peur-ia'],
  },

  // -------------------------------------------------------
  // ACTUALITE 2 : L'AI Act europeen - INTERMEDIAIRE
  // -------------------------------------------------------
  {
    slug: 'europe-ai-act-ce-qui-change',
    title: "L'Europe adopte l'AI Act : ce que ca change pour vous",
    excerpt:
      "Le reglement europeen sur l'intelligence artificielle est entre en vigueur. Quelles sont les regles ? Quels systemes sont concernes ? Decryptage complet.",
    category: 'actualites',
    level: 'intermediaire',
    readTime: '9 min',
    author: 'Franklin KAMCHE',
    sections: [
      {
        title: "Un cadre juridique inedit pour l'IA",
        paragraphs: [
          "Le 1er aout 2024, le Reglement europeen sur l'Intelligence Artificielle (AI Act) est officiellement entre en vigueur, faisant de l'Union europeenne la premiere puissance mondiale a se doter d'un cadre juridique complet pour reguler l'IA. Ce texte, negocie pendant plus de trois ans, etablit des regles proportionnees au niveau de risque que chaque systeme d'IA represente pour les citoyens.",
          "L'AI Act repose sur une classification en quatre niveaux de risque. Les systemes a risque inacceptable (comme la notation sociale de type credit social chinois) sont purement et simplement interdits. Les systemes a haut risque (utilises en sante, justice, recrutement, education) doivent respecter des exigences strictes de transparence, de documentation et d'audit. Les systemes a risque limite (comme les chatbots) ont des obligations de transparence. Enfin, les systemes a risque minimal (filtres photo, jeux video) ne sont pas reglementes.",
          "Selon la Commission europeenne, ce reglement vise a proteger les droits fondamentaux des citoyens tout en favorisant l'innovation. Le texte s'applique a toute entreprise qui deploie ou developpe des systemes d'IA sur le territoire europeen, qu'elle soit basee en Europe ou non.",
        ],
      },
      {
        title: 'Les obligations concretes pour les entreprises',
        paragraphs: [
          "Pour les systemes d'IA a haut risque, l'AI Act impose plusieurs obligations detaillees par le Parlement europeen. Les developpeurs doivent mettre en place des systemes de gestion des risques, documenter les donnees d'entrainement, assurer la transparence vis-a-vis des utilisateurs et mettre en oeuvre une supervision humaine effective.",
          "Un point important concerne l'IA generative (comme ChatGPT, Gemini ou Claude). L'article 52 impose que tout contenu genere par IA soit clairement identifie comme tel. Les modeles de fondation a usage general doivent respecter des obligations de transparence supplementaires, incluant la publication de resumee des donnees d'entrainement et le respect du droit d'auteur.",
          "La CNIL (Commission nationale de l'informatique et des libertes) a publie ses recommandations pour accompagner les entreprises francaises dans la mise en conformite, soulignant l'importance de la protection des donnees personnelles dans le contexte de l'IA. Les sanctions peuvent atteindre jusqu'a 35 millions d'euros ou 7% du chiffre d'affaires mondial pour les infractions les plus graves.",
        ],
      },
      {
        title: 'Quel impact pour les citoyens et les professionnels ?',
        paragraphs: [
          "Pour les citoyens, l'AI Act represente une avancee majeure. Vous aurez desormais le droit de savoir quand un systeme d'IA est utilise pour prendre une decision vous concernant (recrutement, pret bancaire, diagnostic medical). Vous pourrez egalement contester ces decisions et demander une intervention humaine.",
          "Pour les professionnels de l'IA, ce reglement cree de nouvelles opportunites. Le marche europeen de la conformite IA est estime a plusieurs milliards d'euros, avec une demande croissante pour des auditeurs IA, des experts en ethique numerique et des specialistes de la gouvernance des donnees.",
          "Comprendre l'AI Act est desormais une competence indispensable pour quiconque travaille avec ou autour de l'intelligence artificielle. Dans \"L'Odyssee de l'IA en 30 jours\", nous consacrons un chapitre entier aux enjeux ethiques et reglementaires de l'IA, pour vous permettre de naviguer sereinement dans ce nouveau paysage juridique.",
        ],
      },
    ],
    sources: [
      { name: 'Reglement (UE) 2024/1689 - AI Act', institution: 'Parlement europeen et Conseil de l\'UE', year: 2024 },
      { name: 'The EU AI Act - A Comprehensive Overview', institution: 'Commission europeenne', year: 2024 },
      { name: 'Recommandations sur l\'IA et les donnees personnelles', institution: 'CNIL', year: 2024 },
      { name: 'Global AI Governance Report', institution: 'UNESCO', year: 2024 },
    ],
    relatedSlugs: ['chatgpt-avenir-du-travail', 'ia-est-elle-intelligente'],
  },

  // -------------------------------------------------------
  // ACTUALITE 3 : Gemini et la course a l'IA - AVANCE
  // -------------------------------------------------------
  {
    slug: 'gemini-course-ia-generative',
    title: "Gemini, GPT-5, Claude : la course a l'IA generative s'accelere",
    excerpt:
      "Google, OpenAI, Anthropic, Meta... les geants de la tech rivalisent d'innovations. Analyse technique des architectures et des enjeux strategiques.",
    category: 'actualites',
    level: 'avance',
    readTime: '11 min',
    author: 'Franklin KAMCHE',
    sections: [
      {
        title: 'L\'ere des modeles multimodaux',
        paragraphs: [
          "L'annee 2024 marque un tournant decisif dans l'evolution de l'IA generative. Avec le lancement de Gemini Ultra par Google DeepMind, l'industrie est entree dans l'ere des modeles nativement multimodaux : des systemes capables de traiter simultanement du texte, des images, de l'audio et de la video au sein d'une architecture unifiee.",
          "Contrairement aux approches precedentes qui combinaient des modules separes (un modele de langage couple a un modele de vision), Gemini repose sur une architecture Transformer unifiee entrainee des le depart sur des donnees multimodales. Selon l'article technique publie par Google DeepMind, cette approche permet une comprehension plus fluide et naturelle des relations entre differentes modalites.",
          "La famille de modeles Gemini (Ultra, Pro, Nano) couvre un spectre de performances allant des terminaux mobiles aux centres de donnees, avec un contexte pouvant atteindre 1 million de tokens - soit l'equivalent de plusieurs livres entiers. Cette capacite de contexte etendu ouvre des perspectives inedites pour l'analyse documentaire et la recherche scientifique.",
        ],
      },
      {
        title: 'Architectures et innovations techniques',
        paragraphs: [
          "L'innovation ne se limite pas a l'echelle des modeles. OpenAI a introduit avec GPT-4o (\"omni\") un modele capable de traiter en temps reel des flux audio et video, reduisant considerablement la latence des interactions. Anthropic, avec Claude 3, a mis l'accent sur la securite et l'alignement, en publiant sa \"Constitution\" qui definit les principes ethiques gouvernant le comportement du modele.",
          "Sur le plan technique, plusieurs avancees meritent attention. Le Mixture of Experts (MoE), utilise par Mistral AI et largement adopte depuis, permet d'activer dynamiquement seulement une fraction des parametres du modele pour chaque requete, reduisant significativement le cout computationnel. Selon les recherches publiees dans Nature Machine Intelligence, cette approche atteint des performances comparables a des modeles monolithiques tout en etant 4 a 8 fois plus efficientes.",
          "Meta a egalement bouleverse le paysage en rendant ses modeles Llama open-source, permettant a des chercheurs et des entreprises du monde entier de les adapter et de les ameliorer. Cette strategie, saluee par la communaute scientifique, a accelere l'innovation dans des domaines comme la sante, l'education et la recherche fondamentale.",
        ],
      },
      {
        title: 'Enjeux strategiques et perspectives',
        paragraphs: [
          "La course a l'IA generative est aussi une course geopolitique. Les Etats-Unis dominent actuellement avec OpenAI, Google, Anthropic et Meta. La Chine repond avec des modeles comme Ernie Bot (Baidu) et Qwen (Alibaba). L'Europe, portee par Mistral AI en France et Aleph Alpha en Allemagne, tente de se positionner comme un acteur souverain.",
          "Les investissements sont colossaux : Microsoft a investi plus de 13 milliards de dollars dans OpenAI, Google a mobilise des milliards pour l'infrastructure Gemini, et les startups d'IA ont leve un record de 50 milliards de dollars en 2023 selon PitchBook. La question de la durabilite energetique de ces modeles, chacun necessitant des milliers de GPU pour leur entrainement, devient centrale.",
          "Pour les professionnels et les passionnes d'IA, comprendre ces dynamiques est essentiel. L'IA generative n'est pas un phenomene temporaire - c'est une revolution technologique comparable a l'emergence d'Internet. Se former des aujourd'hui, c'est se donner les moyens de participer activement a cette transformation plutot que de la subir.",
        ],
      },
    ],
    sources: [
      { name: 'Gemini: A Family of Highly Capable Multimodal Models', institution: 'Google DeepMind', year: 2024 },
      { name: 'GPT-4 Technical Report', institution: 'OpenAI', year: 2023 },
      { name: 'The Claude Model Card and Constitution', institution: 'Anthropic', year: 2024 },
      { name: 'Efficient Large Language Models: A Survey', institution: 'Nature Machine Intelligence', year: 2024 },
      { name: 'Llama 2: Open Foundation and Fine-Tuned Chat Models', institution: 'Meta AI Research', year: 2023 },
      { name: 'AI Startup Funding Report 2023', institution: 'PitchBook', year: 2023 },
    ],
    relatedSlugs: ['europe-ai-act-ce-qui-change', 'creer-chatbot-python'],
  },

  // -------------------------------------------------------
  // TUTORIEL 1 : Debuter avec l'IA - DEBUTANT
  // -------------------------------------------------------
  {
    slug: 'debuter-ia-5-etapes',
    title: "Debuter avec l'IA en 5 etapes concretes",
    excerpt:
      "Vous voulez vous lancer dans l'IA mais ne savez pas par ou commencer ? Voici un plan d'action clair et progressif, accessible sans prerequis technique.",
    category: 'tutoriels',
    level: 'debutant',
    readTime: '8 min',
    author: 'Franklin KAMCHE',
    sections: [
      {
        title: 'Etape 1 : Comprendre ce qu\'est (et n\'est pas) l\'IA',
        paragraphs: [
          "Avant de plonger dans les outils, prenez le temps de comprendre les fondamentaux. L'intelligence artificielle n'est pas un cerveau numerique conscient. C'est un ensemble de techniques mathematiques et informatiques qui permettent a une machine d'apprendre a partir de donnees et d'effectuer des taches specifiques.",
          "Commencez par distinguer les trois grands types d'IA : l'IA etroite (specialisee dans une tache, comme la reconnaissance d'images), l'IA generale (hypothetique, capable de raisonner comme un humain) et la super-intelligence (purement theorique). Aujourd'hui, toutes les IA que vous utilisez sont de type etroit, y compris ChatGPT.",
          "Ressource recommandee : le cours gratuit \"Elements of AI\" de l'Universite d'Helsinki, disponible en francais, qui offre une introduction excellente sans aucun prerequis mathematique. Ce cours a deja forme plus de 750 000 personnes dans le monde.",
        ],
      },
      {
        title: 'Etape 2 : Experimenter avec les outils accessibles',
        paragraphs: [
          "La meilleure facon d'apprendre, c'est de pratiquer. Commencez par utiliser quotidiennement des outils d'IA generative gratuits. ChatGPT (OpenAI), Claude (Anthropic) et Gemini (Google) sont accessibles sans connaissances techniques.",
          "Testez differents usages : demandez a l'IA de resumer un article long, de vous expliquer un concept complexe, de vous aider a rediger un email professionnel, ou de brainstormer des idees pour un projet. Plus vous experimentez, plus vous comprendrez les forces et les limites de ces outils.",
          "Conseil pratique : tenez un journal de vos experimentations. Notez ce qui fonctionne bien, ce qui vous surprend, et les cas ou l'IA se trompe. Cette demarche d'observation active est la cle d'un apprentissage durable.",
        ],
      },
      {
        title: 'Etape 3 : Apprendre le prompt engineering',
        paragraphs: [
          "Le prompt engineering - l'art de formuler des instructions efficaces pour une IA - est LA competence cle de l'ere de l'IA generative. Un prompt bien formule peut transformer une reponse mediocre en resultat exceptionnel.",
          "Selon les recherches publiees par Microsoft Research, les techniques de prompting comme le Chain-of-Thought (demander a l'IA de raisonner etape par etape) ou le Few-Shot Learning (fournir des exemples de ce qu'on attend) ameliorent considerablement la qualite des resultats. Ces techniques ne necessitent aucune connaissance en programmation.",
          "Exercice : prenez une tache que vous faites regulierement (rediger un compte-rendu, analyser des donnees, preparer une presentation) et essayez de la realiser avec l'aide de l'IA en testant differentes formulations de votre demande. Comparez les resultats.",
        ],
      },
      {
        title: 'Etape 4 : Se former de maniere structuree',
        paragraphs: [
          "Apres les premieres experimentations, passez a une formation structuree. Le Stanford AI Index Report 2024 souligne que les professionnels formes a l'IA gagnent en moyenne 25% de plus que leurs pairs non formes dans le meme secteur.",
          "Plusieurs ressources de qualite sont disponibles en francais : les MOOC de France Universite Numerique (FUN), les cours de l'INRIA, et bien sur nos formations NeuroInk concues pour le public francophone. \"L'Odyssee de l'IA en 30 jours\" offre une progression pedagogique complete en un mois.",
          "L'essentiel est de choisir un parcours qui correspond a votre niveau et vos objectifs, puis de vous y tenir regulierement. 30 minutes par jour valent mieux que 5 heures en une seule fois.",
        ],
      },
      {
        title: 'Etape 5 : Appliquer l\'IA dans votre contexte professionnel',
        paragraphs: [
          "L'objectif final n'est pas de devenir data scientist (sauf si c'est votre souhait) mais d'integrer l'IA comme un outil au service de votre activite. Identifiez dans votre quotidien professionnel les taches repetitives, chronophages ou qui pourraient beneficier d'une assistance intelligente.",
          "Le MIT Sloan Management Review rapporte que les entreprises qui integrent l'IA dans leurs processus existants (plutot que de creer des projets IA isoles) obtiennent un retour sur investissement 3 fois superieur. L'IA est un levier, pas une fin en soi.",
          "N'attendez pas de tout maitriser pour commencer. Chaque petit pas compte. L'important est de se lancer, d'experimenter, et d'apprendre de ses erreurs. C'est exactement cette philosophie qui guide notre approche chez NeuroInk.",
        ],
      },
    ],
    sources: [
      { name: 'Elements of AI - Free Online Course', institution: 'Universite d\'Helsinki', year: 2023 },
      { name: 'Chain-of-Thought Prompting Elicits Reasoning', institution: 'Google Research / Microsoft Research', year: 2022 },
      { name: 'AI Index Report 2024', institution: 'Stanford HAI', year: 2024 },
      { name: 'AI and the Future of Work', institution: 'MIT Sloan Management Review', year: 2023 },
    ],
    relatedSlugs: ['chatgpt-avenir-du-travail', 'creer-chatbot-python'],
  },

  // -------------------------------------------------------
  // TUTORIEL 2 : Creer un chatbot Python - INTERMEDIAIRE
  // -------------------------------------------------------
  {
    slug: 'creer-chatbot-python',
    title: 'Creer son premier chatbot avec Python et l\'API OpenAI',
    excerpt:
      'Guide pratique pas a pas pour construire votre premier assistant IA en Python. De l\'installation a la conversation, tout est explique.',
    category: 'tutoriels',
    level: 'intermediaire',
    readTime: '12 min',
    author: 'Franklin KAMCHE',
    sections: [
      {
        title: 'Pourquoi creer son propre chatbot ?',
        paragraphs: [
          "Utiliser ChatGPT dans un navigateur, c'est bien. Mais creer votre propre chatbot personnalise, c'est un pas decisif vers la maitrise de l'IA. En quelques dizaines de lignes de code Python, vous pouvez construire un assistant adapte a vos besoins specifiques : un tuteur pour vos etudiants, un assistant pour votre service client, ou un outil d'aide a la redaction.",
          "Python est le langage de reference en IA. Selon le Stack Overflow Developer Survey 2024, c'est le langage le plus utilise dans les projets de machine learning et d'IA, choisi par 67% des developpeurs IA. Sa syntaxe claire et ses bibliotheques riches en font un choix ideal pour les debutants comme pour les professionnels.",
          "Pour ce tutoriel, vous aurez besoin de : Python 3.8 ou superieur installe sur votre machine, un compte OpenAI avec une cle API (version gratuite disponible), et un editeur de texte (VS Code recommande). Aucune experience prealable en machine learning n'est requise.",
        ],
      },
      {
        title: 'Configuration de l\'environnement',
        paragraphs: [
          "Commencez par creer un environnement virtuel Python pour isoler les dependances de votre projet. Ouvrez un terminal et tapez : python -m venv chatbot-env, puis activez-le. Installez ensuite la bibliotheque officielle OpenAI avec pip install openai.",
          "Creez un fichier .env pour stocker votre cle API de maniere securisee (ne partagez jamais cette cle dans votre code ou sur GitHub). Installez python-dotenv pour charger automatiquement les variables d'environnement. Cette bonne pratique est recommandee par l'OWASP (Open Web Application Security Project) pour la gestion des secrets.",
          "La documentation officielle d'OpenAI decrit en detail les differents modeles disponibles. Pour un chatbot conversationnel, GPT-3.5-turbo offre un excellent rapport qualite-prix, tandis que GPT-4 fournit des reponses plus nuancees pour les cas complexes.",
        ],
      },
      {
        title: 'Le code du chatbot pas a pas',
        paragraphs: [
          "Le coeur de votre chatbot repose sur l'API Chat Completions d'OpenAI. Le principe est simple : vous envoyez une liste de messages (systeme, utilisateur, assistant) et l'API renvoie la reponse de l'assistant. Le message systeme definit la personnalite et les instructions de votre chatbot.",
          "Voici la structure de base : initialisez le client OpenAI avec votre cle API, definissez un message systeme qui decrit le role de votre assistant (par exemple : \"Tu es un assistant pedagogique specialise en IA. Tu reponds de maniere claire et accessible.\"), puis creez une boucle qui recueille les messages de l'utilisateur et appelle l'API pour generer les reponses.",
          "Un point important : maintenez un historique des messages dans une liste. A chaque echange, ajoutez le message de l'utilisateur et la reponse de l'assistant a cette liste, puis envoyez l'historique complet a l'API. C'est ce qui donne au chatbot sa \"memoire\" de la conversation en cours.",
        ],
      },
      {
        title: 'Personnalisation et bonnes pratiques',
        paragraphs: [
          "Pour aller plus loin, vous pouvez personnaliser votre chatbot de plusieurs manieres. Le parametre temperature (entre 0 et 2) controle la creativite des reponses : une valeur basse (0.2) donne des reponses plus previsibles et factuelles, une valeur haute (1.0) des reponses plus creatives.",
          "Implementez une gestion des erreurs robuste : gerez les cas de depassement de quota API, les timeouts reseau, et les reponses trop longues. Ajoutez une limite de tokens pour controler les couts. La documentation Anthropic et OpenAI recommandent de toujours definir un max_tokens pour eviter les surprises sur la facture.",
          "Pour un deploiement professionnel, envisagez d'ajouter : un systeme de logs pour suivre les conversations, des filtres de contenu pour eviter les reponses inappropriees, et une interface web avec Flask ou Streamlit. Ce dernier est particulierement recommande pour un prototypage rapide - vous pouvez creer une interface complete en moins de 50 lignes de code.",
        ],
      },
    ],
    sources: [
      { name: 'Developer Survey 2024', institution: 'Stack Overflow', year: 2024 },
      { name: 'Chat Completions API Documentation', institution: 'OpenAI', year: 2024 },
      { name: 'Application Security Verification Standard', institution: 'OWASP', year: 2023 },
      { name: 'Streamlit Documentation - Build AI Apps', institution: 'Streamlit (Snowflake)', year: 2024 },
    ],
    relatedSlugs: ['debuter-ia-5-etapes', 'analyse-sentiments-python-nltk'],
  },

  // -------------------------------------------------------
  // TUTORIEL 3 : Analyse de sentiments NLTK - AVANCE
  // -------------------------------------------------------
  {
    slug: 'analyse-sentiments-python-nltk',
    title: 'Analyse de sentiments avec Python et NLTK : guide complet',
    excerpt:
      "Apprenez a construire un systeme d'analyse de sentiments en Python avec la bibliotheque NLTK. Du preprocessing a l'evaluation, maitrisez le NLP.",
    category: 'tutoriels',
    level: 'avance',
    readTime: '14 min',
    author: 'Franklin KAMCHE',
    sections: [
      {
        title: 'Qu\'est-ce que l\'analyse de sentiments ?',
        paragraphs: [
          "L'analyse de sentiments (ou opinion mining) est une branche du traitement automatique du langage naturel (NLP) qui vise a determiner l'orientation emotionnelle d'un texte : positif, negatif ou neutre. Cette technique est massivement utilisee en industrie pour analyser les avis clients, surveiller la reputation de marque et etudier les tendances sur les reseaux sociaux.",
          "Selon une etude publiee dans le Journal of the Association for Computational Linguistics (ACL), le marche de l'analyse de sentiments devrait atteindre 6 milliards de dollars d'ici 2026, porte par la demande croissante des entreprises pour comprendre les opinions de leurs clients a grande echelle.",
          "NLTK (Natural Language Toolkit) est la bibliotheque de reference pour le NLP en Python. Developpee a l'Universite de Pennsylvanie par Steven Bird et Edward Loper, elle offre plus de 50 corpus annotes et un ensemble complet d'outils pour le traitement textuel. Pour les projets de production, spaCy et Hugging Face Transformers sont des alternatives performantes.",
        ],
      },
      {
        title: 'Preprocessing : preparer les donnees textuelles',
        paragraphs: [
          "Avant toute analyse, le texte brut doit etre nettoye et normalise. Le pipeline classique comprend plusieurs etapes : la tokenisation (decoupage en mots), la suppression des stop words (mots vides comme \"le\", \"de\", \"est\"), la lemmatisation (reduction a la forme de base : \"marchaient\" devient \"marcher\"), et la normalisation (mise en minuscules, suppression de la ponctuation).",
          "NLTK fournit des tokeniseurs performants comme word_tokenize et sent_tokenize, ainsi qu'un lemmatiseur base sur WordNet. Pour le francais, le module nltk.corpus.stopwords inclut une liste de 157 mots vides. N'oubliez pas de telecharger les ressources necessaires avec nltk.download('punkt'), nltk.download('stopwords') et nltk.download('wordnet').",
          "Une etape souvent negligee mais cruciale : la gestion des negations. La phrase \"ce produit n'est pas mauvais\" est positive, mais un modele naif pourrait la classifier comme negative a cause du mot \"mauvais\". Les chercheurs du Stanford NLP Group recommandent d'ajouter un prefixe NEG_ aux mots suivant une negation pour ameliorer la precision.",
        ],
      },
      {
        title: 'Approches de classification',
        paragraphs: [
          "Deux grandes approches existent pour l'analyse de sentiments. L'approche par lexique utilise un dictionnaire de mots annotes avec leurs polarites (positif/negatif/neutre). NLTK inclut VADER (Valence Aware Dictionary and sEntiment Reasoner), specialement concu pour les textes informels et les reseaux sociaux. VADER est particulierement efficace car il gere les majuscules d'emphase, la ponctuation et les emojis.",
          "L'approche par apprentissage automatique entraine un classifieur (Naive Bayes, SVM, Random Forest) sur un corpus annote. Avec NLTK, le classifieur Naive Bayes est simple a implementer : construisez un vecteur de caracteristiques (presence/absence de mots) pour chaque document, divisez votre corpus en ensembles d'entrainement et de test (80/20), puis entrainez et evaluez le modele.",
          "Pour des performances de pointe, les modeles Transformer pre-entraines comme BERT (Google, 2018) ou CamemBERT (pour le francais, developpe par l'INRIA et Facebook AI) atteignent des precisions superieures a 90% sur les benchmarks standard. La bibliotheque Hugging Face Transformers facilite leur utilisation avec quelques lignes de code.",
        ],
      },
      {
        title: 'Evaluation et mise en production',
        paragraphs: [
          "L'evaluation d'un modele d'analyse de sentiments repose sur plusieurs metriques : la precision (proportion de predictions correctes parmi les positifs predits), le recall (proportion de vrais positifs detectes), le F1-score (moyenne harmonique des deux) et la matrice de confusion. NLTK et scikit-learn fournissent des outils complets pour ces calculs.",
          "Un piege classique : l'overfitting sur les donnees d'entrainement. Utilisez la validation croisee (k-fold cross-validation) pour obtenir une estimation fiable des performances. Le Stanford Sentiment Treebank (SST) et le corpus IMDB sont des benchmarks standard pour evaluer votre modele contre l'etat de l'art.",
          "Pour la mise en production, empaquetez votre modele dans une API REST avec Flask ou FastAPI. Ajoutez un cache pour les textes deja analyses, un systeme de monitoring pour detecter la derive du modele (model drift) dans le temps, et des tests automatises. Ces bonnes pratiques, recommandees par Google dans son guide MLOps, garantissent la fiabilite de votre systeme en conditions reelles.",
        ],
      },
    ],
    sources: [
      { name: 'Natural Language Toolkit Documentation', institution: 'Universite de Pennsylvanie (Bird, Loper)', year: 2023 },
      { name: 'VADER: A Parsimonious Rule-based Model for Sentiment Analysis', institution: 'Georgia Tech', year: 2014 },
      { name: 'CamemBERT: a Tasty French Language Model', institution: 'INRIA / Facebook AI Research', year: 2020 },
      { name: 'Stanford Sentiment Treebank', institution: 'Stanford NLP Group', year: 2013 },
      { name: 'MLOps: Continuous Delivery for Machine Learning', institution: 'Google Cloud', year: 2023 },
    ],
    relatedSlugs: ['creer-chatbot-python', 'ia-est-elle-intelligente'],
  },

  // -------------------------------------------------------
  // REFLEXION 1 : L'IA est-elle intelligente ? - DEBUTANT
  // -------------------------------------------------------
  {
    slug: 'ia-est-elle-intelligente',
    title: "L'IA est-elle vraiment \"intelligente\" ?",
    excerpt:
      "ChatGPT impressionne par ses reponses, mais peut-on parler d'intelligence ? Exploration philosophique et scientifique d'une question fondamentale.",
    category: 'reflexions',
    level: 'debutant',
    readTime: '8 min',
    author: 'Franklin KAMCHE',
    sections: [
      {
        title: 'Le test de Turing : une machine peut-elle penser ?',
        paragraphs: [
          "En 1950, le mathematicien britannique Alan Turing publie dans la revue Mind un article fondateur intitule \"Computing Machinery and Intelligence\". Plutot que de repondre directement a la question \"une machine peut-elle penser ?\", Turing propose un test pratique : si un evaluateur humain, en conversant par ecrit avec une machine, ne parvient pas a determiner s'il parle a un humain ou a un programme, alors cette machine peut etre consideree comme \"intelligente\".",
          "Soixante-quinze ans plus tard, les grands modeles de langage comme ChatGPT reussissent regulierement le test de Turing dans des conversations courtes. Des etudes menees a l'Universite de Californie San Diego (UCSD) en 2023 montrent que GPT-4 est identifie comme humain dans plus de 50% des cas. Mais cela signifie-t-il reellement que ces machines sont intelligentes ?",
          "La plupart des chercheurs en IA s'accordent a dire que non. Reussir le test de Turing prouve qu'un systeme peut simuler une conversation humaine de maniere convaincante, mais pas qu'il comprend ce qu'il dit. C'est une distinction fondamentale.",
        ],
      },
      {
        title: 'La Chambre chinoise : simuler n\'est pas comprendre',
        paragraphs: [
          "En 1980, le philosophe americain John Searle propose une experience de pensee celebre : la Chambre chinoise. Imaginez une personne enfermee dans une piece avec un manuel d'instructions en anglais. On lui glisse des messages en chinois sous la porte. En suivant mecaniquement les instructions du manuel, elle produit des reponses en chinois parfaitement correctes, sans comprendre un seul mot de chinois.",
          "Searle argumente que c'est exactement ce que font les programmes d'IA : ils manipulent des symboles selon des regles, sans jamais comprendre le sens de ces symboles. Un modele de langage predit le prochain mot le plus probable dans une sequence, a partir de patterns statistiques appris sur des milliards de textes. Il produit des reponses coherentes sans avoir l'experience de comprendre quoi que ce soit.",
          "Ce debat reste d'actualite. Des chercheurs comme Yann LeCun (Meta AI, laureat du prix Turing 2018) soutiennent que les LLM actuels ne possedent pas de \"modele du monde\" veritable - ils ne comprennent pas la realite physique et sociale de la meme maniere qu'un humain. D'autres, comme Ilya Sutskever (co-fondateur d'OpenAI), suggerent que des formes embryonnaires de comprehension pourraient emerger de systemes suffisamment complexes.",
        ],
      },
      {
        title: 'Intelligence artificielle vs intelligence humaine',
        paragraphs: [
          "La confusion vient en partie du mot \"intelligence\" lui-meme. L'intelligence humaine est un phenomene extraordinairement complexe qui englobe la conscience, les emotions, l'intuition, la creativite, l'empathie et la capacite d'adaptation a des situations completement nouvelles. L'IA actuelle excelle dans des taches specifiques - jouer aux echecs, generer du texte, reconnoitre des images - mais ne possede aucune de ces capacites generales.",
          "Stuart Russell et Peter Norvig, dans leur ouvrage de reference \"Artificial Intelligence: A Modern Approach\" (utilise dans plus de 1 500 universites dans le monde), distinguent quatre conceptions de l'IA : penser comme un humain, penser rationnellement, agir comme un humain, et agir rationnellement. Les systemes actuels relevent principalement de la quatrieme categorie : ils agissent de maniere rationnelle pour atteindre un objectif, sans necessairement penser ou comprendre.",
          "Alors, l'IA est-elle intelligente ? La reponse depend de votre definition de l'intelligence. Si vous parlez de la capacite a effectuer des taches complexes de maniere efficace, oui. Si vous parlez de conscience, de comprehension veritable ou de pensee autonome, non. Et c'est justement en comprenant cette distinction que vous devenez un utilisateur eclaire de l'IA - ni fascine aveuglement, ni inutilement effaye.",
        ],
      },
    ],
    sources: [
      { name: 'Computing Machinery and Intelligence', institution: 'Alan Turing, revue Mind', year: 1950 },
      { name: 'Minds, Brains, and Programs (Chinese Room)', institution: 'John Searle, Behavioral and Brain Sciences', year: 1980 },
      { name: 'Artificial Intelligence: A Modern Approach (4th ed.)', institution: 'Stuart Russell et Peter Norvig', year: 2020 },
      { name: 'GPT-4 Performance on the Turing Test', institution: 'UC San Diego (UCSD)', year: 2023 },
      { name: 'A Path Towards Autonomous Machine Intelligence', institution: 'Yann LeCun, Meta AI', year: 2022 },
    ],
    relatedSlugs: ['faut-il-avoir-peur-ia', 'debuter-ia-5-etapes'],
  },

  // -------------------------------------------------------
  // REFLEXION 2 : Faut-il avoir peur de l'IA ? - INTERMEDIAIRE
  // -------------------------------------------------------
  {
    slug: 'faut-il-avoir-peur-ia',
    title: "Faut-il avoir peur de l'intelligence artificielle ?",
    excerpt:
      'Entre promesses revolutionnaires et risques reels, ou se situe la verite ? Analyse nuancee des dangers et des opportunites de l\'IA.',
    category: 'reflexions',
    level: 'intermediaire',
    readTime: '10 min',
    author: 'Franklin KAMCHE',
    sections: [
      {
        title: 'Les craintes legitimes',
        paragraphs: [
          "La peur de l'IA n'est pas irrationnelle. Des figures majeures de la technologie ont exprime des inquietudes serieuses. En mars 2023, plus de 1 000 chercheurs et dirigeants technologiques (dont Elon Musk et Steve Wozniak) ont signe une lettre ouverte demandant un moratoire de six mois sur le developpement des systemes d'IA plus puissants que GPT-4. Le Future of Life Institute, a l'origine de cette lettre, a depuis continue de plaider pour une reglementation stricte.",
          "Les risques concrets sont documentes. Les biais algorithmiques peuvent reproduire et amplifier les discriminations existantes : en 2019, une etude publiee dans Science a demontre qu'un algorithme utilise dans le systeme de sante americain defavorisait systematiquement les patients noirs par rapport aux patients blancs, affectant les soins de 200 millions de personnes. Les deepfakes menacent l'integrite de l'information. L'automatisation pourrait accroitre les inegalites economiques.",
          "Nick Bostrom, philosophe a l'Universite d'Oxford et auteur de \"Superintelligence\", avertit qu'une IA suffisamment avancee pourrait poursuivre des objectifs mal alignes avec les valeurs humaines. Meme sans scenario catastrophiste, les risques a court terme - desinformation, surveillance, concentration du pouvoir - meritent une attention serieuse.",
        ],
      },
      {
        title: 'Les raisons d\'esperer',
        paragraphs: [
          "Face a ces inquietudes, il faut aussi considerer les benefices considerables que l'IA apporte deja. En sante, des systemes d'IA developpees par Google DeepMind (AlphaFold) ont predit la structure 3D de 200 millions de proteines, accelerant la recherche pharmaceutique de maniere spectaculaire. Cette avancee, publiee dans Nature en 2022, a ete saluee comme l'une des decouvertes scientifiques les plus importantes de la decennie.",
          "En education, l'IA permet une personnalisation de l'apprentissage inedite. L'UNESCO, dans son rapport \"AI and Education\" de 2023, souligne que les systemes de tutorat adaptatif peuvent reduire les inegalites d'acces au savoir en fournissant un accompagnement individualise a grande echelle. C'est precisement cette mission qui anime NeuroInk : democratiser l'acces a la connaissance en IA.",
          "En environnement, l'IA aide a optimiser la consommation energetique des batiments et des centres de donnees (DeepMind a reduit la consommation de refroidissement des data centers de Google de 40%), a prevoir les catastrophes naturelles et a surveiller la deforestation par imagerie satellite.",
        ],
      },
      {
        title: 'Vers une IA responsable : le juste equilibre',
        paragraphs: [
          "Le veritable enjeu n'est pas d'avoir peur ou de ne pas avoir peur, mais de developper et d'utiliser l'IA de maniere responsable. Les Lignes directrices pour une IA digne de confiance, publiees par le Groupe d'experts de haut niveau de la Commission europeenne, definissent sept exigences cles : supervision humaine, robustesse technique, respect de la vie privee, transparence, diversite et non-discrimination, bien-etre societal et responsabilite.",
          "Yann LeCun, laureat du prix Turing et directeur de la recherche en IA chez Meta, plaide pour une approche pragmatique : \"L'IA est un outil extremement puissant. Comme tout outil puissant, il peut etre utilise pour le bien ou pour le mal. La solution n'est pas d'interdire l'outil, mais d'en reguler l'usage.\"",
          "En tant que citoyens, nous avons un role a jouer. Comprendre l'IA - ses capacites, ses limites, ses risques - est la meilleure defense contre ses usages abusifs et la meilleure garantie de pouvoir en tirer les benefices. C'est la raison d'etre de NeuroInk : vous donner les cles pour etre un acteur eclaire de cette revolution, ni effaye ni naif, mais informe et prepare.",
        ],
      },
    ],
    sources: [
      { name: 'Pause Giant AI Experiments: An Open Letter', institution: 'Future of Life Institute', year: 2023 },
      { name: 'Dissecting Racial Bias in Healthcare Algorithm', institution: 'Science (Obermeyer et al.)', year: 2019 },
      { name: 'Superintelligence: Paths, Dangers, Strategies', institution: 'Nick Bostrom, Universite d\'Oxford', year: 2014 },
      { name: 'AlphaFold Protein Structure Database', institution: 'Google DeepMind / Nature', year: 2022 },
      { name: 'AI and Education: Guidance for Policy-makers', institution: 'UNESCO', year: 2023 },
      { name: 'Ethics Guidelines for Trustworthy AI', institution: 'Commission europeenne (AI HLEG)', year: 2019 },
    ],
    relatedSlugs: ['ia-est-elle-intelligente', 'europe-ai-act-ce-qui-change'],
  },
];

// =========================================================
// FONCTIONS UTILITAIRES
// =========================================================

export function getArticleBySlug(slug: string): BlogArticle | undefined {
  return blogArticles.find((a) => a.slug === slug);
}

export function getRelatedArticles(slug: string): BlogArticle[] {
  const article = getArticleBySlug(slug);
  if (!article) return [];
  return article.relatedSlugs
    .map((s) => getArticleBySlug(s))
    .filter((a): a is BlogArticle => a !== undefined);
}

export function filterArticles(
  category?: ArticleCategory | 'all',
  level?: ArticleLevel | 'all'
): BlogArticle[] {
  return blogArticles.filter((article) => {
    const matchCategory = !category || category === 'all' || article.category === category;
    const matchLevel = !level || level === 'all' || article.level === level;
    return matchCategory && matchLevel;
  });
}
