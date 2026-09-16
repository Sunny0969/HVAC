"use client";

import React, { useState } from 'react';

const faqs = [
  {
    q: "What does the HVAC valuation calculator estimate?",
    a: "The calculator provides a preliminary opinion-of-value range using financial inputs and selected operating-quality factors. It is an educational starting point, not a certified appraisal, listing price, financing commitment, or guarantee of a sale price."
  },
  {
    q: "Should I enter SDE or EBITDA in the calculator?",
    a: "Use the earnings measure requested by the calculator and avoid entering the same owner adjustments twice. Smaller owner-operated companies are often discussed using SDE, while larger professionally managed companies may be analyzed using EBITDA."
  },
  {
    q: "Why might the final valuation differ from the calculator result?",
    a: "The final opinion may change after reviewing tax returns, financial statements, add-backs, assets, vehicles, inventory, maintenance agreements, customer concentration, technician retention, licensing, service territory, growth trends, buyer demand, and deal structure."
  },
  {
    q: "Does the calculator result guarantee what a buyer will pay?",
    a: "No. A transaction value is determined through buyer interest, verified financial performance, due diligence, financing, negotiated terms, asset condition, risk allocation, and market conditions at the time of sale."
  }
];

export default function CalculatorFaq() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-xl shadow-gray-200/50 border border-gray-100 my-12">
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
