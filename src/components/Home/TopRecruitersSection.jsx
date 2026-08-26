'use client';

import React from 'react';
import Image from 'next/image';
import Marquee from 'react-fast-marquee';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { motion } from 'framer-motion';
import DraggableMarquee from '@/components/ui/DraggableMarquee';

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

/* ─── Desktop logo card (used inside react-fast-marquee) ───────────────── */
function DesktopRecruiterLogo({ recruiter }) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <div className="mx-4 lg:mx-6 flex items-center justify-center cursor-pointer select-none">
          <div className="relative lg:w-[188px] w-[140px] h-[70px] lg:h-[90px] transition-transform duration-200 hover:scale-105">
            <Image
              src={process.env.NEXT_PUBLIC_IMG_PATH + recruiter.src}
              alt={recruiter.name}
              fill
              sizes="188px"
              quality={100}
              unoptimized
              className="object-contain"
            />
          </div>
        </div>
      </TooltipTrigger>
      <TooltipContent side="top" className="bg-[#68176b] text-white text-[13px] font-semibold px-3 py-1.5 rounded-md">
        {recruiter.name}
      </TooltipContent>
    </Tooltip>
  );
}

/* ─── Mobile logo card (used inside DraggableMarquee via renderItem) ────── */
function MobileRecruiterCard({ recruiter }) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <div className="mx-2 flex items-center justify-center cursor-pointer select-none">
          {/* card pill — same dimensions as original compact card */}
          <div className="flex flex-col items-center justify-center bg-white rounded-xl shadow-md border border-[#e8d5f0] px-3 py-2 w-[130px] h-[64px] transition-transform duration-200 active:scale-95">
            {/* image wrapper is intentionally taller than the pill so the logo has room */}
            <div className="relative w-[118px] h-[84px]">
              <Image
                src={process.env.NEXT_PUBLIC_IMG_PATH + recruiter.src}
                alt={recruiter.name}
                fill
                sizes="118px"
                quality={100}
                unoptimized
                className="object-contain"
                draggable={false}
              />
            </div>
          </div>
        </div>
      </TooltipTrigger>
      <TooltipContent side="top" className="bg-[#68176b] text-white text-[13px] font-semibold px-3 py-1.5 rounded-md">
        {recruiter.name}
      </TooltipContent>
    </Tooltip>
  );
}

function FadeRow({ children, leftColor, rightColor, className = '' }) {
  return (
    <div className={`relative ${className}`}>
      {/* left fade */}
      <div
        className="pointer-events-none absolute left-0 top-0 h-full w-8 z-10"
        style={{ background: `linear-gradient(to right, ${leftColor}, transparent)` }}
      />
      {/* right fade */}
      <div
        className="pointer-events-none absolute right-0 top-0 h-full w-8 z-10"
        style={{ background: `linear-gradient(to left, ${rightColor}, transparent)` }}
      />
      {children}
    </div>
  );
}

/* ─── Main Section ──────────────────────────────────────────────────────── */
export default function TopRecruitersSection() {
  return (
    <TooltipProvider>
      {/* ══════════════════════════════════════════════════════════════════
          DESKTOP  ≥ 991 px  —  single react-fast-marquee, white bg
      ══════════════════════════════════════════════════════════════════ */}
      <section className="hidden min-[991px]:block w-full pb-10 bg-white overflow-hidden">
        <motion.div
          className="text-center mb-6"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.6 }}
        >
          <h2 className="text-[24px] lg:text-[25px] font-bold text-[#131d3b] tracking-wide">Top Recruiters 2025-26</h2>
          <div className="mt-2 mx-auto w-10 h-[3px] bg-[#68176b] rounded-full" />
        </motion.div>
        <Marquee gradient={false} speed={45} pauseOnHover className="overflow-hidden">
          {recruiters.map((r) => (
            <DesktopRecruiterLogo key={r.id} recruiter={r} />
          ))}
        </Marquee>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          MOBILE  < 991 px  —  themed dual draggable-marquee layout
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
            <h2 className="text-[20px] font-bold text-white leading-tight tracking-wide">Top Recruiters 2025 – 26</h2>
            <div className="mt-2 mx-auto w-10 h-[3px] bg-white rounded-full" />
          </motion.div>

          {/* ── Row 1: ltr ── */}
          <div className="mb-4">
            <FadeRow leftColor="#1e0a22" rightColor="#1e0a22">
              <DraggableMarquee
                items={rowOne}
                speed={20}
                direction="ltr"
                maskStyle={null}
                renderItem={(recruiter, index) => <MobileRecruiterCard key={index} recruiter={recruiter} />}
              />
            </FadeRow>
          </div>

          {/* ── Row 2: rtl ── */}
          <div>
            <FadeRow leftColor="#2a0630" rightColor="#2a0630">
              <DraggableMarquee
                items={rowTwo}
                speed={20}
                direction="rtl"
                maskStyle={null}
                renderItem={(recruiter, index) => <MobileRecruiterCard key={index} recruiter={recruiter} />}
              />
            </FadeRow>
          </div>
        </div>

        {/* bottom gold accent line */}
        <div className="w-full h-[3px] bg-gradient-to-r from-transparent via-[#c8922a] to-transparent" />
      </section>
    </TooltipProvider>
  );
}
