import React from 'react';

export default function ListingsTopSummary() {
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
            Finding a highly profitable HVAC business for sale requires navigating confidential "blind profiles" and completing rigorous financial screening. As a specialized M&A advisor, we match qualified buyers with premium Florida contractors, ensuring compliance with <a href="https://www.sba.gov/" target="_blank" rel="noopener noreferrer" className="text-[#EE5B2C] hover:underline font-bold">Small Business Administration (SBA)</a> lending requirements and state licensing transfers.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 mt-6 border-t border-gray-200 pt-6">
            <div>
              <h3 className="font-bold text-[#EE5B2C] mb-2 text-sm uppercase tracking-wider">Audience & Use Case</h3>
              <ul className="space-y-2 text-sm font-medium text-gray-700">
                <li><strong className="text-[#022B3A]">Target Audience:</strong> Private equity groups, strategic HVAC consolidators, and well-funded individual investors.</li>
                <li><strong className="text-[#022B3A]">Primary Use Case:</strong> Browsing active, vetted Florida HVAC and mechanical service listings to pursue a strategic acquisition.</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-[#EE5B2C] mb-2 text-sm uppercase tracking-wider">Original Market Data</h3>
              <p className="text-sm font-medium text-gray-700">
                Based on our internal transaction data, premium HVAC listings in Florida receive an average of <strong>12-14 qualified inquiries</strong> within the first 30 days of market launch, and over 70% require buyers to inject at least 10-20% equity for financing.
              </p>
            </div>
          </div>
        </div>

        {/* Definition & Buyer Steps */}
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          
          <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-lg">
            <h2 className="text-2xl font-black text-[#022B3A] mb-4">What is a Blind Listing Profile?</h2>
            <p className="text-gray-700 font-medium leading-relaxed">
              A <strong>blind listing profile</strong> (also known as a teaser) is a generalized business overview designed to highlight financial performance, asset value, and growth potential while actively concealing the company name, specific address, and identifiable customer details. This ensures the seller's operations, employee retention, and competitor relationships remain entirely unaffected until a strict Non-Disclosure Agreement (NDA) is executed by a qualified buyer.
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200 shadow-inner">
            <h2 className="text-2xl font-black text-[#022B3A] mb-4">Buyer Next Steps (Checklist)</h2>
            <p className="text-gray-700 font-medium mb-4">To unlock full confidential details on any listing below, buyers must:</p>
            <ul className="space-y-3 text-gray-700 font-medium">
              <li className="flex items-start">
                <span className="text-[#EE5B2C] mr-3 font-bold text-xl">1.</span>
                <span><strong>Submit an Inquiry:</strong> Express interest in a specific listing ID.</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#EE5B2C] mr-3 font-bold text-xl">2.</span>
                <span><strong>Sign the NDA:</strong> Legally agree to maintain absolute confidentiality.</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#EE5B2C] mr-3 font-bold text-xl">3.</span>
                <span><strong>Provide Proof of Funds:</strong> Show liquid capital or SBA pre-qualification.</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#EE5B2C] mr-3 font-bold text-xl">4.</span>
                <span><strong>Review the CIM:</strong> Receive the full Confidential Information Memorandum.</span>
              </li>
            </ul>
          </div>
          
        </div>

      </div>
    </section>
  );
}
