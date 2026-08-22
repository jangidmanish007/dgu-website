'use client';

import React, { useState, useRef, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';

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
// INFINITE DRAG MARQUEE HOOK
// Continuous left-to-right scroll with mouse + touch drag
// =========================================================

function useInfiniteMarquee({ speed = 40, items }) {
  const trackRef = useRef(null);
  const animFrameRef = useRef(null);
  const offsetRef = useRef(0);
  const isDragging = useRef(false);
  const dragStartX = useRef(0);
  const dragStartOffset = useRef(0);
  const velocityRef = useRef(0);
  const lastDragX = useRef(0);
  const lastDragTime = useRef(0);
  const isPausedRef = useRef(false);

  // Duplicate items enough times so we always have content visible
  const cloneCount = 3;
  const clonedItems = [...items, ...items, ...items];

  const getTrackWidth = useCallback(() => {
    const track = trackRef.current;
    if (!track) return 0;
    // width of one set of items
    return track.scrollWidth / cloneCount;
  }, [cloneCount]);

  const applyTransform = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const singleWidth = getTrackWidth();
    // Keep offset in [0, singleWidth) for seamless loop (handles negative values too)
    if (singleWidth > 0) {
      offsetRef.current = ((offsetRef.current % singleWidth) + singleWidth) % singleWidth;
    }
    track.style.transform = `translateX(-${offsetRef.current}px)`;
  }, [getTrackWidth]);

  const animate = useCallback(() => {
    if (!isDragging.current && !isPausedRef.current) {
      // right direction: offset decreases (items move left → right visually)
      offsetRef.current -= speed / 60;
    } else if (!isDragging.current && isPausedRef.current) {
      // momentum glide after drag release
      if (Math.abs(velocityRef.current) > 0.1) {
        offsetRef.current += velocityRef.current;
        velocityRef.current *= 0.95; // friction
      }
    }
    applyTransform();
    animFrameRef.current = requestAnimationFrame(animate);
  }, [speed, applyTransform]);

  useEffect(() => {
    animFrameRef.current = requestAnimationFrame(animate);
    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [animate]);

  // ---- MOUSE EVENTS ----
  const onMouseDown = useCallback((e) => {
    isDragging.current = true;
    isPausedRef.current = true;
    dragStartX.current = e.clientX;
    dragStartOffset.current = offsetRef.current;
    lastDragX.current = e.clientX;
    lastDragTime.current = Date.now();
    velocityRef.current = 0;
    e.preventDefault();
  }, []);

  const onMouseMove = useCallback((e) => {
    if (!isDragging.current) return;
    const delta = dragStartX.current - e.clientX;
    offsetRef.current = dragStartOffset.current + delta;

    const now = Date.now();
    const dt = now - lastDragTime.current;
    if (dt > 0) {
      velocityRef.current = ((lastDragX.current - e.clientX) / dt) * 16; // scale to ~60fps
    }
    lastDragX.current = e.clientX;
    lastDragTime.current = now;
  }, []);

  const onMouseUp = useCallback(() => {
    if (!isDragging.current) return;
    isDragging.current = false;
    // Let momentum carry it; isPausedRef stays true until velocity dies
    // After momentum fades, resume auto-scroll
    const check = () => {
      if (Math.abs(velocityRef.current) < 0.2) {
        isPausedRef.current = false;
      } else {
        requestAnimationFrame(check);
      }
    };
    requestAnimationFrame(check);
  }, []);

  const onMouseLeave = useCallback(() => {
    if (isDragging.current) onMouseUp();
  }, [onMouseUp]);

  // ---- TOUCH EVENTS ----
  const onTouchStart = useCallback((e) => {
    isDragging.current = true;
    isPausedRef.current = true;
    dragStartX.current = e.touches[0].clientX;
    dragStartOffset.current = offsetRef.current;
    lastDragX.current = e.touches[0].clientX;
    lastDragTime.current = Date.now();
    velocityRef.current = 0;
  }, []);

  const onTouchMove = useCallback((e) => {
    if (!isDragging.current) return;
    const tx = e.touches[0].clientX;
    const delta = dragStartX.current - tx;
    offsetRef.current = dragStartOffset.current + delta;

    const now = Date.now();
    const dt = now - lastDragTime.current;
    if (dt > 0) {
      velocityRef.current = ((lastDragX.current - tx) / dt) * 16;
    }
    lastDragX.current = tx;
    lastDragTime.current = now;
    e.preventDefault();
  }, []);

  const onTouchEnd = useCallback(() => {
    if (!isDragging.current) return;
    isDragging.current = false;
    const check = () => {
      if (Math.abs(velocityRef.current) < 0.2) {
        isPausedRef.current = false;
      } else {
        requestAnimationFrame(check);
      }
    };
    requestAnimationFrame(check);
  }, []);

  const handlers = {
    onMouseDown,
    onMouseMove,
    onMouseUp,
    onMouseLeave,
    onTouchStart,
    onTouchMove,
    onTouchEnd,
  };

  return { trackRef, clonedItems, handlers };
}

// =========================================================
// DRAGGABLE MARQUEE COMPONENT
// =========================================================

function DraggableMarquee({ items, speed = 40 }) {
  const { trackRef, clonedItems, handlers } = useInfiniteMarquee({ speed, items });

  const marqueeMaskStyle = {
    WebkitMaskImage: 'linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)',
    maskImage: 'linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)',
    WebkitMaskRepeat: 'no-repeat',
    maskRepeat: 'no-repeat',
    WebkitMaskSize: '100% 100%',
    maskSize: '100% 100%',
  };

  return (
    <div
      className="relative w-full overflow-hidden select-none cursor-grab active:cursor-grabbing"
      style={marqueeMaskStyle}
      {...handlers}
    >
      <div ref={trackRef} className="flex will-change-transform" style={{ width: 'max-content' }}>
        {clonedItems.map((item, index) => (
          <div
            key={index}
            className="dbc-marquee-card mx-3 flex shrink-0 flex-col justify-between overflow-hidden rounded-2xl bg-white"
            style={{ height: undefined }}
          >
            <img
              src={item.image}
              className="h-[340px] w-[280px] lg:h-[390px] lg:w-[300px] rounded-2xl object-cover pointer-events-none"
              alt={`card-${index}`}
              draggable={false}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

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
    <section className="w-full bg-gray-50 px-2 py-6">
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
            className="flex min-h-[520px] flex-col justify-between overflow-hidden rounded-2xl py-[64px] lg:py-[88px]"
          >
            <div>
              {/* Small Heading */}

              <p className="mb-1 text-center text-xs font-medium tracking-widest text-[#2a1430]">
                DBS Global University
              </p>

              <h3 className="mb-6 text-center text-[20px] lg:text-[26px] font-[700] text-[#131d3b]">
                Career Success in Higher Education
              </h3>

              <div className="pt-4 lg:pt-6">
                <DraggableMarquee items={careerData} speed={40} />
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
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

              <div className="pt-4 lg:pt-6">
                <DraggableMarquee items={startupData} speed={45} />
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            style={cardGradientStyle}
            className="flex min-h-[520px] flex-col rounded-2xl p-6 pt-[64px] lg:pt-[88px] lg:pb-6 pb-[64px]"
          >
            <div>
              {/* Small Heading */}

              <p className="mb-1 text-center text-xs font-medium tracking-widest text-[#2a1430]">
                DBS Global University
              </p>

              {/* Main Heading */}

              <h3 className="mb-10 text-center text-[20px] lg:text-[26px] font-[700] text-[#131d3b]">
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

                <p className="mt-1 px-2 text-xs text-gray-600">{videosData[currentVideoIndex].desc}</p>
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
