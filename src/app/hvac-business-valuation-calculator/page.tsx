import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import ValuationCalculator from '../../views/components/ValuationCalculator';
import BreadcrumbSchema from '../../views/components/BreadcrumbSchema';

export const metadata: Metadata = {
  title: "Free HVAC Business Valuation Calculator | Florida",
  description: "Calculate your Florida HVAC business market value instantly with our free valuation calculator. Analyze SDE, maintenance contracts, and multiples. Try it now!",
  alternates: {
    canonical: "https://www.hvacexitadvisors.com/hvac-business-valuation-calculator"
  },
  openGraph: {
    title: "Free HVAC Business Valuation Calculator | Florida | HVAC Exit Advisors",
    description: "Calculate your Florida HVAC business market value instantly with our free valuation calculator. Analyze SDE, maintenance contracts, and multiples.",
    url: "https://www.hvacexitadvisors.com/hvac-business-valuation-calculator",
  }
};

export default function ValuationCalculatorPage() {
  const breadcrumbs = [
    { name: 'Home', item: 'https://www.hvacexitadvisors.com/' },
    { name: 'Valuation Calculator', item: 'https://www.hvacexitadvisors.com/hvac-business-valuation-calculator' }
  ];

  const appSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Florida HVAC Business Valuation Calculator",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "All",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "description": "Interactive valuation calculator for Florida heating and air conditioning contractors based on SDE, EBITDA, and recurring service agreement multiples."
  };

  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(appSchema) }}
      />
      <main className="min-h-screen flex flex-col bg-[#F7F5F0]">
        
        {/* Hero Section */}
        <section className="relative w-full h-[100dvh] overflow-hidden bg-gray-900 text-white flex items-center justify-center">
          <div className="absolute inset-0 z-0">
            <Image
              src="/florida-hvac-business-valuation.jpg"
              alt="Florida HVAC Business Valuation and market multiples"
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-black/60" />
          </div>

          <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left mt-16 md:mt-0">
            <nav aria-label="Breadcrumb" className="text-sm font-semibold text-white/70 mb-6 flex items-center space-x-2">
              <Link href="/" className="hover:text-[#EE5B2C] transition-colors">Home</Link>
              <span>/</span>
              <span className="text-white">Valuation Calculator</span>
            </nav>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight tracking-tight drop-shadow-xl">
              What's Your Florida <br className="hidden sm:block" />
              <span className="text-[#EE5B2C]">HVAC Business</span> Worth?
            </h1>
            
            <p className="text-xl text-white/90 leading-relaxed font-medium mb-6 max-w-3xl">
              Answer a few questions about your financials and how your business runs - get an instant estimate, right in your browser.
            </p>
            <div className="inline-block bg-white/10 px-4 py-2 rounded-lg border border-white/20">
              <p className="text-sm text-white font-bold flex items-center">
                <svg className="w-4 h-4 mr-2 text-[#EE5B2C]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                100% Private. Nothing is sent anywhere or saved unless you choose to save your report.
              </p>
            </div>
          </div>
        </section>

        {/* Calculator Interactive Section with Side Form */}
        <div className="flex-grow w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
          <div className="grid lg:grid-cols-12 gap-8 md:gap-12 lg:gap-16">
            
            {/* Main Column: Calculator */}
            <div className="lg:col-span-8">
              <div className="mb-8">
                <h2 className="text-3xl font-black text-[#022B3A]">HVAC Valuation Calculator</h2>
                <p className="text-gray-600 font-medium mt-2">Enter your financial and operational details below to generate a real-time market estimate.</p>
              </div>

              <ValuationCalculator />
              
              {/* Disclaimer */}
              <div className="mt-16 text-xs text-gray-500 border-t border-gray-200 pt-8 text-center max-w-4xl mx-auto leading-relaxed">
                <strong>Disclaimer:</strong> This calculator provides a directional, educational estimate only, based on the figures and answers you provide and general market assumptions for the HVAC service industry. It is not a formal business valuation, appraisal, or opinion of value, and should not be relied on for financial, tax, lending, or transaction decisions. Actual business value depends on a full review of your financial statements, industry conditions, buyer demand, and deal-specific factors. For a comprehensive valuation, contact us for a free consultation with a broker.
              </div>
            </div>
            
            {/* Right Sticky Form Column */}
            <div className="lg:col-span-4">
              <div className="sticky top-32 bg-white rounded-[2rem] shadow-xl shadow-gray-200/50 border border-gray-100 p-8 max-h-[calc(100vh-10rem)] overflow-y-auto">
                <h3 className="text-2xl font-black text-[#022B3A] mb-3">Get a Professional Valuation</h3>
                <p className="text-gray-600 mb-6 font-medium leading-relaxed">
                  Want a more detailed, customized analysis? Speak with an HVAC exit advisor today.
                </p>
                <form className="flex flex-col space-y-4">
                  <div>
                    <label htmlFor="calc-name" className="block text-sm font-bold text-[#022B3A] mb-1">Full Name *</label>
                    <input id="calc-name" type="text" required className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#EE5B2C] focus:border-transparent outline-none transition-all" placeholder="John Doe" />
                  </div>
                  <div>
                    <label htmlFor="calc-email" className="block text-sm font-bold text-[#022B3A] mb-1">Email Address *</label>
                    <input id="calc-email" type="email" required className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#EE5B2C] focus:border-transparent outline-none transition-all" placeholder="john@example.com" />
                  </div>
                  <div>
                    <label htmlFor="calc-phone" className="block text-sm font-bold text-[#022B3A] mb-1">Phone Number *</label>
                    <input id="calc-phone" type="tel" required className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#EE5B2C] focus:border-transparent outline-none transition-all" placeholder="(555) 123-4567" />
                  </div>
                  <div>
                    <label htmlFor="calc-company" className="block text-sm font-bold text-[#022B3A] mb-1">Company Name</label>
                    <input id="calc-company" type="text" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#EE5B2C] focus:border-transparent outline-none transition-all" placeholder="Optional" />
                  </div>
                  <div>
                    <label htmlFor="calc-message" className="block text-sm font-bold text-[#022B3A] mb-1">How can we help?</label>
                    <textarea id="calc-message" rows={4} className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#EE5B2C] focus:border-transparent outline-none transition-all resize-none" placeholder="E.g., I'm thinking of selling in the next 12-24 months..."></textarea>
                  </div>
                  <button type="submit" className="w-full bg-[#EE5B2C] hover:bg-orange-600 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 mt-2">
                    Request Free Consultation
                  </button>
                  <p className="text-xs text-gray-400 text-center mt-4">100% Confidential. No obligations.</p>
                </form>
              </div>
            </div>

          </div>
        </div>
      </main>
    </>
  );
}
