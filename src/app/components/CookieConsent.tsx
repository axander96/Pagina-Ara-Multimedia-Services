'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false)

  useEffect(() => {
    // Verificar si el usuario ya aceptó
    const hasConsent = localStorage.getItem('cookieConsent')
    if (!hasConsent) {
      setShowBanner(true)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'true')
    setShowBanner(false)
  }

  if (!showBanner) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-[#003D99]/95 backdrop-blur-md border-t border-white/20 p-4 shadow-2xl">
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 max-w-6xl mx-auto">
          <div className="text-white/90 text-sm text-center md:text-left">
            <p className="mb-1">
              Utilizamos cookies para mejorar tu experiencia, analizar el tráfico y personalizar contenido. 
              Al continuar navegando, aceptas nuestras{' '}
              <Link 
                href="/terminos" 
                target="_blank"
                className="text-[#FF4433] hover:underline font-medium"
              >
                Términos de Uso
              </Link>{' '}
              y{' '}
              <Link 
                href="/privacidad" 
                target="_blank"
                className="text-[#FF4433] hover:underline font-medium"
              >
                Políticas de Privacidad
              </Link>.
            </p>
          </div>
          
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={handleAccept}
              className="px-6 py-2 bg-gradient-to-r from-[#FF4433] to-[#0066FF] text-white text-sm font-semibold rounded-full hover:shadow-lg hover:shadow-red-500/30 transition-all whitespace-nowrap"
            >
              Aceptar Todo
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
