'use client';

import { motion } from 'framer-motion';

export default function CGVPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="relative py-20 overflow-hidden" style={{ backgroundColor: '#0F0D15' }}>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl sm:text-5xl font-bold text-white mb-4 font-raleway">
            Conditions Générales de Vente
          </motion.h1>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-lg">
          <div className="space-y-8 font-raleway">
            <div>
              <h2 className="text-2xl font-bold mb-4" style={{ color: '#6B3FA0' }}>Vente de livres</h2>
              <p className="text-gray-700">
                Les livres NeuroInk sont vendus via des plateformes partenaires (Amazon, Cultura, Fnac, Publishroom) 
                et distribués dans un réseau de <strong>plus de 5 000 librairies dans le monde</strong>.
              </p>
              <p className="text-gray-700 mt-3">
                Les conditions de vente de chaque plateforme s'appliquent à votre achat.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4" style={{ color: '#6B3FA0' }}>Prix</h2>
              <p className="text-gray-700">
                Les prix affichés sur neuroink.fr sont donnés à titre indicatif en euros TTC.
                Les prix effectifs sont ceux indiqués sur la plateforme de vente au moment de l'achat.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4" style={{ color: '#6B3FA0' }}>Livraison</h2>
              <p className="text-gray-700">
                Les délais et modes de livraison sont gérés par la plateforme partenaire choisie.
                Consultez leurs conditions respectives pour plus d'informations.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4" style={{ color: '#6B3FA0' }}>Droit de rétractation</h2>
              <p className="text-gray-700">
                Conformément à la législation européenne, vous disposez d'un délai de 14 jours pour exercer votre droit de rétractation.
              </p>
              <p className="text-gray-700 mt-2">
                <strong>Exception :</strong> Les ebooks (contenus numériques) ne sont pas éligibles au droit de rétractation une fois téléchargés.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4" style={{ color: '#6B3FA0' }}>Réclamations</h2>
              <p className="text-gray-700">
                Pour toute réclamation concernant votre commande, contactez d'abord la plateforme de vente.
                Pour toute question sur le contenu du livre, contactez-nous à : <a href="mailto:neuroink.official@gmail.com" className="underline" style={{ color: '#6B3FA0' }}>neuroink.official@gmail.com</a>
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4" style={{ color: '#6B3FA0' }}>Propriété intellectuelle</h2>
              <p className="text-gray-700">
                Tous les contenus des livres NeuroInk (textes, illustrations, exercices) sont protégés par le droit d'auteur.
                Toute reproduction ou diffusion non autorisée est interdite.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4" style={{ color: '#6B3FA0' }}>Loi applicable</h2>
              <p className="text-gray-700">
                Les présentes CGV sont soumises au droit français.
                En cas de litige, les tribunaux français seront seuls compétents.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
