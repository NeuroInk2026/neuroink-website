'use client';

import { useState, useEffect } from 'react';

export type CookieConsent = {
  analytics: boolean;
  marketing: boolean;
  preferences: boolean;
};

const CONSENT_KEY = 'neuroink-cookie-consent';
const CONSENT_TIMESTAMP_KEY = 'neuroink-cookie-consent-timestamp';

export function useCookieConsent() {
  const [consent, setConsent] = useState<CookieConsent | null>(null);
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(CONSENT_KEY);
    const timestamp = localStorage.getItem(CONSENT_TIMESTAMP_KEY);
    
    if (stored && timestamp) {
      // Vérifier si le consentement a plus de 13 mois (RGPD)
      const consentDate = new Date(timestamp);
      const now = new Date();
      const monthsDiff = (now.getTime() - consentDate.getTime()) / (1000 * 60 * 60 * 24 * 30);
      
      if (monthsDiff > 13) {
        // Consentement expiré, redemander
        localStorage.removeItem(CONSENT_KEY);
        localStorage.removeItem(CONSENT_TIMESTAMP_KEY);
        setShowBanner(true);
      } else {
        setConsent(JSON.parse(stored));
        setShowBanner(false);
      }
    } else {
      setShowBanner(true);
    }
  }, []);

  const saveConsent = (newConsent: CookieConsent) => {
    localStorage.setItem(CONSENT_KEY, JSON.stringify(newConsent));
    localStorage.setItem(CONSENT_TIMESTAMP_KEY, new Date().toISOString());
    setConsent(newConsent);
    setShowBanner(false);
    
    // Recharger la page pour appliquer les nouveaux paramètres
    window.location.reload();
  };

  const acceptAll = () => {
    saveConsent({
      analytics: true,
      marketing: false,
      preferences: true,
    });
  };

  const rejectAll = () => {
    saveConsent({
      analytics: false,
      marketing: false,
      preferences: true,
    });
  };

  const openBanner = () => {
    setShowBanner(true);
  };

  return {
    consent,
    showBanner,
    acceptAll,
    rejectAll,
    saveConsent,
    openBanner,
  };
}
