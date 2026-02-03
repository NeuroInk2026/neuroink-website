import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'testimonial',
  title: 'Témoignage',
  type: 'document',
  icon: () => '💬',
  fields: [
    defineField({
      name: 'name',
      title: 'Nom',
      type: 'string',
      validation: (Rule) => Rule.required().error('Le nom est obligatoire'),
    }),
    defineField({
      name: 'role',
      title: 'Rôle / Profession',
      type: 'string',
      placeholder: 'Ex: Développeur, Étudiante, Manager...',
    }),
    defineField({
      name: 'photo',
      title: 'Photo',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'text',
      title: 'Témoignage',
      type: 'text',
      rows: 4,
      validation: (Rule) => Rule.required().error('Le témoignage est obligatoire'),
    }),
    defineField({
      name: 'rating',
      title: 'Note (1 à 5 étoiles)',
      type: 'number',
      options: {
        list: [
          { title: '⭐', value: 1 },
          { title: '⭐⭐', value: 2 },
          { title: '⭐⭐⭐', value: 3 },
          { title: '⭐⭐⭐⭐', value: 4 },
          { title: '⭐⭐⭐⭐⭐', value: 5 },
        ],
      },
      initialValue: 5,
    }),
    defineField({
      name: 'bookReference',
      title: 'Livre concerné',
      type: 'string',
      placeholder: 'Ex: L\'Odyssée de l\'IA en 30 jours',
    }),
    defineField({
      name: 'isActive',
      title: 'Actif (visible sur le site)',
      type: 'boolean',
      initialValue: true,
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
      title: 'name',
      subtitle: 'role',
      media: 'photo',
      isActive: 'isActive',
    },
    prepare({ title, subtitle, media, isActive }) {
      return {
        title: `${isActive ? '' : '[Masqué] '}${title}`,
        subtitle: subtitle || 'Sans rôle',
        media,
      };
    },
  },
});
