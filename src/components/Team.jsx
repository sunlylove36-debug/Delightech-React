import React from "react";
import team from '../assets/3.png'
import Raksa from '../assets/10.png'
import kimsrun from '../assets/6.png'
import Chanda from '../assets/4.png'
import Pengsea from '../assets/5.png'
import Leapheng from '../assets/7.png'
import Krisna from '../assets/9.png'
import Kimsrong from '../assets/8.png'
import { useTranslation } from "react-i18next"

const getTeamMembers = (t) => [
  {
    name: "LAY Vila",
    role: "CEO & Founder",
    img: team,
    desc: t("layVilaDesc", { ns: "team" }),
  },
  {
    name: "PENG Reaksa",
    role: "Business Strategy Advisor",
    img: Raksa,
    desc: t("pengReaksaDesc", { ns: "team" }),
  },
  {
    name: "KE Chankrisna",
    role: "CTO",
    img: Krisna,
    desc: t("keChankrisnaDesc", { ns: "team" }),
  },
  {
    name: "CHUM Kmsrun",
    role: "Head Marketing",
    img: kimsrun,
    desc: t("chumKimsrunDesc", { ns: "team" }),
  },
  {
    name: "LY Chenda",
    role: "Head Operation & Customer Processing",
    img: Chanda,
    desc: t("lyChandaDesc", { ns: "team" }),
  },
  {
    name: "LY Pengsea",
    role: "Head of Finance",
    img: Pengsea,
    desc: t("lyPengseaDesc", { ns: "team" }),
  },
  {
    name: "METH Leapheng",
    role: " Head Human Resources",
    img: Leapheng,
    desc: t("methLeaphengDesc", { ns: "team" }),
  },
  {
    name: "TAING Kimsrorng",
    role: "Head of Collection",
    img: Kimsrong,
    desc: t("taingKimsrorngDesc", { ns: "team" }),
  },
];

const Team = () => {
  const { t } = useTranslation(["team"]);
  const teamMembers = getTeamMembers(t);
  
  return (
    <section className="py-20 px-6 lg:px-20 text-center bg-white dark:bg-gray-800 transition-colors duration-300" id="team">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-blue-600 font-semibold uppercase">{t("team", { ns: "team" })}</h2>
        <h3 className="text-3xl font-bold mt-2 dark:text-white">
          <span className="text-blue-500">{t("meet", { ns: "team" })}</span> {t("ourPowerTeam", { ns: "team" })}
        </h3>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mt-12">
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
              <h4 className="text-lg font-bold dark:text-dark">{member.name}</h4>
              <p className="text-sm text-gray-500 mb-3">{member.role}</p>

              {/* Description */}
              <p className="text-gray-600 text-sm">{member.desc}</p>

              {/* Link */}
              <a
                href="#"
                className="mt-3 text-blue-600 text-sm font-medium hover:underline"
              >
                {t("moreAbout", { ns: "team" })} {member.name.split(" ")[0]}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;