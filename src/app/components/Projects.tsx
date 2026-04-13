'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

interface Project {
  _id: string
  title: string
  category: string
  image?: {
    asset: {
      _ref: string
    }
  }
  metric: string
  isAraProject?: boolean
}

interface ProjectsProps {
  projects: Project[]
}

export default function Projects({ projects }: ProjectsProps) {
  return (
    <section id="portafolio" className="py-20 lg:py-32 bg-white">
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="text-center mb-16">
          <span className="text-[#0066FF] font-semibold tracking-widest uppercase text-sm">Nuestro Trabajo</span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#003D99] mt-4">
            Proyectos que <span className="text-[#FF4433]">brillan</span>
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Cada proyecto es una historia de éxito. Estos son algunos de nuestros favoritos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects?.map((project, index) => (
            <motion.div
              key={project._id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden shadow-lg group cursor-pointer"
            >
              {project.isAraProject ? (
                <div className="relative h-80 bg-gradient-to-br from-[#0066FF] to-[#FF4433] group-hover:scale-105 transition-transform duration-500">
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                    <span className="bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full mb-4">
                      PROYECTO PROPIO
                    </span>
                    <h3 className="text-white text-3xl font-black mb-2">{project.title}</h3>
                    <p className="text-white/90 text-sm mb-6">{project.metric}</p>
                    <button className="px-6 py-3 bg-white text-[#003D99] font-bold rounded-full hover:bg-[#F5F7FA] transition-colors">
                      Ver Demo
                    </button>
                  </div>
                </div>
              ) : (
                <div className="relative h-80 overflow-hidden">
                  {project.image ? (
                    <Image
                      src={`https://cdn.sanity.io/images/${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}/${process.env.NEXT_PUBLIC_SANITY_DATASET}/${project.image.asset._ref.replace('image-', '').replace('-jpg', '.jpg').replace('-png', '.png')}`}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                      <span className="text-gray-400">Sin imagen</span>
                    </div>
                  )}
                  {/* Overlay with text - ALWAYS visible with gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#003D99] via-[#003D99]/70 to-transparent flex flex-col justify-end p-6">
                    <span className="text-[#FF4433] font-semibold text-sm mb-1">{project.category}</span>
                    <h3 className="text-white text-2xl font-bold mb-1">{project.title}</h3>
                    <p className="text-white/80 text-sm">{project.metric}</p>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
