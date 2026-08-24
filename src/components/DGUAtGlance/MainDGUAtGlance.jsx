'use client';

import React from 'react';
import BannerSlider from '../common/BannerSlider';
import GlanceDGUAbout from './GlanceDGUAbout';
import GlanceAccreditation from './GlanceAccreditation';
import GlanceRankings from './GlanceRankings';
import PageHeading from '../common/PageHeading';
import GlanceTabing from './GlanceTabing';

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
      <PageHeading heading={'DGU at a Glance'} />
      <GlanceTabing />
      <div id="section-about">
        <GlanceDGUAbout />
      </div>
      <div id="section-approvals">
        <GlanceAccreditation />
      </div>
      <div id="section-rankings">
        <GlanceRankings />
      </div>
    </>
  );
}
