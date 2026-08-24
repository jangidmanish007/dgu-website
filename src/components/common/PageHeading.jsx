import React from 'react';

export default function PageHeading({ heading }) {
  return (
    <section className="bg-[#f4f6f9] py-6">
      <div className="max-w-[1400px] px-[16px] mx-auto w-full">
        <h1 className="text-[22px] lg:text-[25px] text-[#131d3b] font-[700]">{heading}</h1>
        <div className="w-[64px] h-[3px] bg-[#390c46] mt-3"></div>
      </div>
    </section>
  );
}
