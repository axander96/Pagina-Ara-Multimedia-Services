import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './sanity/schemas'
import {structure} from './sanity/structure'

export default defineConfig({
  name: 'default',
  title: 'ARA Multimedia Services',

  projectId: 'ddona00k',
  dataset: 'production',

  plugins: [
    structureTool({structure}),
    visionTool()
  ],

  schema: {
    types: schemaTypes,
  },
})
