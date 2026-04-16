const PROJECT_ID = 'ddona00k'
const DATASET = 'production'
const API_VERSION = '2024-03-12'
const token = process.env.SANITY_API_TOKEN

const siteConfig = {
  siteName: 'ARA Multimedia Services',
  slogan: 'Soluciones Digitales con Impacto Real',
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

async function patchDocument() {
  // Primero obtener el ID
  const queryUrl = `https://${PROJECT_ID}.api.sanity.io/v${API_VERSION}/data/query/${DATASET}?query=*[_type=="siteConfig"][0]._id`
  
  const queryRes = await fetch(queryUrl, {
    headers: { 'Authorization': `Bearer ${token}` }
  })
  const queryData = await queryRes.json()
  
  if (!queryData.result) {
    console.log('❌ No existe documento siteConfig para actualizar')
    return
  }
  
  const docId = queryData.result
  console.log(`📝 Actualizando documento: ${docId}`)
  
  const url = `https://${PROJECT_ID}.api.sanity.io/v${API_VERSION}/data/mutate/${DATASET}`
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
    body: JSON.stringify({
      mutations: [
        { patch: { id: docId, set: siteConfig } }
      ]
    }),
  })
  
  const data = await response.json()
  if (response.ok) {
    console.log('✅ Documento actualizado exitosamente!')
  } else {
    console.error('❌ Error:', data)
  }
}

patchDocument()
