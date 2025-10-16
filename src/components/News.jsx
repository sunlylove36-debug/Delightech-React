import React from "react";
import New1 from "../assets/luyleun1.png";
import { useTranslation } from "react-i18next";
const News = () => {
  const { t } = useTranslation(["news"]);
  const getNews = () => [
    {
      title: t("news1Title", { ns: "news" }),
      date: t("news1Date", { ns: "news" }),
      description: t("news1Desc", { ns: "news" }),
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy7V2unhRuKohNcFt69h8b_cy8Bw7beXJOFA&s",
    },
    {
      title: t("news2Title", { ns: "news" }),
      date: t("news2Date", { ns: "news" }),
      description: t("news2Desc", { ns: "news" }),
      image: New1,
    },
    {
      title: t("news3Title", { ns: "news" }),
      date: t("news3Date", { ns: "news" }),
      description: t("news3Desc", { ns: "news" }),
      image: "https://www.khmertimeskh.com/wp-content/uploads/2022/01/32442.jpg",
    },
  ];
  const newsItems = getNews();

  return (
    <section className="py-20 px-6 lg:px-20 text-center bg-white dark:bg-gray-800 transition-colors duration-300" id="news">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-blue-600 font-semibold uppercase">{t("news", { ns:"news" })}</h2>
          <h3 className="md:text-4xl font-bold text-dark text-center mb-6 text-lg  dark:text-white">
            {t("subnews", { ns:"news" })}
          </h3>
          <p className="mt-2 text-gray-600">
            {t("descnews", { ns:"news" })}
          </p>
        </div>

        {/* News Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {newsItems.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <p className="text-sm text-gray-500">{item.date}</p>
                <h4 className="text-xl font-bold text-gray-800 mt-2">
                  {item.title}
                </h4>
                <p className="mt-2 text-gray-600">{item.description}</p>
                <a
                  href="#"
                  className="text-blue-600 font-semibold mt-3 inline-block hover:underline"
                >
                  {t("readMore", { ns: "news" })} →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;