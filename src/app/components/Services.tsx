'use client'

import { motion } from 'framer-motion'

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
          {services?.map((service, index) => (
            <motion.div
              key={service._id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative rounded-2xl p-6 cursor-pointer perspective-1000"
            >
              {/* Card Inner - Flip effect */}
              <div className="relative w-full h-full transition-all duration-500 transform-style-preserve-3d group-hover:rotate-y-180">
                {/* Front */}
                <div className="bg-white/80 text-gray-800 border border-gray-200 rounded-2xl p-6 backface-hidden group-hover:opacity-0 transition-opacity duration-300">
                  <div className={`w-14 h-14 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center mb-4`}>
                    <i className={`fas ${service.icon} text-2xl text-white`}></i>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-sm mb-4 text-gray-600">
                    {service.description}
                  </p>
                </div>
                
                {/* Back - Blue gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#003D99] to-[#0066FF] text-white border border-white/10 rounded-2xl p-6 backface-hidden rotate-y-180 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center">
                  <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                    <i className={`fas ${service.icon} text-2xl text-white`}></i>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-sm mb-4 text-white/80">
                    {service.description}
                  </p>
                  <ul className="space-y-2 text-sm text-white/90">
                    {service.features?.map((feature, i) => (
                      <li key={i} className="flex items-center">
                        <i className="fas fa-check text-[#FF4433] mr-2"></i>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              {/* Hover fallback for mobile */}
              <div className="lg:hidden">
                <div className={`w-14 h-14 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center mb-4`}>
                  <i className={`fas ${service.icon} text-2xl text-white`}></i>
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-800">{service.title}</h3>
                <p className="text-sm mb-4 text-gray-600">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
