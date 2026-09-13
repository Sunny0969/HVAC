const fs = require('fs');

// 1. Update SellPageContent.tsx
let sellContent = fs.readFileSync('src/views/components/SellPageContent.tsx', 'utf8');
// Fix H2s with answers
sellContent = sellContent.replace(
  'Here\'s Where to Start.</h2>\n            <p className="text-lg md:text-xl text-gray-600 mb-8 font-medium">',
  'Here\'s Where to Start.</h2>\n            <p className="text-lg md:text-xl text-gray-600 mb-8 font-medium"><strong>Short Answer:</strong> Start by getting a professional valuation and preparing your financials.'
);

sellContent = sellContent.replace(
  'Actually Worth?</h2>\n            <p className="text-xl text-white/90 mb-8 font-medium">',
  'Actually Worth?</h2>\n            <p className="text-xl text-white/90 mb-8 font-medium"><strong>Short Answer:</strong> Most Florida HVAC companies sell for 2x to 4x SDE, or 4x to 6x+ EBITDA for larger operations.'
);

sellContent = sellContent.replace(
  'Business?</h2>\n            <p className="text-lg text-gray-700 mb-6 font-medium">',
  'Business?</h2>\n            <p className="text-lg text-gray-700 mb-6 font-medium"><strong>Short Answer:</strong> Yes, Florida buyer demand is at an all-time high due to market consolidation.'
);

sellContent = sellContent.replace(
  'How Much Can I Sell My Business For?</h2>\n        <p className="text-gray-700 leading-relaxed font-medium mb-6">',
  'How Much Can I Sell My Business For?</h2>\n        <p className="text-gray-700 leading-relaxed font-medium mb-6"><strong>Short Answer:</strong> Your sale price depends heavily on your recurring revenue (PMAs), tech retention, and clean financials. '
);

// Fix FAQ array to include Short Answer
sellContent = sellContent.replace(
  /a: "/g,
  'a: "<strong>Short Answer:</strong> '
);

fs.writeFileSync('src/views/components/SellPageContent.tsx', sellContent, 'utf8');

// 2. Update page.tsx metadata and schema
let pageCode = fs.readFileSync('src/app/sell-your-hvac-business/page.tsx', 'utf8');

// Metadata
pageCode = pageCode.replace(
  "title: 'Sell Your HVAC Business in Florida'",
  "title: 'Sell Your Florida HVAC Business | Expert Brokerage'"
);
// Make H1 match exactly the core topic
pageCode = pageCode.replace(
  "Sell Your Florida <span className=\"text-[#EE5B2C]\">HVAC Business</span> On Your Terms",
  "Sell Your <span className=\"text-[#EE5B2C]\">Florida HVAC Business</span> On Your Terms"
);

// Add Article Schema
const schemaInjection = `
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Sell Your Florida HVAC Business",
    "description": "Expert guidance on selling your HVAC business in Florida, including valuations, process, and finding the right buyer.",
    "author": {
      "@type": "Organization",
      "name": "HVAC Exit Advisors"
    },
    "publisher": {
      "@type": "Organization",
      "name": "HVAC Exit Advisors",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.hvacexitadvisors.com/icon.png"
      }
    },
    "datePublished": "2026-09-01T08:00:00+00:00",
    "dateModified": new Date().toISOString(),
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.hvacexitadvisors.com/sell-your-hvac-business"
    }
  };
`;
pageCode = pageCode.replace('const jsonLdService = {', schemaInjection + '\n  const jsonLdService = {');

// Inject Article schema into DOM
pageCode = pageCode.replace(
  '<script\n        type="application/ld+json"\n        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdService) }}\n      />',
  `<script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdService) }}
      />`
);

// 3. Add Top Summary Box
const summaryBox = `
      {/* Executive Summary & AEO Box */}
      <section className="w-full bg-white py-12 border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#022B3A]/5 border border-[#022B3A]/10 p-8 rounded-2xl">
            <div className="flex flex-wrap items-center justify-between border-b border-gray-200 pb-4 mb-4">
              <h2 className="text-2xl font-black text-[#022B3A]">Executive Summary: Selling Your HVAC Business</h2>
              <span className="text-sm font-bold text-gray-500 bg-white px-3 py-1 rounded-full border border-gray-200">Last Updated: Sept 2026</span>
            </div>
            
            <p className="text-gray-700 font-medium leading-relaxed mb-6">
              <strong>Key Takeaway:</strong> Selling a Florida HVAC business requires specialized valuation of your Maintenance Agreements (PMAs), confidential marketing, and DBPR license transfer expertise. We connect you with vetted buyers and secure top-market multiples.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-bold text-[#EE5B2C] mb-2 text-sm uppercase tracking-wider">Target Audience</h3>
                <ul className="space-y-2 text-sm font-medium text-gray-700">
                  <li>? HVAC business owners in Florida preparing for retirement or transition.</li>
                  <li>? Owners seeking private equity roll-up opportunities.</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-[#EE5B2C] mb-2 text-sm uppercase tracking-wider">Our Process</h3>
                <p className="text-sm font-medium text-gray-700">
                  We provide a 100% confidential valuation, build blind profiles, and take your business to our network of strategic buyers without upfront fees.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
`;

pageCode = pageCode.replace('<SellPageContent />', summaryBox + '\n      <SellPageContent />');

fs.writeFileSync('src/app/sell-your-hvac-business/page.tsx', pageCode, 'utf8');
