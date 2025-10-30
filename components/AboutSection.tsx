'use client';

import React from 'react';
import { Zap, Brain, HeartHandshake } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-white dark:bg-black/95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-xs font-medium tracking-wider uppercase bg-black/5 dark:bg-white/5 rounded-full mb-4">
            About Us
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-black dark:text-white">
            Democratizing AI for businesses of all sizes
          </h2>
          <div className="h-1 w-16 bg-purple-600 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="bg-gradient-to-br from-black/5 to-white dark:from-white/5 dark:to-black rounded-2xl p-8 shadow-lg text-center">
            <div className="w-24 h-24 bg-black dark:bg-purple-600 rounded-full mx-auto mb-6 flex items-center justify-center">
              <Zap className="w-12 h-12 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-black dark:text-white">Our Vision</h3>
            <p className="text-gray-600 dark:text-gray-300 max-w-md mx-auto">
              We're creating a future where AI is accessible and impactful for everyone, empowering businesses to achieve their full potential through intelligent solutions.
            </p>
          </div>
          
          <div className="space-y-12">
            <div>
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-black dark:bg-purple-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-black dark:text-white">Our Vision</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 ml-16">
                At unleashifAI, we envision a world where AI empowers everyone to achieve their full potential. We're building tools that make advanced AI accessible, intuitive, and impactful for businesses of all sizes.
              </p>
            </div>
            
            <div>
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-black dark:bg-purple-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-black dark:text-white">Our Approach</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 ml-16">
                We combine deep technical expertise with a human-centered design philosophy. Our solutions are powerful yet intuitive, delivering complex AI capabilities through simple, elegant interfaces that integrate seamlessly with your existing workflows.
              </p>
            </div>
            
            <div>
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-black dark:bg-purple-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <HeartHandshake className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-black dark:text-white">Our Values</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 ml-16">
                We're guided by principles of accessibility, transparency, and ethical innovation. We believe AI should enhance human capabilities, not replace them, and we're committed to responsible development that benefits society as a whole.
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { number: '4+', label: 'Years Experience' },
            { number: '150+', label: 'Happy Clients' },
            { number: '15+', label: 'Team Members' },
            { number: '96%', label: 'Client Satisfaction' }
          ].map((stat, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-black border border-gray-100 dark:border-gray-800 p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 text-center"
            >
              <div className="text-4xl md:text-5xl font-bold mb-2 text-black dark:text-white">{stat.number}</div>
              <div className="text-gray-500 dark:text-gray-400 uppercase text-sm tracking-wide">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;