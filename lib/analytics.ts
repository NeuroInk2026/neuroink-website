// Déclaration TypeScript pour window.gtag
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

// Fonction helper pour tracker des événements personnalisés
export const trackEvent = (
  eventName: string,
  eventParams?: Record<string, any>
) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, eventParams);
  }
};

// Événements spécifiques NeuroInk
export const analytics = {
  // CTA Hero
  trackHeroCTA: (destination: string) => {
    trackEvent('cta_click', {
      location: 'hero',
      destination,
    });
  },

  // Téléchargement extrait PDF
  trackPDFDownload: (bookSlug: string) => {
    trackEvent('pdf_download', {
      book: bookSlug,
      type: 'excerpt',
    });
  },

  // Inscription newsletter
  trackNewsletterSignup: (location: string) => {
    trackEvent('newsletter_signup', {
      location,
    });
  },

  // Soumission formulaire contact
  trackContactSubmit: (subject: string) => {
    trackEvent('contact_form_submit', {
      subject,
    });
  },

  // Clic bouton achat
  trackPurchaseClick: (platform: string, bookSlug: string, price: number) => {
    trackEvent('purchase_click', {
      platform,
      book: bookSlug,
      price,
      currency: 'EUR',
    });
  },

  // Navigation vers page livre
  trackBookView: (bookSlug: string, bookTitle: string) => {
    trackEvent('book_view', {
      book_slug: bookSlug,
      book_title: bookTitle,
    });
  },

  // Navigation vers article blog
  trackArticleView: (articleSlug: string, articleTitle: string, category: string) => {
    trackEvent('article_view', {
      article_slug: articleSlug,
      article_title: articleTitle,
      category,
    });
  },

  // Clic sur formation
  trackFormationClick: (formationSlug: string, formationType: string) => {
    trackEvent('formation_click', {
      formation: formationSlug,
      type: formationType,
    });
  },

  // Scroll depth (optionnel - pour mesurer l'engagement)
  trackScrollDepth: (percentage: number, page: string) => {
    trackEvent('scroll_depth', {
      percentage,
      page,
    });
  },

  // Clic sur réseau social
  trackSocialClick: (platform: string, location: string) => {
    trackEvent('social_click', {
      platform,
      location,
    });
  },

  // Ouverture menu mobile
  trackMobileMenuToggle: (action: 'open' | 'close') => {
    trackEvent('mobile_menu', {
      action,
    });
  },

  // Recherche (si implémenté)
  trackSearch: (searchTerm: string) => {
    trackEvent('search', {
      search_term: searchTerm,
    });
  },
};

export default analytics;
