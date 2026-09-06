"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import type { FaqCategory } from "../../lib/faq-data";

export default function FaqAccordionList({ categories }: { categories: FaqCategory[] }) {
  // Track which FAQ is open. We'll use a string like "categoryIndex-itemIndex"
  const [openId, setOpenId] = useState<string | null>(null);

  useEffect(() => {
    const handleOpen = (e: Event) => {
      const customEvent = e as CustomEvent<string>;
      // Extract the 'categoryIndex-itemIndex' from the 'question-X-Y' id
      if (customEvent.detail.startsWith('question-')) {
        const id = customEvent.detail.replace('question-', '');
        setOpenId(id);
      }
    };
    
    window.addEventListener('faq-open', handleOpen);
    
    // Check initial hash on mount
    if (window.location.hash) {
      const hash = window.location.hash.substring(1);
      if (hash.startsWith('question-')) {
        setOpenId(hash.replace('question-', ''));
      }
    }
    
    return () => window.removeEventListener('faq-open', handleOpen);
  }, []);

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="space-y-16">
      {categories.map((cat, catIdx) => (
        <section key={catIdx} id={`category-${catIdx}`} className="scroll-mt-32">
          {/* Category H2 */}
          <h2 className="text-3xl font-black text-[#022B3A] mb-8 pb-4 border-b-2 border-gray-200">
            {cat.category}
          </h2>
          
          <div className="space-y-4">
            {cat.items.map((item, itemIdx) => {
              const id = `${catIdx}-${itemIdx}`;
              const isOpen = openId === id;
              
              return (
                <div 
                  key={itemIdx}
                  id={`question-${catIdx}-${itemIdx}`}
                  className={`scroll-mt-32 bg-white rounded-2xl shadow-sm border transition-colors ${isOpen ? 'border-[#EE5B2C]' : 'border-gray-100'}`}
                >
                  <button 
                    onClick={() => toggle(id)}
                    className="w-full text-left p-6 md:p-8 flex justify-between items-center focus:outline-none group"
                    aria-expanded={isOpen}
                  >
                    {/* Question H3 */}
                    <h3 className="text-xl font-bold text-[#022B3A] group-hover:text-[#EE5B2C] transition-colors pr-6">
                      {item.q}
                    </h3>
                    <span 
                      className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-[#EE5B2C] text-white rotate-180' : 'bg-gray-50 text-[#EE5B2C] rotate-0'}`} 
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </button>
                  
                  {/* Answer rendered permanently in DOM for SEO, visually toggled via height */}
                  <motion.div
                    initial={false}
                    animate={{ 
                      height: isOpen ? "auto" : 0, 
                      opacity: isOpen ? 1 : 0 
                    }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    style={{ overflow: "hidden" }}
                  >
                    <div className="px-6 md:px-8 pb-8 pt-0 text-gray-700 text-lg font-medium border-t border-gray-50 mt-2">
                      <p className="pt-4 leading-relaxed">
                        {item.aNode || item.a}
                      </p>
                      
                      {/* Compliance Note: rendered for specific items implicitly through the copy, but let's add the disclaimer explicitly on licensing/tax items if needed, or rely on the user's provided copy. The user's provided copy includes "confirm with a licensing attorney" and "recommend looping in a tax professional", which satisfies the compliance note. */}
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </section>
      ))}
    </div>
  );
}
