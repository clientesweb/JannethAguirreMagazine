"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Facebook, Twitter, Linkedin, Share2 } from "lucide-react"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { ARTICLES } from "@/lib/constants"
import { ARTICLES_VARIOS } from "@/lib/articles"
import { notFound } from "next/navigation"
import { useMemo } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"

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
}

export default function ArticleDetail({ params }: { params: { slug: string } }) {
  const article = ARTICLES.find((a) => a.slug === params.slug) || ARTICLES_VARIOS.find((a) => a.slug === params.slug)

  if (!article) {
    notFound()
  }

  const articleUrl = `https://villadeldique.com.ar/articulo/${article.slug}`

  const suggestedArticles = useMemo(() => {
    const allArticles = [...ARTICLES, ...ARTICLES_VARIOS]
    return allArticles.filter((a) => a.slug !== article.slug && a.category === article.category).slice(0, 3)
  }, [article])

  // Función para procesar el contenido y manejar las imágenes inline
  const processContent = (content: string) => {
    const parts = content.split(/(\[IMAGE:\/[^\]]+\])/)
    return parts.map((part, index) => {
      if (part.startsWith("[IMAGE:/")) {
        const imagePath = part.slice(7, -1)
        return (
          <figure key={index} className="my-8">
            <div className="relative h-[400px] w-full rounded-lg overflow-hidden">
              <Image
                src={imagePath || "/placeholder.svg"}
                alt="Imagen del artículo"
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-300 hover:scale-105"
              />
            </div>
            <figcaption className="mt-3 text-center text-sm text-gray-500 italic">
              {/* La descripción se puede agregar como un comentario después de la imagen */}
              {content
                .split("\n")
                .find((line) => line.includes(imagePath) && line.includes("//"))
                ?.split("//")[1]
                ?.trim()}
            </figcaption>
          </figure>
        )
      }
      return part
    })
  }

  return (
    <>
      <Header />
      <article className="min-h-screen bg-gray-50">
        <div className="relative h-[70vh] bg-black">
          <Image
            src={article.image || "/placeholder.svg"}
            alt={article.title}
            layout="fill"
            objectFit="cover"
            className="transition-opacity duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <div className="container mx-auto">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">{article.title}</h1>
                <div className="flex items-center gap-4 text-sm text-white">
                  <span>Por Mercedes Felcaro</span>
                  <span>•</span>
                  <span>5 min de lectura</span>
                </div>
              </motion.div>
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

            {/* Botones de compartir */}
            <div className="sticky top-4 z-10 bg-white/80 backdrop-blur-sm rounded-full shadow-lg p-2 mb-8 flex justify-center gap-2 max-w-fit mx-auto">
              <motion.div
                className="flex gap-2"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <Button
                  onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${articleUrl}`, "_blank")}
                  size="sm"
                  variant="ghost"
                  className="rounded-full w-10 h-10 p-0 hover:bg-[#1877F2]/10 hover:text-[#1877F2] transition-colors"
                >
                  <Facebook className="h-5 w-5" />
                </Button>
                <Button
                  onClick={() => window.open(`https://twitter.com/intent/tweet?url=${articleUrl}`, "_blank")}
                  size="sm"
                  variant="ghost"
                  className="rounded-full w-10 h-10 p-0 hover:bg-[#1DA1F2]/10 hover:text-[#1DA1F2] transition-colors"
                >
                  <Twitter className="h-5 w-5" />
                </Button>
                <Button
                  onClick={() => window.open(`https://www.linkedin.com/shareArticle?url=${articleUrl}`, "_blank")}
                  size="sm"
                  variant="ghost"
                  className="rounded-full w-10 h-10 p-0 hover:bg-[#0A66C2]/10 hover:text-[#0A66C2] transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                </Button>
                <Button
                  onClick={() => {
                    if (navigator.share) {
                      navigator.share({
                        title: article.title,
                        text: article.description,
                        url: articleUrl,
                      })
                    } else {
                      alert("Compartir no está soportado en este navegador")
                    }
                  }}
                  size="sm"
                  variant="ghost"
                  className="rounded-full w-10 h-10 p-0 hover:bg-primary/10 hover:text-primary transition-colors"
                >
                  <Share2 className="h-5 w-5" />
                </Button>
              </motion.div>
            </div>

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
                        <div className="text-gray-600 leading-relaxed">{processContent(paragraph)}</div>
                      )}
                      {index === 4 && article.importantFact && (
                        <blockquote className="border-l-4 border-secondary pl-4 italic my-6 text-gray-700">
                          Dato importante: {article.importantFact}
                        </blockquote>
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                <p>No se ha encontrado contenido detallado para este artículo.</p>
              )}

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
                            className="text-secondary hover:text-secondary/90 font-medium"
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
