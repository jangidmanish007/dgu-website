'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, BookOpen } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/pagination';

const galleryImages = [
  { src: '/images/26146_mba-farewell-07.webp', alt: 'Genesis 2026', caption: 'Genesis 2026' },
  { src: '/images/19608_mba-farewell-10.webp', alt: 'Campus Life', caption: 'Campus Life' },
  { src: '/images/36179_mba-farewell-03.webp', alt: 'Cultural Events', caption: 'Cultural Events' },
  { src: '/images/46586_mba-farewell-09.webp', alt: 'Sports Day', caption: 'Sports Day' },
  { src: '/images/59809_mba-farewell-02.webp', alt: 'Annual Fest', caption: 'Annual Fest' },
];

const BallPollgalleryImages = [
  { src: '/images/_40979_ball-pool-img1.webp', alt: 'Genesis 2026', caption: 'Genesis 2026' },
  { src: '/images/_57359_ball-pool-img3.webp', alt: 'Campus Life', caption: 'Campus Life' },
  { src: '/images/_41630_ball-pool-img2.webp', alt: 'Annual Fest', caption: 'Annual Fest' },
];

const principalgalleryImages = [
  { src: '/images/16605_gal-entrepre02.webp', alt: 'Principal', caption: 'Principal' },
  { src: '/images/25267_gal-entrepre01.webp', alt: 'Principal', caption: 'Principal' },
  { src: '/images/36144_gal-entrepre03.webp', alt: 'Principal', caption: 'Principal' },
  { src: '/images/46830_gal-entrepre04.webp', alt: 'Principal', caption: 'Principal' },
  { src: '/images/16605_gal-entrepre02.webp', alt: 'Principal', caption: 'Principal' },
];

const genesisgalleryImages = [
  { src: '/images/45523_pplmeet_05.webp', alt: 'Genesis 2026', caption: 'Genesis 2026' },
  { src: '/images/21669_pplmeet_06.webp', alt: 'Genesis 2026', caption: 'Genesis 2026' },
  { src: '/images/_pplmeet_04.webp', alt: 'Genesis 2026', caption: 'Genesis 2026' },
  { src: '/images/19967_pplmeet_10.webp', alt: 'Genesis 2026', caption: 'Genesis 2026' },
  { src: '/images/14566_pplmeet_03.webp', alt: 'Genesis 2026', caption: 'Genesis 2026' },
];

export default function LifeatDGU() {
  return (
    <section className="py-10 sm:py-14 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ── Section heading ─────────────────────────────────────────── */}
        <div className="text-center mb-6 sm:mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#2a3e61]">Life @ DGU</h2>
          <p className="mt-2 text-sm sm:text-base text-gray-500">
            A glimpse into our <span className="text-[#68176b]">vibrant campus, hostels, sports, and events.</span>
          </p>
          <div className="mx-auto mt-2 h-[3px] w-10 bg-[#68176b] rounded-full" />
        </div>

        {/* ── CTA buttons ─────────────────────────────────────────────── */}
        <div className="flex items-center justify-center gap-3 sm:gap-4 mb-7 sm:mb-10">
          <Link
            href="/photo-gallery"
            className="inline-flex items-center gap-2 bg-[#1a1a2e] text-white text-sm font-medium px-5 py-2.5 rounded-full hover:bg-[#2a2a4e] transition-colors"
          >
            Photo Gallery <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/video-gallery"
            className="inline-flex items-center gap-2 border border-gray-300 text-gray-700 text-sm font-medium px-5 py-2.5 rounded-full hover:bg-gray-50 transition-colors"
          >
            Video Gallery <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* ── Main Layout: Single Grid System ─────────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
          {/* 1. YouTube Video */}
          <div className="relative w-full aspect-video bg-black overflow-hidden ">
            <iframe
              src="https://www.youtube.com/embed/1H80BOqNWsI?si=8WrjmvkKDeSyRVat"
              title="Campus Tour at DBS Global University"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
          </div>

          {/* 2. MBA Prelude Swiper */}
          <div className="relative w-full aspect-video bg-black overflow-hidden ">
            <Swiper
              modules={[Autoplay, Pagination]}
              autoplay={{ delay: 3800, disableOnInteraction: false }}
              pagination={{ clickable: true }}
              loop
              speed={700}
              slidesPerView={1}
              className="w-full h-full life-dgu-swiper"
            >
              {galleryImages.map((img, i) => (
                <SwiperSlide key={i} className="relative w-full h-full">
                  <div className="relative w-full h-full">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover object-center"
                      priority={i === 0}
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent px-4 py-3">
                      <span className="inline-flex items-center gap-1.5 text-white text-base sm:text-lg font-medium">
                        <BookOpen size={20} className="mr-1" />
                        MBA Prelude 2026
                      </span>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* 3. 8 Ball Pool Swiper */}
          <div className="relative w-full aspect-video bg-black overflow-hidden ">
            <Swiper
              modules={[Autoplay, Pagination]}
              autoplay={{ delay: 1800, disableOnInteraction: false }}
              pagination={{ clickable: true }}
              loop
              speed={700}
              slidesPerView={1}
              className="w-full h-full life-dgu-swiper"
            >
              {BallPollgalleryImages.map((img, i) => (
                <SwiperSlide key={i} className="relative w-full h-full">
                  <div className="relative w-full h-full">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover object-center"
                      priority={i === 0}
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent px-4 py-3">
                      <span className="inline-flex items-center gap-1.5 text-white text-base sm:text-lg font-medium">
                        <BookOpen size={20} className="mr-1" />8 Ball Pool Club
                      </span>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className="flex flex-col md:flex-row gap-1">
            {/* 4. Genesis Swiper */}
            <div className="relative w-full bg-black overflow-hidden aspect-ratio-swiper">
              <Swiper
                modules={[Autoplay, Pagination]}
                autoplay={{ delay: 2800, disableOnInteraction: false }}
                pagination={{ clickable: true }}
                loop
                speed={700}
                slidesPerView={1}
                className="w-full h-full life-dgu-swiper"
              >
                {genesisgalleryImages.map((img, i) => (
                  <SwiperSlide key={i} className="relative w-full h-full">
                    <div className="relative w-full h-full">
                      <Image
                        src={img.src}
                        alt={img.alt}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover object-center"
                        priority={i === 0}
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent px-4 py-3">
                        <span className="inline-flex items-center gap-1.5 text-white text-base sm:text-lg font-medium">
                          <BookOpen size={20} className="mr-1" />
                          Genesis 2026
                        </span>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {/* 5. Principal Conclave Swiper */}
            <div className="relative w-full bg-black overflow-hidden aspect-ratio-swiper">
              <Swiper
                modules={[Autoplay, Pagination]}
                autoplay={{ delay: 4800, disableOnInteraction: false }}
                pagination={{ clickable: true }}
                loop
                speed={700}
                slidesPerView={1}
                className="w-full h-full life-dgu-swiper"
              >
                {principalgalleryImages.map((img, i) => (
                  <SwiperSlide key={i} className="relative w-full h-full">
                    <div className="relative w-full h-full">
                      <Image
                        src={img.src}
                        alt={img.alt}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover object-center"
                        priority={i === 0}
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent px-4 py-3">
                        <span className="inline-flex items-center gap-1.5 text-white text-base sm:text-lg font-medium">
                          <BookOpen size={20} className="mr-1" />
                          Principal Conclave - 2026
                        </span>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
