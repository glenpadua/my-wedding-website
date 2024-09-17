'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

interface LocationCardProps {
  icon: string
  title: string
  link: string
  iconWidth?: number
  iconHeight?: number
  showFlower?: boolean
}

const LocationCard: React.FC<LocationCardProps> = ({ icon, title, link, iconWidth = 64, iconHeight = 64, showFlower = false }) => (
  <Link href={link} target="_blank" rel="noopener noreferrer">
    <motion.div 
      className="mb-12 p-7 bg-white border-[3px] border-dusty-blue-100 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 cursor-pointer group relative flex items-start tracking-wider"
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="flex-shrink-0 mr-6">
        <Image src={icon} alt={`${title} icon`} width={iconWidth} height={iconHeight} />
      </div>
      <div className="flex flex-col justify-between">
        <h3 className="text-2xl font-serif text-dusty-blue-800 mb-3">{title}</h3>
        <p className="text-dusty-blue-600 underline text-lg">View on maps</p>
      </div>
      {showFlower && (
        <Image
          src="/images/location-card-flower.svg"
          alt="Decorative flower"
          width={100}
          height={100}
          className="absolute w-24 -top-6 -right-8"
        />
      )}
    </motion.div>
  </Link>
)

export default function WeddingLocation() {
  return (
    <div className="h-full bg-white text-dusty-blue-800 flex flex-col md:flex-row items-center justify-start md:justify-center p-4 px-6">
      <div className="w-full md:w-1/2 mb-8 md:mb-0">
        <h2 className="text-5xl md:text-9xl text-center font-light tracking-wider">
          THE<br/> WEDDING
        </h2>
        <p className="text-2xl md:text-3xl italic text-center font-extralight mt-4">
          Location & how to get there
        </p>
      </div>
      <div className="w-full md:w-1/2 md:pl-8">
        <div className="relative max-w-xl mx-auto">
          <LocationCard 
            icon="/images/church.svg"
            title="Capela de Nossa Senhora da Piedade"
            link="https://maps.app.goo.gl/wwmkmzkm48oEJwxc7"
          />
          <LocationCard 
            icon="/images/arch.svg"
            title="Green Amaze, Margao"
            link="https://maps.app.goo.gl/HmFZX5qUGH367Nkz6"
            iconWidth={80}
            iconHeight={80}
            showFlower={true}
          />
        </div>
      </div>
    </div>
  )
}