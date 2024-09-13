'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion';
import Image from 'next/image';

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
          <div className="text-center text-sm md:text-xl tracking-wider">{question}</div>
        </div>
        <div className="absolute w-full h-full bg-dusty-blue-800 rounded-lg p-4 flex flex-col items-center justify-center text-white backface-hidden" style={{ transform: 'rotateY(180deg)' }}>
          <div className="text-center md:text-xl tracking-wider">{answer}</div>
        </div>
      </motion.div>
    </div>
  )
}

export default function FunFacts() {
  const facts = [
    { icon: '🏙', question: 'WHERE DID WE MEET?', answer: 'BENGALURU' },
    { icon: '✉️', question: 'HOW LONG HAVE WE KNOWN EACH OTHER', answer: '4 YEARS & COUNTING' },
    { icon: '🍔', question: 'FAVOURITE SPOT IN BANGALORE', answer: 'MOPLAHS' },
    { icon: '🥥', question: 'FAVOURITE SPOT IN GOA', answer: 'A LITTLE CAFE CALLED DONUT AFFAIR 🍩' },
  ]

  return (
    <div className="h-full bg-white text-dusty-blue-600 flex flex-col md:flex-row items-center justify-center p-4">
      <div className="w-full md:w-1/2 md:order-2 md:pl-8 flex items-center justify-center mb-8 md:mb-0">
        <div className="relative">
          <Image
            src="/images/mills.svg"
            width={100}
            height={100}
            alt="Mills illustration"
            className="absolute top-[-105px] right-[-18px] w-40"
          />
          <h2 className="text-4xl md:text-8xl text-center font-light tracking-wider">
            SOME FUN<br/> FACTS ABOUT<br/> US
          </h2>
          <Image
            src="/images/glen.svg"
            width={100}
            height={100}
            alt="Glen illustration"
            className="absolute bottom-[-49px] right-[24px] w-24"
          />
        </div>
      </div>
      <div className="w-full md:w-1/2 md:order-1 max-w-md">
        <div className="grid grid-cols-2 gap-2">
          {facts.map((fact, index) => (
            <FunFact key={index} {...fact} />
          ))}
        </div>
        <p className="text-center text-lg mt-2 text-dusty-blue-600 italic">Hover over me to reveal the answer</p>
      </div>
    </div>
  )
}