import React from 'react'
import Navbar from './_components/Navbar'
import Hero from './_components/Hero'
import FunFacts from './_components/FunFacts'
import WeddingTimeline from './_components/WeddingTimeline'
import RSVPSection from './_components/RSVPSection'
import TravelAndStay from './_components/TravelAndStay'
import Note from './_components/Note'
import Footer from './_components/Footer'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-800">
      <Navbar />
      <main className="flex-grow">
        <section id="hero" className="section h-screen pt-16">
          <Hero />
        </section>
        <section id="fun-facts" className="section min-h-screen pt-16">
          <FunFacts />
        </section>
        <section id="wedding-timeline" className="section min-h-screen pt-16">
          <WeddingTimeline />
        </section>
        <section id="rsvp" className="section min-h-screen pt-16">
          <RSVPSection />
        </section>
        <section id="travel" className="section min-h-screen pt-16 travel-section">
          <TravelAndStay />
        </section>
        <section id="note" className="section min-h-screen pt-16">
          <Note />
        </section>
      </main>
    </div>
  )
}