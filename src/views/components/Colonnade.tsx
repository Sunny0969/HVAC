"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export interface ColonnadeItem {
  id: string;
  label: string;
  title: string;
  content: string;
  gradientClass: string;
  image?: string;
}

interface ColonnadeProps {
  items: ColonnadeItem[];
}

// Custom hook to track previous state for the sliding exit animation
function usePrevious<T>(value: T): T | undefined {
  const ref = useRef<T | undefined>(undefined);
  useEffect(() => {
    ref.current = value;
  }, [value]);
  return ref.current;
}

export default function Colonnade({ items }: ColonnadeProps) {
  const [activeId, setActiveId] = useState<string>(items[0]?.id);
  const prevActiveId = usePrevious(activeId);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.matchMedia("(max-width: 768px)").matches);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div className="w-full h-[800px] md:h-[600px] flex flex-col md:flex-row gap-2 md:gap-4 p-4 md:p-8 bg-[#F7F5F0] rounded-3xl overflow-hidden">
      {items.map((item) => {
        const isActive = activeId === item.id;
        const isClosing = prevActiveId === item.id && !isActive;

        // Content Y position: 
        // 0 if active, -40 if exiting (was active, now closing), 40 if entering or inactive
        const contentY = isActive ? 0 : isClosing ? -40 : 40;

        return (
          <motion.div
            key={item.id}
            layout
            initial={false}
            animate={{
              flex: isActive ? (isMobile ? 8 : 10) : 1,
            }}
            transition={{ type: "spring", bounce: 0, duration: 0.4 }}
            onHoverStart={() => !isMobile && setActiveId(item.id)}
            onClick={() => setActiveId(item.id)}
            className={`relative overflow-hidden cursor-pointer rounded-2xl group bg-gray-900 touch-pan-y`}
          >
            {/* Background Image */}
            {item.image && (
              <Image 
                src={item.image} 
                alt={item.title} 
                fill 
                className={`object-cover transition-transform duration-700 ${isActive ? 'scale-105' : 'scale-100 grayscale'}`} 
              />
            )}
            
            {/* Gradient Overlay */}
            <div className={`absolute inset-0 ${item.gradientClass} opacity-80 mix-blend-multiply z-0 transition-opacity duration-300 ${isActive ? 'opacity-60' : 'opacity-90'}`} />

            {/* Dark Overlay for inactive state */}
            <motion.div
              animate={{ opacity: isActive ? 0 : 0.4 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 bg-[#022B3A] z-0"
            />

            {/* Inactive Vertical Label (Desktop) / Horizontal Label (Mobile) */}
            <motion.div
              animate={{ opacity: isActive ? 0 : 1 }}
              transition={{ duration: 0.2 }}
              className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none"
            >
              <h3 
                className="text-white font-bold tracking-widest uppercase text-sm md:text-lg whitespace-nowrap md:rotate-180"
                style={{ writingMode: isMobile ? "horizontal-tb" : "vertical-rl" }}
              >
                {item.label}
              </h3>
            </motion.div>

            {/* Expanded Content Panel (Always in DOM for SEO) */}
            <motion.div
              animate={{
                opacity: isActive ? 1 : 0,
                y: contentY,
              }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className={`absolute inset-0 z-20 flex flex-col justify-end p-6 md:p-10 pointer-events-none ${
                !isActive ? "invisible md:visible" : "" // Only hide completely on mobile if inactive to save height, but keep in DOM. Actually, keeping in DOM is best done by leaving it visible but opacity 0.
              }`}
            >
              {/* Using min-width so the text doesn't arbitrarily wrap/squish during the layout transition */}
              <div className="min-w-[280px] md:min-w-[400px]">
                <h3 className="text-3xl md:text-5xl font-black text-white mb-4 leading-tight drop-shadow-md">
                  {item.title}
                </h3>
                <p className="text-white/95 text-lg md:text-xl font-medium drop-shadow-sm leading-relaxed">
                  {item.content}
                </p>
              </div>
            </motion.div>
          </motion.div>
        );
      })}
    </div>
  );
}
