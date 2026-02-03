'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { BookOpen, Star, ShoppingCart, Download, Check, GraduationCap, Landmark, MapPin } from 'lucide-react';
import { allBooks } from '@/data/books';
import { trackEvent } from '@/lib/analytics';
import type { NormalizedBook } from '@/lib/fetch-data';

interface LivresClientProps {
  sanityBooks: NormalizedBook[] | null;
  sanityFaqs: { question: string; answer: string }[] | null;
}

export default function LivresClient({ sanityBooks, sanityFaqs }: LivresClientProps) {
  // Utilise Sanity si disponible, sinon données locales
  const localFeatured = allBooks.find(b => b.slug === 'odyssee-ia');
  const featuredBook = sanityBooks
    ? sanityBooks.find(b => b.isFeatured) || sanityBooks[0]
    : localFeatured;

  const faqItems = sanityFaqs || featuredBook?.faq || [];

  const handleBuyClick = (platform: string, format: string) => {
    trackEvent('clic_achat_livre', {
      livre: featuredBook?.title || 'Odyssée de l\'IA',
      plateforme: platform,
      format: format,
      prix: format === 'papier' ? String(featuredBook?.price) : String(featuredBook?.priceEbook)
    });
  };

  const handleDownloadExtract = () => {
    trackEvent('telechargement_extrait', {
      livre: featuredBook?.title || 'Odyssée de l\'IA'
    });
  };

  if (!featuredBook) return null;

  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <section className="relative py-20 sm:py-28 overflow-hidden" style={{ backgroundColor: '#0F0D15' }}>
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 rounded-full blur-3xl opacity-20" style={{ backgroundColor: '#6B3FA0' }} />
          <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-20" style={{ backgroundColor: '#00A3E0' }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold mb-4 font-raleway" style={{ backgroundColor: 'rgba(107, 63, 160, 0.15)', color: '#40E0D0' }}>
              <BookOpen className="w-4 h-4" />
              Nos publications
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 font-raleway">
              Nos livres
            </h1>
            <p className="text-lg sm:text-xl text-white/70 max-w-2xl mx-auto font-raleway">
              Des livres pour maîtriser l&apos;IA, quel que soit votre niveau
            </p>
          </motion.div>
        </div>
      </section>

      {/* Livre vedette */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Couverture */}
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:sticky lg:top-24">
              <div className="relative max-w-md mx-auto lg:mx-0">
                <div className="absolute inset-4 rounded-2xl blur-2xl opacity-30" style={{ backgroundColor: '#6B3FA0' }} />
                <div className="relative rounded-2xl overflow-hidden shadow-2xl" style={{ boxShadow: '0 25px 50px -12px rgba(107, 63, 160, 0.4)' }}>
                  <Image src={featuredBook.coverImage} alt={featuredBook.title} width={400} height={600} className="w-full h-auto" priority />
                </div>
                <div className="absolute -top-4 -right-4 px-3 py-2 rounded-full font-semibold text-white text-xs sm:text-sm shadow-lg font-raleway flex items-center gap-1.5" style={{ backgroundColor: '#6B3FA0' }}>
                  <GraduationCap className="w-4 h-4" />
                  <span className="hidden sm:inline">Acquis par le Conservatoire National des Arts et Métiers</span>
                  <span className="sm:hidden">Acquis par le CNAM</span>
                </div>
                <div className="absolute -bottom-4 -right-4 px-4 py-2 rounded-full font-semibold text-white text-sm shadow-lg font-raleway flex items-center gap-2" style={{ backgroundColor: '#40E0D0' }}>
                  <Check className="w-4 h-4" />
                  Disponible
                </div>
              </div>
            </motion.div>

            {/* Détails */}
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-6">
              <div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 font-raleway" style={{ color: '#0F0D15' }}>
                  {featuredBook.title}
                </h2>
                <p className="text-xl text-gray-600 font-raleway">{featuredBook.subtitle}</p>
              </div>

              <div className="p-5 rounded-xl border-l-4" style={{ backgroundColor: 'rgba(107, 63, 160, 0.05)', borderLeftColor: '#6B3FA0' }}>
                <p className="text-lg italic text-gray-700 font-raleway">{featuredBook.shortDescription}</p>
              </div>

              <div className="prose prose-lg max-w-none">
                {featuredBook.description.split('\n\n').map((para: string, i: number) => (
                  <p key={i} className="text-gray-600 font-raleway leading-relaxed">{para}</p>
                ))}
              </div>

              <div className="space-y-3">
                <h3 className="font-semibold text-gray-900 font-raleway flex items-center gap-2">
                  <span style={{ color: '#6B3FA0' }}>✔</span>
                  Ce que vous découvrirez
                </h3>
                <ul className="space-y-2.5">
                  {featuredBook.features.map((feature: string, i: number) => (
                    <li key={i} className="flex items-start gap-3 text-gray-600 font-raleway">
                      <Check className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#40E0D0' }} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-4 py-4 border-y border-gray-200">
                <div className="flex items-center gap-2 text-sm text-gray-500 font-raleway">
                  <BookOpen className="w-4 h-4" style={{ color: '#00A3E0' }} />
                  {featuredBook.pages} pages
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-500 font-raleway">
                  <span className="font-medium">ISBN:</span> {featuredBook.isbn}
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex flex-wrap items-center gap-6">
                  <div>
                    <p className="text-3xl font-bold font-raleway" style={{ color: '#6B3FA0' }}>{featuredBook.price} €</p>
                    <p className="text-sm text-gray-500 font-raleway">Version papier</p>
                  </div>
                  <div className="w-px h-12 bg-gray-200" />
                  <div>
                    <p className="text-3xl font-bold font-raleway" style={{ color: '#00A3E0' }}>{featuredBook.priceEbook} €</p>
                    <p className="text-sm text-gray-500 font-raleway">Version ebook</p>
                  </div>
                </div>

                <div className="space-y-5">
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href={featuredBook.buyLinks.amazon || featuredBook.buyLinks.publishroom || '#'}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => handleBuyClick('Amazon', 'papier')}
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-white font-semibold transition-all duration-300 hover:shadow-xl hover:scale-105 font-raleway"
                      style={{ backgroundColor: '#6B3FA0' }}
                    >
                      <ShoppingCart className="w-5 h-5" />
                      Commander (papier)
                    </a>
                    <a
                      href={featuredBook.buyLinks.amazonEbook || featuredBook.buyLinks.amazon || '#'}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => handleBuyClick('Amazon', 'ebook')}
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 border-2 hover:shadow-lg font-raleway"
                      style={{ borderColor: '#00A3E0', color: '#00A3E0' }}
                    >
                      <Star className="w-5 h-5" />
                      Commander (ebook)
                    </a>
                  </div>

                  <div className="pt-2">
                    <p className="text-sm text-gray-500 font-raleway mb-3">Également disponible sur :</p>
                    <div className="flex flex-wrap gap-2">
                      {featuredBook.buyLinks.fnac && (
                        <a href={featuredBook.buyLinks.fnac} target="_blank" rel="noopener noreferrer" onClick={() => handleBuyClick('Fnac', 'papier')} className="inline-flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-all border font-raleway hover:shadow-md" style={{ borderColor: '#6B3FA0', color: '#6B3FA0' }}>Fnac</a>
                      )}
                      {featuredBook.buyLinks.cultura && (
                        <a href={featuredBook.buyLinks.cultura} target="_blank" rel="noopener noreferrer" onClick={() => handleBuyClick('Cultura', 'papier')} className="inline-flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-all border font-raleway hover:shadow-md" style={{ borderColor: '#6B3FA0', color: '#6B3FA0' }}>Cultura</a>
                      )}
                      {featuredBook.buyLinks.publishroom && (
                        <a href={featuredBook.buyLinks.publishroom} target="_blank" rel="noopener noreferrer" onClick={() => handleBuyClick('Publishroom', 'papier')} className="inline-flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-all border font-raleway hover:shadow-md" style={{ borderColor: '#6B3FA0', color: '#6B3FA0' }}>Publishroom</a>
                      )}
                    </div>
                  </div>
                </div>

                <a
                  href={featuredBook.extractPdf || '/extrait-odyssee-ia.pdf'}
                  download
                  onClick={handleDownloadExtract}
                  className="inline-flex items-center gap-2 text-sm font-raleway transition-colors hover:underline"
                  style={{ color: '#6B3FA0' }}
                >
                  <Download className="w-4 h-4" />
                  Télécharger un extrait gratuit (PDF)
                </a>
              </div>

              <div className="p-4 rounded-xl text-sm text-gray-600 font-raleway" style={{ backgroundColor: 'rgba(0, 163, 224, 0.08)' }}>
                <strong className="font-semibold" style={{ color: '#00A3E0' }}>Pour qui ?</strong>
                {' '}{featuredBook.targetAudience}
              </div>

              {/* Section Disponibilité institutionnelle */}
              <div className="p-5 rounded-xl border-2" style={{ borderColor: 'rgba(107, 63, 160, 0.2)', backgroundColor: 'rgba(107, 63, 160, 0.03)' }}>
                <div className="flex items-start gap-3 mb-3">
                  <Landmark className="w-6 h-6 flex-shrink-0 mt-0.5" style={{ color: '#6B3FA0' }} />
                  <h3 className="font-semibold text-lg font-raleway" style={{ color: '#6B3FA0' }}>
                    Disponible en bibliothèque universitaire
                  </h3>
                </div>
                <div className="ml-9 space-y-1.5">
                  <p className="font-semibold text-gray-900 font-raleway">CREPAC - CNAM Paris</p>
                  <p className="text-gray-600 font-raleway text-sm">Centre de Ressources du Conservatoire National des Arts et Métiers</p>
                  <p className="text-gray-500 font-raleway text-sm flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 flex-shrink-0" style={{ color: '#6B3FA0' }} />
                    2 rue Conté, 75003 Paris
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      {faqItems.length > 0 && (
        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12 font-raleway" style={{ color: '#0F0D15' }}>
              Questions fréquentes
            </h2>
            <div className="space-y-4">
              {faqItems.map((item: any, i: number) => (
                <div key={i} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                  <h3 className="text-lg font-semibold mb-2 font-raleway" style={{ color: '#6B3FA0' }}>
                    {item.question}
                  </h3>
                  <p className="text-gray-600 font-raleway">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
