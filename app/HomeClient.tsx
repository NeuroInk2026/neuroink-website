'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, MessageCircle } from 'lucide-react';

import ValueProposition from '@/components/sections/ValueProposition';
import FeaturedBook from '@/components/sections/FeaturedBook';
import AboutNeuroInk from '@/components/sections/AboutNeuroInk';
import AboutAuthor from '@/components/sections/AboutAuthor';
import Testimonials from '@/components/sections/Testimonials';
import Newsletter from '@/components/sections/Newsletter';
import type { SiteSettingsData, NormalizedTestimonial } from '@/lib/fetch-data';

// Valeurs par défaut (fallback si Sanity est vide)
const defaultDynamicWords = [
  'accessible', 'compréhensible', 'démystifiée', 'passionnante',
  'révolutionnaire', 'transformatrice', 'inspirante', 'concrète',
  'pragmatique', 'lumineuse', 'captivante', 'essentielle',
];

const defaultQuotes = [
  "L'IA n'est pas de la magie, c'est de la logique rendue accessible",
  "Chaque algorithme est une histoire de données qui apprend à raconter l'avenir",
  "La convergence des réseaux de neurones profonds redéfinit les frontières du possible",
  "Vous utilisez déjà l'IA sans le savoir, maintenant comprenez-la",
  "Le machine learning transforme les patterns en prédictions actionnables",
  "30 jours suffisent pour démystifier l'intelligence artificielle",
  "Comprendre l'IA aujourd'hui, c'est se préparer au monde de demain",
  "L'IA n'est pas là pour vous remplacer, mais pour vous amplifier",
];

interface HomeClientProps {
  siteSettings: SiteSettingsData | null;
  sanityTestimonials: NormalizedTestimonial[] | null;
}

export default function HomeClient({ siteSettings, sanityTestimonials }: HomeClientProps) {
  // Utilise Sanity si disponible, sinon valeurs par défaut
  const dynamicWords = siteSettings?.heroDynamicWords?.length
    ? siteSettings.heroDynamicWords
    : defaultDynamicWords;

  const quotes = siteSettings?.heroQuotes?.length
    ? siteSettings.heroQuotes
    : defaultQuotes;

  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
  const [logoError, setLogoError] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % dynamicWords.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [dynamicWords.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuoteIndex((prev) => (prev + 1) % quotes.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [quotes.length]);

  return (
    <main className="min-h-screen">
      <section
        className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
        style={{ backgroundColor: '#0F0D15' }}
      >
        <div className="absolute inset-0">
          <Image
            src="/images/hero-background.jpg"
            alt=""
            fill
            className="object-cover opacity-40"
            priority
          />
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(135deg, rgba(107, 63, 160, 0.3) 0%, rgba(0, 163, 224, 0.3) 50%, rgba(64, 224, 208, 0.2) 100%)',
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background: 'radial-gradient(ellipse at center, transparent 0%, rgba(15, 13, 21, 0.8) 100%)',
            }}
          />
        </div>

        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-20">
          <div className="w-full max-w-6xl mx-auto space-y-8">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              {!logoError ? (
                <Image
                  src="/images/logo-neuroink.png"
                  alt="NeuroInk"
                  width={700}
                  height={350}
                  className="h-64 sm:h-72 md:h-80 lg:h-96 xl:h-[28rem] w-auto mx-auto"
                  priority
                  onError={() => setLogoError(true)}
                />
              ) : (
                <span className="text-7xl sm:text-8xl md:text-9xl font-bold font-raleway tracking-tight">
                  <span style={{ color: '#00A3E0' }}>NEURO</span>
                  <span style={{ color: '#6B3FA0' }}>INK</span>
                </span>
              )}
            </motion.div>

            {/* Titre principal */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center font-raleway leading-tight"
            >
              L&apos;intelligence artificielle enfin{' '}
              <span className="relative inline-block">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={currentWordIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    style={{ color: '#40E0D0' }}
                  >
                    {dynamicWords[currentWordIndex]}
                  </motion.span>
                </AnimatePresence>
              </span>
            </motion.h1>

            {/* Sous-titre */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg sm:text-xl text-white/80 max-w-4xl mx-auto text-center font-raleway leading-relaxed"
            >
              NeuroInk démocratise l&apos;intelligence artificielle avec des livres clairs,
              progressifs et sans prérequis. Rejoignez les{' '}
              <span className="font-semibold" style={{ color: '#00A3E0' }}>15 000+ apprenants</span>
              {' '}qui ont déjà franchi le pas.
            </motion.p>

            {/* Boutons CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-5 pt-4"
            >
              <Link
                href="/livres"
                className="group inline-flex items-center gap-2 px-8 py-4 rounded-full text-white font-semibold transition-all duration-300 hover:shadow-2xl hover:scale-105 font-raleway"
                style={{ backgroundColor: '#6B3FA0' }}
              >
                Découvrir nos livres
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                href="#a-propos"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-white font-semibold transition-all duration-300 border-2 border-white/30 hover:border-white/60 hover:bg-white/10 font-raleway"
              >
                <MessageCircle className="w-5 h-5" />
                Qui sommes-nous ?
              </Link>
            </motion.div>

            {/* Citation + Signature + Badge */}
            <div className="pt-12 space-y-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentQuoteIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.8 }}
                  className="text-center"
                >
                  <p
                    className="text-base sm:text-lg md:text-xl lg:text-2xl font-raleway italic max-w-5xl mx-auto leading-relaxed px-4 mb-4"
                    style={{ color: '#40E0D0' }}
                  >
                    &ldquo;{quotes[currentQuoteIndex]}&rdquo;
                  </p>
                  <p className="text-white/80 text-base sm:text-lg font-raleway tracking-wider">
                    - Franklin KAMCHE -
                  </p>
                </motion.div>
              </AnimatePresence>

              {/* Badge */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="flex justify-center"
              >
                <div className="inline-flex flex-col items-center gap-1.5 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-xl font-raleway shadow-lg">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full animate-pulse" style={{ backgroundColor: '#40E0D0' }} />
                    <span className="text-white font-semibold text-sm sm:text-base">Nouveau livre disponible !</span>
                  </div>
                  <span className="text-white/80 text-xs sm:text-sm">L&apos;Odyssée de l&apos;IA en 30 jours</span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Indicateur de scroll */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 rounded-full bg-white/60"
            />
          </div>
        </motion.div>
      </section>

      <ValueProposition />
      <FeaturedBook />
      <AboutNeuroInk />
      <AboutAuthor />
      {/* Passe les témoignages Sanity s'ils existent */}
      <Testimonials sanityData={sanityTestimonials} />
      <Newsletter />
    </main>
  );
}
