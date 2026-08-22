"use client";

import React, { useState } from "react";
import Marquee from "react-fast-marquee";

export default function PlacementCardsSection() {
  const cardGradientStyle = {
    background:
      'radial-gradient(120% 90% at 80% 6%, rgba(246, 180, 0, .18), transparent 55%), radial-gradient(120% 100% at 0% 100%, rgba(106, 28, 110, .1), transparent 55%), linear-gradient(180deg, #fffdf8 0%, #cc60ff 100%)',
  };

  const careerData = [
    { image: "/images/A-1.webp" },
    { image: "/images/A-1.webp" },
  ];

  // Card 2 Data (Startup Success)
  const startupData = [
    { image: "/images/A-1.webp" },
    { image: "/images/A-1.webp" },
  ];

  // Card 3 Data (Videos)
  const videosData = [
    {
      title: "DGU Placements 2026",
      desc: "₹40 LPA Highest Package! Listen to our students share their real-world experiences.",
      youtubeId: "dQw4w9WgXcQ", // Replace with real YouTube Video ID
    },
    {
      title: "Alumni Speaks - Abhishek Halder",
      desc: "Discover how campus life shaped Abhishek's journey towards career success.",
      youtubeId: "3JZ_D3ELwOQ", // Replace with real YouTube Video ID
    },
  ];

  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const handlePrevVideo = () => {
    setCurrentVideoIndex((prev) =>
      prev === 0 ? videosData.length - 1 : prev - 1
    );
  };

  const handleNextVideo = () => {
    setCurrentVideoIndex((prev) =>
      prev === videosData.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section className="w-full px-2 py-6 bg-gray-50">
      <div className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

          {/* Card 1: Career Success with Marquee */}
          <div
            style={cardGradientStyle}
            className="rounded-2xl p-6 flex flex-col justify-between min-h-[520px] overflow-hidden"
          >
            <div>
              <p className="text-xs uppercase tracking-widest text-center text-gray-500 font-medium mb-1">
                DBS Global University
              </p>
              <h3 className="text-xl font-bold text-center text-slate-800 mb-6">
                Career Success in Higher Education
              </h3>

              <div className="py-4">
                <Marquee pauseOnHover={true} speed={40} gradient={false}>
                  {careerData.map((item, index) => (
                    <div
                      key={index}
                      className="w-56 h-72 bg-white rounded-2xl  mx-3 flex flex-col justify-between shrink-0"
                    >
                      <img src={item.image}  className="w-full h-full object-cover rounded-2xl" alt="" />
                    </div>
                  ))}
                </Marquee>
              </div>
            </div>
          </div>

          {/* Card 2: Startup Success with Marquee */}
          <div
            style={cardGradientStyle}
            className="rounded-2xl p-6 flex flex-col justify-between min-h-[520px] overflow-hidden"
          >
            <div>
              <p className="text-xs uppercase tracking-widest text-center text-gray-500 font-medium mb-1">
                DBS Global University
              </p>
              <h3 className="text-xl font-bold text-center text-slate-800 mb-6">
                Startup & Entrepreneurial Success
              </h3>

              <div className="py-4">
                <Marquee pauseOnHover={true} speed={45} direction="left" gradient={false}>
                  {startupData.map((item, index) => (
                    <div
                      key={index}
                      className="w-56 h-72 bg-white rounded-2xl  mx-3 flex flex-col justify-between shrink-0"
                    >
                      <img src={item.image} className="w-full h-full object-cover rounded-2xl" alt="" />
                    </div>
                  ))}
                </Marquee>
              </div>
            </div>
          </div>

          {/* Card 3: Placement Videos with Dynamic Carousel */}
          <div
            style={cardGradientStyle}
            className="rounded-2xl p-6 flex flex-col justify-between min-h-[520px]"
          >
            <div>
              <p className="text-xs uppercase tracking-widest text-center text-gray-500 font-medium mb-1">
                DBS Global University
              </p>
              <h3 className="text-xl font-bold text-center text-slate-800 mb-6">
                Placement Success Videos
              </h3>

              {/* Dynamic YouTube Video Embed */}
              <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-lg bg-black">
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${videosData[currentVideoIndex].youtubeId}`}
                  title={videosData[currentVideoIndex].title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>

              <div className="text-center mt-4">
                <h4 className="font-bold text-slate-800">
                  {videosData[currentVideoIndex].title}
                </h4>
                <p className="text-xs text-gray-600 mt-1 px-2">
                  {videosData[currentVideoIndex].desc}
                </p>
              </div>
            </div>

            {/* Video Change Buttons */}
            <div className="flex justify-center items-center gap-3 mt-4">
              <button
                onClick={handlePrevVideo}
                className="w-9 h-9 rounded-full bg-purple-900 text-white flex items-center justify-center text-lg font-bold shadow hover:bg-purple-800 transition-colors"
                aria-label="Previous Video"
              >
                ‹
              </button>
              <button
                onClick={handleNextVideo}
                className="w-9 h-9 rounded-full bg-purple-900 text-white flex items-center justify-center text-lg font-bold shadow hover:bg-purple-800 transition-colors"
                aria-label="Next Video"
              >
                ›
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}