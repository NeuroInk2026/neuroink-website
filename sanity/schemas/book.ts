import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'book',
  title: 'Livre',
  type: 'document',
  icon: () => '📚',
  fields: [
    defineField({
      name: 'title',
      title: 'Titre',
      type: 'string',
      validation: (Rule) => Rule.required().error('Le titre est obligatoire'),
    }),
    defineField({
      name: 'subtitle',
      title: 'Sous-titre',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug (URL)',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required().error('Le slug est obligatoire'),
    }),
    defineField({
      name: 'coverImage',
      title: 'Image de couverture',
      type: 'image',
      options: { hotspot: true },
      validation: (Rule) => Rule.required().error('L\'image de couverture est obligatoire'),
    }),
    defineField({
      name: 'shortDescription',
      title: 'Description courte (max 200 caractères)',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.max(200),
    }),
    defineField({
      name: 'description',
      title: 'Description longue',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'highlights',
      title: 'Points forts (ce que vous découvrirez)',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'targetAudience',
      title: 'Pour qui ?',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'price',
      title: 'Prix (EUR)',
      type: 'number',
      validation: (Rule) => Rule.required().positive(),
    }),
    defineField({
      name: 'ebookPrice',
      title: 'Prix ebook (EUR)',
      type: 'number',
      validation: (Rule) => Rule.positive(),
    }),
    defineField({
      name: 'status',
      title: 'Statut',
      type: 'string',
      options: {
        list: [
          { title: 'Disponible', value: 'available' },
          { title: 'Précommande', value: 'preorder' },
          { title: 'Bientôt disponible', value: 'coming_soon' },
        ],
        layout: 'radio',
      },
      initialValue: 'available',
    }),
    defineField({
      name: 'releaseDate',
      title: 'Date de sortie',
      type: 'date',
    }),
    defineField({
      name: 'isbn',
      title: 'ISBN',
      type: 'string',
    }),
    defineField({
      name: 'pages',
      title: 'Nombre de pages',
      type: 'number',
      validation: (Rule) => Rule.positive().integer(),
    }),
    defineField({
      name: 'buyLinks',
      title: 'Liens d\'achat',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'platform', title: 'Plateforme', type: 'string', options: { list: ['Publishroom', 'Amazon', 'Fnac', 'Cultura', 'Autre'] } },
            { name: 'url', title: 'URL', type: 'url' },
            { name: 'label', title: 'Texte du bouton', type: 'string' },
          ],
          preview: {
            select: { title: 'platform', subtitle: 'url' },
          },
        },
      ],
    }),
    defineField({
      name: 'extractPdf',
      title: 'Extrait PDF gratuit',
      type: 'file',
      options: { accept: '.pdf' },
    }),
    defineField({
      name: 'isFeatured',
      title: 'Livre vedette (mis en avant)',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'order',
      title: 'Ordre d\'affichage',
      type: 'number',
      initialValue: 0,
    }),
  ],
  orderings: [
    {
      title: 'Ordre d\'affichage',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'status',
      media: 'coverImage',
    },
    prepare({ title, subtitle, media }) {
      const statusLabels: Record<string, string> = {
        available: 'Disponible',
        preorder: 'Précommande',
        coming_soon: 'Bientôt',
      };
      return {
        title,
        subtitle: statusLabels[subtitle] || subtitle,
        media,
      };
    },
  },
});
