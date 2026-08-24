'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Marquee from 'react-fast-marquee';
import Image from 'next/image';

/* ─── Animation variants ─────────────────────────────────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

/* ─── Image lists ────────────────────────────────────────────────────────── */
const ROW_ONE = Array.from({ length: 18 }, (_, i) => {
  const n = String(i + 1).padStart(2, '0');
  return `/images/overview/awards-img-${n}.webp`;
});

const ROW_TWO = Array.from({ length: 18 }, (_, i) => {
  const n = String(i + 19).padStart(2, '0');
  return `/images/overview/awards-img-${n}.webp`;
});

/* ─── Gradient overlay colour — must match section bg ───────────────────── */
const GRAD_LEFT = 'linear-gradient(to right, #2a0630 0%, transparent 100%)';
const GRAD_RIGHT = 'linear-gradient(to left, #2a0630 0%, transparent 100%)';

/* ─── Single image card ──────────────────────────────────────────────────── */
function AwardCard({ src }) {
  return (
    <div className="mx-[8px] sm:mx-[10px] flex-shrink-0 bg-white rounded-sm overflow-hidden shadow-[0_2px_14px_rgba(0,0,0,0.18)]">
      <Image
        src={src}
        alt="Award"
        width={260}
        height={130}
        className="object-contain w-[200px] h-[110px] sm:w-[260px] sm:h-[130px]"
        draggable={false}
      />
    </div>
  );
}

/* ─── Marquee row with edge gradients ───────────────────────────────────── */
function MarqueeRow({ images, direction, speed }) {
  return (
    <div className="relative w-full overflow-hidden py-[6px]">
      {/* Left fade */}
      <div
        className="absolute left-0 top-0 bottom-0 w-[80px] sm:w-[140px] z-10 pointer-events-none"
        style={{ background: GRAD_LEFT }}
      />
      {/* Right fade */}
      <div
        className="absolute right-0 top-0 bottom-0 w-[80px] sm:w-[140px] z-10 pointer-events-none"
        style={{ background: GRAD_RIGHT }}
      />

      <Marquee direction={direction} speed={speed} pauseOnHover gradient={false}>
        {images.map((src, idx) => (
          <AwardCard key={idx} src={src} />
        ))}
      </Marquee>
    </div>
  );
}

/* ─── Main section ───────────────────────────────────────────────────────── */
export default function GlanceRankings() {
  return (
    <section className="w-full max-w-[1366px] mx-auto px-[16px] pb-[28px]">
      <div
        className="py-[48px] sm:py-[64px]"
        style={{
          background: 'linear-gradient(135deg, #3b0764 0%, #2a0630 40%, #1a0040 100%)',
        }}
      >
        {/* ── Heading ── */}
        <div className=" px-[16px] lg:px-[32px]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={stagger}
            className="text-center mb-[36px] sm:mb-[48px]"
          >
            <motion.p
              variants={fadeUp}
              className="text-[11px] sm:text-[13px] tracking-[0.18em] uppercase text-[#c8922a] font-normal mb-2"
            >
              Achievements &amp; Recognition
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="georgia-fonts text-[24px] sm:text-[30px] font-bold text-white leading-tight mb-3"
            >
              Rankings &amp; Recognition
            </motion.h2>
            <motion.div
              variants={fadeUp}
              className="mx-auto w-[64px] h-[3px] rounded"
              style={{ background: 'linear-gradient(90deg, #c8922a, #f5d48a)' }}
            />
          </motion.div>
        </div>

        {/* ── Marquee rows ── */}
        <div className="w-full flex flex-col gap-[20px] sm:gap-[24px]">
          {/* Row 1 — left to right */}
          <MarqueeRow images={ROW_ONE} direction="left" speed={45} />

          {/* Row 2 — right to left */}
          <MarqueeRow images={ROW_TWO} direction="right" speed={40} />
        </div>
      </div>
      {/* ── Last updated ── */}
      <div className="mt-[28px] sm:mt-[16px]">
        <p className="text-[11px] sm:text-[15px] text-[#333] font-bold">Last updated: 30 May, 2026</p>
      </div>
    </section>
  );
}
