'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronDown, ChevronRight, ChevronLeft, Menu, X } from 'lucide-react';
import { topBarLinks, mainNavItems } from '@/data/navData';

// ─── Dropdown Menu (desktop) ──────────────────────────────────────────────────
function DropdownMenu({ items, isOpen }) {
  const [activeL1, setActiveL1] = useState(null);

  useEffect(() => {
    if (!isOpen) setActiveL1(null);
  }, [isOpen]);

  return (
    <div
      className={`
        absolute top-full left-0 z-50 min-w-[320px] bg-white shadow-xl
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
                ${isActive ? 'bg-[#390c46] text-white' : 'text-gray-800 hover:bg-[#390c46] hover:text-white'}
              `}
            >
              <span>{item.label}</span>
              {hasChildren && <ChevronRight className="w-3.5 h-3.5 shrink-0 ml-2" />}
            </Link>

            {/* Level-2 flyout */}
            {hasChildren && (
              <div
                className={`
                  absolute top-0 left-full z-50 min-w-[300px] bg-white shadow-xl
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
                      hover:bg-[#390c46] hover:text-white
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

// ─── Programs Mega Menu (desktop) ─────────────────────────────────────────────
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
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <p className="text-[11px] text-white/70 uppercase tracking-widest mb-1">School</p>
                <p className="text-white text-[15px] font-semibold leading-snug">{activeSchool.label}</p>
              </div>
            </div>
          </div>

          {/* Middle – schools list */}
          <div className="xl:max-w-[400px] max-w-[300px] w-full shrink-0 max-h-[400px] overflow-auto">
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

// ─── Mobile Drawer — slide-panel navigation ────────────────────────────────────
// Stack-based: each level pushes a new panel that slides in from the right.
// Pressing the back chevron pops the stack.

function MobileDrawer({ open, onClose }) {
  // stack = array of panel descriptors
  // Level 0 = root (all mainNavItems)
  // Level 1 = sub-items of a top-level nav item
  // Level 2 = children of a L1 item
  const [stack, setStack] = useState([{ type: 'root', label: 'Menu' }]);

  // Reset stack whenever drawer is closed
  useEffect(() => {
    if (!open) {
      // Delay reset until transition ends
      const t = setTimeout(() => setStack([{ type: 'root', label: 'Menu' }]), 300);
      return () => clearTimeout(t);
    }
  }, [open]);

  const push = useCallback((panel) => {
    setStack((prev) => [...prev, panel]);
  }, []);

  const pop = useCallback(() => {
    setStack((prev) => (prev.length > 1 ? prev.slice(0, -1) : prev));
  }, []);

  const currentPanel = stack[stack.length - 1];
  const depth = stack.length - 1; // 0 = root

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-[1000] bg-black/50 transition-opacity duration-300 lg:hidden
          ${open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer shell — fixed container, clips panels */}
      <div
        className={`
          fixed top-0 left-0 bottom-0 z-[1001] lg:hidden
          w-[85vw] max-w-[360px] overflow-hidden
          transition-transform duration-300
          ${open ? 'translate-x-0' : '-translate-x-full'}
        `}
      >
        {/* ── Panel stack ── Each panel absolutely covers the shell.
            We slide panels in/out using translateX based on their position
            relative to the current depth. */}
        {stack.map((panel, idx) => {
          // current → 0, previous → -100%, next (not rendered but keep for animation) → +100%
          const offset = idx - depth; // 0 = visible, negative = behind (left), positive = ahead (right)
          return (
            <MobilePanel
              key={idx}
              panel={panel}
              offset={offset}
              isRoot={idx === 0}
              onClose={onClose}
              onPush={push}
              onBack={pop}
            />
          );
        })}
      </div>
    </>
  );
}

// ─── Single mobile panel ──────────────────────────────────────────────────────
function MobilePanel({ panel, offset, isRoot, onClose, onPush, onBack }) {
  const translateX = offset === 0 ? '0%' : offset < 0 ? '-100%' : '100%';

  // Build the list of items to render
  let items = [];
  if (panel.type === 'root') {
    items = mainNavItems;
  } else if (panel.type === 'dropdown') {
    items = panel.items; // array of { label, href, children }
  } else if (panel.type === 'sub') {
    items = panel.items; // array of { label, href }
  } else if (panel.type === 'mega') {
    // Convert mega schools into items with children = programs
    items = panel.schools.map((s) => ({
      label: s.label,
      href: s.href,
      children: s.programs,
    }));
  }

  return (
    <div
      className="absolute inset-0 flex flex-col bg-[#390c46] overflow-y-auto"
      style={{
        transform: `translateX(${translateX})`,
        transition: 'transform 0.32s cubic-bezier(0.4,0,0.2,1)',
      }}
    >
      {/* Panel header */}
      <div className="flex items-center justify-between px-4 py-4 border-b border-white/15 shrink-0">
        <div className="flex items-center gap-2">
          {!isRoot && (
            <button
              onClick={onBack}
              className="p-1.5 -ml-1.5 text-white/80 hover:text-white transition-colors"
              aria-label="Go back"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
          )}
          {isRoot ? (
            <Link href="/" onClick={onClose}>
              <Image
                src="/images/logo-img.webp"
                alt="DGU"
                width={140}
                height={40}
                className="h-9 w-auto object-contain"
              />
            </Link>
          ) : (
            <span className="text-white font-semibold text-[15px]">{panel.label}</span>
          )}
        </div>
        <button
          onClick={onClose}
          className="p-1.5 text-white/80 hover:text-white transition-colors"
          aria-label="Close navigation"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Utility links — only on root */}
      {isRoot && (
        <div className="px-4 py-3 flex flex-wrap gap-x-4 gap-y-1.5 border-b border-white/15 shrink-0">
          {topBarLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={onClose}
              className="text-[11px] text-white/65 hover:text-white transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}

      {/* Items */}
      <nav className="flex-1">
        {panel.type === 'root' &&
          items.map((item) => <RootNavRow key={item.id} item={item} onClose={onClose} onPush={onPush} />)}

        {(panel.type === 'dropdown' || panel.type === 'mega') &&
          items.map((item) => <L1NavRow key={item.label} item={item} onClose={onClose} onPush={onPush} />)}

        {panel.type === 'sub' &&
          items.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={onClose}
              className="flex items-center px-5 py-3.5 text-[14px] text-white/85 border-b border-white/10 hover:bg-white/10 hover:text-white transition-colors"
            >
              {item.label}
            </Link>
          ))}
      </nav>

      {/* Apply Now CTA at bottom of root */}
      {isRoot && (
        <div className="px-4 py-4 shrink-0 border-t border-white/15">
          <Link
            href="/apply-now"
            onClick={onClose}
            className="block w-full text-center py-3 bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-bold text-[14px] transition-colors"
          >
            Apply Now
          </Link>
        </div>
      )}
    </div>
  );
}

// Row in root panel
function RootNavRow({ item, onClose, onPush }) {
  if (item.type === 'cta') return null; // handled separately at bottom

  if (item.type === 'link') {
    return (
      <Link
        href={item.href}
        onClick={onClose}
        className="flex items-center justify-between px-5 py-3.5 text-[14px] font-semibold text-white border-b border-white/10 hover:bg-white/10 transition-colors"
      >
        {item.label}
      </Link>
    );
  }

  // dropdown or mega — push a new panel
  const handlePush = () => {
    if (item.type === 'dropdown') {
      onPush({ type: 'dropdown', label: item.label, items: item.items });
    } else if (item.type === 'mega') {
      onPush({ type: 'mega', label: item.label, schools: item.schools });
    }
  };

  return (
    <button
      onClick={handlePush}
      className="w-full flex items-center justify-between px-5 py-3.5 text-[14px] font-semibold text-white border-b border-white/10 hover:bg-white/10 transition-colors"
    >
      <span>{item.label}</span>
      <ChevronRight className="w-4 h-4 shrink-0 text-white/60" />
    </button>
  );
}

// Row in L1 panel (dropdown / mega)
function L1NavRow({ item, onClose, onPush }) {
  const hasChildren = item.children && item.children.length > 0;

  return (
    <div className="border-b border-white/10">
      <div className="flex items-stretch">
        {/* Link area */}
        <Link
          href={item.href}
          onClick={onClose}
          className="flex-1 px-5 py-3.5 text-[14px] font-medium text-white/90 hover:text-white hover:bg-white/10 transition-colors"
        >
          {item.label}
        </Link>

        {/* Drill-down button */}
        {hasChildren && (
          <button
            onClick={() =>
              onPush({
                type: 'sub',
                label: item.label,
                items: item.children,
              })
            }
            className="px-4 border-l border-white/10 text-white/60 hover:text-white hover:bg-white/10 transition-colors"
            aria-label={`Open ${item.label} submenu`}
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        )}
      </div>
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

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY >= 80);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (headerRef.current) {
      document.documentElement.style.setProperty('--header-height', `${headerRef.current.offsetHeight}px`);
    }
  });

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
        className={`xl:min-h-[116px] lg:min-h-[108px] min-h-[84px] pt-[8px] xl:pt-[16px] pb-[6px]
          fixed top-0 left-0 right-0 z-[999]
          transition-all duration-300
          ${scrolled ? 'shadow-[5px_5px_10px_2px_rgba(0,0,0,0.31)]' : ''}
        `}
        style={{
          background: scrolled ? '#68176b' : 'linear-gradient(180deg,#390c46,transparent)',
        }}
      >
        <div className="max-w-[1360px] mx-auto px-[16px]">
          <div className="flex items-center gap-6 justify-between">
            {/* Logo */}
            <Link href="/" className="shrink-0 flex items-center">
              <Image
                src="/images/logo-img.webp"
                alt="DGU – DBS Global University"
                width={270}
                height={72}
                className="h-[56px] xl:h-[72px] w-auto object-contain"
                priority
              />
            </Link>

            {/* Desktop nav */}
            <div className="xl:pt-4 pt-2">
              <div className="hidden lg:block">
                <div className="max-w-[1366px] mx-auto px-4 flex items-center justify-center">
                  {topBarLinks.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      className="xl:pr-[30px] pr-[12px] py-1.5 text-[11px] xl:text-[13px] text-white/85 whitespace-nowrap hover:text-white transition-colors duration-150"
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
                        className="cursor-pointer px-2 xl:py-[16px] text-[11px] uppercase xl:text-[15px] font-semibold tracking-wide text-white hover:text-yellow-300 transition-colors duration-150 whitespace-nowrap"
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
                        className="ml-2 px-4 py-2 cursor-pointer text-[15px] font-bold text-white uppercase tracking-wider bg-transparent hover:bg-[#52125a] transition-colors duration-150 whitespace-nowrap"
                        // style={scrolled ? { background: '#fff', color: '#68176b' } : {}}
                        style={{ textShadow: '2px 2px 4px #000' }}
                      >
                        {item.label}
                      </Link>
                    );
                  }

                  return (
                    <div
                      key={item.id}
                      className="relative"
                      onMouseEnter={() => handleMouseEnter(item.id)}
                      onMouseLeave={handleMouseLeave}
                    >
                      <button
                        className={`
                          flex items-center gap-1 px-1 xl:py-[12px] cursor-pointer
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

      {/* Desktop mega menus */}
      {mainNavItems
        .filter((item) => item.type === 'mega')
        .map((item) => (
          <div key={item.id} onMouseEnter={handleMegaEnter} onMouseLeave={handleMouseLeave}>
            <MegaMenu schools={item.schools} isOpen={activeMenu === item.id} />
          </div>
        ))}

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

      {/* Mobile drawer */}
      <MobileDrawer open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
