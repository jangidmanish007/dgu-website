'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import DraggableMarquee from '@/components/ui/DraggableMarquee';

/* ─── Animation variants ────────────────────────────────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.14 } },
};

// =========================================================
// MAIN COMPONENT
// =========================================================

export default function DBCGlobal() {
  const cardGradientStyle = {
    background:
      'radial-gradient(120% 90% at 80% 6%, rgba(246, 180, 0, .18), transparent 55%), radial-gradient(120% 100% at 0% 100%, rgba(106, 28, 110, .1), transparent 55%), linear-gradient(180deg, #fffdf8 0%, #cc60ff 100%)',
  };

  // =========================================================
  // CAREER SUCCESS DATA
  // =========================================================

  const careerData = [
    { image: 'images/home/B1.webp' },
    { image: 'images/home/B2.webp' },
    { image: 'images/home/B3.webp' },
    { image: 'images/home/B4.webp' },
    { image: 'images/home/B5.webp' },
    { image: 'images/home/B6.webp' },
    { image: 'images/home/B7.webp' },
    { image: 'images/home/B8.webp' },
    { image: 'images/home/B9.webp' },
  ];

  // =========================================================
  // STARTUP SUCCESS DATA
  // =========================================================

  const startupData = [
    { image: 'images/home/B10.webp' },
    { image: 'images/home/B11.webp' },
    { image: 'images/home/B12.webp' },
    { image: 'images/home/B13.webp' },
    { image: 'images/home/B14.webp' },
    { image: 'images/home/B15.webp' },
    { image: 'images/home/B16.webp' },
    { image: 'images/home/B17.webp' },
  ];

  // =========================================================
  // VIDEO DATA
  // =========================================================

  const videosData = [
    {
      title: 'DGU Placements 2026',
      desc: '₹40 LPA Highest Package! Listen to our students share their real-world experiences and how the campus life has shaped their professional journeys.',
      youtubeId: 'ocr6F-IlbAI',
    },
    {
      title: 'Alumni Speaks - Abhishek Halder',
      desc: "Discover how campus life shaped Abhishek's journey towards career success.",
      youtubeId: '7lShPXk3Rys',
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

  return (
    <section className="w-full bg-gray-50 px-[16px] py-6 overflow-hidden">
      <div className="w-full">
        <motion.div
          className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.div
            variants={fadeUp}
            style={cardGradientStyle}
            className="flex md:min-h-[520px] flex-col overflow-hidden rounded-2xl py-[44px] md:py-[88px]"
          >
            <div>
              {/* Small Heading */}

              <p className="mb-1 text-center text-xs font-medium tracking-widest text-[#2a1430]">
                DBS Global University
              </p>

              <h3 className="md:mb-6 mb-3 text-center text-[20px] lg:text-[26px] font-[700] text-[#131d3b]">
                Career Success in Higher Education
              </h3>

              <div className="pt-3 md:pt-6">
                <DraggableMarquee
                  items={careerData}
                  speed={40}
                  direction="rtl"
                  mobileDirection="rtl"
                  renderItem={(item, index) => (
                    <div
                      key={index}
                      className="dbc-marquee-card sm:mx-3 mx-2 flex shrink-0 flex-col justify-between overflow-hidden rounded-2xl bg-white"
                    >
                      <img
                        src={process.env.NEXT_PUBLIC_IMG_PATH + item.image}
                        className="h-[250px] w-[260px] sm:h-[390px] sm:w-[300px] rounded-2xl object-cover pointer-events-none"
                        alt={`career-${index}`}
                        draggable={false}
                      />
                    </div>
                  )}
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            style={cardGradientStyle}
            className="flex md:min-h-[520px] flex-col overflow-hidden rounded-2xl py-[44px] md:py-[88px]"
          >
            <div className="px-4">
              {/* Small Heading */}
              <div>
                <p className="mb-1 text-center text-xs font-medium tracking-widest text-[#2a1430]">
                  DBS Global University
                </p>

                {/* Main Heading */}

                <h3 className="md:mb-6 mb-3 text-center text-[20px] lg:text-[26px] font-[700] text-[#131d3b]">
                  Startup & Entrepreneurial Success
                </h3>
              </div>
            </div>
            <div className="pt-3 md:pt-6">
              <DraggableMarquee
                items={startupData}
                speed={45}
                direction="rtl"
                mobileDirection="ltr"
                renderItem={(item, index) => (
                  <div
                    key={index}
                    className="dbc-marquee-card sm:mx-3 mx-2 flex shrink-0 flex-col justify-between overflow-hidden rounded-2xl bg-white"
                  >
                    <img
                      src={process.env.NEXT_PUBLIC_IMG_PATH + item.image}
                      className="h-[250px] w-[260px] sm:h-[390px] sm:w-[300px] rounded-2xl object-cover pointer-events-none"
                      alt={`startup-${index}`}
                      draggable={false}
                    />
                  </div>
                )}
              />
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            style={cardGradientStyle}
            className="flex md:min-h-[520px] flex-col rounded-2xl p-6 pt-[44px] lg:pt-[88px] lg:pb-6 pb-[44px]"
          >
            <div>
              {/* Small Heading */}

              <p className="mb-1 text-center text-xs font-medium tracking-widest text-[#2a1430]">
                DBS Global University
              </p>

              {/* Main Heading */}

              <h3 className="md:mb-10 mb-6 text-center text-[20px] lg:text-[26px] font-[700] text-[#131d3b]">
                Placement Success Videos
              </h3>

              <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-black shadow-lg">
                <iframe
                  className="h-full w-full"
                  src={`https://www.youtube.com/embed/${videosData[currentVideoIndex].youtubeId}`}
                  title={videosData[currentVideoIndex].title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>

              <div className="mt-4 text-center">
                <h4 className="font-bold text-[#131d3b]">{videosData[currentVideoIndex].title}</h4>

                <p className="mt-1 px-2 text-sm text-gray-600">{videosData[currentVideoIndex].desc}</p>
              </div>
            </div>

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
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
