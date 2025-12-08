'use client';

import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import PartnersSection from '@/components/PartnersSection';
import ServicesSection from '@/components/ServicesSection';
import TeamSection from '@/components/TeamSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

// Main Layout Component
export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Add smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';

    // Add page load animation
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    return () => {
      clearTimeout(timer);
      document.documentElement.style.scrollBehavior = '';
    };
  }, []);

  return (
    <main className={`min-h-screen flex flex-col bg-white dark:bg-black ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-700`}>
      <Header />

      {/* Main Content */}
      <div className="flex-grow">
        <HeroSection />

        {/* Separator */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-black/10 dark:via-white/10 to-transparent max-w-7xl mx-auto" />

        <AboutSection />

        <PartnersSection />

        {/* Separator */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-black/10 dark:via-white/10 to-transparent max-w-7xl mx-auto" />

        <ServicesSection />

        {/* Separator */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-black/10 dark:via-white/10 to-transparent max-w-7xl mx-auto" />

        <TeamSection />

        {/* Separator */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-black/10 dark:via-white/10 to-transparent max-w-7xl mx-auto" />

        <ContactSection />
      </div>

      <Footer />
    </main>
  );
}