import React from "react";

export default function WhatBuyersEvaluate() {
  const evaluateItems = [
    "Adjusted seller discretionary earnings or EBITDA",
    "Recurring maintenance agreements and renewal history",
    "Residential, commercial, service, replacement and installation revenue mix",
    "Technician stability, certifications and management depth",
    "Customer concentration and quality of commercial contracts",
    "Owner involvement and transferability of customer relationships",
    "Fleet condition, equipment and expected capital requirements",
    "Licensing, qualifying-agent and regulatory requirements",
    "Financial records, tax returns and consistency of reported earnings",
    "Market reputation, reviews and geographic service density"
  ];

  return (
    <section className="w-full bg-white py-20 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-[#022B3A] tracking-tight mb-6">
            What Buyers Evaluate
          </h2>
          <p className="text-xl text-gray-700 font-medium leading-relaxed">
            A buyer looks beyond annual revenue. The strength and transferability of future earnings often determine buyer interest, financing options and deal structure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
          {evaluateItems.map((item, index) => (
            <div key={index} className="flex items-start bg-gray-50 p-6 rounded-xl border border-gray-200 shadow-sm">
              <div className="flex-shrink-0 mr-4">
                <div className="w-8 h-8 rounded-full bg-[#EE5B2C]/10 flex items-center justify-center text-[#EE5B2C]">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
              <p className="text-lg text-[#022B3A] font-semibold leading-tight pt-1">
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
