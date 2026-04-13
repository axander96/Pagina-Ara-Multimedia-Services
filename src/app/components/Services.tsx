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
              className={`group rounded-2xl p-6 hover:shadow-2xl transition-all cursor-pointer ${
                index === 0
                  ? 'bg-[#003D99]/80 text-white border border-white/10'
                  : 'bg-white/80 text-gray-800 border border-gray-200'
              }`}
            >
              <div className={`w-14 h-14 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <i className={`fas ${service.icon} text-2xl ${index === 0 ? '' : 'text-white'}`}></i>
              </div>
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className={`text-sm mb-4 ${index === 0 ? 'text-white/70' : 'text-gray-600'}`}>
                {service.description}
              </p>
              <div className="overflow-hidden transition-all duration-500 max-h-0 group-hover:max-h-[300px]">
                <ul className={`space-y-2 text-sm ${index === 0 ? 'text-white/80' : 'text-gray-600'}`}>
                  {service.features?.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <i className={`fas fa-check ${index === 0 ? 'text-[#FF4433]' : 'text-[#0066FF]'} mr-2`}></i>
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
