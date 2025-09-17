import React from "react";

const videos = [
  { id: 1, url: "https://www.youtube.com/embed/yourVideoID1" },
  { id: 2, url: "https://www.youtube.com/embed/yourVideoID2" },
  { id: 3, url: "https://www.youtube.com/embed/yourVideoID3" },
  { id: 4, url: "https://www.youtube.com/embed/yourVideoID4" },
];

const VideoTutorials = () => {
  return (
    <section className="py-16 bg-white" id="videos">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-blue-600 font-semibold uppercase">Videos</h2>
        <h3 className="text-3xl md:text-4xl font-bold mt-2 mb-10">
          Video Tutorials
        </h3>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {videos.map((video) => (
            <div
              key={video.id}
              className="relative rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300"
            >
              <iframe
                className="w-full h-64 md:h-80"
                src={video.url}
                title={`Video ${video.id}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoTutorials;