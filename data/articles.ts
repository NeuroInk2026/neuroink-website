export interface Article {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  coverImage: string;
  author: string;
  category: 'actualites' | 'tutoriels' | 'reflexions' | 'interviews';
  tags: string[];
  isPublished: boolean;
}

export const categories = [
  { value: 'all', label: 'Tous' },
  { value: 'actualites', label: 'Actualités' },
  { value: 'tutoriels', label: 'Tutoriels' },
  { value: 'reflexions', label: 'Réflexions' },
  { value: 'interviews', label: 'Interviews' },
];

export const categoryColors: Record<string, string> = {
  actualites: '#00A3E0',
  tutoriels: '#40E0D0',
  reflexions: '#6B3FA0',
  interviews: '#F59E0B',
};

export const categoryLabels: Record<string, string> = {
  actualites: 'Actualités',
  tutoriels: 'Tutoriels',
  reflexions: 'Réflexions',
  interviews: 'Interviews',
};

// ===================================================================
// ARTICLES - Seront gérés via Sanity CMS en Phase 5
// Pour modifier/ajouter/supprimer : modifier ce fichier
// En Phase 5 : tout se fera via l'admin sans toucher au code
// ===================================================================

export const allArticles: Article[] = [
  // ===================== ACTUALITÉS (4) =====================
  {
    id: '1',
    title: 'ChatGPT, Gemini, Claude : quel assistant IA choisir ?',
    slug: 'quel-assistant-ia-choisir',
    excerpt: 'Comparatif détaillé des principaux assistants IA du marché. Forces, faiblesses et cas d\'usage pour vous aider à faire le bon choix.',
    content: `L'accessibilité des assistants IA ne cesse de progresser. Trois acteurs majeurs dominent le marché : ChatGPT d'OpenAI, Gemini de Google et Claude d'Anthropic. Mais lequel choisir ?

**ChatGPT (OpenAI)**
Le pionnier du grand public reste une référence. Avec ses capacités multimodales, ChatGPT excelle dans la rédaction, l'analyse de données et la génération de code. Son écosystème de plugins et le GPT Store en font un outil très polyvalent.

**Gemini (Google)**
L'atout majeur de Gemini réside dans son intégration native avec l'écosystème Google. Recherche web en temps réel, connexion avec Gmail, Google Docs et Google Maps : Gemini brille dans les tâches du quotidien et la recherche d'informations actualisées.

**Claude (Anthropic)**
Claude se distingue par la qualité de son raisonnement et sa capacité à traiter de longs documents. Son approche axée sur la sécurité et l'éthique en fait un choix privilégié pour les entreprises soucieuses de la fiabilité de l'IA.

**Notre recommandation**
Il n'existe pas de "meilleur" assistant universel. Le choix dépend de votre usage principal. Pour la rédaction créative, ChatGPT. Pour la recherche quotidienne, Gemini. Pour l'analyse approfondie, Claude. L'idéal ? Les combiner selon vos besoins.`,
    coverImage: '/images/blog/assistant-ia.jpg',
    author: 'Franklin KAMCHE',
    category: 'actualites',
    tags: ['ChatGPT', 'Gemini', 'Claude', 'Comparatif'],
    isPublished: true,
  },
  {
    id: '2',
    title: 'L\'IA générative transforme le monde de l\'entreprise',
    slug: 'ia-generative-entreprise',
    excerpt: 'Comment les entreprises françaises adoptent l\'IA générative pour transformer leurs processus, de la relation client à la R&D.',
    content: `L'IA générative n'est plus une expérimentation : elle est devenue un outil stratégique pour les entreprises. Selon une étude McKinsey, 65% des entreprises utilisent désormais régulièrement l'IA générative dans au moins une fonction.

**Relation client réinventée**
Les chatbots intelligents remplacent les FAQ statiques. Ils comprennent le contexte, s'adaptent au ton du client et résolvent des problèmes complexes. Résultat : satisfaction client en hausse de 25% en moyenne.

**Création de contenu à grande échelle**
Marketing, communication, documentation technique : l'IA générative permet de produire du contenu de qualité en une fraction du temps habituel. Les équipes se concentrent sur la stratégie et la créativité plutôt que sur l'exécution.

**R&D accélérée**
Dans la pharmacie, l'IA aide à identifier des molécules prometteuses. Dans l'ingénierie, elle optimise les designs. Le temps de développement se réduit considérablement.

**Les défis à relever**
Qualité et fiabilité des contenus générés, protection de la propriété intellectuelle, formation des équipes : l'adoption de l'IA générative nécessite une stratégie réfléchie et un accompagnement humain.`,
    coverImage: '/images/blog/ia-entreprise.jpg',
    author: 'Franklin KAMCHE',
    category: 'actualites',
    tags: ['IA générative', 'Entreprise', 'Transformation digitale'],
    isPublished: true,
  },
  {
    id: '3',
    title: 'Les nouvelles réglementations européennes sur l\'IA',
    slug: 'reglementations-europeennes-ia',
    excerpt: 'L\'AI Act européen entre en application : ce que cela change pour les développeurs, les entreprises et les citoyens.',
    content: `L'Union européenne a adopté le premier cadre réglementaire mondial dédié à l'intelligence artificielle. L'AI Act classe les systèmes d'IA par niveau de risque et impose des obligations proportionnées.

**Classification par risque**
L'AI Act distingue quatre niveaux : risque inacceptable (interdit), risque élevé (très encadré), risque limité (obligations de transparence) et risque minimal (libre).

**Risque inacceptable**
Sont interdits : la notation sociale, la manipulation comportementale, la reconnaissance faciale en temps réel dans l'espace public (sauf exceptions de sécurité).

**Risque élevé**
Les systèmes d'IA utilisés dans l'éducation, le recrutement, la justice ou la santé doivent respecter des exigences strictes : documentation technique, gestion des risques, supervision humaine, qualité des données.

**Impact pour la France**
Les entreprises françaises doivent se mettre en conformité. C'est aussi une opportunité : le label "IA de confiance" peut devenir un avantage compétitif majeur sur le marché mondial.

**Ce que cela signifie pour vous**
En tant qu'utilisateur, vous bénéficiez d'un droit à la transparence : savoir quand vous interagissez avec une IA et comment vos données sont utilisées.`,
    coverImage: '/images/blog/regulation-ia.jpg',
    author: 'Franklin KAMCHE',
    category: 'actualites',
    tags: ['AI Act', 'Réglementation', 'Europe', 'RGPD'],
    isPublished: true,
  },
  {
    id: '4',
    title: 'L\'IA dans l\'éducation : révolution ou menace ?',
    slug: 'ia-education-revolution',
    excerpt: 'Comment l\'intelligence artificielle transforme l\'enseignement et l\'apprentissage, des écoles primaires aux universités.',
    content: `L'IA bouleverse l'éducation à tous les niveaux. Entre opportunités pédagogiques et craintes légitimes, faisons le point sur une transformation en cours.

**L'IA comme tuteur personnalisé**
Les plateformes adaptatives comme Khan Academy utilisent l'IA pour personnaliser le parcours de chaque élève. Le rythme, les exercices et les explications s'adaptent automatiquement au niveau de l'apprenant.

**Génération de contenus pédagogiques**
Les enseignants utilisent l'IA pour créer des exercices, des QCM, des études de cas et des supports de cours. Le temps gagné est réinvesti dans l'accompagnement individuel des élèves.

**La question du plagiat**
La détection de contenus générés par IA reste un défi. Plutôt que d'interdire, de nombreuses universités choisissent d'intégrer l'IA dans leurs pratiques et d'évaluer différemment.

**Former les enseignants**
Le plus grand défi n'est pas technique mais humain : il faut former les enseignants à utiliser l'IA efficacement et de manière critique.

**Notre vision**
L'IA ne remplacera jamais un enseignant inspirant. Mais un enseignant qui utilise l'IA sera plus efficace qu'un enseignant qui l'ignore.`,
    coverImage: '/images/blog/ia-education.jpg',
    author: 'Franklin KAMCHE',
    category: 'actualites',
    tags: ['Éducation', 'Apprentissage', 'Université'],
    isPublished: true,
  },

  // ===================== TUTORIELS (4) =====================
  {
    id: '5',
    title: 'Comprendre le Machine Learning en 5 minutes',
    slug: 'comprendre-machine-learning-5-minutes',
    excerpt: 'Le Machine Learning expliqué simplement : comment les machines apprennent, les types d\'apprentissage et les applications concrètes.',
    content: `Le Machine Learning (apprentissage automatique) est au cœur de la révolution IA. Mais comment ça marche vraiment ?

**Le principe fondamental**
Imaginez que vous apprenez à un enfant à reconnaître un chat. Vous ne lui donnez pas une liste de règles ("4 pattes, moustaches, queue..."). Vous lui montrez des centaines de photos de chats, et il finit par reconnaître les patterns. Le Machine Learning fonctionne exactement de la même manière.

**Les 3 types d'apprentissage**

1. L'apprentissage supervisé : on donne à la machine des données étiquetées (photo + "c'est un chat"). C'est le plus courant.

2. L'apprentissage non supervisé : la machine trouve elle-même des patterns dans les données sans étiquettes. Utile pour la segmentation de clients.

3. L'apprentissage par renforcement : la machine apprend par essai-erreur, comme un jeu vidéo. C'est ainsi qu'AlphaGo a battu le champion du monde de Go.

**Applications concrètes**
Le ML est déjà partout : recommandations Netflix, détection de spam, navigation GPS, diagnostic médical, traduction automatique... Chaque fois qu'un service "apprend" de vos habitudes, c'est du Machine Learning.

**Pour aller plus loin**
Notre livre "L'Odyssée de l'IA en 30 jours" consacre 5 chapitres au Machine Learning, avec des exercices pratiques et des exemples du quotidien.`,
    coverImage: '/images/blog/machine-learning.jpg',
    author: 'Franklin KAMCHE',
    category: 'tutoriels',
    tags: ['Machine Learning', 'Débutant', 'Tutoriel'],
    isPublished: true,
  },
  {
    id: '6',
    title: 'Écrire des prompts efficaces : le guide complet',
    slug: 'guide-prompts-efficaces',
    excerpt: 'Apprenez à rédiger des prompts qui obtiennent exactement les résultats que vous souhaitez de ChatGPT, Claude ou Gemini.',
    content: `La qualité de vos résultats avec l'IA dépend directement de la qualité de vos prompts. Voici les techniques des experts.

**Règle 1 : Soyez spécifique**
Mauvais prompt : "Parle-moi du marketing"
Bon prompt : "Explique les 5 stratégies de marketing digital les plus efficaces pour une PME B2B avec un budget de 5000€/mois"

**Règle 2 : Donnez du contexte**
Précisez votre rôle, votre audience et votre objectif. "Je suis responsable marketing dans une startup SaaS. J'ai besoin de..." fonctionne bien mieux que "Donne-moi des idées marketing".

**Règle 3 : Utilisez des exemples**
Montrez à l'IA ce que vous attendez en lui donnant un exemple de résultat souhaité. C'est ce qu'on appelle le "few-shot prompting".

**Règle 4 : Itérez**
Ne vous arrêtez pas au premier résultat. Affinez, demandez des modifications, ajoutez des contraintes. Le prompting est un dialogue, pas une commande unique.

**Règle 5 : Structurez votre demande**
Utilisez des puces, des numéros, des sections. Une demande bien structurée produit une réponse bien structurée.

**Bonus : la technique du persona**
"Agis comme un expert en [domaine] avec 20 ans d'expérience. Explique [sujet] à un débutant avec des analogies simples." Cette technique simple améliore considérablement les résultats.`,
    coverImage: '/images/blog/prompts-guide.jpg',
    author: 'Franklin KAMCHE',
    category: 'tutoriels',
    tags: ['Prompts', 'ChatGPT', 'Productivité'],
    isPublished: true,
  },
  {
    id: '7',
    title: 'Créer des images avec l\'IA : DALL-E, Midjourney, Stable Diffusion',
    slug: 'creer-images-ia-guide',
    excerpt: 'Guide pratique pour générer des images professionnelles avec les outils d\'IA générative. Comparatif, astuces et bonnes pratiques.',
    content: `La génération d'images par IA a fait des progrès spectaculaires. Voici comment en tirer le meilleur parti.

**Les 3 outils majeurs**

DALL-E 3 (OpenAI) : intégré à ChatGPT, le plus accessible. Excellent pour les illustrations conceptuelles et le texte dans les images.

Midjourney : le plus artistique. Produit des images d'une qualité visuelle exceptionnelle, particulièrement pour les styles photographiques et artistiques.

Stable Diffusion : open source et gratuit. Le plus personnalisable, idéal pour les développeurs et les créatifs techniques.

**Comment écrire un bon prompt image**

La structure gagnante : [Sujet] + [Style] + [Ambiance] + [Détails techniques]

Exemple : "Un ingénieur travaillant sur un hologramme de réseau neuronal, style photographie professionnelle, éclairage dramatique bleu et violet, fond sombre, haute résolution"

**Les erreurs à éviter**
Prompts trop vagues, accumulation excessive de détails contradictoires, oublier de préciser le style souhaité.

**Cas d'usage professionnels**
Illustrations d'articles de blog, visuels pour les réseaux sociaux, concepts de design, storyboards, présentations professionnelles.

**Aspects légaux**
Vérifiez les conditions d'utilisation de chaque outil concernant les droits commerciaux. Les images générées par IA posent de nouvelles questions de propriété intellectuelle.`,
    coverImage: '/images/blog/images-ia.jpg',
    author: 'Franklin KAMCHE',
    category: 'tutoriels',
    tags: ['DALL-E', 'Midjourney', 'Images', 'Créativité'],
    isPublished: true,
  },
  {
    id: '8',
    title: 'Automatiser ses tâches quotidiennes avec l\'IA',
    slug: 'automatiser-taches-ia',
    excerpt: 'Gagnez des heures chaque semaine en automatisant vos tâches répétitives grâce aux outils d\'IA. Guide pratique pas à pas.',
    content: `L'IA peut vous faire gagner des heures chaque semaine en automatisant vos tâches répétitives. Voici comment commencer dès aujourd'hui.

**Emails et communication**
Utilisez l'IA pour rédiger des brouillons d'emails, résumer de longues conversations, et préparer des réponses types. Outils : ChatGPT, Claude, Gemini intégré à Gmail.

**Prise de notes et comptes rendus**
Des outils comme Otter.ai ou Fireflies.ai transcrivent automatiquement vos réunions et en extraient les points clés et les actions à suivre.

**Recherche et veille**
Au lieu de passer des heures à chercher des informations, utilisez l'IA pour synthétiser des documents, comparer des sources et extraire les informations pertinentes.

**Création de contenu**
Posts LinkedIn, articles de blog, présentations : l'IA peut produire un premier brouillon que vous affinez ensuite. Le gain de temps est considérable.

**Analyse de données**
Chargez un fichier Excel dans ChatGPT et demandez une analyse. L'IA identifie les tendances, crée des graphiques et formule des recommandations.

**Par où commencer ?**
Identifiez vos 3 tâches les plus répétitives cette semaine. Essayez de les réaliser avec un assistant IA. Mesurez le temps gagné. Vous serez surpris.`,
    coverImage: '/images/blog/automatisation-ia.jpg',
    author: 'Franklin KAMCHE',
    category: 'tutoriels',
    tags: ['Automatisation', 'Productivité', 'Outils IA'],
    isPublished: true,
  },

  // ===================== RÉFLEXIONS (3) =====================
  {
    id: '9',
    title: 'L\'IA va-t-elle remplacer nos emplois ? Une analyse nuancée',
    slug: 'ia-remplacer-emplois-analyse',
    excerpt: 'Entre panique et euphorie, quelle est la réalité de l\'impact de l\'IA sur l\'emploi ? Analyse basée sur les études du MIT et de l\'OCDE.',
    content: `La question revient sans cesse : "L'IA va-t-elle prendre mon travail ?" La réponse est plus nuancée qu'on ne le pense.

**Ce que disent les études**
Selon le MIT, environ 60% des emplois actuels n'existaient pas en 1940. La technologie détruit des emplois, mais en crée encore plus. L'OCDE estime que 14% des emplois sont hautement automatisables, et 32% verront leur nature transformée significativement.

**Les emplois les plus exposés**
Les tâches répétitives, prévisibles et basées sur des règles sont les plus vulnérables : saisie de données, comptabilité basique, service client de niveau 1, traduction simple, génération de rapports standardisés.

**Les emplois qui se renforcent**
L'IA augmente les capacités des professionnels créatifs, des analystes, des médecins, des enseignants. Un radiologue assisté par l'IA est plus performant qu'un radiologue seul OU qu'une IA seule.

**Les nouveaux métiers**
Prompt engineer, éthicien de l'IA, data curator, AI trainer... Des dizaines de nouveaux métiers émergent chaque année autour de l'IA.

**Notre conseil**
Plutôt que de craindre l'IA, apprenez à travailler avec elle. Développez votre pensée critique, votre créativité et vos compétences relationnelles, des domaines où l'humain reste irremplaçable.`,
    coverImage: '/images/blog/ia-emploi.jpg',
    author: 'Franklin KAMCHE',
    category: 'reflexions',
    tags: ['Emploi', 'Futur du travail', 'Éthique'],
    isPublished: true,
  },
  {
    id: '10',
    title: 'Biais algorithmiques : quand l\'IA reproduit nos préjugés',
    slug: 'biais-algorithmiques-ia',
    excerpt: 'Les algorithmes d\'IA peuvent amplifier les discriminations humaines. Comprendre le problème est le premier pas pour le résoudre.',
    content: `L'IA n'est pas neutre. Elle apprend à partir de données créées par des humains, et hérite donc de nos biais. Comprendre ce phénomène est essentiel.

**Qu'est-ce qu'un biais algorithmique ?**
Un biais algorithmique survient quand un système d'IA produit des résultats systématiquement injustes envers certains groupes. Ce n'est pas intentionnel : le biais est "appris" à partir des données d'entraînement.

**Exemples concrets**
Recrutement : Amazon avait développé un outil de tri de CV qui pénalisait les candidates féminines, car il avait été entraîné sur 10 ans de recrutements majoritairement masculins.

Reconnaissance faciale : plusieurs études (MIT, NIST) ont montré des taux d'erreur significativement plus élevés pour les personnes à peau foncée.

Crédit bancaire : des algorithmes d'attribution de crédit ont été accusés de discriminer certaines communautés.

**Les causes profondes**
Données d'entraînement non représentatives, biais historiques intégrés dans les données, manque de diversité dans les équipes de développement, absence de tests d'équité.

**Les solutions**
Audits réguliers des algorithmes, diversification des jeux de données, inclusion de critères d'équité dans les métriques de performance, réglementation (AI Act européen).

**Pourquoi c'est important**
Comprendre les biais algorithmiques n'est pas réservé aux ingénieurs. En tant que citoyens, nous interagissons quotidiennement avec des systèmes d'IA qui influencent notre vie.`,
    coverImage: '/images/blog/biais-ia.jpg',
    author: 'Franklin KAMCHE',
    category: 'reflexions',
    tags: ['Biais', 'Éthique', 'Discrimination', 'IA responsable'],
    isPublished: true,
  },
  {
    id: '11',
    title: 'L\'IA peut-elle être créative ? Le débat philosophique',
    slug: 'ia-creativite-debat',
    excerpt: 'Quand une IA compose de la musique, peint un tableau ou écrit un poème, peut-on parler de créativité ? Réflexion sur la frontière humain-machine.',
    content: `Les IA génératives produisent des œuvres qui rivalisent parfois avec celles des humains. Mais est-ce vraiment de la créativité ?

**L'argument technique**
Les IA génératives ne "créent" pas au sens strict. Elles combinent et recombinent des patterns appris à partir de millions d'exemples. C'est de l'interpolation statistique sophistiquée, pas de l'inspiration.

**L'argument philosophique**
Mais la créativité humaine fonctionne-t-elle différemment ? Nos idées sont aussi le fruit de nos expériences passées, de nos lectures, de nos influences. Sommes-nous si différents d'une IA qui recombine ses données ?

**Le test de la nouveauté**
Ce qui distingue peut-être la créativité humaine, c'est la capacité à produire quelque chose de véritablement nouveau, qui surprend même son créateur. L'IA optimise, l'humain peut révolutionner.

**L'intention et l'émotion**
Un tableau peint par un artiste en deuil porte une charge émotionnelle que l'IA ne peut pas reproduire. L'art n'est pas seulement le résultat final, c'est aussi l'intention et le vécu derrière l'œuvre.

**Notre position**
L'IA est un outil extraordinaire de création assistée. Elle amplifie la créativité humaine mais ne la remplace pas. Le vrai talent de demain sera de combiner la puissance de l'IA avec la sensibilité humaine.

**Pour aller plus loin**
Ces questions fascinantes sont explorées en profondeur dans "L'Odyssée de l'IA en 30 jours", notamment dans les chapitres consacrés à l'IA générative et aux enjeux philosophiques.`,
    coverImage: '/images/blog/ia-creativite.jpg',
    author: 'Franklin KAMCHE',
    category: 'reflexions',
    tags: ['Créativité', 'Philosophie', 'Art', 'IA générative'],
    isPublished: true,
  },
];

export function getArticleBySlug(slug: string): Article | undefined {
  return allArticles.find((a) => a.slug === slug && a.isPublished);
}

export function getPublishedArticles(): Article[] {
  return allArticles.filter((a) => a.isPublished);
}

export function getArticlesByCategory(category: string): Article[] {
  if (category === 'all') return getPublishedArticles();
  return getPublishedArticles().filter((a) => a.category === category);
}
