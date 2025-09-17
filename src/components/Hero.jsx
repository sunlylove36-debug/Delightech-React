import React from 'react'
import mockup from '../assets/mockup (1).png';
export default function Hero(){
  return (
    <section className="bg-gradient-to-r from-blue-600 to-blue-500 text-white py-20">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-6/12">
          <h1 className="text-3xl flex justify md:text-5xl font-bold leading-tight">Achieve Financial &amp; Freedom Stability</h1>
          <p className="mt-4 text-lg">Cash out on demand instantly with LUYLEUN Mobile App Download now to get loan up to $1000 within 1 hour. Many special offer, suitable fee and various repayment methods.</p>
          
        </div>
        <div className="md:w-6/12 flex justify-center">
          <div className="flex-1/2 w-auto max-w-[700px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[600px] dropshadow-2xl">
            <img src={mockup} alt="app mock" className="w-full" />
          </div>
        </div>
      </div>
    </section>
  )
}
