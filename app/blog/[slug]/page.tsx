'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { useParams } from 'next/navigation';

// Données complètes des articles
const articlesData: { [key: string]: any } = {
  'chatgpt-avenir-travail': {
    title: 'ChatGPT et l\'avenir du travail : opportunité ou menace ?',
    category: 'actualites',
    source: 'MIT Technology Review',
    sourceUrl: 'https://www.technologyreview.com',
    content: `L'intelligence artificielle, et plus particulièrement ChatGPT, redéfinit profondément le monde du travail. Cette transformation soulève des questions essentielles sur l'avenir de l'emploi et les compétences nécessaires.

## L'impact sur les métiers traditionnels

ChatGPT et les IA génératives automatisent de nombreuses tâches intellectuelles autrefois réservées aux humains. Rédaction, traduction, programmation, analyse de données : ces compétences sont désormais partiellement automatisables.

## Les nouvelles opportunités

Paradoxalement, l'IA crée également de nouveaux métiers. Les prompt engineers, les spécialistes de l'IA éthique, et les formateurs en IA sont désormais très recherchés sur le marché du travail.

## Se préparer à cette transformation

Pour naviguer dans ce nouveau monde, il est essentiel de développer des compétences complémentaires à l'IA : créativité, pensée critique, intelligence émotionnelle et capacité d'adaptation.

## Conclusion

L'IA n'est ni une menace ni une opportunité absolue : elle est un outil dont l'impact dépend de notre capacité à nous adapter et à l'utiliser intelligemment.`,
  },
  'google-gemini-ultra': {
    title: 'Google lance Gemini Ultra : une nouvelle ère pour l\'IA ?',
    category: 'actualites',
    source: 'Nature',
    sourceUrl: 'https://www.nature.com',
    content: `Google vient de dévoiler Gemini Ultra, son modèle d'IA le plus avancé à ce jour, marquant une étape importante dans la course à l'intelligence artificielle.

## Les capacités de Gemini Ultra

Gemini Ultra se distingue par sa capacité multimodale : il peut traiter simultanément du texte, des images, de l'audio et de la vidéo. Cette approche holistique le rend particulièrement puissant pour des tâches complexes.

## Comparaison avec GPT-4

Selon les benchmarks publiés, Gemini Ultra surpasse GPT-4 sur plusieurs tâches de raisonnement et de compréhension. Cependant, les deux modèles excellent dans des domaines différents.

## Implications pour les développeurs

L'accès à Gemini Ultra via l'API Google Cloud ouvre de nouvelles possibilités pour les développeurs. Les applications multimodales vont se démocratiser rapidement.

## L'avenir de l'IA

Cette annonce intensifie la compétition entre les géants technologiques, ce qui bénéficie ultimement aux utilisateurs finaux par l'innovation accélérée.`,
  },
  // Ajoutez les autres articles de la même manière...
};

export default function ArticlePage() {
  const params = useParams();
  const slug = params?.slug as string;
  const article = articlesData[slug];

  if (!article) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Article non trouvé</h1>
          <Link href="/blog" className="text-[#6B3FA0] hover:underline">
            Retour au blog
          </Link>
        </div>
      </div>
    );
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'actualites': return '#00A3E0';
      case 'tutoriels': return '#6B3FA0';
      case 'reflexions': return '#40E0D0';
      default: return '#6B3FA0';
    }
  };

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case 'actualites': return 'Actualités';
      case 'tutoriels': return 'Tutoriels';
      case 'reflexions': return 'Réflexions';
      default: return category;
    }
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <section className="relative py-20 overflow-hidden" style={{ backgroundColor: '#0F0D15' }}>
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 rounded-full blur-3xl opacity-20" style={{ backgroundColor: '#6B3FA0' }} />
          <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-20" style={{ backgroundColor: '#00A3E0' }} />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/blog" className="inline-flex items-center gap-2 text-white/70 hover:text-white mb-6 font-raleway">
            <ArrowLeft className="w-4 h-4" />
            Retour au blog
          </Link>

          <span
            className="inline-block px-3 py-1 rounded-full text-xs font-semibold text-white font-raleway mb-4"
            style={{ backgroundColor: getCategoryColor(article.category) }}
          >
            {getCategoryLabel(article.category)}
          </span>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 font-raleway">
            {article.title}
          </h1>
        </div>
      </section>

      {/* Contenu */}
      <article className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Source */}
          <div className="mb-8 p-4 rounded-lg" style={{ backgroundColor: 'rgba(107, 63, 160, 0.05)', borderLeft: '4px solid #6B3FA0' }}>
            <p className="text-sm text-gray-600 font-raleway mb-2">
              <strong>Source :</strong> {article.source}
            </p>
            {article.sourceUrl && (
              <a
                href={article.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm font-raleway hover:underline"
                style={{ color: '#6B3FA0' }}
              >
                Consulter la source
                <ExternalLink className="w-3 h-3" />
              </a>
            )}
          </div>

          {/* Contenu de l'article */}
          <div className="prose prose-lg max-w-none">
            {article.content.split('\n\n').map((paragraph: string, index: number) => {
              if (paragraph.startsWith('##')) {
                return (
                  <h2 key={index} className="text-2xl font-bold mt-8 mb-4 font-raleway" style={{ color: '#0F0D15' }}>
                    {paragraph.replace('## ', '')}
                  </h2>
                );
              }
              return (
                <p key={index} className="text-gray-700 leading-relaxed mb-4 font-raleway">
                  {paragraph}
                </p>
              );
            })}
          </div>

          {/* CTA Livre */}
          <div className="mt-16 rounded-2xl p-8" style={{ background: 'linear-gradient(135deg, #6B3FA0 0%, #00A3E0 50%, #40E0D0 100%)' }}>
            <h3 className="text-2xl font-bold text-white mb-3 font-raleway text-center">
              Envie d&apos;aller plus loin ?
            </h3>
            <p className="text-white/90 mb-6 font-raleway text-center max-w-2xl mx-auto">
              Découvrez &quot;L&apos;Odyssée de l&apos;IA en 30 jours&quot;, votre guide complet pour maîtriser l&apos;intelligence artificielle.
            </p>
            <div className="text-center">
              <Link
                href="/livres"
                className="inline-block px-8 py-3 bg-white font-semibold rounded-lg hover:bg-gray-100 transition-colors font-raleway"
                style={{ color: '#6B3FA0' }}
              >
                Découvrir le livre
              </Link>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}
