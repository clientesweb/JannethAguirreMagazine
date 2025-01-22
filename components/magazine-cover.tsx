'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const slides = [
  {
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1920&h=1080",
    title: "JANNETH AGUIRRE",
    subtitle: "Edición Especial 2025: El Futuro del Mercado Inmobiliario",
    description: "Ecuador • Panamá • Estados Unidos",
    cta: {
      text: "Leer Edición Digital",
      link: "#"
    }
  },
  {
    image: "/app-janneth-aguirre.jpg",
    title: "JANNETH AGUIRRE",
    subtitle: "Descubre Propiedades en Tu Móvil",
    description: "Encuentra Tu Hogar Ideal con Nuestra App",
    cta: {
      text: "Descargar App",
      link: "https://jannethaguirre.com/"
    }
  },
  {
    image: "https://images.unsplash.com/photo-1628744448840-55bdb2497bd4?auto=format&fit=crop&q=80&w=1920&h=1080",
    title: "JANNETH AGUIRRE",
    subtitle: "Inspiración Inmobiliaria en Instagram",
    description: "Sigue Nuestro Contenido Exclusivo",
    cta: {
      text: "Ver en Instagram",
      link: "https://www.instagram.com/janneth_aguirrem/"
    }
  }
]

export default function MagazineCover() {
  const [currentImage, setCurrentImage] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      <AnimatePresence initial={false}>
        <motion.div
          key={currentImage}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0"
        >
          <Image
            src={slides[currentImage].image || "/placeholder.svg"}
            alt={`Magazine cover ${currentImage + 1}`}
            layout="fill"
            objectFit="cover"
            quality={100}
            priority
          />
        </motion.div>
      </AnimatePresence>
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50 z-10" />
      <div className="relative z-20 text-white text-center px-4 max-w-4xl">
        <motion.h1 
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 sm:mb-6 leading-tight animate-fade-in-up"
        >
          {slides[currentImage].title}
          <span className="block text-[#FF0000] animate-pulse text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mt-2">MAGAZINE</span>
        </motion.h1>
        <motion.p 
          className="text-xl sm:text-2xl md:text-3xl mb-4 sm:mb-6 animate-fade-in-up animation-delay-300 font-serif italic"
        >
          {slides[currentImage].subtitle}
        </motion.p>
        <motion.p 
          className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 animate-fade-in-up animation-delay-300"
        >
          {slides[currentImage].description}
        </motion.p>
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-600"
        >
          <Button 
            size="lg"
            className="bg-[#FF0000] hover:bg-[#FF0000]/90 text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 rounded-full transition-transform hover:scale-105"
            onClick={() => window.open(slides[currentImage].cta.link, '_blank')}
          >
            {slides[currentImage].cta.text}
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </div>
    </div>
  )
}

