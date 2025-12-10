"use client";

import React from 'react';
import Navbar from '@/components/Navbar';
import AboutHeader from './AboutHeader';
import StatsSection from './StatsSection';
import MissionVisionSection from './MissionVisionSection';
import ValuesSection from './ValuesSection';
import HistorySection from './HistorySection';
import WhyJoinSection from './WhyJoinSection';
import AboutFooterInfo from './AboutFooterInfo';
import Footer from '@/components/Footer';

const AboutPage = () => {
  return (
    <section className="min-h-screen bg-white py-12 relative">
      {/* Ana Sayfaya Dön Butonu */}
      {/* Navbar */}
      <div className="fixed top-8 left-8 z-50 hidden md:block">
        <Navbar variant="light" />
      </div>

      {/* Mobile Home Button */}
      <div className="fixed top-8 left-8 z-50 md:hidden">
        <a
          href="/"
          className="p-3 rounded-full text-gray-900 bg-white/90 backdrop-blur-md border border-gray-200 
           hover:bg-gray-50 transition-all duration-300 shadow-sm flex items-center justify-center"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5" />
            <path d="M12 19l-7-7 7-7" />
          </svg>
        </a>
      </div>

      {/* Content Box - Sağ ve soldan 32px boşluk, açık gri */}
      <div className="mx-8 bg-gray-100 rounded-2xl p-8 md:p-12 space-y-16 md:space-y-24">
        {/* HERO */}
        <AboutHeader />

        {/* RAKAMLARLA IEEE */}
        <StatsSection />

        {/* MİSYON & VİZYON */}
        <MissionVisionSection />

        {/* DEĞERLERİMİZ */}
        <ValuesSection />

        {/* TARİHÇEMİZ */}
        <HistorySection />

        {/* RECRUITMENT + STORY */}
        <WhyJoinSection />

        {/* IEEE HAKKINDA BİLGİ BLOĞU */}
        <AboutFooterInfo />
      </div>
    </section>
  );
};

export default AboutPage;

