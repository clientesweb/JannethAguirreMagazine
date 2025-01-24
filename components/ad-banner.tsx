"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"

const properties = [
  {
    id: 1,
    title: "Consultorios y Oficinas en Samborondón City Center",
    image: "/samborondon.jpg",
    price: "Reservas desde $1.000",
    location: "Samborondón, Ecuador",
  },
  {
    id: 2,
    title: "Proyecto Parque Histórico",
    image: "/cuenca-parque.jpg",
    price: "Suites desde $75.000",
    location: "Cuenca, Ecuador",
  },
  {
    id: 3,
    title: "Vizcaya II Residencias",
    image: "/vizcaya-residencias.jpg",
    price: "Reserva desde $2.000",
    location: "Km 9.4 vía Samborondón, Ecuador",
  },
]

export default function AdBanner() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % properties.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const nextProperty = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % properties.length)
  }

  const prevProperty = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + properties.length) % properties.length)
  }

  return (
    <div className="relative bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Propiedades Destacadas</h2>
        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {properties.map((property) => (
              <div key={property.id} className="w-full flex-shrink-0">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <div className="relative h-64">
                    <Image
                      src={property.image || "/placeholder.svg"}
                      alt={property.title}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{property.title}</h3>
                    <p className="text-gray-600 mb-4">{property.location}</p>
                    <p className="text-2xl font-bold text-[#FF0000] mb-4">{property.price}</p>
                    {property.id === 3 && <p className="text-sm text-green-600 font-semibold mb-4">Últimas unidades</p>}
                    <div className="flex justify-between">
                      <Link href="https://jannethaguirre.com/" passHref>
                        <Button className="bg-[#FF0000] hover:bg-[#FF0000]/90">Ver Detalles</Button>
                      </Link>
                      <Link href={`https://wa.me/593987167782`} passHref>
                        <Button variant="outline">Contactar Agente</Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Button
          variant="outline"
          size="icon"
          className="absolute left-4 top-1/2 transform -translate-y-1/2"
          onClick={prevProperty}
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="absolute right-4 top-1/2 transform -translate-y-1/2"
          onClick={nextProperty}
        >
          <ChevronRight className="h-6 w-6" />
        </Button>
      </div>
    </div>
  )
}

