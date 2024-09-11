'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Footer from '../_components/Footer'

export default function Note() {
  return (
    <div className="h-full bg-white text-dusty-blue-800 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-3xl">
        <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif tracking-widest mb-12 text-center">
          A NOTE
        </h2>
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-4xl font-serif mb-8">YOUR PRESENCE IS A GIFT</h3>
          
          <div className="flex items-center justify-center mb-6">
            <p className="text-xl">
              Your best wishes and presence on our wedding day are<br />
              the greatest present for us.
            </p>
          </div>
          
          <p className="text-xl mb-8">
            We kindly request no physical gifts, your support and<br />
            blessings will help us start our journey together.
          </p>
          
          <p className="text-xl mb-6">
            The Church wedding ceremony is optional for our non-<br />
            catholic friends & family, but your presence on the dance<br />
            floor is mandatory :)
          </p>
          
        </motion.div>
      </div>
      <Footer />
    </div>
  )
}