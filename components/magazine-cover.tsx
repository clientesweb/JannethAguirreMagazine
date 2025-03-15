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
    <div className="relative min-h-screen">
      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center">
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

        {/* Overlay con gradiente más sutil */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10" />

        {/* Contenido principal */}
        <div className="relative z-20 container mx-auto px-4 sm:px-6 md:px-8 h-full flex flex-col justify-center">
          <div className="max-w-4xl mx-auto">
            <div className="text-center space-y-6">
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-block"
              >
                <span className="inline-block bg-[#FF0000] px-4 py-1 rounded-full text-white text-sm md:text-base font-medium tracking-wider">
                  DESTACADO
                </span>
              </motion.div>

              {/* Título principal */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-5xl sm:text-6xl md:text-7xl font-bold text-white leading-tight"
              >
                {content.title}
              </motion.h1>

              {/* Línea decorativa */}
              <motion.div
                initial={{ opacity: 0, scaleX: 0 }}
                animate={{ opacity: 1, scaleX: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex items-center justify-center space-x-4"
              >
                <div className="h-1 w-16 bg-[#FF0000]"></div>
                <span className="text-[#FF0000] text-2xl md:text-3xl font-bold">MAGAZINE</span>
                <div className="h-1 w-16 bg-[#FF0000]"></div>
              </motion.div>

              {/* Subtítulo */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-xl sm:text-2xl md:text-3xl font-serif italic text-white max-w-3xl mx-auto"
              >
                {content.subtitle}
              </motion.p>

              {/* Descripción */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="text-lg md:text-xl text-white/90 font-medium"
              >
                {content.description}
              </motion.p>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="mt-8"
              >
                <Link href={content.cta.link}>
                  <Button
                    size="lg"
                    className="bg-[#FF0000] hover:bg-[#FF0000]/90 text-base sm:text-lg px-8 py-6 rounded-full shadow-lg"
                  >
                    {content.cta.text}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </motion.div>
            </div>
          </div>

          {/* Scroll indicator */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:flex flex-col items-center"
          >
            <div className="h-16 w-0.5 bg-white/50"></div>
            <span className="text-sm text-white/80 mt-2 font-medium">DESPLAZA</span>
          </motion.div>
        </div>
      </div>

      {/* Latest Articles Slider Section */}
      <div className="bg-black py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-white text-center">
            Últimos <span className="text-[#FF0000]">Artículos</span>
          </h2>

          <div className="relative">
            {/* Slider Container */}
            <div className="overflow-hidden rounded-xl">
              <motion.div
                className="flex transition-all duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {latestArticles.map((article) => (
                  <div key={article.id} className="w-full flex-shrink-0 px-2">
                    <div className="bg-gray-900 rounded-xl overflow-hidden h-full">
                      <div className="relative aspect-video">
                        <Image
                          src={article.image || "/placeholder.svg"}
                          alt={article.title}
                          layout="fill"
                          objectFit="cover"
                          className="transition-transform duration-300 hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                        <div className="absolute bottom-0 left-0 p-6">
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
            <Button
              variant="outline"
              size="icon"
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white border-white/20 rounded-full z-10"
              onClick={prevSlide}
              aria-label="Previous slide"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white border-white/20 rounded-full z-10"
              onClick={nextSlide}
              aria-label="Next slide"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>

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

