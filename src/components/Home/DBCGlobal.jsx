'use client';

import React, { useState } from 'react';
import Marquee from 'react-fast-marquee';

export default function PlacementCardsSection() {
  const cardGradientStyle = {
    background:
      'radial-gradient(120% 90% at 80% 6%, rgba(246, 180, 0, .18), transparent 55%), radial-gradient(120% 100% at 0% 100%, rgba(106, 28, 110, .1), transparent 55%), linear-gradient(180deg, #fffdf8 0%, #cc60ff 100%)',
  };

  // =========================================================
  // CAREER SUCCESS DATA
  // =========================================================

  const careerData = [
    { image: '/images/B1.webp' },
    { image: '/images/B2.webp' },
    { image: '/images/B3.webp' },
    { image: '/images/B4.webp' },
    { image: '/images/B5.webp' },
    { image: '/images/B6.webp' },
    { image: '/images/B7.webp' },
    { image: '/images/B8.webp' },
    { image: '/images/B9.webp' },
  ];

  // =========================================================
  // STARTUP SUCCESS DATA
  // =========================================================

  const startupData = [
    { image: '/images/B10.webp' },
    { image: '/images/B11.webp' },
    { image: '/images/B12.webp' },
    { image: '/images/B13.webp' },
    { image: '/images/B14.webp' },
    { image: '/images/B15.webp' },
    { image: '/images/B16.webp' },
    { image: '/images/B17.webp' },
  ];

  // =========================================================
  // VIDEO DATA
  // =========================================================

  const videosData = [
    {
      title: 'DGU Placements 2026',
      desc: '₹40 LPA Highest Package! Listen to our students share their real-world experiences.',
      youtubeId: 'dQw4w9WgXcQ',
    },
    {
      title: 'Alumni Speaks - Abhishek Halder',
      desc: "Discover how campus life shaped Abhishek's journey towards career success.",
      youtubeId: '3JZ_D3ELwOQ',
    },
  ];

  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  // =========================================================
  // VIDEO NAVIGATION
  // =========================================================

  const handlePrevVideo = () => {
    setCurrentVideoIndex((prev) => (prev === 0 ? videosData.length - 1 : prev - 1));
  };

  const handleNextVideo = () => {
    setCurrentVideoIndex((prev) => (prev === videosData.length - 1 ? 0 : prev + 1));
  };

  // =========================================================
  // MARQUEE MASK STYLE
  // =========================================================

  const marqueeMaskStyle = {
    WebkitMaskImage: 'linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)',

    maskImage: 'linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)',

    WebkitMaskRepeat: 'no-repeat',
    maskRepeat: 'no-repeat',

    WebkitMaskSize: '100% 100%',
    maskSize: '100% 100%',
  };

  return (
    <section className="w-full bg-gray-50 px-2 py-6">
      <div className="w-full">
        <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3">
          {/* =====================================================
              CARD 1
              CAREER SUCCESS
          ====================================================== */}

          <div
            style={cardGradientStyle}
            className="flex min-h-[520px] flex-col justify-between overflow-hidden rounded-2xl py-[64px] lg:py-[88px]"
          >
            <div>
              {/* Small Heading */}

              <p className="mb-1 text-center text-xs font-medium tracking-widest text-[#2a1430]">
                DBS Global University
              </p>

              {/* Main Heading */}

              <h3 className="mb-6 text-center text-[20px] lg:text-[26px] font-[700] text-[#131d3b]">
                Career Success in Higher Education
              </h3>

              {/* =================================================
                  MARQUEE
              ================================================== */}

              <div className="pt-4 lg:pt-6">
                <div className="relative w-full overflow-hidden" style={marqueeMaskStyle}>
                  <Marquee pauseOnHover={true} speed={40} direction="right" gradient={false}>
                    {careerData.map((item, index) => (
                      <div
                        key={index}
                        className="dbc-marquee-card mx-3 flex lg:h-[390px] h-[340px] w-[280px] lg:w-[300px] shrink-0 flex-col justify-between overflow-hidden rounded-2xl bg-white lg:h-[424px] lg:w-[339px]"
                      >
                        <img
                          src={item.image}
                          className="h-full w-full rounded-2xl object-cover"
                          alt={`Career Success ${index + 1}`}
                        />
                      </div>
                    ))}
                  </Marquee>
                </div>
              </div>
            </div>
          </div>

          {/* =====================================================
              CARD 2
              STARTUP & ENTREPRENEURIAL SUCCESS
          ====================================================== */}

          <div
            style={cardGradientStyle}
            className="flex min-h-[520px] flex-col justify-between overflow-hidden rounded-2xl py-[64px] lg:py-[88px]"
          >
            <div>
              {/* Small Heading */}

              <p className="mb-1 text-center text-xs font-medium tracking-widest text-[#2a1430]">
                DBS Global University
              </p>

              {/* Main Heading */}

              <h3 className="mb-6 text-center text-[20px] lg:text-[26px] font-[700] text-[#131d3b]">
                Startup & Entrepreneurial Success
              </h3>

              {/* =================================================
                  MARQUEE
              ================================================== */}

              <div className="pt-4 lg:pt-6">
                <div className="relative w-full overflow-hidden" style={marqueeMaskStyle}>
                  <Marquee pauseOnHover={true} speed={45} direction="right" gradient={false}>
                    {startupData.map((item, index) => (
                      <div
                        key={index}
                        className="dbc-marquee-card mx-3 flex lg:h-[390px] h-[340px] w-[280px] lg:w-[300px] shrink-0 flex-col justify-between overflow-hidden rounded-2xl bg-white lg:h-[424px] lg:w-[339px]"
                      >
                        <img
                          src={item.image}
                          className="h-full w-full rounded-2xl object-cover"
                          alt={`Startup Success ${index + 1}`}
                        />
                      </div>
                    ))}
                  </Marquee>
                </div>
              </div>
            </div>
          </div>

          {/* =====================================================
              CARD 3
              PLACEMENT SUCCESS VIDEOS
          ====================================================== */}

          <div style={cardGradientStyle} className="flex min-h-[520px] flex-col rounded-2xl p-6 pt-[64px] lg:pt-[88px]">
            <div>
              {/* Small Heading */}

              <p className="mb-1 text-center text-xs font-medium tracking-widest text-[#2a1430]">
                DBS Global University
              </p>

              {/* Main Heading */}

              <h3 className="mb-10 text-center text-[20px] lg:text-[26px] font-[700] text-[#131d3b]">
                Placement Success Videos
              </h3>

              {/* =================================================
                  YOUTUBE VIDEO
              ================================================== */}

              <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-black shadow-lg">
                <iframe
                  className="h-full w-full"
                  src={`https://www.youtube.com/embed/${videosData[currentVideoIndex].youtubeId}`}
                  title={videosData[currentVideoIndex].title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>

              {/* =================================================
                  VIDEO TITLE & DESCRIPTION
              ================================================== */}

              <div className="mt-4 text-center">
                <h4 className="font-bold text-[#131d3b]">{videosData[currentVideoIndex].title}</h4>

                <p className="mt-1 px-2 text-xs text-gray-600">{videosData[currentVideoIndex].desc}</p>
              </div>
            </div>

            {/* =================================================
                VIDEO NAVIGATION BUTTONS
            ================================================== */}

            <div className="mt-4 flex items-center justify-center gap-3">
              {/* Previous */}

              <button
                onClick={handlePrevVideo}
                className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-purple-900 text-lg font-bold text-white shadow transition-colors hover:bg-purple-800"
                aria-label="Previous Video"
              >
                ‹
              </button>

              {/* Next */}

              <button
                onClick={handleNextVideo}
                className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-purple-900 text-lg font-bold text-white shadow transition-colors hover:bg-purple-800"
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
