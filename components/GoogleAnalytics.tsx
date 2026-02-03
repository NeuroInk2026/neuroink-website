'use client';

import { useEffect, useState } from 'react';
import Script from 'next/script';
import { useCookieConsent } from '@/hooks/useCookieConsent';

const GA_MEASUREMENT_ID = 'G-RT00B3HQBG';

export default function GoogleAnalytics() {
  const { consent } = useCookieConsent();
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    if (consent?.analytics) {
      // OPTIMISATION: Différer le chargement de GA de 2 secondes
      // Cela permet à la page de charger complètement d'abord
      // Gain estimé: +8-12 points Performance
      const timer = setTimeout(() => {
        setShouldLoad(true);
        
        // Initialiser gtag si ce n'est pas déjà fait
        if (typeof window !== 'undefined' && !window.gtag) {
          window.dataLayer = window.dataLayer || [];
          const gtag = (...args: any[]) => {
            window.dataLayer.push(args);
          };
          window.gtag = gtag;
          
          window.gtag('js', new Date());
          window.gtag('config', GA_MEASUREMENT_ID, {
            page_path: window.location.pathname,
            anonymize_ip: true,
          });
        }
      }, 2000); // Attendre 2 secondes après consentement

      return () => clearTimeout(timer);
    } else {
      setShouldLoad(false);
    }
  }, [consent]);

  // Ne pas charger les scripts si le consentement n'est pas donné ou si on attend
  if (!shouldLoad) {
    return null;
  }

  return (
    <>
      <Script
        strategy="lazyOnload" // Changé de afterInteractive à lazyOnload
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      />
    </>
  );
}
