'use client';

import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

/* ─── Animation variants ────────────────────────────────────────────────── */
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

/* ─── Read More Button ──────────────────────────────────────────────────── */
function ReadMoreButton() {
  return (
    <button
      type="button"
      className="diff-btn relative inline-flex items-center gap-1.5 overflow-hidden rounded-full border-none border-gray-300 bg-white px-4 py-2 cursor-pointer outline-none"
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

/* ─── Single Card ───────────────────────────────────────────────────────── */
function DifferenceCard({ card, hovered, onEnter, onLeave }) {
  return (
    <div
      className={`
        flex flex-col gap-3 bg-white rounded-xl p-[22px]
        transition-[flex,box-shadow,transform] duration-350 ease-in-out
        ${hovered ? 'flex-[1.5] shadow-[0_8px_32px_rgba(104,23,107,0.22)]' : 'flex-1'}
        min-w-0 cursor-default
      `}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
    >
      {/* Icon + text row */}
      <div className="flex items-start gap-3">
        {/* Pink icon box */}
        <div className="shrink-0 w-[56px] h-[56px] rounded-md bg-[#e01e79] flex items-center justify-center">
          <i className={`${card.icon} text-white text-3xl`} />
        </div>

        {/* Title + description */}
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

/* ─── Desktop Card Row (3 cards, hover-expand) ──────────────────────────── */
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

/* ─── Mobile / Tablet Grid Card (no hover-expand, simple shadow on hover) ── */
function GridCard({ card }) {
  return (
    <div className="flex flex-col gap-3 bg-white rounded-xl p-5 shadow-sm hover:shadow-[0_8px_32px_rgba(104,23,107,0.18)] transition-shadow duration-300 cursor-default">
      <div className="flex items-start gap-3">
        <div className="shrink-0 w-[52px] h-[52px] rounded-md bg-[#e01e79] flex items-center justify-center">
          <i className={`${card.icon} text-white text-[28px]`} />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-[18px] font-bold text-[#131d3b] leading-snug mb-1.5">{card.title}</h3>
          <p className="text-[14px] text-[#333] leading-snug mb-3">{card.description}</p>
          <ReadMoreButton />
        </div>
      </div>
    </div>
  );
}

/* ─── Main Section ──────────────────────────────────────────────────────── */
export default function DGUDifferenceSection() {
  return (
    <section
      className="relative w-full py-12 md:py-16 px-4 overflow-hidden"
      style={{
        backgroundImage: "url('/images/home/dgu-dffrence-bg-img.webp')",
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="relative max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          className="text-center mb-6 md:mb-8"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.6 }}
        >
          <h2 className="text-2xl sm:text-[28px] font-bold text-white">
            What makes <span className="text-[#f5c518] bg-[#000]">DGU Different ? </span>
          </h2>
        </motion.div>

        {/* ── Mobile / Tablet grid ── */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:hidden"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {allCards.map((card) => (
            <motion.div key={card.id} variants={fadeUp}>
              <GridCard card={card} />
            </motion.div>
          ))}
        </motion.div>

        {/* ── Desktop: two rows of 3 with hover-expand (≥ 1024px) ── */}
        <motion.div
          className="hidden lg:flex lg:flex-col gap-4"
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
