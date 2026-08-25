'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import {
  faBriefcase,
  faGavel,
  faVideo,
  faLeaf,
  faLaptop,
  faBook,
  faFlask,
  faLightbulb,
  faChevronRight,
  faChevronDown,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

/* ─── Data ──────────────────────────────────────────────────────────────── */
const schools = [
  {
    id: 1,
    label: 'Doon',
    name: 'Business School',
    icon: faBriefcase,
    programs: [
      {
        name: 'MBA',
        slug: 'mba',
      },
      {
        name: 'BBA+MBA (Integrated Program in Management)',
        slug: 'bba-mba-integrated-program-in-management',
      },
      {
        name: 'BBA/BBA (Honours / Honours with Research)',
        slug: 'bba-honours-honours-with-research',
      },
      {
        name: 'B.Com/B.Com (Honours / Honours with Research)',
        slug: 'bcom-honours-honours-with-research',
      },
      {
        name: 'BBA Programs',
        slug: 'bba-programs',
      },
    ],
  },
  {
    id: 2,
    label: 'Doon School of',
    name: 'Law',
    icon: faGavel,
    programs: [
      {
        name: 'BA.LLB (Hons)',
        slug: 'ba-llb-hons',
      },
      {
        name: 'BBA.LLB (Hons)',
        slug: 'bba-llb-hons',
      },
      {
        name: 'LLB',
        slug: 'llb',
      },
      {
        name: 'LLM',
        slug: 'llm',
      },
    ],
  },
  {
    id: 3,
    label: 'Doon School of',
    name: 'Modern Media',
    icon: faVideo,
    programs: [
      {
        name: 'BA Film and TV',
        slug: 'ba-film-and-tv',
      },
      {
        name: 'BA Digital Media & Mass Communications',
        slug: 'ba-digital-media-and-mass-communications',
      },
      {
        name: 'MA (Mass Communication)',
        slug: 'ma-mass-communication',
      },
    ],
  },
  {
    id: 4,
    label: 'Doon School of',
    name: 'Modern Agriculture & Forestry',
    icon: faLeaf,
    programs: [
      {
        name: 'B.Sc Agriculture (Honours)',
        slug: 'bsc-agriculture',
      },
      {
        name: 'B.Sc Forestry (Honours)',
        slug: 'bsc-forestry',
      },
      {
        name: 'B.Sc with Specialization in Agri Business',
        slug: 'bsc-agri-business',
      },
      {
        name: 'M.Sc Agronomy',
        slug: 'msc-agronomy',
      },
    ],
  },
];

const schoolsRight = [
  {
    id: 5,
    label: 'Doon School of',
    name: 'Advanced Computing',
    icon: faLaptop,
    programs: [
      {
        name: 'B.Tech CSE',
        slug: 'btech',
      },
      {
        name: 'BCA with Dual Specialization',
        slug: 'bca-with-specialization',
      },
      {
        name: 'MCA',
        slug: 'mca',
      },
      {
        name: 'Integrated B.Tech CSE + M. Tech',
        slug: 'integrated-btech-mtech',
      },
      {
        name: 'Integrated B.Tech CSE + MBA',
        slug: 'integrated-btech-mba',
      },
      {
        name: 'M.Tech CSE / M.Tech CSE by Research',
        slug: 'mtech',
      },
    ],
  },
  {
    id: 6,
    label: 'Doon School of',
    name: 'Liberal Studies',
    icon: faBook,
    programs: [
      {
        name: 'Bachelor of Arts/Science (Honors/ Honors with Research)',
        slug: 'bachelor-of-arts-liberal-arts',
      },
      {
        name: 'MA',
        slug: 'ma',
      },
      {
        name: 'PhD (Doctor of Philosophy)',
        slug: 'phd-program',
      },
    ],
  },
  {
    id: 7,
    label: 'DBS School of',
    name: 'Pharmacy and Research',
    icon: faFlask,
    programs: [
      {
        name: 'B.Pharm (Bachelor of Pharmacy)',
        slug: 'bpharm',
      },
      {
        name: 'B.Pharm (Lateral Entry)',
        slug: 'bpharm-lateral-entry',
      },
      {
        name: 'M.Sc Pharmaceutical Chemistry',
        slug: 'msc-pharmaceutical-chemistry',
      },
      {
        name: 'D.Pharm',
        slug: 'dpharm',
      },
    ],
  },
  {
    id: 8,
    label: 'Doon School of',
    name: 'Future Skills',
    icon: faLightbulb,
    programs: [
      {
        name: 'SAP',
        slug: 'sap',
      },
      {
        name: 'SAS',
        slug: 'sas',
      },
      {
        name: 'Artificial Intelligence',
        slug: 'artificial-intelligence',
      },
      {
        name: 'E-Commerce',
        slug: 'e-commerce',
      },
      {
        name: 'AGILE & SCRUM',
        slug: 'agile-and-scrum',
      },
      {
        name: 'Big Data, Python & R',
        slug: 'big-data-python-and-r',
      },
      {
        name: 'NISM Certifications',
        slug: 'nism-certifications',
      },
      {
        name: 'International Logistics',
        slug: 'international-logistics',
      },
      {
        name: 'French Language',
        slug: 'french-language',
      },
      {
        name: 'Digital Marketing',
        slug: 'digital-marketing',
      },
      {
        name: 'HR Analytics',
        slug: 'hr-analytics',
      },
      {
        name: 'Derivatives',
        slug: 'derivatives',
      },
      {
        name: 'Data Analytics Tools',
        slug: 'data-analytics-tools',
      },
      {
        name: 'Rapidminer/Tableau',
        slug: 'rapidminer-tableau',
      },
      {
        name: 'Luxury Brand Marketing',
        slug: 'luxury-brand-marketing',
      },
      {
        name: 'Social Media Marketing',
        slug: 'social-media-marketing',
      },
      {
        name: 'Computerised Accounting Tally',
        slug: 'computerised-accounting-tally',
      },
      {
        name: 'Basic/Advanced Excel',
        slug: 'basic-advanced-excel',
      },
      {
        name: 'Big Data Analytics',
        slug: 'big-data-analytics',
      },
      {
        name: 'Machine Learning',
        slug: 'machine-learning',
      },
      {
        name: 'Internet of Things (IOT)',
        slug: 'internet-of-things',
      },
      {
        name: 'Java Technologies',
        slug: 'java-technologies',
      },
      {
        name: 'Website Development & Implementation',
        slug: 'website-development-and-implementation',
      },
      {
        name: '.NET Framework Networking',
        slug: 'net-framework-networking',
      },
      {
        name: 'Red Hat Linux',
        slug: 'red-hat-linux',
      },
    ],
  },
];

/* ─── Single school row with hover (desktop) / click (mobile) dropdown ──── */
function SchoolRow({ school, isOpen, onToggle, isMobile }) {
  const [hoverOpen, setHoverOpen] = useState(false);

  // On mobile use controlled isOpen; on desktop use local hover state
  const open = isMobile ? isOpen : hoverOpen;

  /* Desktop: hover handlers. Mobile: nothing (click handles it). */
  const hoverProps = isMobile
    ? {}
    : {
        onMouseEnter: () => setHoverOpen(true),
        onMouseLeave: () => setHoverOpen(false),
      };

  const handleHeaderClick = () => {
    if (isMobile) onToggle();
  };

  return (
    /* On desktop keep relative so the absolute dropdown works.
       On mobile position is normal flow (static) via Tailwind override. */
    <div className="relative lg:relative" {...hoverProps}>
      {/* ── Row header ─────────────────────────────────────────────────── */}
      <div className="relative border-b border-gray-200">
        {/* Trigger row */}
        <div
          onClick={handleHeaderClick}
          className={cn(
            'flex items-center justify-between px-0 py-3 cursor-pointer',
            'transition-transform duration-600 ease-out',
            open ? '-translate-y-2' : 'translate-y-0',
          )}
        >
          <div className="flex flex-col min-w-0">
            <span className="text-[10px] lg:text-[11px] text-[#000] leading-tight">{school.label}</span>
            <span
              className={cn(
                'text-[16px] lg:text-[1.25rem] font-medium leading-snug transition-colors duration-200',
                open ? 'text-[#68176b]' : 'text-[#222]',
              )}
            >
              {school.name}
            </span>
          </div>

          <div className="flex items-center gap-2 shrink-0 ml-2">
            {/* Font Awesome school icon */}
            <FontAwesomeIcon
              icon={school.icon}
              className={cn(
                'w-2 h-2 text-[13px] transition-colors duration-200',
                open ? 'text-[#68176b]' : 'text-[#562b63]',
              )}
            />
            {/* Chevron toggles between right / down */}
            <FontAwesomeIcon
              icon={open ? faChevronDown : faChevronRight}
              className="w-3 h-3 text-[13px] text-[#68176b] transition-transform duration-200"
            />
          </div>
        </div>

        {/* Animated bottom border — anchored to the header bottom */}
        <span
          className={cn(
            'absolute bottom-0 left-0 h-[2px] bg-[#68176b]',
            'transition-all duration-300 ease-out',
            open ? 'w-full' : 'w-0',
          )}
        />
      </div>

      {/* ── Dropdown ────────────────────────────────────────────────────
          Desktop  → absolute, overlays rows below (no layout shift)
          Mobile   → static/relative, pushes content down naturally     */}
      <div
        className={cn(
          'bg-white z-20 rounded-b-md',
          /* Desktop: absolute overlay */
          'lg:absolute lg:left-0 lg:right-0',
          'transition-all duration-300 ease-out origin-top',
          open ? 'opacity-100 scale-y-100 pointer-events-auto' : 'opacity-0 scale-y-95 pointer-events-none',
          /* Mobile: collapse height instead of absolute overlay */
          isMobile ? (open ? 'max-h-[500px]' : 'max-h-0 overflow-hidden') : '',
        )}
      >
        <ul className="px-3 py-2 space-y-0.5 max-h-[350px] overflow-y-auto nav-dropdown-scroll">
          {school.programs.map((prog, i) => (
            <li key={i} className="min-h-[40px]">
              <a
                href={prog?.slug}
                className={cn(
                  'group flex items-center gap-1.5 text-[14px] py-1 leading-snug',
                  'text-[#562b63] transition-all duration-300',
                  'hover:text-[#000] hover:font-semibold hover:translate-x-1',
                  'transform',
                )}
                style={{ display: 'flex' }}
              >
                {prog?.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

/* ─── Quick Contact Form ────────────────────────────────────────────────── */
function QuickContactForm() {
  return (
    <div className="bg-[#68176b] rounded-sm p-4 w-full">
      <h3 className="text-white text-center text-md font-semibold mb-5 tracking-wide">Quick Contact</h3>

      <div className="space-y-2.5">
        {/* Name */}
        <input
          type="text"
          placeholder="Enter Name *"
          className="w-full bg-white border border-white/30 text-gray-800 placeholder:text-gray-400 text-sm px-3 py-1 focus:outline-none focus:ring-1 focus:ring-white/60 rounded-none"
        />

        {/* Email */}
        <input
          type="email"
          placeholder="Enter Email Address *"
          className="w-full bg-white border border-white/30 text-gray-800 placeholder:text-gray-400 text-sm px-3 py-1 focus:outline-none focus:ring-1 focus:ring-white/60 rounded-none"
        />

        {/* Phone with country code */}
        <div className="flex gap-0">
          <div className="flex items-center bg-white border border-white/30 px-2.5 text-gray-700 text-sm font-medium shrink-0 select-none">
            +91 ▾
          </div>
          <input
            type="tel"
            placeholder="Enter Mobile Number *"
            className="flex-1 bg-white border border-white/30 border-l-0 text-gray-800 placeholder:text-gray-400 text-sm px-3 py-1 focus:outline-none focus:ring-1 focus:ring-white/60 rounded-none"
          />
        </div>

        {/* Course select */}
        <select className="w-full bg-white border border-white/30 text-gray-500 text-sm px-3 py-1 focus:outline-none focus:ring-1 focus:ring-white/60 rounded-none appearance-none cursor-pointer">
          <option value="">Select Course *</option>
          <option>MBA</option>
          <option>BBA</option>
          <option>B.Tech</option>
          <option>BA.LLB</option>
          <option>B.Pharm</option>
          <option>B.Sc. Agriculture</option>
        </select>

        {/* State + City */}
        <div className="flex gap-2">
          <select className="flex-1 bg-white border border-white/30 text-gray-500 text-sm px-3 py-1 focus:outline-none focus:ring-1 focus:ring-white/60 rounded-none appearance-none cursor-pointer">
            <option value="">Select State *</option>
            <option>Uttarakhand</option>
            <option>Delhi</option>
            <option>Uttar Pradesh</option>
            <option>Maharashtra</option>
          </select>
          <select className="flex-1 bg-white border border-white/30 text-gray-500 text-sm px-3 py-1 focus:outline-none focus:ring-1 focus:ring-white/60 rounded-none appearance-none cursor-pointer">
            <option value="">Select City *</option>
            <option>Dehradun</option>
            <option>Delhi</option>
            <option>Noida</option>
            <option>Mumbai</option>
          </select>
        </div>

        {/* Captcha placeholder */}
        <div className="flex gap-2">
          <div className="flex-1 bg-white border border-white/30 flex items-center justify-between px-3 py-1">
            <span className="text-sm font-mono text-gray-700 tracking-widest select-none line-through decoration-wavy">
              fde0af
            </span>
            <button type="button" className="text-gray-400 hover:text-gray-600 text-sm">
              ⟳
            </button>
          </div>
          <input
            type="text"
            placeholder="Enter Captcha"
            className="flex-1 bg-white w-full border border-white/30 text-gray-800 placeholder:text-gray-400 text-sm px-3 py-1 focus:outline-none focus:ring-1 focus:ring-white/60 rounded-none"
          />
        </div>

        {/* Consent */}
        <label className="flex items-start gap-2 cursor-pointer">
          <input type="checkbox" className="mt-0.5 shrink-0 accent-yellow-400" />
          <span className="text-[11px] text-white/80 leading-snug">
            By clicking on &apos;Submit,&apos; I agree to receive information and updates from DBS Global University via
            SMS, WhatsApp, RCS, phone calls, and email.
          </span>
        </label>

        {/* Submit */}
        <div className="flex justify-center pt-1">
          <button
            type="submit"
            className="bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-semibold text-sm px-8 py-2 transition-colors duration-200 cursor-pointer"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

/* ─── Animation variants ────────────────────────────────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
};

const slideInRight = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const staggerChildren = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

/* ─── Main Section ──────────────────────────────────────────────────────── */
export default function SchoolsSection() {
  const [openId, setOpenId] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 1023px)');
    setIsMobile(mq.matches);
    const handler = (e) => {
      setIsMobile(e.matches);
      setOpenId(null);
    };
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  const handleToggle = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="w-full lg:pt-10 pt-10 lg:pb-20 pb-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          className="text-center mb-8"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <h2 className="text-xl sm:text-[25px] font-bold text-gray-900 tracking-wide uppercase">
            SCHOOLS @ DBS Global University
          </h2>
          <div className="mt-2 mx-auto w-12 h-[3px] bg-[#68176b]" />
        </motion.div>

        {/* Body: two-column schools list + form */}
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Left + Centre: school columns */}
          <motion.div
            className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-x-6"
            variants={staggerChildren}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            {/* Left column */}
            <div className="flex flex-col gap-y-3 lg:gap-y-12">
              {schools.map((school) => (
                <motion.div key={school.id} variants={fadeUp}>
                  <SchoolRow
                    school={school}
                    isMobile={isMobile}
                    isOpen={openId === school.id}
                    onToggle={() => handleToggle(school.id)}
                  />
                </motion.div>
              ))}
            </div>
            {/* Right column */}
            <div className="mt-4 sm:mt-0 flex flex-col gap-y-6 lg:gap-y-12">
              {schoolsRight.map((school) => (
                <motion.div key={school.id} variants={fadeUp}>
                  <SchoolRow
                    school={school}
                    isMobile={isMobile}
                    isOpen={openId === school.id}
                    onToggle={() => handleToggle(school.id)}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
          <div className="  overflow-hidden">
            {/* Right: Quick Contact form */}
            <motion.div
              className="w-full lg:w-[310px] xl:w-[391px] shrink-0"
              variants={slideInRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <QuickContactForm />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
