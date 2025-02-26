"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"

const content = {
  title: "JANNETH AGUIRRE",
  subtitle: "Edición Especial 2025: El Futuro del Mercado Inmobiliario",
  description: "Ecuador • Panamá • Estados Unidos",
  cta: {
    text: "Leer Edición Digital",
    link: "#",
  },
}

export default function MagazineCover() {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Imagen de fondo */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/hero-image.jpg"
          alt="Janneth Aguirre Magazine Cover"
          width={1920}
          height={1080}
          priority
          className="object-cover w-full h-full"
        />
      </div>

      {/* Gradiente mejorado con más contraste */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/95 via-black/80 to-black/40 z-10" />

      {/* Contenido reorganizado */}
      <div className="relative z-20 text-white w-full max-w-7xl mx-auto px-6 md:px-12 h-full flex flex-col justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Columna izquierda - Título principal */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left space-y-4"
          >
            <div className="inline-block bg-[#FF0000]/90 px-4 py-1 mb-4">
              <span className="text-sm md:text-base font-medium tracking-wider">MAGAZINE EXCLUSIVO</span>
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-none">{content.title}</h1>

            <div className="flex items-center space-x-2 mt-6">
              <div className="h-1 w-12 bg-[#FF0000]"></div>
              <span className="text-[#FF0000] text-3xl md:text-4xl lg:text-5xl font-bold">MAGAZINE</span>
            </div>

            <p className="text-lg md:text-xl text-gray-300 mt-4">{content.description}</p>
          </motion.div>

          {/* Columna derecha - Subtítulo y CTA */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-left md:text-right space-y-8"
          >
            <div className="border-l-4 md:border-l-0 md:border-r-4 border-[#FF0000] pl-6 md:pl-0 md:pr-6">
              <p className="text-2xl sm:text-3xl md:text-4xl font-serif italic leading-tight">{content.subtitle}</p>
            </div>

            <div className="flex md:justify-end mt-8">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                <Button
                  size="lg"
                  className="bg-[#FF0000] hover:bg-[#FF0000]/90 text-base sm:text-lg px-8 py-6 rounded-full shadow-lg shadow-[#FF0000]/20"
                  onClick={() => window.open(content.cta.link, "_blank")}
                >
                  {content.cta.text}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </motion.div>
            </div>

            <div className="hidden md:block absolute bottom-12 right-12">
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
                className="flex flex-col items-center"
              >
                <div className="h-16 w-0.5 bg-white/30"></div>
                <span className="text-sm text-white/70 mt-2">DESPLAZA</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

