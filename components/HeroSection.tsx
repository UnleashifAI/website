'use client';

import React from 'react';

const HeroSection = () => {
  return (
    <section className="pt-32 pb-20 md:py-40 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white to-gray-100 dark:from-black dark:to-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 mb-16 md:mb-0">
            <div className="mb-6 inline-block px-4 py-1.5 bg-black/5 dark:bg-white/5 text-black dark:text-white font-medium text-sm rounded-full">
              Strategic AI for Professional Practices
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Unleash the power of <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-500">AI</span> for your professional practice
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-10 max-w-lg">
              We deliver two distinct services: custom AI solutions for enterprises worldwide, and comprehensive IT & AI support for local small businesses and professional practices.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-3.5 bg-black dark:bg-purple-600 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-purple-900 dark:hover:bg-purple-700"
              >
                Get Started
              </button>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-3.5 border border-gray-300 dark:border-gray-700 rounded-lg hover:border-purple-500 hover:text-purple-700 dark:hover:text-purple-400 transition-all duration-300 font-medium"
              >
                Book a Demo
              </button>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative w-full max-w-md aspect-square">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-blue-500/10 rounded-full blur-3xl"></div>
              <HeroGraphic />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="hidden md:flex justify-center mt-16">
          <div className="animate-bounce bg-white dark:bg-gray-800 p-2 w-10 h-10 ring-1 ring-gray-200 dark:ring-gray-700 shadow-lg rounded-full flex items-center justify-center">
            <svg className="w-6 h-6 text-black dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

// SVG Component for Hero Section with enhanced animation
const HeroGraphic = () => (
  <svg width="100%" height="100%" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="150" cy="150" r="120" stroke="#2d2d2d" strokeWidth="1" />
    <circle cx="150" cy="150" r="90" stroke="#000000" strokeWidth="1" strokeDasharray="3 3">
      <animateTransform
        attributeName="transform"
        type="rotate"
        from="0 150 150"
        to="360 150 150"
        dur="60s"
        repeatCount="indefinite"
      />
    </circle>

    {/* Nodes with pulse animation */}
    <circle cx="150" cy="60" r="8" fill="#000000">
      <animate attributeName="opacity" values="1;0.6;1" dur="3s" repeatCount="indefinite" />
    </circle>
    <circle cx="240" cy="150" r="8" fill="#000000">
      <animate attributeName="opacity" values="1;0.6;1" dur="3s" repeatCount="indefinite" begin="0.5s" />
    </circle>
    <circle cx="150" cy="240" r="8" fill="#000000">
      <animate attributeName="opacity" values="1;0.6;1" dur="3s" repeatCount="indefinite" begin="1s" />
    </circle>
    <circle cx="60" cy="150" r="8" fill="#000000">
      <animate attributeName="opacity" values="1;0.6;1" dur="3s" repeatCount="indefinite" begin="1.5s" />
    </circle>

    <circle cx="195" cy="75" r="6" fill="#ffffff" stroke="#000000" strokeWidth="1" />
    <circle cx="225" cy="105" r="6" fill="#ffffff" stroke="#000000" strokeWidth="1" />
    <circle cx="225" cy="195" r="6" fill="#ffffff" stroke="#000000" strokeWidth="1" />
    <circle cx="195" cy="225" r="6" fill="#ffffff" stroke="#000000" strokeWidth="1" />
    <circle cx="105" cy="225" r="6" fill="#ffffff" stroke="#000000" strokeWidth="1" />
    <circle cx="75" cy="195" r="6" fill="#ffffff" stroke="#000000" strokeWidth="1" />
    <circle cx="75" cy="105" r="6" fill="#ffffff" stroke="#000000" strokeWidth="1" />
    <circle cx="105" cy="75" r="6" fill="#ffffff" stroke="#000000" strokeWidth="1" />

    <circle cx="150" cy="150" r="12" fill="#000000">
      <animate attributeName="r" values="12;14;12" dur="3s" repeatCount="indefinite" />
    </circle>

    {/* Connections */}
    <line x1="150" y1="60" x2="150" y2="150" stroke="#000000" strokeWidth="1" />
    <line x1="240" y1="150" x2="150" y2="150" stroke="#000000" strokeWidth="1" />
    <line x1="150" y1="240" x2="150" y2="150" stroke="#000000" strokeWidth="1" />
    <line x1="60" y1="150" x2="150" y2="150" stroke="#000000" strokeWidth="1" />

    <line x1="195" y1="75" x2="150" y2="150" stroke="#000000" strokeWidth="0.5" strokeDasharray="3 3">
      <animate attributeName="strokeDashoffset" from="0" to="24" dur="20s" repeatCount="indefinite" />
    </line>
    <line x1="225" y1="105" x2="150" y2="150" stroke="#000000" strokeWidth="0.5" strokeDasharray="3 3">
      <animate attributeName="strokeDashoffset" from="0" to="24" dur="20s" repeatCount="indefinite" />
    </line>
    <line x1="225" y1="195" x2="150" y2="150" stroke="#000000" strokeWidth="0.5" strokeDasharray="3 3">
      <animate attributeName="strokeDashoffset" from="0" to="24" dur="20s" repeatCount="indefinite" />
    </line>
    <line x1="195" y1="225" x2="150" y2="150" stroke="#000000" strokeWidth="0.5" strokeDasharray="3 3">
      <animate attributeName="strokeDashoffset" from="0" to="24" dur="20s" repeatCount="indefinite" />
    </line>
    <line x1="105" y1="225" x2="150" y2="150" stroke="#000000" strokeWidth="0.5" strokeDasharray="3 3">
      <animate attributeName="strokeDashoffset" from="0" to="24" dur="20s" repeatCount="indefinite" />
    </line>
    <line x1="75" y1="195" x2="150" y2="150" stroke="#000000" strokeWidth="0.5" strokeDasharray="3 3">
      <animate attributeName="strokeDashoffset" from="0" to="24" dur="20s" repeatCount="indefinite" />
    </line>
    <line x1="75" y1="105" x2="150" y2="150" stroke="#000000" strokeWidth="0.5" strokeDasharray="3 3">
      <animate attributeName="strokeDashoffset" from="0" to="24" dur="20s" repeatCount="indefinite" />
    </line>
    <line x1="105" y1="75" x2="150" y2="150" stroke="#000000" strokeWidth="0.5" strokeDasharray="3 3">
      <animate attributeName="strokeDashoffset" from="0" to="24" dur="20s" repeatCount="indefinite" />
    </line>

    {/* Animated pulse */}
    <circle cx="150" cy="150" r="60" stroke="#000000" strokeWidth="1" opacity="0.1">
      <animate attributeName="r" values="60;100;60" dur="4s" repeatCount="indefinite" />
      <animate attributeName="opacity" values="0.1;0.2;0.1" dur="4s" repeatCount="indefinite" />
    </circle>
  </svg>
);

export default HeroSection;