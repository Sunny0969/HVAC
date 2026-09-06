import { Metadata } from 'next';
import Link from 'next/link';
import SellPageContent from '../../views/components/SellPageContent';

export const metadata: Metadata = {
  title: 'Sell Your HVAC Business in Florida',
  description: 'Selling your Florida HVAC company? Get a free, confidential valuation and a broker who sells HVAC businesses only. No fee until you close.',
  alternates: {
    canonical: 'https://sunstatehvacbrokers.com/sell-your-hvac-business',
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Sell Your HVAC Business in Florida',
    description: 'Selling your Florida HVAC company? Get a free, confidential valuation and a broker who sells HVAC businesses only. No fee until you close.',
    images: [
      {
        url: '/images/og-hvac-rooftop-florida.webp',
        width: 1200,
        height: 630,
        alt: 'Florida commercial HVAC rooftop unit at dusk',
      },
    ],
  },
};

export default function SellYourHVACBusiness() {
  const jsonLdService = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "HVAC Business Brokerage",
    "provider": {
      "@type": "LocalBusiness",
      "name": "SunState HVAC Brokers",
      "areaServed": {
        "@type": "State",
        "name": "Florida"
      },
      "telephone": "+1-555-555-5555",
      "url": "https://sunstatehvacbrokers.com/sell-your-hvac-business"
    },
    "audience": {
      "@type": "BusinessAudience",
      "audienceType": "HVAC business owners"
    }
  };

  const jsonLdFAQ = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How long does it take to sell an HVAC business in Florida?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Timelines vary with business size, financial documentation, and buyer demand in your region, but most Florida HVAC sales we handle move from listing to closing within several months once the business is properly prepared and priced."
        }
      },
      {
        "@type": "Question",
        "name": "Will my employees or customers find out I'm selling?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Not through us. We market confidentially, require signed NDAs before releasing any identifying details, and control disclosure timing with you throughout the process."
        }
      },
      {
        "@type": "Question",
        "name": "What's my HVAC business worth?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "It depends on revenue mix (install vs. service vs. maintenance agreements), technician retention, fleet condition, and current Florida buyer demand. A free valuation gives you a real, data-backed range."
        }
      },
      {
        "@type": "Question",
        "name": "Do I need to have my financials perfectly organized before reaching out?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No - many owners start the conversation before financials are fully clean. Part of what we do is help you understand what documentation buyers will expect and get you ready."
        }
      },
      {
        "@type": "Question",
        "name": "What does it cost to work with SunState HVAC Brokers?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We don't charge a fee unless your business sells. Your free valuation and initial consultation carry no obligation."
        }
      }
    ]
  };

  return (
    <div className="w-full bg-[#F7F5F0] min-h-screen font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdService) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFAQ) }}
      />
      {/* Hero Section - Calm, conversion-focused */}
      <section className="relative w-full h-[100dvh] overflow-hidden bg-[#022B3A] text-white flex items-center">
        {/* Background Video */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="object-cover w-full h-full opacity-70 blur-[2px]"
          >
            <source src="/videos/Sell_Your_Florida_HVAC_Busines.mp4" type="video/mp4" />
          </video>
          {/* Dark Overlay for Text Contrast */}
          <div className="absolute inset-0 bg-black/50 pointer-events-none" />
          {/* Watermark Hider Overlay (Bottom Right) */}
          <div className="absolute -bottom-4 -right-4 w-40 h-28 bg-[#022B3A] blur-xl pointer-events-none opacity-90" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left relative z-10 w-full mt-16 md:mt-0">
          <h1 className="max-w-4xl text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight tracking-tight drop-shadow-xl">
            Sell Your Florida HVAC Business On Your Terms
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-10 max-w-3xl leading-relaxed font-medium">
            SunState HVAC Brokers helps Florida heating and air conditioning business owners sell for top dollar confidentially, with buyers who are actually qualified to close.
          </p>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-start gap-4 mb-10">
            <Link 
              href="/free-valuation" 
              className="w-full sm:w-auto px-8 py-4 bg-[#EE5B2C] hover:bg-orange-600 text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 text-center"
            >
              Get My Free Valuation &rarr;
            </Link>
            <a 
              href="tel:5555555555" 
              className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold rounded-lg transition-colors text-center"
            >
              Call (XXX) XXX-XXXX
            </a>
          </div>
          
          {/* Trust Row */}
          <div className="flex flex-wrap justify-start items-center gap-x-6 gap-y-3 text-sm md:text-base font-medium text-white/80">
            <span className="flex items-center gap-2"><svg className="w-4 h-4 text-[#EE5B2C]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg> Florida-only focus</span>
            <span className="hidden md:inline text-white/30">&bull;</span>
            <span className="flex items-center gap-2"><svg className="w-4 h-4 text-[#EE5B2C]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg> Confidential process</span>
            <span className="hidden md:inline text-white/30">&bull;</span>
            <span className="flex items-center gap-2"><svg className="w-4 h-4 text-[#EE5B2C]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg> No fee until you close</span>
          </div>
        </div>
      </section>

      {/* Main Content Area with Animated Cards */}
      <SellPageContent />

      {/* Closing CTA Band */}
      <section className="py-24 bg-[#022B3A] text-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6">Ready to Find Out What Your Florida HVAC Business Is Worth?</h2>
          <p className="text-xl text-white/80 mb-10 font-medium">Get a free, confidential valuation - no obligation, no pressure, no listing fee upfront.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              href="/free-valuation" 
              className="w-full sm:w-auto px-8 py-4 bg-[#EE5B2C] hover:bg-orange-600 text-white font-bold text-lg rounded-lg shadow-lg hover:shadow-xl transition-all"
            >
              Get My Free Valuation &rarr;
            </Link>
            <a 
              href="tel:5555555555" 
              className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-lg rounded-lg transition-colors"
            >
              Call (XXX) XXX-XXXX
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
