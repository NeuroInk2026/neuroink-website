'use client';

// Import direct - pas de chemin relatif complexe
import DecorativeIcon from '@/components/ui/DecorativeIcon';

export default function MissionVision() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50 font-raleway">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* En-tête */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 bg-gradient-to-r from-[#00A3E0] to-[#40E0D0] text-white text-xs font-semibold rounded-full mb-4">
            Notre identité
          </span>
          <h2 className="text-4xl font-bold text-gray-900">
            À propos de <span className="bg-gradient-to-r from-[#6B3FA0] via-[#00A3E0] to-[#40E0D0] text-transparent bg-clip-text">NeuroInk</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* NOTRE MISSION */}
          <div className="relative">
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

              {/* Icône décorative INTERNE */}
              <div className="absolute -right-8 -top-8 w-40 h-40 opacity-20 pointer-events-none">
                <DecorativeIcon type="brain" className="w-full h-full" />
              </div>

              {/* Effet de brillance */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none" />
            </div>

            {/* Icône décorative EXTERNE - Zone que vous aviez encerclée */}
            <div className="hidden lg:block absolute -right-20 top-1/2 -translate-y-1/2 w-32 h-32 opacity-30 pointer-events-none">
              <DecorativeIcon type="brain" className="w-full h-full" />
            </div>
          </div>

          {/* NOTRE VISION */}
          <div className="relative">
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

              {/* Icône décorative INTERNE */}
              <div className="absolute -right-8 -top-8 w-40 h-40 opacity-20 pointer-events-none">
                <DecorativeIcon type="network" className="w-full h-full" />
              </div>

              {/* Effet de brillance */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none" />
            </div>

            {/* Icône décorative EXTERNE - Zone que vous aviez encerclée */}
            <div className="hidden lg:block absolute -left-20 top-1/2 -translate-y-1/2 w-32 h-32 opacity-30 pointer-events-none">
              <DecorativeIcon type="network" className="w-full h-full" />
            </div>
          </div>
        </div>

        {/* Valeurs */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Nos valeurs fondamentales</h3>
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
              <div
                key={index}
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
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
