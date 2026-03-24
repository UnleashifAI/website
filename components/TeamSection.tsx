'use client';

import React, { useState } from 'react';
import { ExternalLink, Presentation, ScrollText, Trophy } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const teamMembers = [
  {
    name: 'Principal Investigator & Founder',
    role: 'C-Level Executive & Multinational R&D Director',
    bio: "Over 15 Years of Global AI & Visual Perception R&D Experience spanning North America, Europe, and Asia. Successfully directed $14M+ in Public-Private Tech Funding and investment for a North American Deep-tech Startup. A proven technical leader with multiple industrial AI patents and deep ties to the global academic community.",
    email: 'info@unleashifai.com',
    linkedin: ' ',
    twitter: ' ',
    highlights: [
      { icon: <Trophy className="w-4 h-4" />, text: 'Over $14M in Public-Private Funding' },
      { icon: <ScrollText className="w-4 h-4" />, text: 'Multiple Industrial AI Patents' },
      { icon: <Presentation className="w-4 h-4" />, text: '15+ Years Global AI R&D Experience' }
    ]
  },
  {
    name: 'Core R&D Team',
    role: 'Visual Perception & Edge AI Engineering',
    bio: 'A diverse, cross-continental engineering unit uniting emerging AI researchers and fellowship scholars from leading North American and Asian institutions. The team specializes in translating theoretical Visual Perception and Edge AI models into robust, real-time industrial inspection systems.',
    email: 'info@unleashifai.com',
    linkedin: ' ',
    twitter: ' ',
    highlights: [
      { icon: <ScrollText className="w-4 h-4" />, text: 'Cross-Continental R&D Network' },
      { icon: <Trophy className="w-4 h-4" />, text: 'Government-Backed Fellowship Scholars' },
      { icon: <Presentation className="w-4 h-4" />, text: 'Edge AI & Inspection Specialists' }
    ]
  },
  {
    name: 'Strategic Advisory Board',
    role: 'Academic & Mobility Industry Partners',
    bio: 'Guided by an international network of tenured professors spanning North America and East Asia, fortified by senior R&D leadership from a premier European automotive supplier. The board ensures our innovations remain academically rigorous while perfectly aligning with Tier-1 commercial manufacturing pipelines.',
    email: 'info@unleashifai.com',
    linkedin: ' ',
    twitter: ' ',
    highlights: [
      { icon: <Trophy className="w-4 h-4" />, text: 'Global Tier-1 Automotive R&D Leadership' },
      { icon: <ScrollText className="w-4 h-4" />, text: 'Tenured Academic Professors' },
      { icon: <Presentation className="w-4 h-4" />, text: 'Bridging Lab-to-Market Pipelines' }
    ]
  },
];

const TeamSection = () => {
  const [activeProfile, setActiveProfile] = useState<number | null>(0);

  return (
    <section id="leadership" className="py-24 md:py-32 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-xs font-medium tracking-wider uppercase bg-black/5 dark:bg-white/5 rounded-full mb-4">
            World-Class Technical Leadership
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 text-black dark:text-white tracking-tight">
            Driven by R&D Pioneers
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-lg leading-relaxed">
            Eliminating technical risk. Our lab is steered by seasoned R&D experts and industrial AI pioneers who have successfully built, patented, and commercialized core technologies at a global scale.
          </p>
          <div className="h-1 w-16 bg-purple-600 mx-auto mt-6"></div>
        </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group relative cursor-pointer"
              onClick={() => setActiveProfile(activeProfile === index ? null : index)}
            >
              <div className={`bg-white dark:bg-gray-900 border-2 rounded-2xl overflow-hidden shadow-sm transition-all duration-300 ${activeProfile === index
                ? 'border-purple-600 shadow-xl'
                : 'border-gray-100 dark:border-gray-800 hover:border-purple-300 hover:shadow-lg hover:-translate-y-1'
                }`}>
                
                {/* Visual Header */}
                <div className="h-24 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 relative">
                  <div className="absolute -bottom-10 left-6 w-20 h-20 bg-white dark:bg-black rounded-xl border-4 border-white dark:border-black shadow-md flex items-center justify-center">
                    <span className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-600 to-blue-600">
                      {member.name.substring(0, 1)}
                    </span>
                  </div>
                  {index === 0 && (
                    <div className="absolute top-4 right-4 bg-purple-600 text-white text-[10px] font-bold tracking-widest uppercase px-2 py-1 rounded-md shadow-sm">
                      Founder Profile
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6 pt-14">
                  <h3 className="text-2xl font-bold mb-1 text-black dark:text-white tracking-tight">{member.name}</h3>
                  <p className="text-purple-600 dark:text-purple-400 font-bold text-xs uppercase tracking-widest mb-4">{member.role}</p>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-loose mb-6">
                    {member.bio}
                  </p>

                  <div className={`space-y-3 transition-all duration-300 overflow-hidden ${activeProfile === index ? 'opacity-100 max-h-48' : 'opacity-0 max-h-0'}`}>
                    <div className="pt-4 border-t border-gray-100 dark:border-gray-800">
                      <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Key Highlights</p>
                      {member.highlights.map((item, i) => (
                        <div key={i} className="flex items-center text-sm font-medium text-black dark:text-white mb-2">
                          <span className="text-purple-600 mr-2 bg-purple-100 dark:bg-purple-900/30 p-1 rounded-md">
                            {item.icon}
                          </span>
                          {item.text}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;