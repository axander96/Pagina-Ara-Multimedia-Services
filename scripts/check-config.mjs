const PROJECT_ID = 'ddona00k'
const DATASET = 'production'
const API_VERSION = '2024-03-12'

const token = process.env.SANITY_API_TOKEN

async function checkDocuments() {
  const url = `https://${PROJECT_ID}.api.sanity.io/v${API_VERSION}/data/query/${DATASET}?query=*[_type=="siteConfig"]{_id,_type,siteName,logo}`
  
  try {
    const response = await fetch(url, {
      headers: { 'Authorization': `Bearer ${token}` }
    })
    const data = await response.json()
    
    if (response.ok) {
      console.log('📋 Documentos encontrados:')
      console.log(JSON.stringify(data.result, null, 2))
    } else {
      console.error('❌ Error:', data)
    }
  } catch (error) {
    console.error('❌ Error de conexión:', error.message)
  }
}

checkDocuments()
