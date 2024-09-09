'use client'

import React from 'react'
import Image from 'next/image'

export default function WeddingTimeline() {
  return (
    <div className="h-full bg-white text-dusty-blue-800 flex flex-col md:flex-row items-center justify-center p-4">
      <div className="w-full md:w-1/2 mb-8 md:mb-0">
        <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-4 text-center">
          THE WEDDING
        </h2>
        <p className="text-2xl md:text-3xl lg:text-4xl italic text-center">
          Ceremony & Reception
        </p>
      </div>
      <div className="w-full md:w-1/2 md:pl-8">
        <div className="relative">
        <Image
          src="/images/wedding-timeline.svg"
          alt="Wedding timeline"
          width={600}
          height={800}
          className="w-auto"
        />
        </div>
      </div>
    </div>
  )
}