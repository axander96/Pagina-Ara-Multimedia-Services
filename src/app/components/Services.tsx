'use client'

import { motion } from 'framer-motion'

// Iconos SVG inline para asegurar que se vean
const icons: Record<string, React.ReactNode> = {
  'fa-code': (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>
  ),
  'fa-chart-line': (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
    </svg>
  ),
  'fa-share-nodes': (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
    </svg>
  ),
  'fa-mobile-alt': (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
    </svg>
  ),
  'fa-magnifying-glass': (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
  ),
  'fa-envelope': (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  ),
  'fa-tag': (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
    </svg>
  ),
}

// Gradient colors
const gradients: Record<string, string> = {
  'from-ara-blue to-ara-red': 'from-[#0066FF] to-[#FF4433]',
  'from-ara-red to-orange-500': 'from-[#FF4433] to-orange-500',
  'from-purple-500 to-pink-500': 'from-purple-500 to-pink-500',
  'from-green-500 to-teal-500': 'from-green-500 to-teal-500',
  'from-yellow-500 to-orange-500': 'from-yellow-500 to-orange-500',
  'from-blue-400 to-blue-600': 'from-blue-400 to-blue-600',
  'from-ara-red to-pink-600': 'from-[#FF4433] to-pink-600',
}

interface Service {
  _id: string
  title: string
  description: string
  icon: string
  gradient: string
  features: string[]
}

interface ServicesProps {
  services: Service[]
}

export default function Services({ services }: ServicesProps) {
  return (
    <section id="servicios" className="py-20 lg:py-32 bg-[#F5F7FA]">
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="text-center mb-16">
          <span className="text-[#FF4433] font-semibold tracking-widest uppercase text-sm">Nuestros Servicios</span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#003D99] mt-4">
            Soluciones <span className="text-[#0066FF]">Digitales</span> Completas
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Todo lo que necesitas para triunfar en el mundo digital, en un solo lugar.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services?.map((service, index) => {
            const gradientClass = gradients[service.gradient] || 'from-[#0066FF] to-[#FF4433]'
            const iconSvg = icons[service.icon] || icons['fa-code']
            
            return (
              <motion.div
                key={service._id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative rounded-2xl p-6 cursor-pointer h-[340px] transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 bg-white hover:bg-gradient-to-br hover:from-[#003D99] hover:to-[#0066FF] border border-gray-100"
              >
                {/* Icon - Always visible */}
                <div className={`w-14 h-14 bg-gradient-to-br ${gradientClass} rounded-xl flex items-center justify-center mb-4 shadow-lg text-white group-hover:bg-white/20 group-hover:from-transparent group-hover:to-transparent transition-all duration-500`}>
                  {iconSvg}
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-bold mb-2 text-gray-800 group-hover:text-white transition-colors duration-500">
                  {service.title}
                </h3>
                
                {/* Description */}
                <p className="text-sm mb-4 text-gray-600 group-hover:text-white/90 transition-colors duration-500">
                  {service.description}
                </p>
                
                {/* Features - Show on hover */}
                <ul className="space-y-2 text-sm opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-[200px] transition-all duration-500 overflow-hidden">
                  {service.features?.map((feature, i) => (
                    <li key={i} className="flex items-center text-white/95">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 mr-2 text-[#FF4433]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
