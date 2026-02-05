'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FileText } from 'lucide-react';

export default function CGVPage() {
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
            <FileText className="w-10 h-10 mx-auto mb-4" style={{ color: '#40E0D0' }} />
            <h1 className="text-4xl sm:text-5xl font-bold text-white font-raleway">
              Conditions générales de vente
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Contenu */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none font-raleway space-y-8">

            <div>
              <h2 className="text-2xl font-bold mb-4 font-raleway" style={{ color: '#6B3FA0' }}>1. Objet</h2>
              <p className="text-gray-700 leading-relaxed">
                Les présentes conditions générales de vente (CGV) régissent les ventes de livres et publications réalisées par NeuroInk, représenté par Franklin KAMCHE.
              </p>
              <p className="text-gray-700 leading-relaxed mt-2">
                Toute commande implique l'acceptation sans réserve des présentes CGV.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 font-raleway" style={{ color: '#6B3FA0' }}>2. Produits</h2>
              <p className="text-gray-700 leading-relaxed">
                Les produits proposés sont des livres au format papier et numérique (ebook), ainsi que des formations en ligne. Les descriptions et prix sont indiqués sur les pages correspondantes du site.
              </p>
              <p className="text-gray-700 leading-relaxed mt-2">
                NeuroInk se réserve le droit de modifier ses produits et tarifs à tout moment.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 font-raleway" style={{ color: '#6B3FA0' }}>3. Prix</h2>
              <p className="text-gray-700 leading-relaxed">
                Les prix sont indiqués en euros TTC (toutes taxes comprises). Les frais de livraison sont à la charge de l'acheteur et sont indiqués avant la validation de la commande sur les plateformes partenaires (Amazon, Fnac, Cultura, Publishroom).
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 font-raleway" style={{ color: '#6B3FA0' }}>4. Commande et paiement</h2>
              <p className="text-gray-700 leading-relaxed">
                Les commandes de livres sont effectuées via nos plateformes partenaires :
              </p>
              <ul className="mt-3 space-y-1.5 text-gray-700">
                <li>Amazon</li>
                <li>Fnac</li>
                <li>Cultura</li>
                <li>Publishroom</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-3">
                Les conditions de paiement et de livraison sont régies par les CGV de chaque plateforme partenaire. NeuroInk ne gère pas directement les transactions financières.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 font-raleway" style={{ color: '#6B3FA0' }}>5. Livraison</h2>
              <p className="text-gray-700 leading-relaxed">
                La livraison est assurée par les plateformes partenaires selon leurs propres modalités et délais. NeuroInk ne peut être tenu responsable des retards de livraison imputables aux transporteurs ou aux plateformes partenaires.
              </p>
              <p className="text-gray-700 leading-relaxed mt-2">
                Pour les ebooks, la livraison est immédiate après validation du paiement sur la plateforme concernée.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 font-raleway" style={{ color: '#6B3FA0' }}>6. Droit de rétractation</h2>
              <p className="text-gray-700 leading-relaxed">
                Conformément à l'article L.221-18 du Code de la consommation, vous disposez d'un délai de 14 jours à compter de la réception du produit pour exercer votre droit de rétractation, sans avoir à justifier de motifs ni à payer de pénalité.
              </p>
              <p className="text-gray-700 leading-relaxed mt-2">
                Ce droit s'exerce auprès de la plateforme sur laquelle l'achat a été effectué, conformément à ses propres conditions.
              </p>
              <p className="text-gray-700 leading-relaxed mt-2">
                <strong>Exception :</strong> Conformément à l'article L.221-28 du Code de la consommation, le droit de rétractation ne peut être exercé pour les contenus numériques (ebooks) dont l'exécution a commencé avec votre accord préalable.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 font-raleway" style={{ color: '#6B3FA0' }}>7. Garanties</h2>
              <p className="text-gray-700 leading-relaxed">
                Les produits bénéficient de la garantie légale de conformité (articles L.217-4 et suivants du Code de la consommation) et de la garantie des vices cachés (articles 1641 et suivants du Code civil).
              </p>
              <p className="text-gray-700 leading-relaxed mt-2">
                En cas de défaut de conformité, contactez-nous à contact@neuroink.fr avec une photo du problème.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 font-raleway" style={{ color: '#6B3FA0' }}>8. Réclamations</h2>
              <p className="text-gray-700 leading-relaxed">
                Pour toute réclamation, veuillez nous contacter à : <a href="mailto:contact@neuroink.fr" className="underline" style={{ color: '#00A3E0' }}>contact@neuroink.fr</a>
              </p>
              <p className="text-gray-700 leading-relaxed mt-2">
                Nous nous engageons à traiter votre réclamation dans un délai de 48 heures ouvrées.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 font-raleway" style={{ color: '#6B3FA0' }}>9. Propriété intellectuelle</h2>
              <p className="text-gray-700 leading-relaxed">
                L'achat d'un livre (papier ou numérique) confère à l'acheteur un droit d'utilisation personnelle et non cessible. Toute reproduction, diffusion ou revente du contenu, en tout ou en partie, est strictement interdite sans autorisation écrite préalable.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 font-raleway" style={{ color: '#6B3FA0' }}>10. Médiation</h2>
              <p className="text-gray-700 leading-relaxed">
                Conformément aux articles L.611-1 et suivants du Code de la consommation, en cas de litige non résolu, vous pouvez recourir gratuitement à un médiateur de la consommation. Nous vous communiquerons les coordonnées du médiateur compétent sur simple demande.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 font-raleway" style={{ color: '#6B3FA0' }}>11. Droit applicable</h2>
              <p className="text-gray-700 leading-relaxed">
                Les présentes CGV sont soumises au droit français. Tout litige relatif à leur interprétation ou à leur exécution relève de la compétence des tribunaux français.
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
