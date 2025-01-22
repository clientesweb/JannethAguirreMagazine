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
  'panama': 'https://jannethaguirre.online/panama.jpg',
  'ecuador': 'https://jannethaguirre.online/ecuador.jpg',
  'estados-unidos': 'public/estados-unidos.jpg',
  'decoracion': 'https://jannethaguirre.online/tendencias-diseno-interiores-2025.jpg',
  'tendencias': 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80',
  'analisis': 'https://jannethaguirre.online/analisis-de-mercado-inmobiliario-ecuador-2025.jpg'
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

