"use client";

import React, { useState } from 'react';

const faqs = [
  {
    q: "Why use an HVAC-focused business broker?",
    a: "An HVAC-focused broker can evaluate maintenance agreements, technician capacity, licensing, seasonal working capital, service and installation mix, warranties, fleet requirements, and other industry-specific issues that may affect price and transaction structure."
  },
  {
    q: "How are prospective buyers screened?",
    a: "A buyer should provide a completed profile, signed NDA, proof of funds, and, when financing is involved, evidence of lender or SBA readiness. Relevant operational experience and licensing plans should also be evaluated."
  },
  {
    q: "How does specialized positioning support value?",
    a: "Accurate positioning explains the quality and transferability of earnings rather than relying on revenue alone. It can highlight recurring service revenue, route density, management depth, technician stability, brand reputation, and documented growth opportunities."
  },
  {
    q: "When is the brokerage fee paid?",
    a: "The applicable engagement agreement controls the fee. In a success-fee structure, the brokerage commission is generally earned and paid when the transaction closes, subject to the specific terms of the signed agreement."
  }
];

export default function WhySellFaq() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="max-w-4xl mx-auto my-16 bg-white rounded-[2rem] p-8 md:p-12 shadow-xl shadow-gray-200/50 border border-gray-100">
      <h2 className="text-3xl font-black text-[#022B3A] mb-8 text-center">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border border-gray-200 rounded-xl overflow-hidden bg-gray-50">
            <button
              onClick={() => setOpenFaq(openFaq === index ? null : index)}
              className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none hover:bg-gray-100 transition-colors"
            >
              <span className="font-bold text-[#022B3A] text-lg pr-4">{faq.q}</span>
              <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-white shadow-sm text-[#EE5B2C]">
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
