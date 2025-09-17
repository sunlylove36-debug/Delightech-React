import React from "react";
import team from '../assets/3.png'
import Raksa from '../assets/10.png'
import kimsrun from '../assets/6.png'
import Chanda from '../assets/4.png'
import Pengsea from '../assets/5.png'
import Leapheng from '../assets/7.png'
import Krisna from '../assets/9.png'
import Kimsrong from '../assets/8.png'
const teamMembers = [
  {
    name: "LAY Vila",
    role: "CEO & Founder",
    img: team,
    desc: "Vila has 10 years of experience in Collection/Operational financial industry and in years 2018-2024 with Fin-tech startup.",
  },
  {
    name: "PENG Reaksa",
    role: "Business Strategy Advisor",
    img: Raksa,
    desc: "Advises on strategic growth and business development opportunities.",
  },
  {
    name: "KE Chankrisna",
    role: "CTO",
    img: Krisna,
    desc: "Krisna has over 15 years of experience in IT and more than 10 years in banking system.",
  },
  {
    name: "CHUM Kmsrun",
    role: "Head Marketing",
    img: kimsrun,
    desc: "Kimsrun has 6 years of experience in Sales & Marketing. 4 years in charge as a supervisory leader in Delivery apps, Fintech industry, Branding and digital marketing.",
  },
  {
    name: "LY Chenda",
    role: "Head Operation & Customer Processing",
    img: Chanda,
    desc: "Chenda leads the Customer Services and Collection departments. She has 5 years of experience in the field. she has involved many departments in operations since our first start.",
  },
  {
    name: "LY Pengsea",
    role: "Head of Finance",
    img: Pengsea,
    desc: "With 4 years of experiences in financial industry, I have a keen interest in the financial field and thrilled to see how technology is revolutionizing the industry.",
  },
  {
    name: "METH Leapheng",
    role: " Head Human Resources",
    img: Leapheng,
    desc: "4 years experience in Construction and F&B Company with Managing on HRIS and Employee benefit management.",
  },
  {
    name: "TAING Kimsrorng",
    role: "Head of Collection",
    img: Kimsrong,
    desc: "Kimsrorng has more than 4 years of experience in financial industry, she has been involved in many departments in operation since our first start.",
  },

];

const Team = () => {
  return (
    <section className="py-16 bg-white" id="team">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-blue-600 font-semibold uppercase">Team</h2>
        <h3 className="text-3xl font-bold mt-2">
          Meet Our Power Team...
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-12">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center bg-white rounded-xl shadow-lg p-6 hover:shadow-blue-500/30 2xl transition"
            >
              {/* Profile Image */}
              <div className="w-32 h-32 rounded-full bg-yellow-400 flex items-center justify-center mb-4 overflow-hidden">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Name & Role */}
              <h4 className="text-lg font-bold">{member.name}</h4>
              <p className="text-sm text-gray-500 mb-3">{member.role}</p>

              {/* Description */}
              <p className="text-gray-600 text-sm">{member.desc}</p>

              {/* Link */}
              <a
                href="#"
                className="mt-3 text-blue-600 text-sm font-medium hover:underline"
              >
                More About {member.name.split(" ")[0]}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;