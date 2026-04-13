'use client'

import { useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'

interface AboutProps {
  about: {
    title: string
    description: string
    image?: {
      asset: {
        _ref: string
      }
    }
    stats: {
      projects: number
      years: number
      satisfaction: number
    }
    features: {
      title: string
      description: string
    }[]
  }
}

function Counter({ target, suffix = '' }: { target: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true })
  
  useEffect(() => {
    if (isInView && ref.current) {
      let start = 0
      const end = target
      const duration = 2000
      const increment = end / (duration / 16)
      
      const timer = setInterval(() => {
        start += increment
        if (start >= end) {
          ref.current!.textContent = end.toString()
          clearInterval(timer)
        } else {
          ref.current!.textContent = Math.floor(start).toString()
        }
      }, 16)
      
      return () => clearInterval(timer)
    }
  }, [isInView, target])

  return <span ref={ref}>0</span>
}

export default function About({ about }: AboutProps) {
  if (!about) return null

  return (
    <section id="nosotros" className="py-20 lg:py-32 bg-white overflow-hidden">
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <span className="text-[#0066FF] font-semibold tracking-widest uppercase text-sm">Quiénes Somos</span>
            <h2 className="text-4xl sm:text-5xl font-black text-[#003D99] mt-4 mb-6">
              No creamos solo <span className="text-[#FF4433]">páginas web</span>, creamos <span className="text-[#0066FF]">máquinas de ventas</span> digitales
            </h2>
            <p className="text-gray-600 text-lg mb-6">{about.description}</p>
            
            <div className="grid grid-cols-2 gap-4 mt-8">
              {about.features?.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className={`w-6 h-6 ${index % 2 === 0 ? 'bg-[#FF4433]' : 'bg-[#0066FF]'} rounded-full flex items-center justify-center flex-shrink-0 mt-1`}>
                    <i className="fa-solid fa-check text-white text-xs"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#003D99]">{feature.title}</h4>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-full h-full bg-gradient-to-br from-[#0066FF] to-[#FF4433] rounded-3xl"></div>
              {about.image ? (
                <Image
                  src={`https://cdn.sanity.io/images/${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}/${process.env.NEXT_PUBLIC_SANITY_DATASET}/${about.image.asset._ref.replace('image-', '').replace('-jpg', '.jpg').replace('-png', '.png')}`}
                  alt="Equipo ARA"
                  width={800}
                  height={600}
                  className="relative rounded-3xl shadow-2xl w-full object-cover"
                />
              ) : (
                <div className="relative rounded-3xl shadow-2xl w-full h-[400px] bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-400">Imagen del equipo</span>
                </div>
              )}
              
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-6 hidden sm:block">
                <div className="flex items-center space-x-4">
                  <div className="text-center">
                    <span className="text-3xl font-black text-[#FF4433]">
                      <Counter target={about.stats?.projects || 50} />
                    </span>
                    <span className="text-[#FF4433] text-2xl font-bold">+</span>
                    <p className="text-xs text-gray-600">Proyectos</p>
                  </div>
                  <div className="w-px h-12 bg-gray-200"></div>
                  <div className="text-center">
                    <span className="text-3xl font-black text-[#0066FF]">
                      <Counter target={about.stats?.years || 5} />
                    </span>
                    <span className="text-[#0066FF] text-2xl font-bold">+</span>
                    <p className="text-xs text-gray-600">Años Exp.</p>
                  </div>
                  <div className="w-px h-12 bg-gray-200"></div>
                  <div className="text-center">
                    <span className="text-3xl font-black text-[#FF4433]">
                      <Counter target={about.stats?.satisfaction || 98} />
                    </span>
                    <span className="text-[#FF4433] text-2xl font-bold">%</span>
                    <p className="text-xs text-gray-600">Satisfacción</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
