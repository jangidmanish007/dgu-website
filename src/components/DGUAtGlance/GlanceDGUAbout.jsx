'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Clock10, Clock10Icon, Clock4, Eye } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBullseye, faCircle, faCircleDot, faClockFour, faDotCircle } from '@fortawesome/free-solid-svg-icons';
import parse from 'html-react-parser';

/* ─── Animation variants ─────────────────────────────────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

/* ─── Mission & Vision data ──────────────────────────────────────────────── */
const MISSION_POINTS = [
  'Deliver <strong>high-quality education</strong> that aligns with global standards of accreditations and rankings.',
  'Embrace and integrate <strong>emerging technologies</strong> and innovative practices to prepare students with skills for the future.',
  'Promote <strong>inclusivity, ethics, and global awareness</strong> to equip graduates for addressing complex challenges and driving positive change.',
  'Cultivate a <strong>peer learning and collaborative environment</strong> that fosters personal, academic, and societal progress.',
];

/* ─── Main section ───────────────────────────────────────────────────────── */
export default function GlanceDGUAbout() {
  return (
    <>
      <section className="pb-[32px]">
        <div className="w-full max-w-[1360px] mx-auto px-[16px] bg-[#faf5fb] pt-[48px] pb-[20px] border-b border-[#d4b8d6]">
          <div className="">
            {/* Established label */}
            <motion.p
              variants={fadeUp}
              className="text-center text-[11px] sm:text-[15px] tracking-[0.18em] uppercase text-[#68176b] font-normal mb-3"
            >
              Established 2008 · Dehradun, Uttarakhand
            </motion.p>

            {/* University name */}
            <motion.h2
              variants={fadeUp}
              className="georgia-fonts text-center text-[24px] md:text-[26px] font-bold text-[#2a0630] leading-tight mb-3"
            >
              DBS Global University
            </motion.h2>

            {/* Italic subtitle */}
            <motion.p
              variants={fadeUp}
              className=" text-center text-sm sm:text-[15px] italic text-[#333] mb-3 font-medium italic"
            >
              Formerly <em>Doon Business School</em> — Shaping future-ready leaders for 17 years
            </motion.p>

            {/* Purple underline bar */}
            <motion.div
              variants={fadeUp}
              className="mx-auto w-[64px] h-[3px] bg-[#68176b] rounded"
              style={{ background: 'linear-gradient(90deg, #c8922a, #f5d48a)' }}
            />
          </div>
        </div>
        <div className="w-full max-w-[1360px] mx-auto px-[16px] lg:pt-[32px] pt-[24px]  lg:px-[32px] ">
          <motion.div
            variants={fadeUp}
            className="border-l-4 georgia-fonts border-[#68176b] lg:py-[44px] py-[24px] px-[24px] lg:px-[48px] shadow-[0_2px_16px_rgba(104,23,107,0.08)] space-y-4 text-[13.5px] sm:text-[18px] leading-relaxed text-[#333]"
          >
            <p>
              The University is approved by the{' '}
              <strong className="text-[#68176b]">University Grants Commission (UGC)</strong> under Section 22 &amp; 2(f)
              and is notified and listed by the State Government of Uttarakhand under the{' '}
              <strong className="text-[#68176b]">Uttarakhand Private University Act 2023</strong> Section (7) Sub
              Section (1), and is a proud member of the{' '}
              <strong className="text-[#68176b]">Association of Indian Universities (AIU)</strong>.
            </p>

            <p>
              Over the past <strong className="text-[#68176b]">17 years</strong>, DBS has built a strong reputation for
              excellence through its flagship Business Administration programs (
              <strong className="text-[#68176b]">BBA and MBA</strong>) and has now expanded into a full-fledged
              university (granted university status in <strong>2024</strong>). The University has{' '}
              <strong className="text-[#68176b]">300+ employees and 3,000+ students</strong>, offering a wide array of
              interdisciplinary and multidisciplinary programs across{' '}
              <strong className="text-[#68176b]">
                Engineering, Media, Law, Agriculture, Pharmacy, Liberal Arts and Management
              </strong>
              , with approvals from <strong className="text-[#68176b]">BCI</strong> (Bar Council of India) and{' '}
              <strong className="text-[#68176b]">PCI</strong> (Pharmacy Council of India).
            </p>

            <p>
              Led by the visionary President, <strong className="text-[#68176b]">Mr. Mohit Aggarwal</strong>, the
              University is committed to offering programs that prioritize{' '}
              <strong className="text-[#68176b]">
                skill development, industry relevance, and experiential learning
              </strong>
              . Every program is designed in collaboration with leading industry partners and is enriched with
              value-added certifications such as{' '}
              <strong className="text-[#68176b]">SAP, SAS Six Sigma, NISM, ACCA, ICA, Alteryx, HCL Tech</strong>, and
              more — ensuring that students graduate as industry-ready professionals. To promote future-ready education,
              all programs integrate <strong className="text-[#68176b]">AI-embedded learning</strong>, contemporary
              tools, and 21st-century skills. Students are encouraged to grow beyond academics and think beyond
              conventional boundaries by actively participating in more than{' '}
              <strong className="text-[#68176b]">25+ student-led clubs and committees</strong>, fostering leadership,
              creativity, collaboration, and holistic development.
            </p>

            {/* Italic closing quote */}
            <p className="georgia-fonts italic text-[#68176b] font-[800] text-[13px] sm:text-[18px] mt-2 border-l-3 border-[#c8922a] pl-3">
              At its core, DBS Global University stands for innovation, integrity, and inspiration.
            </p>
          </motion.div>
          <div className="border border-[#d4b8d6] mt-[28px]">
            <div
              className="w-full lg:py-[24px] py-[20px] px-[24px] lg:px-[40px] flex items-center gap-3 border-b-3 border-[#c8922a]"
              style={{ background: 'linear-gradient(135deg, #2a0630 0%, #68176b 50%, #4a0f4d 100%)' }}
            >
              <span className="flex items-center justify-center w-8 h-8 rounded-full border border-[#c8922a] text-[#f5d48a] shrink-0">
                <Clock4 className="w-4 h-4" />
              </span>
              <h2 className="text-[15px] sm:text-[17px] font-bold text-white tracking-wide uppercase">
                Mission &amp; Vision
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
                variants={stagger}
                className="p-6 sm:p-8 border-r border-[#d4b8d6] bg-[#faf5fb]"
              >
                <motion.div variants={fadeUp} className="mb-5 flex items-center">
                  <h3 className="text-[13px] sm:text-[20px] font-bold tracking-[0.22em] uppercase text-[#68176b]">
                    MISSION
                  </h3>
                  <div
                    className="ml-1.5 w-full h-[1px]"
                    style={{ background: 'linear-gradient(90deg, #c8922a, transparent)' }}
                  />
                </motion.div>

                <motion.ul variants={stagger} className="space-y-3.5">
                  {MISSION_POINTS.map((point, idx) => (
                    <motion.li
                      key={idx}
                      variants={fadeUp}
                      className={`flex georgia-fonts items-start gap-3 text-[13px] sm:text-[17px] leading-relaxed text-[#2a002b] pb-3.5 ${
                        idx !== MISSION_POINTS.length - 1 ? 'border-b border-[#d4b8d6]' : ''
                      }`}
                    >
                      <span className="mt-[8px] shrink-0 text-[#c8922a] text-[6px]">
                        <FontAwesomeIcon icon={faCircle} className="w-1 h-1" />
                      </span>
                      <span>{parse(point)}</span>
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
                variants={stagger}
                className="bg-white p-6 sm:p-8 "
              >
                <motion.div variants={fadeUp} className="mb-5 flex items-center">
                  <h3 className="text-[13px] sm:text-[20px] font-bold tracking-[0.22em] uppercase text-[#68176b]">
                    Vision
                  </h3>
                  <div
                    className="ml-1.5 w-full h-[1px]"
                    style={{ background: 'linear-gradient(90deg, #c8922a, transparent)' }}
                  />
                </motion.div>

                <motion.blockquote variants={fadeUp} className="border-l-4 border-[#68176b] pl-4 sm:pl-5">
                  <p className="georgia-fonts italic text-[13.5px] sm:text-[15px] leading-relaxed text-[#333]">
                    To be <strong className="text-[#68176b] not-italic">globally recognized</strong> for delivering{' '}
                    <strong className="text-[#68176b] not-italic">quality education</strong> and{' '}
                    <strong className="text-[#68176b] not-italic">
                      embracing emerging technologies &amp; Innovation
                    </strong>
                    , while empowering <strong className="text-[#68176b] not-italic">future leaders</strong> to shape a{' '}
                    <strong className="text-[#68176b] not-italic">sustainable and progressive world</strong>.
                  </p>
                </motion.blockquote>
              </motion.div>
            </div>

            <div
              className="w-full lg:py-[24px] py-[20px] px-[24px] lg:px-[40px] flex items-center gap-3 justify-center"
              style={{ background: 'linear-gradient(135deg, #2a0630 0%, #68176b 50%, #4a0f4d 100%)' }}
            >
              <p className="georgia-fonts italic text-[13px] sm:text-[14.5px] text-[#f5d48a] font-semibold tracking-wide text-center">
                DBS Global University — Innovation · Integrity · Inspiration
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
