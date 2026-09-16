import { Metadata } from "next";
import Image from "next/image";
import BuyPageContent from "@/views/components/BuyPageContent";
import BuyTopSummary from "@/views/components/BuyTopSummary";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Buy an HVAC Business in Florida",
  description: "Search for Florida HVAC and mechanical-service acquisitions with a confidential and financially qualified buyer process.",
  alternates: {
    canonical: "https://www.hvacexitadvisors.com/buy-an-hvac-business",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Buy an HVAC Business in Florida",
    description: "Search for Florida HVAC and mechanical-service acquisitions with a confidential and financially qualified buyer process.",
    images: [
      {
        url: "/buy-an-hvac-business.jpg",
        width: 1200,
        height: 630,
        alt: "Buy an HVAC Business in Florida",
      }
    ]
  }
};

import BreadcrumbSchema from '../../views/components/BreadcrumbSchema';

export default function BuyHvacBusinessPage() {
  const breadcrumbs = [{ name: 'Home', item: 'https://www.hvacexitadvisors.com/' }, { name: 'Buy an HVAC Business', item: 'https://www.hvacexitadvisors.com/buy-an-hvac-business' }];
  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
    <main className="min-h-screen flex flex-col bg-gray-50">
      
      {/* Schema Markup for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Buy a Florida HVAC Business With Confidence",
            "description": "Expert guide on how to acquire, value, and finance an HVAC business in Florida.",
            "datePublished": "2026-09-01T08:00:00+08:00",
            "dateModified": "2026-09-13T08:00:00+08:00",
            "author": {
              "@type": "Organization",
              "name": "HVAC Exit Advisors",
              "url": "https://www.hvacexitadvisors.com/"
            },
            "publisher": {
              "@type": "Organization",
              "name": "HVAC Exit Advisors",
              "logo": {
                "@type": "ImageObject",
                "url": "https://www.hvacexitadvisors.com/icon.png"
              }
            },
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://www.hvacexitadvisors.com/buy-an-hvac-business"
            }
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "HVAC Business Acquisition Brokerage",
            "provider": {
              "@type": "LocalBusiness",
              "name": "HVAC Exit Advisors",
        "image": "https://www.hvacexitadvisors.com/icon.png",
        "priceRange": "$$$$",
              "areaServed": {
                "@type": "State",
                "name": "Florida"
              },
              "telephone": "+1-954-864-9161",
              "url": "https://www.hvacexitadvisors.com/buy-an-hvac-business"
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
                "name": "What must I provide before receiving confidential HVAC business information?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "A buyer should sign the NDA and provide proof of funds. Financing-dependent buyers may also be asked for a lender letter or SBA prequalification before detailed financials, seller contact, or a private meeting is arranged."
                }
              },
              {
                "@type": "Question",
                "name": "Can I speak with employees or customers during due diligence?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "No, unless the seller gives prior written authorization. HVAC transactions are handled confidentially, and unauthorized contact can harm employee retention, customer relationships, and the transaction."
                }
              },
              {
                "@type": "Question",
                "name": "What should I verify during HVAC due diligence?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Review tax returns, financial statements, bank support, revenue by service type, maintenance-agreement records, customer concentration, payroll, technician credentials, licensing, fleet and equipment, leases, warranties, litigation, liens, working capital, and required future capital expenditures."
                }
              },
              {
                "@type": "Question",
                "name": "Is a letter of intent required to buy an HVAC business?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "HVAC Exit Advisors generally reserves letters of intent for transactions of $10 million or more or unusually complex deals. Smaller transactions normally proceed through a purchase contract supported by an escrow deposit and a defined due-diligence period."
                }
              }
            ]
          })
        }}
      />

      {/* Hero Section - Full Screen */}
      <section className="relative w-full h-[100dvh] overflow-hidden bg-gray-900 text-white flex items-center justify-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/buy-an-hvac-business.jpg"
            alt="Business meeting for HVAC acquisition"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/70" />
        </div>

        <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left mt-16 md:mt-0">
          <nav aria-label="Breadcrumb" className="text-sm font-semibold text-white/70 mb-6 flex items-center space-x-2">
            <Link href="/" className="hover:text-[#EE5B2C] transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white">Buy an HVAC Business</span>
          </nav>
          <h1 className="max-w-4xl text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight tracking-tight drop-shadow-xl">
            Acquire an HVAC Business That Fits Your Objectives
          </h1>
          
          <p className="max-w-3xl text-xl text-white/90 leading-relaxed font-medium mb-10 drop-shadow-md">
            Search for Florida HVAC and mechanical-service acquisitions with a confidential and financially qualified buyer process.
          </p>
          
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-start gap-4 mb-12">
            <Link 
              href="/listings" 
              className="w-full sm:w-auto px-8 py-4 bg-[#EE5B2C] hover:bg-orange-600 text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 text-center"
            >
              View Current Listings &rarr;
            </Link>
            <Link 
              href="/contact-us" 
              className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold rounded-lg transition-colors text-center"
            >
              Register as a Qualified Buyer
            </Link>
          </div>

          <div className="flex flex-wrap items-center gap-x-8 gap-y-4 text-sm font-bold text-white/80">
            {[
              "Florida-only focus",
              "Confidential & Qualified Buyer Process",
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
      <BuyTopSummary />
      <BuyPageContent />

    </main>
    </>
  );
}


