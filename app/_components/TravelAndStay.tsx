'use client'

import React from 'react'
import { Plane, Home, Car, Train, Bus, Building, Hotel, Bike, LucideIcon } from 'lucide-react'
import { motion } from 'framer-motion'

interface InfoItemProps {
  title: string;
  description: string;
  Icon: LucideIcon;
}

const InfoItem: React.FC<InfoItemProps> = ({ title, description, Icon }) => (
  <motion.div 
    className="mb-6 p-4 bg-white/10 backdrop-blur-sm rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
    whileHover={{ scale: 1.05 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <div className="flex items-start">
      <div className="mr-3 text-dusty-blue-600"><Icon size={24} /></div>
      <div>
        <h3 className="text-xl font-serif text-dusty-blue-800 mb-1">{title}</h3>
        <p className="text-dusty-blue-700">{description}</p>
      </div>
    </div>
  </motion.div>
)

interface InfoColumnProps {
  title: string;
  Icon: LucideIcon;
  items: InfoItemProps[];
}

const InfoColumn: React.FC<InfoColumnProps> = ({ title, Icon, items }) => (
  <div className="mb-8 md:mb-0">
    <div className="flex items-center justify-center mb-4">
      <Icon size={48} className="text-dusty-blue-600" />
    </div>
    <h2 className="text-4xl font-serif text-dusty-blue-800 text-center mb-6">{title}</h2>
    {items.map((item, index) => (
      <InfoItem key={index} {...item} />
    ))}
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
      { title: "Nearest Airport", description: "Airport Name, Distance: X km, Taxi Available", Icon: Plane },
      { title: "Nearest Station", description: "Station Name, Distance: X km, Bus Available", Icon: Train },
      { title: "Nearest Bus Station", description: "Bus Station Name, Distance: X km, Local Transport", Icon: Bus },
    ],
    stay: [
      { title: "Hotels", description: "Luxury Hotel, Boutique Hotel, Budget Hotel", Icon: Building },
      { title: "Resorts", description: "Beach Resort, Spa Resort, Golf Resort", Icon: Hotel },
      { title: "Vacation Rentals", description: "Beachfront Villa, City Apartment, Country Cottage", Icon: Home },
    ],
    rentals: [
      { title: "Car Rentals", description: "Luxury Cars, Economy Cars, SUVs", Icon: Car },
      { title: "Bike Rentals", description: "Mountain Bikes, City Bikes, E-Bikes", Icon: Bike },
    ],
  }

  return (
    <div className="h-full bg-gradient-to-b from-white to-dusty-blue-100 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif tracking-widest text-dusty-blue-800 text-center mb-12">
          TRAVEL AND STAY
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <InfoColumn 
            title="Travel" 
            Icon={Plane}
            items={travelInfo.travel} 
          />
          <InfoColumn 
            title="Stay" 
            Icon={Home}
            items={travelInfo.stay} 
          />
          <InfoColumn 
            title="Rentals" 
            Icon={Car}
            items={travelInfo.rentals} 
          />
        </div>
      </div>
    </div>
  )
}