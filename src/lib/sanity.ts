import { createClient } from 'next-sanity'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-03-12',
  useCdn: true,
})

// URL builder manual para imágenes de Sanity
export const urlFor = (source: any) => {
  if (!source) return ''
  
  // Si es un string (URL completa), devolverla
  if (typeof source === 'string') return source
  
  // Si tiene asset._ref (formato estándar de Sanity)
  if (source.asset?._ref) {
    const ref = source.asset._ref
    // Convertir image-abc123-1200x800-jpg a abc123-1200x800.jpg
    const parts = ref.replace('image-', '').split('-')
    const extension = parts.pop() // jpg, png, webp
    const filename = parts.join('-') + '.' + extension
    const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'ddona00k'
    const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'
    return `https://cdn.sanity.io/images/${projectId}/${dataset}/${filename}`
  }
  
  // Si tiene asset.url (ya es una URL completa)
  if (source.asset?.url) {
    return source.asset.url
  }
  
  return ''
}
