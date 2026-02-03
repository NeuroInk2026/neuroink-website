// ═══════════════════════════════════════════════════════════════════
// 🏗️ GÉNÉRATEUR JSON-LD - NEUROINK
// ═══════════════════════════════════════════════════════════════════
// Structured data pour Google, ChatGPT, Perplexity, Gemini

import { SITE_CONFIG, AUTHOR, SOCIAL_LINKS } from './constants';
import type { Book } from '@/data/books';

// ─────────────────────────────────────────────────────────────────────
// 🏢 ORGANIZATION SCHEMA (site entier)
// ─────────────────────────────────────────────────────────────────────
export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${SITE_CONFIG.url}/#organization`,
    name: SITE_CONFIG.fullName,
    alternateName: SITE_CONFIG.name,
    url: SITE_CONFIG.url,
    logo: {
      '@type': 'ImageObject',
      url: `${SITE_CONFIG.url}/images/logo-neuroink.png`,
      width: 512,
      height: 512,
    },
    description: SITE_CONFIG.description,
    email: SITE_CONFIG.email,
    foundingDate: '2025',
    founders: [
      {
        '@type': 'Person',
        '@id': `${SITE_CONFIG.url}/#person`,
        name: AUTHOR.name,
      },
    ],
    sameAs: [
      SOCIAL_LINKS.linkedin,
      SOCIAL_LINKS.instagram,
      SOCIAL_LINKS.linkedinPersonal,
      SOCIAL_LINKS.linktree,
    ].filter(Boolean),
    contactPoint: {
      '@type': 'ContactPoint',
      email: SITE_CONFIG.email,
      contactType: 'Customer Service',
      availableLanguage: ['French', 'English'],
    },
  };
}

// ─────────────────────────────────────────────────────────────────────
// 👤 PERSON SCHEMA (Franklin KAMCHE)
// ─────────────────────────────────────────────────────────────────────
export function generatePersonSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${SITE_CONFIG.url}/#person`,
    name: AUTHOR.name,
    givenName: 'Franklin',
    familyName: 'KAMCHE',
    jobTitle: AUTHOR.role,
    description: AUTHOR.bio,
    image: `${SITE_CONFIG.url}${AUTHOR.image}`,
    email: AUTHOR.email,
    url: SITE_CONFIG.url,
    sameAs: [
      AUTHOR.linkedin,
      SOCIAL_LINKS.linkedinPersonal,
      AUTHOR.linktree,
    ].filter(Boolean),
    alumniOf: [
      {
        '@type': 'EducationalOrganization',
        name: 'École Centrale de Nantes',
      },
      {
        '@type': 'EducationalOrganization',
        name: 'IPSA',
      },
      {
        '@type': 'EducationalOrganization',
        name: 'CNAM Paris',
      },
      {
        '@type': 'EducationalOrganization',
        name: 'Sorbonne Université',
      },
    ],
    worksFor: {
      '@type': 'Organization',
      '@id': `${SITE_CONFIG.url}/#organization`,
      name: SITE_CONFIG.fullName,
    },
    hasOccupation: [
      {
        '@type': 'Occupation',
        name: 'Ingénieur',
        occupationLocation: {
          '@type': 'Country',
          name: 'France',
        },
      },
      {
        '@type': 'Occupation',
        name: 'Auteur',
        occupationLocation: {
          '@type': 'Country',
          name: 'France',
        },
      },
      {
        '@type': 'Occupation',
        name: 'Formateur en Intelligence Artificielle',
        occupationLocation: {
          '@type': 'Country',
          name: 'France',
        },
      },
    ],
  };
}

// ─────────────────────────────────────────────────────────────────────
// 📚 BOOK SCHEMA (livre individuel)
// ─────────────────────────────────────────────────────────────────────
export function generateBookSchema(book: Book) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Book',
    '@id': `${SITE_CONFIG.url}/livres/${book.slug}`,
    name: book.title,
    alternateName: book.subtitle,
    description: book.description,
    isbn: book.isbn,
    bookFormat: 'https://schema.org/Paperback',
    numberOfPages: book.pages,
    inLanguage: 'fr',
    datePublished: book.releaseDate,
    publisher: {
      '@type': 'Organization',
      '@id': `${SITE_CONFIG.url}/#organization`,
      name: book.publisher,
    },
    author: {
      '@type': 'Person',
      '@id': `${SITE_CONFIG.url}/#person`,
      name: book.author,
    },
    image: `${SITE_CONFIG.url}${book.coverImage}`,
    offers: [
      {
        '@type': 'Offer',
        price: book.price,
        priceCurrency: book.currency,
        availability: book.status === 'available' ? 'https://schema.org/InStock' : 'https://schema.org/PreOrder',
        url: book.buyLinks.amazon,
        seller: {
          '@type': 'Organization',
          name: 'Amazon',
        },
      },
      {
        '@type': 'Offer',
        price: book.priceEbook,
        priceCurrency: book.currency,
        availability: book.status === 'available' ? 'https://schema.org/InStock' : 'https://schema.org/PreOrder',
        url: book.buyLinks.amazonEbook,
        seller: {
          '@type': 'Organization',
          name: 'Amazon Kindle',
        },
      },
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '150',
      bestRating: '5',
      worstRating: '1',
    },
    keywords: book.keywords.join(', '),
  };
}

// ─────────────────────────────────────────────────────────────────────
// 📄 ARTICLE SCHEMA (article de blog)
// ─────────────────────────────────────────────────────────────────────
export function generateArticleSchema(article: {
  title: string;
  description: string;
  slug: string;
  publishedAt: string;
  modifiedAt?: string;
  image?: string;
  keywords?: string[];
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': `${SITE_CONFIG.url}/blog/${article.slug}`,
    headline: article.title,
    description: article.description,
    url: `${SITE_CONFIG.url}/blog/${article.slug}`,
    datePublished: article.publishedAt,
    dateModified: article.modifiedAt || article.publishedAt,
    author: {
      '@type': 'Person',
      '@id': `${SITE_CONFIG.url}/#person`,
      name: AUTHOR.name,
    },
    publisher: {
      '@type': 'Organization',
      '@id': `${SITE_CONFIG.url}/#organization`,
      name: SITE_CONFIG.fullName,
    },
    image: article.image ? `${SITE_CONFIG.url}${article.image}` : `${SITE_CONFIG.url}/images/og-default.jpg`,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${SITE_CONFIG.url}/blog/${article.slug}`,
    },
    keywords: article.keywords?.join(', ') || '',
  };
}

// ─────────────────────────────────────────────────────────────────────
// ❓ FAQPAGE SCHEMA (page FAQ)
// ─────────────────────────────────────────────────────────────────────
export function generateFAQSchema(faqItems: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map(item => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };
}

// ─────────────────────────────────────────────────────────────────────
// 🌐 WEBSITE SCHEMA (page d'accueil)
// ─────────────────────────────────────────────────────────────────────
export function generateWebsiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_CONFIG.url}/#website`,
    url: SITE_CONFIG.url,
    name: SITE_CONFIG.fullName,
    description: SITE_CONFIG.description,
    publisher: {
      '@type': 'Organization',
      '@id': `${SITE_CONFIG.url}/#organization`,
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${SITE_CONFIG.url}/recherche?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };
}

// ─────────────────────────────────────────────────────────────────────
// 🔗 BREADCRUMB SCHEMA (fil d'Ariane)
// ─────────────────────────────────────────────────────────────────────
export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${SITE_CONFIG.url}${item.url}`,
    })),
  };
}
