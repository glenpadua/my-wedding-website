import React from 'react'
import Navbar from './_components/Navbar'
import Hero from './_components/Hero'
import FunFacts from './_components/FunFacts'
import WeddingTimeline from './_components/WeddingTimeline'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-800">
      <Navbar />
      <main className="flex-grow">
        <section id="hero" className="section">
          <Hero />
        </section>
        <section id="fun-facts" className="section">
          <FunFacts />
        </section>
        <section id="wedding-timeline" className="section">
          <WeddingTimeline />
        </section>
        {/* Add more sections as needed */}
      </main>
    </div>
  )
}