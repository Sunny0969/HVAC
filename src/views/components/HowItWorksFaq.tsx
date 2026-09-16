"use client";

import React, { useState } from 'react';

const faqs = [
  {
    q: "What are the main stages of selling an HVAC company?",
    a: "The process generally includes a confidential consultation, financial and operational review, valuation and preparation, blind market positioning, buyer screening, offer and contract negotiation, escrow, due diligence, required approvals, and closing."
  },
  {
    q: "When is the company name disclosed to a buyer?",
    a: "Identifying information is normally withheld until the buyer signs the NDA, demonstrates financial qualification, and is approved to receive the next level of information."
  },
  {
    q: "What happens after a purchase contract is signed?",
    a: "The buyer funds the required escrow deposit and conducts due diligence within the contractual period. The parties also work through financing, licensing, landlord approval, lien searches, final documents, transition planning, and closing conditions."
  },
  {
    q: "How can a seller reduce closing delays?",
    a: "Maintain organized financial records, resolve tax or lien issues early, document add-backs, update leases and licenses, prepare asset and contract schedules, answer diligence questions promptly, and avoid undisclosed changes to the business."
  }
];

export default function HowItWorksFaq() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <section className="w-full bg-white py-20 border-t border-gray-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-black text-[#022B3A] text-center mb-10">Frequently Asked Questions</h2>
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
    </section>
  );
}
