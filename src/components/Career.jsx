import React from 'react'
import mockup from '../assets/poster.png';
export default function Solution(){
  return (
    <section id="solution" className="py-20 px-6 lg:px-20 text-center bg-white dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-44">
        <div className="md:w-5/12 md:w-7/12 flex-1/2 w-auto max-w-[700px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[300px] shadow">
          <img src={mockup} alt="phone" className="" />
        </div>
        <div className="md:w-7/12 flex-1/2 w-auto max-w-[600px] sm:max-w-[600px] md:max-w-[500px] lg:max-w-[600px] dropshadow-3xl">
        <p className="text-blue-600 font-3xl mb-2 text-center items-center"> Join Us..</p>

          <h3 className="text-2xl item-center font-semibold mb-4 text-center"><span className="text-blue-500">Update</span> Your Career Now..</h3>
          <p className="text-gray mb-4 pt-6 text-justify">
            Established since 2018, We're a dynamic team joined by Cambodian who have long experience in financial technology. 
            
          </p>
          <a className="inline-block px-4 py-2 border border-blue-600 text-blue-600 rounded item-center">Upload Resume</a>
        </div>
      </div>
    </section>
  )
}
