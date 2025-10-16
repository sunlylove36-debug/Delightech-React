import LanguageSwitcher from './LanguageSwitcher';
import { useTranslation } from "react-i18next";
import React from "react";

const getFeatures = (t) => [
  {
    icon: "https://img.icons8.com/fluency/48/000000/add.png",
    title: t("easymain", { ns:"features" }),
    description: t("easy", { ns:"features" }),
    bg: "bg-purple-50",
  },
  {
    icon: "https://img.icons8.com/fluency/48/000000/alarm-clock.png",
    title: t("fastmain", { ns:"features" }),
    description: t("fast", { ns:"features" }),
    bg: "bg-purple-100",
  },
  {
    icon: "https://img.icons8.com/fluency/48/000000/shield.png",
    title: t("securemain", { ns:"features" }),
    description: t("secure", { ns:"features" }),
    bg: "bg-emerald-50",
  },
  {
    icon: "https://img.icons8.com/fluency/48/000000/technical-support.png",
    title: t("helpfullmain", { ns:"features" }),
    description: t("helpfull", { ns:"features" }),
    bg: "bg-cyan-50",
  },
];

const Features = () => {
  const { t } = useTranslation(["features"]);
  const features = getFeatures(t);
  
  return (
    <section className="py-20 px-6 lg:px-20 text-center bg-white dark:bg-gray-800 transition-colors duration-300" id="features">
      <div className="max-w-6xl mx-auto text-white text-center mb-12">
        <h2 className="text-blue-600 font-semibold uppercase">{t("features", { ns:"features" })}</h2>
        <h3 className="md:text-4xl font-bold text-dark text-center mb-6 text-lg  dark:text-white"><span className="text-blue-500"> {t("ourfeatures", { ns:"features" })} </span>{t("span", { ns:"features" })}</h3>
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