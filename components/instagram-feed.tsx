"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { Instagram } from "lucide-react"

// Reducir a solo 4 posts
const INSTAGRAM_POSTS = ["DFjgpJQueRO", "DFiUpyVu-nd", "DFgiSwiOU9L", "DFdiIPfyn-H"]

declare global {
  interface Window {
    instgrm?: {
      Embeds: {
        process: () => void
      }
    }
  }
}

export default function InstagramFeed() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Load Instagram embed script
    const script = document.createElement("script")
    script.src = "https://www.instagram.com/embed.js"
    script.async = true
    document.body.appendChild(script)

    // Clean up
    return () => {
      document.body.removeChild(script)
    }
  }, [])

  useEffect(() => {
    // Trigger embed rendering when available
    if (window.instgrm) {
      window.instgrm.Embeds.process()
    }
  }, [])

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-b from-black to-gray-900 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold mb-10 sm:mb-14 text-center">
          Síguenos en <span className="text-[#FF0000]">Instagram</span>
        </h2>

        <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {INSTAGRAM_POSTS.map((postId) => (
            <motion.div
              key={postId}
              whileHover={{ y: -5 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg hover:shadow-xl hover:shadow-[#FF0000]/10 transition-all duration-300 h-full group"
            >
              <div className="relative aspect-square">
                <Link href={`https://www.instagram.com/p/${postId}/`} target="_blank" rel="noopener noreferrer">
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10">
                    <Instagram className="h-10 w-10 text-white" />
                  </div>
                  <div className="instagram-embed-container h-full">
                    <blockquote
                      className="instagram-media"
                      data-instgrm-permalink={`https://www.instagram.com/p/${postId}/`}
                      data-instgrm-version="14"
                      style={{
                        background: "#FFF",
                        border: "0",
                        margin: "0",
                        padding: "0",
                        width: "100%",
                        height: "100%",
                      }}
                    ></blockquote>
                  </div>
                </Link>
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

