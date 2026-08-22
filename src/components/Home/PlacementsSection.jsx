'use client';

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

/* ─── Data ──────────────────────────────────────────────────────────────── */
const placements = [
  {
    id: 1,
    image: '/images/placement-img-1.webp',
    company: 'Indigo Paints Limited',
    name: 'Nishant Jain',
  },
  {
    id: 2,
    image: '/images/placement-img-2.webp',
    company: 'Reliance Retail',
    name: 'Nikita',
  },
  {
    id: 3,
    image: '/images/placement-img-3.webp',
    company: 'Tech Mahindra',
    name: 'Arsalan Ahmad',
  },
  {
    id: 4,
    image: '/images/placement-img-4.webp',
    company: 'Hafele India Pvt. Ltd.',
    name: 'Ria Pandita',
  },
  {
    id: 5,
    image: '/images/placement-img-5.webp',
    company: 'Deloitte',
    name: 'Abhishek Rajpoot',
  },
  {
    id: 6,
    image: '/images/placement-img-6.webp',
    company: 'Crescendo Global',
    name: 'Divya Sopta',
  },
];

/* ─── Placement Card ─────────────────────────────────────────────────────── */
function PlacementCard({ item }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative overflow-hidden rounded-xl w-full cursor-pointer"
      style={{ aspectRatio: '3 / 5.2' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Photo */}
      <Image
        src={item.image}
        alt={item.name}
        fill
        sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 17vw"
        className="object-cover object-top grayscale transition-transform duration-500 ease-in-out"
        style={{ transform: hovered ? 'scale(1.08)' : 'scale(1)' }}
      />

      {/* Gradient overlay + detail box */}
      <div
        className="absolute bottom-0 left-0 right-0 px-5 py-6 transition-all duration-[400ms] ease-out"
        style={{
          background: 'linear-gradient(to top, rgb(0 0 0) 80%, rgb(0 0 0 / 2%) 100%)',
          opacity: hovered ? 1 : 0.92,
          transform: hovered ? 'translateY(0)' : 'translateY(6px)',
        }}
      >
        <p className="text-white font-bold text-[15px] leading-snug mb-0.5">{item.company}</p>
        <p className="text-gray-300 text-[13px] leading-snug">{item.name}</p>
      </div>
    </div>
  );
}

/* ─── Main Section ──────────────────────────────────────────────────────── */
export default function PlacementsSection() {
  /* Store swiper instance directly — no ref timing issues */
  const swiperRef = useRef(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  return (
    <section className="w-full pt-16 pb-10 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Top: heading left + description right */}
        <div className="flex flex-col items-center text-center md:flex-row gap-8 md:gap-16 mb-10 lg:px-20">
          {/* Left */}
          <div className="md:w-56 shrink-0">
            <h2 className="text-[26px] font-bold text-[#131d3b] mb-3">Placements</h2>
            <p className="text-[15px] font-semibold tracking-wider text-[#333] uppercase leading-snug">
              Enjoy everyday while
              <br className="mt-2" />
              ensuring great career
            </p>
          </div>

          {/* Vertical divider */}
          <div className="hidden md:block w-[3px] bg-[#e0c56e] self-stretch" />

          {/* Right */}
          <p className="flex-1 text-[15px] text-[#333] leading-relaxed">
            Placement is an independent activity managed by the career development cell &amp; the students on their own
            through their nominated committee member, under the overall guidance of an experienced Placement
            Coordinator. Moreover, the activities calendar of DGU has incorporated a number of activities which have
            been designed to promote industry interaction. Relationship building with Corporates through rich knowledge
            exchange helps build a trust in DGU capabilities to nurture talent and impart necessary skills in its
            students.
          </p>
        </div>

        {/* Divider accent */}
        <div className="w-10 h-1 bg-[#68176b] mx-auto mb-8 rounded-full" />

        {/* Sub-heading */}
        <p className="text-center text-[20px] font-bold text-[#131d3b] mb-8">
          <span className="text-[#6b4d00]">350+ Companies</span> recruit from campus every year
        </p>

        {/* ── Desktop (lg+): static 6-card flex row — unchanged ── */}
        <div className="hidden lg:flex gap-3">
          {placements.map((item) => (
            <div key={item.id} className="flex-1 min-w-0">
              <PlacementCard item={item} />
            </div>
          ))}
        </div>

        {/* ── Mobile / Tablet (below lg): Swiper ── */}
        <div className="lg:hidden">
          <Swiper
            modules={[Navigation]}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
              setIsBeginning(swiper.isBeginning);
              setIsEnd(swiper.isEnd);
            }}
            onSlideChange={(swiper) => {
              setIsBeginning(swiper.isBeginning);
              setIsEnd(swiper.isEnd);
            }}
            spaceBetween={12}
            breakpoints={{
              /* Mobile: show 1 full card + peek of next */
              0: { slidesPerView: 1.15 },
              /* Larger mobile */
              480: { slidesPerView: 1.5 },
              /* Small tablet */
              640: { slidesPerView: 2.2 },
              /* Tablet */
              768: { slidesPerView: 2.5 },
              /* Large tablet */
              900: { slidesPerView: 3.2 },
            }}
          >
            {placements.map((item) => (
              <SwiperSlide key={item.id}>
                <PlacementCard item={item} />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Arrows — centered below slider, 40px rounded circles */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              disabled={isBeginning}
              aria-label="Previous placement"
              className="w-10 h-10 rounded-full border-2 border-[#68176b] bg-[#68176b] text-white flex items-center justify-center transition-colors duration-200 hover:bg-[#68176b] hover:text-white disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path
                  d="M10 3L5 8L10 13"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button
              onClick={() => swiperRef.current?.slideNext()}
              disabled={isEnd}
              aria-label="Next placement"
              className="w-10 h-10 rounded-full border-2 border-[#68176b] bg-[#68176b] text-white flex items-center justify-center transition-colors duration-200 hover:bg-[#68176b] hover:text-white disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path
                  d="M6 3L11 8L6 13"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
