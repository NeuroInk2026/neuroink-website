'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, Clock, Tag, ArrowRight } from 'lucide-react';

const categories = ['Tous', 'Actualités', 'Tutoriels', 'Réflexions', 'Interviews'];

export default function BlogPage() {
  // Articles viendront de Sanity CMS - pour l'instant tableau vide
  const articles: any[] = [];
  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <section className="relative py-20 sm:py-28 overflow-hidden" style={{ backgroundColor: '#0F0D15' }}>
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 rounded-full blur-3xl opacity-20" style={{ backgroundColor: '#6B3FA0' }} />
          <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-20" style={{ backgroundColor: '#00A3E0' }} />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="inline-block px-6 py-3 rounded-full mb-6" style={{ backgroundColor: 'rgba(64, 224, 208, 0.15)', border: '2px solid #40E0D0' }}>
              <p className="text-2xl font-bold font-raleway flex items-center gap-3" style={{ color: '#40E0D0' }}>
                🚧 Site en construction
              </p>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 font-raleway">Blog & Actualités</h1>
            <p className="text-lg sm:text-xl text-white/70 max-w-2xl mx-auto font-raleway">
              Articles, tutoriels et réflexions sur l'intelligence artificielle
            </p>
            <p className="text-sm text-white/50 font-raleway mt-2">
              Les articles arrivent progressivement
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filtres */}
      <section className="py-8 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map(cat => (
              <button key={cat} className="px-5 py-2 rounded-full text-sm font-medium transition-all font-raleway hover:shadow-md" style={{ backgroundColor: cat === 'Tous' ? '#6B3FA0' : '#f3f4f6', color: cat === 'Tous' ? 'white' : '#4B5563' }}>
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Articles */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {articles.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map(article => (
                <motion.article key={article.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="group">
                  <Link href={`/blog/${article.slug}`}>
                    <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-105">
                      <div className="relative h-48 bg-gradient-to-br from-purple-500 to-blue-500">
                        <div className="absolute inset-0 flex items-center justify-center text-white text-6xl opacity-20">📝</div>
                      </div>
                      <div className="p-6">
                        <div className="flex items-center gap-2 mb-3">
                          <span className="px-3 py-1 rounded-full text-xs font-medium font-raleway" style={{ backgroundColor: 'rgba(107, 63, 160, 0.1)', color: '#6B3FA0' }}>
                            {article.category}
                          </span>
                          <span className="flex items-center gap-1 text-xs text-gray-500 font-raleway">
                            <Clock className="w-3 h-3" />
                            {article.readTime} min
                          </span>
                        </div>
                        <h3 className="text-xl font-bold mb-2 font-raleway line-clamp-2 group-hover:text-purple-600 transition-colors">{article.title}</h3>
                        <p className="text-gray-600 text-sm mb-4 font-raleway line-clamp-2">{article.excerpt}</p>
                        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                          <span className="text-xs text-gray-500 font-raleway flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {new Date(article.publishedAt).toLocaleDateString('fr-FR')}
                          </span>
                          <span className="text-sm font-medium font-raleway flex items-center gap-1" style={{ color: '#6B3FA0' }}>
                            Lire <ArrowRight className="w-4 h-4" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-xl text-gray-500 font-raleway mb-4">Les premiers articles arrivent bientôt...</p>
              <Link href="/#newsletter" className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-white font-semibold transition-all hover:shadow-xl font-raleway" style={{ backgroundColor: '#6B3FA0' }}>
                S'inscrire à la newsletter
              </Link>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
