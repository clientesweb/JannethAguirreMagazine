"use client"

import { useEffect } from "react"
import Header from "@/components/header"
import MagazineCover from "@/components/magazine-cover"
import FeaturedArticles from "@/components/featured-articles"
import InstagramFeed from "@/components/instagram-feed"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"
import { CATEGORIES, ARTICLES } from "@/lib/constants"
import { ARTICLES_VARIOS } from "@/lib/articles"
import Link from "next/link"
import Image from "next/image"
import AdBanner from "@/components/ad-banner"
import AppMockup from "@/components/app-mockup"
import { ArrowRight } from "lucide-react"

export default function Home() {
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      window.addEventListener("load", () => {
        navigator.serviceWorker.register("/sw.js").then(
          (registration) => {
            console.log("ServiceWorker registration successful with scope: ", registration.scope)
          },
          (err) => {
            console.log("ServiceWorker registration failed: ", err)
          },
        )
      })
    }
  }, [])

  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      <Header />
      <MagazineCover />

      <section className="py-16 sm:py-20 bg-gradient-to-b from-black to-gray-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold mb-10 sm:mb-14 text-center">
            Todos los <span className="text-[#FF0000]">Artículos</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {ARTICLES_VARIOS.slice()
              .reverse()
              .map((article) => (
                <div
                  key={article.id}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden hover:shadow-xl hover:shadow-[#FF0000]/10 transition-all duration-300 hover:translate-y-[-5px] group"
                >
                  <div className="relative h-52 sm:h-56 md:h-64 overflow-hidden">
                    <Image
                      src={article.image || "/placeholder.svg"}
                      alt={article.title}
                      layout="fill"
                      objectFit="cover"
                      className="transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                    <div className="absolute top-4 left-4">
                      <span className="inline-block bg-[#FF0000] text-white text-xs px-2 py-1 rounded-full">
                        {article.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-5 sm:p-6">
                    <h3 className="font-bold text-xl mb-3 line-clamp-2 group-hover:text-[#FF0000] transition-colors duration-300">
                      {article.title}
                    </h3>
                    <p className="text-sm text-gray-300 mb-4 line-clamp-2">{article.description}</p>
                    <Link
                      href={`/articulo/${article.slug}`}
                      className="inline-flex items-center text-white bg-[#FF0000] hover:bg-[#FF0000]/90 px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300"
                    >
                      Leer más
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      <FeaturedArticles />

      <InstagramFeed />

      <section className="py-12 sm:py-16 bg-gradient-to-b from-black to-gray-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 text-center">
            Explora por <span className="text-[#FF0000]">Categoría</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {CATEGORIES.map((category) => (
              <Link key={category.slug} href={`/categoria/${category.slug}`}>
                <div className="relative h-64 rounded-xl overflow-hidden group">
                  <Image
                    src={`https://jannethaguirre.online/${category.slug}.jpg`}
                    alt={category.name}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent group-hover:from-black/90 transition-all duration-300"></div>
                  <div className="absolute bottom-0 left-0 p-6 w-full">
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-[#FF0000] transition-colors duration-300">
                      {category.name}
                    </h3>
                    <div className="w-0 h-1 bg-[#FF0000] transition-all duration-300 group-hover:w-1/3"></div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <AdBanner />

      <section className="py-12 sm:py-16 bg-gradient-to-b from-gray-900 to-black text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 text-center">
            Últimas <span className="text-[#FF0000]">Tendencias</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {ARTICLES.filter((article) => article.category === "decoracion-de-interiores")
              .slice(0, 4)
              .map((article) => (
                <div
                  key={article.id}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden hover:shadow-xl hover:shadow-[#FF0000]/10 transition-all duration-300 hover:translate-y-[-5px] group"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={article.image || "/placeholder.svg"}
                      alt={article.title}
                      layout="fill"
                      objectFit="cover"
                      className="transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  </div>
                  <div className="p-4 sm:p-5">
                    <h3 className="font-bold text-lg mb-2 line-clamp-2 group-hover:text-[#FF0000] transition-colors duration-300">
                      {article.title}
                    </h3>
                    <p className="text-xs text-gray-300 mb-3 line-clamp-2">{article.description}</p>
                    <Link
                      href={`/articulo/${article.slug}`}
                      className="text-[#FF0000] hover:text-white font-medium text-sm flex items-center"
                    >
                      Leer más
                      <ArrowRight className="ml-1 h-3 w-3" />
                    </Link>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-gradient-to-b from-black to-gray-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 text-center">
            Análisis de <span className="text-[#FF0000]">Mercado</span>
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {ARTICLES.filter((article) => article.category === "analisis-de-mercado")
              .slice(0, 2)
              .map((article) => (
                <div
                  key={article.id}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden hover:shadow-xl hover:shadow-[#FF0000]/10 transition-all duration-300 group"
                >
                  <div className="md:flex h-full">
                    <div className="md:w-2/5 relative">
                      <div className="relative h-48 md:h-full">
                        <Image
                          src={article.image || "/placeholder.svg"}
                          alt={article.title}
                          layout="fill"
                          objectFit="cover"
                          className="transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent md:block hidden"></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent md:hidden"></div>
                      </div>
                    </div>
                    <div className="md:w-3/5 p-6 flex flex-col justify-between">
                      <div>
                        <h3 className="font-bold text-xl sm:text-2xl mb-4 group-hover:text-[#FF0000] transition-colors duration-300">
                          {article.title}
                        </h3>
                        <p className="text-gray-300 mb-4 text-sm">{article.description}</p>
                      </div>
                      <Link
                        href={`/articulo/${article.slug}`}
                        className="inline-flex items-center text-white bg-[#FF0000] hover:bg-[#FF0000]/90 px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 self-start"
                      >
                        Leer Análisis Completo
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      <AppMockup />

      <Footer />
      <WhatsAppButton />
    </main>
  )
}

