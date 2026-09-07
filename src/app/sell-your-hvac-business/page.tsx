import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import SellPageContent from '../../views/components/SellPageContent';

export const metadata: Metadata = {
  title: 'Sell Your HVAC Business in Florida',
  description: 'Selling your Florida HVAC company? Get a free, confidential valuation and a broker who sells HVAC businesses only. No fee until you close.',
  alternates: {
    canonical: 'https://hvacexitadvisors.com/sell-your-hvac-business',
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
      "name": "HVAC Exit Advisors",
      "areaServed": {
        "@type": "State",
        "name": "Florida"
      },
      "telephone": "+1-555-555-5555",
      "url": "https://hvacexitadvisors.com/sell-your-hvac-business"
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
        "name": "What does it cost to work with HVAC Exit Advisors?",
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
      {/* Hero Section - Full Screen */}
      <section className="relative w-full h-[100dvh] overflow-hidden bg-gray-900 text-white flex items-center justify-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/sell-your-hvac-business.jpg"
            alt="Selling Florida HVAC Business"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          {/* Dark Overlay for Text Contrast */}
          <div className="absolute inset-0 bg-black/70" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left relative z-10 w-full mt-16 md:mt-0">
          <h1 className="max-w-4xl text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight tracking-tight drop-shadow-xl">
            Sell Your Florida <span className="text-[#EE5B2C]">HVAC Business</span> On Your Terms
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-10 max-w-3xl leading-relaxed font-medium">
            HVAC Exit Advisors helps Florida heating and air conditioning business owners sell for top dollar confidentially, with buyers who are actually qualified to close.
          </p>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-start gap-4 mb-10">
            <Link 
              href="/free-valuation" 
              className="w-full sm:w-auto px-8 py-4 bg-[#EE5B2C] hover:bg-orange-600 text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 text-center"
            >
              Get My Free Valuation &rarr;
            </Link>
            <a 
              href="https://wa.me/19548649161" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold rounded-lg transition-colors text-center flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              WhatsApp Us
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
              href="https://wa.me/19548649161" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-lg rounded-lg transition-colors flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
