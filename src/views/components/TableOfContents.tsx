"use client";

import { useState, useEffect } from "react";

export interface TocItem {
  id: string;
  title: string;
  level: number; // 2 for h2, 3 for h3
}

export default function TableOfContents({ items }: { items: TocItem[] }) {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    // Collect all elements to observe
    const elements = items.map((item) => document.getElementById(item.id)).filter(Boolean) as HTMLElement[];
    
    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-100px 0px -60% 0px" } 
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [items]);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      setActiveId(id);
    }
  };

  if (!items || items.length === 0) return null;

  return (
    <div className="bg-white p-6 md:p-8 rounded-[1.5rem] shadow-lg shadow-gray-200/50 border border-gray-100 relative">
      <h3 className="text-xl font-black text-[#022B3A] mb-6 border-b border-gray-100 pb-3 flex items-center gap-2">
        <svg className="w-5 h-5 text-[#EE5B2C]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
        </svg>
        Table of Contents
      </h3>
      <ul className="space-y-3">
        {items.map((item) => (
          <li 
            key={item.id} 
            className={`${item.level === 3 ? "ml-5 border-l-2 border-gray-100 pl-3" : ""}`}
          >
            <a
              href={`#${item.id}`}
              onClick={(e) => handleClick(e, item.id)}
              className={`flex items-start text-[14px] transition-all duration-300 ${
                activeId === item.id
                  ? "text-[#EE5B2C] font-bold"
                  : "text-gray-600 hover:text-[#EE5B2C] font-medium"
              }`}
            >
              {item.level === 2 && (
                <svg 
                  className={`w-3.5 h-3.5 mr-2 mt-0.5 flex-shrink-0 transition-transform duration-300 ${activeId === item.id ? 'text-[#EE5B2C] translate-x-1' : 'text-gray-300'}`} 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              )}
              {item.level === 3 && (
                <div className={`w-1.5 h-1.5 rounded-full mr-2 mt-1.5 flex-shrink-0 ${activeId === item.id ? 'bg-[#EE5B2C]' : 'bg-gray-300'}`} />
              )}
              <span className="leading-snug">{item.title}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
