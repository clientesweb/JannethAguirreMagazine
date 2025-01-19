import { notFound } from 'next/navigation'
import { CATEGORIES, ARTICLES } from '@/lib/constants'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import Image from 'next/image'
import Link from 'next/link'

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const category = CATEGORIES.find(cat => cat.slug === params.slug)
  
  if (!category) {
    notFound()
  }

  const categoryArticles = ARTICLES.filter(article => article.category === params.slug)

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold mb-8 text-center">{category.name}</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categoryArticles.map((article) => (
              <Card key={article.id} className="overflow-hidden">
                <CardHeader className="p-0">
                  <Image
                    src={article.image}
                    alt={article.title}
                    width={600}
                    height={400}
                    className="w-full h-48 object-cover"
                  />
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

