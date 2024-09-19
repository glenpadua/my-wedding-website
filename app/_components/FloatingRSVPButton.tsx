'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { HeartHandshake } from 'lucide-react'

const FloatingRSVPButton = () => {
  return (
    <motion.div
      className="fixed md:top-3 md:bottom-auto bottom-4 right-4 z-50"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Link href="#rsvp">
        <button className="bg-dusty-blue-800 text-white px-3 py-2 rounded-full text-sm md:text-base font-semibold shadow-lg hover:bg-dusty-blue-700 transition-colors duration-300 flex items-center tracking-wider">
          <HeartHandshake size={18} className="mr-1" />
          RSVP
        </button>
      </Link>
    </motion.div>
  )
}

export default FloatingRSVPButton