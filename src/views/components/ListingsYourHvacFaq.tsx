"use client";

import React, { useState } from 'react';

const faqs = [
  {
    q: "Why are some listing details limited?",
    a: "Confidential HVAC listings usually omit the company name, exact address, customer identities, employee information, and other details that could identify the seller. Additional information is released only after buyer screening."
  },
  {
    q: "How do I request financial information for a listing?",
    a: "Complete the inquiry, sign the NDA, and provide proof of funds. Once qualified, you may receive the confidential information memorandum and approved financial information before a broker-hosted seller conference."
  },
  {
    q: "Does an asking price include working capital, inventory, vehicles, and real estate?",
    a: "Not automatically. Included assets and required working capital vary by listing and must be confirmed in the confidential materials and purchase contract. Real estate may be included, leased, or offered separately."
  },
  {
    q: "Can I submit an offer without an escrow deposit?",
    a: "A serious purchase contract should include an escrow deposit appropriate to the transaction. The deposit demonstrates commitment and supports an orderly due-diligence process; its disposition is governed by the signed contract."
  }
];

export default function ListingsYourHvacFaq() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="bg-[#F8FAFC] rounded-[2rem] p-8 md:p-12 shadow-xl shadow-gray-200/50 border border-gray-100">
      <h2 className="text-3xl font-black text-[#022B3A] mb-8">Frequently Asked Questions</h2>
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
