import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'faq',
  title: 'FAQ',
  type: 'document',
  icon: () => '❓',
  fields: [
    defineField({
      name: 'question',
      title: 'Question',
      type: 'string',
      validation: (Rule) => Rule.required().error('La question est obligatoire'),
    }),
    defineField({
      name: 'answer',
      title: 'Réponse',
      type: 'text',
      rows: 5,
      validation: (Rule) => Rule.required().error('La réponse est obligatoire'),
    }),
    defineField({
      name: 'category',
      title: 'Catégorie',
      type: 'string',
      options: {
        list: [
          { title: 'Général', value: 'general' },
          { title: 'Livres', value: 'livres' },
          { title: 'Formations', value: 'formations' },
          { title: 'Contact', value: 'contact' },
        ],
        layout: 'radio',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'isActive',
      title: 'Active (visible sur le site)',
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
      title: 'question',
      subtitle: 'category',
      isActive: 'isActive',
    },
    prepare({ title, subtitle, isActive }) {
      const categoryLabels: Record<string, string> = {
        general: 'Général',
        livres: 'Livres',
        formations: 'Formations',
        contact: 'Contact',
      };
      return {
        title: `${isActive ? '' : '[Masqué] '}${title}`,
        subtitle: categoryLabels[subtitle] || subtitle,
      };
    },
  },
});
