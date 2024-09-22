'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function WeddingTimeline() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <div className="h-full min-h-screen bg-white text-dusty-blue-800 flex flex-col md:flex-row items-center justify-start md:justify-center p-4 bg-gradient-to-b from-white to-dusty-blue-100">
      <div className="w-full md:w-1/2 mb-8 md:mb-0">
        <h2 className="text-5xl md:text-9xl text-center font-light tracking-wider">
          THE<br/> TIMELINE
        </h2>
        <p className="text-2xl md:text-3xl italic text-center font-extralight">
          Ceremony & Reception
        </p>
      </div>
      <div className="w-full md:w-1/2 md:pl-8">
        <motion.div 
          className="relative"
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
          transition={{ duration: 2, ease: "easeOut" }}
        >
          <Image
            src="/images/wedding-timeline.svg"
            alt="Wedding timeline"
            width={600}
            height={800}
            className="w-auto"
          />
        </motion.div>
      </div>
    </div>
  )
}