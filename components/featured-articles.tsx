"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { ARTICLES } from "@/lib/constants"
import { motion } from "framer-motion"

export default function FeaturedArticles() {
  const featuredArticles = ARTICLES.slice(0, 5)

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold mb-10 sm:mb-14 text-center">
          Artículos <span className="text-[#FF0000]">Destacados</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Artículo principal */}
          <div className="lg:col-span-2 lg:row-span-2">
            <FeaturedArticleCard article={featuredArticles[0]} isMain={true} />
          </div>

          {/* Artículos secundarios */}
          {featuredArticles.slice(1, 5).map((article, index) => (
            <div key={article.id} className={index === 0 ? "lg:col-span-1" : ""}>
              <FeaturedArticleCard article={article} isMain={false} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function FeaturedArticleCard({ article, isMain }) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg hover:shadow-xl hover:shadow-[#FF0000]/10 transition-all duration-300 h-full group"
    >
      <div className="relative" style={{ height: isMain ? "500px" : "280px" }}>
        <Image
          src={article.image || "/placeholder.svg"}
          alt={article.title}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>

        <div className="absolute top-4 left-4">
          <span className="inline-block bg-[#FF0000] text-white text-xs px-2 py-1 rounded-full">
            {article.category}
          </span>
        </div>

        <div className="absolute bottom-0 left-0 p-6 w-full">
          <h3
            className={`font-bold text-white mb-3 line-clamp-2 group-hover:text-[#FF0000] transition-colors duration-300 ${isMain ? "text-2xl sm:text-3xl" : "text-xl"}`}
          >
            {article.title}
          </h3>

          <p className="text-gray-300 mb-4 line-clamp-2">{article.description}</p>

          <Link
            href={`/articulo/${article.slug}`}
            className="inline-flex items-center text-white bg-[#FF0000] hover:bg-[#FF0000]/90 px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300"
          >
            Leer Artículo
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </motion.div>
  )
}

