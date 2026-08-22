'use client';

import React from 'react';
import Image from 'next/image';
import Marquee from 'react-fast-marquee';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

/* ─── Recruiter data ─────────────────────────────────────────────────────
   Names mapped to the 22 available recruiter images.
   Update the `name` field to match whatever label you want shown in the tooltip.
──────────────────────────────────────────────────────────────────────── */
const recruiters = [
  { id: 1, src: '/images/recuite-img-1.webp', name: 'Grant Thornton' },
  { id: 2, src: '/images/recuite-img-2.webp', name: 'Greenlam Industries' },
  { id: 3, src: '/images/recuite-img-3.webp', name: 'Häfele' },
  { id: 4, src: '/images/recuite-img-4.webp', name: 'HCL Tech' },
  { id: 5, src: '/images/recuite-img-5.webp', name: 'ICICI Bank' },
  { id: 6, src: '/images/recuite-img-6.webp', name: 'Infosys' },
  { id: 7, src: '/images/recuite-img-7.webp', name: 'ITC Limited' },
  { id: 8, src: '/images/recuite-img-8.webp', name: 'Deloitte' },
  { id: 9, src: '/images/recuite-img-9.webp', name: 'Wipro' },
  { id: 10, src: '/images/recuite-img-10.webp', name: 'TCS' },
  { id: 11, src: '/images/recuite-img-11.webp', name: 'Accenture' },
  { id: 12, src: '/images/recuite-img-12.webp', name: 'Tech Mahindra' },
  { id: 13, src: '/images/recuite-img-13.webp', name: 'Amazon' },
  { id: 14, src: '/images/recuite-img-14.webp', name: 'Reliance Retail' },
  { id: 15, src: '/images/recuite-img-15.webp', name: 'HDFC Bank' },
  { id: 16, src: '/images/recuite-img-16.webp', name: 'Bajaj Finserv' },
  { id: 17, src: '/images/recuite-img-17.webp', name: 'Capgemini' },
  { id: 18, src: '/images/recuite-img-18.webp', name: 'Cognizant' },
  { id: 19, src: '/images/recuite-img-19.webp', name: 'IBM' },
  { id: 20, src: '/images/recuite-img-20.webp', name: 'Myntra' },
  { id: 21, src: '/images/recuite-img-21.webp', name: 'Zomato' },
  { id: 22, src: '/images/recuite-img-22.webp', name: 'Swiggy' },
];

/* ─── Single recruiter logo with tooltip ────────────────────────────────── */
function RecruiterLogo({ recruiter }) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <div className="flex items-center justify-center mx-4 lg:mx-6 cursor-pointer select-none">
          <div className="relative lg:w-[188px] w-[140px] h-[70px] lg:h-[90px] transition-transform duration-200 hover:scale-105">
            <Image src={recruiter.src} alt={recruiter.name} fill sizes="110px" className="object-contain" />
          </div>
        </div>
      </TooltipTrigger>
      {/* Tooltip appears above; arrow points down toward the logo */}
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
      <section className="w-full pb-10 bg-white">
        {/* Heading */}
        <div className="text-center mb-6">
          <h2 className="text-[18px] sm:text-[25px] font-bold text-[#131d3b] tracking-wide">Top Recruiters 2025-26</h2>
          <div className="mt-2 mx-auto w-10 h-[3px] bg-[#68176b] rounded-full" />
        </div>

        {/* Marquee */}
        <Marquee gradient={false} speed={45} pauseOnHover={true} className="overflow-hidden">
          {recruiters.map((recruiter) => (
            <RecruiterLogo key={recruiter.id} recruiter={recruiter} />
          ))}
        </Marquee>
      </section>
    </TooltipProvider>
  );
}
