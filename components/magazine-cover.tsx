"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"

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
  const [videoError, setVideoError] = useState(false)

  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      {!videoError ? (
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          onError={() => setVideoError(true)}
        >
          <source src="/hero-video.mp4" type="video/mp4" />
          Tu navegador no soporta el tag de video.
        </video>
      ) : (
        <Image src="/images/fallback-background.jpg" alt="Fondo de portada" layout="fill" objectFit="cover" />
      )}
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/30 z-10" />
      <div className="relative z-20 text-white text-center px-4 max-w-4xl">
        <motion.h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 sm:mb-6 leading-tight animate-fade-in-up">
          {content.title}
          <span className="block text-[#FF0000] animate-pulse text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mt-2">
            MAGAZINE
          </span>
        </motion.h1>
        <motion.p className="text-xl sm:text-2xl md:text-3xl mb-4 sm:mb-6 animate-fade-in-up animation-delay-300 font-serif italic">
          {content.subtitle}
        </motion.p>
        <motion.p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 animate-fade-in-up animation-delay-300">
          {content.description}
        </motion.p>
        <motion.div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-600">
          <Button
            size="lg"
            className="bg-[#FF0000] hover:bg-[#FF0000]/90 text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 rounded-full transition-transform hover:scale-105"
            onClick={() => window.open(content.cta.link, "_blank")}
          >
            {content.cta.text}
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </div>
    </div>
  )
}

