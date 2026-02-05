'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Shield } from 'lucide-react';

export default function ConfidentialitePage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <section className="relative py-20 sm:py-24 overflow-hidden" style={{ backgroundColor: '#0F0D15' }}>
        <Image src="/images/headers/header-legal.jpg" alt="" fill className="object-cover opacity-15" priority />
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 rounded-full blur-3xl opacity-20" style={{ backgroundColor: '#6B3FA0' }} />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <Shield className="w-10 h-10 mx-auto mb-4" style={{ color: '#40E0D0' }} />
            <h1 className="text-4xl sm:text-5xl font-bold text-white font-raleway">
              Politique de confidentialité
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Contenu */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none font-raleway space-y-8">

            <div>
              <h2 className="text-2xl font-bold mb-4 font-raleway" style={{ color: '#6B3FA0' }}>1. Données collectées</h2>
              <p className="text-gray-700 leading-relaxed">
                Les données personnelles suivantes peuvent être collectées sur le site :
              </p>
              <ul className="mt-3 space-y-2 text-gray-700">
                <li><strong>Formulaire de contact :</strong> nom, adresse email, sujet et contenu du message</li>
                <li><strong>Newsletter :</strong> adresse email</li>
                <li><strong>Navigation :</strong> données de navigation anonymisées via Google Analytics (si vous acceptez les cookies)</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 font-raleway" style={{ color: '#6B3FA0' }}>2. Durée de conservation</h2>
              <ul className="space-y-2 text-gray-700">
                <li><strong>Formulaire de contact :</strong> 12 mois après le dernier échange</li>
                <li><strong>Newsletter :</strong> jusqu'à votre désinscription</li>
                <li><strong>Cookies analytiques :</strong> 13 mois maximum</li>
                <li><strong>Données de commande :</strong> 5 ans (obligation légale comptable)</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 font-raleway" style={{ color: '#6B3FA0' }}>3. Vos droits (RGPD)</h2>
              <p className="text-gray-700 leading-relaxed">
                Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés, vous disposez des droits suivants :
              </p>
              <ul className="mt-3 space-y-2 text-gray-700">
                <li><strong>Droit d'accès :</strong> obtenir la confirmation que vos données sont traitées et en obtenir une copie</li>
                <li><strong>Droit de rectification :</strong> demander la correction de données inexactes ou incomplètes</li>
                <li><strong>Droit à l'effacement :</strong> demander la suppression de vos données</li>
                <li><strong>Droit à la limitation :</strong> demander la limitation du traitement de vos données</li>
                <li><strong>Droit à la portabilité :</strong> recevoir vos données dans un format structuré</li>
                <li><strong>Droit d'opposition :</strong> vous opposer au traitement de vos données</li>
                <li><strong>Droit de retrait du consentement :</strong> retirer votre consentement à tout moment</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-3">
                Pour exercer ces droits, contactez-nous à : <a href="mailto:contact@neuroink.fr" className="underline" style={{ color: '#00A3E0' }}>contact@neuroink.fr</a>
              </p>
              <p className="text-gray-700 leading-relaxed mt-2">
                En cas de réclamation, vous pouvez également saisir la CNIL (Commission Nationale de l'Informatique et des Libertés) : <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: '#00A3E0' }}>www.cnil.fr</a>
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 font-raleway" style={{ color: '#6B3FA0' }}>4. Sécurité</h2>
              <p className="text-gray-700 leading-relaxed">
                Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données personnelles contre la destruction accidentelle ou illicite, la perte, l'altération, la divulgation ou l'accès non autorisé.
              </p>
              <p className="text-gray-700 leading-relaxed mt-2">
                Le site utilise le protocole HTTPS pour chiffrer les communications entre votre navigateur et nos serveurs.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 font-raleway" style={{ color: '#6B3FA0' }}>5. Modifications</h2>
              <p className="text-gray-700 leading-relaxed">
                Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment. La version en vigueur est celle accessible sur le site.
              </p>
            </div>

            <div className="pt-4 border-t border-gray-200">
              <p className="text-sm text-gray-500 font-raleway">
                Dernière mise à jour : janvier 2026
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
