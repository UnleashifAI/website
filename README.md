# UnleashifAI Website

Strategic AI solutions website built with Next.js 15, featuring a professional two-pillar service model.

## Features

- ✅ Two-pillar service structure (Custom AI Solutions & IT Adaptation)
- ✅ Professional practice focus with compliance emphasis
- ✅ Research partners & collaborators showcase
- ✅ Contact form with EmailJS integration (optional)
- ✅ Responsive design with dark mode support
- ✅ SEO optimized

## Getting Started

### Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

### Production Build

```bash
npm run build
npm start
```

## Contact Form Setup (Optional)

The contact form can send emails to `info@unleashifai.com` using EmailJS (free tier: 200 emails/month).

### Setup Steps:

1. **Create EmailJS Account**
   - Go to [https://www.emailjs.com/](https://www.emailjs.com/)
   - Sign up for free account

2. **Add Email Service**
   - Dashboard → Email Services → Add New Service
   - Choose your email provider (Gmail recommended)
   - Follow the setup instructions

3. **Create Email Template**
   - Dashboard → Email Templates → Create New Template
   - Use these variables in your template:
     ```
     From: {{from_name}} ({{from_email}})
     
     Message:
     {{message}}
     ```
   - Set "To Email" to: `info@unleashifai.com`

4. **Get Your Credentials**
   - Service ID: From Email Services page
   - Template ID: From Email Templates page
   - Public Key: Account → General (API Keys section)

5. **Configure Environment Variables**
   ```bash
   cp .env.local.example .env.local
   ```
   
   Edit `.env.local` and add your credentials:
   ```
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_xxxxxxx
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xxxxxxx
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxx
   ```

6. **Restart Development Server**
   ```bash
   npm run dev
   ```

### Without EmailJS

If you don't configure EmailJS, the contact form will still work but will only log submissions to the console. All CTA buttons ("Get Started", "Book a Demo", "Schedule Strategic Consultation") will scroll to the contact form.

## Project Structure

```
website/
├── app/
│   └── page.tsx              # Main page layout
├── components/
│   ├── Header.tsx            # Navigation header
│   ├── HeroSection.tsx       # Hero with CTA buttons
│   ├── AboutSection.tsx      # About with statistics
│   ├── PartnersSection.tsx   # Research partners logos
│   ├── ServicesSection.tsx   # Two-pillar services
│   ├── TeamSection.tsx       # Leadership team
│   ├── ContactSection.tsx    # Contact form
│   └── Footer.tsx            # Footer with links
├── public/
│   ├── mcml-logo.png         # Partner logos
│   ├── uoft-logo.png
│   └── camorix-logo.png
└── .env.local.example        # EmailJS configuration template
```

## Key Sections

### Services - Two Pillars

**Pillar I: Custom AI Solutions & Strategic Modeling**
- Advanced Vision Systems
- Digital Twins & Optimization
- High-Value Consulting

**Pillar II: IT & AI Adaptation for Professional Practices**
- System Stability & Compliance
- Digital Integration & Marketing
- AI Readiness

### Target Audience

- **Local (Ottawa-Toronto)**: Professional practices, SMEs, clinics
- **Global**: Custom AI solutions, strategic modeling

## Technologies

- Next.js 15.5.7
- React 19
- TypeScript
- Tailwind CSS
- EmailJS (optional)
- Lucide React Icons

## Security

- ✅ No security vulnerabilities
- ✅ Latest Next.js version (CVE patched)
- ✅ HIPAA-compliant messaging
- ✅ Privacy-focused design

## License

Proprietary - UnleashifAI Inc.
