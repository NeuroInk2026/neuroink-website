import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'article',
  title: 'Article',
  type: 'document',
  icon: () => '📝',
  fields: [
    defineField({
      name: 'title',
      title: 'Titre',
      type: 'string',
      validation: (Rule) => Rule.required().error('Le titre est obligatoire'),
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
      name: 'excerpt',
      title: 'Extrait (aperçu)',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.max(300),
    }),
    defineField({
      name: 'content',
      title: 'Contenu',
      type: 'array',
      of: [
        { type: 'block' },
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            {
              name: 'alt',
              title: 'Texte alternatif',
              type: 'string',
            },
            {
              name: 'caption',
              title: 'Légende',
              type: 'string',
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'coverImage',
      title: 'Image de couverture',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'author',
      title: 'Auteur',
      type: 'string',
      initialValue: 'Franklin KAMCHE',
    }),
    defineField({
      name: 'category',
      title: 'Catégorie',
      type: 'string',
      options: {
        list: [
          { title: 'Actualités', value: 'actualites' },
          { title: 'Tutoriels', value: 'tutoriels' },
          { title: 'Réflexions', value: 'reflexions' },
          { title: 'Interviews', value: 'interviews' },
        ],
        layout: 'radio',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
      options: { layout: 'tags' },
    }),
    defineField({
      name: 'isPublished',
      title: 'Publié',
      type: 'boolean',
      initialValue: false,
      description: 'Active pour rendre l\'article visible sur le site',
    }),
  ],
  orderings: [
    {
      title: 'Date de création',
      name: 'createdAtDesc',
      by: [{ field: '_createdAt', direction: 'desc' }],
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'category',
      media: 'coverImage',
      isPublished: 'isPublished',
    },
    prepare({ title, subtitle, media, isPublished }) {
      const categoryLabels: Record<string, string> = {
        actualites: 'Actualités',
        tutoriels: 'Tutoriels',
        reflexions: 'Réflexions',
        interviews: 'Interviews',
      };
      return {
        title: `${isPublished ? '' : '[Brouillon] '}${title}`,
        subtitle: categoryLabels[subtitle] || subtitle,
        media,
      };
    },
  },
});
