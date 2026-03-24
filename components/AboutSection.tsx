'use client';

import React from 'react';
import { Microscope, Activity, ShieldCheck, ChevronRight } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const AboutSection = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-white dark:bg-black/95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-xs font-medium tracking-wider uppercase bg-black/5 dark:bg-white/5 rounded-full mb-4">
            R&D Track Record
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 text-black dark:text-white tracking-tight">
            Validated by Global Institutions
          </h2>
          <div className="h-1 w-16 bg-purple-600 mx-auto"></div>
          <p className="mt-6 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-lg">
            We are a deep-tech laboratory spin-off actively conducting cutting-edge research alongside leading North American universities and government bodies.
          </p>
        </div>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-16">
          {/* Featured Project */}
          <div className="bg-gradient-to-br from-black/5 to-white dark:from-white/5 dark:to-black rounded-2xl p-8 shadow-lg relative overflow-hidden border border-gray-100 dark:border-gray-800">
            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-600/10 rounded-bl-full -z-0"></div>
            <div className="relative z-10">
              <div className="w-16 h-16 bg-black dark:bg-purple-600 rounded-xl mb-6 flex items-center justify-center shadow-md">
                <Microscope className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-black dark:text-white">National Research Council (NRC) of Canada</h3>
              <p className="text-purple-600 dark:text-purple-400 font-semibold mb-4">Aerospace Coating Inspection Project</p>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                Awarded an exclusive research grant by the NRC to develop highly precise visual perception algorithms capable of inspecting aerospace-grade defensive coatings. Our edge-ai solutions dramatically reduced inspection latency while maintaining sub-millimeter precision on critical aircraft components.
              </p>
              <div className="flex items-center text-sm font-bold text-black dark:text-white uppercase tracking-wider">
                Funding Secured <ChevronRight className="w-4 h-4 ml-1 text-purple-600" />
              </div>
            </div>
          </div>

          <div className="space-y-8">
            {/* Mitacs Project */}
            <div className="bg-white dark:bg-black border border-gray-100 dark:border-gray-800 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-black dark:bg-purple-600/20 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <Activity className="w-6 h-6 text-white dark:text-purple-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-black dark:text-white">Mitacs Accelerate ($90k+ CAD)</h3>
                  <p className="text-sm font-medium text-purple-600 dark:text-purple-400">Led Manufacturing Digital Twin Initiative</p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300 ml-16 leading-relaxed">
                Successfully secured and directed a major government-backed R&D initiative to build Industrial Digital Twins for automotive machining processes. Integrated Physics-Informed Neural Networks (PINNs) directly with live sensor metrics.
              </p>
            </div>

            {/* University Partnership */}
            <div className="bg-white dark:bg-black border border-gray-100 dark:border-gray-800 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-black dark:bg-purple-600/20 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <ShieldCheck className="w-6 h-6 text-white dark:text-purple-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-black dark:text-white">University Affiliations</h3>
                  <p className="text-sm font-medium text-purple-600 dark:text-purple-400">e.g., University of Toronto</p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300 ml-16 leading-relaxed">
                We operate as an advanced R&D bridge between world-class Canadian academic institutions and commercial partners (KETI, TIPA) to transform theoretical multimodal AI research into robust, scalable, deployable industrial products.
              </p>
            </div>
          </div>
        </div>
        </ScrollReveal>

        {/* Highlight Stats */}
        <ScrollReveal delay={0.2}>
        <div className="mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { number: '$14M+', label: 'Public-Private Funding' },
            { number: '100%', label: 'Proprietary IP Focus' },
            { number: 'Ph.D.', label: 'Technical Leadership' },
            { number: 'Gov', label: 'Tested & Validated By' }
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-white dark:bg-black border border-gray-100 dark:border-gray-800 p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 text-center"
            >
              <div className="text-4xl md:text-5xl font-mona font-bold mb-2 text-black dark:text-white tracking-tighter">{stat.number}</div>
              <div className="text-gray-500 dark:text-gray-400 uppercase text-xs font-bold tracking-widest mt-3">{stat.label}</div>
            </div>
          ))}
        </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default AboutSection;