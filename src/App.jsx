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
import Career from './components/Career'
import { ThemeProvider } from '../src/Context/ThemeContext'

export default function App(){
  return (
    <ThemeProvider >
    <div className="min-h-screen light:bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <div className="min-h-screen light:bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 transition-colors duration-300">
          <Features />
          <Solution />
          <Steps />
          <News />
          <Videos />
          <Team />
          <Career />
        </div>
      </main>
      <Footer />
    </div>
    </ThemeProvider >
  )
}
