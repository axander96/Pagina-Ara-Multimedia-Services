import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'ddona00k',
  dataset: 'production',
  apiVersion: '2024-03-12',
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
})

const siteConfig = {
  _type: 'siteConfig',
  siteName: 'ARA Multimedia Services',
  slogan: 'Marketing Digital con Impacto Real',
  logo: {
    _type: 'image',
    asset: {
      _type: 'reference',
      _ref: 'image-06fc5021a828e6fb57e1595c1513ce0b4169f14b-899x202-png',
    },
  },
  email: 'aramultimediasv@gmail.com',
  phone: '+503 1234 5678',
  whatsapp: '+503 1234 5678',
  socialLinks: {
    _type: 'socialLinks',
    instagram: 'https://instagram.com/ara.multimedia.sv',
    linkedin: 'https://linkedin.com/company/ara-multimedia',
    youtube: 'https://youtube.com/@ARA-multimedia',
  },
}

async function createSiteConfig() {
  try {
    const result = await client.create(siteConfig)
    console.log('✅ Configuración del sitio creada exitosamente:')
    console.log(`   ID: ${result._id}`)
    console.log(`   Rev: ${result._rev}`)
  } catch (error: any) {
    console.error('❌ Error al crear:', error.message)
    if (error.message.includes('already exists')) {
      console.log('\n💡 Ya existe un documento. Intentando actualizar...')
      const existing = await client.fetch('*[_type == "siteConfig"][0]')
      if (existing) {
        const updated = await client.patch(existing._id).set(siteConfig).commit()
        console.log('✅ Documento actualizado:', updated._id)
      }
    }
  }
}

createSiteConfig()
