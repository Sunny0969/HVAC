const fs = require('fs');

const componentCode = `"use client";

import React, { useState } from 'react';

const faqs = [
  {
    q: "What types of companies does HVAC Exit Advisors represent?",
    a: "We focus on HVAC and related mechanical-service businesses, including residential and commercial heating and cooling contractors, refrigeration companies, maintenance-agreement businesses, indoor-air-quality providers, ductwork and controls specialists, and selected plumbing or electrical contractors connected to mechanical services."
  },
  {
    q: "Can I speak with an advisor before deciding to sell?",
    a: "Yes. An initial confidential conversation can help you understand likely value drivers, records buyers may request, possible timing, and whether the company is ready for the market. You are not required to make an immediate decision to sell."
  },
  {
    q: "How is confidentiality protected during an HVAC business sale?",
    a: "The business can be marketed through a blind profile that excludes identifying details. Prospective buyers should sign a nondisclosure agreement and provide financial qualification before receiving protected information or speaking with the seller."
  },
  {
    q: "What makes an HVAC business attractive to buyers?",
    a: "Buyers commonly examine adjusted earnings, recurring maintenance agreements, technician retention, management depth, service and replacement revenue, customer concentration, licensing arrangements, fleet condition, accurate records, reputation, and the degree to which the company can operate without the owner."
  }
];

export default function HomeFaq() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <section className="w-full bg-white py-16 border-t border-gray-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#F8FAFC] rounded-[2rem] p-8 md:p-12 shadow-xl shadow-gray-200/50 border border-gray-100">
          <h2 className="text-3xl font-black text-[#022B3A] mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-xl overflow-hidden bg-white">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none hover:bg-gray-50 transition-colors"
                >
                  <span className="font-bold text-[#022B3A] text-lg pr-4">{faq.q}</span>
                  <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-[#E3F2FD] shadow-sm text-[#EE5B2C]">
                    <svg
                      className="w-5 h-5 transition-transform duration-300"
                      style={{ transform: openFaq === index ? 'rotate(180deg)' : 'rotate(0deg)' }}
                      fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </button>
                
                <div
                  className="transition-all duration-300 ease-in-out"
                  style={{
                    maxHeight: openFaq === index ? '500px' : '0',
                    opacity: openFaq === index ? 1 : 0,
                    overflow: 'hidden'
                  }}
                >
                  <div className="px-6 pb-5 text-gray-700 font-medium leading-relaxed">
                    {faq.a}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
`;

fs.writeFileSync('src/views/components/HomeFaq.tsx', componentCode);
console.log("Created src/views/components/HomeFaq.tsx");
