'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, FileText } from 'lucide-react';

export default function BlogPage() {
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
              <FileText className="w-4 h-4" />
              Actualités & Ressources
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 font-raleway">
              Blog & Actualités
            </h1>
            <p className="text-lg sm:text-xl text-white/70 max-w-2xl mx-auto font-raleway">
              Articles, tutoriels et réflexions sur l&apos;intelligence artificielle
            </p>
          </motion.div>
        </div>
      </section>

      {/* Message temporaire */}
      <section className="py-20 sm:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-2xl shadow-xl p-12 border-2 border-gray-100">
            <div className="w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #6B3FA0 0%, #00A3E0 100%)' }}>
              <FileText className="w-10 h-10 text-white" />
            </div>
            
            <h2 className="text-3xl font-bold mb-4 font-raleway" style={{ color: '#0F0D15' }}>
              Les premiers articles arrivent bientôt !
            </h2>
            
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto font-raleway">
              Nous préparons du contenu de qualité pour vous aider à maîtriser l&apos;intelligence artificielle. 
              Des tutoriels, des analyses et des réflexions seront publiés régulièrement.
            </p>

            <div className="p-6 rounded-xl mb-8" style={{ background: 'linear-gradient(135deg, rgba(107, 63, 160, 0.05) 0%, rgba(0, 163, 224, 0.05) 100%)' }}>
              <p className="text-gray-700 font-medium mb-3 font-raleway">
                💡 En attendant, découvrez :
              </p>
              <ul className="text-left text-gray-600 space-y-2 max-w-md mx-auto font-raleway">
                <li>• Notre livre &quot;L&apos;Odyssée de l&apos;IA en 30 jours&quot;</li>
                <li>• Nos formations pour tous les niveaux</li>
                <li>• L&apos;histoire et la mission de NeuroInk</li>
              </ul>
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

          {/* Newsletter CTA */}
          <div className="mt-12 rounded-2xl p-8 text-white" style={{ background: 'linear-gradient(135deg, #6B3FA0 0%, #00A3E0 50%, #40E0D0 100%)' }}>
            <h3 className="text-2xl font-bold mb-3 font-raleway">
              Ne manquez aucun article !
            </h3>
            <p className="text-white/90 mb-6 font-raleway">
              Inscrivez-vous à notre newsletter pour être notifié de la publication de nos premiers articles.
            </p>
            <Link
              href="/#newsletter"
              className="inline-block px-8 py-3 bg-white font-semibold rounded-lg hover:bg-gray-100 transition-colors font-raleway"
              style={{ color: '#6B3FA0' }}
            >
              S&apos;inscrire à la newsletter
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
