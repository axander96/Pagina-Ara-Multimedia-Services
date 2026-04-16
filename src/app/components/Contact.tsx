'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

interface ContactProps {
  contact: {
    title: string
    subtitle: string
    emailPlaceholder: string
    messagePlaceholder: string
    buttonText: string
    pulse: {
      projects: string
      growth: string
      response: string
    }
  }
  siteConfig: {
    email: string
    phone: string
    whatsapp: string
  }
}

export default function Contact({ contact, siteConfig }: ContactProps) {
  const [formData, setFormData] = useState({ email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [showPulse, setShowPulse] = useState(true)

  useEffect(() => {
    setMounted(true)
    
    // Ocultar ARA Pulse cuando se llega al footer
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight
      const documentHeight = document.documentElement.scrollHeight
      // Ocultar cuando estamos a menos de 100px del final de la página
      const isNearFooter = documentHeight - scrollPosition < 150
      setShowPulse(!isNearFooter)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aquí puedes agregar la lógica para enviar el formulario
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section id="contacto" className="py-20 lg:py-32 bg-[#003D99] relative overflow-hidden">
      {/* Particles - only render on client */}
      {mounted && (
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white/30 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 6}s`,
                animationDuration: `${4 + Math.random() * 4}s`,
              }}
            />
          ))}
        </div>
      )}
      
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 
              className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6"
              dangerouslySetInnerHTML={{ 
                __html: contact?.title?.replace('EVOLUCIÓN', '<span class="text-[#FF4433]">EVOLUCIÓN</span>') 
              }}
            />
            <p className="text-white/80 text-lg mb-10">{contact?.subtitle}</p>
          </motion.div>
          
          <motion.form 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="max-w-xl mx-auto mb-12"
          >
            <div className="flex flex-col gap-4">
              <input
                type="email"
                placeholder={contact?.emailPlaceholder || "Tu correo electrónico"}
                required
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full px-6 py-4 rounded-full bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-[#FF4433] focus:ring-2 focus:ring-[#FF4433]/50 transition-all"
              />
              <textarea
                placeholder={contact?.messagePlaceholder || "Cuéntanos sobre tu proyecto..."}
                rows={4}
                required
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                className="w-full px-6 py-4 rounded-2xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-[#FF4433] focus:ring-2 focus:ring-[#FF4433]/50 transition-all resize-none"
              />
              <button
                type="submit"
                className="px-8 py-4 bg-gradient-to-r from-[#FF4433] to-[#0066FF] text-white font-bold rounded-full hover:shadow-2xl hover:shadow-red-500/40 transition-all transform hover:-translate-y-1"
              >
                {submitted ? '¡Enviado!' : (contact?.buttonText || "Quiero mi propuesta")}
              </button>
            </div>
          </motion.form>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <a 
              href="https://wa.me/18495650087" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-white/80 hover:text-green-400 transition-colors"
            >
              <i className="fa-brands fa-whatsapp text-2xl"></i>
              <span>WhatsApp Business</span>
            </a>
            <a 
              href="tel:+18495650087"
              className="flex items-center space-x-2 text-white/80 hover:text-[#0066FF] transition-colors"
            >
              <i className="fa-solid fa-phone text-xl"></i>
              <span>+1 849 565-0087</span>
            </a>
            <a 
              href="mailto:Info@aramultimedias.com"
              className="flex items-center space-x-2 text-white/80 hover:text-[#FF4433] transition-colors"
            >
              <i className="fa-solid fa-envelope text-xl"></i>
              <span>Info@aramultimedias.com</span>
            </a>
          </motion.div>
        </div>
        
        {/* ARA Pulse Widget */}
        <div className={`fixed bottom-6 right-6 z-40 hidden lg:block transition-opacity duration-500 ${showPulse ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
          <div className="animate-pulse bg-white rounded-2xl shadow-2xl p-4 max-w-xs">
            <div className="flex items-center space-x-3 mb-3">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="font-bold text-[#003D99] text-sm">ARA Pulse</span>
            </div>
            <div className="space-y-2 text-sm text-gray-600">
              <p>🔥 <span className="font-semibold text-[#FF4433]">{contact?.pulse?.projects}</span> en desarrollo hoy</p>
              <p>📈 <span className="font-semibold text-[#0066FF]">{contact?.pulse?.growth}</span> crecimiento promedio</p>
              <p>⚡ Respuesta en <span className="font-semibold">{contact?.pulse?.response}</span></p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) translateX(0); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(-100vh) translateX(50px); opacity: 0; }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  )
}
