'use client';

import { motion } from 'framer-motion';
import { Lightbulb, Eye, Heart, Sparkles } from 'lucide-react';

const values = [
  {
    icon: Lightbulb,
    title: 'Accessibilité',
    description: "L'IA doit être comprise par tous, pas seulement par une élite technique.",
    color: '#00A3E0',
  },
  {
    icon: Eye,
    title: 'Rigueur scientifique',
    description: "Nos contenus s'appuient sur des sources académiques vérifiées (MIT, Stanford, Nature).",
    color: '#6B3FA0',
  },
  {
    icon: Heart,
    title: 'Bienveillance',
    description: "Chaque apprenant mérite un accompagnement patient et encourageant.",
    color: '#40E0D0',
  },
];

export default function AboutNeuroInk() {
  return (
    <section 
      id="a-propos"
      className="relative py-20 sm:py-28 overflow-hidden"
      style={{ backgroundColor: '#0F0D15' }}
    >
      {/* Fond avec gradient animé subtil */}
      <div className="absolute inset-0">
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-3xl opacity-10"
          style={{ 
            background: 'radial-gradient(circle, #6B3FA0 0%, #00A3E0 50%, transparent 70%)',
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header de section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span 
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold mb-4 font-raleway"
            style={{ backgroundColor: 'rgba(0, 163, 224, 0.15)', color: '#00A3E0' }}
          >
            <Sparkles className="w-4 h-4" />
            Notre identité
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 font-raleway">
            À propos de{' '}
            <span style={{ color: '#00A3E0' }}>Neuro</span>
            <span style={{ color: '#6B3FA0' }}>Ink</span>
          </h2>
        </motion.div>

        {/* Mission et Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative group"
          >
            <div 
              className="h-full p-8 rounded-2xl border border-white/10 backdrop-blur-sm transition-all duration-500 hover:border-white/20"
              style={{ backgroundColor: 'rgba(255, 255, 255, 0.03)' }}
            >
              <div 
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-6 font-raleway uppercase tracking-wider"
                style={{ backgroundColor: 'rgba(0, 163, 224, 0.2)', color: '#00A3E0' }}
              >
                Notre Mission
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 font-raleway">
                Démocratiser et démystifier l'IA
              </h3>
              <p className="text-white/70 leading-relaxed font-raleway text-lg">
                Nous croyons que l'intelligence artificielle ne doit pas rester un mystère 
                réservé aux initiés. Notre mission est de rendre ces connaissances accessibles 
                à tous les francophones, à travers des contenus clairs, progressifs et engageants.
              </p>
              
              {/* Décoration */}
              <div 
                className="absolute top-4 right-4 w-20 h-20 rounded-full opacity-10 group-hover:opacity-20 transition-opacity"
                style={{ backgroundColor: '#00A3E0' }}
              />
            </div>
          </motion.div>

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative group"
          >
            <div 
              className="h-full p-8 rounded-2xl border border-white/10 backdrop-blur-sm transition-all duration-500 hover:border-white/20"
              style={{ backgroundColor: 'rgba(255, 255, 255, 0.03)' }}
            >
              <div 
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-6 font-raleway uppercase tracking-wider"
                style={{ backgroundColor: 'rgba(107, 63, 160, 0.2)', color: '#6B3FA0' }}
              >
                Notre Vision
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 font-raleway">
                Un monde où chacun comprend l'IA
              </h3>
              <p className="text-white/70 leading-relaxed font-raleway text-lg">
                Nous imaginons un futur où chaque francophone sera capable de comprendre, 
                utiliser et même contribuer à l'évolution de l'intelligence artificielle. 
                Un futur où la technologie n'est plus une barrière, mais un tremplin.
              </p>
              
              {/* Décoration */}
              <div 
                className="absolute top-4 right-4 w-20 h-20 rounded-full opacity-10 group-hover:opacity-20 transition-opacity"
                style={{ backgroundColor: '#6B3FA0' }}
              />
            </div>
          </motion.div>
        </div>

        {/* Nos Valeurs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h3 className="text-2xl font-bold text-white font-raleway">
            Nos valeurs fondamentales
          </h3>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="group"
              >
                <div 
                  className="h-full p-6 rounded-xl border border-white/5 transition-all duration-300 hover:border-white/15 text-center"
                  style={{ backgroundColor: 'rgba(255, 255, 255, 0.02)' }}
                >
                  {/* Icône */}
                  <div 
                    className="w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4 transition-transform duration-300 group-hover:scale-110"
                    style={{ backgroundColor: `${value.color}15` }}
                  >
                    <Icon className="w-7 h-7" style={{ color: value.color }} />
                  </div>
                  
                  {/* Titre */}
                  <h4 
                    className="text-lg font-bold mb-2 font-raleway"
                    style={{ color: value.color }}
                  >
                    {value.title}
                  </h4>
                  
                  {/* Description */}
                  <p className="text-white/60 text-sm leading-relaxed font-raleway">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Citation inspirante */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <blockquote 
            className="text-xl sm:text-2xl italic max-w-3xl mx-auto leading-relaxed font-raleway"
            style={{ color: '#40E0D0' }}
          >
            "L'IA n'est pas réservée aux génies, mais à ceux qui osent apprendre."
          </blockquote>
          <p className="text-white/50 mt-4 font-raleway">
            — Franklin KAMCHE, Fondateur de NeuroInk
          </p>
        </motion.div>
      </div>
    </section>
  );
}
