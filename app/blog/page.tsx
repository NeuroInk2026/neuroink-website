'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FileText, Calendar, ArrowRight, Tag } from 'lucide-react';
import { useEffect, useState } from 'react';
import { client } from '@/lib/sanity';
import Image from 'next/image';

interface Article {
  _id: string;
  title: string;
  slug: { current: string };
  excerpt: string;
  category: string;
  publishedAt: string;
  author: string;
  coverImageUrl?: string;
  tags?: string[];
}

export default function BlogPage() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchArticles() {
      try {
        const query = `*[_type == "article" && isPublished == true] | order(publishedAt desc) {
          _id,
          title,
          slug,
          excerpt,
          category,
          publishedAt,
          author,
          "coverImageUrl": coverImage.asset->url,
          tags
        }`;
        const data = await client.fetch(query);
        setArticles(data);
      } catch (error) {
        console.error('Erreur chargement articles:', error);
      } finally {
        setLoading(false);
      }
    }
    fetchArticles();
  }, []);

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

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('fr-FR', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

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

      {/* Contenu */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {loading ? (
            <div className="text-center">
              <div className="inline-block w-12 h-12 border-4 border-[#6B3FA0] border-t-transparent rounded-full animate-spin"></div>
              <p className="mt-4 text-gray-600 font-raleway">Chargement des articles...</p>
            </div>
          ) : articles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((article) => (
                <motion.div
                  key={article._id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden border-2 border-gray-100 hover:shadow-2xl transition-all hover:scale-105"
                >
                  {article.coverImageUrl && (
                    <div className="relative h-48 bg-gray-200">
                      <Image
                        src={article.coverImageUrl}
                        alt={article.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                  
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

                    <div className="flex items-center gap-4 mb-4 text-xs text-gray-500 font-raleway">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {formatDate(article.publishedAt)}
                      </div>
                    </div>

                    {article.tags && article.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        {article.tags.slice(0, 3).map((tag, idx) => (
                          <span
                            key={idx}
                            className="inline-flex items-center gap-1 px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full font-raleway"
                          >
                            <Tag className="w-3 h-3" />
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}

                    <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                      <span className="text-sm font-medium font-raleway" style={{ color: '#6B3FA0' }}>
                        Lire l&apos;article
                      </span>
                      <ArrowRight className="w-5 h-5" style={{ color: '#00A3E0' }} />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="max-w-4xl mx-auto text-center">
              <div className="bg-white rounded-2xl shadow-xl p-12 border-2 border-gray-100">
                <div className="w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #6B3FA0 0%, #00A3E0 100%)' }}>
                  <FileText className="w-10 h-10 text-white" />
                </div>
                
                <h2 className="text-3xl font-bold mb-4 font-raleway" style={{ color: '#0F0D15' }}>
                  Les premiers articles arrivent bientôt !
                </h2>
                
                <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto font-raleway">
                  Nous préparons du contenu de qualité pour vous aider à maîtriser l&apos;intelligence artificielle. 
                  Des tutoriels, des analyses et des réflexions seront publiés régulièrement.
                </p>

                <Link
                  href="/"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-white font-semibold transition-all duration-300 hover:shadow-xl hover:scale-105 font-raleway"
                  style={{ background: 'linear-gradient(135deg, #6B3FA0 0%, #00A3E0 100%)' }}
                >
                  Retour à l&apos;accueil
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          )}

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
                className="inline-block px-8 py-3 bg-white font-semibold rounded-lg hover:bg-gray-100 transition-colors font-raleway"
                style={{ color: '#6B3FA0' }}
              >
                S&apos;inscrire à la newsletter
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
