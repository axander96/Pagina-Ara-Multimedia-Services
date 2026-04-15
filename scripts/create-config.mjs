// Script para crear documento siteConfig en Sanity
// Uso: SANITY_API_TOKEN=tu_token node scripts/create-config.mjs

const PROJECT_ID = 'ddona00k'
const DATASET = 'production'
const API_VERSION = '2024-03-12'

const token = process.env.SANITY_API_TOKEN

if (!token) {
  console.error('❌ Error: Se requiere SANITY_API_TOKEN')
  console.log('Uso: SANITY_API_TOKEN=tu_token node scripts/create-config.mjs')
  process.exit(1)
}

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

async function createDocument() {
  const url = `https://${PROJECT_ID}.api.sanity.io/v${API_VERSION}/data/mutate/${DATASET}`
  
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify({
        mutations: [
          { create: siteConfig }
        ]
      }),
    })

    const data = await response.json()

    if (response.ok) {
      console.log('✅ Documento creado exitosamente:')
      console.log(`   ID: ${data.results[0].id}`)
      console.log(`   Document ID: ${data.results[0].document._id}`)
    } else {
      console.error('❌ Error:', data)
      
      // Si ya existe, intentar actualizar
      if (data.error?.description?.includes('duplicate')) {
        console.log('\n💡 El documento ya existe, intentando actualizar...')
        await updateDocument()
      }
    }
  } catch (error) {
    console.error('❌ Error de conexión:', error.message)
  }
}

async function updateDocument() {
  // Primero obtenemos el ID del documento existente
  const queryUrl = `https://${PROJECT_ID}.api.sanity.io/v${API_VERSION}/data/query/${DATASET}?query=*[_type=="siteConfig"][0]._id`
  
  try {
    const queryRes = await fetch(queryUrl, {
      headers: { 'Authorization': `Bearer ${token}` }
    })
    const queryData = await queryRes.json()
    
    if (queryData.result) {
      const docId = queryData.result
      console.log(`   Documento existente: ${docId}`)
      
      // Actualizar documento
      const url = `https://${PROJECT_ID}.api.sanity.io/v${API_VERSION}/data/mutate/${DATASET}`
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({
          mutations: [
            { 
              patch: {
                id: docId,
                set: siteConfig
              }
            }
          ]
        }),
      })
      
      const data = await response.json()
      if (response.ok) {
        console.log('✅ Documento actualizado exitosamente')
      } else {
        console.error('❌ Error al actualizar:', data)
      }
    }
  } catch (error) {
    console.error('❌ Error:', error.message)
  }
}

createDocument()
