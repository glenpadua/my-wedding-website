'use client'

import React from 'react'
import { ExternalLink } from 'lucide-react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Link from 'next/link'
import Image from 'next/image'

interface InfoItemProps {
  title: string;
  description: string;
  link: string;
}

const InfoItem: React.FC<InfoItemProps> = ({ title, description, link }) => (
  <Link href={link} target="_blank" rel="noopener noreferrer">
    <motion.div 
      className="mb-6 p-6 bg-white border-2 border-dusty-blue-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer group relative"
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <h3 className="text-2xl font-serif text-dusty-blue-800 mb-2 pr-8 uppercase">{title}</h3>
      <p className="text-dusty-blue-700">{description}</p>
      <ExternalLink 
        size={20} 
        className="absolute top-4 right-4 text-dusty-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      />
    </motion.div>
  </Link>
)

interface InfoColumnProps {
  title: string;
  iconSrc: string;
  items: InfoItemProps[];
  iconWidth?: number;
  iconHeight?: number;
  animationVariant?: any;
}

interface AnimatedImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  animationVariant: any;
}

const AnimatedImage: React.FC<AnimatedImageProps> = ({ src, alt, width, height, animationVariant }) => {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  React.useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={animationVariant}
    >
      <Image src={src} alt={alt} width={width} height={height} className="text-dusty-blue-600" />
    </motion.div>
  )
}

const InfoColumn: React.FC<InfoColumnProps> = ({ title, iconSrc, items, iconWidth = 64, iconHeight = 64, animationVariant }) => (
  <div className="mb-8 md:mb-0">
    <div className="flex flex-col items-center justify-center mb-4">
      <div className="h-24 flex items-center justify-center"> {/* Fixed height container for icon */}
        <AnimatedImage
          src={iconSrc}
          alt={`${title} icon`}
          width={iconWidth}
          height={iconHeight}
          animationVariant={animationVariant}
        />
      </div>
      <div className="h-16 flex items-center justify-center"> {/* Fixed height container for title */}
        <h2 className="text-4xl font-serif text-dusty-blue-800 text-center">{title}</h2>
      </div>
    </div>
    <div className="mt-6"> {/* Separate container for items */}
      {items.map((item, index) => (
        <InfoItem key={index} {...item} />
      ))}
    </div>
  </div>
)

interface TravelInfo {
  travel: InfoItemProps[];
  stay: InfoItemProps[];
  rentals: InfoItemProps[];
}

export default function TravelAndStay() {
  const travelInfo: TravelInfo = {
    travel: [
      { title: "Nearest Airport", description: "Airport Name, Distance: X km, Taxi Available", link: "https://example.com/airport" },
      { title: "Nearest Train Station", description: "Station Name, Distance: X km, Bus Available", link: "https://example.com/station" },
      { title: "Nearest Bus Station", description: "Bus Station Name, Distance: X km, Local Transport", link: "https://example.com/bus-station" },
    ],
    stay: [
      { title: "Hotels", description: "Luxury Hotel, Boutique Hotel, Budget Hotel", link: "https://example.com/hotels" },
      { title: "Resorts", description: "Beach Resort, Spa Resort, Golf Resort", link: "https://example.com/resorts" },
      { title: "Airbnbs", description: "Beachfront Villa, City Apartment, Country Cottage", link: "https://example.com/rentals" },
    ],
    rentals: [
      { title: "Car Rentals", description: "Luxury Cars, Economy Cars, SUVs", link: "https://example.com/car-rentals" },
      { title: "Bike Rentals", description: "Mountain Bikes, City Bikes, E-Bikes", link: "https://example.com/bike-rentals" },
    ],
  }

  const travelAnimation = {
    hidden: { x: '-100%' },
    visible: {
      x: '0%',
      transition: {
        x: { type: 'spring', stiffness: 100, damping: 20, duration: 1.5 },
        delay: 1,
      },
    },
  }

  const stayAnimation = {
    hidden: { y: '-100%' },
    visible: {
      y: 0,
      transition: {
        y: { type: 'spring', stiffness: 50, damping: 15, duration: 1.8 },
        delay: 1,
      },
    },
  }

  const rentalAnimation = {
    hidden: { x: '100%' },
    visible: {
      x: '0%',
      transition: {
        x: { type: 'spring', stiffness: 100, damping: 20, duration: 1.5 },
        delay: 1,
      },
    },
  }

  return (
    <div className="h-full bg-gradient-to-b from-white to-dusty-blue-100 py-12 px-4 text-dusty-blue-800">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-8xl text-center font-light tracking-wider">
          TRAVEL AND STAY
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 tracking-wider">
          <InfoColumn 
            title="Travel" 
            iconSrc="/images/travel.svg"
            items={travelInfo.travel} 
            iconWidth={90}
            animationVariant={travelAnimation}
          />
          <InfoColumn 
            title="Stay" 
            iconSrc="/images/stay.svg"
            items={travelInfo.stay} 
            animationVariant={stayAnimation}
          />
          <InfoColumn 
            title="Rentals" 
            iconSrc="/images/rental.svg"
            items={travelInfo.rentals} 
            iconWidth={100}
            animationVariant={rentalAnimation}
          />
        </div>
      </div>
    </div>
  )
}