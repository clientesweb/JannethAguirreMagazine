"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ChevronLeft, ChevronRight, Facebook, Twitter, Linkedin, Share2, Phone } from "lucide-react"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { ARTICLES } from "@/lib/constants"
import { ARTICLES_VARIOS } from "@/lib/articles"
import { notFound } from "next/navigation"
import { useState, useMemo } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent } from "@/components/ui/card"

interface Article {
  id: number
  slug: string
  title: string
  description: string
  image: string
  fullContent: string
  category: string
  subtitle?: string
  importantFact?: string
  images?: string[]
  illustrativeImage?: string
}

export default function ArticleDetail({ params }: { params: { slug: string } }) {
  const article = ARTICLES.find((a) => a.slug === params.slug) || ARTICLES_VARIOS.find((a) => a.slug === params.slug)

  if (!article) {
    notFound()
  }

  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const images = article.images || [
    article.image,
    "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&q=80&w=1600",
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=1600",
    "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1600",
  ]

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
  }

  const shareUrl = typeof window !== "undefined" ? window.location.href : ""

  const router = useRouter()

  const redirectToExplore = () => {
    if (article.category === "analisis-de-mercado") {
      router.push("https://jannethaguirre.com/analisis-de-mercado.html")
    } else {
      router.push("https://jannethaguirre.com/")
    }
  }

  const suggestedArticles = useMemo(() => {
    const allArticles = [...ARTICLES, ...ARTICLES_VARIOS]
    return allArticles.filter((a) => a.slug !== article.slug && a.category === article.category).slice(0, 3)
  }, [article])

  return (
    <>
      <Header />
      <article className="min-h-screen bg-gray-50">
        <div className="relative h-[70vh] bg-black">
          <Image
            src={images[currentImageIndex] || "/placeholder.svg"}
            alt={article.title}
            layout="fill"
            objectFit="cover"
            className="transition-opacity duration-500"
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 flex items-center justify-between p-4">
            <Button variant="ghost" size="icon" onClick={prevImage} className="text-white hover:bg-white/20">
              <ChevronLeft className="h-8 w-8" />
            </Button>
            <Button variant="ghost" size="icon" onClick={nextImage} className="text-white hover:bg-white/20">
              <ChevronRight className="h-8 w-8" />
            </Button>
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black to-transparent">
            <div className="container mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">{article.title}</h1>
              <div className="flex items-center gap-4 text-sm text-white">
                <span>Por Janneth Aguirre</span>
                <span>•</span>
                <span>5 min de lectura</span>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="max-w-3xl mx-auto">
            <Link href="/">
              <Button variant="outline" className="mb-6">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Volver
              </Button>
            </Link>

            <div className="prose prose-lg max-w-none">
              {article.subtitle && <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-800">{article.subtitle}</h2>}
              {article.fullContent ? (
                <div className="space-y-6">
                  {article.fullContent.split("\n\n").map((paragraph, index) => (
                    <div key={index}>
                      {paragraph.startsWith("##") ? (
                        <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-800">
                          {paragraph.replace("##", "").trim()}
                        </h2>
                      ) : paragraph.startsWith("#") ? (
                        <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-700">
                          {paragraph.replace("#", "").trim()}
                        </h3>
                      ) : (
                        <p className="text-gray-600 leading-relaxed">
                          {paragraph.split("**").map((part, i) =>
                            i % 2 === 0 ? (
                              part
                            ) : (
                              <strong key={i} className="font-bold">
                                {part}
                              </strong>
                            ),
                          )}
                        </p>
                      )}
                      {index === 2 && (
                        <div className="my-8">
                          <Image
                            src={article.illustrativeImage || images[1]}
                            alt="Imagen ilustrativa relacionada con el artículo"
                            width={800}
                            height={400}
                            className="rounded-lg shadow-lg"
                          />
                          <p className="text-sm text-gray-500 mt-2 text-center">
                            Imagen ilustrativa del mercado inmobiliario actual
                          </p>
                        </div>
                      )}
                      {index === 4 && article.importantFact && (
                        <blockquote className="border-l-4 border-[#FF0000] pl-4 italic my-6 text-gray-700">
                          Dato importante: {article.importantFact}
                        </blockquote>
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                <p>No se ha encontrado contenido detallado para este artículo.</p>
              )}

              <div className="flex flex-wrap justify-center gap-4 my-8">
                <Button
                  onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`, "_blank")}
                  className="bg-[#1877F2] hover:bg-[#1877F2]/90 text-white"
                >
                  <Facebook className="mr-2 h-5 w-5" />
                  Compartir
                </Button>
                <Button
                  onClick={() => window.open(`https://twitter.com/intent/tweet?url=${shareUrl}`, "_blank")}
                  className="bg-[#1DA1F2] hover:bg-[#1DA1F2]/90 text-white"
                >
                  <Twitter className="mr-2 h-5 w-5" />
                  Tuitear
                </Button>
                <Button
                  onClick={() => window.open(`https://www.linkedin.com/shareArticle?url=${shareUrl}`, "_blank")}
                  className="bg-[#0A66C2] hover:bg-[#0A66C2]/90 text-white"
                >
                  <Linkedin className="mr-2 h-5 w-5" />
                  Compartir
                </Button>
                <Button
                  onClick={() =>
                    window.open(
                      `https://api.whatsapp.com/send?text=${encodeURIComponent(`¡Mira este artículo interesante! ${shareUrl}`)}`,
                      "_blank",
                    )
                  }
                  className="bg-[#25D366] hover:bg-[#25D366]/90 text-white"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  WhatsApp
                </Button>
                <Button
                  onClick={() => {
                    if (navigator.share) {
                      navigator.share({
                        title: article.title,
                        text: article.description,
                        url: shareUrl,
                      })
                    } else {
                      alert("Compartir no está soportado en este navegador")
                    }
                  }}
                  className="bg-gray-800 hover:bg-gray-700 text-white"
                >
                  <Share2 className="mr-2 h-5 w-5" />
                  Compartir
                </Button>
              </div>

              <Button
                onClick={redirectToExplore}
                className="bg-[#FF0000] hover:bg-[#FF0000]/90 w-full text-lg mt-8 text-white"
              >
                {article.category === "analisis-de-mercado"
                  ? "Ver Análisis Interactivo"
                  : "Explora el mercado inmobiliario"}
              </Button>

              {suggestedArticles.length > 0 && (
                <div className="mt-12">
                  <h2 className="text-2xl font-bold mb-6">Artículos relacionados</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {suggestedArticles.map((suggestedArticle) => (
                      <Card
                        key={suggestedArticle.id}
                        className="overflow-hidden hover:shadow-lg transition-shadow duration-300"
                      >
                        <Image
                          src={suggestedArticle.image || "/placeholder.svg"}
                          alt={suggestedArticle.title}
                          width={400}
                          height={200}
                          className="w-full h-48 object-cover"
                        />
                        <CardContent className="p-4">
                          <h3 className="font-bold text-lg mb-2">{suggestedArticle.title}</h3>
                          <p className="text-sm text-gray-600 mb-4">{suggestedArticle.description}</p>
                          <Link
                            href={`/articulo/${suggestedArticle.slug}`}
                            className="text-[#FF0000] hover:text-[#FF0000]/90 font-medium"
                          >
                            Leer más →
                          </Link>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </article>
      <Footer />
    </>
  )
}

