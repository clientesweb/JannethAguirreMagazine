import '@/app/globals.css'
import LocalBusinessSchema from '@/components/local-business-schema'
import SEO from '@/components/seo'
import { Inter } from 'next/font/google'
import { Toaster } from 'react-hot-toast'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <SEO 
        title="Janneth Aguirre Magazine - Bienes Raíces Internacionales"
        description="Tu revista líder en bienes raíces internacionales. Descubre las últimas tendencias y oportunidades en Ecuador, Panamá y Estados Unidos."
        canonicalUrl="https://jannethaguirremagazine.com"
        ogImage="https://jannethaguirremagazine.com/og-image.jpg"
      />
      <body className={inter.className}>
        <LocalBusinessSchema />
        <Toaster />
        {children}
      </body>
    </html>
  )
}

