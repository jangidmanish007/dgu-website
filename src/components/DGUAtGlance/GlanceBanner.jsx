'use client';

import BannerSlider from '@/components/common/BannerSlider';

const desktopImages = [
  { src: '/images/banner-slider-img-1.webp', alt: 'DGU Campus' },
  { src: '/images/banner-slider-img-2.webp', alt: 'DGU Life' },
  { src: '/images/banner-slider-img-3.webp', alt: 'DGU Academics' },
  { src: '/images/banner-slider-img-4.webp', alt: 'DGU Events' },
  { src: '/images/banner-slider-img-5.webp', alt: 'DGU Placements' },
];

const mobileImages = [
  { src: '/images/mobile-home-slider-img-1.webp', alt: 'DGU Campus' },
  { src: '/images/mobile-home-slider-img-2.webp', alt: 'DGU Life' },
  { src: '/images/mobile-home-slider-img-3.webp', alt: 'DGU Academics' },
  { src: '/images/mobile-home-slider-img-4.webp', alt: 'DGU Events' },
  { src: '/images/mobile-home-slider-img-5.webp', alt: 'DGU Placements' },
];

export default function GlanceBanner() {
  return (
    <BannerSlider
      desktopImages={desktopImages}
      mobileImages={mobileImages}
      autoplayDelay={4000}
      showScrollArrow={true}
    />
  );
}
