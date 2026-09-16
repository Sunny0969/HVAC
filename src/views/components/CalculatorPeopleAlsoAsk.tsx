import React from 'react';
import Link from 'next/link';

export default function CalculatorPeopleAlsoAsk() {
  return (
    <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-xl shadow-gray-200/50 border border-gray-100 mb-12">
      <h2 className="text-3xl font-black text-[#022B3A] mb-8">Common Questions About Calculating HVAC Value</h2>
      
      <div className="space-y-8">
        <div>
          <h2 className="text-2xl font-bold text-[#022B3A] mb-3">What is my HVAC business worth?</h2>
          <p className="text-gray-700 font-medium leading-relaxed">
            Your HVAC business's worth is primarily determined by applying an industry multiple to your Seller's Discretionary Earnings (SDE) or EBITDA. Most residential HVAC businesses in Florida sell for 2.5x to 4.5x their SDE. However, factors like a high percentage of recurring maintenance agreements (PMAs) and a strong management team can push the valuation toward the higher end of that spectrum. You can learn more about these factors in our comprehensive <Link href="/hvac-business-valuation" className="text-[#EE5B2C] hover:underline font-bold">HVAC business valuation guide</Link>.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-[#022B3A] mb-3">What is the typical profit margin for an HVAC business?</h2>
          <p className="text-gray-700 font-medium leading-relaxed">
            The typical net profit margin for an HVAC business ranges from 10% to 20%, depending on the mix of services provided. Companies that focus heavily on high-margin residential service and replacement work usually see margins on the higher end, whereas commercial new construction often yields tighter margins around 5% to 10%. Consistent profit margins are highly attractive to <Link href="/buy-an-hvac-business" className="text-[#EE5B2C] hover:underline font-bold">qualified business buyers</Link> and private equity groups.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-[#022B3A] mb-3">How much is my business worth for free?</h2>
          <p className="text-gray-700 font-medium leading-relaxed">
            You can estimate your business worth for free using the calculator on this page, which provides a directional estimate based on standard industry multiples. For a highly accurate, market-ready figure, HVAC Exit Advisors offers a <Link href="/free-confidential-valuation" className="text-[#EE5B2C] hover:underline font-bold">free confidential valuation</Link>. This complimentary service involves professionally recasting your financials to show your maximum earning power to potential buyers.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-[#022B3A] mb-3">How to estimate HVAC cost?</h2>
          <p className="text-gray-700 font-medium leading-relaxed">
            To estimate the overall cost of acquiring an HVAC business, you must consider the asking price (typically 2.5x to 4.5x SDE) plus the required working capital, inventory, and any excluded vehicles or real estate. Buyers utilizing SBA financing generally need to cover a 10% to 20% equity injection of this total estimated cost. If you are <Link href="/sell-your-hvac-business" className="text-[#EE5B2C] hover:underline font-bold">selling your HVAC business</Link>, properly estimating these costs for buyers upfront ensures a smoother due diligence and closing process.
          </p>
        </div>
      </div>
    </div>
  );
}
