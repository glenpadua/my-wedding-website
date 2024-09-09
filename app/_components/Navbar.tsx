'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'

const navItems = ['Home', 'Fun Facts', 'Wedding Timeline']

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('Hero')

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('.section')
      const scrollPosition = window.scrollY
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top + window.scrollY
        const sectionHeight = section.clientHeight

        if (scrollPosition >= sectionTop - sectionHeight / 3) {
          setActiveSection(section.id)
        }
      })
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="hidden sm:flex sm:space-x-8">
            {navItems.map((item) => (
              <Link 
                key={item}
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition duration-150 ease-in-out ${
                  activeSection === item.toLowerCase().replace(' ', '-')
                    ? 'border-dusty-blue-500 text-dusty-blue-700'
                    : 'border-transparent text-gray-500 hover:border-dusty-blue-300 hover:text-dusty-blue-700'
                }`}
              >
                {item}
              </Link>
            ))}
          </div>
          {/* Mobile menu button */}
          <div className="flex items-center sm:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              type="button" 
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-dusty-blue-500" 
              aria-controls="mobile-menu" 
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {/* Icon for menu open/close */}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      {isOpen && (
        <div className="sm:hidden" id="mobile-menu">
          <div className="pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                className={`block pl-3 pr-4 py-2 border-l-4 text-base font-medium transition duration-150 ease-in-out ${
                  activeSection === item.toLowerCase().replace(' ', '-')
                    ? 'border-dusty-blue-500 text-dusty-blue-700 bg-dusty-blue-50'
                    : 'border-transparent text-gray-500 hover:text-dusty-blue-700 hover:bg-dusty-blue-50 hover:border-dusty-blue-300'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}