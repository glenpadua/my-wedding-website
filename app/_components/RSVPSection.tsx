'use client'

import React from 'react'
import Image from 'next/image'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'

export default function RSVPSection() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const buttonFlowerVariants = {
    hidden: { opacity: 0, y: -100, rotate: -20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 10,
        delay: 2.5, // Delay after the bloom animation
        duration: 2
      }
    }
  }

  return (
    <div ref={ref} className="h-full bg-dusty-blue-900 text-white flex flex-col items-center justify-center p-4 relative">
      <div className="text-center">
        <p className="text-lg mb-4">— G&M —</p>
        <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif tracking-widest mb-8">
          WE HOPE YOU CAN<br />JOIN US
        </h2>
        <div className="mb-8 inline-flex justify-center relative">
          <button className="bg-transparent border border-white text-white px-8 py-3 text-lg md:text-2xl font-semibold rounded-full hover:bg-white hover:text-dusty-blue-900 transition-colors duration-300 tracking-widest relative">
            RSVP by November 1st
            <span className="absolute inset-0 z-10" aria-hidden="true"></span>
          </button>
          <motion.div
            variants={buttonFlowerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="absolute -top-6 -right-4 z-20 pointer-events-none"
          >
            <Image
              src="/images/button-flower.svg"
              alt="Decorative flower"
              width={50}
              height={50}
            />
          </motion.div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-[104%]">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 2, delay: 0.5, ease: "easeOut" }}
        >
          <Image
            src="/images/bottom-flowers.svg"
            alt="Decorative flowers"
            width={1920}
            height={200}
            className="w-[104%] absolute bottom-[-60px] left-[-30px]"
          />
        </motion.div>
      </div>
    </div>
  )
}