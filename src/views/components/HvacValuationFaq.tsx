"use client";

import React, { useState } from 'react';

const faqs = [
  {
    q: "Is an HVAC company valued on revenue or earnings?",
    a: "Most owner-operated companies are primarily evaluated using adjusted seller discretionary earnings, while larger manager-run companies may be evaluated using EBITDA. Revenue is relevant, but the quality, durability, and transferability of earnings usually matter more."
  },
  {
    q: "Which add-backs may be considered in an HVAC valuation?",
    a: "Potential adjustments may include documented owner compensation above a market replacement salary, personal expenses, nonrecurring costs, and certain discretionary expenses. Every adjustment must be supportable and acceptable to buyers and lenders."
  },
  {
    q: "Do maintenance agreements increase value?",
    a: "They can support value when agreements are active, transferable, properly priced, renewed consistently, and supported by reliable records. Buyers will examine revenue, deferred service obligations, renewal history, customer retention, and fulfillment costs."
  },
  {
    q: "What can reduce the value of an HVAC business?",
    a: "Weak records, heavy owner dependence, technician turnover, customer concentration, expiring leases, licensing uncertainty, old vehicles, underpriced contracts, warranty exposure, inconsistent margins, and large near-term capital needs may reduce value or change deal terms."
  }
];

export default function HvacValuationFaq() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-xl shadow-gray-200/50 border border-gray-100">
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
