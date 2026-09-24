"use client";

import React from "react";
import Link from "next/link";

export default function BuyerProcessContent() {
  const steps = [
    {
      number: "01",
      title: "Registration & Qualification",
      description: "Before reviewing confidential details of any business hvac opportunity, buyers must sign a Non-Disclosure Agreement (NDA) and provide a buyer profile with proof of funds. This ensures our sellers' confidentiality and verifies you have the financial capacity to close."
    },
    {
      number: "02",
      title: "Reviewing the Prospectus",
      description: "Once qualified, you will receive a Confidential Information Memorandum (CIM) for the business hvac listings you are interested in. This document outlines historical financials, employee structures, vehicle fleet, and recurring maintenance agreement data."
    },
    {
      number: "03",
      title: "Seller Meeting & Site Visit",
      description: "If the business hvac fits your acquisition criteria, we schedule a confidential meeting with the seller. This is your opportunity to ask operational questions, understand the local market, and see the facility without alerting staff or competitors."
    },
    {
      number: "04",
      title: "Letter of Intent (LOI) & Offer",
      description: "When you are ready to move forward, you submit a formal offer outlining the purchase price, deal structure, and transition terms. We help facilitate negotiations to reach a mutually beneficial agreement for the business hvac."
    },
    {
      number: "05",
      title: "Due Diligence",
      description: "During this period, you and your advisors will verify the financial, legal, and operational aspects of the business hvac. We provide a secure data room to streamline the review of tax returns, equipment lists, and client concentration."
    },
    {
      number: "06",
      title: "Financing & Closing",
      description: "We assist in coordinating with SBA lenders, attorneys, and escrow agents. Once financing is approved and closing documents are finalized, funds are transferred, and you officially take ownership of the business hvac."
    }
  ];

  return (
    <div className="py-16 md:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-[#022B3A] mb-6">A Structured Path to Acquisition</h2>
          <p className="text-lg text-gray-700 font-medium leading-relaxed">
            Acquiring a business hvac is a complex transaction that requires transparency and structure. Our buyer process is designed to give you the information you need while protecting the ongoing operations of the companies we represent.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-16">
          {steps.map((step, idx) => (
            <div key={idx} className="flex flex-col md:flex-row gap-6 group">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-2xl bg-gray-50 border border-gray-100 shadow-sm flex items-center justify-center text-2xl font-black text-[#EE5B2C] group-hover:bg-[#EE5B2C] group-hover:text-white transition-colors duration-300">
                  {step.number}
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#022B3A] mb-3 group-hover:text-[#EE5B2C] transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-gray-600 font-medium leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-[#022B3A] rounded-[2rem] p-10 md:p-16 text-center shadow-2xl">
          <h3 className="text-3xl font-black text-white mb-6">Ready to Start Your Search?</h3>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto font-medium">
            Register as a qualified buyer today to gain exclusive access to premium business hvac opportunities across Florida.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              href="/contact-us" 
              className="px-8 py-4 bg-[#EE5B2C] hover:bg-orange-600 text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5"
            >
              Register Now
            </Link>
            <Link 
              href="/listings" 
              className="px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold rounded-lg transition-colors"
            >
              Browse Public Listings
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
