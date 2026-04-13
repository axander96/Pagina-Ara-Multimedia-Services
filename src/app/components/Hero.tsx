'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

interface HeroProps {
  hero: {
    titleLine1: string
    titleLine2: string
    subtitle: string
    ctaPrimary: string
    ctaSecondary: string
    animatedWords: string[]
  }
  siteConfig: {
    slogan: string
  }
}

export default function Hero({ hero, siteConfig }: HeroProps) {
  // Debug: mostrar datos recibidos
  console.log('Hero data:', hero)
  
  const [currentWord, setCurrentWord] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!hero?.animatedWords?.length) return

    const word = hero.animatedWords[currentWord]
    const speed = isDeleting ? 50 : 100

    const timeout = setTimeout(() => {
      if (isDeleting) {
        setDisplayText(word.substring(0, displayText.length - 1))
        if (displayText.length === 1) {
          setIsDeleting(false)
          setCurrentWord((prev) => (prev + 1) % hero.animatedWords.length)
        }
      } else {
        setDisplayText(word.substring(0, displayText.length + 1))
        if (displayText.length === word.length) {
          setTimeout(() => setIsDeleting(true), 2000)
        }
      }
    }, speed)

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, currentWord, hero?.animatedWords])

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0066FF] via-[#FF4433] to-[#003D99] bg-[length:400%_400%] animate-gradient">
      {/* Particles - only render on client */}
      {mounted && (
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white/50 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 6}s`,
                animationDuration: `${4 + Math.random() * 4}s`,
              }}
            />
          ))}
        </div>
      )}

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 xl:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-white mb-6 leading-tight">
            <span className="block overflow-hidden">
              <span className="inline-block">{hero?.titleLine1}</span>
            </span>
            <span className="block overflow-hidden">
              <span className="inline-block text-[#FF4433]">{hero?.titleLine2}</span>
            </span>
          </h1>
        </motion.div>

        <div className="h-8 sm:h-10 mb-6">
          <p className="text-lg sm:text-2xl text-white/90 font-medium">
            <span>{displayText}</span>
            <span className="animate-pulse">|</span>
          </p>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-white/80 text-base sm:text-lg max-w-2xl mx-auto mb-10 px-4"
        >
          {hero?.subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4"
        >
          <a
            href="#contacto"
            className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-[#FF4433] to-[#0066FF] text-white font-bold rounded-full text-lg hover:shadow-2xl hover:shadow-red-500/40 transition-all transform hover:-translate-y-1"
          >
            {hero?.ctaPrimary}
          </a>
          <a
            href="#portafolio"
            className="w-full sm:w-auto px-8 py-4 border-2 border-white text-white font-bold rounded-full text-lg hover:bg-white hover:text-[#003D99] transition-all transform hover:-translate-y-1"
          >
            {hero?.ctaSecondary}
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="mt-12 text-white/60 text-sm tracking-widest uppercase"
        >
          &ldquo;{siteConfig?.slogan}&rdquo;
        </motion.p>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <i className="fa-solid fa-chevron-down text-white text-2xl"></i>
      </div>

      <style jsx>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          animation: gradient 15s ease infinite;
        }
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
