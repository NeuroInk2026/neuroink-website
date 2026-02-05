'use client';

import { motion } from 'framer-motion';

export default function ConfidentialitePage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="relative py-20 overflow-hidden" style={{ backgroundColor: '#0F0D15' }}>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl sm:text-5xl font-bold text-white mb-4 font-raleway">
            Politique de confidentialité
          </motion.h1>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-lg">
          <div className="space-y-8 font-raleway">
            <div>
              <h2 className="text-2xl font-bold mb-4" style={{ color: '#6B3FA0' }}>Données collectées</h2>
              <p className="text-gray-700">
                NeuroInk collecte uniquement les données nécessaires au bon fonctionnement du site :
              </p>
              <ul className="text-gray-700 list-disc pl-6 space-y-2">
                <li>Formulaire de contact : nom, email, message</li>
                <li>Newsletter : email</li>
                <li>Cookies techniques (fonctionnement du site)</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4" style={{ color: '#6B3FA0' }}>Utilisation des données</h2>
              <p className="text-gray-700">
                Vos données sont utilisées uniquement pour :
              </p>
              <ul className="text-gray-700 list-disc pl-6 space-y-2">
                <li>Répondre à vos demandes de contact</li>
                <li>Vous envoyer notre newsletter (si vous y êtes inscrit)</li>
                <li>Améliorer nos services</li>
              </ul>
              <p className="text-gray-700 mt-4">
                <strong>Nous ne vendons ni ne partageons jamais vos données avec des tiers.</strong>
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4" style={{ color: '#6B3FA0' }}>Durée de conservation</h2>
              <p className="text-gray-700">
                Les données de contact sont conservées pendant 3 ans maximum.
                Les données newsletter sont conservées jusqu'à votre désinscription.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4" style={{ color: '#6B3FA0' }}>Vos droits RGPD</h2>
              <p className="text-gray-700">
                Conformément au RGPD, vous disposez des droits suivants :
              </p>
              <ul className="text-gray-700 list-disc pl-6 space-y-2">
                <li>Droit d'accès à vos données</li>
                <li>Droit de rectification</li>
                <li>Droit à l'effacement</li>
                <li>Droit à la portabilité</li>
                <li>Droit d'opposition</li>
              </ul>
              <p className="text-gray-700 mt-4">
                Pour exercer ces droits, contactez-nous à : <a href="mailto:contact@neuroink.fr" className="underline" style={{ color: '#6B3FA0' }}>contact@neuroink.fr</a>
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4" style={{ color: '#6B3FA0' }}>Cookies</h2>
              <p className="text-gray-700">
                Ce site utilise uniquement des cookies techniques nécessaires à son fonctionnement.
                Aucun cookie publicitaire ou de tracking n'est utilisé.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
