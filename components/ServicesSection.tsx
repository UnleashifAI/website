'use client';

import React, { useState } from 'react';
import { Rocket, Shield, Eye, Cpu, TrendingUp, Lock, Globe, Zap } from 'lucide-react';

const pillars = [
  {
    id: 1,
    icon: <Rocket className="w-8 h-8" />,
    emoji: '🚀',
    title: 'Pillar I: Custom AI Solutions & Strategic Modeling',
    subtitle: 'The Innovation & Growth Accelerator',
    description: 'This track is dedicated to pioneering proprietary, high-value AI models and strategic solutions for unique, complex technical challenges. We translate cutting-edge research into market-ready advantage.',
    targetAudience: 'B2B Enterprises, Government/Research Partners, and Technology Firms seeking a decisive competitive advantage.',
    focusAreas: [
      {
        icon: <Eye className="w-5 h-5" />,
        title: 'Advanced Vision Systems',
        description: 'Engineer solutions that transform complex image and video data into real-time analytical and predictive insights. We deliver operational certainty and minimize risk through specialized detection models for infrastructure and industrial safety.'
      },
      {
        icon: <Cpu className="w-5 h-5" />,
        title: 'Digital Twins & Simulation',
        description: 'Utilize high-fidelity modeling to analyze, optimize, and stress-test complex operational and organizational systems before implementation.'
      },
      {
        icon: <TrendingUp className="w-5 h-5" />,
        title: 'High-Value Consulting',
        description: 'Provide senior technical advising and roadmap development, guiding executive leadership on integrating specialized AI technologies into core business offerings and creating new revenue streams.'
      }
    ]
  },
  {
    id: 2,
    icon: <Shield className="w-8 h-8" />,
    emoji: '🛡️',
    title: 'Pillar II: IT & AI Adaptation for Professional Practices',
    subtitle: 'The Operational Excellence Foundation',
    description: 'This track focuses on building a secure, stable, and compliant IT infrastructure tailored specifically for specialized SMEs—such as medical, dental, and legal practices—preparing them for digital fluency and future growth.',
    targetAudience: 'Local small businesses, medical/dental clinics, and professional service practices (Ottawa-Toronto area) seeking reliable IT infrastructure, security, and operational efficiency.',
    focusAreas: [
      {
        icon: <Lock className="w-5 h-5" />,
        title: 'System Stability & Compliance',
        description: 'Implement robust data security frameworks, define automated backup protocols, and ensure critical compliance standards are met for handling sensitive client data. We eliminate operational downtime and minimize legal risks.'
      },
      {
        icon: <Globe className="w-5 h-5" />,
        title: 'Digital Integration & Marketing',
        description: 'Design and manage highly functional digital platforms (websites, applications) integrated with targeted digital marketing strategies to actively generate reliable revenue streams.'
      },
      {
        icon: <Zap className="w-5 h-5" />,
        title: 'AI Readiness & Automation',
        description: 'Structure the foundational IT architecture needed for a seamless transition into advanced automation and strategic AI tools. We ensure your practice is prepared for the next wave of efficiency.'
      }
    ]
  }
];

const ServicesSection = () => {
  const [activePillar, setActivePillar] = useState<number | null>(null);

  const togglePillar = (id: number) => {
    setActivePillar(activePillar === id ? null : id);
  };

  return (
    <section id="services" className="py-24 md:py-32 bg-gray-50 dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-xs font-medium tracking-wider uppercase bg-black/5 dark:bg-white/5 rounded-full mb-4">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-black dark:text-white">
            Our Two Core Pillars of Service
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We offer two distinct, high-impact consulting tracks—each guided by scientific rigor and senior executive strategy—to ensure your business achieves maximum operational efficiency and sustainable growth.
          </p>
          <div className="h-1 w-16 bg-purple-600 mx-auto mt-6"></div>
        </div>

        <div className="space-y-8">
          {pillars.map((pillar) => (
            <div
              key={pillar.id}
              className={`bg-white dark:bg-gray-900 border-2 rounded-2xl overflow-hidden transition-all duration-300 ${activePillar === pillar.id
                ? 'border-purple-600 shadow-2xl'
                : 'border-gray-200 dark:border-gray-800 hover:border-purple-400 dark:hover:border-purple-600'
                }`}
            >
              {/* Pillar Header */}
              <div
                className="p-8 cursor-pointer"
                onClick={() => togglePillar(pillar.id)}
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-blue-500 rounded-xl flex items-center justify-center text-white shadow-lg">
                      {pillar.icon}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-3xl">{pillar.emoji}</span>
                      <h3 className="text-2xl md:text-3xl font-bold text-black dark:text-white">
                        {pillar.title}
                      </h3>
                    </div>
                    <p className="text-purple-600 dark:text-purple-400 font-semibold text-lg mb-3">
                      {pillar.subtitle}
                    </p>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                  <div className="flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className={`w-6 h-6 text-gray-400 transition-transform duration-300 ${activePillar === pillar.id ? 'rotate-180' : ''
                        }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Focus Areas - Expanded Content */}
              {activePillar === pillar.id && (
                <div className="border-t border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-black/50">
                  <div className="p-8">
                    <h4 className="text-xl font-bold text-black dark:text-white mb-6">What We Do</h4>
                    <div className="space-y-4">
                      {pillar.focusAreas.map((area, index) => (
                        <div
                          key={index}
                          className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-6"
                        >
                          <div className="flex items-start gap-4">
                            <div className="flex-shrink-0 w-10 h-10 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center text-purple-600 dark:text-purple-400">
                              {area.icon}
                            </div>
                            <div className="flex-1">
                              <h5 className="text-lg font-bold text-black dark:text-white mb-2">
                                {area.title}
                              </h5>
                              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                {area.description}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Who It's For Section */}
                    <div className="mt-8 p-6 bg-purple-50 dark:bg-purple-900/20 rounded-xl border border-purple-200 dark:border-purple-800">
                      <h5 className="text-sm font-bold text-purple-900 dark:text-purple-300 uppercase tracking-wide mb-2">
                        Who It's For
                      </h5>
                      <p className="text-gray-700 dark:text-gray-300">
                        {pillar.targetAudience}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 bg-black text-white dark:bg-purple-900/30 rounded-2xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-10 lg:p-16">
              <h3 className="text-3xl font-bold mb-6">Ready to elevate your professional practice with strategic AI?</h3>
              <p className="text-gray-300 text-lg mb-8">
                Whether you're seeking to enhance compliance, mitigate operational risks, or drive strategic growth,
                our executive-level expertise is ready to deliver premium AI solutions tailored to your professional practice.
              </p>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-6 py-3 bg-white text-black dark:bg-purple-600 dark:text-white font-medium rounded-lg hover:bg-gray-100 dark:hover:bg-purple-700 transition-colors shadow-lg"
              >
                Schedule Strategic Consultation
              </button>
            </div>
            <div className="bg-gradient-to-r from-purple-900/80 to-black p-10 lg:p-16 flex items-center">
              <div className="space-y-6">
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-white">Specialized Solutions for Professional Practices</span>
                </div>
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-white">Executive-Level AI & Compliance Expertise</span>
                </div>
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-white">Confidential & Secure Approach</span>
                </div>
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-white">Premium Service, Measurable Results</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;