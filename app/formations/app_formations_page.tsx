'use client';

import { motion } from 'framer-motion';
import { BookOpen, Clock, Users, Star } from 'lucide-react';

export default function FormationsPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="relative py-20 sm:py-28 overflow-hidden" style={{ backgroundColor: '#0F0D15' }}>
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 rounded-full blur-3xl opacity-20" style={{ backgroundColor: '#6B3FA0' }} />
          <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-20" style={{ backgroundColor: '#00A3E0' }} />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 font-raleway" style={{ color: '#40E0D0' }}>
              Formations & MOOC
            </h1>
            <p className="text-lg sm:text-xl text-white/70 max-w-2xl mx-auto font-raleway">
              Développez vos compétences en intelligence artificielle
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-2xl mx-auto">
            <div className="w-32 h-32 mx-auto mb-8 rounded-full flex items-center justify-center" style={{ backgroundColor: 'rgba(107, 63, 160, 0.1)' }}>
              <BookOpen className="w-16 h-16" style={{ color: '#6B3FA0' }} />
            </div>
            <h2 className="text-3xl font-bold mb-4 font-raleway" style={{ color: '#0F0D15' }}>Ce site se construit pendant que nos formations sont déjà en action</h2>
            <p className="text-lg text-gray-600 mb-4 font-raleway">
              Les contenus sont prêts, testés et actuellement déployés en accès restreint sur des plateformes privées.
            </p>
            <p className="text-base text-gray-600 mb-8 font-raleway">
              🔔 Suis-nous sur les réseaux pour être parmi les premiers informés lors de l'ouverture publique.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/livres" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-white font-semibold transition-all hover:shadow-xl font-raleway" style={{ backgroundColor: '#6B3FA0' }}>
                <BookOpen className="w-5 h-5" />
                Découvrir le livre
              </a>
              <a href="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold transition-all border-2 font-raleway" style={{ borderColor: '#00A3E0', color: '#00A3E0' }}>
                Être informé du lancement
              </a>
              <a href="https://linktr.ee/neuroink" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold transition-all border-2 font-raleway" style={{ borderColor: '#40E0D0', color: '#40E0D0' }}>
                🔗 Linktree
              </a>
            </div>
          </div>

          <div className="grid sm:grid-cols-3 gap-8 mt-20">
            <div className="p-6 rounded-xl border border-gray-200">
              <Clock className="w-12 h-12 mx-auto mb-4" style={{ color: '#6B3FA0' }} />
              <h3 className="font-bold mb-2 font-raleway">Apprentissage flexible</h3>
              <p className="text-sm text-gray-600 font-raleway">À votre rythme, selon vos disponibilités</p>
            </div>
            <div className="p-6 rounded-xl border border-gray-200">
              <Users className="w-12 h-12 mx-auto mb-4" style={{ color: '#00A3E0' }} />
              <h3 className="font-bold mb-2 font-raleway">Communauté active</h3>
              <p className="text-sm text-gray-600 font-raleway">Échangez avec d'autres apprenants</p>
            </div>
            <div className="p-6 rounded-xl border border-gray-200">
              <Star className="w-12 h-12 mx-auto mb-4" style={{ color: '#40E0D0' }} />
              <h3 className="font-bold mb-2 font-raleway">Contenu de qualité</h3>
              <p className="text-sm text-gray-600 font-raleway">Par Franklin KAMCHE</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
