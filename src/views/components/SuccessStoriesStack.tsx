"use client";
import React from "react";
import Link from "next/link";

export default function SuccessStoriesStack() {
  return (
    <div className="relative w-full pb-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center">
      <div className="bg-white border border-gray-200 rounded-3xl p-10 md:p-16 shadow-xl text-center">
        <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-6 text-gray-500">
          <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
        </div>
        <h3 className="text-2xl md:text-3xl font-black text-[#022B3A] mb-4">Strict Confidentiality Policy</h3>
        <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
          To protect the identities, employees, and customer relationships of the HVAC owners we represent, we operate under strict Non-Disclosure Agreements (NDAs). We do not publish specific financial details, closing dates, or company names of our sold transactions online.
        </p>
        <p className="text-gray-500 mb-8">
          During a private consultation, we can discuss general market trends and blinded transaction profiles relevant to your specific HVAC business model, service mix, and region.
        </p>
        <Link href="/contact-us" className="inline-block px-8 py-4 bg-[#EE5B2C] hover:bg-orange-600 text-white font-bold rounded-lg shadow-lg transition-all text-lg">
          Request a Confidential Valuation
        </Link>
      </div>
    </div>
  );
}
