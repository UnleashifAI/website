'use client';

import React from 'react';
import { Microscope, Activity, ShieldCheck, Cpu, ChevronRight } from 'lucide-react';
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {/* Project 1 */}
          <div className="bg-white dark:bg-black border border-gray-100 dark:border-gray-800 rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-300">
            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center mb-6">
              <Microscope className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            </div>
            <p className="text-purple-600 dark:text-purple-400 font-bold text-xs uppercase tracking-widest mb-2">Joint R&D Partner</p>
            <h3 className="text-xl font-bold mb-3 text-black dark:text-white">Aerospace Coating Inspection</h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm">
              Developing AI-based vision inspection software for the Thermal Gradient Shock Tester (TGST), ensuring sub-millimeter precision for critical aerospace defensive coatings.
            </p>
          </div>

          {/* Project 2 */}
          <div className="bg-white dark:bg-black border border-gray-100 dark:border-gray-800 rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-300">
            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center mb-6">
              <Activity className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            </div>
            <p className="text-purple-600 dark:text-purple-400 font-bold text-xs uppercase tracking-widest mb-2">Smart Manufacturing R&D</p>
            <h3 className="text-xl font-bold mb-3 text-black dark:text-white">Autonomous Pre-process Setup for Smart Manufacturing</h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm">
              Deploying industrial digital twins and physics-informed AI optimization algorithms tailored for dynamic, high-mix job-shop manufacturing environments.
            </p>
          </div>

          {/* Project 3 */}
          <div className="bg-white dark:bg-black border border-gray-100 dark:border-gray-800 rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-300">
            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center mb-6">
              <ShieldCheck className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            </div>
            <p className="text-purple-600 dark:text-purple-400 font-bold text-xs uppercase tracking-widest mb-2">Industrial Safety Core</p>
            <h3 className="text-xl font-bold mb-3 text-black dark:text-white">Mission-Critical HRI Safety Monitoring</h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm">
              Engineering multimodal AI architectures for worker cognitive load detection and real-time safety distance (ISO 10218) monitoring in high-risk human-robot interaction environments.
            </p>
          </div>

          {/* Project 4 */}
          <div className="bg-white dark:bg-black border border-gray-100 dark:border-gray-800 rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-300">
            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center mb-6">
              <Cpu className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            </div>
            <p className="text-purple-600 dark:text-purple-400 font-bold text-xs uppercase tracking-widest mb-2">Autonomous Systems</p>
            <h3 className="text-xl font-bold mb-3 text-black dark:text-white">Real-time Anomaly & Damage Detection</h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm">
              Deploying high-speed edge AI architectures for real-time anomaly interpretation and micro-defect classification across autonomous mobility and vehicular systems.
            </p>
          </div>
        </div>
        </ScrollReveal>

        {/* Highlight Stats */}
        <ScrollReveal delay={0.2}>
        <div className="mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { number: '3+', label: 'Active Joint R&D Programs' },
            { number: '100%', label: 'Proprietary AI Architectures' },
            { number: 'Top-Tier', label: 'Academic R&D Network' },
            { number: 'Federal', label: 'Joint R&D Partner' }
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