import Head from 'next/head'

interface SEOProps {
  title: string
  description: string
  canonicalUrl: string
  ogImage: string
}

export default function SEO({ title, description, canonicalUrl, ogImage }: SEOProps) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={canonicalUrl} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* PWA meta tags */}
      <meta name="application-name" content="Janneth Aguirre Magazine" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="JA Magazine" />
      <meta name="format-detection" content="telephone=no" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="msapplication-config" content="/browserconfig.xml" />
      <meta name="msapplication-TileColor" content="#FF0000" />
      <meta name="msapplication-tap-highlight" content="no" />
      <meta name="theme-color" content="#FF0000" />

      <link rel="apple-touch-icon" href="/icon-192x192.png" />
      <link rel="apple-touch-icon" sizes="152x152" href="/icon-152x152.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/icon-180x180.png" />
      <link rel="apple-touch-icon" sizes="167x167" href="/icon-167x167.png" />

      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/manifest.json" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#FF0000" />
      <link rel="shortcut icon" href="/favicon.ico" />
      
      {/* You may need to adjust these URLs based on your actual image locations */}
      <meta name="twitter:image" content="https://yourdomain.com/og-image.jpg" />
      <meta property="og:image" content="https://yourdomain.com/og-image.jpg" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
    </Head>
  )
}

