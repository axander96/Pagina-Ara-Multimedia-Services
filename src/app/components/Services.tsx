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
              className="group relative rounded-2xl p-6 cursor-pointer h-[320px] transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
              style={{
                background: 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(245,247,250,0.9) 100%)',
                border: '1px solid rgba(0,102,255,0.1)'
              }}
            >
              {/* Default State */}
              <div className="absolute inset-0 rounded-2xl p-6 transition-opacity duration-500 group-hover:opacity-0">
                <div className={`w-14 h-14 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center mb-4 shadow-lg`}>
                  <i className={`fa-solid ${service.icon} text-2xl text-white`}></i>
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-800">{service.title}</h3>
                <p className="text-sm mb-4 text-gray-600">
                  {service.description}
                </p>
              </div>
              
              {/* Hover State - Blue gradient */}
              <div 
                className="absolute inset-0 rounded-2xl p-6 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-center"
                style={{
                  background: 'linear-gradient(135deg, #003D99 0%, #0066FF 100%)'
                }}
              >
                <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center mb-4 backdrop-blur-sm">
                  <i className={`fa-solid ${service.icon} text-2xl text-white`}></i>
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">{service.title}</h3>
                <p className="text-sm mb-4 text-white/90">
                  {service.description}
                </p>
                <ul className="space-y-2 text-sm">
                  {service.features?.map((feature, i) => (
                    <li key={i} className="flex items-center text-white/95">
                      <i className="fa-solid fa-check text-[#FF4433] mr-2"></i>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
