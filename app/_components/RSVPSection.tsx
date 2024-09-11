'use client'

import React from 'react'

export default function RSVPSection() {
  return (
    <div className="h-full bg-dusty-blue-900 text-white flex flex-col items-center justify-center p-4">
      <div className="text-center">
        <p className="text-lg mb-4">— G&M —</p>
        <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif tracking-widest mb-8">
          WE HOPE YOU CAN<br />JOIN US
        </h2>
        <div className="mb-8 flex justify-center">
          <button className="bg-transparent border border-white text-white px-8 py-3 text-lg sm:text-xl md:text-2xl font-thin rounded-full hover:bg-white hover:text-dusty-blue-900 transition-colors duration-300 tracking-widest">
            RSVP by November 1st
          </button>
        </div>
        <div className="mt-8">
          {/* Add flower decorations here */}
        </div>
      </div>
    </div>
  )
}