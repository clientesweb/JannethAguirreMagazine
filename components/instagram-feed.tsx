"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Instagram } from "lucide-react"

// Nuevos posts de Instagram con sus enlaces
const INSTAGRAM_POSTS = [
  {
    id: "DG8TEIrOk-e",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SaveInsta.to_480666006_3996238790596135_4788328111261012254_n.jpg-NT0ef5hTBf4H6cK6ADb0zeOJi4mQaC.jpeg",
    alt: "Día Internacional de la Mujer - Janneth Aguirre",
    description: "Día Internacional de la Mujer",
  },
  {
    id: "DGl-ZR4usE-",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SaveInsta.to_481838761_18486273904016031_8326661089375421854_n.jpg-MWeo4gW59MBsTgDKWiTEhC1vGgywwR.webp",
    alt: "Mocolí Bay - Exclusividad y Confort",
    description: "Mocolí Bay",
  },
]

export default function InstagramFeed() {
  return (
    <section className="py-16 sm:py-20 bg-gradient-to-b from-black to-gray-900 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold mb-10 sm:mb-14 text-center">
          Síguenos en <span className="text-[#FF0000]">Instagram</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {INSTAGRAM_POSTS.map((post) => (
            <motion.div
              key={post.id}
              whileHover={{ y: -5 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg hover:shadow-xl hover:shadow-[#FF0000]/10 transition-all duration-300 h-full group"
            >
              <Link
                href={`https://www.instagram.com/p/${post.id}/`}
                target="_blank"
                rel="noopener noreferrer"
                className="block relative aspect-square"
              >
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10">
                  <Instagram className="h-10 w-10 text-white" />
                </div>
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.alt}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-500 group-hover:scale-105"
                />
              </Link>
              <div className="p-4 text-center">
                <p className="text-white font-medium">{post.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="https://www.instagram.com/janneth_aguirrem/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-white bg-[#FF0000] hover:bg-[#FF0000]/90 px-6 py-3 rounded-full text-base font-medium transition-colors duration-300"
          >
            Ver más en Instagram
            <Instagram className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}

