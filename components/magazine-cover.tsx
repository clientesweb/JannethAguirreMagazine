"use client"

import { motion } from "framer-motion"
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"
import { ARTICLES_VARIOS } from "@/lib/articles"

const content = {
  title: "JANNETH AGUIRRE",
  subtitle: "Embajadora de Ecuador en InmoPerú Mujer 2025",
  description: "3° Edición del Congreso Internacional de Mujeres",
  cta: {
    text: "Conocer Más",
    link: "/inmoperu-mujer-2025",
  },
}

export default function MagazineCover() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const latestArticles = ARTICLES_VARIOS.slice().reverse().slice(0, 5)

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % latestArticles.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [latestArticles.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % latestArticles.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + latestArticles.length) % latestArticles.length)
  }

  return (
    <div className="relative min-h-screen flex flex-col">
      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Imagen de fondo */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SaveInsta.to_480784821_644309241429332_3061077996049828209_n.jpg-9YMk7uP3c3ygLnzlm8OXgpGbTV4SB8.jpeg"
            alt="Janneth Aguirre Embajadora de Ecuador InmoPerú Mujer 2025"
            width={1920}
            height={1080}
            priority
            className="object-cover w-full h-full"
          />
        </div>

        {/* Overlay para mejorar legibilidad */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent z-10" />

        {/* Contenido reorganizado */}
        <div className="relative z-20 text-white w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 h-full flex flex-col justify-end pb-16 sm:pb-20 md:pb-24">
          {/* Contenedor con fondo semi-transparente para mejorar legibilidad */}
          <div className="bg-black/40 backdrop-blur-sm p-4 sm:p-6 md:p-8 rounded-xl max-w-4xl mx-auto w-full">
            <div className="grid grid-cols-1 gap-6 md:gap-8">
              {/* Título y descripción */}
              <div className="text-center space-y-4">
                <div className="inline-block bg-[#FF0000] px-4 py-1 mb-2 rounded-full">
                  <span className="text-sm md:text-base font-medium tracking-wider">DESTACADO</span>
                </div>

                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-shadow-xl">
                  {content.title}
                </h1>

                <div className="flex items-center justify-center space-x-3 mt-2">
                  <div className="h-1 w-12 bg-[#FF0000]"></div>
                  <span className="text-[#FF0000] text-2xl md:text-3xl font-bold text-shadow-lg">MAGAZINE</span>
                  <div className="h-1 w-12 bg-[#FF0000]"></div>
                </div>

                <p className="text-xl sm:text-2xl md:text-3xl font-serif italic leading-tight text-shadow-lg max-w-3xl mx-auto mt-4">
                  {content.subtitle}
                </p>

                <p className="text-lg md:text-xl text-white mt-2 font-medium text-shadow-md">{content.description}</p>

                <div className="mt-6 sm:mt-8">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }} className="inline-block">
                    <Link href={content.cta.link}>
                      <Button
                        size="lg"
                        className="bg-[#FF0000] hover:bg-[#FF0000]/90 text-base sm:text-lg px-8 py-6 rounded-full shadow-2xl shadow-black/50 border-2 border-[#FF0000]/30"
                      >
                        {content.cta.text}
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                    </Link>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>

          {/* Indicador de scroll */}
          <div className="hidden md:block absolute bottom-8 left-1/2 transform -translate-x-1/2">
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
              className="flex flex-col items-center"
            >
              <div className="h-16 w-0.5 bg-white/50"></div>
              <span className="text-sm text-white/80 mt-2 font-medium">DESPLAZA</span>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Latest Articles Slider Section */}
      <div className="relative bg-black py-12 md:py-16 z-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white text-center">
            Últimos <span className="text-[#FF0000]">Artículos</span>
          </h2>

          <div className="relative">
            {/* Slider Container */}
            <div className="overflow-hidden">
              <motion.div
                className="flex transition-all duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {latestArticles.map((article) => (
                  <div key={article.id} className="w-full flex-shrink-0 px-2">
                    <div className="bg-gray-900 rounded-lg overflow-hidden shadow-xl h-full">
                      <div className="relative aspect-[16/9]">
                        <Image
                          src={article.image || "/placeholder.svg"}
                          alt={article.title}
                          layout="fill"
                          objectFit="cover"
                          className="transition-transform duration-300 hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                        <div className="absolute bottom-0 left-0 p-4 md:p-6">
                          <span className="inline-block bg-[#FF0000] text-white text-xs px-2 py-1 rounded mb-2">
                            {article.category}
                          </span>
                          <h3 className="text-xl md:text-2xl font-bold text-white mb-2 line-clamp-2">
                            {article.title}
                          </h3>
                          <p className="text-gray-300 text-sm md:text-base mb-4 line-clamp-2">{article.description}</p>
                          <Link
                            href={`/articulo/${article.slug}`}
                            className="inline-flex items-center text-white bg-[#FF0000] hover:bg-[#FF0000]/90 px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300"
                          >
                            Leer Artículo
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:translate-x-0 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full z-10"
              aria-label="Previous slide"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-0 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full z-10"
              aria-label="Next slide"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-6 space-x-2">
              {latestArticles.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                    currentSlide === index ? "bg-[#FF0000]" : "bg-gray-500"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

