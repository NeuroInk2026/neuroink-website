// ═══════════════════════════════════════════════════════════════════
// 🤖 ROBOTS.TXT - NEUROINK
// ═══════════════════════════════════════════════════════════════════
// app/robots.ts

import { MetadataRoute } from 'next';
import { SITE_CONFIG } from '@/lib/seo/constants';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/admin/',
          '/_next/',
          '/private/',
          '/*.json$',
        ],
      },
      // Règles spécifiques pour les crawlers IA (ChatGPT, Perplexity, etc.)
      {
        userAgent: [
          'GPTBot',
          'ChatGPT-User',
          'anthropic-ai',
          'Claude-Web',
          'PerplexityBot',
          'Applebot-Extended',
          'Google-Extended',
        ],
        allow: '/',
        disallow: [
          '/api/',
          '/admin/',
        ],
      },
    ],
    sitemap: `${SITE_CONFIG.url}/sitemap.xml`,
    host: SITE_CONFIG.url,
  };
}
