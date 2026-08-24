'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

/* ─── Animation variants ─────────────────────────────────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.14 } },
};

/* ─── Accreditation data ─────────────────────────────────────────────────── */
const ACCREDITATIONS = [
  {
    name: 'University Grants Commission',
    logo: '/images/overview/ugc_logo.webp',
    alt: 'UGC Logo',
  },
  {
    name: 'Business Excellence Award',
    logo: '/images/overview/bea_logo.webp',
    alt: 'Business Excellence Award Logo',
  },
  {
    name: 'Association of Indian Universities',
    logo: '/images/overview/aiu_logo_s.webp',
    alt: 'AIU Logo',
  },
  {
    name: 'Pharmacy Council of India',
    logo: '/images/overview/pci_logo.webp',
    alt: 'PCI Logo',
  },
];

/* ─── Main section ───────────────────────────────────────────────────────── */
export default function GlanceAccreditation() {
  return (
    <section className="w-full max-w-[1360px] mx-auto px-[16px] lg:px-[32px] mb-[24px]">
      {/* Outer bordered container */}
      <div className="border border-[#d4b8d6] rounded-sm px-[24px] sm:px-[40px] py-[40px] sm:py-[48px]">
        {/* ── Heading block (same pattern as GlanceDGUAbout) ── */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={stagger}
          className="text-center mb-[36px] sm:mb-[44px]"
        >
          {/* Super-label */}
          <motion.p
            variants={fadeUp}
            className="text-[11px] sm:text-[13px] tracking-[0.18em] uppercase text-[#68176b] font-normal mb-2"
          >
            Recognized by
          </motion.p>

          {/* Main heading */}
          <motion.h2
            variants={fadeUp}
            className="georgia-fonts text-[22px] sm:text-[26px] font-bold text-[#2a0630] leading-tight mb-3"
          >
            Approvals &amp; Accreditation
          </motion.h2>

          {/* Gold underline bar */}
          <motion.div
            variants={fadeUp}
            className="mx-auto w-[64px] h-[3px] rounded mb-4"
            style={{ background: 'linear-gradient(90deg, #c8922a, #f5d48a)' }}
          />
        </motion.div>

        {/* ── Logo cards grid ── */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={stagger}
          className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
        >
          {ACCREDITATIONS.map((item) => (
            <motion.div
              key={item.name}
              variants={fadeUp}
              className="flex flex-col items-center justify-between border border-[#d4b8d6] border-t-3 border-t-[#68176b] bg-[#faf5fb] hover:border-t-[#c8922a] rounded-sm p-4 sm:p-6 gap-4 hover:shadow-[0_6px_24px_rgba(104,23,107,0.14)] hover:-translate-y-1 transition-all duration-300"
            >
              {/* Logo image area */}
              <div className="w-full flex items-center justify-center h-[90px] sm:h-[110px]">
                <Image
                  src={item.logo}
                  alt={item.alt}
                  width={160}
                  height={100}
                  className="object-contain max-h-[80px] sm:max-h-[100px] w-auto"
                />
              </div>

              {/* Label */}
              <p className="text-center text-[11px] sm:text-[13px] font-bold text-[#68176b] leading-snug tracking-wide">
                {item.name}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
