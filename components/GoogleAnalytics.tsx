'use client';

import { useEffect } from 'react';
import Script from 'next/script';

const GA_MEASUREMENT_ID = 'G-RT00B3HQBG';

export default function GoogleAnalytics() {
  useEffect(() => {
    // Initialiser gtag immédiatement
    if (typeof window !== 'undefined') {
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
  }, []);

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      />
    </>
  );
}
