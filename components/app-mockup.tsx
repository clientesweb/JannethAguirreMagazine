'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronRight, ChevronLeft, Star } from 'lucide-react'

const properties = [
  {
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3",
    location: "Miami, Estados Unidos",
    price: "$1,200,000",
    rating: 4.9
  },
  {
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3",
    location: "Guayaquil, Ecuador",
    price: "$450,000",
    rating: 4.8
  },
  {
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3",
    location: "Ciudad de Panamá, Panamá",
    price: "$650,000",
    rating: 4.7
  }
]

export default function AppMockup() {
  const [currentProperty, setCurrentProperty] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentProperty((prev) => (prev + 1) % properties.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const nextProperty = () => {
    setCurrentProperty((prev) => (prev + 1) % properties.length)
  }

  const prevProperty = () => {
    setCurrentProperty((prev) => (prev - 1 + properties.length) % properties.length)
  }

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-r from-gray-900 to-gray-800 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between max-w-6xl mx-auto">
          <motion.div 
            className="lg:w-1/2 mb-12 lg:mb-0 text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-white">Descubre Propiedades de Lujo en Tu Móvil</h2>
            <p className="text-xl mb-8 text-gray-300 max-w-lg mx-auto lg:mx-0">
              Explora exclusivas propiedades en Ecuador, Panamá y Estados Unidos con la app de Janneth Aguirre Bienes Raíces.
            </p>
            <ul className="text-gray-300 mb-8 text-left max-w-md mx-auto lg:mx-0">
              <li className="flex items-center mb-2">
                <ChevronRight className="mr-2 text-[#FF0000]" />
                Búsqueda avanzada de propiedades
              </li>
              <li className="flex items-center mb-2">
                <ChevronRight className="mr-2 text-[#FF0000]" />
                Tours virtuales en 3D
              </li>
              <li className="flex items-center mb-2">
                <ChevronRight className="mr-2 text-[#FF0000]" />
                Notificaciones personalizadas
              </li>
              <li className="flex items-center">
                <ChevronRight className="mr-2 text-[#FF0000]" />
                Asesoría inmobiliaria en tiempo real
              </li>
            </ul>
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <Button
                className="bg-black hover:bg-gray-800 text-white px-6 py-3 rounded-full text-lg transition-transform hover:scale-105 flex items-center justify-center"
                onClick={() => window.open('https://play.google.com/store', '_blank')}
              >
                <Image src="/google-play-badge.png" alt="Google Play" width={135} height={40} />
              </Button>
              <Button
                className="bg-black hover:bg-gray-800 text-white px-6 py-3 rounded-full text-lg transition-transform hover:scale-105 flex items-center justify-center"
                onClick={() => window.open('https://www.apple.com/app-store/', '_blank')}
              >
                <Image src="/app-store-badge.png" alt="App Store" width={120} height={40} />
              </Button>
            </div>
          </motion.div>
          <motion.div 
            className="lg:w-1/2 relative"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative w-full max-w-md mx-auto" style={{ aspectRatio: '1/2' }}>
              <Image
                src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=1000&h=2000"
                alt="Janneth Aguirre Bienes Raíces App Mockup"
                width={500}
                height={1000}
                className="w-full h-auto rounded-3xl shadow-2xl"
              />
              <AnimatePresence mode='wait'>
                <motion.div 
                  key={currentProperty}
                  className="absolute inset-[3%] rounded-2xl overflow-hidden"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="relative w-full h-full">
                    <Image
                      src={properties[currentProperty].image || "/placeholder.svg"}
                      alt={`Propiedad en ${properties[currentProperty].location}`}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-2xl"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                      <p className="text-white text-lg font-semibold">{properties[currentProperty].location}</p>
                      <div className="flex justify-between items-center mt-2">
                        <p className="text-white text-xl font-bold">{properties[currentProperty].price}</p>
                        <div className="flex items-center">
                          <Star className="text-yellow-400 w-5 h-5 mr-1" />
                          <span className="text-white">{properties[currentProperty].rating}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
              <div className="absolute top-1/2 -left-4 -translate-y-1/2">
                <Button
                  className="rounded-full bg-white/20 hover:bg-white/40 text-white"
                  size="icon"
                  onClick={prevProperty}
                >
                  <ChevronLeft className="h-6 w-6" />
                </Button>
              </div>
              <div className="absolute top-1/2 -right-4 -translate-y-1/2">
                <Button
                  className="rounded-full bg-white/20 hover:bg-white/40 text-white"
                  size="icon"
                  onClick={nextProperty}
                >
                  <ChevronRight className="h-6 w-6" />
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

