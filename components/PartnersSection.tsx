'use client';

import React from 'react';
import Image from 'next/image';

const PartnersSection = () => {
    const partners = [
        {
            name: 'MCML - Multifunctional Composites Manufacturing Laboratory',
            logo: '/mcml-logo.png',
            width: 280,
            height: 100
        },
        {
            name: 'University of Toronto',
            logo: '/uoft-logo.png',
            width: 120,
            height: 120
        },
        {
            name: 'CAMORIX',
            logo: '/camorix-logo.png',
            width: 200,
            height: 80
        }
    ];

    return (
        <section className="py-16 md:py-20 bg-white dark:bg-gray-950 border-y border-gray-100 dark:border-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <span className="inline-block px-3 py-1 text-xs font-medium tracking-wider uppercase bg-black/5 dark:bg-white/5 rounded-full mb-4">
                        Our Network
                    </span>
                    <h2 className="text-2xl md:text-3xl font-bold mb-4 text-black dark:text-white">
                        Research Partners & Collaborators
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        We collaborate with leading research institutions and technology partners to deliver cutting-edge AI solutions.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-center">
                    {partners.map((partner, index) => (
                        <div
                            key={index}
                            className="flex items-center justify-center p-8 bg-gray-50 dark:bg-black/30 rounded-xl border border-gray-200 dark:border-gray-800 hover:border-purple-400 dark:hover:border-purple-600 transition-all duration-300 hover:shadow-lg group"
                        >
                            <div className="relative grayscale hover:grayscale-0 transition-all duration-300 opacity-70 group-hover:opacity-100">
                                <Image
                                    src={partner.logo}
                                    alt={partner.name}
                                    width={partner.width}
                                    height={partner.height}
                                    className="object-contain"
                                    style={{ maxHeight: '100px', width: 'auto' }}
                                />
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                        Building strategic partnerships with academic institutions and industry leaders
                    </p>
                </div>
            </div>
        </section>
    );
};

export default PartnersSection;
