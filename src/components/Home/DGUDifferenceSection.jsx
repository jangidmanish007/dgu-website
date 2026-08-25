'use client';

import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

/* ─── Animation variants (desktop only) ────────────────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

/* ─── Data ──────────────────────────────────────────────────────────────── */
const row1 = [
  {
    id: 1,
    title: 'Industry tie-ups',
    description: 'For academic delivery with the best in the world',
    icon: 'flaticon-checklist',
  },
  {
    id: 2,
    title: 'Extensive use',
    description: 'Of AI in processes and curriculum',
    icon: 'flaticon-creative',
  },
  {
    id: 3,
    title: 'Maintaining High ROI',
    description: '100% Placement and moderate fees.',
    icon: 'flaticon-presentation',
  },
];

const row2 = [
  {
    id: 4,
    title: 'Global opportunities',
    description: 'At affordable price',
    icon: 'flaticon-resume',
  },
  {
    id: 5,
    title: 'Comfortable Living,',
    description: 'Vibrant campus life and healthy social environment',
    icon: 'flaticon-sharing',
  },
  {
    id: 6,
    title: 'Honest',
    description: 'Scholarships',
    icon: 'flaticon-diploma',
  },
];

const allCards = [...row1, ...row2];

/* ─── Accent palette (mobile cards) ────────────────────────────────────── */
const accentColors = [
  { top: '#e01e79', glow: 'rgba(224,30,121,0.28)' },
  { top: '#68176b', glow: 'rgba(104,23,107,0.28)' },
  { top: '#e01e79', glow: 'rgba(224,30,121,0.28)' },
  { top: '#68176b', glow: 'rgba(104,23,107,0.28)' },
  { top: '#e01e79', glow: 'rgba(224,30,121,0.28)' },
  { top: '#68176b', glow: 'rgba(104,23,107,0.28)' },
];

/* ─── Read More Button ──────────────────────────────────────────────────── */
function ReadMoreButton() {
  return (
    <button
      type="button"
      className="diff-btn relative inline-flex items-center gap-1.5 overflow-hidden rounded-full bg-white px-4 py-2 cursor-pointer outline-none lg:border-none border-1 border-[#68176b]"
    >
      <span
        className="diff-btn-fill absolute inset-0 bg-[#68176b] [transform-origin:bottom_left] z-0"
        aria-hidden="true"
      />
      <span className="diff-btn-label relative z-10 inline-flex items-center gap-1.5 text-[13px] font-semibold text-gray-800 whitespace-nowrap transition-colors duration-200">
        Read More
        <ArrowRight className="diff-btn-icon w-3.5 h-3.5 shrink-0 transition-transform duration-200" strokeWidth={2} />
      </span>
    </button>
  );
}

/* ─── Desktop Card ──────────────────────────────────────────────────────── */
function DifferenceCard({ card, hovered, onEnter, onLeave }) {
  return (
    <div
      className={`
        flex flex-col gap-3 bg-white rounded-xl p-[22px]
        transition-[flex,box-shadow] duration-300 ease-in-out
        ${hovered ? 'flex-[1.5] shadow-[0_8px_32px_rgba(104,23,107,0.22)]' : 'flex-1'}
        min-w-0 cursor-default
      `}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
    >
      <div className="flex items-start gap-3">
        <div className="shrink-0 w-[56px] h-[56px] rounded-md bg-[#e01e79] flex items-center justify-center">
          <i className={`${card.icon} text-white text-3xl`} />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-[20px] font-bold text-[#131d3b] leading-snug mb-2">{card.title}</h3>
          <p className="text-[15px] text-[#333] leading-snug min-h-[68px] line-clamp-3">{card.description}</p>
          <div className="mt-1">
            <ReadMoreButton />
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Desktop Card Row ──────────────────────────────────────────────────── */
function CardRow({ cards }) {
  const [hoveredId, setHoveredId] = useState(null);
  return (
    <div className="flex gap-4">
      {cards.map((card) => (
        <DifferenceCard
          key={card.id}
          card={card}
          hovered={hoveredId === card.id}
          onEnter={() => setHoveredId(card.id)}
          onLeave={() => setHoveredId(null)}
        />
      ))}
    </div>
  );
}

/* ─── Mobile Slide Card ─────────────────────────────────────────────────── */
function MobileCard({ card, index }) {
  const accent = accentColors[index % accentColors.length];
  const num = String(index + 1).padStart(2, '0');

  return (
    /*
      h-full is critical — Swiper sets the slide wrapper to full height of
      the tallest slide when you add `style={{ height: 'auto' }}` to Swiper.
      This card must fill that height so all cards look equal.
    */
    <div
      className="relative flex flex-col h-full rounded-2xl overflow-hidden bg-white"
      style={{ boxShadow: `0 6px 28px ${accent.glow}` }}
    >
      {/* Coloured top stripe */}
      <div className="h-1.5 w-full shrink-0" style={{ background: accent.top }} />

      {/* Body */}
      <div className="flex flex-col flex-1 p-5 gap-3">
        {/* Icon + ghost number */}
        <div className="flex items-center justify-between">
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center shadow-md shrink-0"
            style={{ background: accent.top }}
          >
            <i className={`${card.icon} text-white text-xl`} />
          </div>
          <span
            className="text-[40px] font-black leading-none select-none"
            style={{ color: accent.top, opacity: 0.12 }}
            aria-hidden="true"
          >
            {num}
          </span>
        </div>

        {/* Text — flex-1 pushes button to bottom */}
        <div className="flex flex-col flex-1">
          <h3 className="text-[15px] font-bold text-[#131d3b] leading-snug mb-1">{card.title}</h3>
          <p className="text-[13px] text-[#555] leading-relaxed flex-1">{card.description}</p>
          <div className="mt-3">
            <ReadMoreButton />
          </div>
        </div>
      </div>

      {/* Corner decoration */}
      <div
        className="pointer-events-none absolute bottom-0 right-0 w-16 h-16 rounded-tl-[60px]"
        style={{ background: `linear-gradient(135deg, transparent 40%, ${accent.top}18)` }}
        aria-hidden="true"
      />
    </div>
  );
}

/* ─── Main Section ──────────────────────────────────────────────────────── */
export default function DGUDifferenceSection() {
  return (
    <section
      className="relative w-full py-12 md:py-16 overflow-hidden lg:bg-fixed"
      style={{
        backgroundImage: "url('/images/home/dgu-dffrence-bg-img.webp')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="relative max-w-7xl mx-auto">
        {/* ── Heading ── */}
        <motion.div
          className="text-center mb-6 md:mb-8 px-4"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.6 }}
        >
          <h2 className="text-[24px] sm:text-[28px] font-bold text-white">
            What makes <span className="text-[#f5c518] ">DGU Different ?</span>
          </h2>
        </motion.div>

        {/* ══════════════════════════════════════════════════════════
            MOBILE  (< 1024 px) — Swiper carousel
            • style={{ height: 'auto' }} on Swiper → slides stretch to
              tallest card height, giving equal heights automatically.
            • Pagination dots built-in from Swiper.
        ═════════════════════════════════════════════════════════════ */}
        {/*
          overflow-hidden is removed from the wrapper so the right-peek card
          is visible, but we clip the left edge with a negative margin trick.
          Instead, we rely on Swiper's built-in clipping on the left and let
          the right side bleed out naturally.
        */}
        <div className="lg:hidden diff-mobile-swiper pl-3 sm:pr-3">
          <Swiper
            modules={[Autoplay, Pagination]}
            slidesPerView={1.12}
            spaceBetween={12}
            centeredSlides={false}
            loop={true}
            autoplay={{ delay: 3000, disableOnInteraction: false, pauseOnMouseEnter: true }}
            pagination={{ clickable: true }}
            slidesOffsetBefore={0}
            slidesOffsetAfter={0}
            breakpoints={{
              360: { slidesPerView: 1.4, spaceBetween: 18 },
              440: { slidesPerView: 1.6, spaceBetween: 18 },
              520: { slidesPerView: 1.6, spaceBetween: 18 },
              640: { slidesPerView: 2.5, spaceBetween: 16 },
              768: { slidesPerView: 3, spaceBetween: 18 },
            }}
            style={{ height: 'auto', paddingBottom: '40px' }}
          >
            {allCards.map((card, index) => (
              <SwiperSlide
                key={card.id}
                /* h-auto on the slide + h-full on MobileCard = equal heights */
                style={{ height: 'auto' }}
              >
                <MobileCard card={card} index={index} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* ══════════════════════════════════════════════════════════
            DESKTOP (≥ 1024 px) — two rows of 3, hover-expand
            Completely unchanged from original.
        ═════════════════════════════════════════════════════════════ */}
        <motion.div
          className="hidden lg:flex lg:flex-col gap-4 px-4"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.div variants={fadeUp}>
            <CardRow cards={row1} />
          </motion.div>
          <motion.div variants={fadeUp}>
            <CardRow cards={row2} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
