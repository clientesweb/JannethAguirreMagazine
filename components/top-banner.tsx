'use client'

import { useState, useEffect } from 'react'
import { ArrowRight } from 'lucide-react'

const announcements = [
  "Edición Especial 2025: El Futuro del Mercado Inmobiliario en Ecuador, Panamá y Estados Unidos",
  "Descubre las Últimas Tendencias en Bienes Raíces Internacionales",
  "Análisis Exclusivo: Oportunidades de Inversión en Tres Países",
]

export default function TopBanner() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % announcements.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="bg-[#FF0000] text-white py-3">
      <div className="container mx-auto text-center flex items-center justify-center">
        <ArrowRight className="mr-2 h-4 w-4" />
        <p className="text-sm font-medium animate-fade-in">
          {announcements[currentIndex]}
        </p>
      </div>
    </div>
  )
}

