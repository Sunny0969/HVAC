import React from 'react';

export default function BuyTopSummary() {
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
            Buying an HVAC business in Florida offers immediate cash flow and established customer bases, but it requires strict due diligence. The key to a successful acquisition is verifying preventative maintenance agreements (PMAs), retaining trained technicians, and navigating state licensing transfers governed by the <a href="http://www.myfloridalicense.com/dbpr/" target="_blank" rel="noopener noreferrer" className="text-[#EE5B2C] hover:underline font-bold">Florida Department of Business and Professional Regulation (DBPR)</a>.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 mt-6 border-t border-gray-200 pt-6">
            <div>
              <h3 className="font-bold text-[#EE5B2C] mb-2 text-sm uppercase tracking-wider">Audience & Use Case</h3>
              <ul className="space-y-2 text-sm font-medium text-gray-700">
                <li><strong className="text-[#022B3A]">Target Audience:</strong> Private equity groups, strategic acquirers, and entrepreneurs seeking to buy mechanical service companies.</li>
                <li><strong className="text-[#022B3A]">Primary Use Case:</strong> Identifying vetted Florida HVAC acquisition targets, conducting financial due diligence, and securing funding.</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-[#EE5B2C] mb-2 text-sm uppercase tracking-wider">Original Market Insight</h3>
              <p className="text-sm font-medium text-gray-700">
                Based on our direct transaction experience across 50+ Florida acquisitions, buyers who secure SBA financing or seller-financing notes close deals <strong>40% faster</strong> than those relying on traditional commercial bank loans.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
