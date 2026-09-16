"use client";

import React, { useState } from 'react';

const faqs = [
  {
    q: "Can I contact HVAC Exit Advisors without revealing my company publicly?",
    a: "Yes. Initial inquiries are handled privately. Provide only the information needed to arrange a confidential discussion, and confirm a secure method before sending detailed financial, employee, customer, or contract records."
  },
  {
    q: "What should I include in my first message?",
    a: "State whether you are buying or selling, your preferred contact method, general location, approximate company size or acquisition criteria, timing, and the main question you want to discuss. Detailed confidential documents can follow through an approved process."
  },
  {
    q: "How quickly will an advisor determine whether the opportunity is a fit?",
    a: "Fit can often be discussed during the initial conversation, but a meaningful recommendation may require financial and operating information, buyer qualifications, licensing considerations, or confirmation of the owner's expectations."
  },
  {
    q: "Is the initial consultation a commitment to hire the firm?",
    a: "No. The consultation allows both sides to assess goals, scope, timing, expectations, and potential fit. Any representation must be established in a separate written agreement."
  }
];

export default function ContactUsFaq() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <section className="w-full bg-white py-16">
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
