'use client';
import React from 'react';
import HomeBanner from './HomeBanner';
import SchoolsSection from './SchoolsSection';
import DGUDifferenceSection from './DGUDifferenceSection';
import TopRecruitersSection from './TopRecruitersSection';
import PlacementsSection from './PlacementsSection';
import PlacementUpdatesSection from './PlacementUpdatesSection';

export default function MainHomePage() {
  return (
    <>
      <HomeBanner />
      <SchoolsSection />
      <DGUDifferenceSection />
      <PlacementsSection />
      <TopRecruitersSection />
      <PlacementUpdatesSection />
    </>
  );
}
