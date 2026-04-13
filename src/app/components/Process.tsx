'use client'

import { useEffect, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

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
            return (
              <motion.div
                key={step._id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative flex items-start mb-12 lg:mb-0 ${index !== steps.length - 1 ? 'lg:h-48' : ''}`}
              >
                {isEven ? (
                  <>
                    <div className="hidden lg:block lg:w-1/2 lg:pr-12 lg:text-right"></div>
                    <div className={`absolute left-8 lg:left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gradient-to-br ${step.color || 'from-ara-blue to-ara-red'} rounded-full flex items-center justify-center text-white font-bold text-xl z-10 shadow-lg`}>
                      <i className={`fas ${step.icon} text-2xl`}></i>
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
                    <div className={`absolute left-8 lg:left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gradient-to-br ${step.color || 'from-ara-blue to-ara-red'} rounded-full flex items-center justify-center text-white font-bold text-xl z-10 shadow-lg`}>
                      <i className={`fas ${step.icon} text-2xl`}></i>
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
