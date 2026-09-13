const fs = require('fs');

const path = 'src/app/page.tsx';
let code = fs.readFileSync(path, 'utf8');

// 1. Update Metadata
code = code.replace(
  /export const metadata: Metadata = {[\s\S]*?};/,
  `export const metadata: Metadata = {
  title: 'Florida HVAC Business Broker & M&A Advisors',
  description: 'The premier Florida HVAC business broker. Buy or sell your Florida HVAC company with our confidential valuation and M&A advisory services.',
  alternates: {
    canonical: 'https://www.hvacexitadvisors.com',
  },
  openGraph: {
    title: 'Florida HVAC Business Broker & M&A Advisors',
    description: 'The premier Florida HVAC business broker. Buy or sell your Florida HVAC company with our confidential valuation and M&A advisory services.',
    url: 'https://www.hvacexitadvisors.com',
    type: 'website',
    images: [{ url: "https://www.hvacexitadvisors.com/why-sell-with-us.jpg" }]
  },
};`
);

// 2. Add Schemas
const oldSchemaRegex = /const homeSchema = {[\s\S]*?};/g;
code = code.replace(oldSchemaRegex, `const baseSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": "https://www.hvacexitadvisors.com/#localbusiness",
    "name": "HVAC Exit Advisors",
    "url": "https://www.hvacexitadvisors.com",
    "image": "https://www.hvacexitadvisors.com/florida-hvac-business-broker-home.jpg",
    "description": "Florida's premier HVAC business broker helping owners sell and buyers acquire profitable commercial and residential HVAC businesses.",
    "telephone": "+1-954-864-9161",
    "priceRange": "$$$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "10242 NW 47th St, Ste 39C",
      "addressLocality": "Sunrise",
      "addressRegion": "FL",
      "postalCode": "33351",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 26.1587,
      "longitude": -80.2858
    },
    "areaServed": [
      {
        "@type": "State",
        "name": "Florida"
      }
    ],
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "08:00",
        "closes": "18:00"
      }
    ]
  };

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://www.hvacexitadvisors.com/#webpage",
    "url": "https://www.hvacexitadvisors.com",
    "name": "Florida HVAC Business Broker & M&A Advisors",
    "description": "The premier Florida HVAC business broker. Buy or sell your Florida HVAC company with our confidential valuation and M&A advisory services.",
    "publisher": {
      "@id": "https://www.hvacexitadvisors.com/#organization"
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.hvacexitadvisors.com"
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Why do I need a specialized Florida HVAC Business Broker?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "General brokers don't understand DBPR license transfers, maintenance agreement valuations, or Florida's specific HVAC market multiples. A specialized broker gets you a higher valuation and handles the technical transfer seamlessly."
        }
      },
      {
        "@type": "Question",
        "name": "How much is my Florida HVAC company worth?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most Florida HVAC businesses trade between 2x and 4x SDE (Seller's Discretionary Earnings), or 4x to 6x+ EBITDA for larger commercial operations. The exact value depends heavily on your recurring revenue and management structure."
        }
      }
    ]
  };
  
  const homeSchema = [baseSchema, webPageSchema, breadcrumbSchema, faqSchema];
`);

// 3. Inject new layout elements below Hero
const extraContent = `
      {/* Executive Summary & AEO Box */}
      <section className="w-full bg-white py-12 border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#022B3A]/5 border border-[#022B3A]/10 p-8 rounded-2xl">
            <div className="flex flex-wrap items-center justify-between border-b border-gray-200 pb-4 mb-4">
              <h2 className="text-2xl font-black text-[#022B3A]">The Premier Florida HVAC Business Broker & Advisory Firm</h2>
              <span className="text-sm font-bold text-gray-500 bg-white px-3 py-1 rounded-full border border-gray-200">Last Updated: Sept 2026</span>
            </div>
            
            <p className="text-gray-700 font-medium leading-relaxed mb-6">
              Welcome to HVAC Exit Advisors, a specialized M&A firm entirely dedicated to the mechanical contracting space. If you're looking for a <strong>Florida HVAC Business Broker</strong> to help you evaluate, market, and sell your heating and air conditioning company, you're in the right place.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-bold text-[#EE5B2C] mb-2 text-sm uppercase tracking-wider">Target Audience & Use Case</h3>
                <ul className="space-y-2 text-sm font-medium text-gray-700">
                  <li>? <strong>Sellers:</strong> HVAC owners seeking a discreet exit or private equity recapitalization.</li>
                  <li>? <strong>Buyers:</strong> Investors and technicians acquiring established cash flow.</li>
                  <li>? <strong>Decision Context:</strong> Securing the highest multiple during a business sale.</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-[#EE5B2C] mb-2 text-sm uppercase tracking-wider">Our First-Hand Experience</h3>
                <p className="text-sm font-medium text-gray-700">
                  Backed by decades of <a href="https://www.ibba.org" target="_blank" rel="noopener noreferrer" className="underline hover:text-orange-500">IBBA-standard</a> valuation experience and direct operational knowledge of Florida DBPR regulations, we consistently secure 15-30% higher multiples than generalist brokers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="w-full bg-[#F7F5F0] py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black text-[#022B3A] text-center mb-10">Why Choose Us vs. Traditional Brokers?</h2>
          <div className="overflow-x-auto bg-white rounded-2xl shadow-sm border border-gray-100 p-2">
            <table className="w-full text-left border-collapse min-w-[600px]">
              <thead>
                <tr>
                  <th className="p-4 font-bold text-gray-900 border-b-2 border-gray-100 text-lg">Feature</th>
                  <th className="p-4 font-black text-[#022B3A] bg-orange-50/50 border-b-2 border-orange-100 text-lg rounded-tl-xl">HVAC Exit Advisors</th>
                  <th className="p-4 font-bold text-gray-500 border-b-2 border-gray-100 text-lg">General Brokers</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="p-4 font-medium text-gray-700">Valuation Expertise</td>
                  <td className="p-4 font-bold text-[#EE5B2C] bg-orange-50/30">Focuses heavily on Maintenance Agreements (PMAs) and add-backs</td>
                  <td className="p-4 text-gray-500">Uses generic SDE formulas</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-gray-700">Buyer Network</td>
                  <td className="p-4 font-bold text-[#EE5B2C] bg-orange-50/30">Private Equity, Strategic HVAC Consolidators</td>
                  <td className="p-4 text-gray-500">Local tire-kickers and generic investors</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-gray-700">License Transfer Support</td>
                  <td className="p-4 font-bold text-[#EE5B2C] bg-orange-50/30">Expert guidance on Florida DBPR qualification</td>
                  <td className="p-4 text-gray-500">Leaves licensing to you</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
      
      {/* Explicit FAQ Section for AEO */}
      <section className="w-full bg-white py-16 border-t border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black text-[#022B3A] mb-8 text-center">Frequently Asked Questions</h2>
          <div className="grid gap-6">
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
              <h3 className="text-xl font-bold text-[#022B3A] mb-2">Why do I need a specialized Florida HVAC Business Broker?</h3>
              <p className="text-gray-700 font-medium">
                <strong>Short Answer:</strong> A specialized broker gets you a higher valuation and handles technical license transfers.<br/>
                General brokers don't understand DBPR license transfers, maintenance agreement valuations, or Florida's specific HVAC market multiples. We speak the language of mechanical contracting.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
              <h3 className="text-xl font-bold text-[#022B3A] mb-2">How much is my Florida HVAC company worth?</h3>
              <p className="text-gray-700 font-medium">
                <strong>Short Answer:</strong> Usually 2x to 4x SDE, or 4x to 6x+ EBITDA.<br/>
                Most Florida HVAC businesses trade based on Seller's Discretionary Earnings (SDE). The exact multiple depends heavily on your recurring revenue (PMAs) and management structure.
              </p>
            </div>
          </div>
        </div>
      </section>
`;

code = code.replace('<Hero />', '<Hero />\n' + extraContent);
fs.writeFileSync(path, code, 'utf8');
