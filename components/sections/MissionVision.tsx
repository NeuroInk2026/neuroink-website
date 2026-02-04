'use client';

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
            À propos de{' '}
            <span className="bg-gradient-to-r from-[#6B3FA0] via-[#00A3E0] to-[#40E0D0] text-transparent bg-clip-text">
              NeuroInk
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* NOTRE MISSION */}
          <div className="relative">
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 shadow-xl relative overflow-hidden">
              <span className="inline-block px-4 py-1.5 bg-gradient-to-r from-[#6B3FA0] to-[#00A3E0] text-white text-xs font-semibold rounded-full mb-4">
                NOTRE MISSION
              </span>

              <h3 className="text-3xl font-bold text-white mb-6">
                Démocratiser et démystifier l'IA
              </h3>

              <p className="text-gray-300 leading-relaxed text-lg">
                Nous croyons que l'intelligence artificielle ne doit pas rester un
                mystère réservé aux initiés. Notre mission est de rendre ces
                connaissances accessibles à tous les francophones, à travers des
                contenus clairs, progressifs et engageants.
              </p>

              {/* SVG CERVEAU - INTÉGRÉ DIRECTEMENT */}
              <div className="absolute -right-8 -top-8 w-40 h-40 opacity-20 pointer-events-none">
                <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                  <path
                    d="M100 40C75 40 55 60 55 85C55 95 58 104 63 111C58 118 55 127 55 137C55 157 71 173 91 173C95 173 99 172 103 171C107 172 111 173 115 173C135 173 151 157 151 137C151 127 148 118 143 111C148 104 151 95 151 85C151 60 131 40 106 40H100Z"
                    stroke="url(#grad1)"
                    strokeWidth="3"
                    fill="none"
                  />
                  <circle cx="80" cy="85" r="8" fill="#00A3E0" />
                  <circle cx="120" cy="85" r="8" fill="#40E0D0" />
                  <circle cx="100" cy="120" r="8" fill="#6B3FA0" />
                  <line x1="80" y1="85" x2="120" y2="85" stroke="#00A3E0" strokeWidth="2" opacity="0.5" />
                  <line x1="80" y1="85" x2="100" y2="120" stroke="#6B3FA0" strokeWidth="2" opacity="0.5" />
                  <line x1="120" y1="85" x2="100" y2="120" stroke="#40E0D0" strokeWidth="2" opacity="0.5" />
                  <defs>
                    <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#6B3FA0" />
                      <stop offset="50%" stopColor="#00A3E0" />
                      <stop offset="100%" stopColor="#40E0D0" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none" />
            </div>

            {/* SVG EXTERNE DESKTOP */}
            <div className="hidden lg:block absolute -right-20 top-1/2 -translate-y-1/2 w-32 h-32 opacity-30 pointer-events-none">
              <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                <path
                  d="M100 40C75 40 55 60 55 85C55 95 58 104 63 111C58 118 55 127 55 137C55 157 71 173 91 173C95 173 99 172 103 171C107 172 111 173 115 173C135 173 151 157 151 137C151 127 148 118 143 111C148 104 151 95 151 85C151 60 131 40 106 40H100Z"
                  stroke="url(#grad1b)"
                  strokeWidth="3"
                  fill="none"
                />
                <circle cx="80" cy="85" r="8" fill="#00A3E0" />
                <circle cx="120" cy="85" r="8" fill="#40E0D0" />
                <circle cx="100" cy="120" r="8" fill="#6B3FA0" />
                <defs>
                  <linearGradient id="grad1b" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#6B3FA0" />
                    <stop offset="50%" stopColor="#00A3E0" />
                    <stop offset="100%" stopColor="#40E0D0" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>

          {/* NOTRE VISION */}
          <div className="relative">
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 shadow-xl relative overflow-hidden">
              <span className="inline-block px-4 py-1.5 bg-gradient-to-r from-[#40E0D0] to-[#00A3E0] text-white text-xs font-semibold rounded-full mb-4">
                NOTRE VISION
              </span>

              <h3 className="text-3xl font-bold text-white mb-6">
                Un monde où chacun comprend l'IA
              </h3>

              <p className="text-gray-300 leading-relaxed text-lg">
                Nous imaginons un futur où chaque francophone sera capable de
                comprendre, utiliser et même contribuer à l'évolution de
                l'intelligence artificielle. Un futur où la technologie n'est plus
                une barrière, mais un tremplin.
              </p>

              {/* SVG RÉSEAU - INTÉGRÉ DIRECTEMENT */}
              <div className="absolute -right-8 -top-8 w-40 h-40 opacity-20 pointer-events-none">
                <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                  <circle cx="50" cy="50" r="6" fill="#6B3FA0" />
                  <circle cx="150" cy="50" r="6" fill="#00A3E0" />
                  <circle cx="50" cy="150" r="6" fill="#40E0D0" />
                  <circle cx="150" cy="150" r="6" fill="#6B3FA0" />
                  <circle cx="100" cy="100" r="6" fill="#00A3E0" />
                  <circle cx="100" cy="50" r="6" fill="#40E0D0" />
                  <circle cx="50" cy="100" r="6" fill="#6B3FA0" />
                  <circle cx="150" cy="100" r="6" fill="#00A3E0" />
                  <circle cx="100" cy="150" r="6" fill="#40E0D0" />
                  <line x1="50" y1="50" x2="100" y2="100" stroke="url(#grad2)" strokeWidth="2" opacity="0.3" />
                  <line x1="150" y1="50" x2="100" y2="100" stroke="url(#grad2)" strokeWidth="2" opacity="0.3" />
                  <line x1="50" y1="150" x2="100" y2="100" stroke="url(#grad2)" strokeWidth="2" opacity="0.3" />
                  <line x1="150" y1="150" x2="100" y2="100" stroke="url(#grad2)" strokeWidth="2" opacity="0.3" />
                  <line x1="100" y1="50" x2="100" y2="100" stroke="url(#grad2)" strokeWidth="2" opacity="0.3" />
                  <line x1="50" y1="100" x2="100" y2="100" stroke="url(#grad2)" strokeWidth="2" opacity="0.3" />
                  <line x1="150" y1="100" x2="100" y2="100" stroke="url(#grad2)" strokeWidth="2" opacity="0.3" />
                  <line x1="100" y1="150" x2="100" y2="100" stroke="url(#grad2)" strokeWidth="2" opacity="0.3" />
                  <defs>
                    <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#6B3FA0" />
                      <stop offset="50%" stopColor="#00A3E0" />
                      <stop offset="100%" stopColor="#40E0D0" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none" />
            </div>

            {/* SVG EXTERNE DESKTOP */}
            <div className="hidden lg:block absolute -left-20 top-1/2 -translate-y-1/2 w-32 h-32 opacity-30 pointer-events-none">
              <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                <circle cx="50" cy="50" r="6" fill="#6B3FA0" />
                <circle cx="150" cy="50" r="6" fill="#00A3E0" />
                <circle cx="50" cy="150" r="6" fill="#40E0D0" />
                <circle cx="150" cy="150" r="6" fill="#6B3FA0" />
                <circle cx="100" cy="100" r="6" fill="#00A3E0" />
                <circle cx="100" cy="50" r="6" fill="#40E0D0" />
                <circle cx="50" cy="100" r="6" fill="#6B3FA0" />
                <circle cx="150" cy="100" r="6" fill="#00A3E0" />
                <circle cx="100" cy="150" r="6" fill="#40E0D0" />
                <line x1="50" y1="50" x2="100" y2="100" stroke="url(#grad2b)" strokeWidth="2" opacity="0.3" />
                <line x1="150" y1="50" x2="100" y2="100" stroke="url(#grad2b)" strokeWidth="2" opacity="0.3" />
                <defs>
                  <linearGradient id="grad2b" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#6B3FA0" />
                    <stop offset="50%" stopColor="#00A3E0" />
                    <stop offset="100%" stopColor="#40E0D0" />
                  </linearGradient>
                </defs>
              </svg>
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
