'use client';

import BannerSlider from '@/components/common/BannerSlider';

// Desktop images (13 slides)
const desktopImages = [
  { src: 'images/home/banner-slider-img-1.webp', alt: 'Banner 1' },
  { src: 'images/home/banner-slider-img-2.webp', alt: 'Banner 2' },
  { src: 'images/home/banner-slider-img-3.webp', alt: 'Banner 3' },
  { src: 'images/home/banner-slider-img-4.webp', alt: 'Banner 4' },
  { src: 'images/home/banner-slider-img-5.webp', alt: 'Banner 5' },
  { src: 'images/home/banner-slider-img-6.webp', alt: 'Banner 6' },
  { src: 'images/home/banner-slider-img-7.webp', alt: 'Banner 7' },
  { src: 'images/home/banner-slider-img-8.webp', alt: 'Banner 8' },
  { src: 'images/home/banner-slider-img-9.webp', alt: 'Banner 9' },
  { src: 'images/home/banner-slider-img-10.webp', alt: 'Banner 10' },
  { src: 'images/home/banner-slider-img-11.webp', alt: 'Banner 11' },
  { src: 'images/home/banner-slider-img-12.webp', alt: 'Banner 12' },
  { src: 'images/home/banner-slider-img-13.webp', alt: 'Banner 13' },
];

// Mobile images (12 slides) — used on screens narrower than Tailwind's `sm` (640 px)
const mobileImages = [
  { src: 'images/home/mobile-home-slider-img-1.webp', alt: 'Banner 1' },
  { src: 'images/home/mobile-home-slider-img-2.webp', alt: 'Banner 2' },
  { src: 'images/home/mobile-home-slider-img-3.webp', alt: 'Banner 3' },
  { src: 'images/home/mobile-home-slider-img-4.webp', alt: 'Banner 4' },
  { src: 'images/home/mobile-home-slider-img-5.webp', alt: 'Banner 5' },
  { src: 'images/home/mobile-home-slider-img-6.webp', alt: 'Banner 6' },
  { src: 'images/home/mobile-home-slider-img-7.webp', alt: 'Banner 7' },
  { src: 'images/home/mobile-home-slider-img-8.webp', alt: 'Banner 8' },
  { src: 'images/home/mobile-home-slider-img-9.webp', alt: 'Banner 9' },
  { src: 'images/home/mobile-home-slider-img-10.webp', alt: 'Banner 10' },
  { src: 'images/home/mobile-home-slider-img-11.webp', alt: 'Banner 11' },
  { src: 'images/home/mobile-home-slider-img-12.webp', alt: 'Banner 12' },
];

export default function HomeBanner() {
  return (
    <BannerSlider
      desktopImages={desktopImages}
      mobileImages={mobileImages}
      autoplayDelay={4000}
      showScrollArrow={true}
    />
  );
}
