'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { User, ArrowLeft, Share2, Linkedin, Twitter, BookOpen } from 'lucide-react';
import { getArticleBySlug, getPublishedArticles, categoryColors, categoryLabels } from '@/data/articles';
import SanityContent from '@/components/SanityContent';
import type { NormalizedArticle } from '@/lib/fetch-data';

interface ArticleClientProps {
  slug: string;
  sanityArticle: NormalizedArticle | null;
}

export default function ArticleClient({ slug, sanityArticle }: ArticleClientProps) {
  // Utilise Sanity si disponible, sinon données locales
  const localArticle = getArticleBySlug(slug);
  const article = sanityArticle || localArticle;
  const isSanityContent = sanityArticle?.contentType === 'portableText';

  const [imgError, setImgError] = useState(false);
  const [copied, setCopied] = useState(false);

  if (!article) {
    return (
      <main className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center py-20">
          <h1 className="text-4xl font-bold mb-4 font-raleway" style={{ color: '#0F0D15' }}>
            Article introuvable
          </h1>
          <p className="text-gray-600 mb-6 font-raleway">
            Cet article n&apos;existe pas ou a été supprimé.
          </p>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-white font-semibold font-raleway"
            style={{ backgroundColor: '#6B3FA0' }}
          >
            <ArrowLeft className="w-4 h-4" />
            Retour au blog
          </Link>
        </div>
      </main>
    );
  }

  // Articles similaires : Sanity ou local
  const otherArticles = sanityArticle?.relatedArticles
    || getPublishedArticles().filter((a) => a.slug !== slug).slice(0, 3);

  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';

  const handleShare = async () => {
    if (navigator.share) {
      await navigator.share({ title: article.title, url: shareUrl });
    } else {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Header image */}
      <section className="relative h-64 sm:h-80 lg:h-96 overflow-hidden" style={{ backgroundColor: '#0F0D15' }}>
        {!imgError ? (
          <Image
            src={article.coverImage}
            alt={article.title}
            fill
            className="object-cover opacity-40"
            onError={() => setImgError(true)}
            priority
          />
        ) : (
          <div className="absolute inset-0" style={{ background: `linear-gradient(135deg, #6B3FA0 0%, #00A3E0 100%)`, opacity: 0.3 }} />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

        <div className="relative h-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-end pb-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-white/70 hover:text-white mb-4 text-sm font-raleway transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Retour au blog
            </Link>
            <span
              className="inline-block px-3 py-1 rounded-full text-xs font-semibold text-white font-raleway mb-3"
              style={{ backgroundColor: categoryColors[article.category] || '#6B3FA0' }}
            >
              {categoryLabels[article.category] || article.category}
            </span>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white font-raleway">
              {article.title}
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Métadonnées */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-wrap items-center justify-between gap-4 border-b border-gray-100">
        <div className="flex items-center gap-2 text-sm text-gray-500 font-raleway">
          <User className="w-4 h-4" style={{ color: '#6B3FA0' }} />
          {article.author}
        </div>

        <div className="flex items-center gap-2">
          <a
            href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-full flex items-center justify-center bg-gray-100 hover:bg-blue-100 transition-colors"
            title="Partager sur LinkedIn"
          >
            <Linkedin className="w-4 h-4 text-gray-600" />
          </a>
          <a
            href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(article.title)}&url=${encodeURIComponent(shareUrl)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-full flex items-center justify-center bg-gray-100 hover:bg-blue-100 transition-colors"
            title="Partager sur X"
          >
            <Twitter className="w-4 h-4 text-gray-600" />
          </a>
          <button
            onClick={handleShare}
            className="w-9 h-9 rounded-full flex items-center justify-center bg-gray-100 hover:bg-purple-100 transition-colors relative"
            title="Copier le lien"
          >
            <Share2 className="w-4 h-4 text-gray-600" />
            {copied && (
              <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs bg-black text-white px-2 py-1 rounded whitespace-nowrap">
                Lien copié !
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Contenu de l'article */}
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
      >
        {/* Rendu conditionnel : Portable Text (Sanity) ou String (local) */}
        {isSanityContent ? (
          <SanityContent content={article.content} />
        ) : (
          <div className="prose prose-lg max-w-none font-raleway">
            {(typeof article.content === 'string' ? article.content : '').split('\n\n').map((para: string, i: number) => {
              if (para.startsWith('**') && para.endsWith('**')) {
                return (
                  <h2 key={i} className="text-2xl font-bold mt-8 mb-4 font-raleway" style={{ color: '#6B3FA0' }}>
                    {para.replace(/\*\*/g, '')}
                  </h2>
                );
              }
              if (para.startsWith('**')) {
                const parts = para.split('**');
                return (
                  <p key={i} className="text-gray-700 leading-relaxed mb-4 font-raleway">
                    {parts.map((part: string, j: number) =>
                      j % 2 === 1 ? (
                        <strong key={j} className="font-semibold" style={{ color: '#0F0D15' }}>{part}</strong>
                      ) : (
                        <span key={j}>{part}</span>
                      )
                    )}
                  </p>
                );
              }
              if (para.match(/^\d\./)) {
                const items = para.split('\n');
                return (
                  <div key={i} className="mb-4">
                    {items.map((item: string, j: number) => (
                      <p key={j} className="text-gray-700 leading-relaxed mb-2 font-raleway pl-4 border-l-2" style={{ borderLeftColor: '#40E0D0' }}>
                        {item}
                      </p>
                    ))}
                  </div>
                );
              }
              return (
                <p key={i} className="text-gray-700 leading-relaxed mb-4 font-raleway">
                  {para}
                </p>
              );
            })}
          </div>
        )}

        {/* Tags */}
        {article.tags && article.tags.length > 0 && (
          <div className="mt-12 pt-8 border-t border-gray-100">
            <div className="flex flex-wrap gap-2">
              {article.tags.map((tag: string) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 rounded-full text-sm font-raleway"
                  style={{ backgroundColor: 'rgba(107, 63, 160, 0.08)', color: '#6B3FA0' }}
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* CTA Livre */}
        <div className="mt-12 p-6 rounded-2xl border-2" style={{ borderColor: 'rgba(107, 63, 160, 0.2)', backgroundColor: 'rgba(107, 63, 160, 0.03)' }}>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <BookOpen className="w-10 h-10 flex-shrink-0" style={{ color: '#6B3FA0' }} />
            <div className="text-center sm:text-left">
              <p className="font-bold font-raleway" style={{ color: '#0F0D15' }}>
                Envie d&apos;aller plus loin ?
              </p>
              <p className="text-sm text-gray-600 font-raleway">
                Découvrez &quot;L&apos;Odyssée de l&apos;IA en 30 jours&quot; - 512 pages pour maîtriser l&apos;IA sans prérequis.
              </p>
            </div>
            <Link
              href="/livres"
              className="flex-shrink-0 px-6 py-2.5 rounded-full text-white font-semibold text-sm font-raleway transition-all hover:shadow-lg"
              style={{ backgroundColor: '#6B3FA0' }}
            >
              Voir le livre
            </Link>
          </div>
        </div>
      </motion.article>

      {/* Articles similaires */}
      {otherArticles && otherArticles.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold mb-8 font-raleway text-center" style={{ color: '#0F0D15' }}>
              À lire aussi
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {otherArticles.map((a: any) => (
                <Link
                  key={a.id}
                  href={`/blog/${a.slug}`}
                  className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 hover:shadow-lg transition-all group"
                >
                  <span
                    className="inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold text-white font-raleway mb-3"
                    style={{ backgroundColor: categoryColors[a.category] || '#6B3FA0' }}
                  >
                    {categoryLabels[a.category] || a.category}
                  </span>
                  <h3 className="font-bold font-raleway mb-2 group-hover:text-[#6B3FA0] transition-colors line-clamp-2" style={{ color: '#0F0D15' }}>
                    {a.title}
                  </h3>
                  <p className="text-sm text-gray-500 font-raleway line-clamp-2">{a.excerpt}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
