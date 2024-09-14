'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion';

const flowerVariants = {
  hidden: { scale: 0, opacity: 0 },
  visible: { 
    scale: 1, 
    opacity: 1, 
    transition: { 
      duration: 2, 
      ease: "easeOut" 
    } 
  }
};

const floatingFlowerVariants = {
  initial: { y: -400, x: -20 },
  animate: { 
    y: 0, 
    x: 0,
    transition: { 
      duration: 3.5,
      times: [0, 0.4, 0.7, 0.9, 1],
      ease: [0.645, 0.045, 0.355, 1],
    }
  }
};

export default function Hero() {
  return (
    <div className="relative h-full w-full flex flex-col justify-center items-center overflow-hidden bg-gradient-to-b from-white to-dusty-blue-100">
      {/* Top-left flower */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={flowerVariants}
        className="absolute top-0 left-[-5px] w-1/3 md:w-40"
      >
        <Image
          src="/images/flower-top-left.svg"
          alt="Top-left flower"
          width={150}
          height={150}
          className="w-full h-auto"
        />
      </motion.div>
      
      {/* Top-right flower */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={flowerVariants}
        className="absolute top-0 right-[-20px] w-1/3 md:w-40"
      >
        <Image
          src="/images/flower-top-right.svg"
          alt="Top-right flower"
          width={100}
          height={100}
          className="w-full h-auto"
        />
      </motion.div>
      
      {/* Bottom-left flower */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={flowerVariants}
        className="absolute bottom-[50px] md:bottom-[-50px] left-[-50px] w-1/2 md:w-64"
      >
        <Image
          src="/images/flower-bottom-left.svg"
          alt="Bottom-left flower"
          width={200}
          height={200}
          className="w-full h-auto"
        />
      </motion.div>
      
      {/* Bottom-right flower */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={flowerVariants}
        className="absolute bottom-[40px] md:bottom-[-110px] right-[-130px] w-3/4 md:w-96"
      >
        <Image
          src="/images/flower-bottom-right.svg"
          alt="Bottom-right flower"
          width={150}
          height={150}
          className="w-full h-auto"
        />
      </motion.div>
      
      {/* Main content */}
      <main className="relative z-10 flex flex-col items-center justify-center text-center px-4 text-dusty-blue-800">
        <p className="text-base md:text-2xl lg:text-3xl mb-6 md:mb-8 tracking-widest text-dusty-blue-600 font-thin">DECEMBER 29TH 2024</p>
        <div className="flex flex-col">
          <h1 className="text-5xl md:text-9xl tracking-widest md:leading-[0.7]">GLEN</h1>
          <span className="text-5xl md:text-9xl tracking-widest md:leading-[0.7]">&</span>
          <div className="relative inline-block">
            <h1 className="text-5xl md:text-9xl tracking-widest md:leading-[0.7]">MILLUSHA</h1>
            <motion.div
              initial="initial"
              animate="animate"
              variants={floatingFlowerVariants}
              style={{ originY: 0.5 }}
              className="absolute top-[2px] left-[60%] w-[30px] h-[30px] md:top-[-5px] md:left-[61%] md:w-[30px] md:h-[30px]"
            >
              <motion.div
                animate={{
                  rotate: [0, 10, -8, 5, -3, 0],
                }}
                transition={{
                  duration: 3.5,
                  times: [0, 0.2, 0.4, 0.6, 0.8, 1],
                  ease: "easeInOut",
                }}
              >
                <Image
                  src="/images/s-flower.svg"
                  alt="Decorative flower"
                  width={30}
                  height={30}
                  className="w-4 md:w-full md:h-full"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </main>
      
      {/* Bottom indicator */}
      <div className="absolute bottom-4 z-10">
        <div className="w-12 h-1 bg-dusty-blue-500 rounded-full"></div>
      </div>
    </div>
  )
}