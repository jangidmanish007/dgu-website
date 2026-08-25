'use client';

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Pagination } from 'swiper/modules';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

/* ─── Animation variants ────────────────────────────────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09 } },
};

/* ─── Data ──────────────────────────────────────────────────────────────── */
const placements = [
  {
    id: 1,
    image: 'images/home/placement-img-1.webp',
    company: 'Indigo Paints Limited',
    name: 'Nishant Jain',
  },
  {
    id: 2,
    image: 'images/home/placement-img-2.webp',
    company: 'Reliance Retail',
    name: 'Nikita',
  },
  {
    id: 3,
    image: 'images/home/placement-img-3.webp',
    company: 'Tech Mahindra',
    name: 'Arsalan Ahmad',
  },
  {
    id: 4,
    image: 'images/home/placement-img-4.webp',
    company: 'Hafele India Pvt. Ltd.',
    name: 'Ria Pandita',
  },
  {
    id: 5,
    image: 'images/home/placement-img-5.webp',
    company: 'Deloitte',
    name: 'Abhishek Rajpoot',
  },
  {
    id: 6,
    image: 'images/home/placement-img-6.webp',
    company: 'Crescendo Global',
    name: 'Divya Sopta',
  },
];

/* ─── Placement Card ─────────────────────────────────────────────────────── */
function PlacementCard({ item }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative overflow-hidden rounded-xl w-full cursor-pointer aspect-[3/4] lg:aspect-[3/5.4]"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Photo */}
      <Image
        src={process.env.NEXT_PUBLIC_IMG_PATH + item.image}
        alt={item.name}
        fill
        unoptimized
        quality={100}
        sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 17vw"
        className="object-cover object-top grayscale transition-transform duration-500 ease-in-out"
        style={{ transform: hovered ? 'scale(1.08)' : 'scale(1)' }}
      />

      {/* Gradient overlay + detail box */}
      {/* Mobile gradient — lighter */}
      <div
        className="lg:hidden absolute bottom-0 left-0 right-0 px-5 py-6 transition-all duration-[400ms] ease-out min-h-[110px]"
        style={{
          background: 'linear-gradient(to top, rgb(0 0 0 / 82%) 70%, rgb(0 0 0 / 0%) 100%)',
          opacity: hovered ? 1 : 0.88,
          transform: hovered ? 'translateY(0)' : 'translateY(6px)',
        }}
      >
        <p className="text-white font-bold text-[15px] leading-snug mb-0.5">{item.company}</p>
        <p className="text-gray-300 text-[13px] leading-snug">{item.name}</p>
      </div>

      {/* Desktop gradient — original dark */}
      <div
        className="hidden lg:block absolute bottom-0 left-0 right-0 px-5 py-6 transition-all duration-[400ms] ease-out lg:min-h-[123px]"
        style={{
          background: 'linear-gradient(to top, rgb(0 0 0) 80%, rgb(0 0 0 / 2%) 100%)',
          opacity: hovered ? 1 : 0.92,
          transform: hovered ? 'translateY(0)' : 'translateY(6px)',
        }}
      >
        <p className="text-white font-bold lg:text-[20px] leading-snug mb-0.5">{item.company}</p>
        <p className="text-gray-300 lg:text-[15px] leading-snug">{item.name}</p>
      </div>
    </div>
  );
}

/* ─── Main Section ──────────────────────────────────────────────────────── */
export default function PlacementsSection() {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="w-full pt-16 pb-10 px-[16px] lg:px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* ── Desktop Header: heading left + description right ── */}
        <motion.div
          className="hidden md:flex flex-row gap-8 md:gap-16 mb-10 lg:px-20 items-center"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
        >
          {/* Left */}
          <div className="md:w-56 shrink-0">
            <h2 className="text-[24px] lg:text-[28px] font-bold text-[#131d3b] mb-3">Placements</h2>
            <p className="text-[15px] font-semibold tracking-wider text-[#333] uppercase leading-snug">
              Enjoy everyday while
              <br className="mt-2" />
              ensuring great career
            </p>
          </div>

          {/* Vertical divider */}
          <div className="hidden md:block w-[3px] bg-[#e0c56e] self-stretch" />

          {/* Right */}
          <p className="flex-1 text-[15px] text-[#333] leading-relaxed text-center">
            Placement is an independent activity managed by the career development cell &amp; the students on their own
            through their nominated committee member, under the overall guidance of an experienced Placement
            Coordinator. Moreover, the activities calendar of DGU has incorporated a number of activities which have
            been designed to promote industry interaction. Relationship building with Corporates through rich knowledge
            exchange helps build a trust in DGU capabilities to nurture talent and impart necessary skills in its
            students.
          </p>
        </motion.div>

        {/* ── Mobile Header: redesigned ── */}
        <motion.div
          className="md:hidden mb-10"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Top label + heading */}
          <div className="mb-4">
            <h2 className="text-[24px] lg:text-[28px] font-bold text-[#131d3b] leading-tight mb-1">Placements</h2>
            <p className="text-[13px] font-semibold tracking-widest text-[#555] uppercase">
              Enjoy everyday while ensuring great career
            </p>
          </div>

          {/* Gold accent line */}
          <div className="w-12 h-[3px] rounded-full bg-[#e0c56e] mb-5" />

          {/* Description */}
          <p className="text-[14px] text-[#444] leading-relaxed mb-6">
            Placement is an independent activity managed by the career development cell &amp; the students on their own
            through their nominated committee member, under the overall guidance of an experienced Placement
            Coordinator. Moreover, the activities calendar of DGU has incorporated a number of activities which have
            been designed to promote industry interaction. Relationship building with Corporates through rich knowledge
            exchange helps build a trust in DGU capabilities to nurture talent and impart necessary skills in its
            students.
          </p>

          {/* Stat highlight pill */}
          <div
            className="inline-flex items-center gap-3 px-5 py-3 rounded-2xl"
            style={{ background: 'linear-gradient(135deg, #131d3b 0%, #1e2e5a 100%)' }}
          >
            <span className="text-[22px] font-extrabold text-[#e0c56e] leading-none">350+</span>
            <div className="w-px h-8 bg-white/20" />
            <span className="text-[13px] text-white/85 leading-tight font-medium">
              Companies recruit
              <br />
              from campus every year
            </span>
          </div>
        </motion.div>

        {/* ── Desktop divider + sub-heading ── */}
        <motion.div
          className="hidden md:block"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.8 }}
        >
          <div className="w-10 h-1 bg-[#68176b] mx-auto mb-8 rounded-full" />
          <p className="text-center text-[20px] font-bold text-[#131d3b] mb-8">
            <span className="text-[#6b4d00]">350+ Companies</span> recruit from campus every year
          </p>
        </motion.div>

        {/* ── Desktop (lg+): static 6-card flex row ── */}
        <motion.div
          className="hidden lg:flex gap-3"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {placements.map((item) => (
            <motion.div key={item.id} className="flex-1 min-w-0" variants={fadeUp}>
              <PlacementCard item={item} />
            </motion.div>
          ))}
        </motion.div>

        {/* ── Mobile / Tablet (below lg): Enhanced Swiper ── */}
        <motion.div
          className="lg:hidden"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {/* Slide counter badge */}
          <div className="flex items-center justify-between mb-3 px-1">
            <p className="text-[12px] font-semibold text-[#68176b] uppercase tracking-widest hidden sm:block">
              Our Placed Students
            </p>
            <p className="text-[13px] font-bold text-[#131d3b] ml-auto">
              <span className="text-[#68176b]">{String(activeIndex + 1).padStart(2, '0')}</span>
              <span className="text-[#bbb] mx-1">/</span>
              <span>{String(placements.length).padStart(2, '0')}</span>
            </p>
          </div>

          {/* Progress bar */}
          <div className="w-full h-[2px] bg-gray-100 rounded-full mb-5 overflow-hidden">
            <div
              className="h-full rounded-full transition-all duration-500"
              style={{
                width: `${((activeIndex + 1) / placements.length) * 100}%`,
                background: 'linear-gradient(90deg, #68176b, #e0c56e)',
              }}
            />
          </div>

          <Swiper
            style={{ marginRight: '-16px' }}
            modules={[Navigation, Autoplay, Pagination]}
            loop={true}
            autoplay={{ delay: 2800, disableOnInteraction: false, pauseOnMouseEnter: true }}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            spaceBetween={14}
            breakpoints={{
              0: { slidesPerView: 1.4, spaceBetween: 12 },
              400: { slidesPerView: 1.7, spaceBetween: 12 },
              480: { slidesPerView: 2.1, spaceBetween: 14 },
              640: { slidesPerView: 2.6, spaceBetween: 14 },
              768: { slidesPerView: 3.1, spaceBetween: 16 },
              900: { slidesPerView: 3.5, spaceBetween: 16 },
            }}
          >
            {placements.map((item) => (
              <SwiperSlide key={item.id}>
                <PlacementCard item={item} />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation row: arrows left + dot indicators right */}
          <div className="flex items-center justify-between mt-5 px-1">
            {/* Dot indicators */}
            <div className="flex items-center gap-2">
              {placements.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    swiperRef.current?.slideTo(i);
                    setActiveIndex(i);
                  }}
                  aria-label={`Go to slide ${i + 1}`}
                  className="transition-all duration-300 rounded-full"
                  style={{
                    width: i === activeIndex ? '24px' : '8px',
                    height: '8px',
                    background: i === activeIndex ? 'linear-gradient(90deg, #68176b, #e0c56e)' : '#d1d5db',
                  }}
                />
              ))}
            </div>

            {/* Arrow buttons */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => {
                  swiperRef.current?.slidePrev();
                }}
                aria-label="Previous placement"
                className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200"
                style={{ border: '1px solid #68176b', color: '#68176b', background: 'transparent' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#68176b';
                  e.currentTarget.style.color = '#fff';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.color = '#68176b';
                }}
              >
                <ChevronLeft size={18} aria-hidden="true" />
              </button>
              <button
                onClick={() => {
                  swiperRef.current?.slideNext();
                }}
                aria-label="Next placement"
                className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200"
                style={{ background: '#68176b', color: '#fff', border: '1px solid #68176b' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#131d3b';
                  e.currentTarget.style.borderColor = '#131d3b';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = '#68176b';
                  e.currentTarget.style.borderColor = '#68176b';
                }}
              >
                <ChevronRight size={18} aria-hidden="true" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
