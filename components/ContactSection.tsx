'use client';

import React, { useState } from 'react';
import { MapPin, Mail, CheckCircle2, Loader2 } from 'lucide-react';

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

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
      isValid = false;
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
      isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email)) {
      newErrors.email = 'Valid email is required';
      isValid = false;
    }

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

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        message: '',
      });

      const formElement = document.getElementById('contact-form');
      if (formElement) {
        formElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }

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
            Get In Touch
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 text-black dark:text-white tracking-tight">Start a Technical Collaboration</h2>
          <p className="text-gray-600 dark:text-gray-300 md:text-lg max-w-3xl mx-auto">
            Whether you are exploring Edge AI deployment, building an Industrial Digital Twin, or need specialized visual perception research — our team is ready to discuss your technical requirements.
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
                        className={`w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border ${errors.firstName ? 'border-red-500 dark:border-red-500' : 'border-gray-200 dark:border-gray-700'
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
                        className={`w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border ${errors.lastName ? 'border-red-500 dark:border-red-500' : 'border-gray-200 dark:border-gray-700'
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
                      className={`w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border ${errors.email ? 'border-red-500 dark:border-red-500' : 'border-gray-200 dark:border-gray-700'
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
                      className={`w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border ${errors.message ? 'border-red-500 dark:border-red-500' : 'border-gray-200 dark:border-gray-700'
                        } rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-colors resize-none dark:text-white`}
                      placeholder="Tell us about your project requirements, target industry, or technical challenges."
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
                    className={`w-full py-4 bg-black dark:bg-purple-600 text-white font-medium rounded-lg transition-all ${isSubmitting
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
                    <h4 className="font-bold mb-1">Headquarters</h4>
                    <p className="text-gray-300">Ottawa, ON, Canada</p>
                    <p className="text-gray-300 text-sm mt-1">Global Industrial R&D Hub</p>
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


              <div className="mt-12 pt-8 border-t border-gray-700">
                <div className="bg-purple-900/30 p-4 rounded-lg">
                  <p className="text-center text-white font-semibold">
                    Technical Consultations Available
                  </p>
                  <p className="text-center text-gray-300 text-sm mt-2">
                    Contact us to discuss R&D partnerships, joint proposals, or technical licensing
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Service Area Info */}
        <div className="mt-16 bg-gradient-to-r from-purple-900/20 to-blue-900/20 dark:from-purple-900/30 dark:to-blue-900/30 rounded-2xl p-12 border border-purple-200 dark:border-purple-800">
          <div className="text-center max-w-3xl mx-auto">
            <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white">
              <MapPin className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-black dark:text-white">Global R&D Reach</h3>
            <div className="grid md:grid-cols-2 gap-8 mt-8">
              <div className="bg-white dark:bg-gray-900 p-6 rounded-xl border border-gray-200 dark:border-gray-800">
                <h4 className="font-bold text-lg mb-2 text-black dark:text-white">North American HQ</h4>
                <p className="text-purple-600 dark:text-purple-400 font-semibold mb-2">Ottawa, ON, Canada</p>
                <p className="text-gray-600 dark:text-gray-300 text-sm">Core R&D lab, university partnerships, and government-funded research programs</p>
              </div>
              <div className="bg-white dark:bg-gray-900 p-6 rounded-xl border border-gray-200 dark:border-gray-800">
                <h4 className="font-bold text-lg mb-2 text-black dark:text-white">International Collaboration</h4>
                <p className="text-purple-600 dark:text-purple-400 font-semibold mb-2">Asia-Pacific</p>
                <p className="text-gray-600 dark:text-gray-300 text-sm">Expanding North American and global R&D partnerships to deploy robust Edge AI solutions across Aerospace, Smart Manufacturing, and Advanced Automotive sectors.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;