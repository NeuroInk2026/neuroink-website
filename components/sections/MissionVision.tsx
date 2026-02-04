'use client';

import { motion } from 'framer-motion';
import DecorativeIcon from './DecorativeIcon';

export default function MissionVision() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50 font-raleway">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* NOTRE MISSION */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Card principale */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 shadow-xl relative overflow-hidden">
              {/* Badge */}
              <span className="inline-block px-4 py-1.5 bg-gradient-to-r from-[#6B3FA0] to-[#00A3E0] text-white text-xs font-semibold rounded-full mb-4">
                NOTRE MISSION
              </span>

              {/* Titre */}
              <h3 className="text-3xl font-bold text-white mb-6">
                Démocratiser et démystifier l'IA
              </h3>

              {/* Description */}
              <p className="text-gray-300 leading-relaxed text-lg">
                Nous croyons que l'intelligence artificielle ne doit pas rester un
                mystère réservé aux initiés. Notre mission est de rendre ces
                connaissances accessibles à tous les francophones, à travers
                des contenus clairs, progressifs et engageants.
              </p>

              {/* Icône décorative - MOTIF AJOUTÉ */}
              <div className="absolute -right-8 -top-8 w-40 h-40 opacity-20">
                <DecorativeIcon type="brain" className="w-full h-full" />
              </div>

              {/* Effet de brillance */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none" />
            </div>

            {/* Icône décorative externe - MOTIF AJOUTÉ */}
            <div className="hidden lg:block absolute -right-16 top-1/2 -translate-y-1/2 w-32 h-32 opacity-30">
              <DecorativeIcon type="brain" className="w-full h-full" />
            </div>
          </motion.div>

          {/* NOTRE VISION */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Card principale */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 shadow-xl relative overflow-hidden">
              {/* Badge */}
              <span className="inline-block px-4 py-1.5 bg-gradient-to-r from-[#40E0D0] to-[#00A3E0] text-white text-xs font-semibold rounded-full mb-4">
                NOTRE VISION
              </span>

              {/* Titre */}
              <h3 className="text-3xl font-bold text-white mb-6">
                Un monde où chacun comprend l'IA
              </h3>

              {/* Description */}
              <p className="text-gray-300 leading-relaxed text-lg">
                Nous imaginons un futur où chaque francophone sera capable
                de comprendre, utiliser et même contribuer à l'évolution de
                l'intelligence artificielle. Un futur où la technologie n'est plus
                une barrière, mais un tremplin.
              </p>

              {/* Icône décorative - MOTIF AJOUTÉ */}
              <div className="absolute -right-8 -top-8 w-40 h-40 opacity-20">
                <DecorativeIcon type="network" className="w-full h-full" />
              </div>

              {/* Effet de brillance */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none" />
            </div>

            {/* Icône décorative externe - MOTIF AJOUTÉ */}
            <div className="hidden lg:block absolute -left-16 top-1/2 -translate-y-1/2 w-32 h-32 opacity-30">
              <DecorativeIcon type="network" className="w-full h-full" />
            </div>
          </motion.div>
        </div>

        {/* Valeurs - Section bonus */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Nos valeurs</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Accessibilité',
                description: 'Contenu clair et sans prérequis techniques',
                gradient: 'from-[#6B3FA0] to-[#00A3E0]',
              },
              {
                title: 'Rigueur scientifique',
                description: 'Informations vérifiées et références solides',
                gradient: 'from-[#00A3E0] to-[#40E0D0]',
              },
              {
                title: 'Bienveillance',
                description: 'Accompagnement et soutien à chaque étape',
                gradient: 'from-[#40E0D0] to-[#6B3FA0]',
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div
                  className={`w-12 h-12 rounded-lg bg-gradient-to-r ${value.gradient} mx-auto mb-4 flex items-center justify-center`}
                >
                  <span className="text-white text-2xl font-bold">
                    {value.title.charAt(0)}
                  </span>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  {value.title}
                </h4>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
