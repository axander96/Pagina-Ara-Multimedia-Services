'use client'

import Image from 'next/image'

interface Testimonial {
  _id: string
  name: string
  position: string
  company: string
  image?: {
    asset: {
      _ref: string
    }
  }
  quote: string
  rating: number
}

interface TestimonialsProps {
  testimonials: Testimonial[]
}

export default function Testimonials({ testimonials }: TestimonialsProps) {
  if (!testimonials?.length) return null

  // Duplicar para scroll infinito
  const allTestimonials = [...testimonials, ...testimonials]

  return (
    <section className="py-20 lg:py-32 bg-[#003D99] overflow-hidden">
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 mb-12">
        <div className="text-center">
          <span className="text-[#FF4433] font-semibold tracking-widest uppercase text-sm">Testimonios</span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mt-4">
            Clientes <span className="text-[#0066FF]">satisfechos</span>
          </h2>
        </div>
      </div>
      
      <div className="relative">
        <div className="flex space-x-6 w-max animate-scroll hover:[animation-play-state:paused]">
          {allTestimonials.map((testimonial, index) => (
            <div
              key={`${testimonial._id}-${index}`}
              className="w-96 flex-shrink-0 bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
            >
              <div className="flex items-center mb-4">
                {testimonial.image ? (
                  <Image
                    src={`https://cdn.sanity.io/images/${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}/${process.env.NEXT_PUBLIC_SANITY_DATASET}/${testimonial.image.asset._ref.replace('image-', '').replace('-jpg', '.jpg').replace('-png', '.png')}`}
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                ) : (
                  <div className="w-12 h-12 rounded-full bg-gray-400 mr-4 flex items-center justify-center">
                    <span className="text-white font-bold">{testimonial.name?.charAt(0)}</span>
                  </div>
                )}
                <div>
                  <h4 className="text-white font-bold">{testimonial.name}</h4>
                  <p className="text-white/60 text-sm">{testimonial.position}, {testimonial.company}</p>
                </div>
              </div>
              <p className="text-white/90 text-lg italic">&ldquo;{testimonial.quote}&rdquo;</p>
              <div className="flex text-yellow-400 mt-4">
                {[...Array(testimonial.rating || 5)].map((_, i) => (
                  <i key={i} className="fas fa-star"></i>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
      `}</style>
    </section>
  )
}
