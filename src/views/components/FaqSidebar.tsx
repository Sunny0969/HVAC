"use client";

import React, { useEffect, useState } from "react";
import type { FaqCategory } from "../../lib/faq-data";

export default function FaqSidebar({ categories }: { categories: FaqCategory[] }) {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
      const headings = Array.from(document.querySelectorAll("section[id^='category-'], div[id^='question-']"));
      
      let currentActiveId = "";
      // Find the last heading that is above the middle of the screen
      for (const heading of headings) {
        const rect = heading.getBoundingClientRect();
        if (rect.top <= 200) {
          currentActiveId = heading.id;
        }
      }
      
      if (currentActiveId) {
        setActiveId(currentActiveId);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Call once on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      // Tell the accordion to open this item
      window.dispatchEvent(new CustomEvent('faq-open', { detail: id }));

      // Offset for fixed header, deferred slightly so React layout changes (collapsing other items) complete first
      setTimeout(() => {
        const updatedElement = document.getElementById(id);
        if (updatedElement) {
          const y = updatedElement.getBoundingClientRect().top + window.scrollY - 100;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }, 50);
      
      // Update URL for sharability
      window.history.pushState(null, '', `#${id}`);
    }
  };

  return (
    <nav className="hidden lg:block sticky top-32 max-h-[calc(100vh-10rem)] overflow-y-auto pr-6 pb-8 scrollbar-thin">
      <h3 className="text-xl font-black text-[#022B3A] mb-8 uppercase tracking-wider">Table of Contents</h3>
      
      <div className="space-y-8">
        {categories.map((cat, catIdx) => {
          const catId = `category-${catIdx}`;
          const isCatActive = activeId === catId;
          
          return (
            <div key={catIdx}>
              <a 
                href={`#${catId}`}
                onClick={(e) => handleClick(e, catId)}
                className={`font-black block mb-3 py-2 transition-colors ${isCatActive ? 'text-[#EE5B2C]' : 'text-[#022B3A] hover:text-[#EE5B2C]'}`}
              >
                {cat.category}
              </a>
              
              <ul className="pl-4 space-y-3 border-l-2 border-gray-100">
                {cat.items.map((item, itemIdx) => {
                  const qId = `question-${catIdx}-${itemIdx}`;
                  const isQActive = activeId === qId;
                  
                  return (
                    <li key={itemIdx}>
                      <a 
                        href={`#${qId}`}
                        onClick={(e) => handleClick(e, qId)}
                        className={`text-sm block py-2 transition-colors line-clamp-2 leading-snug ${isQActive ? 'text-[#EE5B2C] font-bold' : 'text-gray-500 hover:text-[#EE5B2C]'}`}
                      >
                        {item.q}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </nav>
  );
}
