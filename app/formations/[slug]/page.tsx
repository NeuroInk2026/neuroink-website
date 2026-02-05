'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, Clock, Target, BookOpen, Brain, Check, ArrowRight } from 'lucide-react';
import { useParams } from 'next/navigation';

// Données complètes des formations
const formationsData: { [key: string]: any } = {
  'intro-ia-debutant': {
    title: 'Introduction à l\'Intelligence Artificielle',
    level: 'debutant',
    duration: '4 semaines',
    price: 'gratuit',
    description: 'Cette formation vous initie aux concepts fondamentaux de l\'IA sans aucun prérequis technique. Parfaite pour comprendre les enjeux et les opportunités de l\'intelligence artificielle.',
    objectifs: [
      'Comprendre ce qu\'est l\'IA et son histoire',
      'Découvrir les différents types d\'IA',
      'Identifier les applications concrètes de l\'IA',
      'Démystifier le Machine Learning et le Deep Learning'
    ],
    programme: [
      {
        semaine: 1,
        titre: 'Qu\'est-ce que l\'IA ?',
        points: [
          'Définition et histoire de l\'IA',
          'Les grands moments de l\'IA',
          'IA faible vs IA forte',
          'Les mythes autour de l\'IA'
        ]
      },
      {
        semaine: 2,
        titre: 'Les types d\'IA',
        points: [
          'Machine Learning',
          'Deep Learning',
          'IA symbolique',
          'IA hybride'
        ]
      },
      {
        semaine: 3,
        titre: 'L\'IA dans notre quotidien',
        points: [
          'Assistants vocaux',
          'Recommandations personnalisées',
          'Reconnaissance faciale',
          'Traduction automatique'
        ]
      },
      {
        semaine: 4,
        titre: 'L\'avenir de l\'IA',
        points: [
          'Les défis éthiques',
          'L\'IA et l\'emploi',
          'Réglementation de l\'IA',
          'Votre parcours d\'apprentissage'
        ]
      }
    ]
  },
  'deep-learning-ia-generative': {
    title: 'Deep Learning et IA Générative',
    level: 'avance',
    duration: '12 semaines',
    description: 'Formation avancée pour maîtriser les réseaux de neurones profonds et créer vos propres modèles d\'IA générative (images, textes, audio).',
    objectifs: [
      'Maîtriser les architectures de réseaux de neurones profonds',
      'Comprendre et implémenter des Transformers',
      'Créer des modèles génératifs (GANs, Diffusion)',
      'Fine-tuner des modèles pré-entraînés'
    ],
    programme: [
      {
        semaine: 1,
        titre: 'Fondamentaux du Deep Learning',
        points: [
          'Réseaux de neurones multicouches',
          'Backpropagation',
          'Optimiseurs avancés',
          'Régularisation'
        ]
      },
      {
        semaine: 2,
        titre: 'CNN et Vision par ordinateur',
        points: [
          'Architectures CNN classiques',
          'Transfer Learning',
          'Object Detection',
          'Segmentation'
        ]
      },
      {
        semaine: 3,
        titre: 'RNN et traitement séquentiel',
        points: [
          'LSTM et GRU',
          'Attention mechanisms',
          'Seq2Seq models',
          'Applications NLP'
        ]
      },
      // Ajoutez les autres semaines...
    ]
  },
  // Ajoutez les autres formations...
};

export default function FormationPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const formation = formationsData[slug];

  if (!formation) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Formation non trouvée</h1>
          <Link href="/formations" className="text-[#6B3FA0] hover:underline">
            Retour aux formations
          </Link>
        </div>
      </div>
    );
  }

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'debutant': return '#40E0D0';
      case 'intermediaire': return '#00A3E0';
      case 'avance': return '#6B3FA0';
      default: return '#6B3FA0';
    }
  };

  const getLevelLabel = (level: string) => {
    switch (level) {
      case 'debutant': return 'Débutant';
      case 'intermediaire': return 'Intermédiaire';
      case 'avance': return 'Avancé';
      default: return level;
    }
  };

  const getLevelIcon = (level: string) => {
    switch (level) {
      case 'debutant': return Target;
      case 'intermediaire': return BookOpen;
      case 'avance': return Brain;
      default: return Target;
    }
  };

  const LevelIcon = getLevelIcon(formation.level);

  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <section className="relative py-20 overflow-hidden" style={{ backgroundColor: '#0F0D15' }}>
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 rounded-full blur-3xl opacity-20" style={{ backgroundColor: '#6B3FA0' }} />
          <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-20" style={{ backgroundColor: '#00A3E0' }} />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/formations" className="inline-flex items-center gap-2 text-white/70 hover:text-white mb-6 font-raleway">
            <ArrowLeft className="w-4 h-4" />
            Retour aux formations
          </Link>

          <div className="flex items-center gap-3 mb-4">
            <div className="flex items-center gap-2">
              <LevelIcon
                className="w-6 h-6"
                style={{ color: getLevelColor(formation.level) }}
              />
              <span
                className="text-sm font-semibold font-raleway text-white"
              >
                {getLevelLabel(formation.level)}
              </span>
            </div>
            {formation.price === 'gratuit' && (
              <span className="px-3 py-1 rounded-full text-xs font-bold text-white font-raleway" style={{ backgroundColor: '#40E0D0' }}>
                ✨ GRATUIT
              </span>
            )}
            <span className="text-xs font-semibold px-3 py-1 rounded-full font-raleway text-white" style={{ backgroundColor: 'rgba(255, 165, 0, 0.3)' }}>
              Bientôt disponible
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 font-raleway">
            {formation.title}
          </h1>

          <div className="flex items-center gap-2 text-white/70 font-raleway">
            <Clock className="w-5 h-5" />
            {formation.duration}
          </div>
        </div>
      </section>

      {/* Contenu */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Description */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-4 font-raleway" style={{ color: '#0F0D15' }}>
              À propos de cette formation
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed font-raleway">
              {formation.description}
            </p>
          </div>

          {/* Objectifs */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6 font-raleway" style={{ color: '#0F0D15' }}>
              Objectifs pédagogiques
            </h2>
            <div className="grid gap-4">
              {formation.objectifs.map((objectif: string, index: number) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center" style={{ backgroundColor: 'rgba(64, 224, 208, 0.2)' }}>
                    <Check className="w-4 h-4" style={{ color: '#40E0D0' }} />
                  </div>
                  <p className="text-gray-700 font-raleway">{objectif}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Programme */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6 font-raleway" style={{ color: '#0F0D15' }}>
              Programme détaillé
            </h2>
            <div className="space-y-6">
              {formation.programme.map((semaine: any, index: number) => (
                <div key={index} className="border-2 border-gray-100 rounded-xl p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold font-raleway" style={{ backgroundColor: getLevelColor(formation.level) }}>
                      {semaine.semaine}
                    </div>
                    <h3 className="text-xl font-bold font-raleway" style={{ color: '#0F0D15' }}>
                      {semaine.titre}
                    </h3>
                  </div>
                  <ul className="space-y-2 ml-13">
                    {semaine.points.map((point: string, idx: number) => (
                      <li key={idx} className="flex items-start gap-2 text-gray-700 font-raleway">
                        <span style={{ color: getLevelColor(formation.level) }}>•</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Newsletter */}
          <div className="rounded-2xl p-8" style={{ background: 'linear-gradient(135deg, #6B3FA0 0%, #00A3E0 50%, #40E0D0 100%)' }}>
            <h3 className="text-2xl font-bold text-white mb-3 font-raleway text-center">
              Soyez averti du lancement !
            </h3>
            <p className="text-white/90 mb-6 font-raleway text-center max-w-2xl mx-auto">
              Inscrivez-vous à notre newsletter pour être notifié dès que cette formation sera disponible.
            </p>
            <div className="text-center">
              <Link
                href="/#newsletter"
                className="inline-flex items-center gap-2 px-8 py-3 bg-white font-semibold rounded-lg hover:bg-gray-100 transition-colors font-raleway"
                style={{ color: '#6B3FA0' }}
              >
                S&apos;inscrire à la newsletter
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
