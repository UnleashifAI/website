'use client';

import React, { useState } from 'react';
import { Cpu, Eye, Network, Zap, Settings, ShieldAlert, Monitor, ArrowRight } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const coreTechnologies = [
  {
    id: 1,
    icon: <Cpu className="w-8 h-8" />,
    title: 'Edge AI (Low-Resource Deployments)',
    subtitle: 'Real-time AI for Hardware-Constrained Environments',
    description: 'We specialize in low-resource adaptive transfer learning and compressing multimodal generative models for on-device inference, enabling real-time control, monitoring, and decision-making directly at the edge—where it matters most.',
    targetAudience: 'Automotive OEMs, Aerospace manufacturers, and field deployable smart systems requiring low-latency operations.',
    focusAreas: [
      {
        icon: <Zap className="w-5 h-5" />,
        title: 'Algorithm Lightweighting',
        description: 'Implementing advanced quantization, pruning, and knowledge distillation techniques to maximize performance on constrained processors.'
      },
      {
        icon: <Settings className="w-5 h-5" />,
        title: 'Real-Time Control Systems',
        description: 'Deploying robust control algorithms on microcontrollers (MCUs) and FPGAs for instantaneous hardware actuation.'
      }
    ]
  },
  {
    id: 2,
    icon: <Monitor className="w-8 h-8" />,
    title: 'Industrial Digital Twin',
    subtitle: 'Virtualizing the Physical Manufacturing Lifecycle',
    description: 'We build high-fidelity Digital Twins using a robust Manufacturing Foundation AI Model and Physics-Informed Graph Neural Networks to simulate, predict, and optimize complex industrial processes, mitigating risks before physical execution.',
    targetAudience: 'Smart Manufacturing facilities, CNC machining centers, and heavy industrial plant operators.',
    focusAreas: [
      {
        icon: <Eye className="w-5 h-5" />,
        title: 'Spatial Intelligence & Reconstruction',
        description: 'Highly accurate spatial mapping and defect detection for fixtures, milling processes, and manufactured components.'
      },
      {
        icon: <Network className="w-5 h-5" />,
        title: 'Physics-Informed Neural Networks (PINNs)',
        description: 'Fusing physical laws with deep learning to create simulations that accurately predict material stress, thermal dynamics, and mechanical tolerances.'
      }
    ]
  },
  {
    id: 3,
    icon: <ShieldAlert className="w-8 h-8" />,
    title: 'Vision-Language Models & Multimodal AI',
    subtitle: 'Advanced Human-Robot Collaboration (HRC) Safety',
    description: 'Transforming industrial safety by deploying state-of-the-art Multimodal AI that intrinsically understands human behavior, context, and intent in high-risk environments, ensuring safe human-machine interaction.',
    targetAudience: 'Robotics integrators, automated warehouse operators, and industrial safety compliance departments.',
    focusAreas: [
      {
        icon: <Eye className="w-5 h-5" />,
        title: 'Human Behavior Understanding',
        description: 'Utilizing Vision-Language Models (VLMs) to dynamically interpret real-time worker actions and predict potential hazards on the factory floor.'
      },
      {
        icon: <ArrowRight className="w-5 h-5" />,
        title: 'HRC Safety Monitoring',
        description: 'Active, intelligent monitoring overlays that synchronize robotic workflows with human presence, drastically reducing the risk of workplace accidents.'
      }
    ]
  }
];

const ServicesSection = () => {
  const [activeTech, setActiveTech] = useState<number | null>(null);

  const toggleTech = (id: number) => {
    setActiveTech(activeTech === id ? null : id);
  };

  return (
    <section id="technologies" className="py-24 md:py-32 bg-gray-50 dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-xs font-medium tracking-wider uppercase bg-black/5 dark:bg-white/5 rounded-full mb-4">
            Our Expertise
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 text-black dark:text-white tracking-tight">
            Core Technologies
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto text-lg">
            Our deep-tech engineering foundation is built on proprietary research and development spanning edge computing, physical simulations, and advanced perception.
          </p>
          <div className="h-1 w-16 bg-purple-600 mx-auto mt-6"></div>
        </div>
        </ScrollReveal>

        <div className="space-y-8">
          {coreTechnologies.map((tech) => (
            <div
              key={tech.id}
              className={`bg-white dark:bg-gray-900 border-2 rounded-2xl overflow-hidden transition-all duration-300 ${activeTech === tech.id
                ? 'border-purple-600 shadow-2xl'
                : 'border-gray-200 dark:border-gray-800 hover:border-purple-400 dark:hover:border-purple-600'
                }`}
            >
              <div
                className="p-8 cursor-pointer"
                onClick={() => toggleTech(tech.id)}
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-blue-500 rounded-xl flex items-center justify-center text-white shadow-lg">
                      {tech.icon}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-2xl md:text-3xl font-bold text-black dark:text-white">
                        {tech.title}
                      </h3>
                    </div>
                    <p className="text-purple-600 dark:text-purple-400 font-semibold text-lg mb-3">
                      {tech.subtitle}
                    </p>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                      {tech.description}
                    </p>
                  </div>
                  <div className="flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className={`w-6 h-6 text-gray-400 transition-transform duration-300 ${activeTech === tech.id ? 'rotate-180' : ''
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

              {activeTech === tech.id && (
                <div className="border-t border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-black/50">
                  <div className="p-8">
                    <h4 className="text-xl font-bold text-black dark:text-white mb-6">Technical Applications</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {tech.focusAreas.map((area, index) => (
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

                    <div className="mt-8 p-6 bg-purple-50 dark:bg-purple-900/20 rounded-xl border border-purple-200 dark:border-purple-800">
                      <h5 className="text-sm font-bold text-purple-900 dark:text-purple-300 uppercase tracking-wide mb-2">
                        Target Industry
                      </h5>
                      <p className="text-gray-700 dark:text-gray-300 font-medium">
                        {tech.targetAudience}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-20 bg-black text-white dark:bg-purple-900/30 rounded-2xl overflow-hidden border border-gray-800">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-10 lg:p-16">
              <h3 className="text-3xl lg:text-4xl font-extrabold mb-6 tracking-tight">Deploy Mission-Critical AI in Your Facilities</h3>
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                Partner with us to integrate heavily researched and proven AI algorithms into your manufacturing or aerospace systems. We bridge the gap between academic breakthroughs and industrial robustness.
              </p>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-6 py-3.5 bg-white text-black dark:bg-purple-600 dark:text-white font-medium rounded-lg hover:bg-gray-100 dark:hover:bg-purple-500 transition-colors shadow-lg"
              >
                Discuss Technical Collaboration
              </button>
            </div>
            <div className="bg-gradient-to-r from-purple-900/40 to-black p-10 lg:p-16 flex items-center border-l border-white/10">
              <div className="space-y-6">
                <div className="flex items-center text-lg">
                  <Zap className="h-6 w-6 mr-4 text-purple-400 flex-shrink-0" />
                  <span className="text-gray-200">Hardware-Accelerated Inference</span>
                </div>
                <div className="flex items-center text-lg">
                  <Settings className="h-6 w-6 mr-4 text-purple-400 flex-shrink-0" />
                  <span className="text-gray-200">Robust Spatial Understanding</span>
                </div>
                <div className="flex items-center text-lg">
                  <ShieldAlert className="h-6 w-6 mr-4 text-purple-400 flex-shrink-0" />
                  <span className="text-gray-200">Fail-Safe Human-Robot Collaboration</span>
                </div>
                <div className="flex items-center text-lg">
                  <Monitor className="h-6 w-6 mr-4 text-purple-400 flex-shrink-0" />
                  <span className="text-gray-200">High-Fidelity Virtual Simulations</span>
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