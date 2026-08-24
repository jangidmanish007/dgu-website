'use client';

import React from 'react';
import BannerSlider from '../common/BannerSlider';

const desktopImages = [
  { src: 'images/overview/slider-1-web.gif', alt: 'DGU Campus' },
  { src: 'images/overview/slider-3-web.gif', alt: 'DGU Life' },
];

const mobileImages = [
  { src: 'images/overview/slider-1-mobile.gif', alt: 'DGU Campus' },
  { src: 'images/overview/slider-2-mobile.webp', alt: 'DGU Life' },
];

export default function MainDGUAtGlance() {
  return (
    <>
      <BannerSlider
        desktopImages={desktopImages}
        mobileImages={mobileImages}
        autoplayDelay={4000}
        showScrollArrow={true}
      />
    </>
  );
}
