'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Timeline from './Timeline'

const TimelineItem = ({ time, title, description, icon, isLeft }) => (
  <div className={`flex items-center mb-16 ${isLeft ? 'flex-row' : 'flex-row-reverse'}`}>
    {isLeft ? (
      <>
        <div className="flex-grow text-right pr-4">
          <p className="font-bold text-xl">{time}</p>
          <p className="text-lg uppercase">{title}</p>
          <p className="text-lg uppercase">{description}</p>
        </div>
        <div className="w-20 h-20 bg-dusty-blue-800 rounded-full flex items-center justify-center text-white text-3xl">
          {icon}
        </div>
      </>
    ) : (
      <>
        <div className="w-20 h-20 bg-dusty-blue-800 rounded-full flex items-center justify-center text-white text-3xl">
          {icon}
        </div>
        <div className="flex-grow pl-4">
          <p className="text-lg uppercase">{description}</p>
        </div>
      </>
    )}
  </div>
)

const timelineItems = [
  {
    side: 'left' as const,
    content: (
      <div className="bg-white p-4 rounded shadow">
        <h3 className="font-bold">2020</h3>
        <p>Company founded</p>
      </div>
    ),
  },
  {
    side: 'right' as const,
    content: (
      <div className="bg-white p-4 rounded shadow">
        <h3 className="font-bold">2021</h3>
        <p>First major product launch</p>
      </div>
    ),
  },
  {
    side: 'left' as const,
    content: (
      <div className="bg-white p-4 rounded shadow">
        <h3 className="font-bold">2022</h3>
        <p>Expanded to international markets</p>
      </div>
    ),
  },
  {
    side: 'right' as const,
    content: (
      <div className="bg-white p-4 rounded shadow">
        <h3 className="font-bold">2023</h3>
        <p>Reached 1 million users</p>
      </div>
    ),
  },
]

export default function WeddingTimeline() {
  const timelineEvents = [
    { time: "3:30 PM", title: "WEDDING CEREMONY", description: "WEDDING CEREMONY", icon: "⛪", isLeft: true },
    { time: "6 PM ONWARDS", title: "WELCOME TO THE PARTY", description: "WELCOME TO THE PARTY", icon: "🎉", isLeft: true },
    { description: "TOAST & SPEECHES", icon: "🥂" },
    { description: "SHAKE A LEG WITH US", icon: "💃" },
    { description: "DRINKS & ENTRES", icon: "🍽️" },
    { description: "BUFFET DINNER", icon: "🍽️" },
    { description: "FIN :)", icon: "🎊" },
  ]

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