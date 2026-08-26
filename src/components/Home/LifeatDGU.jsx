'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';
import 'swiper/css';
import 'swiper/css/pagination';

/* ─── Animation variants ────────────────────────────────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const galleryImages = [
  { src: 'images/home/26146_mba-farewell-07.webp', alt: 'Genesis 2026', caption: 'Genesis 2026' },
  { src: 'images/home/19608_mba-farewell-10.webp', alt: 'Campus Life', caption: 'Campus Life' },
  { src: 'images/home/36179_mba-farewell-03.webp', alt: 'Cultural Events', caption: 'Cultural Events' },
  { src: 'images/home/46586_mba-farewell-09.webp', alt: 'Sports Day', caption: 'Sports Day' },
  { src: 'images/home/59809_mba-farewell-02.webp', alt: 'Annual Fest', caption: 'Annual Fest' },
];

const BallPollgalleryImages = [
  { src: 'images/home/_40979_ball-pool-img1.webp', alt: 'Genesis 2026', caption: 'Genesis 2026' },
  { src: 'images/home/_57359_ball-pool-img3.webp', alt: 'Campus Life', caption: 'Campus Life' },
  { src: 'images/home/_41630_ball-pool-img2.webp', alt: 'Annual Fest', caption: 'Annual Fest' },
];

const principalgalleryImages = [
  { src: 'images/home/16605_gal-entrepre02.webp', alt: 'Principal', caption: 'Principal' },
  { src: 'images/home/25267_gal-entrepre01.webp', alt: 'Principal', caption: 'Principal' },
  { src: 'images/home/36144_gal-entrepre03.webp', alt: 'Principal', caption: 'Principal' },
  { src: 'images/home/46830_gal-entrepre04.webp', alt: 'Principal', caption: 'Principal' },
  { src: 'images/home/16605_gal-entrepre02.webp', alt: 'Principal', caption: 'Principal' },
];

const genesisgalleryImages = [
  { src: 'images/home/45523_pplmeet_05.webp', alt: 'Genesis 2026', caption: 'Genesis 2026' },
  { src: 'images/home/21669_pplmeet_06.webp', alt: 'Genesis 2026', caption: 'Genesis 2026' },
  { src: 'images/home/_pplmeet_04.webp', alt: 'Genesis 2026', caption: 'Genesis 2026' },
  { src: 'images/home/19967_pplmeet_10.webp', alt: 'Genesis 2026', caption: 'Genesis 2026' },
  { src: 'images/home/14566_pplmeet_03.webp', alt: 'Genesis 2026', caption: 'Genesis 2026' },
];

export default function LifeatDGU() {
  return (
    <section className="pb-10 pt-6 sm:pb-14 md:pb-16 bg-white overflow-hidden">
      <div className="max-w-[1360px] mx-auto px-[16px]">
        {/* ── Section heading ─────────────────────────────────────────── */}
        <motion.div
          className="text-center mb-6 sm:mb-8"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.6 }}
        >
          <h2 className="text-[24px] sm:text-[28px] font-bold text-[#131d3b]">Life @ DGU</h2>
          <p className="mt-2 text-sm sm:text-base text-gray-500">
            A glimpse into our <span className="text-[#68176b]">vibrant campus, hostels, sports, and events.</span>
          </p>
          <div className="mx-auto mt-2 h-[3px] w-10 bg-[#68176b] rounded-full" />
        </motion.div>

        {/* ── CTA buttons ─────────────────────────────────────────────── */}
        <motion.div
          className="flex items-center justify-center gap-3 sm:gap-4 mb-7 sm:mb-10"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.6 }}
        >
          {/* Photo Gallery */}
          <Link
            href="/photo-gallery"
            className="diff-btn relative inline-flex items-center gap-2 overflow-hidden rounded-full border border-[#000] bg-[#000] px-5 py-2.5 cursor-pointer outline-none"
          >
            <span
              className="diff-btn-fill absolute inset-0 bg-[#68176b] [transform-origin:bottom_left] z-0"
              aria-hidden="true"
            />
            <span className="diff-btn-label relative z-10 inline-flex items-center gap-1.5 text-sm font-medium text-white whitespace-nowrap transition-colors duration-200">
              Photo Gallery
              <ArrowRight
                className="diff-btn-icon w-4 h-4 shrink-0 transition-transform duration-200"
                strokeWidth={2}
              />
            </span>
          </Link>

          {/* Video Gallery */}
          <Link
            href="/video-gallery"
            className="diff-btn relative inline-flex items-center gap-2 overflow-hidden rounded-full border border-[#000] bg-white px-5 py-2.5 cursor-pointer outline-none"
          >
            <span
              className="diff-btn-fill absolute inset-0 bg-[#68176b] [transform-origin:bottom_left] z-0"
              aria-hidden="true"
            />
            <span className="diff-btn-label relative z-10 inline-flex items-center gap-1.5 text-sm font-medium text-[#000] whitespace-nowrap transition-colors duration-200">
              Video Gallery
              <ArrowRight
                className="diff-btn-icon w-4 h-4 shrink-0 transition-transform duration-200"
                strokeWidth={2}
              />
            </span>
          </Link>
        </motion.div>

        {/* ── Main Grid ─────────────────────────────────────────────────── */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-1"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {/* 1. YouTube Video */}
          <motion.div variants={fadeUp} className="relative w-full aspect-video bg-black overflow-hidden">
            <iframe
              src="https://www.youtube.com/embed/1H80BOqNWsI?si=8WrjmvkKDeSyRVat"
              title="Campus Tour at DBS Global University"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
          </motion.div>

          {/* 2. MBA Prelude Swiper */}
          <motion.div variants={fadeUp} className="relative w-full aspect-video bg-black overflow-hidden">
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
                      src={process.env.NEXT_PUBLIC_IMG_PATH + img.src}
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
          </motion.div>

          {/* 3. 8 Ball Pool Swiper */}
          <motion.div variants={fadeUp} className="relative w-full aspect-video bg-black overflow-hidden">
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
                      src={process.env.NEXT_PUBLIC_IMG_PATH + img.src}
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
          </motion.div>

          <motion.div variants={fadeUp} className="flex flex-col md:flex-row gap-1">
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
                        src={process.env.NEXT_PUBLIC_IMG_PATH + img.src}
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
                        src={process.env.NEXT_PUBLIC_IMG_PATH + img.src}
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
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
