const fs = require('fs');

const componentCode = `"use client";
import React from 'react';

export default function HowMuchWorth() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-black text-[#022B3A] mb-8">How Much Is an HVAC Business Worth?</h2>
        <p className="text-lg text-gray-700 leading-relaxed font-medium mb-8">
          When determining how to value a heating and air conditioning business, buyers and brokers analyze several critical performance metrics and operational factors:
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm">
            <h3 className="font-bold text-xl text-[#022B3A] mb-3">Revenue</h3>
            <p className="text-gray-600 text-sm font-medium">Top-line sales performance indicates market size and operational scale. Consistent year-over-year revenue growth makes a business significantly more attractive.</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm">
            <h3 className="font-bold text-xl text-[#022B3A] mb-3">SDE (Seller\'s Discretionary Earnings)</h3>
            <p className="text-gray-600 text-sm font-medium">SDE is the pre-tax cash flow available to an owner-operator. Most HVAC businesses under $5M in revenue are valued on a multiple of SDE.</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm">
            <h3 className="font-bold text-xl text-[#022B3A] mb-3">EBITDA</h3>
            <p className="text-gray-600 text-sm font-medium">Earnings Before Interest, Taxes, Depreciation, and Amortization. Larger commercial HVAC operations and private equity roll-ups use EBITDA multiples for valuation.</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm">
            <h3 className="font-bold text-xl text-[#022B3A] mb-3">Recurring Revenue & PMA Contracts</h3>
            <p className="text-gray-600 text-sm font-medium">Preventative Maintenance Agreements (PMAs) generate predictable recurring revenue. High PMA counts drastically increase the final multiple applied to the business.</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm">
            <h3 className="font-bold text-xl text-[#022B3A] mb-3">Customer Concentration</h3>
            <p className="text-gray-600 text-sm font-medium">If a single general contractor or client accounts for more than 15-20% of revenue, buyers perceive higher risk, which can negatively impact the valuation.</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm">
            <h3 className="font-bold text-xl text-[#022B3A] mb-3">Technician Retention</h3>
            <p className="text-gray-600 text-sm font-medium">A stable, long-tenured team of licensed HVAC technicians is a massive asset. High turnover reduces value and increases buyer hesitation.</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm">
            <h3 className="font-bold text-xl text-[#022B3A] mb-3">Owner Dependence</h3>
            <p className="text-gray-600 text-sm font-medium">If the owner is the primary salesperson or lead technician, the business is harder to transition. Decentralized management structures yield higher valuations.</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm">
            <h3 className="font-bold text-xl text-[#022B3A] mb-3">Geographic Market</h3>
            <p className="text-gray-600 text-sm font-medium">Operating in high-growth, affluent demographics (like certain Florida coasts) supports premium valuations due to higher demand and pricing power.</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm md:col-span-2">
            <h3 className="font-bold text-xl text-[#022B3A] mb-3">Equipment / Fleet</h3>
            <p className="text-gray-600 text-sm font-medium">The age and condition of service vans and installation equipment are factored in. Modern, well-maintained fleets require less immediate capital expenditure from a new buyer.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
`;

fs.writeFileSync('src/views/components/HowMuchWorth.tsx', componentCode);
console.log("Created HowMuchWorth component");
