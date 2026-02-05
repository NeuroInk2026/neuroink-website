'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FileText, ArrowRight, Filter } from 'lucide-react';
import { useState } from 'react';

const articles = [
  {
    id: 'chatgpt-avenir-travail',
    title: 'ChatGPT et l\'avenir du travail : opportunité ou menace ?',
    excerpt: 'L\'intelligence artificielle transforme profondément le monde du travail. Découvrez comment ChatGPT et les IA génératives redéfinissent les métiers et créent de nouvelles opportunités.',
    category: 'actualites',
    source: 'MIT Technology Review',
  },
  {
    id: 'google-gemini-ultra',
    title: 'Google lance Gemini Ultra : une nouvelle ère pour l\'IA ?',
    excerpt: 'Google dévoile Gemini Ultra, son modèle d\'IA le plus puissant à ce jour. Quelles sont ses capacités et comment se compare-t-il à GPT-4 ?',
    category: 'actualites',
    source: 'Nature',
  },
  {
    id: 'europe-ai-act',
    title: 'L\'Europe adopte l\'AI Act : ce qui change pour vous',
    excerpt: 'La nouvelle réglementation européenne sur l\'IA est adoptée. Découvrez les implications pour les entreprises et les citoyens.',
    category: 'actualites',
    source: 'Science Magazine',
  },
  {
    id: 'chatbot-python-30min',
    title: 'Créer votre premier chatbot avec Python en 30 minutes',
    excerpt: 'Un guide pratique pour construire votre premier chatbot IA en utilisant Python et OpenAI. Idéal pour les débutants !',
    category: 'tutoriels',
    source: 'Stanford AI Lab',
  },
  {
    id: 'debuter-ia-5-etapes',
    title: 'Débuter avec l\'IA en 5 étapes simples',
    excerpt: 'Vous voulez vous lancer dans l\'IA mais ne savez pas par où commencer ? Voici un plan d\'action clair et progressif.',
    category: 'tutoriels',
    source: 'MIT OpenCourseWare',
  },
  {
    id: 'analyse-sentiments-nltk',
    title: 'Analyse de sentiments avec NLTK : guide complet',
    excerpt: 'Apprenez à analyser les émotions dans les textes grâce au traitement du langage naturel et à la bibliothèque NLTK.',
    category: 'tutoriels',
    source: 'Carnegie Mellon University',
  },
  {
    id: 'ia-vraiment-intelligente',
    title: 'L\'IA est-elle vraiment "intelligente" ?',
    excerpt: 'Une réflexion philosophique sur la nature de l\'intelligence artificielle. Peut-on vraiment parler d\'intelligence ?',
    category: 'reflexions',
    source: 'Oxford Internet Institute',
  },
  {
    id: 'peur-ia-mythes-realites',
    title: 'Faut-il avoir peur de l\'IA ? Entre mythes et réalités',
    excerpt: 'Démêlons le vrai du faux concernant les risques de l\'IA. Entre fantasmes hollywoodiens et enjeux réels.',
    category: 'reflexions',
    source: 'Harvard Business Review',
  }
];

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');

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

  const filteredArticles = selectedCategory === 'all' 
    ? articles 
    : articles.filter(a => a.category === selectedCategory);

  return (
    <main className="min-h-screen bg-white">
      {/* Header - IDENTIQUE À LA PAGE LIVRES */}
      <section className="relative py-20 sm:py-28 overflow-hidden" style={{ backgroundColor: '#0F0D15' }}>
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 rounded-full blur-3xl opacity-20" style={{ backgroundColor: '#6B3FA0' }} />
          <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-20" style={{ backgroundColor: '#00A3E0' }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold mb-4 font-raleway" style={{ backgroundColor: 'rgba(107, 63, 160, 0.15)', color: '#40E0D0' }}>
              <FileText className="w-4 h-4" />
              Actualités & Ressources
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 font-raleway">
              Blog & Actualités
            </h1>
            <p className="text-lg sm:text-xl text-white/70 max-w-2xl mx-auto font-raleway">
              Articles, tutoriels et réflexions sur l&apos;intelligence artificielle
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filtres */}
      <section className="py-8 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 flex-wrap">
            <Filter className="w-5 h-5 text-gray-500" />
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all font-raleway ${
                selectedCategory === 'all'
                  ? 'text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
              style={selectedCategory === 'all' ? { backgroundColor: '#6B3FA0' } : {}}
            >
              Tous
            </button>
            <button
              onClick={() => setSelectedCategory('actualites')}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all font-raleway ${
                selectedCategory === 'actualites'
                  ? 'text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
              style={selectedCategory === 'actualites' ? { backgroundColor: '#00A3E0' } : {}}
            >
              Actualités
            </button>
            <button
              onClick={() => setSelectedCategory('tutoriels')}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all font-raleway ${
                selectedCategory === 'tutoriels'
                  ? 'text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
              style={selectedCategory === 'tutoriels' ? { backgroundColor: '#6B3FA0' } : {}}
            >
              Tutoriels
            </button>
            <button
              onClick={() => setSelectedCategory('reflexions')}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all font-raleway ${
                selectedCategory === 'reflexions'
                  ? 'text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
              style={selectedCategory === 'reflexions' ? { backgroundColor: '#40E0D0' } : {}}
            >
              Réflexions
            </button>
          </div>
        </div>
      </section>

      {/* Articles */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article, index) => (
              <Link key={article.id} href={`/blog/${article.id}`}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden border-2 border-gray-100 hover:shadow-2xl transition-all hover:scale-105 cursor-pointer"
                >
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span
                        className="inline-block px-3 py-1 rounded-full text-xs font-semibold text-white font-raleway"
                        style={{ backgroundColor: getCategoryColor(article.category) }}
                      >
                        {getCategoryLabel(article.category)}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold mb-3 font-raleway line-clamp-2" style={{ color: '#0F0D15' }}>
                      {article.title}
                    </h3>

                    <p className="text-gray-600 mb-4 font-raleway text-sm line-clamp-3">
                      {article.excerpt}
                    </p>

                    <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                      <span className="text-sm font-medium font-raleway" style={{ color: '#6B3FA0' }}>
                        Lire l&apos;article
                      </span>
                      <ArrowRight className="w-5 h-5" style={{ color: '#00A3E0' }} />
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>

          {/* Newsletter CTA */}
          <div className="mt-16 rounded-2xl p-8 text-white" style={{ background: 'linear-gradient(135deg, #6B3FA0 0%, #00A3E0 50%, #40E0D0 100%)' }}>
            <h3 className="text-2xl font-bold mb-3 font-raleway text-center">
              Ne manquez aucun article !
            </h3>
            <p className="text-white/90 mb-6 font-raleway text-center max-w-2xl mx-auto">
              Inscrivez-vous à notre newsletter pour être notifié de la publication de nos prochains articles.
            </p>
            <div className="text-center">
              <Link
                href="/#newsletter"
                className="inline-flex items-center gap-2 px-8 py-3 bg-white font-semibold rounded-lg hover:bg-gray-100 transition-colors font-raleway"
                style={{ color: '#6B3FA0' }}
              >
                S&apos;inscrire à la newsletter
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* CTA Livre */}
          <div className="mt-8 bg-white rounded-2xl p-8 shadow-lg border-2 border-gray-100">
            <h3 className="text-xl font-bold text-gray-900 mb-3 font-raleway text-center">
              Approfondissez avec notre livre !
            </h3>
            <p className="text-gray-600 mb-6 font-raleway text-center max-w-2xl mx-auto">
              &quot;L&apos;Odyssée de l&apos;IA en 30 jours&quot; vous guide pas à pas dans votre apprentissage de l&apos;intelligence artificielle.
            </p>
            <div className="text-center">
              <Link
                href="/livres"
                className="inline-flex items-center gap-2 px-8 py-3 rounded-lg text-white font-semibold transition-all duration-300 hover:shadow-xl font-raleway"
                style={{ background: 'linear-gradient(135deg, #6B3FA0 0%, #00A3E0 100%)' }}
              >
                Découvrir le livre
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
