'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import { Linkedin, BookOpen, Users, Award, Landmark } from 'lucide-react';

const stats = [
  { icon: BookOpen, value: '1', label: 'Livre publié', color: '#6B3FA0' },
  { icon: Users, value: '15 000+', label: 'Apprenants formés', color: '#00A3E0' },
  { icon: Award, value: '10+', label: "Années d'expérience", color: '#40E0D0' },
];

const LINKEDIN_FRANKLIN = 'https://www.linkedin.com/in/franklin-kamche';

export default function AboutAuthor() {
  const [imageError, setImageError] = useState(false);

  return (
    <section id="a-propos" className="relative py-20 sm:py-28 overflow-hidden bg-gray-50">
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-10" style={{ backgroundColor: '#6B3FA0' }} />
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full blur-3xl opacity-10" style={{ backgroundColor: '#00A3E0' }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span 
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold mb-4 font-raleway"
            style={{ backgroundColor: 'rgba(107, 63, 160, 0.1)', color: '#6B3FA0' }}
          >
            À propos de l'auteur
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 font-raleway" style={{ color: '#0F0D15' }}>
            Franklin KAMCHE
          </h2>
          <p className="text-xl text-gray-600 font-raleway">
            Ingénieur, Auteur & Formateur en Intelligence Artificielle
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative max-w-md mx-auto lg:mx-0">
              <div 
                className="absolute inset-4 rounded-2xl blur-2xl opacity-30"
                style={{ backgroundColor: '#6B3FA0' }}
              />
              
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                {!imageError ? (
                  <Image
                    src="/images/photo-franklin.jpg"
                    alt="Franklin KAMCHE"
                    width={500}
                    height={600}
                    className="w-full h-auto"
                    priority
                    onError={() => setImageError(true)}
                  />
                ) : (
                  <div 
                    className="w-full aspect-[3/4] flex items-center justify-center"
                    style={{ background: 'linear-gradient(135deg, #6B3FA0 0%, #00A3E0 100%)' }}
                  >
                    <div className="text-center text-white p-8">
                      <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-white/20 flex items-center justify-center text-6xl">
                        👨‍💼
                      </div>
                      <p className="text-2xl font-bold font-raleway">Franklin KAMCHE</p>
                    </div>
                  </div>
                )}
              </div>

              <a
                href={LINKEDIN_FRANKLIN}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute -bottom-4 left-1/2 -translate-x-1/2 inline-flex items-center gap-2 px-6 py-3 rounded-full text-white font-semibold shadow-xl transition-all hover:scale-105 font-raleway"
                style={{ backgroundColor: '#00A3E0' }}
              >
                <Linkedin className="w-5 h-5" />
                Suivre sur LinkedIn
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="space-y-4 text-gray-700 leading-relaxed font-raleway">
              <p>
                Franklin KAMCHE, ingénieur diplômé de l'École Centrale de Nantes et de l'IPSA, n'était pas prédestiné à se spécialiser en intelligence artificielle. Redoublant scolaire devenu major de promotion, il a transformé ses échecs en une carrière internationale de plus de 10 ans chez <strong>Safran</strong>, <strong>General Electric</strong> et les <strong>Chantiers de l'Atlantique</strong>.
              </p>
              <p>
                Convaincu que l'IA redéfinit notre monde, il a opéré un virage radical : formations avancées en intelligence artificielle (CNAM Paris, Sorbonne Université), thèse doctorale pionnière en cours à la croisée de la mécanique et de l'IA.
              </p>
              <p>
                Depuis 2021, il a formé <strong className="font-semibold" style={{ color: '#00A3E0' }}>plus de 15 000 apprenants</strong> à l'IA. Fin 2025, il lance <strong>NeuroInk</strong>, sa plateforme dédiée à la démocratisation de l'intelligence artificielle dans toute la francophonie.
              </p>
              <div 
                className="p-5 rounded-xl border-l-4 italic"
                style={{ 
                  backgroundColor: 'rgba(107, 63, 160, 0.05)',
                  borderLeftColor: '#6B3FA0'
                }}
              >
                "L'IA n'est pas réservée aux génies, mais à ceux qui osent apprendre."
              </div>

              {/* Reconnaissance académique - CREPAC / CNAM */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="p-5 rounded-xl border"
                style={{
                  backgroundColor: 'rgba(107, 63, 160, 0.03)',
                  borderColor: 'rgba(107, 63, 160, 0.15)'
                }}
              >
                <div className="flex items-start gap-3">
                  <Landmark className="w-6 h-6 flex-shrink-0 mt-0.5" style={{ color: '#6B3FA0' }} />
                  <div>
                    <p className="font-semibold text-gray-900 font-raleway mb-1">
                      Reconnaissance académique
                    </p>
                    <p className="text-gray-600 font-raleway text-sm leading-relaxed">
                      Ouvrage sélectionné et acquis par le CREPAC du Conservatoire National des Arts et Métiers pour enrichir son fonds documentaire.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6"
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg text-center border border-gray-100"
            >
              <stat.icon 
                className="w-12 h-12 mx-auto mb-4" 
                style={{ color: stat.color }}
              />
              <p className="text-3xl font-bold mb-2 font-raleway" style={{ color: stat.color }}>
                {stat.value}
              </p>
              <p className="text-gray-600 text-sm font-raleway">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
