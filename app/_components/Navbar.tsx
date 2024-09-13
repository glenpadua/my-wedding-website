'use client'

import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link'

const navItems = ['Home', 'Fun Facts', 'Wedding Timeline', 'RSVP', 'Travel & Stay', 'Note']

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home')
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.5 } // Trigger when 50% of the section is visible
    )

    document.querySelectorAll('.section').forEach((section) => {
      sectionObserver.observe(section)
    })

    return () => {
      sectionObserver.disconnect()
    }
  }, [])

  useEffect(() => {
    if (scrollContainerRef.current) {
      const activeElement = scrollContainerRef.current.querySelector(`[href="#${activeSection}"]`)
      if (activeElement) {
        activeElement.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' })
      }
    }
  }, [activeSection])

  const handleNavClick = (sectionId: string) => {
    setActiveSection(sectionId)
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center h-16">
          <div 
            ref={scrollContainerRef}
            className="flex space-x-4 sm:space-x-8 overflow-x-auto scrollbar-hide tracking-wider"
          >
            {navItems.map((item) => {
              const sectionId = item.toLowerCase().replace(' & ', '-').replace(' ', '-')
              return (
                <Link 
                  key={item}
                  href={`#${sectionId}`}
                  onClick={(e) => {
                    e.preventDefault()
                    handleNavClick(sectionId)
                  }}
                  className={`inline-flex items-center px-1 pt-1 border-b-2 text-md md:text-xl font-medium whitespace-nowrap transition duration-150 ease-in-out ${
                    activeSection === sectionId
                      ? 'border-dusty-blue-500 text-dusty-blue-700'
                      : 'border-transparent text-gray-500 hover:border-dusty-blue-300 hover:text-dusty-blue-700'
                  }`}
                >
                  {item}
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </nav>
  )
}