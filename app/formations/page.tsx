'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, GraduationCap, Target, Clock, BookOpen } from 'lucide-react';

export default function FormationsPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header - COPIE EXACTE DE LA PAGE LIVRES */}
      <section className="relative py-20 sm:py-28 overflow-hidden" style={{ backgroundColor: '#0F0D15' }}>
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

      {/* Message temporaire */}
      <section className="py-20 sm:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-2xl shadow-xl p-12 border-2 border-gray-100">
            <div className="w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #6B3FA0 0%, #00A3E0 100%)' }}>
              <GraduationCap className="w-10 h-10 text-white" />
            </div>
            
            <h2 className="text-3xl font-bold mb-4 font-raleway" style={{ color: '#0F0D15' }}>
              Nos formations arrivent bientôt !
            </h2>
            
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto font-raleway">
              Nous préparons des parcours de formation complets pour vous accompagner 
              dans votre apprentissage de l&apos;IA, quel que soit votre niveau.
            </p>

            <div className="p-6 rounded-xl mb-8" style={{ background: 'linear-gradient(135deg, rgba(107, 63, 160, 0.05) 0%, rgba(0, 163, 224, 0.05) 100%)' }}>
              <p className="text-gray-700 font-medium mb-4 font-raleway">
                💡 Formations prévues :
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
                <div className="flex items-start gap-3">
                  <Target className="w-5 h-5 flex-shrink-0 mt-1" style={{ color: '#40E0D0' }} />
                  <div>
                    <p className="font-semibold text-gray-900 font-raleway">Débutant</p>
                    <p className="text-sm text-gray-600 font-raleway">Introduction à l&apos;IA</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <BookOpen className="w-5 h-5 flex-shrink-0 mt-1" style={{ color: '#00A3E0' }} />
                  <div>
                    <p className="font-semibold text-gray-900 font-raleway">Intermédiaire</p>
                    <p className="text-sm text-gray-600 font-raleway">Machine Learning</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 flex-shrink-0 mt-1" style={{ color: '#6B3FA0' }} />
                  <div>
                    <p className="font-semibold text-gray-900 font-raleway">Avancé</p>
                    <p className="text-sm text-gray-600 font-raleway">Deep Learning</p>
                  </div>
                </div>
              </div>
            </div>

            <Link
              href="/"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-white font-semibold transition-all duration-300 hover:shadow-xl hover:scale-105 font-raleway"
              style={{ background: 'linear-gradient(135deg, #6B3FA0 0%, #00A3E0 100%)' }}
            >
              Retour à l&apos;accueil
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          {/* CTA Livre */}
          <div className="mt-12 rounded-2xl p-8 text-white" style={{ background: 'linear-gradient(135deg, #6B3FA0 0%, #00A3E0 50%, #40E0D0 100%)' }}>
            <h3 className="text-2xl font-bold mb-3 font-raleway">
              Commencez dès maintenant avec notre livre !
            </h3>
            <p className="text-white/90 mb-6 font-raleway">
              &quot;L&apos;Odyssée de l&apos;IA en 30 jours&quot; est le compagnon idéal pour débuter 
              votre apprentissage de l&apos;intelligence artificielle.
            </p>
            <Link
              href="/livres"
              className="inline-block px-8 py-3 bg-white font-semibold rounded-lg hover:bg-gray-100 transition-colors font-raleway"
              style={{ color: '#6B3FA0' }}
            >
              Découvrir le livre
            </Link>
          </div>

          {/* Newsletter */}
          <div className="mt-8 bg-white rounded-2xl p-8 shadow-lg border-2 border-gray-100">
            <h3 className="text-xl font-bold text-gray-900 mb-3 font-raleway">
              Soyez informé du lancement des formations
            </h3>
            <p className="text-gray-600 mb-6 font-raleway">
              Inscrivez-vous à notre newsletter pour recevoir une alerte 
              dès que nos formations seront disponibles.
            </p>
            <Link
              href="/#newsletter"
              className="inline-block px-8 py-3 rounded-lg text-white font-semibold transition-all duration-300 hover:shadow-xl font-raleway"
              style={{ background: 'linear-gradient(135deg, #6B3FA0 0%, #00A3E0 100%)' }}
            >
              S&apos;inscrire à la newsletter
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
