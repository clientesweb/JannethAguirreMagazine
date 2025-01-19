import Head from 'next/head'

export default function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    "name": "Janneth Aguirre Bienes Raíces",
    "image": "https://jannethaguirre.online/logo.png",
    "url": "https://jannethaguirre.online",
    "telephone": "+593987167782",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Av. Principal 123",
      "addressLocality": "Guayaquil",
      "addressRegion": "Guayas",
      "postalCode": "090150",
      "addressCountry": "EC"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -2.1894128,
      "longitude": -79.8890662
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "09:00",
      "closes": "18:00"
    },
    "sameAs": [
      "https://www.facebook.com/@jannethaguirrebienesraices/?hr=1",
      "https://www.instagram.com/janneth_aguirrem/",
      "https://vm.tiktok.com/ZMhnEwCHp/",
      "https://www.youtube.com/@jannethaguirrebienesraices5728"
    ]
  }

  return (
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </Head>
  )
}

