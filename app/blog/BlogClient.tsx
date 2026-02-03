'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { BookOpen, ArrowRight, Bell } from 'lucide-react';
import { getPublishedArticles, categories, categoryColors, categoryLabels, type Article } from '@/data/articles';
import type { NormalizedArticle } from '@/lib/fetch-data';

interface BlogClientProps {
  sanityArticles: NormalizedArticle[] | null;
}

export default function BlogClient({ sanityArticles }: BlogClientProps) {
  const [activeCategory, setActiveCategory] = useState('all');

  // Utilise Sanity si disponible, sinon données locales
  const allArticles: any[] = sanityArticles || getPublishedArticles();

  const filteredArticles = activeCategory === 'all'
    ? allArticles
    : allArticles.filter((a) => a.category === activeCategory);

  return (
    <main className="min-h-screen bg-white">
      {/* Header avec image de fond */}
      <section className="relative py-20 sm:py-28 overflow-hidden" style={{ backgroundColor: '#0F0D15' }}>
        <Image
          src="/images/headers/header-blog.jpg"
          alt=""
          fill
          className="object-cover opacity-20"
          priority
        />
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 rounded-full blur-3xl opacity-20" style={{ backgroundColor: '#6B3FA0' }} />
          <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-20" style={{ backgroundColor: '#00A3E0' }} />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold mb-4 font-raleway" style={{ backgroundColor: 'rgba(107, 63, 160, 0.15)', color: '#40E0D0' }}>
              <BookOpen className="w-4 h-4" />
              Actualités & Ressources
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 font-raleway">
              Blog
            </h1>
            <p className="text-lg sm:text-xl text-white/70 max-w-2xl mx-auto font-raleway">
              Articles, tutoriels et réflexions sur l&apos;intelligence artificielle
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filtres */}
      <section className="py-8 border-b border-gray-100 sticky top-20 bg-white/95 backdrop-blur-sm z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setActiveCategory(cat.value)}
                className={`px-4 py-2 rounded-full text-sm font-semibold font-raleway transition-all duration-200 ${
                  activeCategory === cat.value
                    ? 'text-white shadow-lg'
                    : 'text-gray-600 bg-gray-100 hover:bg-gray-200'
                }`}
                style={activeCategory === cat.value ? { backgroundColor: '#6B3FA0' } : {}}
              >
                {cat.label}
                {cat.value !== 'all' && (
                  <span className="ml-1.5 text-xs opacity-70">
                    ({allArticles.filter(a => cat.value === 'all' || a.category === cat.value).length})
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grille d'articles */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredArticles.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredArticles.map((article, i) => (
                <ArticleCard key={article.id} article={article} index={i} />
              ))}
            </div>
          ) : (
            <EmptyState />
          )}
        </div>
      </section>
    </main>
  );
}

function ArticleCard({ article, index }: { article: any; index: number }) {
  const [imgError, setImgError] = useState(false);

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      className="group bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
    >
      <Link href={`/blog/${article.slug}`}>
        <div className="relative h-48 overflow-hidden">
          {!imgError ? (
            <Image
              src={article.coverImage}
              alt={article.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              onError={() => setImgError(true)}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center" style={{ background: `linear-gradient(135deg, ${categoryColors[article.category] || '#6B3FA0'}40, ${categoryColors[article.category] || '#6B3FA0'}10)` }}>
              <BookOpen className="w-12 h-12 opacity-30" style={{ color: categoryColors[article.category] }} />
            </div>
          )}
          <div className="absolute top-4 left-4">
            <span
              className="px-3 py-1 rounded-full text-xs font-semibold text-white font-raleway"
              style={{ backgroundColor: categoryColors[article.category] || '#6B3FA0' }}
            >
              {categoryLabels[article.category] || article.category}
            </span>
          </div>
        </div>

        <div className="p-6">
          <h2 className="text-lg font-bold mb-2 font-raleway group-hover:text-[#6B3FA0] transition-colors line-clamp-2" style={{ color: '#0F0D15' }}>
            {article.title}
          </h2>
          <p className="text-gray-600 text-sm font-raleway line-clamp-3 mb-4">
            {article.excerpt}
          </p>
          <span className="inline-flex items-center gap-1 text-sm font-semibold font-raleway group-hover:gap-2 transition-all" style={{ color: '#6B3FA0' }}>
            Lire l&apos;article
            <ArrowRight className="w-4 h-4" />
          </span>
        </div>
      </Link>
    </motion.article>
  );
}

function EmptyState() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-center py-20"
    >
      <div className="w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center" style={{ backgroundColor: 'rgba(107, 63, 160, 0.1)' }}>
        <BookOpen className="w-10 h-10" style={{ color: '#6B3FA0' }} />
      </div>
      <h3 className="text-xl font-bold mb-2 font-raleway" style={{ color: '#0F0D15' }}>
        Les premiers articles arrivent bientôt...
      </h3>
      <p className="text-gray-600 font-raleway mb-6">
        Inscrivez-vous à la newsletter pour être informé !
      </p>
      <Link
        href="/#newsletter"
        className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-white font-semibold font-raleway transition-all hover:shadow-lg"
        style={{ backgroundColor: '#6B3FA0' }}
      >
        <Bell className="w-4 h-4" />
        S&apos;inscrire à la newsletter
      </Link>
    </motion.div>
  );
}
