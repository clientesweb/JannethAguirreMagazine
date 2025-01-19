import { Card, CardContent, CardHeader } from '@/components/ui/card'
import Image from 'next/image'
import Link from 'next/link'

interface CategorySectionProps {
  category: {
    name: string
    slug: string
  }
}

const CATEGORY_IMAGES = {
  'panama': 'https://images.unsplash.com/photo-1583532452513-a02186582ccd?auto=format&fit=crop&q=80',
  'ecuador': 'https://images.unsplash.com/photo-1489546233434-5858f30dfef7?auto=format&fit=crop&q=80',
  'estados-unidos': 'https://images.unsplash.com/photo-1609924211018-5526c55bad5b?auto=format&fit=crop&q=80',
  'decoracion': 'https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&q=80',
  'tendencias': 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80',
  'analisis': 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80'
}

export default function CategorySection({ category }: CategorySectionProps) {
  return (
    <section className="py-8">
      <h2 className="text-2xl font-bold mb-6">{category.name}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3].map((i) => (
          <Card key={i} className="overflow-hidden">
            <CardHeader className="p-0">
              <Image
                src={CATEGORY_IMAGES[category.slug as keyof typeof CATEGORY_IMAGES]}
                alt={`${category.name} article ${i}`}
                width={400}
                height={300}
                className="w-full object-cover h-48"
              />
            </CardHeader>
            <CardContent className="p-4">
              <h3 className="font-bold mb-2">
                Artículo {i} de {category.name}
              </h3>
              <p className="text-sm text-muted-foreground">
                Descripción breve del artículo...
              </p>
              <Link 
                href={`/categoria/${category.slug}/articulo-${i}`}
                className="text-[#FF0000] hover:text-[#FF0000]/90 text-sm mt-2 inline-block"
              >
                Leer más →
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

