"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { CarouselItem } from "./SpotlightCarousel";
import { motion } from "framer-motion";

interface TestimonialSliderProps {
  items: CarouselItem[];
}

export default function TestimonialSlider({ items }: TestimonialSliderProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(Math.ceil(scrollLeft + clientWidth) < scrollWidth);
    }
  };

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -400 : 400;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  // Helper for professional avatar generation based on name
  const getAvatar = (name: string, id: string | number) => {
    const defaultImages = [
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=150&h=150&q=80",
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&h=150&q=80",
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=150&h=150&q=80"
    ];
    const numId = typeof id === 'number' ? id : parseInt(id, 10) || 1;
    return defaultImages[(Math.abs(numId) - 1 + defaultImages.length) % defaultImages.length];
  };

  // Helper for relevant card top image
  const getCardImage = (id: string | number) => {
    const images = [
      "https://images.unsplash.com/photo-1556761175-5973dc0f32d7?auto=format&fit=crop&w=600&h=300&q=80", // Handshake/Deal
      "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=600&h=300&q=80", // HVAC/AC Unit
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=600&h=300&q=80", // Paperwork/Signatures
    ];
    const numId = typeof id === 'number' ? id : parseInt(id, 10) || 1;
    return images[(Math.abs(numId) - 1 + images.length) % images.length];
  };

  return (
    <section className="bg-white w-full py-24 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          
          {/* Left Column: Heading and Controls */}
          <div className="lg:w-[35%] flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 border border-gray-200 rounded-full px-4 py-1.5 text-sm font-semibold mb-6 bg-gray-50 text-gray-700">
                <svg className="w-4 h-4 text-gray-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" /></svg>
                Client Success
              </div>
              
              <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold leading-tight text-[#022B3A] tracking-tight font-serif mb-6">
                What our <br />
                <span className="text-[#EE5B2C] italic font-serif">clients say</span>
              </h2>
              
              <p className="text-gray-500 text-lg leading-relaxed mb-10 max-w-md">
                Hear directly from business owners who achieved their ideal exit and secured their hard-earned legacy with HVAC Exit Advisors.
              </p>
            </div>

            {/* Navigation Arrows */}
            <div className="hidden lg:flex gap-4">
              <button 
                onClick={() => scroll('left')}
                disabled={!canScrollLeft}
                className={`w-12 h-12 rounded-xl flex items-center justify-center border transition-all ${canScrollLeft ? 'border-gray-300 text-[#022B3A] hover:bg-gray-50' : 'border-gray-100 text-gray-300 cursor-not-allowed'}`}
                aria-label="Previous testimonials"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
              </button>
              <button 
                onClick={() => scroll('right')}
                disabled={!canScrollRight}
                className={`w-12 h-12 rounded-xl flex items-center justify-center border transition-all ${canScrollRight ? 'border-gray-300 text-[#022B3A] hover:bg-gray-50' : 'border-gray-100 text-gray-300 cursor-not-allowed'}`}
                aria-label="Next testimonials"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </button>
            </div>
          </div>

          {/* Right Column: Scrolling Cards */}
          <div className="lg:w-[65%] relative">
            <div 
              ref={scrollRef}
              onScroll={handleScroll}
              className="flex gap-6 overflow-x-auto pb-8 snap-x hide-scrollbar" 
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {items.map((item, index) => (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  key={item.id}
                  className="bg-[#FAF9F6] border border-gray-100 rounded-3xl p-6 md:p-8 flex-shrink-0 w-[340px] md:w-[420px] flex flex-col justify-between snap-start group"
                >
                  <div>
                    {/* Top Image Thumbnail to make card look fuller */}
                    <div className="relative w-full h-44 rounded-2xl overflow-hidden mb-6">
                      <Image 
                        src={getCardImage(item.id)} 
                        alt="Business Transition" 
                        fill 
                        className="object-cover group-hover:scale-105 transition-transform duration-700" 
                      />
                      <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1 shadow-sm">
                        <span className="text-yellow-500 text-sm">★</span>
                        <span className="text-[#022B3A] font-bold text-xs">{item.rating || "5.0"}</span>
                      </div>
                    </div>

                    <div className="flex justify-between items-start mb-6">
                      {/* Orange Quote Icon */}
                      <div className="text-[#EE5B2C]">
                        <svg width="36" height="36" viewBox="0 0 32 32" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                          <path d="M10.1333 11.2C10.1333 8.25447 12.5211 5.86667 15.4667 5.86667H16V0.533333H15.4667C9.57563 0.533333 4.8 5.30896 4.8 11.2V31.4667H15.4667V20.8H10.1333V11.2Z" />
                          <path d="M26.1333 11.2C26.1333 8.25447 28.5211 5.86667 31.4667 5.86667H32V0.533333H31.4667C25.5756 0.533333 20.8 5.30896 20.8 11.2V31.4667H31.4667V20.8H26.1333V11.2Z" />
                        </svg>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 text-lg md:text-xl italic font-serif leading-relaxed mb-8">
                      "{item.content}"
                    </p>
                  </div>
                  
                  <div>
                    <div className="w-full h-px bg-gray-200 mb-6"></div>
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-full overflow-hidden relative border-2 border-white shadow-sm">
                        <Image 
                          src={item.image || getAvatar(item.title, item.id)}
                          alt={item.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="text-[#022B3A] font-bold text-base">{item.title}</h4>
                        <p className="text-gray-500 text-sm font-medium">{item.subtitle}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Mobile Navigation Arrows (Visible only on small screens) */}
            <div className="flex lg:hidden gap-4 mt-2">
              <button 
                onClick={() => scroll('left')}
                disabled={!canScrollLeft}
                className={`w-12 h-12 rounded-xl flex items-center justify-center border transition-all ${canScrollLeft ? 'border-gray-300 text-[#022B3A]' : 'border-gray-100 text-gray-300'}`}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
              </button>
              <button 
                onClick={() => scroll('right')}
                disabled={!canScrollRight}
                className={`w-12 h-12 rounded-xl flex items-center justify-center border transition-all ${canScrollRight ? 'border-gray-300 text-[#022B3A]' : 'border-gray-100 text-gray-300'}`}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </button>
            </div>
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
