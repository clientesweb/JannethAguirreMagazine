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
        title="Janneth Aguirre Magazine - La Mejor Revista de Bienes Raíces Internacionales"
        description="Descubre las mejores propiedades de lujo e inversiones inmobiliarias en Ecuador, Panamá y Estados Unidos. Janneth Aguirre Magazine: tu guía experta en el mercado inmobiliario internacional."
        canonicalUrl="https://jannethaguirre.online"
        ogImage="https://jannethaguirre.online/og-image.jpg"
        ogType="website"
      />
      <body className={inter.className}>
        <LocalBusinessSchema />
        <Toaster />
        {children}
      </body>
    </html>
  )
}

