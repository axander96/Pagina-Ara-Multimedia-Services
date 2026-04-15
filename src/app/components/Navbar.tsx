'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { urlFor } from '@/lib/sanity'

interface NavbarProps {
  siteConfig: {
    logo?: any
    logoImage?: any
    slogan?: string
  }
  heroCta?: string
}

export default function Navbar({ siteConfig, heroCta }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  
  // Verificar cualquier campo de logo disponible
  const logoData = siteConfig?.logoImage || siteConfig?.logo
  const logoUrl = urlFor(logoData)
  
  console.log('=== NAVBAR LOGO DEBUG ===')
  console.log('siteConfig:', siteConfig)
  console.log('logoImage:', siteConfig?.logoImage)
  console.log('logo:', siteConfig?.logo)
  console.log('logoData usado:', logoData)
  console.log('logoUrl generada:', logoUrl)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '#servicios', label: 'Servicios' },
    { href: '#portafolio', label: 'Portafolio' },
    { href: '#proceso', label: 'Proceso' },
    { href: '#nosotros', label: 'Nosotros' },
  ]

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled ? 'bg-[#003D99]/95 backdrop-blur-md' : 'bg-transparent'
        }`}
      >
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="flex items-center justify-between h-20">
            <a href="#hero" className="flex items-center space-x-2">
              {logoUrl ? (
                <img 
                  src={logoUrl}
                  alt="ARA Multimedia Services"
                  className="h-10 w-auto object-contain"
                />
              ) : (
                <span className="text-3xl font-black text-white">ARA</span>
              )}
            </a>
            
            <div className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-white/90 hover:text-white font-medium transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contacto"
                className="px-6 py-3 bg-gradient-to-r from-[#FF4433] to-[#0066FF] text-white font-semibold rounded-full hover:shadow-lg hover:shadow-red-500/30 transition-all"
              >
                {heroCta || 'Cotizar Proyecto'}
              </a>
            </div>
            
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden text-white text-2xl" aria-label="Menu"
            >
              <i className="fa-solid fa-bars"></i>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-[#003D99] z-50 lg:hidden"
          >
            <div className="p-6">
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="text-white text-2xl absolute top-6 right-6" aria-label="Close menu"
              >
                <i className="fa-solid fa-xmark"></i>
              </button>
              <div className="flex flex-col space-y-8 mt-20">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-white text-2xl font-semibold"
                  >
                    {link.label}
                  </a>
                ))}
                <a
                  href="#contacto"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-[#FF4433] text-2xl font-semibold"
                >
                  Contacto
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
