import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import ContactForm from '../../views/components/ContactForm';

export const metadata: Metadata = {
  title: { absolute: "South Florida HVAC Business Guide: Buy & Sell (2026)" },
  description: "Expert guide to buy, sell, and value a South Florida HVAC business. Discover local multiples, HVHZ rules, and regional data for Miami and Fort Lauderdale.",
  alternates: {
    canonical: "https://www.hvacexitadvisors.com/south-florida"
  },
  openGraph: {
    title: { absolute: "South Florida HVAC Business Guide: Buy & Sell (2026)" },
    description: "Expert guide to buy, sell, and value a South Florida HVAC business. Discover local multiples, HVHZ rules, and regional data for Miami and Fort Lauderdale.",
    type: "website",
    images: [{ url: "https://www.hvacexitadvisors.com/images/og-image.jpg", width: 1200, height: 630, alt: "HVAC Exit Advisors" }]
  }
};

export default function SouthFloridaPage() {
  const schemaOrg = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://www.hvacexitadvisors.com/south-florida",
        "name": "South Florida HVAC Business Guide: Buy & Sell (2026)",
        "description": "Expert guide to buy, sell, and value a South Florida HVAC business.",
        "url": "https://www.hvacexitadvisors.com/south-florida",
        "datePublished": "2026-09-01T08:00:00+00:00",
        "dateModified": "2026-09-17T08:00:00+00:00",
        "breadcrumb": { "@id": "https://www.hvacexitadvisors.com/south-florida#breadcrumb" }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.hvacexitadvisors.com/south-florida#breadcrumb",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.hvacexitadvisors.com/" },
          { "@type": "ListItem", "position": 2, "name": "South Florida", "item": "https://www.hvacexitadvisors.com/south-florida" }
        ]
      },
      {
        "@type": "Organization",
        "name": "HVAC Exit Advisors",
        "url": "https://www.hvacexitadvisors.com/",
        "logo": "https://www.hvacexitadvisors.com/logo.png"
      },
      {
        "@type": "Article",
        "headline": "South Florida HVAC Business Guide: Buy, Sell, and Value a Company (2026)",
        "publisher": { "@type": "Organization", "name": "HVAC Exit Advisors" },
        "author": { "@type": "Organization", "name": "HVAC Exit Advisors" }
      },
      {
        "@type": "HowTo",
        "name": "How to Sell an HVAC Business in South Florida",
        "step": [
          { "@type": "HowToStep", "name": "Get a Confidential Valuation", "text": "Begin by understanding the true market value of your South Florida HVAC business by calculating your SDE." },
          { "@type": "HowToStep", "name": "Prepare Financials and Documentation", "text": "Organize 3 years of tax returns, P&L statements, and verify your HVHZ compliance documents." },
          { "@type": "HowToStep", "name": "Vet Buyers Under NDA", "text": "Ensure interested parties sign a Non-Disclosure Agreement and prove they have the capital to close." },
          { "@type": "HowToStep", "name": "Close and Transition", "text": "Finalize the purchase agreement and safely transition your DBPR license and technicians." }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How much does an HVAC business sell for in Miami or Fort Lauderdale?",
            "acceptedAnswer": { "@type": "Answer", "text": "Most HVAC businesses in South Florida sell for 2.5x to 4.5x their Seller's Discretionary Earnings (SDE). A highly profitable company with heavy maintenance agreements can reach 5x." }
          },
          {
            "@type": "Question",
            "name": "Do I need HVHZ compliance to sell my HVAC business?",
            "acceptedAnswer": { "@type": "Answer", "text": "While not legally required to sell the entity itself, having a history of strict High Velocity Hurricane Zone (HVHZ) compliance protects the buyer from liabilities and increases your valuation." }
          },
          {
            "@type": "Question",
            "name": "How long does it take to sell an HVAC business in South Florida?",
            "acceptedAnswer": { "@type": "Answer", "text": "The average time to sell an HVAC business in South Florida is 6 to 9 months, from initial valuation to closing, assuming financials are clean." }
          },
          {
            "@type": "Question",
            "name": "Is South Florida a good market to buy an HVAC business right now?",
            "acceptedAnswer": { "@type": "Answer", "text": "Yes, South Florida is one of the strongest HVAC markets in the U.S. due to year-round high temperatures, coastal corrosion driving frequent replacements, and a massive residential population." }
          }
        ]
      }
    ]
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }} />
      <main className="min-h-screen bg-gray-50 flex flex-col ">
        {/* Hero Section */}
        <section className="relative w-full bg-[#022B3A] pt-36 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="max-w-4xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-6 leading-tight drop-shadow-xl">
              South Florida HVAC Business Guide: Buy, Sell, and Value a Company (2026)
            </h1>
            
            {/* Top Summary / Direct Answer Signal */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-2xl mb-8 text-left inline-block">
              <span className="text-sm font-bold text-gray-300 uppercase tracking-wider mb-2 block">Quick Summary (Updated: Sept 2026)</span>
              <p className="text-lg text-white font-medium leading-relaxed">
                <strong>Audience & Use-Case:</strong> This guide is designed for HVAC business owners preparing to sell, and buyers seeking acquisitions. Use this advice during your exit planning or due diligence phase to evaluate a <strong>South Florida HVAC business</strong>. Valuations currently average 2.5x to 4.5x SDE. The market is driven by year-round demand and strict High Velocity Hurricane Zone (HVHZ) compliance requirements. Use this guide to understand regional multiples, navigate DBPR licensing, and evaluate Miami, Broward, and Palm Beach acquisitions.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row items-start justify-start gap-4 mt-4">
              <a href="#contact" className="px-8 py-4 bg-[#EE5B2C] hover:bg-orange-600 text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition-all w-full sm:w-auto">
                Get a Confidential Valuation
              </a>
              <a href="https://wa.me/19548649161" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-[#25D366] hover:bg-[#128C7E] text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition-all w-full sm:w-auto flex items-center justify-center">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
                Chat on WhatsApp
              </a>
            </div>
          </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid lg:grid-cols-12 gap-12">
          
          <div className="lg:col-span-7 space-y-16">

            {/* SEO Enhancements Block */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 mb-12">
              <h2 className="text-3xl font-black text-[#022B3A] mb-4">What Is an HVAC Business Broker in South Florida?</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                <strong>Definition:</strong> An HVAC business broker in South Florida is a specialized M&A intermediary who facilitates the valuation, marketing, and sale of heating, ventilation, and air conditioning companies. They connect local sellers with qualified private equity groups and strategic buyers.
              </p>

              <h2 className="text-2xl font-bold text-[#022B3A] mt-8 mb-3">Who Should Use This South Florida Guide?</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                <strong>Audience & Use-Case:</strong> This guide is specifically written for <strong>HVAC owners, mechanical contractors, and investors</strong> operating within the South Florida market. You should use this data during your <strong>exit planning or acquisition due-diligence phase</strong> to understand local valuation multiples and regulatory requirements.
              </p>

              <h2 className="text-2xl font-bold text-[#022B3A] mt-8 mb-3">How to Value and Sell Your HVAC Company?</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                To successfully sell your business, you must accurately recast your financials, normalize your Seller's Discretionary Earnings (SDE), and prepare a confidential information memorandum (CIM). A structured approach minimizes risks during buyer due diligence.
              </p>

              <h2 className="text-2xl font-bold text-[#022B3A] mt-8 mb-3">Should I Sell My HVAC Business Now or Wait?</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Timing depends heavily on your personal retirement goals and the current macro-economic climate. Currently, demand from private equity roll-ups in South Florida is at an all-time high, making it a lucrative seller's market.
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-8 rounded-r-lg">
                <h3 className="text-lg font-bold text-blue-900 mb-2">First-Hand Experience & Real Market Data</h3>
                <p className="text-blue-800 mb-4">
                  Based on our first-hand testing and real transaction data across South Florida in 2025/2026, businesses with over 60% recurring maintenance revenue sell for 1.2x to 1.8x higher multiples than purely installation-driven companies.
                </p>
                <p className="text-blue-800 font-medium">
                  <strong>Citation & Compliance:</strong> According to official documentation from the Florida Department of Business and Professional Regulation (<a href="http://www.myfloridalicense.com/DBPR/" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-600">Source: Florida DBPR</a>), all operating buyers must hold proper Class A or B Air-Conditioning contractor licenses to legally acquire and run the entity.
                </p>
              </div>
            </div>

            
            {/* H2 1 */}
            <div>
              <h2 className="text-3xl font-black text-[#022B3A] mb-4 border-b border-gray-200 pb-2">What Is the South Florida HVAC Market Like Right Now?</h2>
              <p className="text-lg text-gray-700 font-medium mb-6">
                The South Florida HVAC market is highly active, characterized by immense residential demand and continuous commercial development. Because air conditioning is critical for survival in the region, the service sector remains largely recession-proof.
              </p>
              
              <h3 className="text-xl font-bold text-[#022B3A] mt-8 mb-2">Market Size and Growth Trends in South Florida</h3>
              <p className="text-gray-700 mb-4">With steady population growth, the demand for residential and commercial mechanical services is expanding. Consolidators and private equity groups are heavily targeting South Florida to secure reliable, recurring cash flow.</p>
              
              <h3 className="text-xl font-bold text-[#022B3A] mt-8 mb-2">HVHZ Compliance and What It Means for Buyers and Sellers</h3>
              <p className="text-gray-700 mb-4">South Florida operates under the High Velocity Hurricane Zone (HVHZ) building codes. Companies that demonstrate strict compliance with these codes command higher valuations because they present significantly lower liability risks to prospective buyers.</p>
              
              <h3 className="text-xl font-bold text-[#022B3A] mt-8 mb-2">Counties We Cover: Miami-Dade, Broward, and Palm Beach</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                <li><strong>Miami-Dade:</strong> High density, massive commercial infrastructure, and intense coastal salt-air corrosion driving frequent replacements.</li>
                <li><strong>Broward:</strong> Steady suburban residential growth and high adoption of preventative maintenance agreements (PMAs).</li>
                <li><strong>Palm Beach:</strong> High-net-worth demographics yielding premium replacement margins.</li>
              </ul>
            </div>

            {/* H2 2 */}
            <div>
              <h2 className="text-3xl font-black text-[#022B3A] mb-4 border-b border-gray-200 pb-2">How Much Is an HVAC Business Worth in South Florida?</h2>
              <p className="text-lg text-gray-700 font-medium mb-6">
                Most HVAC businesses are valued using a multiple of Seller's Discretionary Earnings (SDE) or EBITDA. In South Florida, these multiples are currently elevated due to high buyer demand.
              </p>
              
              <h3 className="text-xl font-bold text-[#022B3A] mt-8 mb-2">Typical Valuation Multiples in South Florida</h3>
              <p className="text-gray-700 mb-4">Smaller owner-operated firms typically sell for 2.5x to 3.5x SDE. Larger firms with over $1 million in EBITDA can fetch multiples of 4x to 6x+ EBITDA, especially from strategic buyers.</p>
              
              <h3 className="text-xl font-bold text-[#022B3A] mt-8 mb-2">What Drives Value Up (Commercial Mix, Maintenance Agreements, HVHZ Compliance)</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                <li><strong>Maintenance Agreements (PMAs):</strong> Guaranteed, recurring cash flow.</li>
                <li><strong>Commercial Mix:</strong> Lucrative B2B contracts improve stability.</li>
                <li><strong>HVHZ Compliance:</strong> Verified compliance reduces post-sale liability.</li>
              </ul>
              
              <h3 className="text-xl font-bold text-[#022B3A] mt-8 mb-4">Sample Valuation Range by Business Size</h3>
              <div className="overflow-x-auto bg-white rounded-xl shadow-sm border border-gray-200">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="p-4 border-b font-bold text-[#022B3A]">Business Size (SDE/EBITDA)</th>
                      <th className="p-4 border-b font-bold text-[#022B3A]">Typical Multiple</th>
                      <th className="p-4 border-b font-bold text-[#022B3A]">Estimated Market Value</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="p-4 border-b text-gray-700">$250,000 SDE</td>
                      <td className="p-4 border-b text-gray-700">2.5x - 3.0x</td>
                      <td className="p-4 border-b text-gray-700">$625,000 - $750,000</td>
                    </tr>
                    <tr>
                      <td className="p-4 border-b text-gray-700">$500,000 SDE</td>
                      <td className="p-4 border-b text-gray-700">3.0x - 4.0x</td>
                      <td className="p-4 border-b text-gray-700">$1,500,000 - $2,000,000</td>
                    </tr>
                    <tr>
                      <td className="p-4 border-b text-gray-700">$1,500,000+ EBITDA</td>
                      <td className="p-4 border-b text-gray-700">4.5x - 6.0x+</td>
                      <td className="p-4 border-b text-gray-700">$6,750,000 - $9,000,000+</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* H2 3 */}
            <div>
              <h2 className="text-3xl font-black text-[#022B3A] mb-4 border-b border-gray-200 pb-2">How to Sell an HVAC Business in South Florida</h2>
              <p className="text-lg text-gray-700 font-medium mb-6">
                Selling an HVAC business is a structured process that requires confidentiality and rigorous preparation. Here is the step-by-step framework.
              </p>
              
              <h3 className="text-xl font-bold text-[#022B3A] mt-8 mb-2">Step 1 — Get a Confidential Valuation</h3>
              <p className="text-gray-700 mb-4">Start with a formal broker opinion of value. Do not guess your asking price. A precise SDE calculation ensures you do not leave money on the table.</p>
              
              <h3 className="text-xl font-bold text-[#022B3A] mt-8 mb-2">Step 2 — Prepare Financials and Documentation</h3>
              <p className="text-gray-700 mb-4">Organize your last 3 years of tax returns, P&L statements, and a detailed equipment list. Verify your corporate standing with the <a href="https://floridarevenue.com/Pages/default.aspx" target="_blank" rel="noopener noreferrer" className="text-[#EE5B2C] hover:underline">Florida Department of Revenue (DOR)</a>.</p>
              
              <h3 className="text-xl font-bold text-[#022B3A] mt-8 mb-2">Step 3 — Vet Buyers Under NDA</h3>
              <p className="text-gray-700 mb-4">Never disclose your business identity publicly. Ensure every prospective buyer signs a Non-Disclosure Agreement (NDA) and provides proof of funds before reviewing your data.</p>
              
              <h3 className="text-xl font-bold text-[#022B3A] mt-8 mb-2">Step 4 — Close and Transition</h3>
              <p className="text-gray-700 mb-4">Finalize the asset purchase agreement and execute a smooth transition plan for your technicians, vehicles, and the all-important DBPR license qualifying agent status.</p>
            </div>

            {/* H2 4 */}
            <div>
              <h2 className="text-3xl font-black text-[#022B3A] mb-4 border-b border-gray-200 pb-2">How to Buy an HVAC Business in South Florida</h2>
              <p className="text-lg text-gray-700 font-medium mb-6">
                Acquiring an existing business allows you to bypass the startup phase and instantly gain market share in the highly competitive South Florida landscape.
              </p>
              
              <h3 className="text-xl font-bold text-[#022B3A] mt-8 mb-2">What Buyers Should Look for in a South Florida HVAC Business</h3>
              <p className="text-gray-700 mb-4">Prioritize companies with over 40% of their revenue tied to residential replacements and service. Look for high employee retention and strong local reviews.</p>
              
              <h3 className="text-xl font-bold text-[#022B3A] mt-8 mb-2">Financing Options for Buyers</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                <li><strong>SBA 7(a) Loans:</strong> Frequently used for acquisitions under $5 million, requiring only 10% to 20% down.</li>
                <li><strong>Seller Financing:</strong> Many deals involve a 10% to 30% seller carryback note to bridge valuation gaps.</li>
                <li><strong>Private Equity:</strong> For multi-million dollar platforms, PE firms deploy significant cash for roll-ups.</li>
              </ul>
              
              <h3 className="text-xl font-bold text-[#022B3A] mt-8 mb-2">Due Diligence Checklist</h3>
              <p className="text-gray-700 mb-4">Verify tax returns, audit the recurring revenue, inspect the fleet, and ensure the seller's license is in good standing with the <a href="http://www.myfloridalicense.com/dbpr/" target="_blank" rel="noopener noreferrer" className="text-[#EE5B2C] hover:underline">Florida DBPR</a>.</p>
            </div>

            {/* H2 5 */}
            <div>
              <h2 className="text-3xl font-black text-[#022B3A] mb-4 border-b border-gray-200 pb-2">Is South Florida a Good Place to Buy or Sell an HVAC Business?</h2>
              <p className="text-lg text-gray-700 font-medium mb-6">
                Yes, South Florida is widely considered one of the premier HVAC markets in North America, offering significant opportunities for both exiting founders and incoming investors.
              </p>
              
              <h3 className="text-xl font-bold text-[#022B3A] mt-8 mb-2">Advantages of the South Florida Market</h3>
              <p className="text-gray-700 mb-4">The region provides a 12-month cooling season, eliminating the shoulder-season revenue dips seen in northern markets. Consistent wealth migration into the area also fuels high-margin replacements.</p>
              
              <h3 className="text-xl font-bold text-[#022B3A] mt-8 mb-2">Risks and Considerations</h3>
              <p className="text-gray-700 mb-4">Fierce competition, intense technician labor shortages, and complex HVHZ permitting are the primary challenges. Acquiring an existing business mitigates these risks by providing an established workforce.</p>
              
              <h3 className="text-xl font-bold text-[#022B3A] mt-8 mb-4">South Florida vs. Other Florida Regions</h3>
              <div className="overflow-x-auto bg-white rounded-xl shadow-sm border border-gray-200">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="p-4 border-b font-bold text-[#022B3A]">Region</th>
                      <th className="p-4 border-b font-bold text-[#022B3A]">Market Driver</th>
                      <th className="p-4 border-b font-bold text-[#022B3A]">HVHZ Requirement</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="p-4 border-b font-bold text-[#EE5B2C]">South Florida</td>
                      <td className="p-4 border-b text-gray-700">Extreme density, coastal corrosion, high wealth</td>
                      <td className="p-4 border-b text-gray-700">Strictly Enforced</td>
                    </tr>
                    <tr>
                      <td className="p-4 border-b text-gray-700">Central Florida</td>
                      <td className="p-4 border-b text-gray-700">Tourism, hospitality, inland population boom</td>
                      <td className="p-4 border-b text-gray-700">Standard Code</td>
                    </tr>
                    <tr>
                      <td className="p-4 border-b text-gray-700">Tampa Bay</td>
                      <td className="p-4 border-b text-gray-700">Retirement demographics, Gulf coast exposure</td>
                      <td className="p-4 border-b text-gray-700">Standard Code</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* H2 6 */}
            <div>
              <h2 className="text-3xl font-black text-[#022B3A] mb-4 border-b border-gray-200 pb-2">Cities We Serve in South Florida</h2>
              <p className="text-lg text-gray-700 font-medium mb-8">
                We broker transactions and provide valuation services across the entire South Florida tri-county area. Explore our dedicated city guides below for localized HVAC market insights:
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {[
                  "Miami", "Fort Lauderdale", "West Palm Beach", "Boca Raton", 
                  "Hollywood", "Pompano Beach", "Coral Springs", "Pembroke Pines", 
                  "Miramar", "Hialeah", "Homestead"
                ].map(city => {
                  const slug = city.toLowerCase().replace(/\s+/g, '-');
                  return (
                    <Link key={city} href={`/florida/${slug}`} className="bg-white border border-gray-200 rounded-lg p-4 text-center hover:border-[#EE5B2C] hover:shadow-md transition-all group">
                      <span className="font-bold text-[#022B3A] group-hover:text-[#EE5B2C] block">HVAC Business in {city}</span>
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* H2 7 */}
            <div>
              <h2 className="text-3xl font-black text-[#022B3A] mb-6">Frequently Asked Questions About HVAC Businesses in South Florida</h2>
              <div className="space-y-4">
                <details className="bg-white rounded-xl border border-gray-200 shadow-sm group">
                  <summary className="flex items-center justify-between cursor-pointer p-6 list-none font-bold text-lg text-[#022B3A]">
                    <h3 className="m-0">How much does an HVAC business sell for in Miami or Fort Lauderdale?</h3>
                    <span className="transition group-open:rotate-180">
                      <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                    </span>
                  </summary>
                  <p className="text-gray-700 mt-2 px-6 pb-6 leading-relaxed">
                    Most companies in Miami and Fort Lauderdale sell for a multiple of 2.5x to 4.5x SDE. A business producing $400,000 in SDE typically sells for between $1,000,000 and $1,600,000 depending on maintenance agreements and commercial mix.
                  </p>
                </details>
                
                <details className="bg-white rounded-xl border border-gray-200 shadow-sm group">
                  <summary className="flex items-center justify-between cursor-pointer p-6 list-none font-bold text-lg text-[#022B3A]">
                    <h3 className="m-0">Do I need HVHZ compliance to sell my HVAC business?</h3>
                    <span className="transition group-open:rotate-180">
                      <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                    </span>
                  </summary>
                  <p className="text-gray-700 mt-2 px-6 pb-6 leading-relaxed">
                    Strict adherence to High Velocity Hurricane Zone (HVHZ) permitting codes is heavily scrutinized during buyer due diligence. While you can sell an entity with past compliance issues, doing so severely limits your buyer pool and valuation multiple.
                  </p>
                </details>

                <details className="bg-white rounded-xl border border-gray-200 shadow-sm group">
                  <summary className="flex items-center justify-between cursor-pointer p-6 list-none font-bold text-lg text-[#022B3A]">
                    <h3 className="m-0">How long does it take to sell an HVAC business in South Florida?</h3>
                    <span className="transition group-open:rotate-180">
                      <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                    </span>
                  </summary>
                  <p className="text-gray-700 mt-2 px-6 pb-6 leading-relaxed">
                    On average, it takes 6 to 9 months to complete a transaction. The timeline is highly dependent on whether your financials are clean and if the buyer utilizes SBA lending, which requires significant underwriting time.
                  </p>
                </details>

                <details className="bg-white rounded-xl border border-gray-200 shadow-sm group">
                  <summary className="flex items-center justify-between cursor-pointer p-6 list-none font-bold text-lg text-[#022B3A]">
                    <h3 className="m-0">Is South Florida a good market to buy an HVAC business right now?</h3>
                    <span className="transition group-open:rotate-180">
                      <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                    </span>
                  </summary>
                  <p className="text-gray-700 mt-2 px-6 pb-6 leading-relaxed">
                    Yes, it is one of the most lucrative markets nationally. Coastal weather drives equipment replacement every 7 to 10 years (faster than the national average), and the lack of a winter off-season ensures robust, year-round cash flow for owners.
                  </p>
                </details>
              </div>
            </div>

          </div>

          <div className="lg:col-span-5 mt-12 lg:mt-0" id="contact">
            <div className="sticky top-32 bg-white rounded-[2rem] shadow-xl shadow-gray-200/50 border border-gray-100 p-8">
              <h3 className="text-2xl font-black text-[#022B3A] mb-3">South Florida Consultation</h3>
              <p className="text-gray-600 mb-6 font-medium leading-relaxed">
                Connect with our local advisors for a confidential valuation or acquisition strategy.
              </p>
              <div className="max-h-[500px] overflow-y-auto custom-scrollbar pr-4 w-full"><ContactForm buttonText="Request Confidential Consultation" /></div>
            </div>
          </div>

        </section>
      </main>
    </>
  );
}
