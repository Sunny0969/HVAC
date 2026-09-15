import React from "react";
import Link from "next/link";

export default function ClosingSection() {
  return (
    <section className="w-full bg-white py-24 border-t border-gray-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-5xl font-black text-[#022B3A] mb-6 tracking-tight">
          Ready for the Next Step?
        </h2>
        <p className="text-xl md:text-2xl text-gray-600 mb-10 leading-relaxed font-medium">
          A confidential conversation can help you understand what buyers may value, which records will be needed and whether your company is ready for the market.
        </p>
        <Link 
          href="/free-valuation"
          className="inline-block px-10 py-5 bg-[#EE5B2C] hover:bg-orange-600 text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition-all text-xl"
        >
          Start My Confidential Review
        </Link>
      </div>
    </section>
  );
}
