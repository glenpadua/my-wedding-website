'use client'

import React from 'react'
import Image from 'next/image'

export default function WeddingTimeline() {
  return (
    <div className="h-full bg-white text-dusty-blue-800 flex flex-col md:flex-row items-center justify-start md:justify-center p-4 bg-gradient-to-b from-white to-dusty-blue-100">
      <div className="w-full md:w-1/2 mb-8 md:mb-0">
        <h2 className="text-5xl md:text-8xl text-center font-light tracking-wider">
          THE<br/> WEDDING
        </h2>
        <p className="text-2xl md:text-3xl italic text-center font-extralight">
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