'use client';

import { useEffect, useState } from 'react';

export default function Footer() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY >= 200);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer>
      {/* Footer content coming soon */}

      {/* ── Scroll to Top Button ── */}
      <button
        onClick={scrollToTop}
        aria-label="Scroll to top"
        style={{ backgroundColor: '#390c46' }}
        className={[
          'fixed bottom-8 cursor-pointer right-6 z-50 flex h-12 w-12 items-center justify-center rounded-sm shadow-lg',
          visible ? 'animate-subtle-bounce' : '',
          'transition-all duration-500',
          visible ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-6 pointer-events-none',
        ].join(' ')}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-5 w-5"
        >
          <polyline points="18 15 12 9 6 15" />
        </svg>
      </button>
    </footer>
  );
}
