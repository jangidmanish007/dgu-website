'use client';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default function ClientLayout({ children }) {
  return (
    <>
      <Header />
      <main className="grow min-h-[64vh]">
        {children}
      </main>
      <Footer />
    </>
  );
}
