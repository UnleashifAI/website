'use client';

import React, { useState } from 'react';
import { MapPin, Phone, Mail, CheckCircle2, Loader2 } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
    
    // Clear error when user starts typing
    if (errors[id as keyof typeof errors]) {
      setErrors(prev => ({
        ...prev,
        [id]: ''
      }));
    }
  };
  
  const validateForm = (): boolean => {
    let isValid = true;
    const newErrors = { ...errors };
    
    // Validate first name
    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
      isValid = false;
    }
    
    // Validate last name
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
      isValid = false;
    }
    
    // Validate email with regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email)) {
      newErrors.email = 'Valid email is required';
      isValid = false;
    }
    
    // Validate message
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
      isValid = false;
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
      isValid = false;
    }
    
    setErrors(newErrors);
    return isValid;
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate form submission with a delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        message: '',
      });
      
      // Scroll to top of form for better feedback visibility
      const formElement = document.getElementById('contact-form');
      if (formElement) {
        formElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      
      // Reset form after some time
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 px-4 bg-gray-50 dark:bg-black/95">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-xs font-medium tracking-wider uppercase bg-black/5 dark:bg-white/5 rounded-full mb-4">
            Contact Us
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-black dark:text-white">Get In Touch</h2>
          <p className="text-gray-600 dark:text-gray-300 md:text-lg max-w-3xl mx-auto">
            Have questions or ready to start your AI journey? Our team is here to help you 
            navigate the possibilities and find the perfect solution for your needs.
          </p>
          <div className="h-1 w-16 bg-purple-600 mx-auto mt-6"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 lg:gap-24">
          <div>
            <div className="bg-white dark:bg-gray-900 p-8 md:p-10 rounded-2xl shadow-lg h-full border border-gray-100 dark:border-gray-800">
              <h3 className="text-2xl font-bold mb-6 text-black dark:text-white">Send us a message</h3>
              
              {isSubmitted ? (
                <div 
                  className="bg-green-50 dark:bg-green-900/20 text-green-800 dark:text-green-400 p-6 rounded-lg text-center" 
                  role="alert"
                  aria-live="assertive"
                >
                  <CheckCircle2 className="h-16 w-16 mx-auto mb-4 text-green-500" aria-hidden="true" />
                  <h4 className="text-xl font-bold mb-2 text-green-800 dark:text-green-400">Message Sent!</h4>
                  <p className="text-green-700 dark:text-green-300">Thank you for contacting us. We'll get back to you shortly.</p>
                  <p className="mt-4 text-green-700 dark:text-green-300">Our team usually responds within 1 business day.</p>
                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className="mt-4 px-4 py-2 bg-green-600 text-white text-sm rounded-lg hover:bg-green-700 transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form id="contact-form" onSubmit={handleSubmit} noValidate>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        First Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border ${
                          errors.firstName ? 'border-red-500 dark:border-red-500' : 'border-gray-200 dark:border-gray-700'
                        } rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-colors dark:text-white`}
                        placeholder="Your first name"
                        aria-required="true"
                        aria-invalid={errors.firstName ? "true" : "false"}
                      />
                      {errors.firstName && (
                        <p className="mt-1 text-sm text-red-500">{errors.firstName}</p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Last Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border ${
                          errors.lastName ? 'border-red-500 dark:border-red-500' : 'border-gray-200 dark:border-gray-700'
                        } rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-colors dark:text-white`}
                        placeholder="Your last name"
                        aria-required="true"
                        aria-invalid={errors.lastName ? "true" : "false"}
                      />
                      {errors.lastName && (
                        <p className="mt-1 text-sm text-red-500">{errors.lastName}</p>
                      )}
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border ${
                        errors.email ? 'border-red-500 dark:border-red-500' : 'border-gray-200 dark:border-gray-700'
                      } rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-colors dark:text-white`}
                      placeholder="your.email@example.com"
                      aria-required="true"
                      aria-invalid={errors.email ? "true" : "false"}
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                    )}
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className={`w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border ${
                        errors.message ? 'border-red-500 dark:border-red-500' : 'border-gray-200 dark:border-gray-700'
                      } rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-colors resize-none dark:text-white`}
                      placeholder="How can we help you?"
                      aria-required="true"
                      aria-invalid={errors.message ? "true" : "false"}
                    ></textarea>
                    {errors.message && (
                      <p className="mt-1 text-sm text-red-500">{errors.message}</p>
                    )}
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-4 bg-black dark:bg-purple-600 text-white font-medium rounded-lg transition-all ${
                      isSubmitting 
                        ? 'opacity-75 cursor-not-allowed' 
                        : 'hover:bg-purple-900 dark:hover:bg-purple-700 hover:shadow-lg hover:shadow-purple-500/20'
                    }`}
                    aria-busy={isSubmitting ? "true" : "false"}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center">
                        <Loader2 className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" aria-hidden="true" />
                        Sending...
                      </span>
                    ) : 'Send Message'}
                  </button>
                  
                  <div className="mt-4 space-y-2">
                    <p className="text-center text-sm text-gray-500 dark:text-gray-400">
                      We'll never share your information with third parties.
                    </p>
                    <p className="text-center text-sm text-gray-500 dark:text-gray-400">
                      <span className="text-red-500">*</span> Required fields
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
          
          <div className="flex flex-col">
            <div className="bg-black text-white dark:bg-gray-900 p-8 md:p-10 rounded-2xl mb-8 border border-gray-800">
              <h3 className="text-2xl font-bold mb-8">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-white/10 dark:bg-purple-600/20 p-3 rounded-full flex-shrink-0 mr-4">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Visit Us</h4>
                    <p className="text-gray-300">69 Oakbriar Cres. ON K2J5G1</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-white/10 dark:bg-purple-600/20 p-3 rounded-full flex-shrink-0 mr-4">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Call Us</h4>
                    <p className="text-gray-300">+1-438-885-1872</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-white/10 dark:bg-purple-600/20 p-3 rounded-full flex-shrink-0 mr-4">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Email Us</h4>
                    <p className="text-gray-300">info@unleashifai.com</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12">
                <h4 className="font-bold mb-4">Connect With Us</h4>
                <div className="flex space-x-4">
                  <a href="#" className="bg-white/10 dark:bg-purple-600/20 p-3 rounded-full hover:bg-white/20 dark:hover:bg-purple-600/40 transition-colors" aria-label="Twitter">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                    </svg>
                  </a>
                  <a href="#" className="bg-white/10 dark:bg-purple-600/20 p-3 rounded-full hover:bg-white/20 dark:hover:bg-purple-600/40 transition-colors" aria-label="LinkedIn">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                  <a href="#" className="bg-white/10 dark:bg-purple-600/20 p-3 rounded-full hover:bg-white/20 dark:hover:bg-purple-600/40 transition-colors" aria-label="Instagram">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-900 p-8 md:p-10 rounded-2xl shadow-lg flex-grow border border-gray-100 dark:border-gray-800">
              <h3 className="text-2xl font-bold mb-6 text-black dark:text-white">Business Hours</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center border-b border-gray-100 dark:border-gray-800 pb-3">
                  <span className="font-medium text-black dark:text-white">Monday - Friday</span>
                  <span className="text-gray-600 dark:text-gray-300">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between items-center border-b border-gray-100 dark:border-gray-800 pb-3">
                  <span className="font-medium text-black dark:text-white">Saturday</span>
                  <span className="text-gray-600 dark:text-gray-300">10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium text-black dark:text-white">Sunday</span>
                  <span className="text-gray-600 dark:text-gray-300">Closed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Map placeholder - in production would be replaced with a real map */}
        <div className="mt-16 h-96 bg-gray-200 dark:bg-gray-800 rounded-2xl relative overflow-hidden shadow-md">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="w-12 h-12 bg-black dark:bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                <MapPin className="w-6 h-6" />
              </div>
              <p className="font-medium text-gray-800 dark:text-gray-200">69 Oakbriar Cres. ON K2J5G1</p>
              <a 
                href="https://maps.google.com/?q=69+Oakbriar+Cres+ON+K2J5G1" 
                target="_blank" 
                rel="noopener noreferrer"
                className="mt-4 inline-block px-4 py-2 bg-black dark:bg-purple-600 text-white text-sm rounded-lg hover:bg-purple-900 dark:hover:bg-purple-700 transition-colors"
              >
                Get Directions
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;