import React from 'react'

const steps = [
  {title:'Download App', desc:'Only 7min for filling application and what require to be prepare 1. National Identification Card 2. Personal Telephone Number 3. Income Proof Documents'},
  {title:'Quick Result', desc:'Keep monitoring and get a quick result on your mobile phone dashboard then its your turn to decide to accept a loan or not.'},
  {title:'Direct Transfer', desc:'Amount of disbursement will transfer directly to your pocket with our payment channels which next to you and countrywide less than 30min'},
  {title:'Repayment', desc:'You can choose payment option which fit with you and select variety of payment channel which available anywhere and next to you'},
]

export default function Steps(){
  return (
    <section id="steps" className="py-16">
      <h3 className="text-3xl font-bold py-3 text-gray-800 text-center"><span className="text-blue-500">HOW TO</span> PROCESS </h3>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {steps.map((s,idx)=>(
          <div key={idx} className="bg-gray-100/40 p-6 rounded-lg shadow-sm text-center">
            <div className="text-2xl font-bold mb-2">{idx+1}</div>
            <h4 className="font-semibold">{s.title}</h4>
            <p className="text-sm text-gray-600 mt-2">{s.desc}</p> 
          </div>
        ))}
      </div>
    </section>
  )
}
