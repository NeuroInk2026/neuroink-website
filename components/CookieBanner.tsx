'use client';

import { useState } from 'react';
import { useCookieConsent, CookieConsent } from '@/hooks/useCookieConsent';
import { X, Cookie, Shield, BarChart3, Settings } from 'lucide-react';

export default function CookieBanner() {
  const { showBanner, acceptAll, rejectAll, saveConsent } = useCookieConsent();
  const [showSettings, setShowSettings] = useState(false);
  const [customConsent, setCustomConsent] = useState<CookieConsent>({
    analytics: true,  // Coché par défaut
    marketing: false,
    preferences: true,
  });

  if (!showBanner) return null;

  const handleCustomSave = () => {
    saveConsent(customConsent);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center p-4 sm:items-center">
      {/* Overlay */}
      <div className="fixed inset-0 bg-black/60 backdrop-blur-sm" />

      {/* Bannière */}
      <div className="relative w-full max-w-2xl rounded-2xl bg-white shadow-2xl">
        {!showSettings ? (
          // Vue simple
          <div className="p-6 sm:p-8">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#6B3FA0] to-[#00A3E0]">
                  <Cookie className="h-6 w-6 text-white" />
                </div>
              </div>

              <div className="flex-1">
                <h2 className="text-xl font-bold text-gray-900" style={{ fontFamily: 'Raleway, sans-serif' }}>
                  Respect de votre vie privée
                </h2>
                <p className="mt-2 text-sm text-gray-600" style={{ fontFamily: 'Raleway, sans-serif' }}>
                  Nous utilisons des cookies pour améliorer votre expérience, analyser le trafic et personnaliser le contenu. 
                  Vous pouvez choisir d'accepter tous les cookies ou de personnaliser vos préférences.
                </p>

                <div className="mt-4 flex items-center gap-2 text-xs text-gray-500">
                  <Shield className="h-4 w-4 text-[#40E0D0]" />
                  <span style={{ fontFamily: 'Raleway, sans-serif' }}>
                    Conforme RGPD • Vos données sont protégées
                  </span>
                </div>
              </div>
            </div>

            {/* Boutons */}
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <button
                onClick={acceptAll}
                className="flex-1 rounded-lg bg-gradient-to-r from-[#6B3FA0] to-[#00A3E0] px-6 py-3 text-sm font-semibold text-white transition-all hover:shadow-lg hover:shadow-[#6B3FA0]/30"
                style={{ fontFamily: 'Raleway, sans-serif' }}
              >
                Tout accepter
              </button>
              
              <button
                onClick={rejectAll}
                className="flex-1 rounded-lg border-2 border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-gray-700 transition-all hover:border-gray-400 hover:bg-gray-50"
                style={{ fontFamily: 'Raleway, sans-serif' }}
              >
                Tout refuser
              </button>
              
              <button
                onClick={() => setShowSettings(true)}
                className="flex items-center justify-center gap-2 rounded-lg border-2 border-[#00A3E0] bg-white px-6 py-3 text-sm font-semibold text-[#00A3E0] transition-all hover:bg-[#00A3E0]/5"
                style={{ fontFamily: 'Raleway, sans-serif' }}
              >
                <Settings className="h-4 w-4" />
                Personnaliser
              </button>
            </div>

            <p className="mt-4 text-xs text-gray-500" style={{ fontFamily: 'Raleway, sans-serif' }}>
              En savoir plus sur notre{' '}
              <a href="/confidentialite" className="text-[#00A3E0] underline hover:text-[#6B3FA0]">
                politique de confidentialité
              </a>
            </p>
          </div>
        ) : (
          // Vue personnalisée
          <div className="p-6 sm:p-8">
            <div className="flex items-center justify-between border-b border-gray-200 pb-4">
              <h2 className="text-xl font-bold text-gray-900" style={{ fontFamily: 'Raleway, sans-serif' }}>
                Personnaliser les cookies
              </h2>
              <button
                onClick={() => setShowSettings(false)}
                className="rounded-lg p-2 text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-600"
                aria-label="Fermer"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="mt-6 space-y-4">
              {/* Cookies essentiels (toujours actifs) */}
              <div className="flex items-start gap-4 rounded-lg bg-gray-50 p-4">
                <div className="flex-shrink-0 pt-1">
                  <Shield className="h-5 w-5 text-[#40E0D0]" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-gray-900" style={{ fontFamily: 'Raleway, sans-serif' }}>
                      Cookies essentiels
                    </h3>
                    <span className="text-xs font-medium text-[#40E0D0]" style={{ fontFamily: 'Raleway, sans-serif' }}>
                      Toujours actif
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-gray-600" style={{ fontFamily: 'Raleway, sans-serif' }}>
                    Nécessaires au fonctionnement du site (navigation, sécurité, préférences de base).
                  </p>
                </div>
              </div>

              {/* Cookies analytiques */}
              <div className="flex items-start gap-4 rounded-lg border-2 border-gray-200 p-4">
                <div className="flex-shrink-0 pt-1">
                  <BarChart3 className="h-5 w-5 text-[#00A3E0]" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-gray-900" style={{ fontFamily: 'Raleway, sans-serif' }}>
                      Cookies analytiques
                    </h3>
                    <label className="relative inline-flex cursor-pointer items-center">
                      <input
                        type="checkbox"
                        checked={customConsent.analytics}
                        onChange={(e) =>
                          setCustomConsent({ ...customConsent, analytics: e.target.checked })
                        }
                        className="peer sr-only"
                      />
                      <div className="peer h-6 w-11 rounded-full bg-gray-300 after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-[#00A3E0] peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#00A3E0]/20"></div>
                    </label>
                  </div>
                  <p className="mt-1 text-sm text-gray-600" style={{ fontFamily: 'Raleway, sans-serif' }}>
                    Nous aident à comprendre comment vous utilisez notre site (Google Analytics).
                  </p>
                </div>
              </div>

              {/* Cookies marketing (désactivé pour le moment) */}
              <div className="flex items-start gap-4 rounded-lg border-2 border-gray-200 p-4 opacity-50">
                <div className="flex-shrink-0 pt-1">
                  <Settings className="h-5 w-5 text-[#6B3FA0]" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-gray-900" style={{ fontFamily: 'Raleway, sans-serif' }}>
                      Cookies marketing
                    </h3>
                    <span className="text-xs font-medium text-gray-500" style={{ fontFamily: 'Raleway, sans-serif' }}>
                      Bientôt disponible
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-gray-600" style={{ fontFamily: 'Raleway, sans-serif' }}>
                    Utilisés pour afficher des publicités pertinentes (non actif actuellement).
                  </p>
                </div>
              </div>
            </div>

            {/* Boutons */}
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <button
                onClick={handleCustomSave}
                className="flex-1 rounded-lg bg-gradient-to-r from-[#6B3FA0] to-[#00A3E0] px-6 py-3 text-sm font-semibold text-white transition-all hover:shadow-lg hover:shadow-[#6B3FA0]/30"
                style={{ fontFamily: 'Raleway, sans-serif' }}
              >
                Enregistrer mes choix
              </button>
              
              <button
                onClick={() => setShowSettings(false)}
                className="flex-1 rounded-lg border-2 border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-gray-700 transition-all hover:border-gray-400 hover:bg-gray-50"
                style={{ fontFamily: 'Raleway, sans-serif' }}
              >
                Annuler
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
