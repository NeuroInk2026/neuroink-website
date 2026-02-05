'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0F0D15] via-[#1a1625] to-[#0F0D15]">
      {/* Fond animé */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#6B3FA0] rounded-full blur-3xl opacity-20"
          animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.3, 0.2] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#00A3E0] rounded-full blur-3xl opacity-20"
          animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.3, 0.2] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#40E0D0] rounded-full blur-3xl opacity-10"
          animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 4 }}
        />
      </div>

      {/* Grille de points décoratifs */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />

      {/* Contenu */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Badge */}
          <motion.span
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold mb-8 font-raleway backdrop-blur-sm border-2"
            style={{
              backgroundColor: 'rgba(107, 63, 160, 0.15)',
              borderColor: '#6B3FA0',
              color: '#40E0D0'
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Sparkles className="w-4 h-4" />
            L'intelligence artificielle accessible à tous
          </motion.span>

          {/* Logo NeuroInk - OPTIMISATION 3: sizes pour responsive optimal */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Image
              src="/images/logo-neuroink.png"
              alt="NeuroInk Logo"
              width={256}
              height={256}
              sizes="(max-width: 640px) 128px, (max-width: 768px) 192px, 256px"
              priority
              className="h-64 sm:h-72 md:h-80 lg:h-96 xl:h-[28rem] w-auto mx-auto"
            />
          </motion.div>

          {/* Titre principal */}
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 font-raleway leading-tight"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            L'IA enfin accessible
            <br />
            <span className="bg-gradient-to-r from-[#6B3FA0] via-[#00A3E0] to-[#40E0D0] bg-clip-text text-transparent">
              à tous
            </span>
          </motion.h1>

          {/* Sous-titre */}
          <motion.p
            className="text-lg sm:text-xl md:text-2xl text-white/80 max-w-3xl mx-auto mb-12 font-raleway leading-relaxed"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            NeuroInk démocratise l'intelligence artificielle avec des formations, des livres clairs,
            progressifs et sans prérequis
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link
              href="/livres"
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-full text-white font-semibold text-lg transition-all duration-300 hover:shadow-2xl hover:scale-105 font-raleway"
              style={{
                background: 'linear-gradient(135deg, #6B3FA0 0%, #00A3E0 100%)'
              }}
            >
              Découvrir nos livres
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>

            <Link
              href="#about"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-lg border-2 transition-all duration-300 hover:bg-white/10 font-raleway"
              style={{
                borderColor: '#40E0D0',
                color: '#40E0D0'
              }}
            >
              Qui sommes-nous ?
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div className="transition-transform hover:scale-105">
              <p className="text-4xl font-bold font-raleway" style={{ color: '#40E0D0' }}>
                15 000+
              </p>
              <p className="text-white/60 font-raleway mt-2">Apprenants formés</p>
            </div>
            <div className="transition-transform hover:scale-105">
              <p className="text-4xl font-bold font-raleway" style={{ color: '#40E0D0' }}>
                512
              </p>
              <p className="text-white/60 font-raleway mt-2">Pages de contenu</p>
            </div>
            <div className="transition-transform hover:scale-105">
              <p className="text-4xl font-bold font-raleway" style={{ color: '#40E0D0' }}>
                30 jours
              </p>
              <p className="text-white/60 font-raleway mt-2">Pour maîtriser l'IA</p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
          <motion.div
            className="w-1 h-3 bg-white/50 rounded-full"
            animate={{ y: [0, 16, 0], opacity: [1, 0, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
