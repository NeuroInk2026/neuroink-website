import type { Metadata } from 'next';
import { Raleway } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CookieBanner from '@/components/CookieBanner';
import GoogleAnalytics from '@/components/GoogleAnalytics';
import { homeMetadata } from '@/lib/seo/metadata';
import { generateOrganizationSchema, generateWebsiteSchema } from '@/lib/seo/jsonld';

const raleway = Raleway({
  subsets: ['latin'],
  variable: '--font-raleway',
  display: 'swap', // Optimisation: swap pour éviter FOIT
});

// Metadata globale avec SEO optimisé
export const metadata: Metadata = homeMetadata();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // JSON-LD global (Organization + Website)
  const organizationSchema = generateOrganizationSchema();
  const websiteSchema = generateWebsiteSchema();

  return (
    <html lang="fr" className={raleway.variable}>
      <head>
        {/* OPTIMISATION 1: Preconnect Google Fonts pour gagner 3-5 points */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* JSON-LD Global - Organisation + Website */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />

        {/* OPTIMISATION 2: Google Analytics avec chargement différé */}
        <GoogleAnalytics />
      </head>
      <body className="font-raleway">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
