import { Facebook, Instagram, Twitter, Youtube, TwitterIcon as TikTok, Mail, Phone } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { SOCIAL_LINKS, CONTACT_INFO, CATEGORIES } from '@/lib/constants'

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center mb-8">
          <Image
            src="/logooficial.png"
            alt="Janneth Aguirre Magazine"
            width={150}
            height={60}
            className="mb-4"
          />
          <p className="text-sm max-w-md">
            Tu revista líder en bienes raíces internacionales
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8 mb-8">
          <div>
            <h3 className="font-bold mb-4 text-[#FF0000]">Categorías</h3>
            <ul className="space-y-2">
              {CATEGORIES.map((category) => (
                <li key={category.slug}>
                  <Link href={`/categoria/${category.slug}`} className="hover:text-[#FF0000] transition-colors">
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4 text-[#FF0000]">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li><Link href="/sobre-nosotros" className="hover:text-[#FF0000] transition-colors">Sobre Nosotros</Link></li>
              <li><Link href="/contacto" className="hover:text-[#FF0000] transition-colors">Contacto</Link></li>
              <li><Link href="/politica-privacidad" className="hover:text-[#FF0000] transition-colors">Política de Privacidad</Link></li>
              <li>
                <Link
                  href="https://jannethaguirre.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#FF0000] transition-colors"
                >
                  Sitio Web Oficial
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4 text-[#FF0000]">Contacto</h3>
            <ul className="space-y-2">
              <li className="flex items-center justify-center">
                <Mail className="h-4 w-4 mr-2" />
                <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-[#FF0000] transition-colors">
                  {CONTACT_INFO.email}
                </a>
              </li>
              <li className="flex items-center justify-center">
                <Phone className="h-4 w-4 mr-2" />
                <a href={`tel:${CONTACT_INFO.phone}`} className="hover:text-[#FF0000] transition-colors">
                  {CONTACT_INFO.phone}
                </a>
              </li>
            </ul>
            <h3 className="font-bold mt-6 mb-4 text-[#FF0000]">Síguenos</h3>
            <div className="flex justify-center space-x-4 mt-4">
              <Link href={SOCIAL_LINKS.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-[#FF0000] transition-colors">
                <Facebook className="h-6 w-6" />
              </Link>
              <Link href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-[#FF0000] transition-colors">
                <Instagram className="h-6 w-6" />
              </Link>
              <Link href={SOCIAL_LINKS.twitter} target="_blank" rel="noopener noreferrer" className="hover:text-[#FF0000] transition-colors">
                <Twitter className="h-6 w-6" />
              </Link>
              <Link href={SOCIAL_LINKS.youtube} target="_blank" rel="noopener noreferrer" className="hover:text-[#FF0000] transition-colors">
                <Youtube className="h-6 w-6" />
              </Link>
              <Link href={SOCIAL_LINKS.tiktok} target="_blank" rel="noopener noreferrer" className="hover:text-[#FF0000] transition-colors">
                <TikTok className="h-6 w-6" />
              </Link>
            </div>
          </div>
        </div>

        <div className="text-center">
          <p className="text-sm">
            © {new Date().getFullYear()} Janneth Aguirre Magazine. Todos los derechos reservados.
          </p>
          <div className="mt-4 flex items-center justify-center gap-2">
            <span className="text-sm">Powered by</span>
            <Link
              href="https://dualitydomain.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-bold hover:text-[#FF0000] transition-colors"
            >
              Duality Domain
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

