'use client';

import React from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin, ArrowUp, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white py-16 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
          <div className="md:col-span-2">
            <div className="text-xl font-bold mb-6">
              unleashif<span className="text-purple-500">AI</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Executive-level AI expertise combined with deep regulatory knowledge to deliver strategic solutions for professional practices and enterprises worldwide.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold mb-4 text-white">Company</h3>
            <ul className="space-y-2">
              <li><Link href="#about" className="text-sm text-gray-400 hover:text-purple-400 transition-colors">About Us</Link></li>
              <li><Link href="#team" className="text-sm text-gray-400 hover:text-purple-400 transition-colors">Leadership</Link></li>
              <li><Link href="#services" className="text-sm text-gray-400 hover:text-purple-400 transition-colors">Service Pillars</Link></li>
              <li><Link href="#contact" className="text-sm text-gray-400 hover:text-purple-400 transition-colors">Service Area</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4 text-white">Services</h3>
            <ul className="space-y-2">
              <li><Link href="#services" className="text-sm text-gray-400 hover:text-purple-400 transition-colors">Custom AI Solutions</Link></li>
              <li><Link href="#services" className="text-sm text-gray-400 hover:text-purple-400 transition-colors">Strategic Modeling</Link></li>
              <li><Link href="#services" className="text-sm text-gray-400 hover:text-purple-400 transition-colors">IT & AI Adaptation</Link></li>
              <li><Link href="#services" className="text-sm text-gray-400 hover:text-purple-400 transition-colors">Compliance Solutions</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4 text-white">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center text-sm text-gray-400">
                <Mail className="h-4 w-4 mr-2 text-purple-400" />
                info@unleashifai.com
              </li>
              <li className="flex items-center text-sm text-gray-400">
                <Phone className="h-4 w-4 mr-2 text-purple-400" />
                +1-438-885-1872
              </li>
              <li className="flex items-start text-sm text-gray-400">
                <MapPin className="h-4 w-4 mr-2 text-purple-400 mt-0.5" />
                <div>
                  <div>Ottawa-Toronto Area</div>
                  <div className="text-xs text-gray-500">(Local) & Worldwide (AI)</div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © {currentYear} unleashifAI. All rights reserved.
          </p>

          <div className="flex space-x-6">
            <Link href="#" className="text-gray-500 hover:text-purple-400 text-sm transition-colors">Privacy Policy</Link>
            <Link href="#" className="text-gray-500 hover:text-purple-400 text-sm transition-colors">Terms of Service</Link>
            <Link href="#" className="text-gray-500 hover:text-purple-400 text-sm transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>

      {/* Back to top button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 bg-black border border-gray-800 text-white w-10 h-10 rounded-full flex items-center justify-center shadow-lg hover:bg-gray-900 transition-colors z-20"
        aria-label="Back to top"
      >
        <ArrowUp className="h-5 w-5" />
      </button>
    </footer>
  );
};

export default Footer;