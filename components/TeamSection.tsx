'use client';

import React, { useState } from 'react';

const teamMembers = [
  {
    name: 'J. Cho',
    role: 'Co-founder & CEO',
    bio: "With over 10 years of experience in technology leadership, Jiho combines visionary thinking with deep technical expertise to drive unleashifAI's mission and strategic direction.",
    email: 'info@unleashifai.com',
    linkedin: 'https://linkedin.com/in/jihocho',
    twitter: 'https://twitter.com/jihocho',
  },
  {
    name: 'Jaemin Jeong',
    role: 'AI Specialist',
    bio: 'Jaemin is a leading AI researcher with expertise in machine learning and neural networks, developing our cutting-edge AI solutions and technological innovations.',
    email: 'common.jaemin@gmail.com',
    linkedin: 'https://linkedin.com/in/jaeminjeong',
    twitter: 'https://twitter.com/jaeminjeong',
  },
  {
    name: 'Sarah Kim',
    role: 'Head of Product',
    bio: 'Sarah oversees product development, ensuring our AI solutions address real user needs and deliver exceptional experiences through human-centered design principles.',
    email: 'sarah@unleashifai.com',
    linkedin: 'https://linkedin.com/in/sarahkim',
    twitter: 'https://twitter.com/sarahkim',
  },
  {
    name: 'David Park',
    role: 'CTO',
    bio: 'David leads our engineering team with his extensive background in software architecture and AI systems, driving technical excellence and innovation across all products.',
    email: 'david@unleashifai.com',
    linkedin: 'https://linkedin.com/in/davidpark',
    twitter: 'https://twitter.com/davidpark',
  },
];

const TeamSection = () => {
  const [activeProfile, setActiveProfile] = useState<number | null>(null);

  return (
    <section id="team" className="py-24 md:py-32 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-xs font-medium tracking-wider uppercase bg-black/5 dark:bg-white/5 rounded-full mb-4">
            Our Team
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-black dark:text-white">
            Meet the Minds Behind unleashifAI
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Our diverse team combines expertise in AI, engineering, design, and business 
            strategy to deliver groundbreaking solutions that drive results.
          </p>
          <div className="h-1 w-16 bg-purple-600 mx-auto mt-6"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div 
              key={index} 
              className="group relative"
              onClick={() => setActiveProfile(activeProfile === index ? null : index)}
            >
              <div className={`bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-md transition-all duration-300 ${
                activeProfile === index 
                  ? 'ring-2 ring-purple-600 shadow-xl'
                  : 'hover:shadow-lg hover:-translate-y-2'
              }`}>
                <div className="aspect-[4/5] bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-black/5 to-transparent dark:from-white/5"></div>
                  <span className="text-5xl font-medium text-gray-400">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                  
                  {/* Overlay on active */}
                  {activeProfile === index && (
                    <div className="absolute inset-0 bg-black/80 dark:bg-purple-900/80 backdrop-blur-sm flex items-center justify-center p-6">
                      <div className="text-white text-center">
                        <p className="font-medium mb-4">{member.bio}</p>
                        <div className="flex justify-center space-x-4">
                          <a 
                            href={`mailto:${member.email}`}
                            onClick={(e) => e.stopPropagation()}
                            className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/40 transition-colors"
                            aria-label={`Email ${member.name}`}
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                          </a>
                          <a 
                            href={member.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/40 transition-colors"
                            aria-label={`${member.name}'s LinkedIn profile`}
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                            </svg>
                          </a>
                          <a 
                            href={member.twitter}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/40 transition-colors"
                            aria-label={`${member.name}'s Twitter profile`}
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1 text-black dark:text-white">{member.name}</h3>
                  <p className="text-purple-600 dark:text-purple-400 font-medium text-sm mb-2">{member.role}</p>
                  <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-2 transition-all duration-300">
                    {member.bio}
                  </p>
                  
                  <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-800 flex items-center justify-between">
                    <div className="flex space-x-2">
                      <a 
                        href={`mailto:${member.email}`}
                        onClick={(e) => e.stopPropagation()}
                        className="text-gray-400 hover:text-black dark:hover:text-white transition-colors"
                        aria-label={`Email ${member.name}`}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </a>
                      <a 
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="text-gray-400 hover:text-black dark:hover:text-white transition-colors"
                        aria-label={`${member.name}'s LinkedIn profile`}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                        </svg>
                      </a>
                    </div>
                    <button className="text-xs font-medium text-black dark:text-white">
                      {activeProfile === index ? 'View Less' : 'View More'}
                    </button>
                  </div>
                </div>
              </div>
              
              {/* Card decoration */}
              <div className={`absolute inset-0 bg-purple-600/10 rounded-2xl transform translate-x-2 translate-y-2 -z-10 transition-transform duration-300 ${
                activeProfile === index ? 'translate-x-4 translate-y-4' : ''
              }`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;