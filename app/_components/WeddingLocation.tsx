'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'

interface LocationCardProps {
  icon: string
  title: string
  link: string
  iconWidth?: number
  iconHeight?: number
  showFlower?: boolean
  delay?: number
}

const LocationCard: React.FC<LocationCardProps> = ({ icon, title, link, iconWidth = 64, iconHeight = 64, showFlower = false, delay = 0 }) => {
  const cardControls = useAnimation()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  useEffect(() => {
    if (inView) {
      console.log(`Card "${title}" is in view`)
      cardControls.start('visible')
    }
  }, [cardControls, inView, title])

  const cardVariants = {
    hidden: { rotateX: 90 },
    visible: { 
      rotateX: 0,
      transition: { 
        duration: 0.8, 
        delay,
        ease: [0.6, 0.05, -0.01, 0.9] 
      }
    }
  }

  return (
    <Link href={link} target="_blank" rel="noopener noreferrer">
      <motion.div 
        ref={ref}
        initial="hidden"
        animate={cardControls}
        variants={cardVariants}
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
}

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

export default function WeddingLocation() {
  return (
    <div className="h-full bg-white text-dusty-blue-800 flex flex-col md:flex-row items-center justify-start md:justify-center p-4 px-6">
      <div className="w-full md:w-1/2 mb-8 md:mb-0">
        <h2 className="text-5xl md:text-9xl text-center font-light tracking-wider relative">
          THE<br/> WEDDIN
          <span className="relative">
            G
            <motion.div
              initial="initial"
              animate="animate"
              variants={floatingFlowerVariants}
              style={{ originY: 0.5 }}
              className="absolute top-[20px] left-0 w-[30px] h-[30px]"
            >
              <motion.div
                animate={{
                  rotate: [0, -10, 8, -5, 3, 0],
                }}
                transition={{
                  duration: 3.5,
                  times: [0, 0.2, 0.4, 0.6, 0.8, 1],
                  ease: "easeInOut",
                }}
              >
                <Image
                  src="/images/text-flower.svg"
                  alt="Decorative flower"
                  width={30}
                  height={30}
                  className="w-full h-full"
                />
              </motion.div>
            </motion.div>
          </span>
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
            delay={0.2}
          />
          <LocationCard 
            icon="/images/arch.svg"
            title="Green Amaze, Margao"
            link="https://maps.app.goo.gl/HmFZX5qUGH367Nkz6"
            iconWidth={80}
            iconHeight={80}
            showFlower={true}
            delay={0.6}
          />
        </div>
      </div>
    </div>
  )
}