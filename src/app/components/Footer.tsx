'use client'

import { urlFor } from '@/lib/sanity'

interface FooterProps {
  siteConfig: {
    logo?: any
    logoImage?: any
    slogan: string
    email: string
    whatsapp?: string
    socialLinks?: {
      instagram?: string
      linkedin?: string
      youtube?: string
    }
  }
}

// URLs por defecto de las redes sociales
const DEFAULT_SOCIAL_URLS = {
  instagram: 'https://www.instagram.com/aramultimediaservices?igsh=MTdiN3k1eTA2N3g2MA==',
  linkedin: 'https://www.linkedin.com/in/alexander-rodriguez-a-1621a5353?utm_source=share_via&utm_content=profile&utm_medium=member_ios',
  youtube: 'https://youtube.com/@aramultimediaservices?si=WXMm7oxnBwke-hHe',
}

export default function Footer({ siteConfig }: FooterProps) {
  const currentYear = new Date().getFullYear()
  
  // Verificar cualquier campo de logo disponible
  let logoUrl = urlFor(siteConfig?.logo) || urlFor(siteConfig?.logoImage)
  
  // Fallback temporal con URL directa si Sanity no funciona
  if (!logoUrl) {
    logoUrl = 'https://cdn.sanity.io/images/ddona00k/production/06fc5021a828e6fb57e1595c1513ce0b4169f14b-899x202.png'
  }
  
  // Usar URLs de Sanity o las por defecto
  const socialLinks = {
    instagram: siteConfig?.socialLinks?.instagram || DEFAULT_SOCIAL_URLS.instagram,
    linkedin: siteConfig?.socialLinks?.linkedin || DEFAULT_SOCIAL_URLS.linkedin,
    youtube: siteConfig?.socialLinks?.youtube || DEFAULT_SOCIAL_URLS.youtube,
  }

  return (
    <footer className="bg-[#003D99] border-t border-white/10 py-12">
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center space-x-2">
            {logoUrl && (
              <img 
                src={logoUrl}
                alt="ARA Multimedia Services"
                className="h-10 w-auto object-contain"
              />
            )}
          </div>
          
          <p className="text-white/60 text-sm">
            &ldquo;{siteConfig?.slogan}&rdquo;
          </p>
          
          <div className="flex items-center space-x-4">
            {socialLinks.instagram && (
              <a 
                href={socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-[#FF4433] transition-colors"
                aria-label="Instagram"
              >
                <i className="fa-brands fa-instagram"></i>
              </a>
            )}
            {socialLinks.linkedin && (
              <a 
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-blue-400 transition-colors"
                aria-label="LinkedIn"
              >
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
            )}
            {socialLinks.youtube && (
              <a 
                href={socialLinks.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-red-600 transition-colors"
                aria-label="YouTube"
              >
                <i className="fa-brands fa-youtube"></i>
              </a>
            )}
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-white/10 text-center">
          <p className="text-white/40 text-sm">
            © {currentYear} ARA Multimedia Services. Todos los derechos reservados.
          </p>
        </div>
      </div>

      {/* WhatsApp Float Button */}
      <a
        href={`https://wa.me/${siteConfig?.whatsapp || '1234567890'}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 left-6 z-50 w-14 h-14 bg-green-500 rounded-full flex items-center justify-center text-white text-2xl shadow-lg hover:bg-green-600 transition-colors animate-bounce lg:hidden"
      >
        <i className="fa-brands fa-whatsapp"></i>
      </a>
    </footer>
  )
}
