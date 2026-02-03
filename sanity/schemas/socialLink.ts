import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'socialLink',
  title: 'Réseau social',
  type: 'document',
  icon: () => '🔗',
  fields: [
    defineField({
      name: 'platform',
      title: 'Plateforme',
      type: 'string',
      options: {
        list: [
          { title: 'LinkedIn', value: 'linkedin' },
          { title: 'Instagram', value: 'instagram' },
          { title: 'X (Twitter)', value: 'x' },
          { title: 'TikTok', value: 'tiktok' },
          { title: 'YouTube', value: 'youtube' },
          { title: 'Facebook', value: 'facebook' },
          { title: 'Linktree', value: 'linktree' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'url',
      title: 'URL',
      type: 'url',
      validation: (Rule) => Rule.required().error('L\'URL est obligatoire'),
    }),
    defineField({
      name: 'isActive',
      title: 'Actif (visible sur le site)',
      type: 'boolean',
      initialValue: true,
    }),
  ],
  preview: {
    select: {
      title: 'platform',
      subtitle: 'url',
      isActive: 'isActive',
    },
    prepare({ title, subtitle, isActive }) {
      const platformLabels: Record<string, string> = {
        linkedin: 'LinkedIn',
        instagram: 'Instagram',
        x: 'X (Twitter)',
        tiktok: 'TikTok',
        youtube: 'YouTube',
        facebook: 'Facebook',
        linktree: 'Linktree',
      };
      return {
        title: `${isActive ? '✅' : '❌'} ${platformLabels[title] || title}`,
        subtitle,
      };
    },
  },
});
