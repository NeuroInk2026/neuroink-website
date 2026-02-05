'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Clock, GraduationCap, Sparkles } from 'lucide-react';
import {
  formations,
  filterFormations,
  levelLabels,
  levelColors,
  type FormationLevel,
} from '@/lib/formations-data';

const allLevels: Array<FormationLevel | 'all'> = ['all', 'debutant', 'intermediaire', 'avance'];

export default function FormationsPage() {
  const [selectedLevel, setSelectedLevel] = useState<FormationLevel | 'all'>('all');

  const filteredFormations = filterFormations(selectedLevel);

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
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-raleway font-semibold mb-4"
            style={{ backgroundColor: 'rgba(64, 224, 208, 0.2)', color: '#40E0D0' }}
          >
            <GraduationCap className="w-4 h-4" />
            Formations &amp; MOOC
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-extrabold text-white font-raleway mb-4"
          >
            Formations
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-300 font-raleway max-w-2xl mx-auto"
          >
            Développez vos compétences en intelligence artificielle
          </motion.p>
        </div>
      </section>

      {/* Filtre par niveau - SANS le mot "NIVEAU" */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-wrap gap-2">
          {allLevels.map((lvl) => {
            const isActive = selectedLevel === lvl;
            const label = lvl === 'all' ? 'Toutes les formations' : levelLabels[lvl];
            const colors = lvl === 'all' ? null : levelColors[lvl];
            return (
              <button
                key={lvl}
                onClick={() => setSelectedLevel(lvl)}
                className={`px-5 py-2.5 rounded-full text-sm font-raleway font-semibold transition-all duration-300 border-2 ${
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
      </section>

      {/* Grille des formations */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredFormations.map((formation, index) => {
            const colors = levelColors[formation.level];
            
            return (
              <motion.div
                key={formation.slug}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col"
              >
                {/* Bande de couleur */}
                <div className="h-2 w-full" style={{ backgroundColor: colors.badge }} />

                <div className="p-6 flex flex-col flex-grow">
                  {/* Badges */}
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className="px-3 py-1 rounded-full text-xs font-raleway font-bold"
                      style={{ backgroundColor: colors.bg, color: colors.text }}
                    >
                      {levelLabels[formation.level]}
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-raleway font-bold bg-amber-50 text-amber-600">
                      Bientôt disponible
                    </span>
                  </div>

                  {/* Badge GRATUIT - CONDITIONNEL selon isFree */}
                  {formation.isFree && (
                    <div className="mb-3">
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-raleway font-bold bg-green-50 text-green-600">
                        <Sparkles className="w-3 h-3" />
                        GRATUIT
                      </span>
                    </div>
                  )}

                  {/* Titre */}
                  <h2 className="text-lg font-bold font-raleway text-[#0F0D15] mb-2 group-hover:text-[#6B3FA0] transition-colors">
                    {formation.title}
                  </h2>

                  {/* Description */}
                  <p className="text-gray-600 font-raleway text-sm leading-relaxed mb-4 flex-grow">
                    {formation.shortDescription}
                  </p>

                  {/* Durée */}
                  <div className="flex items-center gap-2 text-sm text-gray-400 font-raleway mb-4">
                    <Clock className="w-4 h-4" />
                    {formation.duration}
                  </div>

                  {/* Bouton */}
                  <Link
                    href={`/formations/${formation.slug}`}
                    className="inline-flex items-center gap-2 font-raleway font-semibold text-sm transition-all duration-300 group-hover:gap-3"
                    style={{ color: colors.badge }}
                  >
                    En savoir plus
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0F0D15] py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white font-raleway mb-4">
            Vous souhaitez être informé des lancements ?
          </h2>
          <p className="text-gray-400 font-raleway mb-6">
            Inscrivez-vous pour recevoir les informations sur nos prochaines formations.
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
