'use client'

import React from 'react'
import Image from 'next/image'

export default function RSVPSection() {
  return (
    <div className="h-full bg-dusty-blue-900 text-white flex flex-col items-center justify-center p-4 relative">
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
          <Image
            src="/images/button-flower.svg"
            alt="Decorative flower"
            width={50}
            height={50}
            className="absolute -top-6 -right-4 z-20 pointer-events-none"
          />
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-[104%]">
        <Image
          src="/images/bottom-flowers.svg"
          alt="Decorative flowers"
          width={1920}
          height={200}
          className="w-[104%] absolute bottom-[-60px] left-[-30px]"
        />
      </div>
    </div>
  )
}