import {
  getBooks,
  getFeaturedBook,
  getBookBySlug,
  getArticles,
  getArticleBySlug as sanityGetArticleBySlug,
  getFormations,
  getTestimonials,
  getFaqs,
  getSocialLinks,
  getSiteSettings,
} from './sanity.queries';
import { urlFor } from './sanity.image';

// ============================================================
// TYPES NORMALISÉS (format commun Sanity + local)
// ============================================================

export interface NormalizedBook {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  coverImage: string;
  shortDescription: string;
  description: string;
  features: string[];
  targetAudience: string;
  price: number;
  priceEbook: number;
  isbn: string;
  pages: number;
  status: string;
  releaseDate: string;
  buyLinks: Record<string, string>;
  extractPdf: string;
  isFeatured: boolean;
  faq: { question: string; answer: string }[];
}

export interface NormalizedArticle {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: any;
  contentType: 'string' | 'portableText';
  coverImage: string;
  author: string;
  category: string;
  tags: string[];
  publishedAt?: string;
  relatedArticles?: NormalizedArticle[];
}

export interface NormalizedFormation {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  coverImage: string;
  level: string;
  duration: string;
  price: number | string;
  externalUrl: string;
  status: string;
  features: string[];
}

export interface NormalizedTestimonial {
  id: string;
  name: string;
  role: string;
  photo: string;
  text: string;
  rating: number;
  bookReference?: string;
}

export interface SiteSettingsData {
  heroTitle?: string;
  heroSubtitle?: string;
  heroDynamicWords?: string[];
  heroQuotes?: string[];
  contactEmail?: string;
  newsletterTitle?: string;
  newsletterSubtitle?: string;
}

// ============================================================
// TRANSFORMATEURS SANITY → FORMAT NORMALISÉ
// ============================================================

function safeImageUrl(image: any, width = 800, height = 600): string | null {
  try {
    if (!image) return null;
    return urlFor(image).width(width).height(height).url();
  } catch {
    return null;
  }
}

function transformSanityBook(book: any): NormalizedBook {
  const buyLinksMap: Record<string, string> = {};
  if (book.buyLinks && Array.isArray(book.buyLinks)) {
    book.buyLinks.forEach((link: any) => {
      if (link.platform && link.url) {
        buyLinksMap[link.platform] = link.url;
      }
    });
  }

  return {
    id: book._id,
    slug: book.slug,
    title: book.title || '',
    subtitle: book.subtitle || '',
    coverImage: safeImageUrl(book.coverImage, 400, 600) || '/images/couverture-odyssee-ia.jpg',
    shortDescription: book.shortDescription || '',
    description: typeof book.description === 'string' ? book.description : '',
    features: book.highlights || [],
    targetAudience: book.targetAudience || '',
    price: book.price || 0,
    priceEbook: book.ebookPrice || 0,
    isbn: book.isbn || '',
    pages: book.pages || 0,
    status: book.status || 'available',
    releaseDate: book.releaseDate || '',
    buyLinks: buyLinksMap,
    extractPdf: book.extractPdf ? '' : '/extrait-odyssee-ia.pdf',
    isFeatured: book.isFeatured || false,
    faq: [],
  };
}

function transformSanityArticle(article: any): NormalizedArticle {
  return {
    id: article._id,
    slug: article.slug,
    title: article.title || '',
    excerpt: article.excerpt || '',
    content: article.content || '',
    contentType: Array.isArray(article.content) ? 'portableText' : 'string',
    coverImage: safeImageUrl(article.coverImage, 800, 400) || '/images/blog/default.jpg',
    author: article.author || 'Franklin KAMCHE',
    category: article.category || 'actualites',
    tags: article.tags || [],
    publishedAt: article._createdAt,
    relatedArticles: article.relatedArticles
      ? article.relatedArticles.map(transformSanityArticle)
      : undefined,
  };
}

function transformSanityFormation(formation: any): NormalizedFormation {
  return {
    id: formation._id,
    slug: formation.slug,
    title: formation.title || '',
    shortDescription: formation.shortDescription || '',
    description: formation.description || '',
    coverImage: safeImageUrl(formation.coverImage, 600, 400) || '/images/formations/default.jpg',
    level: formation.level || 'debutant',
    duration: formation.duration || '',
    price: formation.isFree ? 'gratuit' : (formation.price || 0),
    externalUrl: formation.externalUrl || '',
    status: formation.status || 'available',
    features: [],
  };
}

function transformSanityTestimonial(t: any): NormalizedTestimonial {
  return {
    id: t._id,
    name: t.name || '',
    role: t.role || '',
    photo: safeImageUrl(t.photo, 100, 100) || '',
    text: t.text || '',
    rating: t.rating || 5,
    bookReference: t.bookReference,
  };
}

// ============================================================
// FONCTIONS DE RÉCUPÉRATION AVEC FALLBACK
// ============================================================

export async function fetchBooks(): Promise<NormalizedBook[] | null> {
  try {
    const books = await getBooks();
    if (books && books.length > 0) {
      return books.map(transformSanityBook);
    }
  } catch (e) {
    console.warn('[NeuroInk] Sanity books fetch failed, using local data');
  }
  return null;
}

export async function fetchFeaturedBook(): Promise<NormalizedBook | null> {
  try {
    const book = await getFeaturedBook();
    if (book) {
      return transformSanityBook(book);
    }
  } catch (e) {
    console.warn('[NeuroInk] Sanity featured book fetch failed, using local data');
  }
  return null;
}

export async function fetchBookBySlug(slug: string): Promise<NormalizedBook | null> {
  try {
    const book = await getBookBySlug(slug);
    if (book) {
      return transformSanityBook(book);
    }
  } catch (e) {
    console.warn('[NeuroInk] Sanity book fetch failed for slug:', slug);
  }
  return null;
}

export async function fetchArticles(category?: string): Promise<NormalizedArticle[] | null> {
  try {
    const articles = await getArticles(category);
    if (articles && articles.length > 0) {
      return articles.map(transformSanityArticle);
    }
  } catch (e) {
    console.warn('[NeuroInk] Sanity articles fetch failed, using local data');
  }
  return null;
}

export async function fetchArticleBySlug(slug: string): Promise<NormalizedArticle | null> {
  try {
    const article = await sanityGetArticleBySlug(slug);
    if (article) {
      return transformSanityArticle(article);
    }
  } catch (e) {
    console.warn('[NeuroInk] Sanity article fetch failed for slug:', slug);
  }
  return null;
}

export async function fetchFormations(): Promise<NormalizedFormation[] | null> {
  try {
    const formations = await getFormations();
    if (formations && formations.length > 0) {
      return formations.map(transformSanityFormation);
    }
  } catch (e) {
    console.warn('[NeuroInk] Sanity formations fetch failed, using local data');
  }
  return null;
}

export async function fetchTestimonials(): Promise<NormalizedTestimonial[] | null> {
  try {
    const testimonials = await getTestimonials();
    if (testimonials && testimonials.length > 0) {
      return testimonials.map(transformSanityTestimonial);
    }
  } catch (e) {
    console.warn('[NeuroInk] Sanity testimonials fetch failed, using local data');
  }
  return null;
}

export async function fetchFaqs(category?: string): Promise<any[] | null> {
  try {
    const faqs = await getFaqs(category);
    if (faqs && faqs.length > 0) {
      return faqs.map((f: any) => ({
        question: f.question,
        answer: f.answer,
      }));
    }
  } catch (e) {
    console.warn('[NeuroInk] Sanity FAQ fetch failed, using local data');
  }
  return null;
}

export async function fetchSiteSettings(): Promise<SiteSettingsData | null> {
  try {
    const settings = await getSiteSettings();
    if (settings) {
      return {
        heroTitle: settings.heroTitle,
        heroSubtitle: settings.heroSubtitle,
        heroDynamicWords: settings.heroDynamicWords,
        heroQuotes: settings.heroQuotes,
        contactEmail: settings.contactEmail,
        newsletterTitle: settings.newsletterTitle,
        newsletterSubtitle: settings.newsletterSubtitle,
      };
    }
  } catch (e) {
    console.warn('[NeuroInk] Sanity settings fetch failed, using defaults');
  }
  return null;
}

export async function fetchSocialLinks(): Promise<any[] | null> {
  try {
    const links = await getSocialLinks();
    if (links && links.length > 0) {
      return links;
    }
  } catch (e) {
    console.warn('[NeuroInk] Sanity social links fetch failed, using defaults');
  }
  return null;
}
