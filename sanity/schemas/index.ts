import book from './book';
import article from './article';
import formation from './formation';
import testimonial from './testimonial';
import faq from './faq';
import socialLink from './socialLink';
import siteSettings from './siteSettings';

export const schemaTypes = [
  // Documents principaux
  book,
  article,
  formation,

  // Contenus secondaires
  testimonial,
  faq,
  socialLink,

  // Configuration
  siteSettings,
];
