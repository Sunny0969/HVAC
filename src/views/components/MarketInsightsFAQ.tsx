
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const insights = [
  {
    q: "Why Florida HVAC Businesses Are in High Demand?",
    a: "Florida's climate ensures that HVAC is never a seasonal luxury - it is a year-round critical necessity. Constant high temperatures, extreme humidity, and salty coastal air cause systems to run harder and degrade faster than the national average, leading to frequent repairs and replacements. Combined with explosive population growth and booming real estate markets, Florida offers a permanent, recession-resistant demand curve for mechanical contractors."
  },
  {
    q: "What Buyers Evaluate in a Florida HVAC Business?",
    a: "Sophisticated buyers - whether private equity firms or individual investors - look beyond gross revenue. They focus on Seller's Discretionary Earnings (SDE), the total number of active Preventative Maintenance Agreements (PMAs), technician retention rates, and the revenue mix (favoring high-margin service and replacement over low-margin new construction). A business with clean books and low owner dependency will always command a premium multiple."
  },
  {
    q: "Why Florida HVAC Owners Choose HVAC Exit Advisors?",
    a: "Unlike generalist business brokers who sell everything from gas stations to restaurants, we specialize exclusively in the HVAC industry. We know how to properly value your maintenance contracts, recast your financials to show true SDE, and market your business to a pre-vetted network of qualified buyers - all while maintaining strict, ironclad confidentiality so your employees and competitors never know you are selling until the deal is closed."
  }
];

export default function MarketInsightsFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="w-full bg-white py-24 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
        
        {/* Left Column: Heading */}
        <div className="w-full lg:w-[40%] sticky top-28">
          <span className="text-xs font-bold uppercase tracking-wider text-[#EE5B2C] bg-orange-100 px-3 py-1 rounded-full inline-block mb-4">
            Market Insights
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-[#022B3A] mb-6 tracking-tight leading-tight">
            The Florida HVAC Market Advantage
          </h2>
          <p className="text-lg text-gray-600 font-medium leading-relaxed mb-8">
            Whether you are building your business for a future exit or actively preparing to sell, understanding the dynamics of the Florida market is the key to maximizing your valuation.
          </p>
          <div className="w-16 h-2 bg-[#EE5B2C] rounded-full"></div>
        </div>

        {/* Right Column: Accordion */}
        <div className="w-full lg:w-[60%] flex flex-col gap-4">
          {insights.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div 
                key={index} 
                className={`border rounded-2xl overflow-hidden transition-all duration-300 ${isOpen ? 'border-[#EE5B2C] bg-orange-50/50 shadow-md' : 'border-gray-200 bg-white hover:border-[#EE5B2C]/50'}`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between p-6 md:p-8 text-left focus:outline-none group"
                >
                  <h3 className={`text-xl md:text-2xl font-bold pr-8 transition-colors ${isOpen ? 'text-[#EE5B2C]' : 'text-[#022B3A] group-hover:text-[#EE5B2C]'}`}>
                    {item.q}
                  </h3>
                  <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-transform duration-300 ${isOpen ? 'bg-[#EE5B2C] text-white rotate-180' : 'bg-gray-100 text-gray-500 group-hover:bg-orange-100 group-hover:text-[#EE5B2C]'}`}>
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>
                
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 md:px-8 pb-8 pt-2">
                        <div className="w-full h-px bg-gray-200/50 mb-6"></div>
                        <p className="text-lg text-gray-700 leading-relaxed font-medium">
                          <strong>Short Answer:</strong> {item.a}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
        
      </div>
    </section>
  );
}
