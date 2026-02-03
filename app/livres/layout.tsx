import { Metadata } from 'next';
import { livresMetadata } from '@/lib/seo/metadata';
import { generateBookSchema, generateFAQSchema } from '@/lib/seo/jsonld';
import { odysseeIA } from '@/data/books';

// SEO Metadata pour la page Livres
export const metadata: Metadata = livresMetadata();

export default function LivresLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Schemas JSON-LD pour le livre
  const bookSchema = generateBookSchema(odysseeIA);
  const faqSchema = generateFAQSchema(odysseeIA.faq);

  return (
    <>
      {/* JSON-LD Schemas - Book + FAQ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(bookSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {children}
    </>
  );
}
