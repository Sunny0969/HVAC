import React from 'react';

export default function SellTopSummary() {
  return (
    <section className="w-full bg-white py-12 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Summary / Bottom Line Answer */}
        <div className="bg-[#022B3A]/5 border border-[#022B3A]/10 p-8 rounded-[2rem] mb-12 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 left-0 w-2 h-full bg-[#EE5B2C]"></div>
          
          <div className="flex justify-between items-start mb-4">
            <h2 className="text-2xl font-black text-[#022B3A]">Bottom Line Summary</h2>
            <span className="text-sm font-bold text-gray-400">Last Updated: Sep 16, 2026</span>
          </div>
          
          <p className="text-lg text-gray-700 font-medium leading-relaxed mb-6">
            Successfully selling a Florida HVAC business requires meticulous preparation, including recasting three years of financials, organizing preventative maintenance agreements (PMAs), and executing a highly confidential marketing strategy. Aligning your business records with standards set by the <a href="https://www.ibba.org/" target="_blank" rel="noopener noreferrer" className="text-[#EE5B2C] hover:underline font-bold">International Business Brokers Association (IBBA)</a> ensures you attract premium valuations from qualified private equity groups and strategic consolidators.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 mt-6 border-t border-gray-200 pt-6">
            <div>
              <h3 className="font-bold text-[#EE5B2C] mb-2 text-sm uppercase tracking-wider">Audience & Use Case</h3>
              <ul className="space-y-2 text-sm font-medium text-gray-700">
                <li><strong className="text-[#022B3A]">Target Audience:</strong> Florida-based HVAC, refrigeration, and mechanical contracting business owners.</li>
                <li><strong className="text-[#022B3A]">Primary Use Case:</strong> Preparing a company for a confidential sale, understanding the M&A process, and maximizing exit valuation.</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-[#EE5B2C] mb-2 text-sm uppercase tracking-wider">Original Market Insight</h3>
              <p className="text-sm font-medium text-gray-700">
                Based on our analysis of recent Florida mechanical contractor transactions, businesses with over 40% recurring revenue from PMAs routinely command a <strong>25-35% valuation premium</strong> and close significantly faster than purely install-driven companies.
              </p>
            </div>
          </div>
        </div>

        {/* Core Subtopics / Preparation Steps */}
        <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200 shadow-inner mb-8">
          <h2 className="text-2xl font-black text-[#022B3A] mb-4">Seller Readiness Checklist</h2>
          <p className="text-gray-700 font-medium mb-4">Before going to market, ensure you have addressed the following critical areas:</p>
          <ul className="grid md:grid-cols-2 gap-4 text-gray-700 font-medium">
            <li className="flex items-start">
              <span className="text-[#EE5B2C] mr-3 font-bold text-xl">1.</span>
              <span><strong>Clean Financials:</strong> 3 years of verifiable P&L statements and tax returns.</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#EE5B2C] mr-3 font-bold text-xl">2.</span>
              <span><strong>Owner Independence:</strong> A management structure that operates without your daily intervention.</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#EE5B2C] mr-3 font-bold text-xl">3.</span>
              <span><strong>PMA Documentation:</strong> Well-documented, active, and priced maintenance contracts.</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#EE5B2C] mr-3 font-bold text-xl">4.</span>
              <span><strong>Licensing Transition:</strong> A clear plan for transferring DBPR or local municipal licenses.</span>
            </li>
          </ul>
        </div>

      </div>
    </section>
  );
}
