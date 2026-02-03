'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Scale } from 'lucide-react';

export default function MentionsLegalesPage() {
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
            <Scale className="w-10 h-10 mx-auto mb-4" style={{ color: '#40E0D0' }} />
            <h1 className="text-4xl sm:text-5xl font-bold text-white font-raleway">
              Mentions légales
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Contenu */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none font-raleway space-y-8">

            <div>
              <h2 className="text-2xl font-bold mb-4 font-raleway" style={{ color: '#6B3FA0' }}>1. Éditeur du site</h2>
              <ul className="mt-3 space-y-1.5 text-gray-700">
                <li><strong>Responsable de publication :</strong> Franklin KAMCHE</li>
                <li><strong>Email :</strong> neuroink.official@gmail.com</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 font-raleway" style={{ color: '#6B3FA0' }}>2. Hébergement</h2>
              <ul className="mt-3 space-y-1.5 text-gray-700">
                <li><strong>Vercel Inc.</strong></li>
                <li>440 N Barranca Ave #4133, Covina, CA 91723, États-Unis</li>
                <li>Site : <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: '#00A3E0' }}>vercel.com</a></li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 font-raleway" style={{ color: '#6B3FA0' }}>3. Propriété intellectuelle</h2>
              <p className="text-gray-700 leading-relaxed">
                Toute reproduction, représentation, modification, publication ou adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite sans l'autorisation écrite préalable de NeuroInk.
              </p>
              <p className="text-gray-700 leading-relaxed mt-3">
                Le logo NeuroInk, les marques et les noms de domaine associés sont la propriété exclusive de Franklin KAMCHE / NeuroInk.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 font-raleway" style={{ color: '#6B3FA0' }}>4. Limitation de responsabilité</h2>
              <p className="text-gray-700 leading-relaxed">
                NeuroInk s'efforce de fournir des informations aussi précises que possible sur le site. Toutefois, il ne pourra être tenu responsable des omissions, des inexactitudes et des carences dans la mise à jour, qu'elles soient de son fait ou du fait des tiers partenaires qui lui fournissent ces informations.
              </p>
              <p className="text-gray-700 leading-relaxed mt-3">
                Les liens hypertextes mis en place vers d'autres sites ne sauraient engager la responsabilité de NeuroInk quant au contenu de ces sites.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 font-raleway" style={{ color: '#6B3FA0' }}>5. Crédits</h2>
              <p className="text-gray-700 leading-relaxed">
                Conception et développement : Franklin KAMCHE
              </p>
              <p className="text-gray-700 leading-relaxed mt-2">
                Photographies : droits réservés
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 font-raleway" style={{ color: '#6B3FA0' }}>6. Droit applicable</h2>
              <p className="text-gray-700 leading-relaxed">
                Les présentes mentions légales sont soumises au droit français. En cas de litige, les tribunaux français seront seuls compétents.
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
