import React from 'react'
import { useTranslation } from "react-i18next";
import mockup from '../assets/poster.png';
export default function Solution(){
  const { t } = useTranslation(["career"]);
  return (
    <section id="solution" className="py-20 px-6 lg:px-20 text-center bg-white dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-44">
        <div className="md:w-5/12 md:w-7/12 flex-1/2 w-auto max-w-[700px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[300px] shadow">
          <img src={mockup} alt="phone" className="" />
        </div>
        <div className="md:w-7/12 flex-1/2 w-auto max-w-[600px] sm:max-w-[600px] md:max-w-[500px] lg:max-w-[600px] dropshadow-3xl">
        <p className="text-blue-600 font-3xl mb-2 text-center items-center"> {t("career", { ns:"career" })}</p>

          <h3 className="text-2xl item-center font-semibold mb-4 text-center"><span className="text-blue-500">{t("careersub", { ns:"career" })}</span> {t("span", { ns:"career" })}</h3>
          <p className="text-gray mb-4 pt-6 text-justify">
            {t("desccareer", { ns:"career" })}
            
          </p>
          <a className="inline-block px-4 py-2 border border-blue-600 text-blue-600 rounded item-center">{t("upload", { ns:"career" })}</a>
        </div>
      </div>
    </section>
  )
}
