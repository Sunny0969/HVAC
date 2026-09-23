const fs = require('fs');

const customImagesStr = `
const customImages: Record<string, string> = {
  'naples': 'https://res.cloudinary.com/db05hw4ri/image/upload/v1789679186/hvac-cities/naples.jpg',
  'fort-myers': 'https://res.cloudinary.com/db05hw4ri/image/upload/v1789679187/hvac-cities/fort-myers.jpg',
  'cape-coral': 'https://res.cloudinary.com/db05hw4ri/image/upload/v1789679189/hvac-cities/cape-coral.jpg',
  'bonita-springs': 'https://res.cloudinary.com/db05hw4ri/image/upload/v1789679191/hvac-cities/bonita-springs.jpg',
  'orlando': 'https://res.cloudinary.com/db05hw4ri/image/upload/v1789679192/hvac-cities/orlando.jpg',
  'kissimmee': 'https://res.cloudinary.com/db05hw4ri/image/upload/v1789679193/hvac-cities/kissimmee.jpg',
  'sanford': 'https://res.cloudinary.com/db05hw4ri/image/upload/v1789679195/hvac-cities/sanford.jpg',
  'lakeland': 'https://res.cloudinary.com/db05hw4ri/image/upload/v1789679196/hvac-cities/lakeland.jpg',
  'winter-haven': 'https://res.cloudinary.com/db05hw4ri/image/upload/v1789679197/hvac-cities/winter-haven.jpg',
  'tampa': 'https://res.cloudinary.com/db05hw4ri/image/upload/v1789679199/hvac-cities/tampa.jpg',
  'st.-petersburg': 'https://res.cloudinary.com/db05hw4ri/image/upload/v1789679200/hvac-cities/st.-petersburg.jpg',
  'clearwater': 'https://res.cloudinary.com/db05hw4ri/image/upload/v1789679201/hvac-cities/clearwater.jpg',
  'brandon': 'https://res.cloudinary.com/db05hw4ri/image/upload/v1789679203/hvac-cities/brandon.jpg',
  'jacksonville': 'https://res.cloudinary.com/db05hw4ri/image/upload/v1789679204/hvac-cities/jacksonville.jpg',
  'st.-augustine': 'https://res.cloudinary.com/db05hw4ri/image/upload/v1789679205/hvac-cities/st.-augustine.jpg',
  'palm-bay': 'https://res.cloudinary.com/db05hw4ri/image/upload/v1789679207/hvac-cities/palm-bay.jpg',
  'melbourne': 'https://res.cloudinary.com/db05hw4ri/image/upload/v1789679209/hvac-cities/melbourne.jpg',
  'port-st.-lucie': 'https://res.cloudinary.com/db05hw4ri/image/upload/v1789679210/hvac-cities/port-st.-lucie.jpg',
  'fort-pierce': 'https://res.cloudinary.com/db05hw4ri/image/upload/v1789679212/hvac-cities/fort-pierce.jpg',
  'sarasota': 'https://res.cloudinary.com/db05hw4ri/image/upload/v1789679215/hvac-cities/sarasota.jpg',
  'bradenton': 'https://res.cloudinary.com/db05hw4ri/image/upload/v1789679216/hvac-cities/bradenton.jpg',
  'venice': 'https://res.cloudinary.com/db05hw4ri/image/upload/v1789679217/hvac-cities/venice.jpg',
  'north-port': 'https://res.cloudinary.com/db05hw4ri/image/upload/v1789679219/hvac-cities/north-port.jpg',
  'tallahassee': 'https://res.cloudinary.com/db05hw4ri/image/upload/v1789679221/hvac-cities/tallahassee.jpg',
  'gainesville': 'https://res.cloudinary.com/db05hw4ri/image/upload/v1789679223/hvac-cities/gainesville.jpg',
  'ocala': 'https://res.cloudinary.com/db05hw4ri/image/upload/v1789679224/hvac-cities/ocala.jpg',
  'pensacola': 'https://res.cloudinary.com/db05hw4ri/image/upload/v1789679225/hvac-cities/pensacola.jpg',
  'panama-city': 'https://res.cloudinary.com/db05hw4ri/image/upload/v1789679227/hvac-cities/panama-city.jpg'
};
`;

const pageTsx = `import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import ContactForm from '@/views/components/ContactForm';
import { cityDataMap } from '@/lib/florida-city-data';

${customImagesStr}

type Props = {
  params: Promise<{ region: string; city: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const citySlug = resolvedParams.city.toLowerCase();
  const regionSlug = resolvedParams.region.toLowerCase();
  const cityInfo = cityDataMap[citySlug];
  const cityName = cityInfo ? cityInfo.name : citySlug.charAt(0).toUpperCase() + citySlug.slice(1).replace(/-/g, ' ');
  const heroImage = customImages[citySlug] || 'https://res.cloudinary.com/db05hw4ri/image/upload/v1789541566/hvac-hero-images/resources_hero_bg.jpg';

  return {
    title: { absolute: \`\${cityName} HVAC Business Broker | Sell or Buy\` },
    description: \`Confidential brokerage, valuation, and acquisition services for heating and air conditioning contractors in \${cityName}, FL. Get a free valuation today!\`,
    alternates: {
      canonical: \`https://www.hvacexitadvisors.com/\${regionSlug}/\${citySlug}\`,
    },
    openGraph: {
      title: \`\${cityName} HVAC Business Broker | Sell or Buy\`,
      description: \`Confidential brokerage, valuation, and acquisition services for heating and air conditioning contractors in \${cityName}, FL.\`,
      url: \`https://www.hvacexitadvisors.com/\${regionSlug}/\${citySlug}\`,
      images: [{ url: heroImage, width: 1200, height: 630, alt: \`\${cityName} HVAC Broker\` }]
    },
  };
}

export default async function CityPage({ params }: Props) {
  const resolvedParams = await params;
  const citySlug = resolvedParams.city.toLowerCase();
  const regionSlug = resolvedParams.region.toLowerCase();
  
  // Default values if city not in map
  const defaultCityInfo = {
    name: citySlug.charAt(0).toUpperCase() + citySlug.slice(1).replace(/-/g, ' '),
    county: "Florida",
    localServiceAreaExplanation: "Providing comprehensive HVAC business brokerage across local markets.",
    tradeCoverage: "Specialized in residential replacement and commercial service contracts.",
    ownerConcerns: "Navigating local valuations and buyer requirements efficiently.",
    averageMultiple: "2.5x - 4.0x SDE",
    faqs: []
  };

  const cityInfo = cityDataMap[citySlug] || defaultCityInfo;
  const cityName = cityInfo.name;
  const heroImage = customImages[citySlug] || 'https://res.cloudinary.com/db05hw4ri/image/upload/v1789541566/hvac-hero-images/resources_hero_bg.jpg';
  
  const regionName = regionSlug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
  const lastUpdated = new Date().toISOString();

  // Combine FAQ schema and WebPage Schema
  const schemaOrg = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": \`https://www.hvacexitadvisors.com/\${regionSlug}/\${citySlug}\`,
        "name": \`\${cityName} HVAC Business Broker | Sell or Buy\`,
        "description": \`Confidential brokerage and valuation services for HVAC contractors in \${cityName}.\`,
        "url": \`https://www.hvacexitadvisors.com/\${regionSlug}/\${citySlug}\`,
        "dateModified": lastUpdated,
        "breadcrumb": { "@id": \`https://www.hvacexitadvisors.com/\${regionSlug}/\${citySlug}#breadcrumb\` }
      },
      {
        "@type": "BreadcrumbList",
        "@id": \`https://www.hvacexitadvisors.com/\${regionSlug}/\${citySlug}#breadcrumb\`,
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.hvacexitadvisors.com/" },
          { "@type": "ListItem", "position": 2, "name": regionName, "item": \`https://www.hvacexitadvisors.com/\${regionSlug}\` },
          { "@type": "ListItem", "position": 3, "name": \`\${cityName}, FL\`, "item": \`https://www.hvacexitadvisors.com/\${regionSlug}/\${citySlug}\` }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": cityInfo.faqs?.length > 0 ? cityInfo.faqs.map(faq => ({
          "@type": "Question",
          "name": faq.q,
          "acceptedAnswer": { "@type": "Answer", "text": faq.a }
        })) : [
          {
            "@type": "Question",
            "name": \`What is the average multiple for an HVAC business in \${cityName}?\`,
            "acceptedAnswer": { "@type": "Answer", "text": \`Most HVAC businesses in \${cityName} sell for \${cityInfo.averageMultiple}. Firms with heavy commercial mix or deep maintenance agreements command higher multiples.\` }
          }
        ]
      }
    ]
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }} />
      <main className="min-h-screen bg-gray-50 flex flex-col">
        
        {/* HERO SECTION */}
        <section className="relative w-full bg-[#022B3A] overflow-hidden flex items-center justify-start min-h-[50dvh] pt-32 pb-20">
          <div className="absolute inset-0 z-0">
            <Image src={heroImage} alt={\`\${cityName} HVAC Business Sales\`} fill className="object-cover opacity-20" priority />
          </div>
          <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <span className="text-xs font-bold uppercase tracking-wider text-white bg-[#EE5B2C] px-3 py-1 rounded-full inline-block mb-4 shadow-md">
              {cityInfo.county}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight drop-shadow-xl max-w-4xl">
              {cityName} HVAC Business Sales &amp; Valuations
            </h1>
            
            {/* Top Summary / Key Takeaway for SEO */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-2xl mb-8 text-left max-w-3xl">
              <span className="text-sm font-bold text-gray-200 uppercase tracking-wider mb-2 block flex items-center gap-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"></path></svg>
                Key Takeaway (Updated: {new Date().toLocaleString('default', { month: 'short', year: 'numeric' })})
              </span>
              <p className="text-lg text-white font-medium leading-relaxed">
                Whether you want to buy or sell a {cityName} HVAC business, valuations currently average <strong>{cityInfo.averageMultiple}</strong>. This detailed guide equips HVAC owners and private equity investors with local M&A dynamics, DBPR licensing info, and deal structuring strategies.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row items-start justify-start gap-4">
              <a href="#contact" className="px-8 py-4 bg-[#EE5B2C] hover:bg-orange-600 text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition-all w-full sm:w-auto text-center">
                Get a Confidential Valuation
              </a>
            </div>
          </div>
        </section>

        {/* MAIN CONTENT GRID */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid lg:grid-cols-12 gap-12 w-full">
          
          <div className="lg:col-span-7 space-y-12 w-full">
            
            {/* SEO Block 1: Definitions & Audience */}
            <article className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <h2 className="text-3xl font-black text-[#022B3A] mb-4">What Is an HVAC Business Broker in {cityName}?</h2>
              <p className="text-gray-700 mb-6 leading-relaxed text-lg">
                <strong>Definition:</strong> An HVAC business broker in {cityName} is a highly specialized mergers and acquisitions (M&A) intermediary. They exclusively facilitate the confidential valuation, strategic marketing, and sale of heating, ventilation, and air conditioning companies. Unlike generalist brokers, they possess deep networks of qualified local and national buyers.
              </p>
              
              <h3 className="text-2xl font-bold text-[#022B3A] mt-8 mb-3">Who Should Read This Guide?</h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                <strong>Audience &amp; Use-Case:</strong> This data-driven guide is written for <strong>HVAC owners preparing for an exit</strong> and <strong>institutional investors conducting acquisition due diligence</strong>. Utilize these insights to benchmark {cityName}'s exact valuation multiples against your company's P&amp;L.
              </p>
            </article>

            {/* SEO Block 2: Market Deep Dive */}
            <article className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <h2 className="text-3xl font-black text-[#022B3A] mb-4 border-b border-gray-100 pb-3">The {cityName} HVAC Market Overview</h2>
              <p className="text-gray-700 leading-relaxed text-lg mb-8">{cityInfo.localServiceAreaExplanation}</p>
              
              <h3 className="text-2xl font-bold text-[#022B3A] mb-3">How Does Local Trade Coverage Impact Valuation?</h3>
              <p className="text-gray-700 leading-relaxed text-lg mb-4">
                {cityInfo.tradeCoverage} Acquirers specifically look for these highly-valued service types:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-3 mb-8 text-lg">
                <li><strong>High-Margin Replacements:</strong> Companies boasting a strong ratio of system change-outs to repairs.</li>
                <li><strong>Recurring Revenue:</strong> Hundreds of active, transferable preventative maintenance agreements (PMAs).</li>
                <li><strong>Commercial Contracts:</strong> Multi-year chillers, refrigeration, and roof-top unit (RTU) servicing.</li>
              </ul>

              <h3 className="text-2xl font-bold text-[#022B3A] mb-3">What Are Local Owners Concerned About?</h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                {cityInfo.ownerConcerns} Overcoming these hurdles before going to market is the difference between a stalled deal and a premium multiple.
              </p>
            </article>

            {/* SEO Block 3: Decision Support & Valuations */}
            <article className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <h2 className="text-3xl font-black text-[#022B3A] mb-4 border-b border-gray-100 pb-3">Should I Sell My {cityName} HVAC Business Now?</h2>
              <p className="text-gray-700 leading-relaxed text-lg mb-6">
                <strong>Direct Answer:</strong> Timing your exit is critical. Right now, private equity demand for Florida HVAC roll-ups is at a historic peak. If your company is generating over $500k in EBITDA, it is undeniably a strong seller's market.
              </p>

              <h3 className="text-2xl font-bold text-[#022B3A] mb-4">Typical Valuation Breakdown (2026 Metrics)</h3>
              <div className="overflow-hidden mb-8 rounded-xl border border-gray-200 shadow-sm">
                 <table className="w-full text-left border-collapse">
                   <thead>
                     <tr className="bg-[#022B3A] text-white">
                       <th className="p-4 font-bold">Financial Metric</th>
                       <th className="p-4 font-bold">Average Multiple Range</th>
                     </tr>
                   </thead>
                   <tbody className="bg-white divide-y divide-gray-100">
                     <tr className="hover:bg-gray-50"><td className="p-4 text-gray-700 font-medium">Seller's Discretionary Earnings (SDE)</td><td className="p-4 text-gray-700 font-bold">{cityInfo.averageMultiple.split('/')[0] || cityInfo.averageMultiple}</td></tr>
                     <tr className="hover:bg-gray-50"><td className="p-4 text-gray-700 font-medium">EBITDA (Firms &gt; $1M Revenue)</td><td className="p-4 text-gray-700 font-bold">{cityInfo.averageMultiple.split('/')[1] || '4.5x - 7.0x+'}</td></tr>
                   </tbody>
                 </table>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg mt-6">
                 <h3 className="text-lg font-bold text-blue-900 mb-2">First-Hand Experience &amp; Compliance</h3>
                 <p className="text-blue-800 mb-4 text-lg">
                   Based on our localized M&amp;A data, HVAC businesses that maintain clean, recast financials and legally documented service contracts close 20-30% faster in {cityName}.
                 </p>
                 <p className="text-blue-800 text-sm">
                   <strong>Regulatory Citation:</strong> The Florida Department of Business and Professional Regulation (<a href="http://www.myfloridalicense.com/DBPR/" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-600 font-bold">Source: DBPR</a>) strictly mandates that any acquiring entity must hold proper mechanical or Class A/B air-conditioning contracting licenses to operate the business post-sale.
                 </p>
              </div>
            </article>

            {/* SEO Block 4: FAQs & Internal Linking */}
            <article className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <h2 className="text-3xl font-black text-[#022B3A] mb-6">Frequently Asked Questions</h2>
              
              <div className="space-y-6 mb-8">
                {cityInfo.faqs && cityInfo.faqs.length > 0 ? (
                  cityInfo.faqs.map((faq, idx) => (
                    <div key={idx} className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                      <h3 className="text-xl font-bold text-[#022B3A] mb-2">{faq.q}</h3>
                      <p className="text-lg text-gray-700 leading-relaxed">{faq.a}</p>
                    </div>
                  ))
                ) : (
                  <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                    <h3 className="text-xl font-bold text-[#022B3A] mb-2">How do I increase the value of my HVAC business?</h3>
                    <p className="text-lg text-gray-700 leading-relaxed">Transition away from owner-dependence by building a strong management team, increasing recurring maintenance agreements, and keeping meticulous financial records.</p>
                  </div>
                )}
              </div>

              <div className="pt-6 border-t border-gray-200">
                <h3 className="text-2xl font-black text-[#022B3A] mb-4">Further Strategic Resources</h3>
                <p className="text-gray-700 leading-relaxed text-lg mb-4">
                  For a deeper dive into maximizing your value before listing, read our comprehensive 
                  <Link href="/seller-guides" className="text-[#EE5B2C] hover:underline font-bold mx-1">Seller Guides</Link>. 
                  If you are an investor looking to roll up regional assets, learn how we structure deals in our 
                  <Link href="/buyer-guides" className="text-[#EE5B2C] hover:underline font-bold mx-1">Buyer Guides</Link>.
                </p>
              </div>
            </article>

          </div>

          {/* RIGHT SIDEBAR - Contact Form */}
          <div className="lg:col-span-5 mt-12 lg:mt-0" id="contact">
            <div className="sticky top-32 bg-white rounded-[2rem] shadow-xl shadow-gray-200/50 border border-gray-100 p-8 w-full">
              <h3 className="text-2xl font-black text-[#022B3A] mb-3">{cityName} Consultation</h3>
              <p className="text-gray-600 mb-6 font-medium leading-relaxed">Connect with our local advisors for a confidential valuation.</p>
              <div className="max-h-[500px] overflow-y-auto custom-scrollbar pr-4 w-full">
                <ContactForm buttonText="Request Confidential Consultation" />
              </div>
            </div>
          </div>

        </section>
      </main>
    </>
  );
}
`;

fs.writeFileSync('src/app/[region]/[city]/page.tsx', pageTsx);
console.log('City Page rewritten successfully!');
