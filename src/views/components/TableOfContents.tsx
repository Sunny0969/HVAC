"use client";

import { useState, useEffect } from "react";

interface TocItem {
  id: string;
  title: string;
}

export default function TableOfContents({ items }: { items: TocItem[] }) {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
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

    items.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });

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
      // Optionally update active immediately on click
      setActiveId(id);
    }
  };

  if (!items || items.length === 0) return null;

  return (
    <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100">
      <h3 className="text-xl font-black text-[#022B3A] mb-6 border-b border-gray-100 pb-3">
        Table of Contents
      </h3>
      <ul className="space-y-4">
        {items.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              onClick={(e) => handleClick(e, item.id)}
              className={`flex items-start text-[15px] transition-all duration-300 ${
                activeId === item.id
                  ? "text-[#EE5B2C] font-bold"
                  : "text-gray-600 hover:text-[#EE5B2C] font-medium"
              }`}
            >
              <svg 
                className={`w-4 h-4 mr-2.5 mt-0.5 flex-shrink-0 transition-transform duration-300 ${activeId === item.id ? 'text-[#EE5B2C] translate-x-1' : 'text-gray-300'}`} 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
              <span className="leading-snug">{item.title}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
