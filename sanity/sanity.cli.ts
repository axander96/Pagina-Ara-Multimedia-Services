import { defineCliConfig } from 'sanity/cli'

export default defineCliConfig({
  studioHost: 'ara-multimedia-ddona00k',
  api: {
    projectId: process.env.SANITY_STUDIO_PROJECT_ID || 'ddona00k',
    dataset: process.env.SANITY_STUDIO_DATASET || 'production',
  },
})
