'use client';

import React, { useRef, useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import 'swiper/css';
import 'swiper/css/navigation';

/** Returns true when the viewport is below Tailwind's `sm` breakpoint (640 px). */
function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 639px)');
    setIsMobile(mq.matches);

    const handler = (e) => setIsMobile(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  return isMobile;
}

/**
 * BannerSlider — reusable full-width hero image slider.
 *
 * Props:
 *  desktopImages  {Array<{src: string, alt: string}>}  Slides shown on sm+ viewports.
 *  mobileImages   {Array<{src: string, alt: string}>}  Slides shown below sm (< 640 px).
 *  autoplayDelay  {number}  ms between slides (default 4000).
 *  showScrollArrow {boolean}  Whether to render the bounce-down scroll hint (default true).
 *  className      {string}   Extra class on the outer <section>.
 */
export default function BannerSlider({
  desktopImages = [],
  mobileImages = [],
  autoplayDelay = 4000,
  showScrollArrow = true,
  className = '',
}) {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const isMobile = useIsMobile();

  const bannerImages = isMobile && mobileImages.length > 0 ? mobileImages : desktopImages;

  return (
    <section className={`dgu-banner relative w-full overflow-hidden ${className}`}>
      {/* Prev Arrow */}
      <button
        ref={prevRef}
        aria-label="Previous slide"
        className="
          dgu-banner-arrow dgu-banner-arrow--prev
          absolute left-0 top-1/2 -translate-y-1/2 z-20
          flex items-center justify-center
          w-9 h-12
          sm:w-10 sm:h-10
          md:w-8 md:h-10
          bg-[#68176b] text-white
          cursor-pointer select-none
          transition-opacity duration-200
          hover:opacity-90
          focus-visible:outline-2 focus-visible:outline-white
        "
      >
        <ChevronLeft className="w-5 h-5 sm:w-5 sm:h-5" strokeWidth={2.5} />
      </button>

      {/* Next Arrow */}
      <button
        ref={nextRef}
        aria-label="Next slide"
        className="
          dgu-banner-arrow dgu-banner-arrow--next
          absolute right-0 top-1/2 -translate-y-1/2 z-20
          flex items-center justify-center
          w-9 h-12
          sm:w-10 sm:h-10
          md:w-8 md:h-10
          bg-[#68176b] text-white
          cursor-pointer select-none
          transition-opacity duration-200
          hover:opacity-90
          focus-visible:outline-2 focus-visible:outline-white
        "
      >
        <ChevronRight className="w-5 h-5 sm:w-5 sm:h-5" strokeWidth={2.5} />
      </button>

      {/* Scroll-down arrow */}
      {showScrollArrow && (
        <button
          aria-label="Scroll to next section"
          onClick={() => {
            const banner = document.querySelector('section.dgu-banner');
            const target = banner?.nextElementSibling;
            if (target) target.scrollIntoView({ behavior: 'smooth' });
          }}
          className="absolute bottom-15 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center cursor-pointer"
        >
          <style>{`
            @keyframes bounceDown {
              0%, 100% { transform: translateY(0); opacity: 0.45; }
              50%       { transform: translateY(7px); opacity: 1; }
            }
            .arrow-b1 { animation: bounceDown 1.4s ease-in-out infinite; }
          `}</style>
          {['arrow-b1'].map((cls) => (
            <svg key={cls} width="22" height="13" viewBox="0 0 22 13" fill="none" className={`${cls} -mt-1 first:mt-0`}>
              <path d="M1 1L11 11L21 1" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          ))}
        </button>
      )}

      <Swiper
        key={isMobile ? 'mobile' : 'desktop'}
        modules={[Navigation, Autoplay]}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        autoplay={{ delay: autoplayDelay, disableOnInteraction: false }}
        loop
        speed={600}
        slidesPerView={1}
        className="w-full"
      >
        {bannerImages.map((img, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full aspect-[390/570] sm:aspect-[1366/420] md:aspect-[1366/400] lg:aspect-[1366/520]">
              <Image
                src={process.env.NEXT_PUBLIC_IMG_PATH + img.src}
                alt={img.alt}
                fill
                priority={index === 0}
                sizes="100vw"
                className="object-cover object-center"
                draggable={false}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
