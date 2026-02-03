'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { GraduationCap, Clock, BarChart3, Check, ExternalLink, Bell } from 'lucide-react';
import Link from 'next/link';
import { getAvailableFormations, levelLabels, levelColors, type Formation } from '@/data/formations';
import type { NormalizedFormation } from '@/lib/fetch-data';

interface FormationsClientProps {
  sanityFormations: NormalizedFormation[] | null;
}

export default function FormationsClient({ sanityFormations }: FormationsClientProps) {
  // Utilise Sanity si disponible, sinon données locales
  const formations: any[] = sanityFormations || getAvailableFormations();

  return (
    <main className="min-h-screen bg-white">
      {/* Header avec image de fond */}
      <section className="relative py-20 sm:py-28 overflow-hidden" style={{ backgroundColor: '#0F0D15' }}>
        <Image src="/images/headers/header-formations.jpg" alt="" fill className="object-cover opacity-20" priority />
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 rounded-full blur-3xl opacity-20" style={{ backgroundColor: '#6B3FA0' }} />
          <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-20" style={{ backgroundColor: '#00A3E0' }} />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold mb-4 font-raleway" style={{ backgroundColor: 'rgba(107, 63, 160, 0.15)', color: '#40E0D0' }}>
              <GraduationCap className="w-4 h-4" />
              Formations & MOOC
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 font-raleway">
              Formations
            </h1>
            <p className="text-lg sm:text-xl text-white/70 max-w-2xl mx-auto font-raleway">
              Développez vos compétences en intelligence artificielle
            </p>
          </motion.div>
        </div>
      </section>

      {/* Grille */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {formations.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {formations.map((formation, i) => (
                <FormationCard key={formation.id} formation={formation} index={i} />
              ))}
            </div>
          ) : (
            <EmptyState />
          )}
        </div>
      </section>

      {/* CTA Newsletter */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <GraduationCap className="w-12 h-12 mx-auto mb-4" style={{ color: '#6B3FA0' }} />
          <h2 className="text-2xl font-bold mb-3 font-raleway" style={{ color: '#0F0D15' }}>
            Soyez informé du lancement
          </h2>
          <p className="text-gray-600 font-raleway mb-6">
            Inscrivez-vous à la newsletter pour être prévenu dès l&apos;ouverture des formations et bénéficier d&apos;un accès prioritaire.
          </p>
          <Link
            href="/#newsletter"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-white font-semibold font-raleway transition-all hover:shadow-lg"
            style={{ backgroundColor: '#6B3FA0' }}
          >
            <Bell className="w-4 h-4" />
            S&apos;inscrire à la newsletter
          </Link>
        </div>
      </section>
    </main>
  );
}

function FormationCard({ formation, index }: { formation: any; index: number }) {
  const [imgError, setImgError] = useState(false);
  const level = formation.level || 'debutant';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col"
    >
      <div className="relative h-48 overflow-hidden">
        {!imgError ? (
          <Image src={formation.coverImage} alt={formation.title} fill className="object-cover" onError={() => setImgError(true)} />
        ) : (
          <div className="w-full h-full flex items-center justify-center" style={{ background: `linear-gradient(135deg, ${levelColors[level] || '#6B3FA0'}40, ${levelColors[level] || '#6B3FA0'}10)` }}>
            <GraduationCap className="w-12 h-12 opacity-30" style={{ color: levelColors[level] || '#6B3FA0' }} />
          </div>
        )}
        {formation.status === 'coming_soon' && (
          <div className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold text-white font-raleway" style={{ backgroundColor: '#F59E0B' }}>
            Bientôt disponible
          </div>
        )}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 rounded-full text-xs font-semibold text-white font-raleway" style={{ backgroundColor: levelColors[level] || '#6B3FA0' }}>
            {levelLabels[level] || level}
          </span>
        </div>
      </div>

      <div className="p-6 flex-1 flex flex-col">
        <h3 className="text-lg font-bold mb-2 font-raleway" style={{ color: '#0F0D15' }}>{formation.title}</h3>
        <p className="text-gray-600 text-sm font-raleway mb-4 flex-1">{formation.shortDescription}</p>
        <div className="flex flex-wrap gap-3 mb-4 text-sm text-gray-500 font-raleway">
          <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" style={{ color: '#00A3E0' }} />{formation.duration}</span>
          <span className="flex items-center gap-1.5"><BarChart3 className="w-4 h-4" style={{ color: levelColors[level] || '#6B3FA0' }} />{levelLabels[level] || level}</span>
        </div>
        {formation.features && formation.features.length > 0 && (
          <ul className="space-y-1.5 mb-5">
            {formation.features.slice(0, 3).map((f: string, i: number) => (
              <li key={i} className="flex items-start gap-2 text-sm text-gray-600 font-raleway">
                <Check className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: '#40E0D0' }} />{f}
              </li>
            ))}
          </ul>
        )}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <span className="text-lg font-bold font-raleway" style={{ color: formation.price === 'gratuit' ? '#40E0D0' : '#6B3FA0' }}>
            {formation.price === 'gratuit' ? 'Gratuit' : `${formation.price} €`}
          </span>
          {formation.status === 'available' && formation.externalUrl ? (
            <a href={formation.externalUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-white text-sm font-semibold font-raleway transition-all hover:shadow-lg" style={{ backgroundColor: '#6B3FA0' }}>
              Accéder <ExternalLink className="w-3.5 h-3.5" />
            </a>
          ) : (
            <span className="px-4 py-2 rounded-full text-sm font-semibold font-raleway bg-gray-100 text-gray-400">Bientôt</span>
          )}
        </div>
      </div>
    </motion.div>
  );
}

function EmptyState() {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center py-20">
      <div className="w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center" style={{ backgroundColor: 'rgba(107, 63, 160, 0.1)' }}>
        <GraduationCap className="w-10 h-10" style={{ color: '#6B3FA0' }} />
      </div>
      <h3 className="text-xl font-bold mb-2 font-raleway" style={{ color: '#0F0D15' }}>Nos formations arrivent bientôt...</h3>
      <p className="text-gray-600 font-raleway">Restez informés via la newsletter !</p>
    </motion.div>
  );
}
