import React from 'react';
import Link from 'next/link';

export default function HomeTopSummary() {
  return (
    <section className="w-full bg-white py-12 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Summary / Bottom Line Answer */}
        <div className="bg-[#022B3A]/5 border border-[#022B3A]/10 p-8 rounded-[2rem] mb-12 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 left-0 w-2 h-full bg-[#EE5B2C]"></div>
          <h2 className="text-2xl font-black text-[#022B3A] mb-4">Bottom Line Summary</h2>
          <p className="text-lg text-gray-700 font-medium leading-relaxed mb-6">
            Selling a Florida HVAC business requires specialized valuation methods that general business brokers often miss. By properly valuing preventative maintenance agreements (PMAs) and recasting financials to <a href="https://www.ibba.org/" target="_blank" rel="noopener noreferrer" className="text-[#EE5B2C] hover:underline font-bold">IBBA (International Business Brokers Association)</a> standards, owners can secure significantly higher exit multiples.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 mt-6 border-t border-gray-200 pt-6">
            <div>
              <h3 className="font-bold text-[#EE5B2C] mb-2 text-sm uppercase tracking-wider">Audience & Use Case</h3>
              <ul className="space-y-2 text-sm font-medium text-gray-700">
                <li><strong className="text-[#022B3A]">Target Audience:</strong> Florida-based HVAC, refrigeration, and plumbing business owners.</li>
                <li><strong className="text-[#022B3A]">Primary Use Case:</strong> Preparing a company for sale, determining fair market value, and securing a qualified buyer confidentially.</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-[#EE5B2C] mb-2 text-sm uppercase tracking-wider">Original Market Data</h3>
              <p className="text-sm font-medium text-gray-700">
                Based on our analysis of recent Florida mechanical contractor transactions, businesses with over 40% recurring revenue (PMAs) frequently sell for a <strong>25-35% premium</strong> over standard construction-heavy HVAC firms.
              </p>
            </div>
          </div>
        </div>

        {/* Comparison Table for Decision Support */}
        <div className="mb-12">
          <h2 className="text-3xl font-black text-[#022B3A] mb-6 text-center">Decision Guide: How to Sell Your HVAC Business</h2>
          <div className="overflow-x-auto bg-white rounded-2xl shadow-lg border border-gray-100 p-2">
            <table className="w-full text-left border-collapse min-w-[600px]">
              <thead>
                <tr>
                  <th className="p-4 font-bold text-gray-900 border-b-2 border-gray-100 text-lg w-1/3">Selling Approach</th>
                  <th className="p-4 font-black text-white bg-[#022B3A] border-b-2 border-[#022B3A] text-lg rounded-tl-xl w-1/3">Specialized HVAC Broker (Us)</th>
                  <th className="p-4 font-bold text-gray-500 border-b-2 border-gray-100 text-lg w-1/3">General Business Broker</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="p-4 font-medium text-gray-700">Best For</td>
                  <td className="p-4 font-bold text-[#EE5B2C] bg-[#022B3A]/5">Maximizing valuation via PMAs & Tech retention</td>
                  <td className="p-4 text-gray-500">Retail stores, restaurants, generic services</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-gray-700">Buyer Network</td>
                  <td className="p-4 font-bold text-[#EE5B2C] bg-[#022B3A]/5">HVAC Consolidators & Private Equity</td>
                  <td className="p-4 text-gray-500">Local public listing boards (BizBuySell)</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-gray-700">Licensing Transition</td>
                  <td className="p-4 font-bold text-[#EE5B2C] bg-[#022B3A]/5">Expert guidance on FL DBPR requirements</td>
                  <td className="p-4 text-gray-500">Often overlooked until closing delays</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Checklist for Sellers */}
        <div className="bg-gray-50 rounded-[2rem] p-8 md:p-12 border border-gray-200">
          <h2 className="text-2xl font-black text-[#022B3A] mb-6">Exit Readiness Checklist</h2>
          <p className="text-gray-700 font-medium mb-6">Before engaging buyers, ensure you have the following operational benchmarks documented:</p>
          <ul className="grid md:grid-cols-2 gap-4 text-gray-700 font-medium">
            <li className="flex items-start">
              <span className="text-[#EE5B2C] mr-3 font-bold text-xl">✓</span>
              <span><strong>Clean Financials:</strong> 3 years of P&L statements matching tax returns.</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#EE5B2C] mr-3 font-bold text-xl">✓</span>
              <span><strong>PMA Documentation:</strong> Active, priced, and transferable maintenance agreements.</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#EE5B2C] mr-3 font-bold text-xl">✓</span>
              <span><strong>Owner Independence:</strong> A management team that can operate without you.</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#EE5B2C] mr-3 font-bold text-xl">✓</span>
              <span><strong>Licensing Clarity:</strong> A clear path for license transition post-sale.</span>
            </li>
          </ul>
        </div>

      </div>
    </section>
  );
}
