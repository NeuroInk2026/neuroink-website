// ═══════════════════════════════════════════════════════════════════
// 📱 WEB APP MANIFEST - NEUROINK
// ═══════════════════════════════════════════════════════════════════
// app/manifest.ts

import { MetadataRoute } from 'next';
import { SITE_CONFIG } from '@/lib/seo/constants';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE_CONFIG.fullName,
    short_name: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    start_url: '/',
    display: 'standalone',
    background_color: '#FFFFFF',
    theme_color: '#6B3FA0',
    orientation: 'portrait-primary',
    scope: '/',
    lang: 'fr-FR',
    dir: 'ltr',
    icons: [
      {
        src: '/favicon.ico',
        sizes: '32x32',
        type: 'image/x-icon',
      },
      {
        src: '/images/logo-neuroink.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: '/images/logo-neuroink.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any',
      },
    ],
    categories: ['education', 'books', 'productivity'],
  };
}
