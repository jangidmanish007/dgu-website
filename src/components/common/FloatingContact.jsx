'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPhone,
  faDownload,
  faPencil,
  faCamera,
  faVideoCamera,
  faArrowRight,
  faHeadset,
} from '@fortawesome/free-solid-svg-icons';

const ICON_SIZE = 48; // px

const actions = [
  {
    label: 'Call Us',
    href: 'tel:+917259162060',
    icon: faPhone,
  },
  {
    label: 'Downloads',
    href: '/resources/downloads',
    icon: faDownload,
  },
  {
    label: 'Apply Now',
    href: '/admission',
    icon: faPencil,
  },
  {
    label: 'Photo Gallery',
    href: '/gallery',
    icon: faCamera,
  },
  {
    label: 'Video Gallery',
    href: '/videos',
    icon: faVideoCamera,
  },
];

// ─── Desktop: Single row item ─────────────────────────────────────────────────
function ActionItem({ action }) {
  const [hovered, setHovered] = useState(false);

  const isNative = action.href.startsWith('tel:') || action.href.startsWith('mailto:');
  const isExternal = action.href.startsWith('http');
  const El = isNative ? 'a' : Link;

  return (
    <div
      className="relative"
      style={{ width: ICON_SIZE, height: ICON_SIZE }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Label panel — slides out to the left */}
      <div
        aria-hidden="true"
        className="absolute rounded-l-md top-0 right-full flex items-center justify-center overflow-hidden"
        style={{
          height: ICON_SIZE,
          width: hovered ? 140 : 0,
          backgroundColor: '#0000006e',
          transition: 'width 0.3s ease',
          filter: 'brightness(0.88)',
          whiteSpace: 'nowrap',
        }}
      >
        <span
          className="text-white text-[16px] font-semibold tracking-wide px-3 select-none"
          style={{
            opacity: hovered ? 1 : 0,
            transition: 'opacity 0.2s ease 0.1s',
          }}
        >
          {action.label}
        </span>
      </div>

      {/* Icon button */}
      <El
        href={action.href}
        aria-label={action.label}
        {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        className="flex items-center justify-center text-white hover:bg-[#0000006e] hover:text-[#ffa500]"
        style={{
          width: ICON_SIZE,
          height: ICON_SIZE,
          transition: 'background-color 0.25s ease',
        }}
      >
        <FontAwesomeIcon icon={action.icon} style={{ width: 20, height: 20 }} />
      </El>
    </div>
  );
}

// ─── Mobile: Bottom CTA bar ───────────────────────────────────────────────────
function MobileBottomBar({ visible }) {
  return (
    <div
      aria-hidden={!visible}
      className="md:hidden fixed bottom-0 left-0 right-0 z-[999]"
      style={{
        transform: `translateY(${visible ? '0%' : '100%'})`,
        opacity: visible ? 1 : 0,
        transition: 'transform 0.45s cubic-bezier(0.34,1.56,0.64,1), opacity 0.4s ease',
        pointerEvents: visible ? 'auto' : 'none',
      }}
    >
      {/* Gradient glow line at top */}
      <div
        className="w-full h-[2px]"
        style={{
          background: 'linear-gradient(90deg, transparent, #ffa500, #c850c0, #ffa500, transparent)',
        }}
      />

      {/* Glass bar */}
      <div
        className="flex items-center justify-center"
        style={{
          background: 'rgba(53, 12, 66, 0.72)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          boxShadow: '0 -8px 32px rgba(200, 80, 192, 0.25), 0 -2px 8px rgba(0,0,0,0.4)',
        }}
      >
        {/* Apply Now */}
        <Link
          href="/admission"
          aria-label="Apply Now"
          className="group flex-1 flex items-center justify-center gap-2 py-[10px] px-4 relative overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, #ffa500 0%, #ff6b00 100%)',
            boxShadow: '0 4px 20px rgba(255,165,0,0.45)',
            minWidth: 0,
          }}
        >
          <FontAwesomeIcon
            icon={faPencil}
            className="text-white relative z-10 shrink-0"
            style={{ width: 14, height: 14 }}
          />
          <span className="text-white font-bold text-sm tracking-wide relative z-10 truncate">Apply Now</span>
        </Link>
        <a
          href="tel:+917259162060"
          aria-label="Contact Us"
          className="group flex-1 flex items-center justify-center gap-2 py-[10px] px-4 relative overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, #c850c0 0%, #7b2ff7 100%)',
            boxShadow: '0 4px 20px rgba(200,80,192,0.45)',
            minWidth: 0,
          }}
        >
          <FontAwesomeIcon
            icon={faHeadset}
            className="text-white relative z-10 shrink-0"
            style={{ width: 14, height: 14 }}
          />
          <span className="text-white font-bold text-sm tracking-wide relative z-10 truncate">Contact Us</span>
        </a>
      </div>

      {/* Safe area spacer for phones with bottom nav bar */}
      <div
        style={{
          background: 'rgba(53, 12, 66, 0.72)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          height: 'env(safe-area-inset-bottom, 0px)',
        }}
      />
    </div>
  );
}

// ─── FloatingContact ──────────────────────────────────────────────────────────
export default function FloatingContact() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const atTop = scrollY < 100;
      const atBottom = window.innerHeight + scrollY >= document.documentElement.scrollHeight - 10;
      setVisible(!atTop && !atBottom);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* ── Desktop: right-side sliding panel (hidden on mobile) ── */}
      <div
        aria-hidden={!visible}
        className="hidden md:block fixed right-0 top-1/2 z-[999]"
        style={{
          transform: `translateY(-50%) translateX(${visible ? '0%' : '100%'})`,
          opacity: visible ? 1 : 0,
          transition: 'transform 0.5s ease, opacity 0.5s ease',
          pointerEvents: visible ? 'auto' : 'none',
        }}
      >
        <div className="flex flex-col rounded-l-md shadow-2xl backdrop-blur-[5px] bg-[#350c42d6]">
          {actions.map((action) => (
            <ActionItem key={action.label} action={action} />
          ))}
        </div>
      </div>

      {/* ── Mobile: fixed bottom CTA bar ── */}
      <MobileBottomBar visible={visible} />
    </>
  );
}
