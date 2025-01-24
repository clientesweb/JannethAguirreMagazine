"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"
import {
  ChevronRight,
  ChevronLeft,
  Star,
  MapPin,
  Home,
  Bath,
  BedDouble,
  Maximize,
  MessageCircle,
  BarChart,
  HardHat,
  Search,
  Globe,
} from "lucide-react"

const properties = [
  {
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3",
    location: "Miami, Estados Unidos",
    address: "123 Ocean Drive",
    price: "$1,200,000",
    rating: 4.9,
    beds: 4,
    baths: 3,
    sqft: 2800,
    type: "Proyecto de Lujo",
  },
  {
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3",
    location: "Samborondón, Ecuador",
    address: "Villa 245, La Península",
    price: "$450,000",
    rating: 4.8,
    beds: 3,
    baths: 2.5,
    sqft: 2200,
    type: "Villa Exclusiva",
  },
  {
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3",
    location: "Ciudad de Panamá, Panamá",
    address: "Torre Ocean View, Piso 15",
    price: "$650,000",
    rating: 4.7,
    beds: 2,
    baths: 2,
    sqft: 1800,
    type: "Apartamento Premium",
  },
]

const features = [
  {
    title: "Propiedades y Proyectos Exclusivos",
    description: "Lo mejor de Ecuador, Panamá y Estados Unidos",
    icon: Globe,
  },
  {
    title: "Avances de Obras",
    description: "Actualizaciones constantes de primera calidad",
    icon: HardHat,
  },
  {
    title: "Chat con Agentes",
    description: "Comunicación directa con expertos inmobiliarios",
    icon: MessageCircle,
  },
  {
    title: "Análisis de Mercado Interactivo",
    description: "Informes descargables y personalizables",
    icon: BarChart,
  },
]

export default function AppMockup() {
  const [currentProperty, setCurrentProperty] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentProperty((prev) => (prev + 1) % properties.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const nextProperty = () => {
    if (!isAnimating) {
      setIsAnimating(true)
      setCurrentProperty((prev) => (prev + 1) % properties.length)
      setTimeout(() => setIsAnimating(false), 500)
    }
  }

  const prevProperty = () => {
    if (!isAnimating) {
      setIsAnimating(true)
      setCurrentProperty((prev) => (prev - 1 + properties.length) % properties.length)
      setTimeout(() => setIsAnimating(false), 500)
    }
  }

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-gray-900 to-black overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
          {/* App Info Section */}
          <motion.div
            className="lg:w-1/2 text-center lg:text-left"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-white leading-tight">
              Gestiona Inversiones Inmobiliarias de Clase Mundial
            </h2>
            <p className="text-xl mb-12 text-gray-300 leading-relaxed">
              Accede a propiedades exclusivas, análisis de mercado y gestión de ventas en Ecuador, Panamá y Estados
              Unidos.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  className="flex items-start gap-4"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 }}
                >
                  <div className="bg-gradient-to-br from-red-500 to-red-600 p-3 rounded-2xl">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-white font-semibold mb-2">{feature.title}</h3>
                    <p className="text-gray-400 text-sm">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Download Buttons */}
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <Button
                className="bg-white hover:bg-gray-100 text-black px-6 py-3 rounded-xl text-lg transition-transform hover:scale-105 flex items-center justify-center h-16"
                onClick={() => window.open("https://play.google.com/store", "_blank")}
              >
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/en_badge_web_generic-CWzgT7mvxJlTZ5qd9sZeLEH6bKLaRm.png"
                  alt="Get it on Google Play"
                  width={135}
                  height={40}
                  className="h-auto"
                />
              </Button>
              <Button
                className="bg-white hover:bg-gray-100 text-black px-6 py-3 rounded-xl text-lg transition-transform hover:scale-105 flex items-center justify-center h-16"
                onClick={() => window.open("https://www.apple.com/app-store/", "_blank")}
              >
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/badge-download-on-the-app-store-Tgd9npUVIdCDtrcMsYVdfJucAj5pQn.svg"
                  alt="Download on the App Store"
                  width={120}
                  height={40}
                  className="h-auto"
                />
              </Button>
            </div>
          </motion.div>

          {/* Phone Mockup Section */}
          <motion.div
            className="lg:w-1/2 relative"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative mx-auto" style={{ maxWidth: "375px" }}>
              {/* Phone Frame */}
              <div className="relative rounded-[3rem] overflow-hidden bg-black shadow-2xl border-8 border-gray-800">
                {/* Screen Content */}
                <div className="relative bg-white" style={{ aspectRatio: "1/2" }}>
                  {/* Status Bar */}
                  <div className="bg-black text-white p-2 flex justify-between items-center text-xs">
                    <span>9:41</span>
                    <div className="flex items-center gap-2">
                      <Signal className="w-4 h-4" />
                      <Wifi className="w-4 h-4" />
                      <Battery className="w-4 h-4" />
                    </div>
                  </div>

                  {/* App Content */}
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentProperty}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5 }}
                      className="relative"
                    >
                      {/* Property Image */}
                      <div className="relative h-72">
                        <Image
                          src={properties[currentProperty].image || "/placeholder.svg"}
                          alt={`Propiedad en ${properties[currentProperty].location}`}
                          layout="fill"
                          objectFit="cover"
                          className="brightness-90"
                        />
                        {/* Image Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/60" />

                        {/* Property Type Badge */}
                        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                          <p className="text-sm font-medium text-gray-900">{properties[currentProperty].type}</p>
                        </div>

                        {/* Navigation Dots */}
                        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                          {properties.map((_, index) => (
                            <div
                              key={index}
                              className={`w-2 h-2 rounded-full ${
                                index === currentProperty ? "bg-white" : "bg-white/50"
                              }`}
                            />
                          ))}
                        </div>
                      </div>

                      {/* Property Details */}
                      <div className="p-4">
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <h3 className="text-xl font-bold text-gray-900 mb-1">
                              {properties[currentProperty].price}
                            </h3>
                            <div className="flex items-center text-gray-600 text-sm">
                              <MapPin className="w-4 h-4 mr-1" />
                              {properties[currentProperty].address}
                            </div>
                          </div>
                          <div className="flex items-center bg-red-50 px-2 py-1 rounded-lg">
                            <Star className="w-4 h-4 text-red-500 mr-1" />
                            <span className="text-sm font-medium text-red-600">
                              {properties[currentProperty].rating}
                            </span>
                          </div>
                        </div>

                        {/* Property Features */}
                        <div className="grid grid-cols-3 gap-4 mb-4">
                          <div className="flex items-center gap-2">
                            <BedDouble className="w-5 h-5 text-gray-600" />
                            <span className="text-sm text-gray-600">{properties[currentProperty].beds} hab</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Bath className="w-5 h-5 text-gray-600" />
                            <span className="text-sm text-gray-600">{properties[currentProperty].baths} baños</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Maximize className="w-5 h-5 text-gray-600" />
                            <span className="text-sm text-gray-600">{properties[currentProperty].sqft} m²</span>
                          </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex gap-3">
                          <Button className="flex-1 bg-red-500 hover:bg-red-600 text-white">Ver Avance de Obra</Button>
                          <Button variant="outline" className="px-4">
                            <MessageCircle className="w-5 h-5" />
                          </Button>
                        </div>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>

              {/* Navigation Buttons */}
              <Button
                variant="outline"
                size="icon"
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 bg-white/10 hover:bg-white/20 text-white rounded-full"
                onClick={prevProperty}
                disabled={isAnimating}
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 bg-white/10 hover:bg-white/20 text-white rounded-full"
                onClick={nextProperty}
                disabled={isAnimating}
              >
                <ChevronRight className="h-6 w-6" />
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// Status Bar Icons
function Signal({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <rect x="1" y="14" width="4" height="6" rx="1" />
      <rect x="7" y="10" width="4" height="10" rx="1" />
      <rect x="13" y="6" width="4" height="14" rx="1" />
      <rect x="19" y="2" width="4" height="18" rx="1" />
    </svg>
  )
}

function Wifi({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 16L12 16C13.1046 16 14 16.8954 14 18V18C14 19.1046 13.1046 20 12 20V20C10.8954 20 10 19.1046 10 18V18C10 16.8954 10.8954 16 12 16Z" />
      <path d="M12 12C14.7614 12 17 14.2386 17 17H7C7 14.2386 9.23858 12 12 12Z" />
      <path d="M12 8C16.4183 8 20 11.5817 20 16H4C4 11.5817 7.58172 8 12 8Z" />
      <path d="M12 4C18.0751 4 23 8.92487 23 15H1C1 8.92487 5.92487 4 12 4Z" />
    </svg>
  )
}

function Battery({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <rect x="2" y="6" width="18" height="12" rx="2" />
      <rect x="20" y="9" width="2" height="6" rx="1" />
    </svg>
  )
}

