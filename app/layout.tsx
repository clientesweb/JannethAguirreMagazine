import "@/app/globals.css"
import LocalBusinessSchema from "@/components/local-business-schema"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Toaster } from "react-hot-toast"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "Janneth Aguirre Magazine - Bienes Raíces Internacionales",
    template: "%s | Janneth Aguirre Magazine",
  },
  description:
    "Descubre las mejores propiedades de lujo e inversiones inmobiliarias en Ecuador, Panamá y Estados Unidos. Janneth Aguirre Magazine: tu guía experta en el mercado inmobiliario internacional.",
  metadataBase: new URL("https://jannethaguirre.online"),
  alternates: {
    canonical: "/",
  },
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    apple: [
      { url: "/apple-icon-57x57.png", sizes: "57x57", type: "image/png" },
      { url: "/apple-icon-60x60.png", sizes: "60x60", type: "image/png" },
      { url: "/apple-icon-72x72.png", sizes: "72x72", type: "image/png" },
      { url: "/apple-icon-76x76.png", sizes: "76x76", type: "image/png" },
      { url: "/apple-icon-114x114.png", sizes: "114x114", type: "image/png" },
      { url: "/apple-icon-120x120.png", sizes: "120x120", type: "image/png" },
      { url: "/apple-icon-144x144.png", sizes: "144x144", type: "image/png" },
      { url: "/apple-icon-152x152.png", sizes: "152x152", type: "image/png" },
      { url: "/apple-icon-180x180.png", sizes: "180x180", type: "image/png" },
    ],
    other: [{ url: "/android-icon-192x192.png", sizes: "192x192", type: "image/png" }],
  },
  themeColor: "#FF0000",
  openGraph: {
    type: "website",
    title: "Janneth Aguirre Magazine - Bienes Raíces Internacionales",
    description:
      "Descubre las mejores propiedades de lujo e inversiones inmobiliarias en Ecuador, Panamá y Estados Unidos.",
    url: "https://jannethaguirre.online",
    siteName: "Janneth Aguirre Magazine",
    images: [
      {
        url: "https://jannethaguirre.online/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Janneth Aguirre Magazine",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Janneth Aguirre Magazine - Bienes Raíces Internacionales",
    description:
      "Descubre las mejores propiedades de lujo e inversiones inmobiliarias en Ecuador, Panamá y Estados Unidos.",
    images: ["https://jannethaguirre.online/twitter-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "tu-codigo-de-verificacion-de-google",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <head>
        <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/android-icon-192x192.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body className={inter.className}>
        <LocalBusinessSchema />
        <Toaster />
        {children}
      </body>
    </html>
  )
}

