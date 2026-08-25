'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronUp } from 'lucide-react';

// ─── Data ─────────────────────────────────────────────────────────────────────
const quickLinks = [
  { label: 'About', href: '/about-dgu' },
  { label: 'IQAC', href: '/iqac' },
  { label: 'Career', href: '/career' },
  { label: 'Grievance Committees', href: '/grievance-committees' },
  { label: 'Admissions', href: '/admission' },
  { label: 'BCI Approval', href: '/bci-approval' },
  { label: 'Latest at DGU', href: '/news-updates' },
  { label: 'Research', href: '/academics/research' },
  { label: 'UGC Letter', href: '/ugc-letter' },
  { label: 'Association of Indian Universities', href: '/association-of-indian-universities' },
  { label: 'Blog', href: '/blog' },
  { label: 'Student Area', href: '/student-area' },
];

const bottomLinks = [
  { label: 'Student Grievance Redressal Committee', href: '/student-grievance-redressal-committee' },
  { label: 'Constitution of Anti Narcotic', href: '/anti-narcotic' },
  { label: 'Constitution of Internal Complaints', href: '/internal-complaints' },
  { label: 'Anti Ragging Committee', href: '/anti-ragging' },
  { label: 'Public Self Disclosure', href: '/public-self-disclosure' },
  { label: 'IQAC Committee', href: '/iqac-committee' },
  { label: 'The Uttarakhand Private University Act 2024', href: '/uttarakhand-private-university-act-2024' },
  { label: 'Institutional Development Plan', href: '/institutional-development-plan' },
  { label: 'PCI Approval', href: '/pci-approval' },
  { label: 'UGC Proforma/Mandatory Disclouser', href: '/ugc-proforma' },
  { label: 'Gazette Notification for establishment of DBS Global University', href: '/gazette-notification' },
  { label: 'Equal Opportunity Cell', href: '/equal-opportunity-cell' },
  { label: 'Ombudsperson', href: '/ombudsperson' },
  { label: 'Form No. 10AC for Section 80 G for donation', href: '/form-10ac' },
  { label: 'Downloads', href: '/resources/downloads' },
  { label: 'dbsuniversity.edugrievance.com', href: 'https://dbsuniversity.edugrievance.com' },
  { label: 'Student Hand Book', href: '/student-hand-book' },
  { label: 'UGC Status', href: '/ugc-status' },
  { label: 'Model Status', href: '/model-status' },
  { label: 'Refund Policy', href: '/refund-policy' },
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Terms & Conditions', href: '/terms-conditions' },
];

const socialLinks = [
  {
    label: 'Instagram',
    href: 'https://instagram.com',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px]">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
  {
    label: 'Facebook',
    href: 'https://facebook.com',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px]">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    label: 'YouTube',
    href: 'https://youtube.com',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px]">
        <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px]">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: 'Twitter / X',
    href: 'https://x.com',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px]">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
];

// ─── Quick Contact Form (reused from SchoolsSection) ─────────────────────────
function generateCaptcha() {
  return Math.random().toString(36).substring(2, 8).toUpperCase();
}

function QuickContactForm({ hideHeading = false }) {
  const [captcha, setCaptcha] = useState('');

  useEffect(() => {
    setCaptcha(generateCaptcha());
  }, []);

  return (
    <div className="bg-[#562b63] p-4 sm:p-5 w-full">
      {!hideHeading && (
        <h3 className="text-white text-center text-[20px] sm:text-[22px] font-semibold mb-4 tracking-wide border-b border-white/30 py-2">
          Quick Contact
        </h3>
      )}

      <div className="space-y-2.5">
        {/* Name */}
        <input
          type="text"
          placeholder="Enter Name *"
          className="w-full bg-white border border-white/30 text-gray-800 placeholder:text-gray-400 text-sm px-3 py-[7px] focus:outline-none focus:ring-1 focus:ring-white/60 rounded-none"
        />

        {/* Email */}
        <input
          type="email"
          placeholder="Enter Email Address *"
          className="w-full bg-white border border-white/30 text-gray-800 placeholder:text-gray-400 text-sm px-3 py-[7px] focus:outline-none focus:ring-1 focus:ring-white/60 rounded-none"
        />

        {/* Phone with country code */}
        <div className="flex gap-0">
          <div className="flex items-center bg-white border border-white/30 px-3 text-gray-700 text-sm font-medium shrink-0 select-none">
            +91&nbsp;▾
          </div>
          <input
            type="tel"
            placeholder="Enter Mobile Number *"
            className="flex-1 bg-white border border-white/30 border-l-0 text-gray-800 placeholder:text-gray-400 text-sm px-3 py-[7px] focus:outline-none focus:ring-1 focus:ring-white/60 rounded-none"
          />
        </div>

        {/* Course select */}
        <select className="w-full bg-white border border-white/30 text-gray-500 text-sm px-3 py-[7px] focus:outline-none focus:ring-1 focus:ring-white/60 rounded-none appearance-none cursor-pointer">
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
          <select className="flex-1 bg-white border border-white/30 text-gray-500 text-sm px-3 py-[7px] focus:outline-none focus:ring-1 focus:ring-white/60 rounded-none appearance-none cursor-pointer">
            <option value="">Select State *</option>
            <option>Uttarakhand</option>
            <option>Delhi</option>
            <option>Uttar Pradesh</option>
            <option>Maharashtra</option>
          </select>
          <select className="flex-1 bg-white border border-white/30 text-gray-500 text-sm px-3 py-[7px] focus:outline-none focus:ring-1 focus:ring-white/60 rounded-none appearance-none cursor-pointer">
            <option value="">Select City *</option>
            <option>Dehradun</option>
            <option>Delhi</option>
            <option>Noida</option>
            <option>Mumbai</option>
          </select>
        </div>

        {/* Captcha */}
        <div className="flex gap-2">
          <div className="flex-1 bg-white border border-white/30 flex items-center justify-between px-3 py-[7px]">
            <span className="text-sm font-mono text-gray-700 tracking-widest select-none opacity-60 line-through decoration-wavy">
              {captcha}
            </span>
            <button
              type="button"
              onClick={() => setCaptcha(generateCaptcha())}
              className="text-gray-400 hover:text-gray-600 text-base leading-none ml-2"
            >
              ↻
            </button>
          </div>
          <input
            type="text"
            placeholder="Enter Captcha"
            className="flex-1 bg-white border border-white/30 text-gray-800 placeholder:text-gray-400 text-sm px-3 py-[7px] focus:outline-none focus:ring-1 focus:ring-white/60 rounded-none"
          />
        </div>

        {/* Consent */}
        <label className="flex items-start gap-2 cursor-pointer">
          <input type="checkbox" className="mt-0.5 shrink-0 accent-yellow-400" />
          <span className="text-[11px] text-white leading-snug">
            By clicking on &apos;Submit,&apos; I agree to receive information and updates from DBS Global University via
            SMS, WhatsApp, RCS, phone calls, and email.
          </span>
        </label>

        {/* Submit */}
        <div className="flex justify-center pt-1">
          <button
            type="submit"
            className="bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-semibold text-sm px-10 py-2 transition-colors duration-200 cursor-pointer"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── Collapsible section for mobile ─────────────────────────────────────────
function CollapsibleSection({ title, children }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-t border-white/20 lg:border-none">
      {/* Toggle button — mobile/tablet only */}
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between py-3 lg:hidden cursor-pointer"
        aria-expanded={open}
      >
        <span className="text-[15px] font-bold uppercase tracking-widest text-white">{title}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`w-4 h-4 text-white/70 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>

      {/* Content: hidden on mobile when closed, always visible on desktop */}
      <div
        className={[
          'overflow-hidden transition-all duration-350 ease-in-out',
          'lg:!max-h-none lg:overflow-visible lg:opacity-100',
          open ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0 lg:opacity-100',
        ].join(' ')}
      >
        {children}
      </div>
    </div>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────
export default function Footer() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY >= 200);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="bg-[#68176b] text-white">
      {/* ── Main footer body ── */}
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-10">
        {/*
          Layout:
          - Mobile  (<768px)  : single column stack
          - Tablet  (768–1023): logo col full width, then links + form 50/50
          - Desktop (≥1024px) : 3-column flex row (original design)
        */}
        <div className="flex flex-col lg:flex-row gap-8 xl:gap-12">
          {/* ── Col 1 — Logo + Address + Contact + Social ── */}
          <div className="flex flex-col gap-5 w-full lg:max-w-[433px] lg:shrink-0">
            {/* Logo */}
            <Link href="/" className="inline-block">
              <Image
                src="/images/logo-img.webp"
                alt="DBS Global University"
                width={200}
                height={76}
                className="h-[66px] sm:h-[76px] w-auto object-contain brightness-[10] contrast-75"
              />
            </Link>

            {/* Campus + City Office — side by side on tablet */}
            <div className="flex flex-col sm:flex-row sm:gap-6 lg:flex-col gap-5">
              {/* Campus */}
              <div className="sm:flex-1 lg:flex-none">
                <p className="text-[15px] font-bold uppercase tracking-widest text-white mb-2">Campus</p>
                <div className="flex items-start gap-2 text-white leading-snug">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-4 h-4 shrink-0 mt-0.5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-2.013 3.5-4.748 3.5-8.327a8 8 0 10-16 0c0 3.579 1.556 6.314 3.5 8.327a19.583 19.583 0 002.683 2.282 16.975 16.975 0 001.144.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-[14px] sm:text-[15px]">
                    MI-122, Behind Pharma City, Selaqui, Dehradun Uttarakhand, India – 248011
                  </span>
                </div>
              </div>

              {/* City Office */}
              <div className="sm:flex-1 lg:flex-none">
                <p className="text-[15px] font-bold uppercase tracking-widest text-white mb-2">City Office</p>
                <div className="flex items-start gap-2 text-white leading-snug">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-4 h-4 shrink-0 mt-0.5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-2.013 3.5-4.748 3.5-8.327a8 8 0 10-16 0c0 3.579 1.556 6.314 3.5 8.327a19.583 19.583 0 002.683 2.282 16.975 16.975 0 001.144.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-[14px] sm:text-[15px]">54 Subhash Road, Dehradun – 248001</span>
                </div>
              </div>
            </div>

            <div className="border-t border-white/20" />

            {/* Phone + Email — side by side on tablet */}
            <div className="flex flex-col sm:flex-row sm:gap-6 lg:flex-col gap-4">
              {/* Phone */}
              <div className="flex items-center gap-2 text-white text-[14px] sm:text-[15px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4 shrink-0"
                >
                  <path
                    fillRule="evenodd"
                    d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                    clipRule="evenodd"
                  />
                </svg>
                <a href="tel:+917259162060" className="hover:text-white/80 transition-colors">
                  +91 7259162060
                </a>
              </div>

              {/* Emails */}
              <div className="flex flex-col gap-1.5">
                <div className="flex items-center gap-2 text-white text-[14px] sm:text-[15px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-4 h-4 shrink-0"
                  >
                    <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                    <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                  </svg>
                  <a
                    href="mailto:admissions@doonbusinessschool.com"
                    className="hover:text-white/80 transition-colors break-all"
                  >
                    admissions@doonbusinessschool.com
                  </a>
                </div>
                <div className="flex items-center gap-2 text-white text-[14px] sm:text-[15px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-4 h-4 shrink-0"
                  >
                    <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                    <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                  </svg>
                  <a href="mailto:admissions@dgu.ac.in" className="hover:text-white/80 transition-colors">
                    admissions@dgu.ac.in
                  </a>
                </div>
              </div>
            </div>

            <div className="border-t border-white/20" />

            {/* Social icons */}
            <div className="flex items-center gap-1 flex-wrap">
              <span className="text-[15px] font-bold text-white mr-1">Follow Us :</span>
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-8 h-8 flex items-center justify-center text-white hover:bg-white/15 rounded-sm transition-colors"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* ── Col 2 + Col 3 wrapper (tablet: side-by-side; mobile: stacked) ── */}
          <div className="flex flex-col md:flex-row lg:flex-row gap-6 md:gap-8 flex-1 min-w-0">
            {/* Col 2 — Quick Links */}
            <div className="flex-1 min-w-0">
              {/* Desktop heading */}
              <p className="block text-[18px] font-normal uppercase tracking-widest text-white mb-5">Quick Links</p>

              {/* Desktop list */}
              <ul className="block space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="flex items-center gap-2 text-[15px] text-white hover:text-white/80 transition-colors group"
                    >
                      <span className="text-white/40 group-hover:text-white/70 transition-colors">—</span>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 3 — Quick Contact Form */}
            <div className="w-full md:w-[340px] lg:w-[380px] xl:w-[404px] shrink-0">
              {/* Desktop: always shown */}
              <div className="block">
                <QuickContactForm />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Bottom links bar ── */}
      <div className="border-t border-white/20">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 py-4">
          <div className="text-center text-[13px] sm:text-[14px] lg:text-[15px] text-white leading-6 sm:leading-7 flex flex-wrap justify-center">
            {bottomLinks.map((link, i) => (
              <span key={link.label}>
                <Link
                  href={link.href}
                  className="hover:text-white/80 transition-colors"
                  {...(link.href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                >
                  {link.label}
                </Link>
                {i < bottomLinks.length - 1 && <span className="mx-1 sm:mx-1.5 text-white/30">|</span>}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ── Copyright ── */}
      <div className="border-t border-white/20 py-3 px-4">
        <p className="text-center text-[13px] sm:text-[14px] lg:text-[15px] text-white">
          Copyright © 2026 DBS Global University. All Rights Reserved.
        </p>
      </div>

      {/* ── Scroll to Top ── */}
      <button
        onClick={scrollToTop}
        aria-label="Scroll to top"
        style={{ backgroundColor: '#390c46' }}
        className={[
          'fixed bottom-16 sm:bottom-8 cursor-pointer right-4 sm:right-6 z-50 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-sm shadow-lg',
          visible ? 'animate-subtle-bounce' : '',
          'transition-all duration-500',
          visible ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-6 pointer-events-none',
        ].join(' ')}
      >
        <ChevronUp className="h-4 w-4 sm:h-5 sm:w-5 text-white" aria-hidden="true" />
      </button>
    </footer>
  );
}
