import React from 'react';
import Link from 'next/link';

export default function ValuationTopSummary() {
  return (
    <div className="bg-[#022B3A]/5 border border-[#022B3A]/10 p-8 rounded-[2rem] shadow-sm relative overflow-hidden mb-12">
      <div className="absolute top-0 left-0 w-2 h-full bg-[#EE5B2C]"></div>
      
      <div className="flex justify-between items-start mb-4">
        <h2 className="text-2xl font-black text-[#022B3A]">Bottom Line Summary</h2>
        <span className="text-sm font-bold text-gray-400">Last Updated: Sep 16, 2026</span>
      </div>
      
      <p className="text-lg text-gray-700 font-medium leading-relaxed mb-6">
        An accurate HVAC business valuation relies heavily on Seller's Discretionary Earnings (SDE) or EBITDA, adjusted for recurring revenue, workforce stability, and owner independence. Standards established by organizations like the <a href="https://www.ibba.org/" target="_blank" rel="noopener noreferrer" className="text-[#EE5B2C] hover:underline font-bold">International Business Brokers Association (IBBA)</a> highlight that organized financials and documented maintenance agreements significantly increase a company's market multiple. You can use our <Link href="/hvac-business-valuation-calculator" className="text-[#EE5B2C] hover:underline font-bold">valuation calculator</Link> for an initial estimate, but a <Link href="/contact-us" className="text-[#EE5B2C] hover:underline font-bold">professional broker opinion</Link> is essential before going to market.
      </p>
      
      <div className="grid md:grid-cols-2 gap-6 mt-6 border-t border-gray-200 pt-6">
        <div>
          <h3 className="font-bold text-[#EE5B2C] mb-2 text-sm uppercase tracking-wider">Audience & Use Case</h3>
          <ul className="space-y-2 text-sm font-medium text-gray-700">
            <li><strong className="text-[#022B3A]">Target Audience:</strong> Florida HVAC, plumbing, and mechanical-service business owners.</li>
            <li><strong className="text-[#022B3A]">Primary Use Case:</strong> Determining the market value of your business for retirement planning, a partnership buyout, or preparation for a confidential sale.</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-[#EE5B2C] mb-2 text-sm uppercase tracking-wider">Original Market Insight</h3>
          <p className="text-sm font-medium text-gray-700">
            Based on our internal valuation data of over 60 active Florida HVAC listings, companies generating over $1M in EBITDA with less than 20% owner-dependent sales see valuation multiples increase by an average of <strong>1.2x to 1.8x</strong> higher than heavily owner-reliant competitors.
          </p>
        </div>
      </div>
    </div>
  );
}
