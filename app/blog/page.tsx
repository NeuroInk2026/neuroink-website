'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Clock, User, BookOpen } from 'lucide-react';
import {
  blogArticles,
  categoryLabels,
  categoryColors,
  levelLabels,
  levelColors,
  filterArticles,
  type ArticleCategory,
  type ArticleLevel,
} from '@/lib/blog-data';

const allCategories: Array<ArticleCategory | 'all'> = ['all', 'actualites', 'tutoriels', 'reflexions'];
const allLevels: Array<ArticleLevel | 'all'> = ['all', 'debutant', 'intermediaire', 'avance'];

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState<ArticleCategory | 'all'>('all');
  const [selectedLevel, setSelectedLevel] = useState<ArticleLevel | 'all'>('all');

  const filteredArticles = filterArticles(selectedCategory, selectedLevel);

  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <section className="relative pt-28 pb-16 md:pt-36 md:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[#0F0D15]" />
        <div
          className="absolute inset-0 opacity-30"
          style={{
            background: 'radial-gradient(ellipse at 30% 50%, #6B3FA0 0%, transparent 60%), radial-gradient(ellipse at 70% 50%, #00A3E0 0%, transparent 60%)',
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-extrabold text-white font-raleway mb-4"
          >
            Actualites &amp; Ressources
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-300 font-raleway max-w-2xl mx-auto"
          >
            Articles, tutoriels et reflexions sur l&apos;intelligence artificielle
          </motion.p>
        </div>
      </section>

      {/* Filtres */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Filtre par categorie */}
        <div className="mb-4">
          <p className="text-sm font-raleway font-semibold text-gray-500 uppercase tracking-wider mb-3">
            Categorie
          </p>
          <div className="flex flex-wrap gap-2">
            {allCategories.map((cat) => {
              const isActive = selectedCategory === cat;
              const label = cat === 'all' ? 'Tous' : categoryLabels[cat];
              const color = cat === 'all' ? '#6B7280' : categoryColors[cat];
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-raleway font-semibold transition-all duration-300 ${
                    isActive
                      ? 'text-white shadow-lg scale-105'
                      : 'text-gray-600 bg-gray-100 hover:bg-gray-200'
                  }`}
                  style={isActive ? { backgroundColor: color } : undefined}
                >
                  {label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Filtre par niveau */}
        <div>
          <p className="text-sm font-raleway font-semibold text-gray-500 uppercase tracking-wider mb-3">
            Niveau
          </p>
          <div className="flex flex-wrap gap-2">
            {allLevels.map((lvl) => {
              const isActive = selectedLevel === lvl;
              const label = lvl === 'all' ? 'Tous les niveaux' : levelLabels[lvl];
              const colors = lvl === 'all' ? null : levelColors[lvl];
              return (
                <button
                  key={lvl}
                  onClick={() => setSelectedLevel(lvl)}
                  className={`px-4 py-2 rounded-full text-sm font-raleway font-semibold transition-all duration-300 border-2 ${
                    isActive
                      ? 'shadow-lg scale-105'
                      : 'border-transparent bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                  style={
                    isActive && colors
                      ? { backgroundColor: colors.bg, color: colors.text, borderColor: colors.text }
                      : isActive
                      ? { backgroundColor: '#374151', color: '#FFFFFF', borderColor: '#374151' }
                      : undefined
                  }
                >
                  {label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Grille d'articles */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        {filteredArticles.length === 0 ? (
          <div className="text-center py-16">
            <BookOpen className="w-12 h-12 mx-auto mb-4 text-gray-300" />
            <p className="text-gray-500 font-raleway text-lg">
              Aucun article ne correspond a ces filtres.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSelectedLevel('all');
              }}
              className="mt-4 text-[#00A3E0] font-raleway font-semibold hover:underline"
            >
              Reinitialiser les filtres
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {filteredArticles.map((article, index) => (
              <motion.article
                key={article.slug}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col"
              >
                {/* Bande de couleur en haut */}
                <div
                  className="h-2 w-full"
                  style={{ backgroundColor: categoryColors[article.category] }}
                />

                <div className="p-6 flex flex-col flex-grow">
                  {/* Badges */}
                  <div className="flex flex-wrap gap-2 mb-3">
                    {/* Badge categorie */}
                    <span
                      className="px-3 py-1 rounded-full text-xs font-raleway font-bold text-white"
                      style={{ backgroundColor: categoryColors[article.category] }}
                    >
                      {categoryLabels[article.category]}
                    </span>
                    {/* Badge niveau */}
                    <span
                      className="px-3 py-1 rounded-full text-xs font-raleway font-bold"
                      style={{
                        backgroundColor: levelColors[article.level].bg,
                        color: levelColors[article.level].text,
                      }}
                    >
                      {levelLabels[article.level]}
                    </span>
                  </div>

                  {/* Titre */}
                  <h2 className="text-lg font-bold font-raleway text-[#0F0D15] mb-2 group-hover:text-[#6B3FA0] transition-colors line-clamp-2">
                    {article.title}
                  </h2>

                  {/* Extrait */}
                  <p className="text-gray-600 font-raleway text-sm leading-relaxed mb-4 flex-grow line-clamp-3">
                    {article.excerpt}
                  </p>

                  {/* Meta */}
                  <div className="flex items-center gap-4 text-xs text-gray-400 font-raleway mb-4">
                    <span className="flex items-center gap-1">
                      <User className="w-3.5 h-3.5" />
                      {article.author}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {article.readTime}
                    </span>
                  </div>

                  {/* Bouton Lire */}
                  <Link
                    href={`/blog/${article.slug}`}
                    className="inline-flex items-center gap-2 font-raleway font-semibold text-sm transition-all duration-300 group-hover:gap-3"
                    style={{ color: categoryColors[article.category] }}
                  >
                    Lire l&apos;article
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        )}

        {/* Compteur */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-400 font-raleway">
            {filteredArticles.length} article{filteredArticles.length > 1 ? 's' : ''} affiche{filteredArticles.length > 1 ? 's' : ''}
          </p>
        </div>
      </section>

      {/* CTA Newsletter */}
      <section className="bg-[#0F0D15] py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white font-raleway mb-4">
            Restez informe des nouveautes NeuroInk
          </h2>
          <p className="text-gray-400 font-raleway mb-6">
            Recevez nos articles, conseils et offres exclusives directement dans votre boite mail.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full text-white font-raleway font-bold transition-all duration-300 hover:scale-105 hover:shadow-xl"
            style={{ background: 'linear-gradient(135deg, #6B3FA0, #00A3E0)' }}
          >
            Nous contacter
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </main>
  );
}
