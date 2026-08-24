'use client';

import React, { useRef, useState } from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
};

const placements = [
  {
    id: 1,
    image: 'images/home/placement-update-img-1.webp',
    date: '03 Aug, 2026',
    title: 'Three DGU B.Tech Students Selected for IEEE Summer of Code 2026',
    description:
      'Three B.Tech students of DBS Global University — Sankalp Jaiswal, Anirudh Jakhotia and Shaurya Singh — have been selected for the IEEE Summer of Code 2026.',
    link: 'three-dgu-btech-students',
  },

  {
    id: 2,
    image: 'images/home/placement-update-img-2.webp',
    date: '30 Jun, 2026',
    title: 'IND Global Realty Selects Students Through Campus Recruitment',
    description:
      'DBS Global University is pleased to announce the successful placement of its students at IND Global Realty, a leading player in the real estate industry.',
    link: 'ind-global-realty',
  },

  {
    id: 3,
    image: 'images/home/placement-update-img-3.webp',
    date: '18 May, 2026',
    title: 'Student Secures Placement at Ronak Group Africa, a Global FMCG and Pharma Conglomerate',
    description:
      'Continuing its strong placement momentum in global markets, the institution celebrates another successful placement as a student secures an opportunity with Ronak Group Africa.',
    link: 'student-secures-placement-at-ronak-group',
  },

  {
    id: 4,
    image: 'images/home/placement-update-img-4.webp',
    date: '15 May, 2026',
    title: 'AI Focused Learning Translates into AI-Ready Placement Success at Centific',
    description:
      'Another milestone has been added to the growing placement achievements of the institution as Kohinoor Kaur has secured a placement at Centific.',
    link: 'ai-focused-learning-translates',
  },

  {
    id: 5,
    image: 'images/home/placement-update-img-5.webp',
    date: '12 May, 2026',
    title: 'Celebrating Future Ready Talent Entering the Banking and Insurance Industry with HDFC Life',
    description:
      'Rolling strong and high in the placement momentum, the institution celebrates the successful placement of Ojasvi Mishra with HDFC Life.',
    link: 'celebrating-future-ready-talent',
  },

  {
    id: 6,
    image: 'images/home/placement-update-img-6.webp',
    date: '07 May, 2026',
    title: 'Beginning the Corporate Journey with HCL India',
    description:
      'The University continues to strengthen its placement achievements as its students have successfully secured positions with HCL India.',
    link: 'corporate-journey-with-hcl',
  },

  {
    id: 7,
    image: 'images/home/placement-update-img-7.webp',
    date: '02 May, 2026',
    title: 'Perseverance Rewarded as Eleven Students Secure Careers with Shree Cement',
    description:
      'Demonstrating their talent, determination, and industry readiness, eleven students have earned placement offers from Shree Cement.',
    link: 'eleven-students-secure-careers',
  },

  {
    id: 8,
    image: 'images/home/placement-update-img-8.webp',
    date: '05 Apr, 2026',
    title: 'DBS Global University Strengthens Career Outcomes Through High Placements at Tech Mahindra',
    description:
      'DBS Global University, Dehradun, is thrilled to share the successful placements of its students at Tech Mahindra.',
    link: 'dbs-global-university-strengthens-career-outcomes-through-high-placements-at-tech-mahindra',
  },

  {
    id: 9,
    image: 'images/home/placement-update-img-9.webp',
    date: '04 Apr, 2026',
    title: 'Beginning the Corporate Journey with Hafele India',
    description:
      'DBS Global University students secure placements at Hafele India, marking another successful step in their corporate journey.',
    link: 'dbs-global-university-student-secure-placements-at-hafele',
  },

  {
    id: 10,
    image: 'images/home/placement-update-img-10.webp',
    date: '03 Apr, 2026',
    title: 'DGU strengthens Placement Record with Asian Paints',
    description: 'DBS Global University proudly announces another successful placement milestone with Asian Paints.',
    link: 'dbs-global-university-strengthens-placement-record-with-asian-paints',
  },

  {
    id: 11,
    image: 'images/home/placement-update-img-11.webp',
    date: '03 Apr, 2026',
    title: 'DBS Global University Celebrates Student Placements at Deloitte',
    description:
      'DBS Global University is proud to congratulate Harshita Singh, Kinshul Vijay, Naman Sharma, and Nishant Kumar for securing placements at Deloitte.',
    link: 'dbs-global-university-celebrates-student-placement-at-deloitte',
  },

  {
    id: 12,
    image: 'images/home/placement-update-img-12.webp',
    date: '02 Apr, 2026',
    title: 'DBS Global University Students Secure Placements at Crescendo',
    description:
      'DBS Global University proudly congratulates its students on securing placements with Crescendo, marking an important milestone in their careers.',
    link: 'dbs-global-university-students-secure-placements-at-crescendo',
  },

  {
    id: 13,
    image: 'images/home/placement-update-img-13.webp',
    date: '31 Mar, 2026',
    title: 'DBS Global University Students Secure SAP Roles at Tech Mahindra',
    description:
      'We congratulate each of the students on this accomplishment and wish them continued success as they step into the dynamic world of SAP and technology.',
    link: 'dbs-global-university-students-secure-sap-roles-at-tech-mahindra',
  },

  {
    id: 14,
    image: 'images/home/placement-update-img-14.webp',
    date: '30 Mar, 2026',
    title: 'Growing into the Manufacturing Career with Hero Cycles',
    description:
      'At the university, consistent grooming, hands-on learning, and close industry interaction are helping students build successful careers in the manufacturing sector.',
    link: 'career-with-hero-cycles',
  },

  {
    id: 15,
    image: 'images/home/placement-update-img-15.webp',
    date: '29 Mar, 2026',
    title: 'Rising in the cement industry after a successful placement in JK Cement',
    description:
      'At the university, focused grooming, continuous industry exposure, and practical learning are shaping students for successful careers in the cement industry.',
    link: 'placement-in-jk-cement',
  },

  {
    id: 16,
    image: 'images/home/placement-update-img-16.webp',
    date: '28 Mar, 2026',
    title: 'Securing a successful placement in Compliance Roles with AML RightSource',
    description:
      'At the university, a strong focus on industry exposure, analytical skill-building, and practical learning is preparing students for successful compliance careers.',
    link: 'compliance-roles-with-aml-right-source',
  },

  {
    id: 17,
    image: 'images/home/placement-update-img-17.webp',
    date: '07 Mar, 2026',
    title: 'Journey of Being a Future Realtor Begins with Workians Realty',
    description:
      'At the university, continuous industry exposure, practical learning, and focused mentoring are helping students build their careers in real estate.',
    link: 'workians',
  },

  {
    id: 18,
    image: 'images/home/placement-update-img-18.webp',
    date: '04 Mar, 2026',
    title: 'Stepping into an EdTech career after a successful placement with Great Lakes',
    description:
      'At the university, continuous mentoring, industry exposure, and a strong focus on applied learning are helping students build successful careers in EdTech.',
    link: 'placement-with-great-lakes',
  },

  {
    id: 19,
    image: 'images/home/placement-update-img-19.webp',
    date: '03 Mar, 2026',
    title: 'Achieving the dream of being placed with Kryoss',
    description:
      'At the university, a strong focus on industry exposure, practical learning, and continuous mentoring is helping students achieve their career aspirations.',
    link: 'being-placed-with-kryoss',
  },

  {
    id: 20,
    image: 'images/home/placement-update-img-20.webp',
    date: '02 Mar, 2026',
    title: 'A strong start in the finance industry with Direct Credit, The MSME Experts',
    description:
      'At the university, a strong emphasis on practical exposure, industry interaction, and continuous mentoring is helping students begin successful careers in finance.',
    link: 'the-msme-experts',
  },

  {
    id: 21,
    image: 'images/home/placement-update-img-21.webp',
    date: '25 Feb, 2026',
    title: 'Mozaiq Automation Pvt. Ltd. Identifies Top Talent, Recruits Five Students Through Campus Placements',
    description:
      'Strengthening the growing relationship between industry and academia, Mozaiq Automation has recruited five talented students through campus placements.',
    link: 'mozaiq-automation-placement',
  },

  {
    id: 22,
    image: 'images/home/placement-update-img-22.webp',
    date: '20 Feb, 2026',
    title: 'Beginning the International Engineering journey with Aswan',
    description:
      'At the university, a strong focus on practical learning, industry exposure, and continuous mentoring is helping students begin their international engineering careers.',
    link: 'engineering-journey-with-aswan',
  },

  {
    id: 23,
    image: 'images/home/placement-update-img-23.webp',
    date: '20 Feb, 2026',
    title: 'Building innovative solutions in the top industry with Somany tiles',
    description:
      'Some careers begin with a clear plan, others take shape through exposure and exploration. DGU students continue to build successful industry careers.',
    link: 'top-industry-with-somany-tiles',
  },
];

/* ─── Single Card ─────────────────────────────────────────────────────────── */
function PlacementUpdateCard({ item }) {
  const [hovered, setHovered] = useState(false);

  return (
    <article
      className="group bg-white hover:-translate-y-[6px] transition duration-300 rounded-[12px] overflow-hidden shadow-[0_8px_25px_rgba(0,0,0,.05)] border border-[#b4aeae] flex flex-col w-full hover:shadow-[0_8px_32px_rgba(104,23,107,0.15)]"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* ── Image wrapper ── */}
      <div className="relative w-full overflow-hidden" style={{ paddingTop: '68%' }}>
        {/* Main card image — scales on hover */}
        <Image
          src={process.env.NEXT_PUBLIC_IMG_PATH + item.image}
          alt={item.title}
          fill
          sizes="(max-width: 640px) 92vw, (max-width: 1024px) 45vw, 32vw"
          className="object-cover object-top transition-transform duration-500 ease-in-out"
          style={{ transform: hovered ? 'scale(1.06)' : 'scale(1)' }}
          priority={item.id <= 3}
        />

        {/* Date bar — sits at bottom of the image */}
      </div>
      <div className="shadow-[0_4px_10px_rgba(0,0,0,.2)] bg-[#2d1250] text-white text-[13px] font-semibold text-center py-[7px] tracking-wide z-10">
        {item.date}
      </div>

      {/* ── Card body ── */}
      <div className="flex flex-col flex-1 px-4 pt-4 pb-5 gap-3">
        <h3 className="text-[14px] lg:text-[16px] font-bold text-[#131d3b] leading-snug line-clamp-3 group-hover:text-[#68176b] transition-colors duration-200">
          {item.title}
        </h3>

        <p className="text-[13px] lg:text-[15px] text-[#333] leading-relaxed line-clamp-3 flex-1">{item.description}</p>

        <a
          href={item.link}
          className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#68176b] hover:gap-3 transition-all duration-200 mt-1 group/link"
          aria-label={`View placement: ${item.title}`}
        >
          View Placement
          <ArrowRight
            size={14}
            className="transition-transform duration-200 group-hover/link:translate-x-1"
            aria-hidden="true"
          />
        </a>
      </div>
    </article>
  );
}

/* ─── Main Section ────────────────────────────────────────────────────────── */
export default function PlacementUpdatesSection() {
  const swiperRef = useRef(null);

  return (
    <section className="w-full pt-8 pb-10 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
        <motion.div
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
        >
          <div>
            <h2 className="text-[22px] sm:text-[26px] font-bold text-[#131d3b] mb-2">Placement Updates</h2>
            <p className="text-[15px] text-[#333] font-medium">
              Find out what&apos;s going on at University more Updates
            </p>
            <div className="w-10 h-[3px] bg-[#68176b] rounded-full mt-2" />
          </div>

          <div className="flex items-center gap-2 shrink-0 sm:justify-end justify-center">
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              aria-label="Previous placement update"
              className="lg:w-12 lg:h-12 w-9 h-9 rounded-full border cursor-pointer border-[#e0e0e0] flex items-center justify-center shadow-[0_4px_15px_rgba(0,0,0,.05)] text-[#68176b] transition-all duration-200 hover:bg-[#68176b] hover:text-white"
            >
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path
                  d="M10 3L5 8L10 13"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button
              onClick={() => swiperRef.current?.slideNext()}
              aria-label="Next placement update"
              className="lg:w-12 lg:h-12 w-9 h-9 rounded-full border cursor-pointer border-[#e0e0e0] flex items-center shadow-[0_4px_15px_rgba(0,0,0,.05)] justify-center text-[#68176b] transition-all duration-200 hover:bg-[#68176b] hover:text-white"
            >
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path
                  d="M6 3L11 8L6 13"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </motion.div>

        <motion.div
          className="overflow-hidden"
          style={{ margin: '-8px' }}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <Swiper
            modules={[Navigation, Autoplay]}
            loop={true}
            autoplay={{ delay: 3000, disableOnInteraction: false, pauseOnMouseEnter: true }}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            spaceBetween={20}
            breakpoints={{
              0: { slidesPerView: 1.1 },
              480: { slidesPerView: 1.5 },
              640: { slidesPerView: 2.1 },
              768: { slidesPerView: 2.4 },
              900: { slidesPerView: 2.8 },
              1024: { slidesPerView: 3 },
            }}
            style={{ alignItems: 'stretch', padding: '8px' }}
          >
            {placements.map((item) => (
              <SwiperSlide key={item.id} style={{ display: 'flex', height: 'auto' }}>
                <PlacementUpdateCard item={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
}
