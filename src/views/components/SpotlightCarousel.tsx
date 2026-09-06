"use client";

import React, { useRef, useEffect, useState, memo, useCallback } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export interface CarouselItem {
  id: string | number;
  title: string;
  subtitle?: string;
  content: React.ReactNode;
  rating?: number;
  href?: string;
  image?: string;
  tags?: string[];
}

interface SpotlightCarouselProps {
  items: CarouselItem[];
  title?: string;
}

// Memoized Card Component to prevent full re-renders on activeIndex changes
const CarouselCard = memo(function CarouselCard({
  item,
  index,
  activeIndex,
}: {
  item: CarouselItem;
  index: number;
  activeIndex: number;
}) {
  const offset = index - activeIndex;
  // Concave Arc Math:
  // Left items (negative offset) rotate positively (facing right)
  // Right items (positive offset) rotate negatively (facing left)
  const rotateY = offset * -20; 
  const scale = 1 - Math.min(Math.abs(offset) * 0.15, 0.4);
  const opacity = 1 - Math.min(Math.abs(offset) * 0.3, 0.8);

  const cardContent = (
    <div 
      className="w-full h-full bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 flex flex-col transition-all duration-500 ease-out"
      style={{
        transform: `rotateY(${rotateY}deg) scale(${scale})`,
        opacity: opacity,
        boxShadow: offset === 0 ? "0 25px 50px -12px rgba(0, 0, 0, 0.15)" : "0 4px 6px -1px rgba(0, 0, 0, 0.05)",
      }}
    >
      {item.image && (
        <div className="h-48 w-full bg-gray-200 relative">
          <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
          {item.tags && (
            <div className="absolute top-4 left-4 flex gap-2">
              {item.tags.map(tag => (
                <span key={tag} className="px-2 py-1 bg-primary text-white text-xs font-bold rounded shadow-sm">
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      )}
      <div className="p-6 md:p-8 flex-1 flex flex-col">
        <h3 className="text-2xl font-bold text-gray-900 mb-1">{item.title}</h3>
        {item.subtitle && <p className="text-secondary font-bold text-sm uppercase tracking-wider mb-4">{item.subtitle}</p>}
        <div className="text-gray-600 text-lg flex-1">
          {item.content}
        </div>
      </div>
    </div>
  );

  return (
    <div 
      data-index={index}
      className="flex-shrink-0 w-[85vw] sm:w-[400px] md:w-[450px] snap-center py-12 px-2"
      style={{ perspective: "1000px" }}
    >
      {item.href ? (
        <Link href={item.href} className="block w-full h-full outline-none focus:ring-4 focus:ring-secondary/50 rounded-2xl">
          {cardContent}
        </Link>
      ) : (
        cardContent
      )}
    </div>
  );
});

export default function SpotlightCarousel({ items, title }: SpotlightCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-index"));
            setActiveIndex(index);
          }
        });
      },
      {
        root: containerRef.current,
        threshold: 0.6, // Fire when 60% of the card is visible
      }
    );

    const currentCardRefs = cardRefs.current;
    currentCardRefs.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => {
      currentCardRefs.forEach((card) => {
        if (card) observer.unobserve(card);
      });
    };
  }, [items]);

  // Keep a stable ref for activeIndex to use in the wheel event listener
  const activeIndexRef = useRef(activeIndex);
  useEffect(() => {
    activeIndexRef.current = activeIndex;
  }, [activeIndex]);

  // Translate vertical wheel scroll to horizontal scroll when hovering over the carousel
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let isScrolling = false;
    let wheelTimer: NodeJS.Timeout;

    const handleWheel = (e: WheelEvent) => {
      // Only intercept if we are scrolling vertically
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        const isScrollingDown = e.deltaY > 0;
        const isAtRightEdge = container.scrollLeft + container.clientWidth >= container.scrollWidth - 1;
        const isAtLeftEdge = container.scrollLeft <= 1;

        // Let the page scroll normally if we're at the edge and pushing into it
        if (isScrollingDown && isAtRightEdge) return;
        if (!isScrollingDown && isAtLeftEdge) return;

        // Otherwise, intercept
        e.preventDefault();

        // Ignore tiny micro-scrolls and prevent rapid firing
        if (isScrolling || Math.abs(e.deltaY) < 10) return;

        isScrolling = true;
        const currentIndex = activeIndexRef.current;

        if (isScrollingDown) {
          scrollTo(Math.min(items.length - 1, currentIndex + 1));
        } else {
          scrollTo(Math.max(0, currentIndex - 1));
        }

        // Lock additional scroll events for 600ms while the smooth scroll animation completes
        clearTimeout(wheelTimer);
        wheelTimer = setTimeout(() => {
          isScrolling = false;
        }, 600);
      }
    };

    container.addEventListener('wheel', handleWheel, { passive: false });
    return () => {
      container.removeEventListener('wheel', handleWheel);
      clearTimeout(wheelTimer);
    };
  }, [items.length, scrollTo]);

  const scrollTo = useCallback((index: number) => {
    if (!containerRef.current || !cardRefs.current[index]) return;
    const container = containerRef.current;
    const card = cardRefs.current[index];
    
    // Calculate the scroll position to center the card
    const scrollLeft = card.offsetLeft - (container.clientWidth / 2) + (card.clientWidth / 2);
    container.scrollTo({ left: scrollLeft, behavior: "smooth" });
  }, []);

  const activeItem = items[activeIndex];

  return (
    <div className="w-full py-16 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        
        {/* Synced Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="flex-1">
            {title && <h2 className="text-sm font-bold tracking-widest text-secondary uppercase mb-4">{title}</h2>}
            
            <div className="h-28 flex flex-col justify-end">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                >
                  <h3 className="text-3xl md:text-5xl font-black text-primary mb-2 line-clamp-1">{activeItem?.title}</h3>
                  {activeItem?.rating && (
                    <div className="flex items-center text-yellow-400 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className={`w-6 h-6 ${i < activeItem.rating! ? "fill-current" : "text-gray-300 fill-current"}`} viewBox="0 0 24 24">
                          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                        </svg>
                      ))}
                    </div>
                  )}
                  {activeItem?.subtitle && <p className="text-lg text-gray-500 font-medium">{activeItem.subtitle}</p>}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-4">
            <button 
              onClick={() => scrollTo(Math.max(0, activeIndex - 1))}
              disabled={activeIndex === 0}
              className="p-3 rounded-full border-2 border-gray-200 text-primary hover:border-secondary hover:text-secondary disabled:opacity-30 disabled:cursor-not-allowed transition-colors focus:outline-none focus:ring-2 focus:ring-secondary"
              aria-label="Previous card"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7"/></svg>
            </button>
            
            {/* Dots */}
            <div className="flex gap-2 mx-2">
              {items.map((_, i) => (
                <button
                  key={i}
                  onClick={() => scrollTo(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${i === activeIndex ? "w-8 bg-secondary" : "bg-gray-300 hover:bg-gray-400"}`}
                />
              ))}
            </div>

            <button 
              onClick={() => scrollTo(Math.min(items.length - 1, activeIndex + 1))}
              disabled={activeIndex === items.length - 1}
              className="p-3 rounded-full border-2 border-gray-200 text-primary hover:border-secondary hover:text-secondary disabled:opacity-30 disabled:cursor-not-allowed transition-colors focus:outline-none focus:ring-2 focus:ring-secondary"
              aria-label="Next card"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/></svg>
            </button>
          </div>
        </div>
      </div>

      {/* Native CSS Scroll-Snap Stage */}
      <div 
        ref={containerRef}
        className="w-full flex overflow-x-auto snap-x snap-mandatory pb-12 pt-4 px-[10vw] sm:px-[calc(50vw-200px)] md:px-[calc(50vw-225px)] [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
      >
        {items.map((item, index) => (
          <div 
            key={item.id} 
            ref={(el) => { cardRefs.current[index] = el; }}
          >
            <CarouselCard 
              item={item} 
              index={index} 
              activeIndex={activeIndex} 
            />
          </div>
        ))}
      </div>
    </div>
  );
}
