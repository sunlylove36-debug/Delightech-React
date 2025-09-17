import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Solution from './components/Solution'
import Steps from './components/Steps'
import News from './components/News'
import Videos from './components/Videos'
import Team from './components/Team'
import Footer from './components/Footer'

export default function App(){
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <div className="container mx-auto px-4">
          <Features />
          <Solution />
          <Steps />
          <News />
          <Videos />
          <Team />
        </div>
      </main>
      <Footer />
    </div>
  )
}
