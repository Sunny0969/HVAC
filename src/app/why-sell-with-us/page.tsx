import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import BreadcrumbSchema from '../../views/components/BreadcrumbSchema';
import ContactForm from '../../views/components/ContactForm';
import WhySellFaq from '../../views/components/WhySellFaq';

export const metadata: Metadata = {
  title: 'Why Choose the Best Florida HVAC Business Broker',
  description: 'Discover why HVAC Exit Advisors is the premier choice for selling your Florida HVAC business. Get unmatched confidentiality and maximum value. Learn more!',
  alternates: {
    canonical: 'https://www.hvacexitadvisors.com/why-sell-with-us',
  },
  openGraph: {
    title: 'Why Choose the Best Florida HVAC Business Broker | HVAC Exit Advisors',
    description: 'Discover why HVAC Exit Advisors is the premier choice for selling your Florida HVAC business. Get unmatched confidentiality and maximum value.',
    url: 'https://www.hvacexitadvisors.com/why-sell-with-us',
  },
};

export default function WhySellWithUsPage() {
  const breadcrumbs = [
    { name: 'Home', item: 'https://www.hvacexitadvisors.com/' },
    { name: 'Why Sell With Us', item: 'https://www.hvacexitadvisors.com/why-sell-with-us' }
  ];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "HVAC Brokerage & Exit Advisory Services",
    "serviceType": "HVAC Business Mergers and Acquisitions",
    "description": "Confidential advisory, valuation, and M&A brokerage services designed exclusively for Florida HVAC and mechanical contracting company owners.",
    "provider": {
      "@type": "LocalBusiness",
      "name": "HVAC Exit Advisors",
        "image": "https://www.hvacexitadvisors.com/icon.png",
        "priceRange": "$$$$",
      "telephone": "+1-954-864-9161",
      "url": "https://www.hvacexitadvisors.com/why-sell-with-us"
    },
    "areaServed": {
      "@type": "State",
      "name": "Florida"
    }
  };

  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <main className="min-h-screen flex flex-col bg-gray-50">
        
        {/* Hero Section */}
        <section className="relative w-full h-[100dvh] overflow-hidden bg-gray-900 text-white flex items-center justify-center">
          <div className="absolute inset-0 z-0">
            <Image
              src="/why-sell-with-us.jpg"
              alt="Commercial HVAC units on a rooftop in Florida"
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-black/70" />
          </div>

          <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left mt-16 md:mt-0">
            <nav aria-label="Breadcrumb" className="text-sm font-semibold text-white/70 mb-6 flex items-center space-x-2">
              <Link href="/" className="hover:text-[#EE5B2C] transition-colors">Home</Link>
              <span>/</span>
              <span className="text-white">Why Sell With Us</span>
            </nav>

            <h1 className="max-w-4xl text-4xl md:text-5xl lg:text-7xl font-black mb-6 leading-tight tracking-tight drop-shadow-xl">
              Focused Guidance for HVAC Business{' '}
              <span className="text-[#EE5B2C]">Owners and Buyers</span>
            </h1>
            
            <p className="max-w-3xl text-xl md:text-2xl text-white/90 leading-relaxed font-medium mb-10 drop-shadow-md">
              HVAC Exit Advisors provides confidential brokerage and transaction guidance to owners and qualified buyers of HVAC, refrigeration, plumbing, electrical and mechanical-service companies.
            </p>
            
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-start gap-4 mb-12">
              <Link 
                href="/free-confidential-valuation" 
                className="w-full sm:w-auto px-8 py-4 bg-[#EE5B2C] hover:bg-orange-600 text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 text-center"
              >Request a Confidential Valuation</Link>
              <Link 
                href="/contact-us" 
                className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold rounded-lg transition-colors text-center"
              >
                Talk to a Broker
              </Link>
            </div>

            <div className="flex flex-wrap items-center gap-x-8 gap-y-4 text-sm font-bold text-white/80">
              {[
                "HVAC only",
                "Florida-wide reach",
                "Financially-verified buyers",
                "No fee until you close"
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

        {/* Main Content */}
        <div className="flex-grow max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">

          {/* Card 1: HVAC Transaction Knowledge */}
          <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-xl shadow-gray-200/50 border border-gray-100 mb-10">
            <div className="flex items-start gap-5 mb-5">
              <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-[#022B3A]/10 flex items-center justify-center">
                <svg className="w-6 h-6 text-[#022B3A]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>
              </div>
              <h2 className="text-2xl md:text-3xl font-black text-[#022B3A] leading-tight">HVAC Transaction Knowledge</h2>
            </div>
            <p className="text-lg text-gray-700 font-medium leading-relaxed">
              HVAC companies have operating characteristics that general business descriptions often miss. Maintenance agreements, service-versus-installation revenue, technician retention, dispatch operations, fleet condition, licensing and seasonal working capital can all affect buyer interest and transaction structure.
            </p>
          </div>

          {/* Card 2: Confidentiality */}
          <div className="bg-[#022B3A] rounded-[2rem] p-8 md:p-12 shadow-xl text-white mb-10">
            <div className="flex items-start gap-5 mb-5">
              <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center">
                <svg className="w-6 h-6 text-[#EE5B2C]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
              </div>
              <h2 className="text-2xl md:text-3xl font-black text-white leading-tight">Confidentiality</h2>
            </div>
            <p className="text-lg text-white/85 font-medium leading-relaxed">
              We control the release of identifying and financial information and require appropriate confidentiality and qualification steps before introducing a prospective buyer to the seller.
            </p>
          </div>

          {/* Card 3: Established Buyer Reach */}
          <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-xl shadow-gray-200/50 border border-gray-100 mb-10">
            <div className="flex items-start gap-5 mb-5">
              <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-[#EE5B2C]/10 flex items-center justify-center">
                <svg className="w-6 h-6 text-[#EE5B2C]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              </div>
              <h2 className="text-2xl md:text-3xl font-black text-[#022B3A] leading-tight">Established Buyer Reach</h2>
            </div>
            <p className="text-lg text-gray-700 font-medium leading-relaxed">
              Through KMF Business Advisors, we maintain an established database of more than 12,000 buyer and investor contacts. Each opportunity still requires targeted outreach and individual buyer qualification; database size does not guarantee a sale.
            </p>
          </div>

          {/* Card 4: Direct Transaction Support */}
          <div className="bg-gray-50 rounded-[2rem] p-8 md:p-12 shadow-md border border-gray-100 mb-10">
            <div className="flex items-start gap-5 mb-5">
              <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-[#022B3A]/10 flex items-center justify-center">
                <svg className="w-6 h-6 text-[#022B3A]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" /></svg>
              </div>
              <h2 className="text-2xl md:text-3xl font-black text-[#022B3A] leading-tight">Direct Transaction Support</h2>
            </div>
            <p className="text-lg text-gray-700 font-medium leading-relaxed">
              We assist with preparation, marketing, buyer screening, negotiations, contract coordination, due diligence and closing communication. Legal, tax, lending, appraisal and licensing matters remain with the appropriate qualified professionals.
            </p>
          </div>

          {/* Offer Analysis */}
          <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-xl shadow-gray-200/50 border border-gray-100 mb-12">
            <div className="flex items-start gap-5 mb-5">
              <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-[#022B3A]/10 flex items-center justify-center">
                <svg className="w-6 h-6 text-[#022B3A]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
              </div>
              <h2 className="text-2xl md:text-3xl font-black text-[#022B3A] leading-tight">Offer Analysis</h2>
            </div>
            <p className="text-lg text-gray-700 font-medium leading-relaxed">
              We help owners compare the complete offer, including cash at closing, financing, contingencies, seller notes, earnouts, working capital, real estate, transition requirements and closing risk.
            </p>
          </div>

          {/* FAQs */}
          <WhySellFaq />

          {/* CTA Button */}
          <div className="text-center">
            <Link
              href="/contact-us"
              className="inline-block px-10 py-5 bg-[#EE5B2C] hover:bg-orange-600 text-white font-bold text-lg rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5"
            >
              Speak With an HVAC Business Advisor
            </Link>
          </div>

        </div>

        {/* Contact Us Form Section */}
        <section className="w-full bg-white py-24 border-t border-gray-100">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-black text-[#022B3A] mb-4">Ready to Discuss Your Exit?</h2>
              <p className="text-lg text-gray-600 font-medium">Contact us today for a completely confidential, no-obligation conversation.</p>
            </div>
            
            <div className="bg-gray-50 rounded-[2rem] shadow-xl shadow-gray-200/50 border border-gray-100 p-8 md:p-12">
              <ContactForm buttonText="Submit Confidential Inquiry" />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}


