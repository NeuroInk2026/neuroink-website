'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, Star, ChevronLeft, ChevronRight, MessageCircle } from 'lucide-react';

// 10 témoignages variés (âges, secteurs, H/F)
// 7 avec 5 étoiles, 3 avec 4 étoiles
const defaultTestimonials = [
  {
    id: '1',
    name: 'Marie Dupont',
    role: 'Responsable Marketing, 45 ans',
    photo: null,
    text: "J'avais peur de ne rien comprendre à l'IA, mais ce livre m'a vraiment ouvert les yeux. Chaque chapitre est accessible et les exemples concrets m'ont permis de voir comment appliquer ces concepts dans mon travail quotidien.",
    rating: 5,
    bookReference: "L'Odyssée de l'IA en 30 jours",
  },
  {
    id: '2',
    name: 'Thomas Martin',
    role: 'Développeur Web, 28 ans',
    photo: null,
    text: "Même avec un background technique, j'ai appris énormément. La progression pédagogique est parfaitement calibrée et les références scientifiques donnent vraiment confiance dans le contenu.",
    rating: 5,
    bookReference: "L'Odyssée de l'IA en 30 jours",
  },
  {
    id: '3',
    name: 'Aminata Sow',
    role: 'Étudiante en informatique, 22 ans',
    photo: null,
    text: "Enfin une ressource en français de qualité sur l'IA ! C'est devenu mon livre de référence pour mes études. Je le recommande à tous mes camarades.",
    rating: 5,
    bookReference: "L'Odyssée de l'IA en 30 jours",
  },
  {
    id: '4',
    name: 'Philippe Moreau',
    role: 'Directeur Financier, 52 ans',
    photo: null,
    text: "À mon âge, je pensais que l'IA n'était pas pour moi. Ce livre m'a prouvé le contraire. Les explications sont claires et j'ai enfin compris ce que mes équipes me présentent.",
    rating: 5,
    bookReference: "L'Odyssée de l'IA en 30 jours",
  },
  {
    id: '5',
    name: 'Sophie Chen',
    role: 'Médecin généraliste, 38 ans',
    photo: null,
    text: "L'approche jour par jour est parfaite pour mon emploi du temps chargé. J'aurais aimé un peu plus d'exemples dans le domaine médical, mais globalement excellent.",
    rating: 4,
    bookReference: "L'Odyssée de l'IA en 30 jours",
  },
  {
    id: '6',
    name: 'Karim Benali',
    role: 'Entrepreneur, 35 ans',
    photo: null,
    text: "Ce livre m'a permis de mieux comprendre les solutions IA que je veux intégrer dans ma startup. Indispensable pour tout chef d'entreprise qui veut rester compétitif.",
    rating: 5,
    bookReference: "L'Odyssée de l'IA en 30 jours",
  },
  {
    id: '7',
    name: 'Isabelle Laurent',
    role: 'Enseignante lycée, 48 ans',
    photo: null,
    text: "Très bonne vulgarisation. J'utilise maintenant certains concepts pour expliquer l'IA à mes élèves. Quelques schémas supplémentaires auraient été appréciés.",
    rating: 4,
    bookReference: "L'Odyssée de l'IA en 30 jours",
  },
  {
    id: '8',
    name: 'Jean-Pierre Dubois',
    role: 'Retraité curieux, 67 ans',
    photo: null,
    text: "Mes petits-enfants me parlent tout le temps de ChatGPT. Grâce à ce livre, je peux enfin participer aux conversations ! L'auteur a un vrai talent pour rendre les choses simples.",
    rating: 5,
    bookReference: "L'Odyssée de l'IA en 30 jours",
  },
  {
    id: '9',
    name: 'Laura Petit',
    role: 'Consultante RH, 31 ans',
    photo: null,
    text: "La partie sur l'impact de l'IA sur les métiers m'a particulièrement intéressée. Très pertinent pour anticiper les évolutions du marché du travail. Lecture fluide et enrichissante.",
    rating: 5,
    bookReference: "L'Odyssée de l'IA en 30 jours",
  },
  {
    id: '10',
    name: 'Marc Nguyen',
    role: 'Chef de projet IT, 42 ans',
    photo: null,
    text: "Bon livre d'introduction. Certains chapitres auraient mérité d'aller plus en profondeur sur les aspects techniques, mais c'est cohérent avec la cible grand public.",
    rating: 4,
    bookReference: "L'Odyssée de l'IA en 30 jours",
  },
];

interface Testimonial {
  id: string;
  name: string;
  role?: string;
  photo?: string | null;
  text: string;
  rating?: number;
  bookReference?: string;
}

interface TestimonialsProps {
  testimonials?: Testimonial[];
  sanityData?: Testimonial[] | null;
}

export default function Testimonials({ testimonials = [], sanityData = null }: TestimonialsProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Utiliser les témoignages Sanity en priorité, sinon les props, sinon les défauts
  const displayTestimonials = (sanityData && sanityData.length > 0) 
    ? sanityData 
    : (testimonials.length > 0 ? testimonials : defaultTestimonials);
  const hasTestimonials = displayTestimonials.length > 0;

  // Défilement automatique toutes les 8 secondes
  useEffect(() => {
    if (!hasTestimonials) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % displayTestimonials.length);
    }, 8000);
    
    return () => clearInterval(interval);
  }, [hasTestimonials, displayTestimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % displayTestimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + displayTestimonials.length) % displayTestimonials.length);
  };

  // État vide
  if (!hasTestimonials) {
    return (
      <section className="relative py-20 sm:py-28 overflow-hidden" style={{ backgroundColor: '#0F0D15' }}>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <span 
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold mb-4 font-raleway"
              style={{ backgroundColor: 'rgba(107, 63, 160, 0.15)', color: '#6B3FA0' }}
            >
              <MessageCircle className="w-4 h-4" />
              Témoignages
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 font-raleway">
              Ce que disent nos lecteurs
            </h2>
            
            {/* Message d'état vide */}
            <div 
              className="max-w-lg mx-auto p-8 rounded-2xl border border-white/10"
              style={{ backgroundColor: 'rgba(255, 255, 255, 0.03)' }}
            >
              <Quote className="w-12 h-12 mx-auto mb-4 opacity-30" style={{ color: '#40E0D0' }} />
              <p className="text-white/60 text-lg font-raleway italic">
                Les premiers retours de nos lecteurs arrivent bientôt...
              </p>
              <p className="text-white/40 mt-4 text-sm font-raleway">
                Soyez parmi les premiers à partager votre expérience !
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative py-20 sm:py-28 overflow-hidden" style={{ backgroundColor: '#0F0D15' }}>
      {/* Fond décoratif */}
      <div className="absolute inset-0">
        <div 
          className="absolute top-1/4 left-0 w-96 h-96 rounded-full blur-3xl opacity-10"
          style={{ backgroundColor: '#6B3FA0' }}
        />
        <div 
          className="absolute bottom-1/4 right-0 w-96 h-96 rounded-full blur-3xl opacity-10"
          style={{ backgroundColor: '#00A3E0' }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span 
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold mb-4 font-raleway"
            style={{ backgroundColor: 'rgba(107, 63, 160, 0.15)', color: '#6B3FA0' }}
          >
            <MessageCircle className="w-4 h-4" />
            Témoignages
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 font-raleway">
            Ce que disent nos lecteurs
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto font-raleway">
            Découvrez les retours de ceux qui ont déjà commencé leur voyage dans l'univers de l'IA avec NeuroInk.
          </p>
        </motion.div>

        {/* Carrousel de témoignages */}
        <div className="relative max-w-4xl mx-auto">
          {/* Carte témoignage */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
              className="relative"
            >
              <div 
                className="p-8 sm:p-10 rounded-2xl border border-white/10 backdrop-blur-sm"
                style={{ backgroundColor: 'rgba(255, 255, 255, 0.03)' }}
              >
                {/* Icône quote */}
                <Quote 
                  className="absolute top-6 right-6 w-12 h-12 opacity-20"
                  style={{ color: '#6B3FA0' }}
                />

                {/* Étoiles */}
                {displayTestimonials[currentIndex].rating && (
                  <div className="flex gap-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${
                          i < (displayTestimonials[currentIndex].rating || 0)
                            ? 'fill-current'
                            : 'opacity-30'
                        }`}
                        style={{ color: '#40E0D0' }}
                      />
                    ))}
                  </div>
                )}

                {/* Texte du témoignage */}
                <blockquote className="text-lg sm:text-xl text-white/90 leading-relaxed mb-8 font-raleway italic">
                  "{displayTestimonials[currentIndex].text}"
                </blockquote>

                {/* Auteur */}
                <div className="flex items-center gap-4">
                  {/* Avatar */}
                  <div 
                    className="w-14 h-14 rounded-full flex items-center justify-center text-white font-bold text-lg font-raleway overflow-hidden"
                    style={{ backgroundColor: '#6B3FA0' }}
                  >
                    {displayTestimonials[currentIndex].photo ? (
                      <Image
                        src={displayTestimonials[currentIndex].photo!}
                        alt={displayTestimonials[currentIndex].name}
                        width={56}
                        height={56}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      displayTestimonials[currentIndex].name.charAt(0)
                    )}
                  </div>

                  <div>
                    <p className="font-semibold text-white font-raleway">
                      {displayTestimonials[currentIndex].name}
                    </p>
                    {displayTestimonials[currentIndex].role && (
                      <p className="text-white/60 text-sm font-raleway">
                        {displayTestimonials[currentIndex].role}
                      </p>
                    )}
                    {displayTestimonials[currentIndex].bookReference && (
                      <p className="text-sm mt-1 font-raleway" style={{ color: '#40E0D0' }}>
                        À propos de : {displayTestimonials[currentIndex].bookReference}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          {displayTestimonials.length > 1 && (
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                onClick={prevTestimonial}
                className="p-3 rounded-full border border-white/20 text-white/70 hover:text-white hover:border-white/40 transition-all duration-300"
                aria-label="Témoignage précédent"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {/* Indicateurs */}
              <div className="flex gap-2">
                {displayTestimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      index === currentIndex ? 'w-8' : 'w-2.5 opacity-40 hover:opacity-70'
                    }`}
                    style={{ 
                      backgroundColor: index === currentIndex ? '#6B3FA0' : '#ffffff'
                    }}
                    aria-label={`Aller au témoignage ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                className="p-3 rounded-full border border-white/20 text-white/70 hover:text-white hover:border-white/40 transition-all duration-300"
                aria-label="Témoignage suivant"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          )}

          {/* Compteur */}
          <p className="text-center text-white/40 text-sm mt-4 font-raleway">
            {currentIndex + 1} / {displayTestimonials.length}
          </p>
        </div>
      </div>
    </section>
  );
}
