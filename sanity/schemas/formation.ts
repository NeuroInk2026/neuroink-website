import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'formation',
  title: 'Formation',
  type: 'document',
  icon: () => '🎓',
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
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'shortDescription',
      title: 'Description courte',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.max(300),
    }),
    defineField({
      name: 'description',
      title: 'Description complète',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'coverImage',
      title: 'Image de couverture',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'level',
      title: 'Niveau',
      type: 'string',
      options: {
        list: [
          { title: 'Débutant', value: 'debutant' },
          { title: 'Intermédiaire', value: 'intermediaire' },
          { title: 'Avancé', value: 'avance' },
        ],
        layout: 'radio',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'duration',
      title: 'Durée',
      type: 'string',
      placeholder: 'Ex: 4 semaines, 20 heures...',
    }),
    defineField({
      name: 'price',
      title: 'Prix (EUR) - laisser vide ou 0 si gratuit',
      type: 'number',
    }),
    defineField({
      name: 'isFree',
      title: 'Formation gratuite',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'externalUrl',
      title: 'Lien externe (plateforme de formation)',
      type: 'url',
    }),
    defineField({
      name: 'status',
      title: 'Statut',
      type: 'string',
      options: {
        list: [
          { title: 'Disponible', value: 'available' },
          { title: 'Bientôt disponible', value: 'coming_soon' },
        ],
        layout: 'radio',
      },
      initialValue: 'coming_soon',
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
      subtitle: 'level',
      media: 'coverImage',
      status: 'status',
    },
    prepare({ title, subtitle, media, status }) {
      const levelLabels: Record<string, string> = {
        debutant: 'Débutant',
        intermediaire: 'Intermédiaire',
        avance: 'Avancé',
      };
      return {
        title: `${status === 'coming_soon' ? '[Bientôt] ' : ''}${title}`,
        subtitle: levelLabels[subtitle] || subtitle,
        media,
      };
    },
  },
});
