'use client';

import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className="relative pt-32 pb-20 md:py-40 px-4 sm:px-6 lg:px-8 bg-black overflow-hidden min-h-screen flex items-center">
      {/* Ambient background glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-600/10 rounded-full blur-[150px]" />
        <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-blue-500/8 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 left-1/4 w-[300px] h-[300px] bg-indigo-500/8 rounded-full blur-[100px]" />
        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-6 inline-block px-4 py-1.5 bg-white/5 backdrop-blur-sm border border-white/10 text-white/80 font-medium text-xs tracking-widest uppercase rounded-full"
            >
              Deep-Tech Industrial AI
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-4xl md:text-[3.25rem] lg:text-[4rem] font-extrabold mb-6 leading-[1.1] tracking-tight text-white"
            >
              Pioneering Visual Perception and{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-violet-400 to-blue-400">
                Edge AI Solutions
              </span>
              <br />
              for Mission-Critical Engineering Systems
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="text-lg text-gray-400 mb-10 max-w-2xl leading-relaxed"
            >
              We engineer state-of-the-art Industrial Digital Twins and highly optimized Edge algorithms tailored for Smart Manufacturing, Aerospace, and Autonomous Systems.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="group relative px-8 py-3.5 bg-purple-600 text-white font-medium rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25"
              >
                <span className="relative z-10">Get Started</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-violet-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
              <button
                onClick={() => document.getElementById('technologies')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-3.5 border border-white/15 text-white/90 rounded-lg hover:border-purple-500/50 hover:bg-white/5 backdrop-blur-sm transition-all duration-300 font-medium"
              >
                Explore Technologies
              </button>
            </motion.div>
          </div>

          {/* Hero Visual: Futuristic 3D Mesh Sphere */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="w-full lg:w-1/2 flex justify-center"
          >
            <div className="relative w-full max-w-lg aspect-square">
              <HeroVisual />
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="hidden md:flex justify-center mt-16"
        >
          <div className="animate-bounce bg-white/5 backdrop-blur-sm p-2 w-10 h-10 ring-1 ring-white/10 rounded-full flex items-center justify-center">
            <svg className="w-5 h-5 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Modern Futuristic Visual — Glowing mesh sphere with orbiting rings
const HeroVisual = () => (
  <div className="relative w-full h-full flex items-center justify-center">
    {/* Outer glow */}
    <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-blue-600/20 rounded-full blur-[80px] animate-pulse" />

    <svg width="100%" height="100%" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="relative z-10">
      <defs>
        <radialGradient id="sphereGrad" cx="40%" cy="35%" r="50%">
          <stop offset="0%" stopColor="#a855f7" stopOpacity="0.4" />
          <stop offset="50%" stopColor="#7c3aed" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#1e1b4b" stopOpacity="0.05" />
        </radialGradient>
        <radialGradient id="coreGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#a855f7" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#a855f7" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="ringGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#a855f7" stopOpacity="0.6" />
          <stop offset="50%" stopColor="#6366f1" stopOpacity="0.1" />
          <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.6" />
        </linearGradient>
        <linearGradient id="ringGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#a855f7" stopOpacity="0.4" />
        </linearGradient>
      </defs>

      {/* Main sphere */}
      <circle cx="200" cy="200" r="100" fill="url(#sphereGrad)" stroke="url(#ringGrad1)" strokeWidth="0.5" />

      {/* Sphere wireframe lines — latitude */}
      {[-60, -30, 0, 30, 60].map((offset, i) => (
        <ellipse
          key={`lat-${i}`}
          cx="200"
          cy={200 + offset * 0.8}
          rx={Math.sqrt(Math.max(0, 100 * 100 - (offset * 0.8) * (offset * 0.8)))}
          ry={Math.sqrt(Math.max(0, 100 * 100 - (offset * 0.8) * (offset * 0.8))) * 0.15}
          stroke="#a855f7"
          strokeWidth="0.3"
          fill="none"
          opacity={0.3 - Math.abs(offset) * 0.003}
        />
      ))}

      {/* Sphere wireframe — longitude */}
      {[0, 30, 60, 90, 120, 150].map((angle, i) => (
        <ellipse
          key={`lon-${i}`}
          cx="200"
          cy="200"
          rx={100 * Math.cos((angle * Math.PI) / 180)}
          ry="100"
          stroke="#818cf8"
          strokeWidth="0.3"
          fill="none"
          opacity={0.2}
          transform={`rotate(0 200 200)`}
        />
      ))}

      {/* Orbiting ring 1 */}
      <ellipse cx="200" cy="200" rx="140" ry="40" stroke="url(#ringGrad1)" strokeWidth="0.8" fill="none" transform="rotate(-25 200 200)">
        <animateTransform attributeName="transform" type="rotate" from="-25 200 200" to="335 200 200" dur="25s" repeatCount="indefinite" />
      </ellipse>

      {/* Orbiting ring 2 */}
      <ellipse cx="200" cy="200" rx="160" ry="30" stroke="url(#ringGrad2)" strokeWidth="0.5" fill="none" transform="rotate(40 200 200)">
        <animateTransform attributeName="transform" type="rotate" from="40 200 200" to="-320 200 200" dur="35s" repeatCount="indefinite" />
      </ellipse>

      {/* Orbiting dot on ring 1 */}
      <circle r="4" fill="#a855f7">
        <animateMotion dur="25s" repeatCount="indefinite" path="M60,200 A140,40 -25 1,1 340,200 A140,40 -25 1,1 60,200" />
        <animate attributeName="opacity" values="1;0.4;1" dur="3s" repeatCount="indefinite" />
      </circle>

      {/* Orbiting dot on ring 2 */}
      <circle r="3" fill="#60a5fa">
        <animateMotion dur="35s" repeatCount="indefinite" path="M40,200 A160,30 40 1,0 360,200 A160,30 40 1,0 40,200" />
        <animate attributeName="opacity" values="0.6;1;0.6" dur="4s" repeatCount="indefinite" />
      </circle>

      {/* Core glow */}
      <circle cx="200" cy="200" r="20" fill="url(#coreGlow)">
        <animate attributeName="r" values="18;24;18" dur="4s" repeatCount="indefinite" />
      </circle>
      <circle cx="200" cy="200" r="5" fill="#c084fc" opacity="0.9">
        <animate attributeName="opacity" values="0.9;0.5;0.9" dur="3s" repeatCount="indefinite" />
      </circle>

      {/* Floating data nodes */}
      {[
        { cx: 120, cy: 110, delay: '0s' },
        { cx: 290, cy: 130, delay: '0.5s' },
        { cx: 280, cy: 280, delay: '1s' },
        { cx: 110, cy: 270, delay: '1.5s' },
        { cx: 200, cy: 80, delay: '2s' },
        { cx: 310, cy: 200, delay: '2.5s' },
      ].map((node, i) => (
        <g key={`node-${i}`}>
          <circle cx={node.cx} cy={node.cy} r="2.5" fill="#818cf8" opacity="0.7">
            <animate attributeName="opacity" values="0.3;0.8;0.3" dur="4s" begin={node.delay} repeatCount="indefinite" />
          </circle>
          <line x1={node.cx} y1={node.cy} x2="200" y2="200" stroke="#818cf8" strokeWidth="0.2" opacity="0.15" strokeDasharray="4 4">
            <animate attributeName="opacity" values="0.05;0.2;0.05" dur="4s" begin={node.delay} repeatCount="indefinite" />
          </line>
        </g>
      ))}

      {/* Outer pulse ring */}
      <circle cx="200" cy="200" r="120" stroke="#a855f7" strokeWidth="0.5" fill="none" opacity="0.1">
        <animate attributeName="r" values="120;170;120" dur="6s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.1;0.05;0.1" dur="6s" repeatCount="indefinite" />
      </circle>
    </svg>
  </div>
);

export default HeroSection;