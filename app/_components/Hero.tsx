'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <div className="relative h-full w-full flex flex-col justify-center items-center overflow-hidden">
      {/* Top-left flower */}
      <Image
        src="/images/flower-top-left.png"
        alt="Top-left flower"
        width={150}
        height={150}
        className="absolute top-[-10px] left-[-10px] w-1/3 md:w-auto"
      />
      
      {/* Top-right flower */}
      <Image
        src="/images/flower-top-right.png"
        alt="Top-right flower"
        width={100}
        height={100}
        className="absolute top-0 right-[-20px] w-1/3 md:w-auto"
      />
      
      {/* Bottom-left flower */}
      <Image
        src="/images/flower-bottom-left.png"
        alt="Bottom-left flower"
        width={200}
        height={200}
        className="absolute bottom-10 left-[-50px] w-1/2 md:w-auto"
      />
      
      {/* Bottom-right flower */}
      <Image
        src="/images/flower-bottom-right.png"
        alt="Bottom-right flower"
        width={150}
        height={150}
        className="absolute bottom-[-10px] right-[-90px] w-3/4 md:w-auto"
      />
      
      {/* Main content */}
      <main className="relative z-10 flex flex-col items-center justify-center text-center px-4 text-dusty-blue-800">
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 md:mb-8 tracking-widest text-dusty-blue-600">DECEMBER 29TH 2024</p>
        <div className="flex flex-col">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif tracking-widest leading-[0.7]">GLEN</h1>
          <span className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif tracking-widest leading-[0.7]">&</span>
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif tracking-widest leading-[0.7]">MILLUSHA</h1>
        </div>
      </main>
      
      {/* Bottom indicator */}
      <div className="absolute bottom-4 z-10">
        <div className="w-12 h-1 bg-dusty-blue-500 rounded-full"></div>
      </div>
    </div>
  )
}