import React from 'react'
import mockup from '../assets/mockup (2).png';
export default function Solution(){
  return (
    <section id="solution" className="py-16">
      <div className="md:flex items-center gap-8">
        <div className="md:w-5/12 md:w-7/12 flex-1/2 w-auto max-w-[700px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[600px] dropshadow-2xl">
          <img src={mockup} alt="phone" className="" />
        </div>
        <div className="md:w-7/12 flex-1/2 w-auto max-w-[600px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[600px] dropshadow-3xl">
        <p className="text-blue-600 font-3xl mb-2"> DELIGHTECH CO.,LTD </p>

          <h3 className="text-2xl font-semibold mb-4"><span className="text-blue-500">Solution</span> For Your Financial Needs</h3>
          <p className="text-gray-700 mb-4">
            Established since 2018, We're a dynamic team joined by Cambodian who have long experience in financial technology 
            and core banking systems. We are developing a platform where unbanked people have more convenience instantly access 
            to financial products without complicated requirements wherever and anytime on any device with advanced technology 
            and security. Lastly they can build their credit and get better financial products and create a the ecosystem for 
            banks and serving their daily livelihood needs and connecting with each other on the internet rather than counters.


          </p>
          <a className="inline-block px-4 py-2 border border-blue-600 text-blue-600 rounded">Read More</a>
        </div>
      </div>
    </section>
  )
}
