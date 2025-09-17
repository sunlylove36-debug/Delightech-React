// src/components/Features.jsx
import React from "react";

const features = [
  {
    icon: "https://img.icons8.com/fluency/48/000000/add.png",
    title: "Easy",
    description:
      "Apply loan with no hassle and repay anytime and anywhere with our smart mobile app on your mobile phone.",
    bg: "bg-purple-50",
  },
  {
    icon: "https://img.icons8.com/fluency/48/000000/alarm-clock.png",
    title: "Fast",
    description:
      "Smooth, seamless, and simple procedures. Get result instantly on your device.",
    bg: "bg-purple-100",
  },
  {
    icon: "https://img.icons8.com/fluency/48/000000/shield.png",
    title: "Secure",
    description:
      "We protect your personal and private information with our secure technology."  ,
    bg: "bg-emerald-50",
  },
  {
    icon: "https://img.icons8.com/fluency/48/000000/technical-support.png",
    title: "Helpful",
    description:
      "Our friendly teams are ready to respond to your questions and provide solutions.",
    bg: "bg-cyan-50",
  },
];

const Features = () => {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-blue-600 font-semibold uppercase">Features</h2>
        <h3 className="text-3xl font-bold py-3 text-gray-800"><span className="text-blue-500">OUR </span> FEATURE</h3>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`${feature.bg} p-6 rounded-2xl shadow-md text-center hover:scale-105 transition`}
          >
            <div className="flex justify-center mb-4">
              <img src={feature.icon} alt={feature.title} className="w-12 h-12" />
            </div>
            <h3 className="text-lg font-bold text-gray-800 mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;