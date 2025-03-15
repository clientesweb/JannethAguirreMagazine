"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Menu, X, Search } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { CATEGORIES } from "@/lib/constants"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  const menuVariants = {
    closed: {
      opacity: 0,
      x: "100%",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
        staggerChildren: 0.05,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    closed: { opacity: 0, x: 20 },
    open: { opacity: 1, x: 0 },
  }

  const searchVariants = {
    closed: { opacity: 0, y: -20, height: 0 },
    open: { opacity: 1, y: 0, height: "auto" },
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled ? "bg-black/80 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="flex items-center">
            <Image
              src="/logooficial.png"
              alt="Janneth Aguirre Magazine"
              width={150}
              height={60}
              className="h-10 md:h-12 w-auto"
            />
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {CATEGORIES.map((category) => (
              <Link
                key={category.slug}
                href={`/categoria/${category.slug}`}
                className="text-sm lg:text-base text-white hover:text-[#FF0000] font-medium transition-colors px-3 py-2 rounded-md hover:bg-white/10"
              >
                {category.name}
              </Link>
            ))}
            <Button
              variant="ghost"
              size="icon"
              className="text-white hover:bg-white/10 ml-2"
              onClick={() => setSearchOpen(!searchOpen)}
            >
              <Search className="h-5 w-5" />
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-2 md:hidden">
            <Button
              variant="ghost"
              size="icon"
              className="text-white hover:bg-white/10"
              onClick={() => setSearchOpen(!searchOpen)}
            >
              <Search className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="text-white hover:bg-white/10"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Search Bar */}
        <AnimatePresence>
          {searchOpen && (
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={searchVariants}
              className="py-4 border-t border-white/10"
            >
              <div className="relative">
                <input
                  type="text"
                  placeholder="Buscar artículos..."
                  className="w-full bg-white/10 border border-white/20 rounded-full py-2 px-4 pl-10 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-[#FF0000]/50"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-white/60" />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Mobile Menu - Fixed to viewport */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed inset-0 bg-black/95 backdrop-blur-md z-50 md:hidden"
            style={{ top: 0, height: "100vh", position: "fixed" }}
          >
            <div className="flex flex-col h-full">
              <div className="flex justify-between items-center p-4 border-b border-white/10">
                <Link href="/" onClick={() => setIsOpen(false)}>
                  <Image
                    src="/logooficial.png"
                    alt="Janneth Aguirre Magazine"
                    width={150}
                    height={60}
                    className="h-10 w-auto"
                  />
                </Link>
                <Button variant="ghost" size="icon" className="text-white" onClick={() => setIsOpen(false)}>
                  <X className="h-6 w-6" />
                </Button>
              </div>
              <nav className="flex flex-col space-y-1 p-4 overflow-y-auto flex-grow">
                {CATEGORIES.map((category) => (
                  <motion.div key={category.slug} variants={itemVariants}>
                    <Link
                      href={`/categoria/${category.slug}`}
                      className="text-xl text-white hover:text-[#FF0000] font-medium block py-3 px-4 rounded-md hover:bg-white/5 transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {category.name}
                    </Link>
                  </motion.div>
                ))}
                <motion.div variants={itemVariants} className="pt-4 mt-4 border-t border-white/10">
                  <Link
                    href="/sobre-nosotros"
                    className="text-lg text-white/80 hover:text-white font-medium block py-2 px-4"
                    onClick={() => setIsOpen(false)}
                  >
                    Sobre Nosotros
                  </Link>
                  <Link
                    href="/contacto"
                    className="text-lg text-white/80 hover:text-white font-medium block py-2 px-4"
                    onClick={() => setIsOpen(false)}
                  >
                    Contacto
                  </Link>
                </motion.div>
              </nav>
              <div className="mt-auto p-6 text-center text-white/60 text-sm">
                © {new Date().getFullYear()} Janneth Aguirre Magazine
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

