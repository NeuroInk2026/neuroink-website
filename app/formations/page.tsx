'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { GraduationCap, Clock, Target, BookOpen, ArrowRight } from 'lucide-react';
import { useEffect, useState } from 'react';
import { client } from '@/lib/sanity';

interface Formation {
  _id: string;
  title: string;
  slug: { current: string };
  shortDescription: string;
  duration: string;
  level: string;
  price: string | number;
  status: string;
}

export default function FormationsPage() {
  const [formations, setFormations] = useState<Formation[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchFormations() {
      try {
        const query = `*[_type == "formation"] | order(order asc) {
          _id,
          title,
          slug,
          shortDescription,
          duration,
          level,
          price,
          status
        }`;
        const data = await client.fetch(query);
        setFormations(data);
      } catch (error) {
        console.error('Erreur chargement formations:', error);
      } finally {
        setLoading(false);
      }
    }
    fetchFormations();
  }, []);

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

  return (
    <main className="min-h-screen bg-white">
      {/* Header - IDENTIQUE À LA PAGE LIVRES */}
      <section className="relative py-20 sm:py-28 overflow-hidden" style={{ backgroundColor: '#0F0D15' }}>
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 rounded-full blur-3xl opacity-20" style={{ backgroundColor: '#6B3FA0' }} />
          <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-20" style={{ backgroundColor: '#00A3E0' }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold mb-4 font-raleway" style={{ backgroundColor: 'rgba(107, 63, 160, 0.15)', color: '#40E0D0' }}>
              <GraduationCap className="w-4 h-4" />
              Formations & MOOC
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 font-raleway">
              Formations
            </h1>
            <p className="text-lg sm:text-xl text-white/70 max-w-2xl mx-auto font-raleway">
              Développez vos compétences en intelligence artificielle
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contenu */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {loading ? (
            <div className="text-center">
              <div className="inline-block w-12 h-12 border-4 border-[#6B3FA0] border-t-transparent rounded-full animate-spin"></div>
              <p className="mt-4 text-gray-600 font-raleway">Chargement des formations...</p>
            </div>
          ) : formations.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {formations.map((formation) => (
                <motion.div
                  key={formation._id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden border-2 border-gray-100 hover:shadow-2xl transition-all hover:scale-105"
                >
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span
                        className="inline-block px-3 py-1 rounded-full text-xs font-semibold text-white font-raleway"
                        style={{ backgroundColor: getLevelColor(formation.level) }}
                      >
                        {getLevelLabel(formation.level)}
                      </span>
                      {formation.status === 'available' ? (
                        <span className="text-xs font-semibold text-green-600 font-raleway">Disponible</span>
                      ) : (
                        <span className="text-xs font-semibold text-orange-600 font-raleway">Bientôt</span>
                      )}
                    </div>

                    <h3 className="text-xl font-bold mb-3 font-raleway" style={{ color: '#0F0D15' }}>
                      {formation.title}
                    </h3>

                    <p className="text-gray-600 mb-4 font-raleway text-sm">
                      {formation.shortDescription}
                    </p>

                    <div className="flex items-center gap-4 mb-4 text-sm text-gray-500 font-raleway">
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {formation.duration}
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                      <div>
                        <p className="text-2xl font-bold font-raleway" style={{ color: '#6B3FA0' }}>
                          {typeof formation.price === 'number' ? `${formation.price}€` : formation.price}
                        </p>
                      </div>
                      <ArrowRight className="w-5 h-5" style={{ color: '#00A3E0' }} />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="max-w-4xl mx-auto text-center">
              <div className="bg-white rounded-2xl shadow-xl p-12 border-2 border-gray-100">
                <div className="w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #6B3FA0 0%, #00A3E0 100%)' }}>
                  <GraduationCap className="w-10 h-10 text-white" />
                </div>
                
                <h2 className="text-3xl font-bold mb-4 font-raleway" style={{ color: '#0F0D15' }}>
                  Nos formations arrivent bientôt !
                </h2>
                
                <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto font-raleway">
                  Nous préparons des parcours de formation complets pour vous accompagner 
                  dans votre apprentissage de l&apos;IA, quel que soit votre niveau.
                </p>

                <Link
                  href="/"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-white font-semibold transition-all duration-300 hover:shadow-xl hover:scale-105 font-raleway"
                  style={{ background: 'linear-gradient(135deg, #6B3FA0 0%, #00A3E0 100%)' }}
                >
                  Retour à l&apos;accueil
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          )}

          {/* CTA Livre */}
          <div className="mt-16 rounded-2xl p-8 text-white" style={{ background: 'linear-gradient(135deg, #6B3FA0 0%, #00A3E0 50%, #40E0D0 100%)' }}>
            <h3 className="text-2xl font-bold mb-3 font-raleway text-center">
              Commencez dès maintenant avec notre livre !
            </h3>
            <p className="text-white/90 mb-6 font-raleway text-center max-w-2xl mx-auto">
              &quot;L&apos;Odyssée de l&apos;IA en 30 jours&quot; est le compagnon idéal pour débuter 
              votre apprentissage de l&apos;intelligence artificielle.
            </p>
            <div className="text-center">
              <Link
                href="/livres"
                className="inline-block px-8 py-3 bg-white font-semibold rounded-lg hover:bg-gray-100 transition-colors font-raleway"
                style={{ color: '#6B3FA0' }}
              >
                Découvrir le livre
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
