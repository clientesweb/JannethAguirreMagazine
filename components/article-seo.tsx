import SEO from './seo'

interface ArticleSEOProps {
  title: string
  description: string
  publishedTime: string
  modifiedTime: string
  author: string
  category: string
  tags: string[]
  imageUrl: string
}

export default function ArticleSEO({
  title,
  description,
  publishedTime,
  modifiedTime,
  author,
  category,
  tags,
  imageUrl
}: ArticleSEOProps) {
  return (
    <SEO
      title={`${title} | Janneth Aguirre Magazine`}
      description={description}
      canonicalUrl={`https://jannethaguirre.online/articulo/${encodeURIComponent(title.toLowerCase().replace(/ /g, '-'))}`}
      ogImage={imageUrl}
      ogType="article"
      articleMeta={{
        publishedTime,
        modifiedTime,
        author,
        section: category,
        tags
      }}
    />
  )
}

