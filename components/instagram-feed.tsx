"use client"

import { useRef } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Instagram } from "lucide-react"

// Reducir a solo 4 posts
const INSTAGRAM_POSTS = ["DFjgpJQueRO", "DFiUpyVu-nd", "DFgiSwiOU9L", "DFdiIPfyn-H"]

// Imágenes de respaldo en caso de que la carga de Instagram falle
const FALLBACK_IMAGES = ["/instagram-1.jpg", "/instagram-2.jpg", "/instagram-3.jpg", "/instagram-4.jpg"]

export default function InstagramFeed() {
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-b from-black to-gray-900 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold mb-10 sm:mb-14 text-center">
          Síguenos en <span className="text-[#FF0000]">Instagram</span>
        </h2>

        <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {INSTAGRAM_POSTS.map((postId, index) => (
            <motion.div
              key={postId}
              whileHover={{ y: -5 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg hover:shadow-xl hover:shadow-[#FF0000]/10 transition-all duration-300 h-full group"
            >
              <Link
                href={`https://www.instagram.com/p/${postId}/`}
                target="_blank"
                rel="noopener noreferrer"
                className="block relative aspect-square"
              >
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10">
                  <Instagram className="h-10 w-10 text-white" />
                </div>
                <Image
                  src={FALLBACK_IMAGES[index] || `/placeholder.svg?height=500&width=500`}
                  alt={`Instagram post ${index + 1}`}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-500 group-hover:scale-105"
                />
              </Link>
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

