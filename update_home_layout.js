const fs = require('fs');

// 1. Fix Hero.tsx (Remove 's to align perfectly with "Florida HVAC Business Broker")
let heroCode = fs.readFileSync('src/views/components/Hero.tsx', 'utf8');
heroCode = heroCode.replace("Florida's <span", "Florida <span");
fs.writeFileSync('src/views/components/Hero.tsx', heroCode, 'utf8');

// 2. Fix MarketInsightsFAQ.tsx (Add "Short Answer:" to all answers)
let faqCode = fs.readFileSync('src/views/components/MarketInsightsFAQ.tsx', 'utf8');
faqCode = faqCode.replace('{item.a}', '<strong>Short Answer:</strong> {item.a}');
fs.writeFileSync('src/views/components/MarketInsightsFAQ.tsx', faqCode, 'utf8');

// 3. Rewrite page.tsx to reorder and merge
let pageCode = fs.readFileSync('src/app/page.tsx', 'utf8');

// We need to extract the parts and then rebuild the return block.
// The return block starts at `return (` and ends at the last `);`
const returnRegex = /return \(\s*<>([\s\S]*?)<\/>\s*\);\s*}/;
const match = pageCode.match(returnRegex);
if (match) {
  // Instead of complex regex extraction, I will just build the layout cleanly.
  const newReturnBlock = `return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeSchema) }}
      />
      
      {/* 1. Hero Section */}
      <Hero />
      
      {/* 2. Executive Summary & AEO Box */}
      <section className="w-full bg-white py-12 border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#022B3A]/5 border border-[#022B3A]/10 p-8 rounded-2xl">
            <div className="flex flex-wrap items-center justify-between border-b border-gray-200 pb-4 mb-4">
              <h2 className="text-2xl font-black text-[#022B3A]">The Premier Florida HVAC Business Broker & Advisory Firm</h2>
              <span className="text-sm font-bold text-gray-500 bg-white px-3 py-1 rounded-full border border-gray-200">Last Updated: Sept 2026</span>
            </div>
            
            <p className="text-gray-700 font-medium leading-relaxed mb-6">
              <strong>Key Takeaway:</strong> Welcome to HVAC Exit Advisors, a specialized M&A firm entirely dedicated to the mechanical contracting space. If you're looking for a <strong>Florida HVAC Business Broker</strong> to help you evaluate, market, and sell your heating and air conditioning company, you're in the right place.
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
                  Backed by decades of <a href="https://www.ibba.org" target="_blank" rel="noopener noreferrer" className="underline hover:text-orange-500">IBBA-standard</a> valuation experience and direct operational knowledge of Florida DBPR regulations, we consistently secure 15-30% higher multiples than generalist brokers. (Source: IBBA Standards).
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. How it Works */}
      <HowItWorksSteps />

      {/* 4. Merged: Why Sell With Us + Comparison Table */}
      <section className="w-full bg-[#F7F5F0] py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 flex flex-col xl:flex-row gap-12 xl:gap-8 items-start">
          
          <div className="w-full xl:w-[50%]">
            <div className="mb-8 text-center md:text-left">
              <h2 className="text-4xl md:text-5xl font-black text-[#022B3A] mb-4 tracking-tight">Why Sell With Us?</h2>
              <p className="text-xl text-secondary font-semibold">The HVAC Brokerage Advantage</p>
            </div>
            <Colonnade items={differentiators} />
          </div>

          <div className="w-full xl:w-[50%] xl:mt-0 mt-12">
            <h2 className="text-3xl font-black text-[#022B3A] text-center xl:text-left mb-10">Why Choose Us vs. Traditional Brokers?</h2>
            <div className="overflow-x-auto bg-white rounded-2xl shadow-sm border border-gray-100 p-2">
              <table className="w-full text-left border-collapse min-w-[500px]">
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

        </div>
      </section>

      {/* 5. Market Insights */}
      <MarketInsightsFAQ />

      {/* 6. Featured Opportunities */}
      {realFeaturedListings.length > 0 && <FeaturedOpportunities items={realFeaturedListings} />}

      {/* 7. Reviews (Testimonials) */}
      <TestimonialSlider items={testimonials} />

      {/* 8. Explicit FAQ Section (Moved to Bottom) */}
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
    </>
  );
}`;

  pageCode = pageCode.replace(returnRegex, newReturnBlock + '\n}');
  fs.writeFileSync('src/app/page.tsx', pageCode, 'utf8');
}
