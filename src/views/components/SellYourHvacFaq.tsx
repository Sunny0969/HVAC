"use client";

import React, { useState } from 'react';

const faqs = [
  {
    q: "What should I prepare before selling my HVAC business?",
    a: "Prepare three years of tax returns and profit-and-loss statements, current year-to-date financials, a balance sheet, payroll and owner compensation details, maintenance-agreement data, revenue by service category, fleet and equipment schedules, lease information, licensing arrangements, and major customer or vendor information."
  },
  {
    q: "Will employees and customers be told that the business is for sale?",
    a: "Not during confidential marketing. Employees, customers, vendors, and competitors should not be contacted without the seller's prior written authorization and the permissions established in the transaction documents."
  },
  {
    q: "Is the highest offer always the best offer?",
    a: "No. A seller should compare cash at closing, financing contingencies, escrow, seller financing, earnouts, working-capital requirements, assumed liabilities, transition obligations, licensing conditions, and the buyer's actual ability to close."
  },
  {
    q: "How long does it take to sell an HVAC business?",
    a: "Timing varies with preparation, price, buyer qualification, financing, licensing, landlord approval, due diligence, and legal documentation. A well-prepared cash transaction may close faster, while an SBA-financed or more complex transaction can take several months."
  },
  {
    q: "How do maintenance agreements affect the final valuation?",
    a: "Active preventative maintenance agreements (PMAs) demonstrate predictable, recurring cash flow to a potential buyer. Properly documented and transferable PMAs can often increase the final exit multiple significantly compared to a purely install-driven company, as they reduce risk for the acquirer."
  }
];

export default function SellYourHvacFaq() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="bg-[#F8FAFC] rounded-[2rem] p-8 md:p-12 shadow-xl shadow-gray-200/50 border border-gray-100">
      <h2 className="text-3xl font-black text-[#022B3A] mb-8">Frequently Asked Questions About Selling</h2>
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
