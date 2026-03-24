'use client';

import React from 'react';
import Image from 'next/image';
import ScrollReveal from './ScrollReveal';

const ecosystemCategories = [
  {
    id: 'funded',
    label: 'Government R&D & Funding Partners',
    description: 'Government-backed validation and strategic contract research in core technologies.',
    partners: [
      {
        name: 'National Research Council Canada (NRC)',
        logo: '/NRCC_logo.png',
        role: 'Aerospace Vision Joint R&D & Contract Research',
        width: 200,
        height: 80,
      },
      {
        name: 'Mitacs',
        logo: '/mitacs_logo.png',
        role: 'Manufacturing Digital Twin & Edge AI Commercialization R&D',
        width: 180,
        height: 60,
      },
    ],
  },
  {
    id: 'academic',
    label: 'Academic & Research Collaborators',
    description: 'Joint R&D partnerships with world-class research institutions.',
    partners: [
      {
        name: 'University of Toronto',
        logo: '/uoft-logo.png',
        role: 'Joint R&D in Structural Mechanics & Digital Twin',
        width: 120,
        height: 120,
      },
      {
        name: 'Korea Electronics Technology Institute (KETI)',
        logo: '/keti_logo.png',
        role: 'Joint Research in Multimodal AI & Edge Optimization',
        width: 160,
        height: 80,
      },
      {
        name: 'University of Windsor',
        logo: '/windsor-logo.png',
        role: 'Joint R&D in Autonomous Mobility & Edge AI',
        width: 220,
        height: 70,
      },
    ],
  },
  {
    id: 'industrial',
    label: 'Industrial & Commercialization Partners',
    description: 'Proven deployment track record with real-world industrial clients.',
    partners: [
      {
        name: 'Geomexsoft (South Korea)',
        logo: '/geomex_logo.png',
        role: 'Commercial Deployment Client — Edge Vision AI for Real-time Road Hazard Detection',
        width: 180,
        height: 70,
      },
    ],
  },
];

const PartnersSection = () => {
  return (
    <section className="py-24 md:py-32 bg-white dark:bg-black/95 border-y border-gray-100 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center mb-20">
            <span className="inline-block px-3 py-1 text-xs font-medium tracking-wider uppercase bg-black/5 dark:bg-white/5 rounded-full mb-4">
              Our Network
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 text-black dark:text-white tracking-tight">
              Our Innovation Ecosystem
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto text-lg leading-relaxed">
              We collaborate with leading government agencies, top-tier academic institutions, and industrial partners across North America and Asia to research and commercialize mission-critical AI solutions.
            </p>
            <div className="h-1 w-16 bg-purple-600 mx-auto mt-6"></div>
          </div>
        </ScrollReveal>

        {/* Ecosystem Categories */}
        <div className="space-y-20">
          {ecosystemCategories.map((category, catIndex) => (
            <ScrollReveal key={category.id} delay={catIndex * 0.1}>
              <div>
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-8">
                  <div className="flex items-center gap-3">
                    <div className={`w-2 h-2 rounded-full ${
                      category.id === 'funded' ? 'bg-green-500' :
                      category.id === 'academic' ? 'bg-blue-500' :
                      'bg-amber-500'
                    }`} />
                    <h3 className="text-xl md:text-2xl font-bold text-black dark:text-white">
                      {category.label}
                    </h3>
                  </div>
                  <div className="flex-1 h-px bg-gray-200 dark:bg-gray-800" />
                </div>
                <p className="text-gray-500 dark:text-gray-400 text-sm mb-8 ml-5">
                  {category.description}
                </p>

                {/* Partner Cards */}
                <div className={`grid gap-6 ${
                  category.partners.length === 1
                    ? 'grid-cols-1 max-w-lg'
                    : 'grid-cols-1 md:grid-cols-2'
                }`}>
                  {category.partners.map((partner, index) => (
                    <div
                      key={index}
                      className="group bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800 rounded-2xl p-8 hover:border-purple-400 dark:hover:border-purple-600 hover:shadow-lg hover:shadow-purple-500/5 transition-all duration-300"
                    >
                      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                        {/* Logo */}
                        <div className="flex-shrink-0 w-[160px] h-[80px] flex items-center justify-center bg-white dark:bg-gray-800 rounded-xl p-4 border border-gray-100 dark:border-gray-700">
                          <Image
                            src={partner.logo}
                            alt={partner.name}
                            width={partner.width}
                            height={partner.height}
                            className="object-contain max-h-[60px] w-auto grayscale group-hover:grayscale-0 opacity-80 group-hover:opacity-100 transition-all duration-300"
                          />
                        </div>

                        {/* Info */}
                        <div className="text-center sm:text-left">
                          <h4 className="font-bold text-lg text-black dark:text-white mb-1">
                            {partner.name}
                          </h4>
                          <p className="text-purple-600 dark:text-purple-400 text-sm font-medium mb-2">
                            {partner.role}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Bottom Summary */}
        <ScrollReveal delay={0.3}>
          <div className="mt-20 bg-gradient-to-r from-purple-900/10 to-blue-900/10 dark:from-purple-900/20 dark:to-blue-900/20 rounded-2xl p-8 border border-purple-200 dark:border-purple-800/50 text-center">
            <p className="text-gray-700 dark:text-gray-300 text-lg font-medium">
              A growing network spanning <span className="text-purple-600 dark:text-purple-400 font-bold">3 countries</span>, bridging government-funded research with real-world industrial deployment.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default PartnersSection;
