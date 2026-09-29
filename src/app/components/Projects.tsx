'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

interface ProjectImage {
  asset?: { url?: string }
}

interface Project {
  _id: string
  title: string
  category: string
  description?: string
  projectUrl?: string
  image?: ProjectImage
  gallery?: ProjectImage[]
  metric?: string
  isAraProject?: boolean
}

interface ProjectsProps {
  projects: Project[]
}

export default function Projects({ projects }: ProjectsProps) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)

  const selectedImages = selectedProject
    ? [selectedProject.image, ...(selectedProject.gallery || [])].filter(
        (item): item is ProjectImage => Boolean(item?.asset?.url),
      )
    : []

  useEffect(() => {
    if (!selectedProject || selectedImages.length < 2) return

    const interval = window.setInterval(() => {
      setSelectedImageIndex((currentIndex) => (currentIndex + 1) % selectedImages.length)
    }, 4500)

    return () => window.clearInterval(interval)
  }, [selectedProject, selectedImages.length])

  function openProject(project: Project) {
    setSelectedProject(project)
    setSelectedImageIndex(0)
  }

  function changeSelectedImage(direction: number) {
    setSelectedImageIndex((currentIndex) => {
      if (!selectedImages.length) return 0
      return (currentIndex + direction + selectedImages.length) % selectedImages.length
    })
  }

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
          {projects?.map((project, index) => {
            const imageUrl = project.image?.asset?.url

            return <motion.button
              type="button"
              key={project._id}
              onClick={() => openProject(project)}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-left rounded-2xl overflow-hidden shadow-lg group cursor-pointer transition-transform duration-500 hover:-translate-y-[10px] focus:outline-none focus-visible:ring-4 focus-visible:ring-[#0066FF]/40"
              aria-label={`Ver detalles de ${project.title}`}
            >
              {project.isAraProject ? (
                <div className="relative h-80 bg-gradient-to-br from-[#0066FF] to-[#FF4433] group-hover:scale-105 transition-transform duration-500">
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                    <span className="bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full mb-4">
                      PROYECTO PROPIO
                    </span>
                    <h3 className="text-white text-3xl font-black mb-2">{project.title}</h3>
                    <p className="text-white/90 text-sm mb-6">{project.metric}</p>
                  </div>
                </div>
              ) : (
                <div className="relative h-80 overflow-hidden">
                  {imageUrl ? (
                    <Image
                      src={imageUrl}
                      alt={project.title}
                      fill
                        className="object-contain bg-[#F5F7FA] group-hover:scale-[1.03] transition-transform duration-500"
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
            </motion.button>
          })}
        </div>
      </div>

      {selectedProject && (
        <div
          className="fixed inset-0 z-50 bg-[#001b45]/80 p-4 sm:p-8 flex items-center justify-center"
          role="presentation"
          onClick={() => setSelectedProject(null)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-dialog-title"
            className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white rounded-2xl shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/90 text-[#003D99] text-2xl shadow-md"
              aria-label="Cerrar detalles del proyecto"
            >
              ×
            </button>
            <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
              <div className="bg-[#F5F7FA] p-4 sm:p-6">
                {selectedImages.length > 0 ? (
                  <div className="relative aspect-[4/3] overflow-hidden rounded-xl" onPointerDown={(event) => event.currentTarget.setPointerCapture(event.pointerId)} onPointerUp={(event) => { if (event.clientX - event.currentTarget.getBoundingClientRect().left < event.currentTarget.clientWidth / 2) changeSelectedImage(-1); else changeSelectedImage(1) }}>
                    <Image
                      src={selectedImages[selectedImageIndex].asset?.url || ''}
                      alt={`${selectedProject.title} - imagen ${selectedImageIndex + 1}`}
                      fill
                      className="object-contain bg-[#F5F7FA]"
                    />
                    {selectedImages.length > 1 && (
                      <>
                        <button type="button" onClick={() => changeSelectedImage(-1)} className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 text-[#003D99] text-2xl shadow-md" aria-label="Imagen anterior">‹</button>
                        <button type="button" onClick={() => changeSelectedImage(1)} className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 text-[#003D99] text-2xl shadow-md" aria-label="Imagen siguiente">›</button>
                        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
                          {selectedImages.map((item, index) => (
                            <button key={`${item.asset?.url}-${index}`} type="button" onClick={() => setSelectedImageIndex(index)} className={`w-2.5 h-2.5 rounded-full ${index === selectedImageIndex ? 'bg-[#FF4433]' : 'bg-white/80'}`} aria-label={`Ver imagen ${index + 1}`} />
                          ))}
                        </div>
                      </>
                    )}
                  </div>
                ) : (
                  <div className="aspect-[4/3] rounded-xl bg-gray-200 flex items-center justify-center text-gray-500">
                  <div className="aspect-[4/3] rounded-xl bg-gray-200 flex items-center justify-center text-gray-500">
                    Este proyecto aún no tiene imágenes.
                  </div>
                  </div>
                )}
              </div>
              <div className="p-6 sm:p-8">
                <span className="text-[#FF4433] font-semibold text-sm uppercase">{selectedProject.category}</span>
                <h3 id="project-dialog-title" className="text-3xl sm:text-4xl font-black text-[#003D99] mt-2">
                  {selectedProject.title}
                </h3>
                {selectedProject.metric && <p className="mt-4 font-bold text-[#0066FF]">{selectedProject.metric}</p>}
                <p className="mt-6 text-gray-600 whitespace-pre-line">
                  {selectedProject.description || 'Próximamente añadiremos la descripción de este proyecto.'}
                </p>
                {selectedProject.projectUrl && (
                  <a
                    href={selectedProject.projectUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex mt-8 px-5 py-3 bg-[#0066FF] text-white font-bold rounded-lg hover:bg-[#003D99] transition-colors"
                  >
                    Visitar proyecto
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
