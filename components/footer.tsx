"use client"

import type React from "react"
import { Facebook, Instagram, Twitter, Youtube, TwitterIcon as TikTok, Mail, Phone, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { SOCIAL_LINKS, CONTACT_INFO, CATEGORIES } from "@/lib/constants"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react"

export default function Footer() {
  const [phone, setPhone] = useState("")

  const handleSubscribe = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    window.open(
      `https://wa.me/593987167782?text=Hola, me gustaría suscribirme al boletín. Mi número es ${phone}`,
      "_blank",
    )
  }

  return (
    <footer className="bg-gradient-to-b from-black to-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="flex flex-col items-center md:items-start">
            <Image src="/logooficial.png" alt="Janneth Aguirre Magazine" width={150} height={60} className="mb-6" />
            <p className="text-sm max-w-xs text-center md:text-left text-gray-300">
              Tu revista líder en bienes raíces internacionales
            </p>
            <div className="flex space-x-5 mt-6">
              <Link
                href={SOCIAL_LINKS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#FF0000] transition-colors duration-300"
              >
                <Facebook className="h-6 w-6" />
              </Link>
              <Link
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#FF0000] transition-colors duration-300"
              >
                <Instagram className="h-6 w-6" />
              </Link>
              <Link
                href={SOCIAL_LINKS.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#FF0000] transition-colors duration-300"
              >
                <Twitter className="h-6 w-6" />
              </Link>
              <Link
                href={SOCIAL_LINKS.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#FF0000] transition-colors duration-300"
              >
                <Youtube className="h-6 w-6" />
              </Link>
              <Link
                href={SOCIAL_LINKS.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#FF0000] transition-colors duration-300"
              >
                <TikTok className="h-6 w-6" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-xl mb-6 text-white relative inline-block">
              Categorías
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-[#FF0000]"></span>
            </h3>
            <ul className="space-y-3">
              {CATEGORIES.map((category) => (
                <li key={category.slug}>
                  <Link
                    href={`/categoria/${category.slug}`}
                    className="text-gray-300 hover:text-[#FF0000] transition-colors duration-300 flex items-center"
                  >
                    <ArrowRight className="h-4 w-4 mr-2 text-[#FF0000]" />
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-xl mb-6 text-white relative inline-block">
              Enlaces Rápidos
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-[#FF0000]"></span>
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/sobre-nosotros"
                  className="text-gray-300 hover:text-[#FF0000] transition-colors duration-300 flex items-center"
                >
                  <ArrowRight className="h-4 w-4 mr-2 text-[#FF0000]" />
                  Sobre Nosotros
                </Link>
              </li>
              <li>
                <Link
                  href="/contacto"
                  className="text-gray-300 hover:text-[#FF0000] transition-colors duration-300 flex items-center"
                >
                  <ArrowRight className="h-4 w-4 mr-2 text-[#FF0000]" />
                  Contacto
                </Link>
              </li>
              <li>
                <Link
                  href="/politica-privacidad"
                  className="text-gray-300 hover:text-[#FF0000] transition-colors duration-300 flex items-center"
                >
                  <ArrowRight className="h-4 w-4 mr-2 text-[#FF0000]" />
                  Política de Privacidad
                </Link>
              </li>
              <li>
                <Link
                  href="https://jannethaguirre.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-[#FF0000] transition-colors duration-300 flex items-center"
                >
                  <ArrowRight className="h-4 w-4 mr-2 text-[#FF0000]" />
                  Sitio Web Oficial
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-xl mb-6 text-white relative inline-block">
              Suscríbete al Boletín
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-[#FF0000]"></span>
            </h3>
            <form onSubmit={handleSubscribe} className="space-y-4">
              <Input
                type="tel"
                name="phone"
                placeholder="Tu número de WhatsApp"
                className="bg-gray-800/50 border-gray-700 text-white placeholder-gray-400 focus:ring-[#FF0000] focus:border-[#FF0000]"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              <Button type="submit" className="w-full bg-[#FF0000] hover:bg-[#FF0000]/90 text-white">
                Suscribirse
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </form>
            <div className="mt-6 space-y-3">
              <h4 className="font-semibold text-white">Contacto</h4>
              <p className="flex items-center text-gray-300">
                <Mail className="h-4 w-4 mr-2 text-[#FF0000]" />
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="hover:text-[#FF0000] transition-colors duration-300"
                >
                  {CONTACT_INFO.email}
                </a>
              </p>
              <p className="flex items-center text-gray-300">
                <Phone className="h-4 w-4 mr-2 text-[#FF0000]" />
                <a href={`tel:${CONTACT_INFO.phone}`} className="hover:text-[#FF0000] transition-colors duration-300">
                  {CONTACT_INFO.phone}
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Janneth Aguirre Magazine. Todos los derechos reservados.
          </p>
          <div className="mt-2 flex items-center justify-center">
            <span className="text-sm text-gray-500">Powered by</span>
            <Link
              href="https://dualitydomain.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-bold text-gray-400 hover:text-[#FF0000] transition-colors duration-300 ml-1"
            >
              Duality Domain
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

