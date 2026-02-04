import Link from 'next/link';
import { ArrowRight, BookOpen, Clock, Target } from 'lucide-react';

export default function FormationsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white font-raleway">
      {/* Header avec GRADIENT NEUROINK CORRECT */}
      <section className="bg-gradient-to-r from-[#6B3FA0] via-[#00A3E0] to-[#40E0D0] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-1.5 bg-white/20 text-white text-xs font-semibold rounded-full mb-4">
            🎓 Formations & MOOC
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Formations
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Développez vos compétences en intelligence artificielle
          </p>
        </div>
      </section>

      {/* Message temporaire */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-2xl shadow-xl p-12 border-2 border-[#00A3E0]/20">
            <div className="w-20 h-20 bg-gradient-to-r from-[#6B3FA0] to-[#00A3E0] rounded-full mx-auto mb-6 flex items-center justify-center">
              <span className="text-4xl">🎓</span>
            </div>
            
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Nos formations arrivent bientôt !
            </h2>
            
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Nous préparons des parcours de formation complets pour vous accompagner 
              dans votre apprentissage de l'IA, quel que soit votre niveau.
            </p>

            <div className="bg-gradient-to-r from-[#6B3FA0]/10 to-[#00A3E0]/10 rounded-xl p-6 mb-8">
              <p className="text-gray-700 font-medium mb-4">
                💡 Formations prévues :
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
                <div className="flex items-start gap-3">
                  <Target className="w-5 h-5 text-[#40E0D0] flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900">Débutant</p>
                    <p className="text-sm text-gray-600">Introduction à l'IA</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <BookOpen className="w-5 h-5 text-[#00A3E0] flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900">Intermédiaire</p>
                    <p className="text-sm text-gray-600">Machine Learning</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-[#6B3FA0] flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900">Avancé</p>
                    <p className="text-sm text-gray-600">Deep Learning</p>
                  </div>
                </div>
              </div>
            </div>

            <Link
              href="/"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#6B3FA0] to-[#00A3E0] text-white font-semibold rounded-lg hover:shadow-xl transition-all hover:scale-105"
            >
              Retour à l'accueil
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          {/* CTA Livre */}
          <div className="mt-12 bg-gradient-to-r from-[#6B3FA0] via-[#00A3E0] to-[#40E0D0] rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-3">
              Commencez dès maintenant avec notre livre !
            </h3>
            <p className="text-white/90 mb-6">
              "L'Odyssée de l'IA en 30 jours" est le compagnon idéal pour débuter 
              votre apprentissage de l'intelligence artificielle.
            </p>
            <Link
              href="/livres"
              className="inline-block px-8 py-3 bg-white text-[#6B3FA0] font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              Découvrir le livre
            </Link>
          </div>

          {/* Newsletter */}
          <div className="mt-8 bg-white rounded-2xl p-8 shadow-lg border-2 border-gray-100">
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Soyez informé du lancement des formations
            </h3>
            <p className="text-gray-600 mb-6">
              Inscrivez-vous à notre newsletter pour recevoir une alerte 
              dès que nos formations seront disponibles.
            </p>
            <Link
              href="/#newsletter"
              className="inline-block px-8 py-3 bg-gradient-to-r from-[#6B3FA0] to-[#00A3E0] text-white font-semibold rounded-lg hover:shadow-xl transition-all"
            >
              S'inscrire à la newsletter
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
