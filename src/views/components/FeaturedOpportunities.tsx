"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { CarouselItem } from "./SpotlightCarousel";

interface FeaturedOpportunitiesProps {
  items: CarouselItem[];
}

export default function FeaturedOpportunities({ items }: FeaturedOpportunitiesProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  if (!items || items.length === 0) return null;

  const activeItem = items[activeIndex];

  // Create a shifted array so the active item is always at the first position
  const displayItems = [...items.slice(activeIndex), ...items.slice(0, activeIndex)];

  return (
    <section className="relative w-full min-h-[800px] flex items-center overflow-hidden bg-gray-900 py-20 text-white">
      {/* Background Image with AnimatePresence for smooth transitions */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeItem.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 z-0"
        >
          <Image
            src={activeItem.image || ""}
            alt={activeItem.title}
            fill
            className="object-cover"
          />
          {/* Dark gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/90 to-gray-900/40" />
        </motion.div>
      </AnimatePresence>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 flex flex-col lg:flex-row gap-12 items-center">
        
        {/* Left Side: Details */}
        <div className="w-full lg:w-[45%] flex flex-col">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-[2px] bg-[#EE5B2C]"></div>
            <span className="text-[#EE5B2C] font-bold tracking-widest text-sm uppercase">FEATURED OPPORTUNITIES</span>
          </div>
          
          <AnimatePresence mode="wait">
            <motion.div
              key={activeItem.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight drop-shadow-lg">
                {activeItem.title}
              </h2>
              <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-8 max-w-lg">
                {activeItem.content}
              </p>
              
              <div className="mb-6">
                <p className="text-xs text-gray-400 uppercase tracking-widest font-semibold mb-1">REVENUE / CASH FLOW</p>
                <div className="flex items-end gap-2">
                  <span className="text-4xl font-bold">{activeItem.tags?.[0] || "TBD"}</span>
                  <span className="text-[#EE5B2C] text-lg font-medium mb-1">/ {activeItem.tags?.[1] || "TBD"}</span>
                </div>
              </div>

              <div className="flex items-center gap-2 mb-8 text-gray-300">
                <svg className="w-5 h-5 text-[#EE5B2C]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" /></svg>
                <span className="font-medium text-lg">{activeItem.subtitle}</span>
              </div>
              
              <Link 
                href={activeItem.href || "#"} 
                className="inline-block bg-[#EE5B2C] hover:bg-orange-600 text-white px-8 py-3 rounded-full font-bold transition-all shadow-lg hover:shadow-orange-500/30"
              >
                View Listing Details
              </Link>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right Side: Cards Carousel */}
        <div className="w-full lg:w-[55%] relative">
          <div className="flex gap-4 overflow-x-visible pb-8 pt-4 hide-scrollbar">
            <AnimatePresence mode="popLayout">
              {displayItems.map((item, displayIndex) => {
                const originalIndex = items.findIndex(i => i.id === item.id);
                const isActive = displayIndex === 0;
                
                return (
                  <motion.div 
                    layout
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    key={item.id}
                    onClick={() => setActiveIndex(originalIndex)}
                    className={`relative flex-shrink-0 w-[240px] md:w-[280px] h-[360px] md:h-[420px] rounded-3xl overflow-hidden cursor-pointer transition-all duration-300 ${isActive ? 'ring-4 ring-[#EE5B2C] ring-offset-4 ring-offset-gray-900 scale-100 z-10' : 'scale-95 opacity-50 hover:opacity-100 z-0'}`}
                  >
                    <Image 
                      src={item.image || ""}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-700 hover:scale-110"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent transition-opacity duration-300 ${isActive ? 'opacity-100' : 'opacity-80'}`} />
                    
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-xl font-bold mb-1 line-clamp-2">{item.title}</h3>
                      <p className="text-[#EE5B2C] font-semibold text-sm">{item.subtitle}</p>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          {/* Navigation Dots/Bars */}
          <div className="flex items-center justify-center gap-2 mt-6">
            {items.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`h-1.5 rounded-full transition-all duration-300 ${index === activeIndex ? 'w-8 bg-[#EE5B2C]' : 'w-4 bg-gray-600 hover:bg-gray-400'}`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}} />
    </section>
  );
}
