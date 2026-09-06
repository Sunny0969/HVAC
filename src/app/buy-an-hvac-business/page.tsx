import { Metadata } from "next";
import BuyPageContent from "@/views/components/BuyPageContent";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Buy an HVAC Business in Florida",
  description: "Looking to buy a Florida HVAC company? Get matched with vetted, cash-flowing businesses and expert guidance from search to closing.",
  alternates: {
    canonical: "https://[domain]/buy-an-hvac-business",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Buy an HVAC Business in Florida",
    description: "Looking to buy a Florida HVAC company? Get matched with vetted, cash-flowing businesses and expert guidance from search to closing.",
    images: [
      {
        url: "/images/og-buy-hvac.webp", // placeholder
        width: 1200,
        height: 630,
        alt: "Florida HVAC technician servicing unit",
      }
    ]
  }
};

export default function BuyHvacBusinessPage() {
  return (
    <main className="min-h-screen flex flex-col bg-gray-50">
      
      {/* Schema Markup for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "HVAC Business Acquisition Brokerage",
            "provider": {
              "@type": "LocalBusiness",
              "name": "SunState HVAC Brokers",
              "areaServed": {
                "@type": "State",
                "name": "Florida"
              },
              "telephone": "+1-XXX-XXX-XXXX",
              "url": "https://[domain]/buy-an-hvac-business"
            },
            "audience": {
              "@type": "BusinessAudience",
              "audienceType": "Prospective HVAC business buyers"
            }
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "How much cash do I need to buy an HVAC business in Florida?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "It depends on the purchase price and financing structure - SBA loans, seller financing, and combinations of both are common in HVAC acquisitions. We'll walk you through what's realistic for the listings you're considering."
                }
              },
              {
                "@type": "Question",
                "name": "What should I check during due diligence on an HVAC company?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Financial statements and normalized earnings, customer contracts and maintenance-agreement retention, technician retention, equipment and fleet condition, licensing status, and any pending liabilities or warranty obligations."
                }
              },
              {
                "@type": "Question",
                "name": "Is it better to buy a residential or commercial HVAC business?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Both can work well - residential tends to offer more recurring maintenance revenue, while commercial often means larger contract sizes. The right fit depends on your goals, experience, and available capital."
                }
              },
              {
                "@type": "Question",
                "name": "How long does it typically take to buy an HVAC business?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Timelines vary by financing and due diligence complexity, but most acquisitions move from serious interest to closing within a few months once financing is lined up."
                }
              },
              {
                "@type": "Question",
                "name": "Do you only work with buyers who already own HVAC experience?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "No - we work with first-time buyers, industry veterans, and companies looking to expand through acquisition. We match the guidance to your experience level."
                }
              }
            ]
          })
        }}
      />

      {/* Hero Section - Calm, conversion-focused */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-24 overflow-hidden bg-[#022B3A] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left relative z-10">
          <h1 className="max-w-4xl text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight tracking-tight">
            Buy a Florida HVAC Business Backed by the Right Guidance
          </h1>
          
          <p className="max-w-3xl text-xl text-white/90 leading-relaxed font-medium mb-10">
            Skip the guesswork. SunState HVAC Brokers connects serious buyers with <Link href="/listings" className="text-[#EE5B2C] hover:underline font-bold transition-colors">vetted, cash-flowing businesses</Link> across Florida - and walks you through every step from first look to closing table.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-4 mb-12">
            <Link 
              href="/listings" 
              className="w-full sm:w-auto px-8 py-4 bg-[#EE5B2C] hover:bg-orange-600 text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 text-center"
            >
              See Current Listings &rarr;
            </Link>
            <Link 
              href="/contact-us" 
              className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold rounded-lg transition-colors text-center"
            >
              Talk to a Broker
            </Link>
          </div>

          <div className="flex flex-wrap items-center gap-x-8 gap-y-4 text-sm font-bold text-white/80">
            {[
              "Florida-only focus",
              "Vetted, financially-verified listings",
              "Guidance through financing & due diligence"
            ].map((text, i) => (
              <div key={i} className="flex items-center">
                <svg className="w-5 h-5 text-[#EE5B2C] mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
                {text}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <BuyPageContent />

    </main>
  );
}
