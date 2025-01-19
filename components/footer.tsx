import { Facebook, Instagram, Twitter, Youtube, TwitterIcon as TikTok, Mail, Phone, ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { SOCIAL_LINKS, CONTACT_INFO, CATEGORIES } from '@/lib/constants'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export default function Footer() {
  const handleSubscribe = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const phone = form.phone.value
    window.open(`https://wa.me/593987167782?text=Hola, me gustaría suscribirme al boletín. Mi número es ${phone}`, '_blank')
  }

  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex flex-col items-center md:items-start">
            <Image
              src="/logooficial.png"
              alt="Janneth Aguirre Magazine"
              width={150}
              height={60}
              className="mb-4"
            />
            <p className="text-sm max-w-xs text-center md:text-left">
              Tu revista líder en bienes raíces internacionales
            </p>
            <div className="flex space-x-4 mt-4">
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
            <h3 className="font-bold mb-4 text-[#FF0000]">Suscríbete al Boletín</h3>
            <form onSubmit={handleSubscribe} className="space-y-2">
              <Input
                type="tel"
                name="phone"
                placeholder="Tu número de WhatsApp"
                className="bg-white/10 border-white/20 text-white placeholder-gray-400"
                required
              />
              <Button type="submit" className="w-full bg-[#FF0000] hover:bg-[#FF0000]/90">
                Suscribirse
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </form>
            <div className="mt-4">
              <h4 className="font-semibold mb-2">Contacto</h4>
              <p className="flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-[#FF0000] transition-colors">
                  {CONTACT_INFO.email}
                </a>
              </p>
              <p className="flex items-center mt-1">
                <Phone className="h-4 w-4 mr-2" />
                <a href={`tel:${CONTACT_INFO.phone}`} className="hover:text-[#FF0000] transition-colors">
                  {CONTACT_INFO.phone}
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/10 text-center">
          <p className="text-sm">
            © {new Date().getFullYear()} Janneth Aguirre Magazine. Todos los derechos reservados.
          </p>
          <div className="mt-2 flex items-center justify-center">
            <span className="text-sm">Powered by</span>
            <Link
              href="https://dualitydomain.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-bold hover:text-[#FF0000] transition-colors ml-1"
            >
              Duality Domain
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

