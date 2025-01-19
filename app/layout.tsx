import '@/app/globals.css'
import LocalBusinessSchema from '@/components/local-business-schema'
import { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Toaster } from 'react-hot-toast'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Janneth Aguirre Magazine - Bienes Raíces Internacionales',
    template: '%s | Janneth Aguirre Magazine'
  },
  description: 'Descubre las mejores propiedades de lujo e inversiones inmobiliarias en Ecuador, Panamá y Estados Unidos. Janneth Aguirre Magazine: tu guía experta en el mercado inmobiliario internacional.',
  metadataBase: new URL('https://jannethaguirre.online'),
  alternates: {
    canonical: '/',
  },
  manifest: '/site.webmanifest',
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png' },
    ],
  },
  themeColor: '#FF0000',
  openGraph: {
    type: 'website',
    title: 'Janneth Aguirre Magazine - Bienes Raíces Internacionales',
    description: 'Descubre las mejores propiedades de lujo e inversiones inmobiliarias en Ecuador, Panamá y Estados Unidos.',
    url: 'https://jannethaguirre.online',
    siteName: 'Janneth Aguirre Magazine',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Janneth Aguirre Magazine',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Janneth Aguirre Magazine - Bienes Raíces Internacionales',
    description: 'Descubre las mejores propiedades de lujo e inversiones inmobiliarias en Ecuador, Panamá y Estados Unidos.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'tu-codigo-de-verificacion-de-google',
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
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon-16x16.png" type="image/png" sizes="16x16" />
        <link rel="icon" href="/favicon-32x32.png" type="image/png" sizes="32x32" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#FF0000" />
      </head>
      <body className={inter.className}>
        <LocalBusinessSchema />
        <Toaster />
        {children}
      </body>
    </html>
  )
}

