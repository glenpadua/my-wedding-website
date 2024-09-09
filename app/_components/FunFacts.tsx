'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion';

interface FunFactProps {
  icon: string;
  question: string;
  answer: string;
}

const FunFact: React.FC<FunFactProps> = ({ icon, question, answer }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className="w-full aspect-square perspective"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <motion.div 
        className="w-full h-full relative preserve-3d"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="absolute w-full h-full bg-white border-2 border-dusty-blue-800 rounded-lg p-4 flex flex-col items-center justify-center text-black backface-hidden">
          <div className="text-4xl mb-2">{icon}</div>
          <div className="text-center text-sm md:text-xl">{question}</div>
        </div>
        <div className="absolute w-full h-full bg-dusty-blue-800 rounded-lg p-4 flex flex-col items-center justify-center text-white backface-hidden" style={{ transform: 'rotateY(180deg)' }}>
          <div className="text-center md:text-xl">{answer}</div>
        </div>
      </motion.div>
    </div>
  )
}

export default function FunFacts() {
  const facts = [
    { icon: '🏙️', question: 'WHERE DID WE MEET?', answer: 'BLR' },
    { icon: '✉️', question: 'HOW LONG HAVE WE KNOWN EACH OTHER', answer: '4 YEARS & COUNTING' },
    { icon: '🍔', question: 'FAVOURITE SPOT IN BLR', answer: 'FAVOURITE SPOT IN BLR' },
    { icon: '🥥', question: 'FAVOURITE SPOT IN GOA', answer: 'A LITTLE CAFE CALLED DONUT AFFAIR :D' },
  ]

  return (
    <div className="h-full bg-white text-dusty-blue-600 flex flex-col md:flex-row items-center justify-center p-4">
      <div className="w-full md:w-1/2 max-w-md mb-8 md:mb-0">
        <div className="grid grid-cols-2 gap-2">
          {facts.map((fact, index) => (
            <FunFact key={index} {...fact} />
          ))}
        </div>
      </div>
      <div className="w-full md:w-1/2 md:pl-8 flex items-center justify-center">
        <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-center">
          SOME FUN FACTS ABOUT US
        </h2>
      </div>
    </div>
  )
}