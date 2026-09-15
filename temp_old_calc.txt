import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import ValuationCalculator from '../../views/components/ValuationCalculator';
import BreadcrumbSchema from '../../views/components/BreadcrumbSchema';
import ContactForm from '../../views/components/ContactForm';

export const metadata: Metadata = {
  title: "Free HVAC Business Valuation Calculator | Florida",
  description: "Calculate your Florida HVAC business market value instantly with our free valuation calculator. Analyze SDE, maintenance contracts, and multiples.",
  alternates: {
    canonical: "https://www.hvacexitadvisors.com/hvac-business-valuation-calculator"
  },
  openGraph: {
    title: "Free Florida HVAC Business Valuation Calculator",
    description: "Calculate your Florida HVAC business market value instantly with our free valuation calculator. Analyze SDE, maintenance contracts, and multiples.",
    url: "https://www.hvacexitadvisors.com/hvac-business-valuation-calculator",
    images: [{ url: "/florida-hvac-business-valuation.jpg", width: 1200, height: 630, alt: "Florida HVAC Business Valuation" }]
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
      "price": 0,
      "priceCurrency": "USD"
    },
    "description": "Interactive valuation calculator for Florida heating and air conditioning contractors based on SDE, EBITDA, and recurring service agreement multiples."
  };

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Free Florida HVAC Business Valuation Calculator",
    "description": "Interactive valuation calculator for Florida heating and air conditioning contractors based on SDE, EBITDA, and recurring service agreement multiples.",
    "url": "https://www.hvacexitadvisors.com/hvac-business-valuation-calculator",
    "datePublished": "2026-09-01T08:00:00+00:00",
    "dateModified": new Date().toISOString(),
    "publisher": {
      "@type": "Organization",
      "name": "HVAC Exit Advisors",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.hvacexitadvisors.com/icon.png"
      }
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is an HVAC business valuation?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "An HVAC business valuation is a financial assessment that determines the fair market value of a heating and air conditioning company. It relies heavily on Seller's Discretionary Earnings (SDE), EBITDA, and the strength of active maintenance agreements."
        }
      },
      {
        "@type": "Question",
        "name": "How do you calculate HVAC business value?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most small to mid-sized HVAC businesses are valued using a multiple of Seller's Discretionary Earnings (SDE). The multiple usually ranges from 2x to 4x SDE depending on revenue mix, technician retention, and recurring contracts."
        }
      }
    ]
  };

  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: `[${JSON.stringify(appSchema)},${JSON.stringify(webPageSchema)},${JSON.stringify(faqSchema)}]` }}
      />
      <main className="min-h-screen flex flex-col bg-[#F7F5F0]">
        
        {/* Hero Section */}
        <section className="relative w-full h-[100dvh] overflow-hidden bg-gray-900 text-white flex items-center justify-center">
          <div className="absolute inset-0 z-0">
            <img src="/florida-hvac-business-valuation.jpg" alt="Florida HVAC Business Valuation and market multiples" className="w-full h-full object-cover object-center" />
            <div className="absolute inset-0 bg-black/60" />
          </div>

          <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left mt-16 md:mt-0">
            <nav aria-label="Breadcrumb" className="text-sm font-semibold text-white/70 mb-6 flex items-center space-x-2">
              <Link href="/" className="hover:text-[#EE5B2C] transition-colors">Home</Link>
              <span>/</span>
              <span className="text-white">Valuation Calculator</span>
            </nav>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight tracking-tight drop-shadow-xl">
              Free Florida HVAC Business Valuation Calculator
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

        {/* Executive Summary & AEO Box */}
        <section className="w-full bg-white py-12 border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-[#022B3A]/5 border border-[#022B3A]/10 p-8 rounded-2xl">
              <div className="flex flex-wrap items-center justify-between border-b border-gray-200 pb-4 mb-4">
                <h2 className="text-2xl font-black text-[#022B3A]">Executive Summary: Florida HVAC Business Valuation</h2>
                <span className="text-sm font-bold text-gray-500 bg-white px-3 py-1 rounded-full border border-gray-200">Last Updated: Sept 2026</span>
              </div>
              
              <p className="text-gray-700 font-medium leading-relaxed mb-6">
                <strong>Key Takeaway:</strong> Our free online tool helps you estimate the market value of your mechanical contracting firm based on industry-standard multiples. <strong>Definition:</strong> An HVAC business valuation is a financial calculation used by M&A advisors to determine the fair market asking price of a heating and cooling company.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-bold text-[#EE5B2C] mb-2 text-sm uppercase tracking-wider">Target Audience & Use Case</h3>
                  <ul className="space-y-2 text-sm font-medium text-gray-700">
                    <li>? <strong>Audience:</strong> Florida HVAC business owners considering an exit.</li>
                    <li>? <strong>Use Case:</strong> Estimating an initial asking price range before formal brokerage.</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-[#EE5B2C] mb-2 text-sm uppercase tracking-wider">Next Step</h3>
                  <p className="text-sm font-medium text-gray-700">
                    Use the calculator below for a rough estimate, then <Link href="/free-valuation" className="text-[#EE5B2C] hover:underline">request a free professional valuation</Link> for an accurate, confidential analysis.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Calculator Interactive Section with Side Form */}
        <div className="flex-grow w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid lg:grid-cols-12 gap-8 md:gap-12 lg:gap-16">
            
            {/* Main Column: Calculator */}
            <div className="lg:col-span-8">
              <ValuationCalculator />
              
              {/* Educational Content Below Calculator */}
              <div className="mt-16 prose prose-lg max-w-none text-gray-700">
                <h2 className="text-3xl font-black text-[#022B3A] mb-6">How to Calculate Your Florida HVAC Business Value</h2>
                <p>
                  Calculating the value of an HVAC business isn't just about punching numbers into a spreadsheet. While generalist brokers often rely on basic revenue multiples, specialized M&A advisors use advanced metrics endorsed by the <a href="https://www.ibba.org/" target="_blank" rel="noopener noreferrer" className="text-[#EE5B2C] hover:underline">International Business Brokers Association (IBBA)</a>. Here are the core factors:
                </p>
                <ul className="list-disc pl-6 mb-8 space-y-2">
                  <li><strong>Seller's Discretionary Earnings (SDE):</strong> The true cash flow generated for a single owner-operator after adding back personal expenses and one-time costs.</li>
                  <li><strong>Revenue Mix:</strong> High-margin residential service and replacement work commands a higher multiple than low-margin commercial new construction.</li>
                  <li><strong>Preventative Maintenance Agreements (PMAs):</strong> Buyers pay a premium for recurring revenue and locked-in customer bases.</li>
                </ul>

                <h2 className="text-3xl font-black text-[#022B3A] mb-6 mt-12">Online Calculator vs. Professional HVAC Broker</h2>
                <div className="overflow-x-auto bg-white rounded-2xl shadow-sm border border-gray-100 p-2 mb-12">
                  <table className="w-full text-left border-collapse min-w-[500px] not-prose">
                    <thead>
                      <tr>
                        <th className="p-4 font-bold text-gray-900 border-b-2 border-gray-100 text-lg">Feature</th>
                        <th className="p-4 font-black text-[#022B3A] bg-orange-50/50 border-b-2 border-orange-100 text-lg rounded-tl-xl">Professional Valuation</th>
                        <th className="p-4 font-bold text-gray-500 border-b-2 border-gray-100 text-lg">Online Calculator</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      <tr>
                        <td className="p-4 font-medium text-gray-700">Accuracy</td>
                        <td className="p-4 font-bold text-[#EE5B2C] bg-orange-50/30">Highly accurate based on deep financial recasting</td>
                        <td className="p-4 text-gray-500">Directional estimate only</td>
                      </tr>
                      <tr>
                        <td className="p-4 font-medium text-gray-700">Market Nuance</td>
                        <td className="p-4 font-bold text-[#EE5B2C] bg-orange-50/30">Accounts for current Florida buyer demand</td>
                        <td className="p-4 text-gray-500">Uses static, historical multiples</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h2 className="text-3xl font-black text-[#022B3A] mb-6">Frequently Asked Questions About HVAC Valuations</h2>
                
                <h3 className="text-xl font-bold text-[#022B3A] mb-2 mt-6">What is an HVAC business valuation?</h3>
                <p className="mb-6">
                  It is a formal assessment of a company's market worth based on its cash flow, assets, and operational risks.<br/>
                  A true valuation examines every aspect of your business, from your technician retention rates to your inventory and fleet condition, to determine what a willing buyer would pay.
                </p>

                <h3 className="text-xl font-bold text-[#022B3A] mb-2 mt-6">How do you calculate HVAC business value?</h3>
                <p className="mb-6">
                  By multiplying your SDE or EBITDA by an industry-specific market multiple (typically 2x to 4x SDE).<br/>
                  To get an exact figure, brokers perform financial recasting to find the true normalized earnings, then apply a multiple dictated by current market conditions. For a deeper dive, read our guide on <Link href="/resources/hvac-business-in-florida" className="text-[#EE5B2C] hover:underline">HVAC businesses in Florida</Link>.
                </p>
              </div>

              {/* Disclaimer */}
              <div className="mt-12 text-xs text-gray-500 border-t border-gray-200 pt-8 text-center max-w-4xl mx-auto leading-relaxed">
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
                <ContactForm buttonText="Request Free Consultation" />
              </div>
            </div>

          </div>
        </div>
      </main>
    </>
  );
}

