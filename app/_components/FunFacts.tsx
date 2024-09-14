'use client'

import React, { useState, useEffect, useRef } from 'react'
import { motion, useAnimation } from 'framer-motion';
import Confetti from 'react-confetti';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

interface FunFactProps {
  icon: string;
  question: string;
  options: [string, string];
  correctAnswer: string;
  detailedAnswer: string;
}

const FunFact: React.FC<FunFactProps> = ({ icon, question, options, correctAnswer, detailedAnswer }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showConfetti, setShowConfetti] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleClick = (option: string) => {
    if (isFlipped) {
      // Delay resetting the selectedAnswer until after the flip animation
      setTimeout(() => {
        setSelectedAnswer(null);
        setShowConfetti(false);
      }, 300);
      setIsFlipped(false);
    } else {
      setSelectedAnswer(option);
      setIsFlipped(true);
      if (option === correctAnswer) {
        setShowConfetti(true);
        setTimeout(() => setShowConfetti(false), 3000); // Stop confetti after 3 seconds
      }
    }
  };

  return (
    <div ref={cardRef} className="w-full aspect-square perspective relative">
      {showConfetti && cardRef.current && (
        <Confetti
          width={cardRef.current.offsetWidth}
          height={cardRef.current.offsetHeight}
          recycle={false}
          numberOfPieces={50}
          style={{ position: 'absolute', top: 0, left: 0 }}
        />
      )}
      <motion.div 
        className="w-full h-full relative preserve-3d cursor-pointer"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="absolute w-full h-full bg-white border-2 border-dusty-blue-800 rounded-lg p-2 md:p-4 flex flex-col items-center justify-between text-black backface-hidden">
          <div className="text-2xl md:text-4xl mb-1 md:mb-2">{icon}</div>
          <div className="text-center text-xs md:text-sm lg:text-base tracking-wider h-14 md:h-16 flex items-center overflow-hidden">
            <div className="line-clamp-2">{question}</div>
          </div>
          <div className="flex flex-col space-y-1 md:space-y-2 w-full mt-1 md:mt-2">
            {options.map((option, index) => (
              <button
                key={index}
                className="bg-dusty-blue-100 hover:bg-dusty-blue-200 text-dusty-blue-800 text-xs md:text-sm py-1 md:py-2 px-2 md:px-4 rounded-md transition-colors duration-200"
                onClick={() => handleClick(option)}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
        <div 
          className="absolute w-full h-full bg-dusty-blue-800 rounded-lg p-2 md:p-4 flex flex-col items-center justify-center text-white backface-hidden" 
          style={{ transform: 'rotateY(180deg)' }}
          onClick={() => handleClick('')}
        >
          <div className="text-center text-sm md:text-lg tracking-wider mb-1 md:mb-2">
            {selectedAnswer === correctAnswer ? '✅ Correct!' : '❌ Oops!'}
          </div>
          <div className="text-center text-xs md:text-sm lg:text-base tracking-wider">{detailedAnswer}</div>
        </div>
      </motion.div>
    </div>
  )
}

export default function FunFacts() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const dropAnimation = {
    hidden: { y: -200, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1, 
      transition: { 
        duration: 0.8, 
        ease: 'easeOut',
        delay: 0.2 // Add a slight delay for a more natural feel
      } 
    },
  };

  const facts: FunFactProps[] = [
    {
      icon: '🏙',
      question: 'WHERE DID WE MEET?',
      options: ['BENGALURU', 'VADAVALLI'],
      correctAnswer: 'BENGALURU',
      detailedAnswer: 'We met in Bengaluru.'
    },
    {
      icon: '✉️',
      question: 'HOW LONG HAVE WE KNOWN EACH OTHER?',
      options: ['6 MONTHS', '6 YEARS'],
      correctAnswer: '6 YEARS',
      detailedAnswer: 'Friends for the first 2 years and a little more for the last 4 year.'
    },
    {
      icon: '🍔',
      question: 'FAVOURITE SPOT IN BANGALORE',
      options: ['MOPLAHS', 'MANIS'],
      correctAnswer: 'MOPLAHS',
      detailedAnswer: 'Moplahs and their manga curry are to die for!'
    },
    {
      icon: '🥥',
      question: 'FAVOURITE SPOT IN GOA',
      options: ['THALASSA', 'DONUT AFFAIR'],
      correctAnswer: 'DONUT AFFAIR',
      detailedAnswer: 'A little cafe called Donut Affair for their cold coffees and yummy donuts 🍩!'
    },
  ];

  return (
    <div ref={ref} className="h-full bg-white text-dusty-blue-600 flex flex-col md:flex-row items-center justify-start md:justify-center p-4">
      <div className="w-full md:w-1/2 md:order-2 md:pl-8 flex items-center justify-center mb-8 md:mb-0">
        <div className="relative">
          <motion.div
            initial="hidden"
            animate={controls}
            variants={dropAnimation}
          >
            <Image
              src="/images/mills.svg"
              width={100}
              height={100}
              alt="Mills illustration"
              className="absolute w-15 right-[-48px] top-[-20px] md:top-[-105px] md:right-[-18px] md:w-40"
            />
          </motion.div>
          <h2 className="text-5xl md:text-8xl text-center font-light tracking-wider">
            SOME FUN<br/> FACTS ABOUT<br/> US
          </h2>
          <motion.div
            initial="hidden"
            animate={controls}
            variants={dropAnimation}
          >
            <Image
              src="/images/glen.svg"
              width={100}
              height={100}
              alt="Glen illustration"
              className="absolute w-12 bottom-[-23px] -left-1 md:bottom-[-49px] md:right-[24px] md:w-24"
            />
          </motion.div>
        </div>
      </div>
      <div className="w-full md:w-1/2 md:order-1 max-w-md">
        <div className="grid grid-cols-2 gap-4">
          {facts.map((fact, index) => (
            <FunFact key={index} {...fact} />
          ))}
        </div>
        <p className="text-center text-lg mt-4 text-dusty-blue-600 italic">Click an option to reveal the answer!</p>
      </div>
    </div>
  )
}