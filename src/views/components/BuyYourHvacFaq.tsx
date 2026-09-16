"use client";

import React, { useState } from 'react';

const faqs = [
  {
    q: "What must I provide before receiving confidential HVAC business information?",
    a: "A buyer should sign the NDA and provide proof of funds. Financing-dependent buyers may also be asked for a lender letter or SBA prequalification before detailed financials, seller contact, or a private meeting is arranged."
  },
  {
    q: "Can I speak with employees or customers during due diligence?",
    a: "No, unless the seller gives prior written authorization. HVAC transactions are handled confidentially, and unauthorized contact can harm employee retention, customer relationships, and the transaction."
  },
  {
    q: "What should I verify during HVAC due diligence?",
    a: "Review tax returns, financial statements, bank support, revenue by service type, maintenance-agreement records, customer concentration, payroll, technician credentials, licensing, fleet and equipment, leases, warranties, litigation, liens, working capital, and required future capital expenditures."
  },
  {
    q: "Is a letter of intent required to buy an HVAC business?",
    a: "HVAC Exit Advisors generally reserves letters of intent for transactions of $10 million or more or unusually complex deals. Smaller transactions normally proceed through a purchase contract supported by an escrow deposit and a defined due-diligence period."
  }
];

export default function BuyYourHvacFaq() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="bg-[#F8FAFC] rounded-[2rem] p-8 md:p-12 shadow-xl shadow-gray-200/50 border border-gray-100">
      <h2 className="text-3xl font-black text-[#022B3A] mb-8">Frequently Asked Questions About Buying</h2>
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
  );
}
