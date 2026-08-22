'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronDown, ChevronRight, Menu, X } from 'lucide-react';
import { topBarLinks, mainNavItems } from '@/data/navData';

// ─── Dropdown Menu (Overview / Academics / etc.) ──────────────────────────────
function DropdownMenu({ items, isOpen }) {
  const [activeL1, setActiveL1] = useState(null);

  useEffect(() => {
    if (!isOpen) setActiveL1(null);
  }, [isOpen]);

  return (
    <div
      className={`
        absolute top-full left-0 z-50 min-w-[240px] bg-white shadow-xl
        transition-all duration-200 origin-top
        ${isOpen ? 'opacity-100 scale-y-100 pointer-events-auto' : 'opacity-0 scale-y-95 pointer-events-none'}
      `}
    >
      {items.map((item) => {
        const hasChildren = item.children && item.children.length > 0;
        const isActive = activeL1 === item.label;

        return (
          <div
            key={item.label}
            className="relative group/l1"
            onMouseEnter={() => setActiveL1(item.label)}
            onMouseLeave={() => setActiveL1(null)}
          >
            <Link
              href={item.href}
              className={`
                flex items-center justify-between px-5 py-3 text-[13px] font-medium
                border-b border-gray-100 last:border-0
                transition-colors duration-150
                ${isActive ? 'bg-[#68176b] text-white' : 'text-gray-800 hover:bg-[#68176b] hover:text-white'}
              `}
            >
              <span>{item.label}</span>
              {hasChildren && <ChevronRight className="w-3.5 h-3.5 shrink-0 ml-2" />}
            </Link>

            {/* Level-2 flyout */}
            {hasChildren && (
              <div
                className={`
                  absolute top-0 left-full z-50 min-w-[210px] bg-white shadow-xl
                  transition-all duration-150 origin-top-left
                  ${isActive ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-95 pointer-events-none'}
                `}
              >
                {item.children.map((child) => (
                  <Link
                    key={child.label}
                    href={child.href}
                    className="
                      block px-5 py-3 text-[13px] text-gray-800
                      border-b border-gray-100 last:border-0
                      hover:bg-[#68176b] hover:text-white
                      transition-colors duration-150
                    "
                  >
                    {child.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

// ─── Programs Mega Menu ────────────────────────────────────────────────────────
function MegaMenu({ schools, isOpen }) {
  const [activeSchool, setActiveSchool] = useState(schools[0]);

  useEffect(() => {
    if (!isOpen) setActiveSchool(schools[0]);
  }, [isOpen, schools]);

  return (
    <div
      className={`
        fixed left-0 right-0 z-[999] w-full mx-auto px-[16px] max-w-[1440px] 
        transition-all duration-250 origin-top
        ${isOpen ? 'opacity-100 scale-y-100 pointer-events-auto' : 'opacity-0 scale-y-95 pointer-events-none'}
      `}
      style={{ top: 'var(--header-height, 80px)' }}
    >
      <div className="bg-[#eee] rounded-[20px] xl:p-[30px] p-[20px] shadow-[0_0_10px_#424242]">
        <div className="flex gap-5">
          {/* Left – school image */}
          <div className="hidden lg:block xl:w-[557px] w-[400px] shrink-0 relative overflow-hidden">
            <div className="relative w-full h-full min-h-[442px] xl:-h-[370px] rounded-[12px] overflow-hidden">
              <Image
                src={activeSchool.image}
                alt={activeSchool.label}
                fill
                sizes="340px"
                className="object-cover object-center transition-all duration-300"
              />
              {/* Gradient overlay + school name */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <p className="text-[11px] text-white/70 uppercase tracking-widest mb-1">School</p>
                <p className="text-white text-[15px] font-semibold leading-snug">{activeSchool.label}</p>
              </div>
            </div>
          </div>

          {/* Middle – schools list */}
          <div className="xl:max-w-[400px] max-w-[300px] w-full shrink-0  max-h-[400px] overflow-auto">
            {schools.map((school) => {
              const isActive = activeSchool.id === school.id;
              return (
                <div
                  key={school.id}
                  onMouseEnter={() => setActiveSchool(school)}
                  className={`
                  flex items-center justify-between px-5 py-[13px] cursor-pointer
                  border-b border-gray-300 last:border-0
                  transition-colors duration-150 text-[13px] font-medium
                  ${isActive ? 'bg-[#68176b] text-white' : 'text-gray-800 hover:bg-[#68176b] hover:text-white'}
                `}
                >
                  <span>{school.label}</span>
                  <ChevronRight className="w-3.5 h-3.5 shrink-0 ml-2" />
                </div>
              );
            })}
          </div>

          {/* Right – programs for active school */}
          <div className="flex-1 px-2 py-6 w-full max-w-[400px]">
            <p className="text-[11px] text-gray-400 uppercase tracking-widest mb-4">Programs Offered</p>
            <div className="grid grid-cols-1 gap-1 max-h-[400px] overflow-auto">
              {activeSchool.programs.map((prog) => (
                <Link
                  key={prog.label}
                  href={prog.href}
                  className="
                  block py-3 px-4 text-[13px] text-gray-800 font-medium
                  border-b border-gray-300 last:border-0
                  hover:text-[#68176b] hover:pl-6
                  transition-all duration-150
                "
                >
                  {prog.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Mobile nav item ───────────────────────────────────────────────────────────
function MobileNavItem({ item, onClose }) {
  const [open, setOpen] = useState(false);
  const [openL2, setOpenL2] = useState(null);

  if (item.type === 'link') {
    return (
      <Link
        href={item.href}
        onClick={onClose}
        className="block px-5 py-3.5 text-[14px] font-semibold text-white border-b border-white/10 hover:bg-white/10"
      >
        {item.label}
      </Link>
    );
  }

  if (item.type === 'cta') {
    return (
      <Link
        href={item.href}
        onClick={onClose}
        className="block mx-4 my-3 px-5 py-3 text-center text-[14px] font-bold text-white bg-[#68176b] hover:bg-[#52125a] transition-colors"
      >
        {item.label}
      </Link>
    );
  }

  // dropdown or mega
  const subItems =
    item.type === 'mega'
      ? item.schools.map((s) => ({ label: s.label, href: s.href, children: s.programs }))
      : item.items;

  return (
    <div className="border-b border-white/10">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-5 py-3.5 text-[14px] font-semibold text-white hover:bg-white/10"
      >
        <span>{item.label}</span>
        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
      </button>

      {open && (
        <div className="bg-black/20">
          {subItems.map((sub) => {
            const hasSub = sub.children && sub.children.length > 0;
            const isOpenL2 = openL2 === sub.label;
            return (
              <div key={sub.label}>
                <div className="flex items-center justify-between border-t border-white/10">
                  <Link
                    href={sub.href}
                    onClick={onClose}
                    className="flex-1 px-8 py-3 text-[13px] text-white/85 hover:text-white hover:bg-white/10"
                  >
                    {sub.label}
                  </Link>
                  {hasSub && (
                    <button
                      onClick={() => setOpenL2(isOpenL2 ? null : sub.label)}
                      className="px-4 py-3 text-white/70 hover:text-white"
                    >
                      <ChevronRight
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${isOpenL2 ? 'rotate-90' : ''}`}
                      />
                    </button>
                  )}
                </div>
                {hasSub && isOpenL2 && (
                  <div className="bg-black/20">
                    {sub.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        onClick={onClose}
                        className="block px-12 py-2.5 text-[12px] text-white/75 border-t border-white/10 hover:text-white hover:bg-white/10"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

// ─── Main Header ──────────────────────────────────────────────────────────────
export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const headerRef = useRef(null);
  const leaveTimerRef = useRef(null);

  // Scroll detection
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY >= 80);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Update CSS var for mega menu positioning
  useEffect(() => {
    if (headerRef.current) {
      document.documentElement.style.setProperty('--header-height', `${headerRef.current.offsetHeight}px`);
    }
  });

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const handleMouseEnter = useCallback((id) => {
    clearTimeout(leaveTimerRef.current);
    setActiveMenu(id);
  }, []);

  const handleMouseLeave = useCallback(() => {
    leaveTimerRef.current = setTimeout(() => setActiveMenu(null), 120);
  }, []);

  const handleMegaEnter = useCallback(() => {
    clearTimeout(leaveTimerRef.current);
  }, []);

  return (
    <>
      <header
        ref={headerRef}
        className={`lg:min-h-[116px] min-h-[84px] pt-[8px] lg:pt-[16px]
          fixed top-0 left-0 right-0 z-[999]
          transition-all duration-300
          ${scrolled ? 'shadow-[5px_5px_10px_2px_rgba(0,0,0,0.31)]' : ''}
        `}
        style={{
          background: scrolled ? '#68176b' : 'linear-gradient(180deg,#390c46,transparent)',
        }}
      >
        {/* ── Main nav bar ── */}
        <div className="max-w-[1400px] mx-auto px-4">
          <div className="flex items-center gap-8 justify-between">
            {/* Logo */}
            <Link href="/" className="shrink-0 flex items-center">
              <Image
                src="/images/logo-img.webp"
                alt="DGU – DBS Global University"
                width={270}
                height={76}
                className="h-[56px] xl:h-[76px] w-auto object-contain"
                priority
              />
            </Link>

            {/* Desktop nav items */}
            <div className="pt-4">
              {/* ── Top utility bar ── */}
              <div className="hidden lg:block">
                <div className="max-w-[1366px] mx-auto px-4 flex items-center justify-center">
                  {topBarLinks.map((link, i) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      className={`
                  xl:pr-[30px] pr-[12px] py-1.5 text-[11px] xl:text-[13px] text-white/85 whitespace-nowrap
                  hover:text-white transition-colors duration-150
                `}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>

              <nav className="hidden lg:flex items-center ml-auto 2xl:flex-nowrap flex-wrap justify-center">
                {mainNavItems.map((item) => {
                  const isActive = activeMenu === item.id;

                  if (item.type === 'link') {
                    return (
                      <Link
                        key={item.id}
                        href={item.href}
                        className="
                       cursor-pointer px-2 xl:py-[16px] text-[11px] uppercase xl:text-[15px] font-semibold tracking-wide text-white 
                        hover:text-yellow-300 transition-colors duration-150 whitespace-nowrap
                      "
                        style={{ textShadow: '2px 2px 4px #000' }}
                      >
                        {item.label}
                      </Link>
                    );
                  }

                  if (item.type === 'cta') {
                    return (
                      <Link
                        key={item.id}
                        href={item.href}
                        className="
                        ml-2 px-4 py-2 cursor-pointer text-[11px] font-bold text-white uppercase tracking-wider
                        bg-[#68176b] hover:bg-[#52125a]
                        transition-colors duration-150 whitespace-nowrap
                      "
                        style={scrolled ? { background: '#fff', color: '#68176b' } : {}}
                      >
                        {item.label}
                      </Link>
                    );
                  }

                  // dropdown or mega
                  return (
                    <div
                      key={item.id}
                      className="relative"
                      onMouseEnter={() => handleMouseEnter(item.id)}
                      onMouseLeave={handleMouseLeave}
                    >
                      <button
                        className={`
                        flex items-center gap-1 xl:px-2 px-1 xl:py-[12px] cursor-pointer
                        text-[12.5px] xl:text-[15px] font-semibold tracking-wide uppercase whitespace-nowrap
                        transition-colors duration-150
                        ${isActive ? 'text-yellow-300' : 'text-white hover:text-yellow-300'}
                      `}
                        style={{ textShadow: '2px 2px 4px #000' }}
                      >
                        {item.label}
                        <ChevronDown
                          className={`w-3 h-3 transition-transform duration-200 ${isActive ? 'rotate-180' : ''}`}
                        />
                      </button>

                      {item.type === 'dropdown' && <DropdownMenu items={item.items} isOpen={isActive} />}
                    </div>
                  );
                })}
              </nav>

              {/* Mobile hamburger */}
              <button
                onClick={() => setMobileOpen(true)}
                className="lg:hidden ml-auto p-2 text-white"
                aria-label="Open navigation"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* ── Programs mega menu — rendered outside header so it can span full width ── */}
      {mainNavItems
        .filter((item) => item.type === 'mega')
        .map((item) => (
          <div key={item.id} onMouseEnter={handleMegaEnter} onMouseLeave={handleMouseLeave}>
            <MegaMenu schools={item.schools} isOpen={activeMenu === item.id} />
          </div>
        ))}

      {/* Trigger zone for mega (must stay connected to header hover) */}
      {mainNavItems
        .filter((item) => item.type === 'mega')
        .map((item) => (
          <div
            key={`trigger-${item.id}`}
            className="fixed z-[998]"
            style={{ top: 'var(--header-height, 80px)', left: 0, right: 0, height: 0 }}
            onMouseEnter={() => handleMouseEnter(item.id)}
          />
        ))}

      {/* ── Mobile drawer ── */}
      <div
        className={`
          fixed inset-0 z-[1000] lg:hidden
          transition-opacity duration-300
          ${mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
        `}
      >
        {/* Backdrop */}
        <div className="absolute inset-0 bg-black/50" onClick={() => setMobileOpen(false)} />

        {/* Drawer */}
        <div
          className={`
            absolute top-0 left-0 bottom-0 w-[85vw] max-w-[360px]
            bg-[#390c46] overflow-y-auto
            transition-transform duration-300
            ${mobileOpen ? 'translate-x-0' : '-translate-x-full'}
          `}
        >
          {/* Drawer header */}
          <div className="flex items-center justify-between px-5 py-4 border-b border-white/15">
            <Link href="/" onClick={() => setMobileOpen(false)}>
              <Image
                src="/images/logo-img.webp"
                alt="DGU"
                width={140}
                height={40}
                className="h-9 w-auto object-contain"
              />
            </Link>
            <button
              onClick={() => setMobileOpen(false)}
              className="p-1.5 text-white/80 hover:text-white"
              aria-label="Close navigation"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Utility links */}
          <div className="px-5 py-3 flex flex-wrap gap-x-4 gap-y-1 border-b border-white/15">
            {topBarLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-[11px] text-white/65 hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Main nav */}
          <nav>
            {mainNavItems.map((item) => (
              <MobileNavItem key={item.id} item={item} onClose={() => setMobileOpen(false)} />
            ))}
          </nav>
        </div>
      </div>
    </>
  );
}
