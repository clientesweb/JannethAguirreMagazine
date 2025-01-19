'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { SOCIAL_LINKS } from '@/lib/constants'
import Image from 'next/image'
import { X } from 'lucide-react'

export default function WhatsAppButton() {
  const [showNotification, setShowNotification] = useState(false)
  const [notificationClosed, setNotificationClosed] = useState(false)

  useEffect(() => {
    const hasClosedNotification = localStorage.getItem('hasClosedNotification')
    
    if (!hasClosedNotification && !notificationClosed) {
      const timer = setTimeout(() => {
        setShowNotification(true)
      }, 5000)
      return () => clearTimeout(timer)
    }
  }, [notificationClosed])

  const handleClose = () => {
    setShowNotification(false)
    setNotificationClosed(true)
    localStorage.setItem('hasClosedNotification', 'true')
  }

  const buttonVariants = {
    hover: { scale: 1.1 },
    tap: { scale: 0.9 }
  }

  const notificationVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.8 },
    visible: { opacity: 1, y: 0, scale: 1 }
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <motion.a
        href={SOCIAL_LINKS.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
        variants={buttonVariants}
        whileHover="hover"
        whileTap="tap"
      >
        <Image
          src="/logooficial.png"
          alt="Janneth Aguirre"
          width={60}
          height={60}
          className="rounded-full w-12 h-12 shadow-lg hover:shadow-xl transition-shadow duration-300"
        />
      </motion.a>
      <AnimatePresence>
        {showNotification && !notificationClosed && (
          <motion.div
            className="absolute bottom-full right-0 mb-2 bg-white text-black p-4 rounded-lg shadow-md max-w-[250px] whitespace-normal"
            variants={notificationVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition={{ duration: 0.3 }}
          >
            <button
              onClick={handleClose}
              className="absolute top-1 right-1 text-gray-500 hover:text-gray-700"
            >
              <X size={16} />
            </button>
            <p className="text-sm mb-2">¿Necesitas ayuda con bienes raíces?</p>
            <p className="text-xs text-gray-600">Contáctanos para obtener asesoría personalizada.</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

