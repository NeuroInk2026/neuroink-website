'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  ArrowRight,
  Clock,
  GraduationCap,
  Target,
  Users,
  CheckCircle,
  BookOpen,
  Sparkles,
} from 'lucide-react';
import {
  getFormationBySlug,
  levelLabels,
  levelColors,
  formations,
} from '@/lib/formations-data';

export default function FormationDetailPage() {
  const params = useParams();
  const slug = typeof params.slug === 'string' ? params.slug : '';
  const formation = getFormationBySlug(slug);

  // 404
  if (!formation) {
    return (
      <main className="min-h-screen bg-white pt-28">
        <div className="max-w-3xl mx-auto px-4 text-center py-20">
          <GraduationCap className="w-16 h-16 mx-auto mb-6 text-gray-300" />
          <h1 className="text-3xl font-bold font-raleway text-[#0F0D15] mb-4">
            Formation non trouvée
          </h1>
          <p className="text-gray-500 font-raleway mb-8">
            Cette formation n&apos;existe pas ou a été déplacée.
          </p>
          <Link
            href="/formations"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-white font-raleway font-bold transition-all duration-300 hover:scale-105"
            style={{ background: 'linear-gradient(135deg, #6B3FA0, #00A3E0)' }}
          >
            <ArrowLeft className="w-5 h-5" />
            Retour aux formations
          </Link>
        </div>
      </main>
    );
  }

  const colors = levelColors[formation.level];

  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <section className="relative pt-28 pb-16 md:pt-36 md:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[#0F0D15]" />
        <div
          className="absolute inset-0 opacity-20"
          style={{
            background: `radial-gradient(ellipse at 30% 50%, ${colors.badge} 0%, transparent 60%), radial-gradient(ellipse at 70% 50%, #40E0D0 0%, transparent 60%)`,
          }}
        />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Retour */}
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
            <Link
              href="/formations"
              className="inline-flex items-center gap-2 text-gray-400 hover:text-white font-raleway text-sm transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              Retour aux formations
            </Link>
          </motion.div>

          {/* Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="flex flex-wrap gap-2 mb-4"
          >
            <span
              className="px-3 py-1 rounded-full text-xs font-raleway font-bold"
              style={{ backgroundColor: colors.bg, color: colors.text }}
            >
              {levelLabels[formation.level]}
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-raleway font-bold bg-amber-500/20 text-amber-300">
              Bientôt disponible
            </span>
            {/* Badge GRATUIT - CONDITIONNEL selon isFree */}
            {formation.isFree && (
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-raleway font-bold bg-green-500/20 text-green-300">
                <Sparkles className="w-3 h-3" />
                GRATUIT
              </span>
            )}
          </motion.div>

          {/* Titre */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-white font-raleway leading-tight mb-4"
          >
            {formation.title}
          </motion.h1>

          {/* Description courte */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-lg text-gray-300 font-raleway mb-6"
          >
            {formation.shortDescription}
          </motion.p>

          {/* Meta */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap items-center gap-4 text-sm text-gray-400 font-raleway"
          >
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              {formation.duration}
            </span>
            <span className="flex items-center gap-1.5">
              <BookOpen className="w-4 h-4" />
              {formation.modules.length} modules
            </span>
          </motion.div>
        </div>
      </section>

      {/* Contenu principal */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Colonne principale */}
          <div className="lg:col-span-2">
            {/* Sections de contenu */}
            {formation.sections.map((section, sIdx) => (
              <motion.div
                key={sIdx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + sIdx * 0.1 }}
                className="mb-10"
              >
                <h2 className="text-xl md:text-2xl font-bold font-raleway text-[#0F0D15] mb-4 flex items-start gap-3">
                  <span
                    className="mt-1 w-1.5 h-8 rounded-full flex-shrink-0"
                    style={{ backgroundColor: colors.badge }}
                  />
                  {section.title}
                </h2>
                {section.paragraphs.map((para, pIdx) => (
                  <p key={pIdx} className="text-gray-700 font-raleway leading-relaxed mb-4 text-base">
                    {para}
                  </p>
                ))}
              </motion.div>
            ))}

            {/* Programme détaillé */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="mt-12"
            >
              <h2 className="text-xl md:text-2xl font-bold font-raleway text-[#0F0D15] mb-6 flex items-center gap-3">
                <GraduationCap className="w-6 h-6" style={{ color: colors.badge }} />
                Programme détaillé
              </h2>
              <div className="space-y-4">
                {formation.modules.map((mod, mIdx) => (
                  <div
                    key={mIdx}
                    className="p-4 md:p-5 rounded-xl border border-gray-100 bg-gray-50 hover:bg-white hover:shadow-md transition-all duration-300"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-grow">
                        <h3 className="font-bold font-raleway text-[#0F0D15] mb-1">
                          {mod.title}
                        </h3>
                        <p className="text-sm text-gray-600 font-raleway">
                          {mod.description}
                        </p>
                      </div>
                      <span className="flex-shrink-0 flex items-center gap-1 text-xs font-raleway font-semibold text-gray-400 bg-white px-2.5 py-1 rounded-full border border-gray-200">
                        <Clock className="w-3 h-3" />
                        {mod.duration}h
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              {/* Total */}
              <div className="mt-4 text-right">
                <span className="text-sm font-raleway font-semibold text-gray-500">
                  Total : {formation.modules.reduce((acc, m) => acc + parseInt(m.duration), 0)} heures
                </span>
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Objectifs */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
                className="p-5 rounded-2xl border border-gray-100 bg-gray-50"
              >
                <h3 className="font-bold font-raleway text-[#0F0D15] mb-3 flex items-center gap-2">
                  <Target className="w-5 h-5" style={{ color: colors.badge }} />
                  Objectifs
                </h3>
                <ul className="space-y-2">
                  {formation.objectives.map((obj, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm font-raleway text-gray-600">
                      <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: colors.badge }} />
                      {obj}
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Prérequis */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 }}
                className="p-5 rounded-2xl border border-gray-100 bg-gray-50"
              >
                <h3 className="font-bold font-raleway text-[#0F0D15] mb-3 flex items-center gap-2">
                  <BookOpen className="w-5 h-5" style={{ color: colors.badge }} />
                  Prérequis
                </h3>
                <ul className="space-y-2">
                  {formation.prerequisites.map((pre, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm font-raleway text-gray-600">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: colors.badge }} />
                      {pre}
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Public cible */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 }}
                className="p-5 rounded-2xl border border-gray-100 bg-gray-50"
              >
                <h3 className="font-bold font-raleway text-[#0F0D15] mb-3 flex items-center gap-2">
                  <Users className="w-5 h-5" style={{ color: colors.badge }} />
                  Pour qui ?
                </h3>
                <ul className="space-y-2">
                  {formation.targetAudience.map((aud, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm font-raleway text-gray-600">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: colors.badge }} />
                      {aud}
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.9 }}
                className="p-5 rounded-2xl text-center"
                style={{ background: `linear-gradient(135deg, ${colors.badge}15, ${colors.badge}05)`, border: `2px solid ${colors.badge}30` }}
              >
                <p className="font-raleway font-semibold text-[#0F0D15] mb-2">
                  Formation bientôt disponible
                </p>
                <p className="text-sm text-gray-500 font-raleway mb-4">
                  Soyez informé du lancement
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-white font-raleway font-bold text-sm transition-all duration-300 hover:scale-105"
                  style={{ background: `linear-gradient(135deg, #6B3FA0, #00A3E0)` }}
                >
                  Me prévenir
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Autres formations */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold font-raleway text-[#0F0D15] mb-8 text-center">
            Autres formations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {formations
              .filter((f) => f.slug !== formation.slug)
              .slice(0, 4)
              .map((other) => {
                const otherColors = levelColors[other.level];
                return (
                  <Link
                    key={other.slug}
                    href={`/formations/${other.slug}`}
                    className="group bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex gap-2 mb-3">
                      <span
                        className="px-2.5 py-0.5 rounded-full text-xs font-raleway font-bold"
                        style={{ backgroundColor: otherColors.bg, color: otherColors.text }}
                      >
                        {levelLabels[other.level]}
                      </span>
                      {other.isFree && (
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-raleway font-bold bg-green-50 text-green-600">
                          <Sparkles className="w-3 h-3" />
                          GRATUIT
                        </span>
                      )}
                    </div>
                    <h3 className="font-bold font-raleway text-[#0F0D15] group-hover:text-[#6B3FA0] transition-colors mb-2">
                      {other.title}
                    </h3>
                    <p className="text-sm text-gray-500 font-raleway line-clamp-2">
                      {other.shortDescription}
                    </p>
                    <span className="inline-flex items-center gap-1 mt-3 text-sm font-raleway font-semibold group-hover:gap-2 transition-all" style={{ color: otherColors.badge }}>
                      En savoir plus <ArrowRight className="w-4 h-4" />
                    </span>
                  </Link>
                );
              })}
          </div>
        </div>
      </section>
    </main>
  );
}
