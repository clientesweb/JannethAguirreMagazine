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
        title="Janneth Aguirre Bienes Raíces - Propiedades de Lujo en Ecuador, Panamá y Estados Unidos"
        description="Descubre propiedades de lujo en Ecuador, Panamá y Estados Unidos con Janneth Aguirre Bienes Raíces. Expertos en inversiones inmobiliarias internacionales."
        canonicalUrl="https://jannethaguirre.online"
        ogImage="https://jannethaguirre.online/og-image.jpg"
      />
      <body className={inter.className}>
        <LocalBusinessSchema />
        <Toaster />
        {children}
      </body>
    </html>
  )
}

