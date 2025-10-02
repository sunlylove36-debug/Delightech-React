import React from 'react'
import { useTranslation } from "react-i18next";
import mockup from '../assets/mockup (2).png';
export default function Solution(){
  const { t } = useTranslation(["solution"]);
  return (
    <section id="solution" className="py-20 px-6 lg:px-20 text-center bg-white dark:bg-gray-800 transition-colors duration-300">
      <div className="spae-t-280 md:flex items-center gap-8">
        <div className="md:w-5/12 md:w-7/12 flex-1/2 w-auto max-w-[700px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[600px] dropshadow-2xl">
          <img src={mockup} alt="phone" className="" />
        </div>
        <div className="md:w-7/12 flex-1/2 w-auto max-w-[600px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[600px] dropshadow-3xl">
        <p className="text-blue-600 font-3xl mb-2"> {t("solution", { ns: "solution" })} </p>

          <h3 className="text-2xl font-semibold mb-4"><span className="text-blue-500">{t("solutionsub", { ns: "solution" })}</span> {t("span", { ns: "solution" })}</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            {t("desc", { ns: "solution" })}


          </p>
          <a className="inline-block px-4 py-2 border border-white dark:text-white rounded">Read More</a>
        </div>
      </div>
    </section>
  )
}
