import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './sanity/schemas';

export default defineConfig({
  name: 'neuroink-studio',
  title: 'NeuroInk - Administration',

  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'ao0f751d',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',

  basePath: '/admin',

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Contenu NeuroInk')
          .items([
            // Paramètres du site
            S.listItem()
              .title('Paramètres du site')
              .icon(() => '⚙️')
              .child(
                S.document()
                  .schemaType('siteSettings')
                  .documentId('siteSettings')
                  .title('Paramètres du site')
              ),

            S.divider(),

            // Livres
            S.listItem()
              .title('Livres')
              .icon(() => '📚')
              .child(
                S.documentTypeList('book')
                  .title('Livres')
              ),

            // Articles
            S.listItem()
              .title('Articles')
              .icon(() => '📝')
              .child(
                S.documentTypeList('article')
                  .title('Articles')
              ),

            // Formations
            S.listItem()
              .title('Formations')
              .icon(() => '🎓')
              .child(
                S.documentTypeList('formation')
                  .title('Formations')
              ),

            S.divider(),

            // Témoignages
            S.listItem()
              .title('Témoignages')
              .icon(() => '💬')
              .child(
                S.documentTypeList('testimonial')
                  .title('Témoignages')
              ),

            // FAQ
            S.listItem()
              .title('FAQ')
              .icon(() => '❓')
              .child(
                S.documentTypeList('faq')
                  .title('FAQ')
              ),

            // Réseaux sociaux
            S.listItem()
              .title('Réseaux sociaux')
              .icon(() => '🔗')
              .child(
                S.documentTypeList('socialLink')
                  .title('Réseaux sociaux')
              ),
          ]),
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
});
