import Head from 'next/head'

interface SEOProps {
  title: string
  description: string
  canonicalUrl: string
  ogImage: string
  ogType?: string
  articleMeta?: {
    publishedTime: string
    modifiedTime: string
    author: string
    section: string
    tags: string[]
  }
}

export default function SEO({ 
  title, 
  description, 
  canonicalUrl, 
  ogImage, 
  ogType = 'website',
  articleMeta
}: SEOProps) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content="Janneth Aguirre Magazine - Bienes Raíces Internacionales" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
      
      {/* Theme Color */}
      <meta name="theme-color" content="#FF0000" />
      
      {/* Additional SEO */}
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="format-detection" content="telephone=no" />
      
      {/* Keywords */}
      <meta name="keywords" content="bienes raíces, propiedades de lujo, inversión inmobiliaria, Ecuador, Panamá, Estados Unidos, revista inmobiliaria, Janneth Aguirre" />
      
      {/* Article Metadata */}
      {articleMeta && (
        <>
          <meta property="article:published_time" content={articleMeta.publishedTime} />
          <meta property="article:modified_time" content={articleMeta.modifiedTime} />
          <meta property="article:author" content={articleMeta.author} />
          <meta property="article:section" content={articleMeta.section} />
          {articleMeta.tags.map((tag, index) => (
            <meta key={index} property="article:tag" content={tag} />
          ))}
        </>
      )}
      
      {/* Structured Data for Magazine */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Magazine",
          "name": "Janneth Aguirre Magazine",
          "url": "https://jannethaguirre.online",
          "logo": "https://jannethaguirre.online/logo.png",
          "sameAs": [
            "https://www.facebook.com/@jannethaguirrebienesraices/?hr=1",
            "https://www.instagram.com/janneth_aguirrem/",
            "https://vm.tiktok.com/ZMhnEwCHp/",
            "https://www.youtube.com/@jannethaguirrebienesraices5728"
          ],
          "publisher": {
            "@type": "Organization",
            "name": "Janneth Aguirre Bienes Raíces",
            "logo": {
              "@type": "ImageObject",
              "url": "https://jannethaguirre.online/logo.png"
            }
          }
        })}
      </script>
    </Head>
  )
}

