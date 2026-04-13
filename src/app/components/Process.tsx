'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

// Iconos SVG inline
const icons: Record<string, React.ReactNode> = {
  'fa-magnifying-glass': (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
  ),
  'fa-chess-knight': (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  ),
  'fa-paintbrush': (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
    </svg>
  ),
  'fa-rocket': (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
    </svg>
  ),
  'fa-chart-line': (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
    </svg>
  ),
}

// Gradient colors mapping
const gradients: Record<string, string> = {
  'from-ara-blue to-ara-red': 'from-[#0066FF] to-[#FF4433]',
  'from-purple-500 to-pink-500': 'from-purple-500 to-pink-500',
  'from-green-500 to-teal-500': 'from-green-500 to-teal-500',
  'from-yellow-500 to-orange-500': 'from-yellow-500 to-orange-500',
  'from-ara-red to-ara-blue': 'from-[#FF4433] to-[#0066FF]',
}

interface ProcessStep {
  _id: string
  stepNumber: number
  title: string
  description: string
  icon: string
  color: string
}

interface ProcessProps {
  steps: ProcessStep[]
}

export default function Process({ steps }: ProcessProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  })
  
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

  return (
    <section id="proceso" className="py-20 lg:py-32 bg-[#F5F7FA]">
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="text-center mb-16">
          <span className="text-[#FF4433] font-semibold tracking-widest uppercase text-sm">Cómo Trabajamos</span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#003D99] mt-4">
            De la idea al <span className="text-[#0066FF]">crecimiento</span>
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Un proceso probado que garantiza resultados excepcionales en cada proyecto.
          </p>
        </div>

        <div ref={containerRef} className="max-w-4xl mx-auto relative">
          {/* Timeline Line */}
          <div className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-1 bg-gray-300 transform lg:-translate-x-1/2">
            <motion.div 
              className="w-full bg-gradient-to-b from-[#FF4433] to-[#0066FF]"
              style={{ height: lineHeight }}
            />
          </div>

          {/* Steps */}
          {steps?.map((step, index) => {
            const isEven = index % 2 === 0
            const gradientClass = gradients[step.color] || 'from-[#0066FF] to-[#FF4433]'
            const iconSvg = icons[step.icon] || icons['fa-magnifying-glass']
            
            return (
              <motion.div
                key={step._id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative flex items-start mb-12 lg:mb-0 ${index !== steps.length - 1 ? 'lg:h-56' : ''}`}
              >
                {isEven ? (
                  <>
                    <div className="hidden lg:block lg:w-1/2 lg:pr-12 lg:text-right"></div>
                    <div className={`absolute left-8 lg:left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gradient-to-br ${gradientClass} rounded-full flex items-center justify-center text-white z-10 shadow-lg`}>
                      {iconSvg}
                    </div>
                    <div className="ml-24 lg:ml-0 lg:w-1/2 lg:pl-12">
                      <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                        <span className="text-[#FF4433] font-bold">PASO {step.stepNumber}</span>
                        <h3 className="text-xl font-bold text-[#003D99] mt-2">{step.title}</h3>
                        <p className="text-gray-600 mt-2 text-sm">{step.description}</p>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="ml-24 lg:ml-0 lg:w-1/2 lg:pr-12 lg:text-right order-2 lg:order-1">
                      <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                        <span className="text-[#0066FF] font-bold">PASO {step.stepNumber}</span>
                        <h3 className="text-xl font-bold text-[#003D99] mt-2">{step.title}</h3>
                        <p className="text-gray-600 mt-2 text-sm">{step.description}</p>
                      </div>
                    </div>
                    <div className={`absolute left-8 lg:left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gradient-to-br ${gradientClass} rounded-full flex items-center justify-center text-white z-10 shadow-lg`}>
                      {iconSvg}
                    </div>
                    <div className="hidden lg:block lg:w-1/2 lg:pl-12 order-1 lg:order-2"></div>
                  </>
                )}
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
