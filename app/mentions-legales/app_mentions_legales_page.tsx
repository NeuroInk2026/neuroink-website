'use client';

import { motion } from 'framer-motion';

export default function MentionsLegalesPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="relative py-20 overflow-hidden" style={{ backgroundColor: '#0F0D15' }}>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl sm:text-5xl font-bold text-white mb-4 font-raleway">
            Mentions légales
          </motion.h1>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-lg">
          <div className="space-y-8 font-raleway">
            <div>
              <h2 className="text-2xl font-bold mb-4" style={{ color: '#6B3FA0' }}>Éditeur du site</h2>
              <p className="text-gray-700">
                <strong>NeuroInk</strong><br/>
                Franklin KAMCHE<br/>
                Email : contact@neuroink.fr
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4" style={{ color: '#6B3FA0' }}>Propriété intellectuelle</h2>
              <p className="text-gray-700">
                L'ensemble du contenu de ce site (textes, images, vidéos, logos) est la propriété exclusive de NeuroInk, sauf mention contraire.
                Toute reproduction, même partielle, est interdite sans autorisation préalable.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4" style={{ color: '#6B3FA0' }}>Crédits</h2>
              <p className="text-gray-700">
                Conception et développement : NeuroInk<br/>
                © 2026 NeuroInk — Tous droits réservés
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
