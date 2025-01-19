'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { motion, useAnimation } from 'framer-motion'

const properties = [
  {
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&h=1080&q=80",
    location: "Guayaquil, Ecuador"
  },
  {
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&h=1080&q=80",
    location: "Miami, Estados Unidos"
  },
  {
    image: "https://images.unsplash.com/photo-1571939228382-b2f2b585ce15?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&h=1080&q=80",
    location: "Ciudad de Panamá, Panamá"
  }
]

export default function AppMockup() {
  const [currentProperty, setCurrentProperty] = useState(0)
  const controls = useAnimation()

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentProperty((prev) => (prev + 1) % properties.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    controls.start({
      opacity: [0, 1],
      y: [50, 0],
      transition: { duration: 0.5 }
    })
  }, [currentProperty, controls])

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
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <Button
                className="bg-black hover:bg-gray-800 text-white px-6 py-3 rounded-full text-lg transition-transform hover:scale-105 flex items-center justify-center"
                onClick={() => window.open('https://play.google.com/store', '_blank')}
              >
                <Image src="/google-play-icon.png" alt="Google Play" width={24} height={24} className="mr-2" />
                <span>Google Play</span>
              </Button>
              <Button
                className="bg-black hover:bg-gray-800 text-white px-6 py-3 rounded-full text-lg transition-transform hover:scale-105 flex items-center justify-center"
                onClick={() => window.open('https://www.apple.com/app-store/', '_blank')}
              >
                <Image src="/app-store-icon.png" alt="App Store" width={24} height={24} className="mr-2" />
                <span>App Store</span>
              </Button>
            </div>
          </motion.div>
          <motion.div 
            className="lg:w-1/2 relative"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative w-full max-w-md mx-auto">
              <Image
                src="/app-mockup.png"
                alt="Janneth Aguirre Bienes Raíces App Mockup"
                width={500}
                height={1000}
                className="w-full h-auto rounded-3xl shadow-2xl"
              />
              <motion.div 
                className="absolute inset-0 rounded-3xl overflow-hidden"
                animate={controls}
              >
                <Image
                  src={properties[currentProperty].image || "/placeholder.svg"}
                  alt={`Propiedad en ${properties[currentProperty].location}`}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-3xl"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                  <p className="text-white text-lg font-semibold">{properties[currentProperty].location}</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

