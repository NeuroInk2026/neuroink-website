import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemas'

// Configuration Sanity Studio pour NeuroInk
export default defineConfig({
  name: 'neuroink-studio',
  title: 'NeuroInk Admin',
  
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Contenu')
          .items([
            S.listItem()
              .title('Livres')
              .child(S.documentTypeList('book').title('Livres')),
            S.listItem()
              .title('Articles')
              .child(S.documentTypeList('article').title('Articles')),
            S.listItem()
              .title('Formations')
              .child(S.documentTypeList('formation').title('Formations')),
            S.divider(),
            S.listItem()
              .title('Témoignages')
              .child(S.documentTypeList('testimonial').title('Témoignages')),
            S.listItem()
              .title('FAQ')
              .child(S.documentTypeList('faq').title('FAQ')),
            S.divider(),
            S.listItem()
              .title('Paramètres')
              .child(
                S.document()
                  .schemaType('siteSettings')
                  .documentId('siteSettings')
              ),
          ]),
    }),
    visionTool(),
  ],
  
  schema: {
    types: schemaTypes,
  },
})
