'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Footer from '../_components/Footer'

export default function Note() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const popAnimation = {
    scale: inView ? [0, 5, 1] : 0,
    opacity: inView ? [0, 1, 1] : 0,
    transition: { 
      duration: 0.8, 
      times: [0, 0.4, 1],
      ease: "easeOut",
      type: "spring",
      stiffness: 100,
      damping: 15
    }
  }

  return (
    <div className="h-full bg-white text-dusty-blue-800 flex flex-col items-center justify-center p-4 relative">
      <div className="w-full max-w-3xl flex flex-col items-center">
        <h2 className="text-5xl md:text-8xl font-serif tracking-widest mb-8 md:mb-12 text-center">
          A NOTE
        </h2>
        <motion.div 
          ref={ref}
          className="text-center relative inline-block"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            animate={popAnimation}
            initial={{ scale: 0, opacity: 0 }}
          >
            <Image
              src="/images/envelope.svg"
              alt="Envelope"
              width={60}
              height={60}
              className="absolute -top-10 left-14 md:left-2 md:top-16 -translate-x-full -translate-y-1/2 -rotate-[30deg]"
            />
          </motion.div>
          
          {/* <h3 className="text-3xl md:text-4xl font-serif mb-6 md:mb-8 tracking-wider">YOUR PRESENCE IS A GIFT</h3> */}

          <div className='font-light tracking-wider text-lg md:text-3xl'>
            <div className="flex items-center justify-center mb-4 md:mb-6">
              <p className="">
              We kindly request no physical gifts. Your best wishes and presence on our wedding day are the greatest gift for us.
              </p>
            </div>
          

            <p className="mb-6 md:mb-8">
              {"As it's holiday season and Goa could be a bit of a rush, we recommend booking your travel and stay as soon as possible :)"}
              </p>
          </div>
          
          <motion.div
            animate={popAnimation}
            initial={{ scale: 0, opacity: 0 }}
          >
            <Image
              src="/images/rings.svg"
              alt="Wedding Rings"
              width={60}
              height={60}
              className="absolute bottom-0 right-10 md:-right-4 md:bottom-16 translate-x-full translate-y-1/2 rotate-[30deg]"
            />
          </motion.div>
        </motion.div>
      </div>
      <Footer />
    </div>
  )
}