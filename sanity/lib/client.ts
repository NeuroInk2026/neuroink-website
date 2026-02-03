import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'
import type { SanityImageSource } from '@sanity/image-url/lib/types/types'

// ═══════════════════════════════════════════════════════════════════
// 🗄️ CONFIGURATION SANITY CLIENT
// Utilisé pour récupérer les données du CMS
// ═══════════════════════════════════════════════════════════════════
export const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-01-01',
  useCdn: process.env.NODE_ENV === 'production',
  // Token pour les requêtes authentifiées (optionnel)
  token: process.env.SANITY_API_TOKEN,
})

// ═══════════════════════════════════════════════════════════════════
// 🖼️ GÉNÉRATEUR D'URL D'IMAGES
// ═══════════════════════════════════════════════════════════════════
const builder = imageUrlBuilder(sanityClient)

export function urlFor(source: SanityImageSource) {
  return builder.image(source)
}

// ═══════════════════════════════════════════════════════════════════
// 📝 TYPES POUR LES DONNÉES SANITY
// Conformes aux modèles de données du cahier des charges
// ═══════════════════════════════════════════════════════════════════
export interface SanityBook {
  _id: string
  title: string
  subtitle?: string
  slug: { current: string }
  description: any[] // Portable Text
  shortDescription: string
  price: number
  currency: string
  status: 'available' | 'preorder' | 'coming_soon'
  releaseDate: string
  coverImage: SanityImageSource
  isbn?: string
  pages?: number
  buyLinks?: {
    platform: 'publishroom' | 'amazon' | 'fnac' | 'other'
    url: string
    label: string
  }[]
  extractPdf?: {
    asset: { url: string }
  }
  isFeatured: boolean
  order: number
}

export interface SanityArticle {
  _id: string
  title: string
  slug: { current: string }
  excerpt: string
  content: any[] // Portable Text
  coverImage: SanityImageSource
  author: string
  publishedAt: string
  category: 'actualites' | 'tutoriels' | 'reflexions' | 'interviews'
  tags?: string[]
  isPublished: boolean
}

export interface SanityFormation {
  _id: string
  title: string
  slug: { current: string }
  description: any[]
  shortDescription: string
  duration: string
  level: 'debutant' | 'intermediaire' | 'avance'
  price: number | 'gratuit'
  coverImage: SanityImageSource
  externalUrl?: string
  status: 'available' | 'coming_soon'
  order: number
}

export interface SanityTestimonial {
  _id: string
  name: string
  role?: string
  photo?: SanityImageSource
  text: string
  rating?: 1 | 2 | 3 | 4 | 5
  bookReference?: string
  isActive: boolean
  order: number
}

export interface SanityFAQ {
  _id: string
  question: string
  answer: any[]
  category: 'general' | 'livres' | 'formations' | 'contact'
  order: number
  isActive: boolean
}

export interface SanitySiteSettings {
  siteName: string
  siteDescription: string
  contactEmail: string
  logo: SanityImageSource
  favicon: SanityImageSource
  heroBackground: SanityImageSource
  newsletterProvider: 'mailchimp' | 'convertkit' | 'none'
  analyticsId?: string
  maintenanceMode: boolean
}

// ═══════════════════════════════════════════════════════════════════
// 🔍 REQUÊTES GROQ
// ═══════════════════════════════════════════════════════════════════
export const queries = {
  // Tous les livres
  allBooks: `*[_type == "book"] | order(order asc) {
    _id,
    title,
    subtitle,
    slug,
    shortDescription,
    price,
    currency,
    status,
    releaseDate,
    coverImage,
    isbn,
    pages,
    isFeatured,
    order
  }`,

  // Livre vedette
  featuredBook: `*[_type == "book" && isFeatured == true][0] {
    _id,
    title,
    subtitle,
    slug,
    description,
    shortDescription,
    price,
    currency,
    status,
    releaseDate,
    coverImage,
    isbn,
    pages,
    buyLinks,
    extractPdf { asset-> { url } }
  }`,

  // Livre par slug
  bookBySlug: `*[_type == "book" && slug.current == $slug][0] {
    _id,
    title,
    subtitle,
    slug,
    description,
    shortDescription,
    price,
    currency,
    status,
    releaseDate,
    coverImage,
    isbn,
    pages,
    buyLinks,
    extractPdf { asset-> { url } }
  }`,

  // Articles publiés
  publishedArticles: `*[_type == "article" && isPublished == true] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    coverImage,
    author,
    publishedAt,
    category,
    tags
  }`,

  // Témoignages actifs
  activeTestimonials: `*[_type == "testimonial" && isActive == true] | order(order asc) {
    _id,
    name,
    role,
    photo,
    text,
    rating,
    bookReference
  }`,

  // FAQ par catégorie
  faqByCategory: `*[_type == "faq" && category == $category && isActive == true] | order(order asc) {
    _id,
    question,
    answer
  }`,

  // Paramètres du site
  siteSettings: `*[_type == "siteSettings"][0]`,
}

// ═══════════════════════════════════════════════════════════════════
// 🛠️ FONCTIONS DE RÉCUPÉRATION
// ═══════════════════════════════════════════════════════════════════
export async function getBooks(): Promise<SanityBook[]> {
  return sanityClient.fetch(queries.allBooks)
}

export async function getFeaturedBook(): Promise<SanityBook | null> {
  return sanityClient.fetch(queries.featuredBook)
}

export async function getBookBySlug(slug: string): Promise<SanityBook | null> {
  return sanityClient.fetch(queries.bookBySlug, { slug })
}

export async function getArticles(): Promise<SanityArticle[]> {
  return sanityClient.fetch(queries.publishedArticles)
}

export async function getTestimonials(): Promise<SanityTestimonial[]> {
  return sanityClient.fetch(queries.activeTestimonials)
}

export async function getFAQByCategory(category: string): Promise<SanityFAQ[]> {
  return sanityClient.fetch(queries.faqByCategory, { category })
}

export async function getSiteSettings(): Promise<SanitySiteSettings | null> {
  return sanityClient.fetch(queries.siteSettings)
}
