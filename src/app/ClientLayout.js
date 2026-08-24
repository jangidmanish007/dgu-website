'use client';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import FloatingContact from '@/components/common/FloatingContact';

export default function ClientLayout({ children }) {
  return (
    <>
      <Header />
      {/* pt accounts for fixed header: top-bar (~32px) + main-nav (~52px) = ~84px on desktop, ~58px mobile */}
      <main className="grow min-h-[64vh]">
        {children}
      </main>
      <Footer />
      <FloatingContact />
    </>
  );
}
