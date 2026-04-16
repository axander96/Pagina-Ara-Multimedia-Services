'use client'

import { SITE_CONFIG } from '@/lib/config'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  
  const logoUrl = SITE_CONFIG.logo
  const socialLinks = SITE_CONFIG.social

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
            &ldquo;{SITE_CONFIG.slogan}&rdquo;
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
        href="https://wa.me/18495650087"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 left-6 z-50 w-14 h-14 bg-green-500 rounded-full flex items-center justify-center text-white text-2xl shadow-lg hover:bg-green-600 transition-colors animate-bounce lg:hidden"
      >
        <i className="fa-brands fa-whatsapp"></i>
      </a>
    </footer>
  )
}
