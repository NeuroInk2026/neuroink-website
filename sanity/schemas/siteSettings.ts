import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'siteSettings',
  title: 'Paramètres du site',
  type: 'document',
  icon: () => '⚙️',
  fields: [
    // Informations générales
    defineField({
      name: 'siteName',
      title: 'Nom du site',
      type: 'string',
      initialValue: 'NeuroInk',
    }),
    defineField({
      name: 'siteDescription',
      title: 'Description du site',
      type: 'text',
      rows: 3,
      initialValue: 'NeuroInk démocratise l\'intelligence artificielle avec des formations, des livres clairs et progressifs.',
    }),
    defineField({
      name: 'contactEmail',
      title: 'Email de contact',
      type: 'string',
      initialValue: 'contact@neuroink.fr',
      description: 'Email affiché sur le site et utilisé pour le formulaire de contact',
    }),

    // Images
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
      description: 'Logo principal du site',
    }),
    defineField({
      name: 'favicon',
      title: 'Favicon',
      type: 'image',
    }),
    defineField({
      name: 'heroBackground',
      title: 'Image de fond Hero (accueil)',
      type: 'image',
    }),

    // Hero
    defineField({
      name: 'heroTitle',
      title: 'Titre Hero',
      type: 'string',
      initialValue: 'L\'intelligence artificielle enfin',
      description: 'Le mot dynamique turquoise est ajouté automatiquement après',
    }),
    defineField({
      name: 'heroSubtitle',
      title: 'Sous-titre Hero',
      type: 'text',
      rows: 3,
      initialValue: 'NeuroInk démocratise l\'intelligence artificielle avec des formations, des livres clairs, progressifs et sans prérequis. Rejoignez les 15 000+ apprenants qui ont déjà franchi le pas.',
    }),
    defineField({
      name: 'heroDynamicWords',
      title: 'Mots dynamiques Hero (turquoise)',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Les mots qui alternent dans le titre hero',
    }),
    defineField({
      name: 'heroQuotes',
      title: 'Citations Hero',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Les citations qui défilent sous les boutons CTA',
    }),

    // Newsletter
    defineField({
      name: 'newsletterTitle',
      title: 'Titre section newsletter',
      type: 'string',
      initialValue: 'Restez informé des nouveautés NeuroInk',
    }),
    defineField({
      name: 'newsletterSubtitle',
      title: 'Sous-titre newsletter',
      type: 'string',
      initialValue: 'Recevez nos articles, conseils et offres exclusives',
    }),

    // Analytics
    defineField({
      name: 'analyticsId',
      title: 'Google Analytics ID (GA4)',
      type: 'string',
      placeholder: 'G-XXXXXXXXXX',
      description: 'Laissez vide pour désactiver',
    }),

    // Maintenance
    defineField({
      name: 'maintenanceMode',
      title: 'Mode maintenance',
      type: 'boolean',
      initialValue: false,
      description: 'Active pour afficher une page de maintenance',
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Paramètres du site',
        subtitle: 'Configuration générale de NeuroInk',
      };
    },
  },
});
