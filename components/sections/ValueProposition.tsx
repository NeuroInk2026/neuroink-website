'use client';

import { motion } from 'framer-motion';
import { Target, BookOpen, Globe } from 'lucide-react';

const pillars = [
  {
    icon: Target,
    title: 'Accessible',
    description: "Pas besoin d'être ingénieur pour comprendre l'IA. Nos contenus sont conçus pour tous, du néophyte au professionnel curieux.",
    color: '#00A3E0',
  },
  {
    icon: BookOpen,
    title: 'Pédagogique',
    description: "Progression étape par étape, du débutant à l'expert. Chaque concept est expliqué avec clarté et illustré par des exemples concrets.",
    color: '#6B3FA0',
  },
  {
    icon: Globe,
    title: 'Francophone',
    description: "Des contenus pensés pour le public francophone. L'IA expliquée dans votre langue, avec des références culturelles adaptées.",
    color: '#40E0D0',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

export default function ValueProposition() {
  return (
    <section className="relative py-20 sm:py-28 overflow-hidden" style={{ backgroundColor: '#0F0D15' }}>
      {/* Fond décoratif avec gradient subtil */}
      <div className="absolute inset-0 opacity-30">
        <div 
          className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-3xl"
          style={{ backgroundColor: '#6B3FA0', opacity: 0.15 }}
        />
        <div 
          className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full blur-3xl"
          style={{ backgroundColor: '#00A3E0', opacity: 0.15 }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Titre de section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span 
            className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4 font-raleway"
            style={{ backgroundColor: 'rgba(64, 224, 208, 0.15)', color: '#40E0D0' }}
          >
            Notre approche
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 font-raleway">
            Pourquoi choisir{' '}
            <span style={{ color: '#00A3E0' }}>Neuro</span>
            <span style={{ color: '#6B3FA0' }}>Ink</span> ?
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto font-raleway">
            Une vision unique de l'éducation à l'intelligence artificielle, 
            pensée pour vous accompagner à chaque étape de votre apprentissage.
          </p>
        </motion.div>

        {/* Les 3 piliers */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                variants={itemVariants}
                className="group relative"
              >
                <div 
                  className="relative h-full p-8 rounded-2xl border border-white/10 backdrop-blur-sm transition-all duration-500 hover:border-white/20 hover:shadow-2xl"
                  style={{ backgroundColor: 'rgba(255, 255, 255, 0.03)' }}
                >
                  {/* Icône avec cercle coloré */}
                  <div 
                    className="w-16 h-16 rounded-xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110"
                    style={{ backgroundColor: `${pillar.color}20` }}
                  >
                    <Icon 
                      className="w-8 h-8 transition-colors duration-300"
                      style={{ color: pillar.color }}
                    />
                  </div>

                  {/* Titre */}
                  <h3 
                    className="text-xl font-bold mb-4 font-raleway transition-colors duration-300"
                    style={{ color: pillar.color }}
                  >
                    {pillar.title}
                  </h3>

                  {/* Description */}
                  <p className="text-white/70 leading-relaxed font-raleway">
                    {pillar.description}
                  </p>

                  {/* Ligne décorative en bas */}
                  <div 
                    className="absolute bottom-0 left-8 right-8 h-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ backgroundColor: pillar.color }}
                  />

                  {/* Numéro décoratif */}
                  <span 
                    className="absolute top-6 right-6 text-6xl font-bold opacity-5 font-raleway"
                    style={{ color: pillar.color }}
                  >
                    0{index + 1}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Statistique en bas */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-8 sm:gap-12 flex-wrap justify-center">
            <div className="text-center">
              <p className="text-3xl sm:text-4xl font-bold font-raleway" style={{ color: '#00A3E0' }}>
                15 000+
              </p>
              <p className="text-white/60 text-sm mt-1 font-raleway">Apprenants formés</p>
            </div>
            <div className="w-px h-12 bg-white/20 hidden sm:block" />
            <div className="text-center">
              <p className="text-3xl sm:text-4xl font-bold font-raleway" style={{ color: '#6B3FA0' }}>
                10+
              </p>
              <p className="text-white/60 text-sm mt-1 font-raleway">Années d'expertise</p>
            </div>
            <div className="w-px h-12 bg-white/20 hidden sm:block" />
            <div className="text-center">
              <p className="text-3xl sm:text-4xl font-bold font-raleway" style={{ color: '#40E0D0' }}>
                100%
              </p>
              <p className="text-white/60 text-sm mt-1 font-raleway">Francophone</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
