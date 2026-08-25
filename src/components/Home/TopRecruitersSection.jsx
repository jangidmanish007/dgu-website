'use client';

import React from 'react';
import Image from 'next/image';
import Marquee from 'react-fast-marquee';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
};

const recruiters = [
  { id: 1, src: 'images/home/recuite-img-1.webp', name: 'Grant Thornton' },
  { id: 2, src: 'images/home/recuite-img-2.webp', name: 'Greenlam Industries' },
  { id: 3, src: 'images/home/recuite-img-3.webp', name: 'Häfele' },
  { id: 4, src: 'images/home/recuite-img-4.webp', name: 'HCL Tech' },
  { id: 5, src: 'images/home/recuite-img-5.webp', name: 'ICICI Bank' },
  { id: 6, src: 'images/home/recuite-img-6.webp', name: 'Infosys' },
  { id: 7, src: 'images/home/recuite-img-7.webp', name: 'ITC Limited' },
  { id: 8, src: 'images/home/recuite-img-8.webp', name: 'Deloitte' },
  { id: 9, src: 'images/home/recuite-img-9.webp', name: 'Wipro' },
  { id: 10, src: 'images/home/recuite-img-10.webp', name: 'TCS' },
  { id: 11, src: 'images/home/recuite-img-11.webp', name: 'Accenture' },
  { id: 12, src: 'images/home/recuite-img-12.webp', name: 'Tech Mahindra' },
  { id: 13, src: 'images/home/recuite-img-13.webp', name: 'Amazon' },
  { id: 14, src: 'images/home/recuite-img-14.webp', name: 'Reliance Retail' },
  { id: 15, src: 'images/home/recuite-img-15.webp', name: 'HDFC Bank' },
  { id: 16, src: 'images/home/recuite-img-16.webp', name: 'Bajaj Finserv' },
  { id: 17, src: 'images/home/recuite-img-17.webp', name: 'Capgemini' },
  { id: 18, src: 'images/home/recuite-img-18.webp', name: 'Cognizant' },
  { id: 19, src: 'images/home/recuite-img-19.webp', name: 'IBM' },
  { id: 20, src: 'images/home/recuite-img-20.webp', name: 'Myntra' },
  { id: 21, src: 'images/home/recuite-img-21.webp', name: 'Zomato' },
  { id: 22, src: 'images/home/recuite-img-22.webp', name: 'Swiggy' },
];

/* split into two halves for the dual mobile rows */
const half = Math.ceil(recruiters.length / 2);
const rowOne = recruiters.slice(0, half);
const rowTwo = recruiters.slice(half);

/* ─── Single recruiter logo card ────────────────────────────────────────── */
function RecruiterLogo({ recruiter, compact = false }) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <div
          className={`
            flex items-center justify-center cursor-pointer select-none
            ${compact ? 'mx-2' : 'mx-4 lg:mx-6'}
          `}
        >
          {compact ? (
            /* ── Mobile card pill ── */
            <div className="flex flex-col items-center justify-center bg-white rounded-xl shadow-md border border-[#e8d5f0] px-3 py-2 w-[110px] h-[68px] transition-transform duration-200 active:scale-95">
              <div className="relative w-[108px] h-[64px]">
                <Image
                  src={process.env.NEXT_PUBLIC_IMG_PATH + recruiter.src}
                  alt={recruiter.name}
                  fill
                  sizes="86px"
                  className="object-contain"
                />
              </div>
            </div>
          ) : (
            /* ── Desktop logo ── */
            <div className="relative lg:w-[188px] w-[140px] h-[70px] lg:h-[90px] transition-transform duration-200 hover:scale-105">
              <Image
                src={process.env.NEXT_PUBLIC_IMG_PATH + recruiter.src}
                alt={recruiter.name}
                fill
                sizes="140px"
                className="object-contain"
              />
            </div>
          )}
        </div>
      </TooltipTrigger>
      <TooltipContent side="top" className="bg-[#68176b] text-white text-[13px] font-semibold px-3 py-1.5 rounded-md">
        {recruiter.name}
      </TooltipContent>
    </Tooltip>
  );
}

/* ─── Main Section ──────────────────────────────────────────────────────── */
export default function TopRecruitersSection() {
  return (
    <TooltipProvider>
      {/* ══════════════════════════════════════════════════════════════════
          DESKTOP  ≥ 991 px  —  single marquee, white bg  (unchanged)
      ══════════════════════════════════════════════════════════════════ */}
      <section className="hidden min-[991px]:block w-full pb-10 bg-white overflow-hidden">
        <motion.div
          className="text-center mb-6"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.6 }}
        >
          <h2 className="text-[25px] font-bold text-[#131d3b] tracking-wide">Top Recruiters 2025-26</h2>
          <div className="mt-2 mx-auto w-10 h-[3px] bg-[#68176b] rounded-full" />
        </motion.div>

        <Marquee gradient={false} speed={45} pauseOnHover className="overflow-hidden">
          {recruiters.map((r) => (
            <RecruiterLogo key={r.id} recruiter={r} />
          ))}
        </Marquee>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          MOBILE  < 991 px  —  themed dual-marquee creative layout
      ══════════════════════════════════════════════════════════════════ */}
      <section
        className="block min-[991px]:hidden w-full overflow-hidden relative"
        style={{
          background: 'linear-gradient(160deg, #1e0a22 0%, #4a0f4d 40%, #2a0630 70%, #68176b 100%)',
        }}
      >
        {/* decorative blurred orbs */}
        <div className="pointer-events-none absolute -top-8 -left-8 w-44 h-44 rounded-full bg-[#c8922a] opacity-10 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 right-0 w-52 h-52 rounded-full bg-[#68176b] opacity-20 blur-3xl" />

        {/* top gold accent line */}
        <div className="w-full h-[3px] bg-gradient-to-r from-transparent via-[#c8922a] to-transparent" />

        <div className="py-7 px-0">
          {/* ── Heading ── */}
          <motion.div
            className="text-center mb-5 px-4"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
          >
            <h2 className="text-[20px] font-extrabold text-white leading-tight tracking-wide">
              Top Recruiters 2025 – 26
            </h2>
            <div className="mt-2 mx-auto w-10 h-[3px] bg-white rounded-full" />
          </motion.div>

          {/* ── Row 1: left → right ── */}
          <div className="mb-4 relative">
            {/* fade edges */}
            <div
              className="pointer-events-none absolute left-0 top-0 h-full w-8 z-10"
              style={{ background: 'linear-gradient(to right, #1e0a22, transparent)' }}
            />
            <div
              className="pointer-events-none absolute right-0 top-0 h-full w-8 z-10"
              style={{ background: 'linear-gradient(to left, #1e0a22, transparent)' }}
            />

            <Marquee gradient={false} speed={38} pauseOnHover direction="left" className="overflow-hidden">
              {rowOne.map((r) => (
                <RecruiterLogo key={r.id} recruiter={r} compact />
              ))}
            </Marquee>
          </div>

          {/* ── Row 2: right → left ── */}
          <div className="relative">
            <div
              className="pointer-events-none absolute left-0 top-0 h-full w-8 z-10"
              style={{ background: 'linear-gradient(to right, #2a0630, transparent)' }}
            />
            <div
              className="pointer-events-none absolute right-0 top-0 h-full w-8 z-10"
              style={{ background: 'linear-gradient(to left, #2a0630, transparent)' }}
            />

            <Marquee gradient={false} speed={38} pauseOnHover direction="right" className="overflow-hidden">
              {rowTwo.map((r) => (
                <RecruiterLogo key={r.id} recruiter={r} compact />
              ))}
            </Marquee>
          </div>
        </div>

        {/* bottom gold accent line */}
        <div className="w-full h-[3px] bg-gradient-to-r from-transparent via-[#c8922a] to-transparent" />
      </section>
    </TooltipProvider>
  );
}
