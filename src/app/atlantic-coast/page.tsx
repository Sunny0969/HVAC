import { Metadata } from 'next';
import Link from 'next/link';
import ContactForm from '../../views/components/ContactForm';

export const metadata: Metadata = {
  title: { absolute: "Atlantic Coast HVAC Business Guide: Buy & Sell (2026)" },
  description: "Market report and valuation guide for HVAC businesses along Florida's Atlantic Coast, from Jacksonville to Port St. Lucie.",
  alternates: {
    canonical: "https://www.hvacexitadvisors.com/atlantic-coast"
  },
};

export default function atlanticcoastPage() {
  const schemaOrg = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://www.hvacexitadvisors.com/atlantic-coast",
        "name": "Atlantic Coast HVAC Business Guide: Buy & Sell (2026)",
        "description": "Market report and valuation guide for HVAC businesses along Florida's Atlantic Coast, from Jacksonville to Port St. Lucie.",
        "url": "https://www.hvacexitadvisors.com/atlantic-coast",
        "breadcrumb": { "@id": "https://www.hvacexitadvisors.com/atlantic-coast#breadcrumb" }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.hvacexitadvisors.com/atlantic-coast#breadcrumb",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.hvacexitadvisors.com/" },
          { "@type": "ListItem", "position": 2, "name": "Atlantic Coast", "item": "https://www.hvacexitadvisors.com/atlantic-coast" }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How much does an HVAC business sell for in Atlantic Coast?",
            "acceptedAnswer": { "@type": "Answer", "text": "Most HVAC businesses in Atlantic Coast sell for 2.5x to 4.0x SDE. Companies with heavy commercial mix or deep maintenance agreements command higher multiples." }
          }
        ]
      }
    ]
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }} />
      <main className="min-h-screen bg-gray-50 flex flex-col ">
        <section className="relative w-full bg-[#022B3A] pt-36 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="max-w-4xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-6 leading-tight drop-shadow-xl">
              Atlantic Coast HVAC Business Guide: Buy, Sell, and Value a Company (2026)
            </h1>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-2xl mb-8 text-left inline-block">
              <span className="text-sm font-bold text-gray-300 uppercase tracking-wider mb-2 block">Quick Summary (Updated: Sept 2026)</span>
              <p className="text-lg text-white font-medium leading-relaxed">
                Whether you want to buy or sell a Atlantic Coast HVAC business, valuations currently average 2.5x to 4.0x SDE. This market is uniquely driven by space coast aerospace demand, logistics, steady residential. Use this guide to understand regional multiples and evaluate local acquisitions.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-start justify-start gap-4 mt-4">
              <a href="#contact" className="px-8 py-4 bg-[#EE5B2C] hover:bg-orange-600 text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition-all w-full sm:w-auto">
                Get a Confidential Valuation
              </a>
              <a href="https://wa.me/19548649161" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-[#25D366] hover:bg-[#128C7E] text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition-all w-full sm:w-auto flex items-center justify-center">
                Chat on WhatsApp
              </a>
            </div>
          </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-7 space-y-16">
            <div>
              <h2 className="text-3xl font-black text-[#022B3A] mb-4 border-b border-gray-200 pb-2">Atlantic Coast HVAC Market Dynamics</h2>
              <h3 className="text-xl font-bold text-[#022B3A] mt-8 mb-2">Space Coast Growth and Logistics Infrastructure</h3>
              <p className="text-gray-700 mb-4">The Space Coast and Atlantic corridor are seeing a boom in aerospace, defense, and logistics infrastructure, driving heavy demand for commercial mechanical services and industrial chillers.</p>
              <h3 className="text-xl font-bold text-[#022B3A] mt-8 mb-2">Consistent Coastal Residential Growth</h3>
              <p className="text-gray-700 mb-4">Steady demographic shifts and local economic drivers create sustained demand for high-quality residential and commercial mechanical services in Atlantic Coast.</p>
              <h3 className="text-xl font-bold text-[#022B3A] mt-8 mb-2">Counties We Cover: Duval, Brevard, and St. Lucie</h3>
              <p className="text-gray-700 mb-4">Our brokerage team actively manages buyer networks and listings across these key counties, ensuring local expertise.</p>
            </div>
            
            <div>
              <h2 className="text-3xl font-black text-[#022B3A] mb-4 border-b border-gray-200 pb-2">How Much Is an Atlantic Coast HVAC Business Worth?</h2>
              <h3 className="text-xl font-bold text-[#022B3A] mt-8 mb-2">Valuation Multiples from Jacksonville to Melbourne</h3>
              <p className="text-gray-700 mb-4">Smaller owner-operated firms typically sell for 2.5x to 3.5x SDE. Larger firms with over $1 million in EBITDA can fetch multiples of 4x to 6x+ EBITDA.</p>
              <h3 className="text-xl font-bold text-[#022B3A] mt-8 mb-2">What Drives Value (Industrial Contracts, Space Coast Proximity)</h3>
              <p className="text-gray-700 mb-4">Focusing on high-margin replacements, deep commercial maintenance contracts, and excellent technician retention drastically improves your final exit multiple.</p>
              <h3 className="text-xl font-bold text-[#022B3A] mt-8 mb-4">Sample Valuation Range</h3>
              <div className="overflow-x-auto bg-white rounded-xl shadow-sm border border-gray-200">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="p-4 border-b font-bold text-[#022B3A]">Business Size (SDE)</th>
                      <th className="p-4 border-b font-bold text-[#022B3A]">Typical Multiple</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td className="p-4 border-b text-gray-700">$250,000 SDE</td><td className="p-4 border-b text-gray-700">2.5x - 3.0x</td></tr>
                    <tr><td className="p-4 border-b text-gray-700">$500,000 SDE</td><td className="p-4 border-b text-gray-700">3.0x - 4.0x</td></tr>
                    <tr><td className="p-4 border-b text-gray-700">$1M+ EBITDA</td><td className="p-4 border-b text-gray-700">4.5x - 6.0x+</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl font-black text-[#022B3A] mb-4 border-b border-gray-200 pb-2">Cities We Serve in Atlantic Coast</h2>
              <p className="text-lg text-gray-700 font-medium mb-8">Explore our dedicated city guides for localized HVAC market insights:</p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {["Jacksonville","St. Augustine","Daytona Beach","Palm Bay","Melbourne","Port St. Lucie","Fort Pierce"].map(city => {
                  const slug = city.toLowerCase().replace(/\s+/g, '-');
                  return (
                    <Link key={city} href={`/florida/${slug}`} className="bg-white border border-gray-200 rounded-lg p-4 text-center hover:border-[#EE5B2C] hover:shadow-md transition-all group">
                      <span className="font-bold text-[#022B3A] group-hover:text-[#EE5B2C] block">HVAC Business in {city}</span>
                    </Link>
                  );
                })}
              </div>
            </div>
            
          </div>
          <div className="lg:col-span-5 mt-12 lg:mt-0" id="contact">
            <div className="sticky top-32 bg-white rounded-[2rem] shadow-xl shadow-gray-200/50 border border-gray-100 p-8">
              <h3 className="text-2xl font-black text-[#022B3A] mb-3">Atlantic Coast Consultation</h3>
              <p className="text-gray-600 mb-6 font-medium leading-relaxed">Connect with our local advisors for a confidential valuation.</p>
              <div className="max-h-[500px] overflow-y-auto custom-scrollbar pr-4 w-full"><ContactForm buttonText="Request Confidential Consultation" /></div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
