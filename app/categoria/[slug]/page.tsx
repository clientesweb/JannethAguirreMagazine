import { notFound } from "next/navigation"
import { CATEGORIES } from "@/lib/constants"
import { ARTICLES } from "@/lib/constants"
import { ARTICLES_VARIOS } from "@/lib/articles"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"

interface Article {
  id: number
  title: string
  description: string
  images: string[]
  illustrativeImage: string
  category: string
  slug: string
  image: string // Added the 'image' property to resolve the type error
}

export async function generateStaticParams() {
  return CATEGORIES.map((category) => ({
    slug: category.slug,
  }))
}

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const category = CATEGORIES.find((cat) => cat.slug === params.slug)

  if (!category) {
    notFound()
  }

  const allArticles: Article[] = [...ARTICLES, ...ARTICLES_VARIOS]
  const categoryArticles = allArticles.filter((article) => article.category === params.slug)

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold mb-8 text-center">{category.name}</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categoryArticles.map((article) => (
              <Card key={article.id} className="overflow-hidden hover:shadow-xl transition-duration-300">
                <CardHeader className="p-0">
                  <div className="relative h-48 md:h-64">
                    <Image
                      src={article.image || article.images[0] || "/placeholder.svg"}
                      alt={article.title}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <h2 className="text-xl font-bold mb-2">{article.title}</h2>
                  <p className="text-gray-600 mb-4">{article.description}</p>
                  <Link
                    href={`/articulo/${article.slug}`}
                    className="text-[#FF0000] hover:text-[#FF0000]/90 font-medium"
                  >
                    Leer más →
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

