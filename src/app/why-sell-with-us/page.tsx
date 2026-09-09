import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Colonnade from '../../views/components/Colonnade';
import { differentiators } from '../../data/differentiators';
import BreadcrumbSchema from '../../views/components/BreadcrumbSchema';

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
              Why <span className="text-[#EE5B2C]">Sell With Us?</span>
            </h1>
            
            <p className="max-w-3xl text-xl md:text-2xl text-white/90 leading-relaxed font-medium mb-10 drop-shadow-md">
              We don't juggle unrelated industries. HVAC Exit Advisors is built specifically for Florida heating and cooling owners who want to maximize their exit value with zero disruptions to their daily operations.
            </p>
            
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-start gap-4 mb-12">
              <Link 
                href="/free-valuation" 
                className="w-full sm:w-auto px-8 py-4 bg-[#EE5B2C] hover:bg-orange-600 text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 text-center"
              >
                Get My Free Valuation &rarr;
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
        <div className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          <h2 className="text-3xl font-black text-[#022B3A] mb-12 text-center">The HVAC Brokerage Advantage</h2>
          
          <Colonnade items={differentiators} />
        </div>

        {/* Contact Us Form Section */}
        <section className="w-full bg-white py-24 border-t border-gray-100">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-black text-[#022B3A] mb-4">Ready to Discuss Your Exit?</h2>
              <p className="text-lg text-gray-600 font-medium">Contact us today for a completely confidential, no-obligation conversation.</p>
            </div>
            
            <div className="bg-gray-50 rounded-[2rem] shadow-xl shadow-gray-200/50 border border-gray-100 p-8 md:p-12">
              <form className="flex flex-col space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="why-first-name" className="block text-sm font-bold text-[#022B3A] mb-2">First Name *</label>
                    <input id="why-first-name" type="text" required className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#EE5B2C] focus:border-transparent outline-none transition-all" placeholder="John" />
                  </div>
                  <div>
                    <label htmlFor="why-last-name" className="block text-sm font-bold text-[#022B3A] mb-2">Last Name *</label>
                    <input id="why-last-name" type="text" required className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#EE5B2C] focus:border-transparent outline-none transition-all" placeholder="Doe" />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="why-email" className="block text-sm font-bold text-[#022B3A] mb-2">Email Address *</label>
                    <input id="why-email" type="email" required className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#EE5B2C] focus:border-transparent outline-none transition-all" placeholder="john@example.com" />
                  </div>
                  <div>
                    <label htmlFor="why-phone" className="block text-sm font-bold text-[#022B3A] mb-2">Phone Number *</label>
                    <input id="why-phone" type="tel" required className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#EE5B2C] focus:border-transparent outline-none transition-all" placeholder="(555) 123-4567" />
                  </div>
                </div>

                <div>
                  <label htmlFor="why-company" className="block text-sm font-bold text-[#022B3A] mb-2">Company Name (Optional)</label>
                  <input id="why-company" type="text" className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#EE5B2C] focus:border-transparent outline-none transition-all" placeholder="Your HVAC Business" />
                </div>

                <div>
                  <label htmlFor="why-message" className="block text-sm font-bold text-[#022B3A] mb-2">How can we help?</label>
                  <textarea id="why-message" rows={5} className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#EE5B2C] focus:border-transparent outline-none transition-all resize-none" placeholder="Tell us a little bit about your timeline or goals..."></textarea>
                </div>

                <button type="submit" className="w-full bg-[#EE5B2C] hover:bg-orange-600 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 text-lg mt-4">
                  Submit Confidential Inquiry
                </button>
                
                <p className="text-sm text-gray-500 text-center mt-4">
                  <span className="inline-block text-[#EE5B2C] mr-1">🔒</span> 100% Confidential. Your information is never shared.
                </p>
              </form>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
