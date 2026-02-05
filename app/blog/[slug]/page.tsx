'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Clock, User, BookOpen, ExternalLink, Bookmark } from 'lucide-react';
import {
  getArticleBySlug,
  getRelatedArticles,
  categoryLabels,
  categoryColors,
  levelLabels,
  levelColors,
  blogArticles,
} from '@/lib/blog-data';

export default function ArticlePage() {
  const params = useParams();
  const slug = typeof params.slug === 'string' ? params.slug : '';
  const article = getArticleBySlug(slug);
  const relatedArticles = getRelatedArticles(slug);

  // 404 - Article non trouve
  if (!article) {
    return (
      <main className="min-h-screen bg-white pt-28">
        <div className="max-w-3xl mx-auto px-4 text-center py-20">
          <BookOpen className="w-16 h-16 mx-auto mb-6 text-gray-300" />
          <h1 className="text-3xl font-bold font-raleway text-[#0F0D15] mb-4">
            Article non trouve
          </h1>
          <p className="text-gray-500 font-raleway mb-8">
            Cet article n&apos;existe pas ou a ete deplace.
          </p>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-white font-raleway font-bold transition-all duration-300 hover:scale-105"
            style={{ background: 'linear-gradient(135deg, #6B3FA0, #00A3E0)' }}
          >
            <ArrowLeft className="w-5 h-5" />
            Retour au blog
          </Link>
        </div>
      </main>
    );
  }

  const catColor = categoryColors[article.category];
  const lvlColors = levelColors[article.level];

  return (
    <main className="min-h-screen bg-white">
      {/* Header Article */}
      <section className="relative pt-28 pb-16 md:pt-36 md:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[#0F0D15]" />
        <div
          className="absolute inset-0 opacity-20"
          style={{
            background: `radial-gradient(ellipse at 30% 50%, ${catColor} 0%, transparent 60%), radial-gradient(ellipse at 70% 50%, #40E0D0 0%, transparent 60%)`,
          }}
        />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Retour blog */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-gray-400 hover:text-white font-raleway text-sm transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              Retour au blog
            </Link>
          </motion.div>

          {/* Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-wrap gap-2 mb-4"
          >
            <span
              className="px-3 py-1 rounded-full text-xs font-raleway font-bold text-white"
              style={{ backgroundColor: catColor }}
            >
              {categoryLabels[article.category]}
            </span>
            <span
              className="px-3 py-1 rounded-full text-xs font-raleway font-bold"
              style={{
                backgroundColor: lvlColors.bg,
                color: lvlColors.text,
              }}
            >
              {levelLabels[article.level]}
            </span>
          </motion.div>

          {/* Titre */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-white font-raleway leading-tight mb-6"
          >
            {article.title}
          </motion.h1>

          {/* Meta */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap items-center gap-4 text-sm text-gray-400 font-raleway"
          >
            <span className="flex items-center gap-1.5">
              <User className="w-4 h-4" />
              {article.author}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              {article.readTime} de lecture
            </span>
            <span className="flex items-center gap-1.5">
              <Bookmark className="w-4 h-4" />
              {article.sources.length} source{article.sources.length > 1 ? 's' : ''} citee{article.sources.length > 1 ? 's' : ''}
            </span>
          </motion.div>
        </div>
      </section>

      {/* Contenu de l'article */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="max-w-3xl mx-auto">
          {/* Introduction / Excerpt */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-10 pb-8 border-b border-gray-100"
          >
            <p className="text-lg md:text-xl text-gray-700 font-raleway leading-relaxed italic" style={{ color: catColor }}>
              {article.excerpt}
            </p>
          </motion.div>

          {/* Sections */}
          {article.sections.map((section, sIdx) => (
            <motion.div
              key={sIdx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 + sIdx * 0.1 }}
              className="mb-10"
            >
              <h2 className="text-xl md:text-2xl font-bold font-raleway text-[#0F0D15] mb-4 flex items-start gap-3">
                <span
                  className="mt-1 w-1.5 h-8 rounded-full flex-shrink-0"
                  style={{ backgroundColor: catColor }}
                />
                {section.title}
              </h2>
              {section.paragraphs.map((para, pIdx) => (
                <p
                  key={pIdx}
                  className="text-gray-700 font-raleway leading-relaxed mb-4 text-base md:text-lg"
                >
                  {para}
                </p>
              ))}
            </motion.div>
          ))}

          {/* Encart CTA livre */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="my-12 p-6 md:p-8 rounded-2xl border-2 relative overflow-hidden"
            style={{ borderColor: catColor }}
          >
            <div
              className="absolute inset-0 opacity-5"
              style={{ backgroundColor: catColor }}
            />
            <div className="relative">
              <h3 className="text-lg md:text-xl font-bold font-raleway text-[#0F0D15] mb-2">
                Envie d&apos;aller plus loin ?
              </h3>
              <p className="text-gray-600 font-raleway mb-4">
                Decouvrez &quot;L&apos;Odyssee de l&apos;IA en 30 jours&quot; : 512 pages pour maitriser l&apos;intelligence artificielle pas a pas, sans prerequis technique.
              </p>
              <Link
                href="/livres"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-white font-raleway font-bold text-sm transition-all duration-300 hover:scale-105 hover:shadow-lg"
                style={{ background: `linear-gradient(135deg, #6B3FA0, #00A3E0)` }}
              >
                Decouvrir nos livres
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>

          {/* Sources */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            className="mt-12 pt-8 border-t border-gray-200"
          >
            <h3 className="text-lg font-bold font-raleway text-[#0F0D15] mb-4 flex items-center gap-2">
              <ExternalLink className="w-5 h-5" style={{ color: catColor }} />
              Sources et references
            </h3>
            <ul className="space-y-3">
              {article.sources.map((source, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3 text-sm font-raleway text-gray-600 p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
                >
                  <span
                    className="mt-1 w-2 h-2 rounded-full flex-shrink-0"
                    style={{ backgroundColor: catColor }}
                  />
                  <div>
                    <span className="font-semibold text-[#0F0D15]">
                      {source.name}
                    </span>
                    <br />
                    <span className="text-gray-500">
                      {source.institution}
                      {source.year ? ` (${source.year})` : ''}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Partage */}
          <div className="mt-8 pt-8 border-t border-gray-200">
            <p className="text-sm font-raleway font-semibold text-gray-500 mb-3">
              Partager cet article
            </p>
            <div className="flex gap-3">
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=https://neuroink.fr/blog/${article.slug}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-lg bg-[#0077B5] text-white text-sm font-raleway font-semibold hover:opacity-90 transition-opacity"
              >
                LinkedIn
              </a>
              <a
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(article.title)}&url=https://neuroink.fr/blog/${article.slug}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-lg bg-[#1DA1F2] text-white text-sm font-raleway font-semibold hover:opacity-90 transition-opacity"
              >
                X / Twitter
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Articles similaires */}
      {relatedArticles.length > 0 && (
        <section className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold font-raleway text-[#0F0D15] mb-8 text-center">
              Articles similaires
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {relatedArticles.map((related) => (
                <Link
                  key={related.slug}
                  href={`/blog/${related.slug}`}
                  className="group bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex gap-2 mb-3">
                    <span
                      className="px-2.5 py-0.5 rounded-full text-xs font-raleway font-bold text-white"
                      style={{ backgroundColor: categoryColors[related.category] }}
                    >
                      {categoryLabels[related.category]}
                    </span>
                    <span
                      className="px-2.5 py-0.5 rounded-full text-xs font-raleway font-bold"
                      style={{
                        backgroundColor: levelColors[related.level].bg,
                        color: levelColors[related.level].text,
                      }}
                    >
                      {levelLabels[related.level]}
                    </span>
                  </div>
                  <h3 className="font-bold font-raleway text-[#0F0D15] group-hover:text-[#6B3FA0] transition-colors mb-2">
                    {related.title}
                  </h3>
                  <p className="text-sm text-gray-500 font-raleway line-clamp-2">
                    {related.excerpt}
                  </p>
                  <span className="inline-flex items-center gap-1 mt-3 text-sm font-raleway font-semibold text-[#00A3E0] group-hover:gap-2 transition-all">
                    Lire <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
