"use client";

import React, { useState } from 'react';

const faqs = [
  {
    q: "Is the initial confidential valuation a certified appraisal?",
    a: "No. The initial review is an advisory estimate intended to help an owner understand a potential market range. A certified appraisal or formal valuation engagement is separate and may be required for litigation, tax, partnership, or financing purposes."
  },
  {
    q: "What information is needed for the initial review?",
    a: "Helpful information includes annual revenue, adjusted SDE or EBITDA, years in operation, service territory, residential and commercial mix, employee and technician counts, maintenance agreements, owner responsibilities, reason for selling, and desired timing."
  },
  {
    q: "Will submitting the valuation form obligate me to sell?",
    a: "No. The request begins a private discussion and does not create a listing obligation. Any brokerage engagement should be documented separately and reviewed before the business is marketed."
  },
  {
    q: "Will my information be shared with buyers?",
    a: "Not merely because you requested a valuation. Protected company information should be shared only with your authorization and through a controlled process after the prospective buyer satisfies confidentiality and qualification requirements."
  }
];

export default function FreeValuationFaq() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-xl shadow-gray-200/50 border border-gray-100 mt-10">
      <h2 className="text-3xl font-black text-[#022B3A] mb-8">Frequently Asked Questions</h2>
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
