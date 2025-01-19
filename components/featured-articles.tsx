import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'
import { ARTICLES } from '@/lib/constants'

export default function FeaturedArticles() {
  const featuredArticles = ARTICLES.slice(0, 5)

  return (
    <section className="py-12 sm:py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 text-center">Artículos Destacados</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {featuredArticles.map((article, index) => (
            <Card key={article.id} className={`overflow-hidden hover:shadow-xl transition-shadow duration-300 ${index === 0 ? 'sm:col-span-2 lg:col-span-3' : ''}`}>
              <div className="relative h-48 sm:h-64 md:h-72 lg:h-80">
                <Image
                  src={article.image || "/placeholder.svg"}
                  alt={article.title}
                  layout="fill"
                  objectFit="cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-0 left-0 p-4 sm:p-6">
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">{article.title}</h3>
                  <p className="text-white text-sm mb-4 line-clamp-2">{article.description}</p>
                  <Link 
                    href={`/articulo/${article.slug}`}
                    className="inline-block bg-[#FF0000] text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-[#FF0000]/90 transition-colors duration-300"
                  >
                    Leer Más
                  </Link>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

