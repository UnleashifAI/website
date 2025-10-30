'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = () => {
    setMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-black/90 shadow-lg backdrop-blur-md py-3' : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <Link href="/" className="relative z-10">
          <div className={`text-xl font-bold tracking-tight ${scrolled ? 'text-white' : 'text-black dark:text-white'}`}>
            unleashif<span className="text-purple-600">AI</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link 
            href="#about" 
            className={`text-sm font-medium hover:text-purple-500 transition-colors ${
              scrolled ? 'text-white/90 hover:text-purple-400' : 'text-black dark:text-white'
            }`}
          >
            About
          </Link>
          <Link 
            href="#services" 
            className={`text-sm font-medium hover:text-purple-500 transition-colors ${
              scrolled ? 'text-white/90 hover:text-purple-400' : 'text-black dark:text-white'
            }`}
          >
            Services
          </Link>
          <Link 
            href="#team" 
            className={`text-sm font-medium hover:text-purple-500 transition-colors ${
              scrolled ? 'text-white/90 hover:text-purple-400' : 'text-black dark:text-white'
            }`}
          >
            Team
          </Link>
          <Link 
            href="#contact" 
            className={`text-sm font-medium hover:text-purple-500 transition-colors ${
              scrolled ? 'text-white/90 hover:text-purple-400' : 'text-black dark:text-white'
            }`}
          >
            Contact
          </Link>
          <Link 
            href="#contact" 
            className="ml-4 px-6 py-2.5 bg-black text-white hover:bg-purple-900 text-sm font-medium rounded-lg transition-all duration-300 shadow-md hover:shadow-purple-500/20"
            aria-label="Get Started - Contact Us"
          >
            Get Started
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden relative z-10"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          <div className="w-6 h-5 flex flex-col justify-between">
            <span className={`block h-0.5 w-full ${scrolled ? 'bg-white' : 'bg-black dark:bg-white'} transform transition-all duration-300 ${
              menuOpen ? 'rotate-45 translate-y-2' : ''
            }`}></span>
            <span className={`block h-0.5 w-full ${scrolled ? 'bg-white' : 'bg-black dark:bg-white'} transition-opacity duration-300 ${
              menuOpen ? 'opacity-0' : 'opacity-100'
            }`}></span>
            <span className={`block h-0.5 w-full ${scrolled ? 'bg-white' : 'bg-black dark:bg-white'} transform transition-all duration-300 ${
              menuOpen ? '-rotate-45 -translate-y-2' : ''
            }`}></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-black/95 backdrop-blur-lg z-0 transition-transform transform duration-300 ease-in-out ${
        menuOpen ? 'translate-x-0' : 'translate-x-full'
      } md:hidden flex items-center justify-center`}>
        <nav className="flex flex-col items-center space-y-8">
          <Link 
            href="#about" 
            className="text-xl text-white hover:text-purple-400 transition-colors" 
            onClick={handleNavClick}
          >
            About
          </Link>
          <Link 
            href="#services" 
            className="text-xl text-white hover:text-purple-400 transition-colors" 
            onClick={handleNavClick}
          >
            Services
          </Link>
          <Link 
            href="#team" 
            className="text-xl text-white hover:text-purple-400 transition-colors" 
            onClick={handleNavClick}
          >
            Team
          </Link>
          <Link 
            href="#contact" 
            className="text-xl text-white hover:text-purple-400 transition-colors" 
            onClick={handleNavClick}
          >
            Contact
          </Link>
          <Link 
            href="#contact" 
            className="mt-4 px-8 py-3 bg-purple-600 text-white text-xl rounded-lg hover:bg-purple-700 transition-all shadow-lg shadow-purple-500/20" 
            onClick={handleNavClick}
          >
            Get Started
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;