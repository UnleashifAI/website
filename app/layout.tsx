import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'UnleashifAI — Edge AI & Industrial Digital Twin Solutions',
  description: 'North American deep-tech laboratory pioneering Visual Perception, Edge AI, and Industrial Digital Twins for Smart Manufacturing, Aerospace, and Autonomous Systems.',
  openGraph: {
    title: 'UnleashifAI — Edge AI & Industrial Digital Twin Solutions',
    description: 'Pioneering Visual Perception and Edge AI Solutions for Mission-Critical Engineering Systems.',
    url: 'https://unleashifai.com',
    siteName: 'UnleashifAI',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'UnleashifAI — Edge AI, Industrial Digital Twin, Visual Perception',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'UnleashifAI — Edge AI & Industrial Digital Twin Solutions',
    description: 'Pioneering Visual Perception and Edge AI Solutions for Mission-Critical Engineering Systems.',
    images: ['/og-image.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body style={{ fontFamily: 'Inter, sans-serif' }}>
        {children}
      </body>
    </html>
  );
}