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
      className="mb-4 p-4 bg-white border-dusty-blue-200 border rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 cursor-pointer group relative"
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <h3 className="text-lg font-serif mb-1 pr-6 uppercase text-dusty-blue-700">{title}</h3>
      <p className="text-sm text-dusty-blue-500">{description}</p>
      <ExternalLink 
        size={16} 
        className="absolute top-3 right-3 text-dusty-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
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
  info: InfoItemProps[];
}

export default function TravelAndStay() {
  const travelInfo: TravelInfo = {
    travel: [
      { title: "Nearest Airport", description: "Dabolim Airport", link: "https://maps.app.goo.gl/AbsTTtaKBG5NRV286" },
      { title: "Nearest Train Station", description: "Margao Railway Station", link: "https://maps.app.goo.gl/V9S7HWVo3XRP2BBG7" },
      { title: "Nearest Bus Station", description: "Margao Bus Stand", link: "https://maps.app.goo.gl/2WtXfWX5uma2iFmm7" },
    ],
    stay: [
      { title: "Hotels", description: "A few recommendations around Margao", link: "https://tinyurl.com/g-m-hotel-options" },
      { title: "Resorts", description: "Resorts near Benaulim and Varca", link: "https://tinyurl.com/g-m-wedding-resort-options" },
      { title: "Airbnbs", description: "Villas and apartments near Margao", link: "https://tinyurl.com/g-m-wedding-airbnb-options" },
    ],
    info: [
      { title: "Vehicle Rentals", description: "Car and bike rentals for your convenience", link: "https://tinyurl.com/g-m-wedding-rental-options" },
      { title: "Guest Travel Plans", description: "See how others are coming", link: "https://tinyurl.com/wedding-travel-plans" },
      { title: "Wedding Weekend Map", description: "Explore key locations and local recommendations", link: "https://www.google.com/maps/d/u/0/edit?mid=13b2YTiVxGe--xo00ET0z2MnO7Sw6kGk&usp=sharing" },
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
    <div className="h-full bg-gradient-to-b from-white to-dusty-blue-100 items-center justify-center text-dusty-blue-800 px-4 pb-16 md:pb-0">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl md:text-8xl text-center font-light tracking-wider">
          TRAVEL AND STAY
        </h1>
        <p className="text-center text-dusty-blue-700 mt-2 mb-8 italic tracking-wider">
          {"We recommend completing your bookings soon, as it's peak season and availability may be limited :)"}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 tracking-wider">
          <InfoColumn 
            title="TRAVEL" 
            iconSrc="/images/travel.svg"
            items={travelInfo.travel} 
            iconWidth={100}
            animationVariant={travelAnimation}
          />
          <InfoColumn 
            title="STAY" 
            iconSrc="/images/stay.svg"
            items={travelInfo.stay} 
            iconWidth={90}
            animationVariant={stayAnimation}
          />
          <InfoColumn 
            title="AND MORE..." 
            iconSrc="/images/rental.svg"
            items={travelInfo.info} 
            iconWidth={120}
            animationVariant={rentalAnimation}
          />
        </div>
      </div>
    </div>
  )
}