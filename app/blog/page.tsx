import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white font-raleway">
      {/* Header avec GRADIENT NEUROINK CORRECT */}
      <section className="bg-gradient-to-r from-[#6B3FA0] via-[#00A3E0] to-[#40E0D0] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-1.5 bg-white/20 text-white text-xs font-semibold rounded-full mb-4">
            📰 Actualités & Ressources
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Blog & Actualités
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Articles, tutoriels et réflexions sur l'intelligence artificielle
          </p>
        </div>
      </section>

      {/* Message temporaire */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-2xl shadow-xl p-12 border-2 border-[#00A3E0]/20">
            <div className="w-20 h-20 bg-gradient-to-r from-[#6B3FA0] to-[#00A3E0] rounded-full mx-auto mb-6 flex items-center justify-center">
              <span className="text-4xl">📝</span>
            </div>
            
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Les premiers articles arrivent bientôt !
            </h2>
            
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Nous préparons du contenu de qualité pour vous aider à maîtriser l'intelligence artificielle. 
              Des tutoriels, des analyses et des réflexions seront publiés régulièrement.
            </p>

            <div className="bg-gradient-to-r from-[#6B3FA0]/10 to-[#00A3E0]/10 rounded-xl p-6 mb-8">
              <p className="text-gray-700 font-medium mb-2">
                💡 En attendant, découvrez :
              </p>
              <ul className="text-left text-gray-600 space-y-2 max-w-md mx-auto">
                <li>• Notre livre "L'Odyssée de l'IA en 30 jours"</li>
                <li>• Nos formations pour tous les niveaux</li>
                <li>• L'histoire et la mission de NeuroInk</li>
              </ul>
            </div>

            <Link
              href="/"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#6B3FA0] to-[#00A3E0] text-white font-semibold rounded-lg hover:shadow-xl transition-all hover:scale-105"
            >
              Retour à l'accueil
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          {/* Newsletter CTA */}
          <div className="mt-12 bg-gradient-to-r from-[#6B3FA0] via-[#00A3E0] to-[#40E0D0] rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-3">
              Ne manquez aucun article !
            </h3>
            <p className="text-white/90 mb-6">
              Inscrivez-vous à notre newsletter pour être notifié de la publication de nos premiers articles.
            </p>
            <Link
              href="/#newsletter"
              className="inline-block px-8 py-3 bg-white text-[#6B3FA0] font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              S'inscrire à la newsletter
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
