'use client'

import { urlFor } from '@/lib/sanity'

interface FooterProps {
  siteConfig: {
    logoText?: string
    logoImage?: any
    slogan: string
    email: string
  }
}

export default function Footer({ siteConfig }: FooterProps) {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#003D99] border-t border-white/10 py-12">
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center space-x-2">
            {siteConfig?.logoImage ? (
              <img 
                src={urlFor(siteConfig.logoImage)} 
                alt="ARA Multimedia Services"
                className="h-10 w-auto object-contain"
              />
            ) : (
              <>
                <span className="text-3xl font-black text-white">{siteConfig?.logoText || 'ARA'}</span>
                <span className="text-xs text-white/60">MULTIMEDIA<br/>SERVICES</span>
              </>
            )}
          </div>
          
          <p className="text-white/60 text-sm">
            &ldquo;{siteConfig?.slogan}&rdquo;
          </p>
          
          <div className="flex items-center space-x-4">
            <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-[#0066FF] transition-colors">
              <i className="fa-brands fa-facebook-f"></i>
            </a>
            <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-[#FF4433] transition-colors">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-blue-400 transition-colors">
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-white/10 text-center">
          <p className="text-white/40 text-sm">
            © {currentYear} {siteConfig?.logoText || 'ARA'} Multimedia Services. Todos los derechos reservados.
          </p>
        </div>
      </div>

      {/* WhatsApp Float Button */}
      <a
        href="https://wa.me/1234567890"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 left-6 z-50 w-14 h-14 bg-green-500 rounded-full flex items-center justify-center text-white text-2xl shadow-lg hover:bg-green-600 transition-colors animate-bounce lg:hidden"
      >
        <i className="fa-brands fa-whatsapp"></i>
      </a>
    </footer>
  )
}
