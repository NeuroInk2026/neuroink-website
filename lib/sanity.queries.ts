import { sanityClient } from './sanity.client';

// ==================== LIVRES ====================

export async function getBooks() {
  return sanityClient.fetch(
    `*[_type == "book"] | order(order asc) {
      _id,
      title,
      subtitle,
      "slug": slug.current,
      coverImage,
      shortDescription,
      description,
      highlights,
      targetAudience,
      price,
      ebookPrice,
      status,
      releaseDate,
      isbn,
      pages,
      buyLinks,
      extractPdf,
      isFeatured,
      order
    }`
  );
}

export async function getFeaturedBook() {
  return sanityClient.fetch(
    `*[_type == "book" && isFeatured == true][0] {
      _id,
      title,
      subtitle,
      "slug": slug.current,
      coverImage,
      shortDescription,
      description,
      highlights,
      targetAudience,
      price,
      ebookPrice,
      status,
      releaseDate,
      isbn,
      pages,
      buyLinks,
      extractPdf
    }`
  );
}

export async function getBookBySlug(slug: string) {
  return sanityClient.fetch(
    `*[_type == "book" && slug.current == $slug][0] {
      _id,
      title,
      subtitle,
      "slug": slug.current,
      coverImage,
      shortDescription,
      description,
      highlights,
      targetAudience,
      price,
      ebookPrice,
      status,
      releaseDate,
      isbn,
      pages,
      buyLinks,
      extractPdf,
      isFeatured
    }`,
    { slug }
  );
}

// ==================== ARTICLES ====================

export async function getArticles(category?: string) {
  const filter = category
    ? `*[_type == "article" && isPublished == true && category == $category]`
    : `*[_type == "article" && isPublished == true]`;

  return sanityClient.fetch(
    `${filter} | order(_createdAt desc) {
      _id,
      title,
      "slug": slug.current,
      excerpt,
      coverImage,
      author,
      category,
      tags,
      _createdAt
    }`,
    category ? { category } : {}
  );
}

export async function getArticleBySlug(slug: string) {
  return sanityClient.fetch(
    `*[_type == "article" && slug.current == $slug && isPublished == true][0] {
      _id,
      title,
      "slug": slug.current,
      excerpt,
      content,
      coverImage,
      author,
      category,
      tags,
      _createdAt,
      "relatedArticles": *[_type == "article" && isPublished == true && slug.current != $slug && category == ^.category][0...3] {
        _id,
        title,
        "slug": slug.current,
        excerpt,
        coverImage,
        category
      }
    }`,
    { slug }
  );
}

// ==================== FORMATIONS ====================

export async function getFormations() {
  return sanityClient.fetch(
    `*[_type == "formation"] | order(order asc) {
      _id,
      title,
      "slug": slug.current,
      shortDescription,
      description,
      coverImage,
      level,
      duration,
      price,
      isFree,
      externalUrl,
      status,
      order
    }`
  );
}

// ==================== TÉMOIGNAGES ====================

export async function getTestimonials() {
  return sanityClient.fetch(
    `*[_type == "testimonial" && isActive == true] | order(order asc) {
      _id,
      name,
      role,
      photo,
      text,
      rating,
      bookReference,
      order
    }`
  );
}

// ==================== FAQ ====================

export async function getFaqs(category?: string) {
  const filter = category
    ? `*[_type == "faq" && isActive == true && category == $category]`
    : `*[_type == "faq" && isActive == true]`;

  return sanityClient.fetch(
    `${filter} | order(order asc) {
      _id,
      question,
      answer,
      category,
      order
    }`,
    category ? { category } : {}
  );
}

// ==================== RÉSEAUX SOCIAUX ====================

export async function getSocialLinks() {
  return sanityClient.fetch(
    `*[_type == "socialLink" && isActive == true] {
      _id,
      platform,
      url,
      isActive
    }`
  );
}

// ==================== PARAMÈTRES DU SITE ====================

export async function getSiteSettings() {
  return sanityClient.fetch(
    `*[_type == "siteSettings"][0] {
      siteName,
      siteDescription,
      contactEmail,
      logo,
      favicon,
      heroBackground,
      heroTitle,
      heroSubtitle,
      heroDynamicWords,
      heroQuotes,
      newsletterTitle,
      newsletterSubtitle,
      analyticsId,
      maintenanceMode
    }`
  );
}
