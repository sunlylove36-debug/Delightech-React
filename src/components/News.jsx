import React from "react";
import New1 from "../assets/luyleun1.png";
const News = () => {
  const News = [
    {
      title: "Company Expands Services",
      date: "September 10, 2025",
      description:
        "We are excited to announce the expansion of our services across Cambodia to better serve citizens’ financial needs.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy7V2unhRuKohNcFt69h8b_cy8Bw7beXJOFA&s",
    },
    {
      title: "New Partnership Announced",
      date: "August 25, 2025",
      description:
        "Our company is partnering with local businesses to empower SMEs with new digital solutions.",
      image:New1,
    },
    {
      title: "Award Recognition",
      date: "July 15, 2025",
      description:
        "We are proud to receive recognition for excellence in innovation and customer service.",
      image: "https://www.khmertimeskh.com/wp-content/uploads/2022/01/32442.jpg",
    },
  ];

  return (
    <section className="py-16 bg-gray-50" id="news">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-blue-600 font-semibold uppercase">News</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-800">
            Latest Updates & Announcements
          </h3>
          <p className="mt-2 text-gray-600">
            Stay up to date with our company’s news and updates.
          </p>
        </div>

        {/* News Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {News.map((item, index) => (
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
                  Read More →
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