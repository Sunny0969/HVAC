import React from 'react';

const industries = [
  "Residential HVAC contractors",
  "Commercial and industrial HVAC companies",
  "Heating and air-conditioning businesses",
  "Refrigeration and cold-storage contractors",
  "Plumbing, electrical, and mechanical service companies",
  "Indoor air-quality and ventilation specialists",
  "HVAC maintenance and service-contract businesses",
  "HVAC installation and replacement companies",
  "HVAC equipment distributors and suppliers",
  "Energy-efficiency and building-automation companies",
  "Specialty contractors (ductwork, insulation, controls)",
  "HVAC franchises and multi-location businesses"
];

export default function IndustriesWeServe() {
  return (
    <section className="w-full bg-[#F7F5F0] py-16 border-t border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-black text-[#022B3A] tracking-tight mb-4">
            Who We Serve
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-700 font-medium">
            We work with owners and qualified buyers of residential HVAC, commercial HVAC, refrigeration, plumbing, electrical, mechanical contracting, indoor air quality, ductwork and related service companies.
          </p>
          <div className="w-24 h-1 bg-[#EE5B2C] mx-auto mt-6 rounded-full"></div>
        </div>

        {/* CSS Grid for exactly 6 columns, resulting in 2 rows on large screens */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {industries.map((industry, index) => (
            <div 
              key={index}
              className="bg-white border border-gray-100 shadow-sm hover:shadow-md hover:border-orange-200 hover:-translate-y-1 transition-all duration-300 rounded-2xl p-4 flex flex-col items-center justify-center text-center group min-h-[110px]"
            >
              <div className="w-8 h-8 rounded-full bg-orange-50 flex items-center justify-center mb-3 text-[#EE5B2C] group-hover:bg-[#EE5B2C] group-hover:text-white transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
              </div>
              <p className="text-xs sm:text-sm font-bold text-gray-700 group-hover:text-[#022B3A] leading-snug">
                {industry}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
