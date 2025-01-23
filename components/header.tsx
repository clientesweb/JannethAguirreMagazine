"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { CATEGORIES } from "@/lib/constants"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

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

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="flex items-center">
            <Image
              src="/logooficial.png"
              alt="Janneth Aguirre Magazine"
              width={150}
              height={60}
              className="h-12 md:h-16 w-auto"
            />
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-4 lg:space-x-8">
            {CATEGORIES.map((category) => (
              <Link
                key={category.slug}
                href={`/categoria/${category.slug}`}
                className="text-sm lg:text-base text-gray-700 hover:text-[#FF0000] font-medium transition-colors"
              >
                {category.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
              className="fixed inset-0 bg-white z-50 md:hidden"
            >
              <div className="flex flex-col h-full">
                <div className="flex justify-between items-center p-4 border-b">
                  <Link href="/" onClick={() => setIsOpen(false)}>
                    <Image
                      src="/logooficial.png"
                      alt="Janneth Aguirre Magazine"
                      width={150}
                      height={60}
                      className="h-12 md:h-16 w-auto"
                    />
                  </Link>
                  <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
                    <X className="h-6 w-6" />
                  </Button>
                </div>
                <nav className="flex flex-col space-y-4 p-4 overflow-y-auto">
                  {CATEGORIES.map((category) => (
                    <motion.div key={category.slug} variants={itemVariants}>
                      <Link
                        href={`/categoria/${category.slug}`}
                        className="text-xl text-gray-700 hover:text-[#FF0000] font-medium block py-2"
                        onClick={() => setIsOpen(false)}
                      >
                        {category.name}
                      </Link>
                    </motion.div>
                  ))}
                </nav>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}

