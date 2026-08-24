'use client';

import React, { useState, useEffect } from 'react';

const NAV_TABS = [
  { id: 'about', label: 'DGU AT A GLANCE', sectionId: 'section-about' },
  { id: 'approvals', label: 'APPROVALS & ACCREDITATION', sectionId: 'section-approvals' },
  { id: 'rankings', label: 'RANKINGS & RECOGNITION', sectionId: 'section-rankings' },
];

export default function GlanceTabing() {
  const [activeTab, setActiveTab] = useState('about');

  /* ─── Highlight active tab based on scroll position ────────────────────── */
  useEffect(() => {
    const observers = [];

    NAV_TABS.forEach(({ id, sectionId }) => {
      const el = document.getElementById(sectionId);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveTab(id);
        },
        { threshold: 0.25 },
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  /* ─── Scroll to section ─────────────────────────────────────────────────── */
  const handleTabClick = (tab) => {
    setActiveTab(tab.id);
    const el = document.getElementById(tab.sectionId);
    if (!el) return;
    // offset accounts for sticky headers — adjust 80 if your header height differs
    const y = el.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({ top: y, behavior: 'smooth' });
  };

  return (
    <div
      className="max-w-[1366px] px-[16px] mx-auto w-full py-4 mt-[16px] border-b-3 border-[#c8922a]"
      style={{ background: 'linear-gradient(135deg, #2a0630 0%, #68176b 50%, #4a0f4d 100%)' }}
    >
      {/* Scrollable on mobile, centered flex on larger screens */}
      <div className="flex items-center justify-start sm:justify-center gap-2 sm:gap-4 overflow-x-auto scrollbar-hide flex-nowrap">
        {NAV_TABS.map((tab) => (
          <button
            key={tab.id}
            onClick={() => handleTabClick(tab)}
            className={`
              shrink-0 px-4 sm:px-6 py-2 sm:py-2.5 text-[11px] sm:text-xs md:text-[15px]
              font-semibold tracking-wider uppercase whitespace-nowrap
              border rounded-0 transition-all duration-200 cursor-pointer
              ${
                activeTab === tab.id
                  ? 'bg-[#c8922a] text-[#2a0630] border-[#c8922a]'
                  : 'bg-transparent text-[#f5d48a] border-[#c8922a] hover:bg-[#c8922a] hover:text-[#2a0630]'
              }
            `}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  );
}
