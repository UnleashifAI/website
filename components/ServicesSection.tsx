'use client';

import React, { useState } from 'react';
import { 
  BrainCircuit, 
  Zap, 
  LineChart, 
  Sparkles, 
  MessagesSquare, 
  ShieldCheck 
} from 'lucide-react';

const services = [
  {
    icon: <BrainCircuit className="w-6 h-6" />,
    title: 'AI Strategy & Consulting',
    description: 'We help you identify opportunities for AI implementation, develop a roadmap, and build a comprehensive strategy aligned with your business goals.',
    details: 'Our strategic consulting includes current-state assessment, opportunity identification, competitive analysis, roadmap development, and implementation planning. We ensure your AI initiatives align with overall business objectives and deliver measurable value.',
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: 'Custom AI Solutions',
    description: 'We design and develop tailored AI solutions that address your specific business challenges, from predictive analytics to computer vision and NLP.',
    details: 'Our development process includes requirements gathering, solution architecture, model development, integration with existing systems, testing, and deployment. We focus on creating AI solutions that seamlessly integrate with your current tech stack.',
  },
  {
    icon: <LineChart className="w-6 h-6" />,
    title: 'Data Analytics & Insights',
    description: 'We transform your raw data into actionable insights using advanced analytics, machine learning, and visualization tools to drive informed decision-making.',
    details: 'Our data analytics services include data collection and preparation, exploratory analysis, predictive modeling, interactive visualization, and insights delivery. We help you uncover hidden patterns and make data-driven decisions.',
  },
  {
    icon: <Sparkles className="w-6 h-6" />,
    title: 'AI-Powered Automation',
    description: 'We automate repetitive tasks and workflows using intelligent solutions that learn and improve over time, increasing efficiency and reducing operational costs.',
    details: 'Our automation services include process assessment, intelligent workflow design, RPA implementation, ML-enhanced automation, and continuous monitoring and improvement. We focus on high-value automation that delivers significant ROI.',
  },
  {
    icon: <MessagesSquare className="w-6 h-6" />,
    title: 'Conversational AI',
    description: 'We build intelligent virtual assistants and chatbots that engage with your customers naturally, improving service quality while reducing support costs.',
    details: 'Our conversational AI services include use case definition, conversation flow design, NLP model development, integration with communication channels, and continuous learning implementation. We create AI assistants that understand intent and deliver helpful responses.',
  },
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    title: 'AI Security & Compliance',
    description: 'We ensure your AI systems are secure, transparent, and compliant with relevant regulations, building trust with your customers and stakeholders.',
    details: 'Our AI governance services include risk assessment, bias detection and mitigation, privacy protection, regulatory compliance, transparency implementation, and security hardening. We help you build AI that is not only powerful but also ethical and trustworthy.',
  },
];

const ServicesSection = () => {
  const [activeTab, setActiveTab] = useState<number | null>(null);

  const toggleTab = (index: number) => {
    setActiveTab(activeTab === index ? null : index);
  };

  return (
    <section id="services" className="py-24 md:py-32 bg-gray-50 dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-xs font-medium tracking-wider uppercase bg-black/5 dark:bg-white/5 rounded-full mb-4">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-black dark:text-white">
            Expert AI Solutions Tailored for Your Business
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            We offer a comprehensive suite of AI services designed to drive innovation, 
            efficiency, and growth across your organization.
          </p>
          <div className="h-1 w-16 bg-purple-600 mx-auto mt-6"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 p-8 rounded-xl transition-all duration-300 cursor-pointer ${
                activeTab === index 
                  ? 'ring-2 ring-purple-600 shadow-xl transform -translate-y-1' 
                  : 'hover:shadow-lg hover:-translate-y-1'
              }`}
              onClick={() => toggleTab(index)}
            >
              <div className="w-14 h-14 bg-black dark:bg-purple-600 text-white rounded-xl flex items-center justify-center mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 text-black dark:text-white">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{service.description}</p>
              <div className="flex items-center text-sm font-medium text-black dark:text-white hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                {activeTab === index ? 'Read Less' : 'Read More'}
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className={`ml-1 w-4 h-4 transition-transform duration-200 ${
                    activeTab === index ? 'rotate-180' : ''
                  }`}
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              
              {activeTab === index && (
                <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-800">
                  <p className="text-gray-600 dark:text-gray-300">{service.details}</p>
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="mt-20 bg-black text-white dark:bg-purple-900/30 rounded-2xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-10 lg:p-16">
              <h3 className="text-3xl font-bold mb-6">Ready to transform your business with AI?</h3>
              <p className="text-gray-300 text-lg mb-8">
                Whether you're just starting your AI journey or looking to enhance your existing capabilities, 
                our team of experts is ready to help you unleash the full potential of artificial intelligence.
              </p>
              <button className="px-6 py-3 bg-white text-black dark:bg-purple-600 dark:text-white font-medium rounded-lg hover:bg-gray-100 dark:hover:bg-purple-700 transition-colors shadow-lg">
                Start Your AI Transformation
              </button>
            </div>
            <div className="bg-gradient-to-r from-purple-900/80 to-black p-10 lg:p-16 flex items-center">
              <div className="space-y-6">
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-white">Custom Solutions for Any Business</span>
                </div>
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-white">Expert Team of AI Specialists</span>
                </div>
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-white">96% Client Satisfaction Rate</span>
                </div>
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-white">Transparent, Ethical Approach</span>
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