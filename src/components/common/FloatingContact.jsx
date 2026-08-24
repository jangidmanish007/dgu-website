'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faDownload, faPencil, faCamera, faVideoCamera } from '@fortawesome/free-solid-svg-icons';

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

// ─── Single row item ──────────────────────────────────────────────────────────
function ActionItem({ action }) {
  const [hovered, setHovered] = useState(false);

  const isNative = action.href.startsWith('tel:') || action.href.startsWith('mailto:');
  const isExternal = action.href.startsWith('http');
  const El = isNative ? 'a' : Link;

  return (
    /*
      Outer wrapper — position:relative so the label can be placed absolutely.
      Width = ICON_SIZE px (just the icon column).
      The label expands to the LEFT outside this box via absolute positioning.
    */
    <div
      className="relative"
      style={{ width: ICON_SIZE, height: ICON_SIZE }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* ── Label panel — sits absolutely to the left of the icon ── */}
      <div
        aria-hidden="true"
        className="absolute rounded-l-md top-0 right-full flex items-center justify-center overflow-hidden"
        style={{
          height: ICON_SIZE,
          // Width animates 0 → 110px
          width: hovered ? 140 : 0,
          backgroundColor: '#0000006e',
          transition: 'width 0.3s ease',
          // Slightly darker shade for label panel
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

      {/* ── Icon button ── */}
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

// ─── FloatingContact ──────────────────────────────────────────────────────────
export default function FloatingContact() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY >= 100);
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // check on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      aria-hidden={!visible}
      className="fixed right-0 top-1/2 z-[999]"
      style={{
        transform: `translateY(-50%) translateX(${visible ? '0%' : '100%'})`,
        opacity: visible ? 1 : 0,
        transition: 'transform 0.5s ease, opacity 0.5s ease',
        pointerEvents: visible ? 'auto' : 'none',
      }}
    >
      <div className="flex flex-col rounded-l-md shadow-2xl shadow-[0_6px_12px_rgb(0 0 0 / 25%)] backdrop-blur-[5px] bg-[#350c42d6]">
        {actions.map((action) => (
          <ActionItem key={action.label} action={action} />
        ))}
      </div>
    </div>
  );
}
