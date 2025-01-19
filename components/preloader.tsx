'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

export default function Preloader() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const hasShownPreloader = localStorage.getItem('hasShownPreloader')
    
    if (!hasShownPreloader) {
      const timer = setTimeout(() => {
        setLoading(false)
        localStorage.setItem('hasShownPreloader', 'true')
      }, 3000)
      return () => clearTimeout(timer)
    } else {
      setLoading(false)
    }
  }, [])

  if (!loading) return null

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: [0, 1, 1.2, 1] }}
            transition={{ duration: 1.5, times: [0, 0.4, 0.8, 1] }}
            className="relative w-64 h-64 flex items-center justify-center"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 border-t-4 border-[#FF0000] rounded-full"
            ></motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-center"
            >
              <Image
                src="/logooficial.png"
                alt="Janneth Aguirre Magazine"
                width={150}
                height={60}
                className="mb-4 mx-auto"
              />
              <h1 className="text-3xl font-bold text-white">
                Janneth Aguirre
                <span className="block text-[#FF0000]">Magazine</span>
              </h1>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

