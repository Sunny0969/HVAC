import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import BreadcrumbSchema from '../../views/components/BreadcrumbSchema';
import AboutPageContent from '../../views/components/AboutPageContent';

export const metadata: Metadata = {
  title: 'Florida HVAC Business Broker Team',
  description: 'Meet Florida\'s premier HVAC business brokerage firm. Former mechanical contractors helping owners achieve maximum exit value. Learn about our story!',
  alternates: {
    canonical: 'https://www.hvacexitadvisors.com/about-us',
  },
  openGraph: {
    title: 'Florida HVAC Business Broker Team | HVAC Exit Advisors',
    description: 'Meet Florida\'s premier HVAC business brokerage firm. Former mechanical contractors helping owners achieve maximum exit value.',
    url: 'https://www.hvacexitadvisors.com/about-us',
  },
};

export default function Page() {
  const breadcrumbs = [
    { name: 'Home', item: 'https://www.hvacexitadvisors.com/' },
    { name: 'About Us', item: 'https://www.hvacexitadvisors.com/about-us' }
  ];

  const aboutSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "mainEntity": {
      "@type": "Organization",
      "name": "HVAC Exit Advisors",
      "url": "https://www.hvacexitadvisors.com",
      "description": "A specialized division supported by KMF Business Advisors, working with owners and qualified buyers of HVAC and related mechanical-service businesses in Florida.",
      "founder": {
        "@type": "Person",
        "name": "Sanjay Wadhwani",
        "jobTitle": "Business, Franchise and Commercial Real-Estate Broker"
      },
      "areaServed": "Florida"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What does HVAC Exit Advisors specialize in?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The firm focuses on confidential sales, acquisitions, and valuation guidance for HVAC and related mechanical-service businesses, with particular attention to Florida markets and industry-specific operating issues."
        }
      },
      {
        "@type": "Question",
        "name": "Why does industry specialization matter in an HVAC transaction?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "HVAC companies have distinctive value drivers and risks, including licensing, maintenance agreements, technician retention, seasonal demand, installation backlog, warranty obligations, fleet needs, and residential versus commercial revenue mix."
        }
      },
      {
        "@type": "Question",
        "name": "Does HVAC Exit Advisors represent both sellers and buyers?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The firm can assist owners preparing to sell and qualified buyers pursuing acquisitions. Representation, duties, fees, confidentiality, and any potential conflicts should be clearly documented for each engagement."
        }
      },
      {
        "@type": "Question",
        "name": "Does an advisor make the final legal or tax decisions?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. The advisor coordinates the transaction and provides brokerage and market guidance. The parties should rely on their own attorneys, accountants, tax advisers, lenders, and licensing professionals for specialized decisions."
        }
      }
    ]
  };

  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: `[${JSON.stringify(aboutSchema)}, ${JSON.stringify(faqSchema)}]` }}
      />
      <main className="min-h-screen bg-[#F7F5F0]">
        
        {/* Hero Section */}
        <section className="relative w-full h-[50dvh] overflow-hidden bg-gray-900 text-white flex items-center justify-center">
          <div className="absolute inset-0 z-0">
            <Image 
              src="https://res.cloudinary.com/db05hw4ri/image/upload/v1789541747/hvac-hero-images/about_us_hero_bg.jpg"
              alt="About HVAC Exit Advisors"
              fill
              className="object-cover object-center"
              priority
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30" />
          </div>

          <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left mt-24 md:mt-28">
            <h1 className="max-w-3xl text-3xl md:text-4xl lg:text-5xl font-black mb-3 leading-tight tracking-tight drop-shadow-xl">
              About <span className="text-[#EE5B2C]">HVAC Exit Advisors</span>
            </h1>
            <p className="max-w-xl text-base md:text-lg text-white/85 leading-relaxed font-medium drop-shadow-md">
              Florida's premier brokerage team, combining real-world business ownership experience with top-tier M&A expertise.
            </p>
          </div>
        </section>

        {/* Main Content with Sticky Sidebar */}
        <AboutPageContent />

      </main>
    </>
  );
}
