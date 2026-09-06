"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

const caseStudies = [
  {
    id: 1,
    date: "SOLD - MAR 2026",
    headline: "HVAC Business -",
    city: "Orlando, FL",
    price: "$4.2M",
    revenue: "$3.8M",
    cashFlow: "$850k",
    story: "A family-owned commercial HVAC business with strong recurring maintenance contracts. We secured a strategic buyer offering 20% above the initial market valuation, preserving the team's legacy.",
    badge: "SOLD ABOVE ASKING",
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80",
  },
  {
    id: 2,
    date: "SOLD - JAN 2026",
    headline: "Residential HVAC & Cooling Pro",
    city: "Tampa, FL",
    price: "$1.8M",
    revenue: "$1.5M",
    cashFlow: "$420k",
    story: "Highly rated local service provider. The retiring founder was matched with an expanding regional player, successfully closing the transaction in just 45 days.",
    badge: "SOLD",
    image: "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&q=80",
  },
  {
    id: 3,
    date: "SOLD - NOV 2025",
    headline: "Coastal A/C & Refrigeration",
    city: "Miami, FL",
    price: "$6.5M",
    revenue: "$5.2M",
    cashFlow: "$1.2M",
    story: "Specialized in high-end coastal properties and marine refrigeration. The competitive auction process resulted in multiple offers from private equity roll-ups.",
    badge: "SOLD ABOVE ASKING",
    image: "https://images.unsplash.com/photo-1621905252472-747262ba94a4?auto=format&fit=crop&q=80",
  },
  {
    id: 4,
    date: "SOLD - SEP 2025",
    headline: "B2B Mechanical Services",
    city: "Jacksonville, FL",
    price: "$2.9M",
    revenue: "$2.1M",
    cashFlow: "$600k",
    story: "Dominant player in industrial park HVAC systems. Our targeted outreach found a buyer looking to establish a foothold in the rapidly growing North Florida market.",
    badge: "SOLD",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80",
  },
];

function Card({ study, index, total }: { study: typeof caseStudies[0], index: number, total: number }) {
  const cardRef = useRef<HTMLElement>(null);
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.matchMedia("(max-width: 768px)").matches);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Track the entry of the card (start end = top of card enters bottom of viewport)
  // to when it hits the sticky position (start start = top of card hits top of viewport)
  const { scrollYProgress: entryProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "start start"],
  });

  // Scale from 0.96 to 1 in the final 20% of its entry
  const scale = useTransform(entryProgress, [0.8, 1], [0.96, 1]);
  // 3D Lean up to 4 degrees, flattening out to 0
  const rotateX = useTransform(entryProgress, [0.8, 1], [4, 0]);

  // Track when the card is pinned and the NEXT card is scrolling over it
  // (start start = it just pinned. end start = its layout box has fully scrolled past the top)
  const { scrollYProgress: exitProgress } = useScroll({
    target: cardRef,
    offset: ["start start", "end start"],
  });
  
  // Dim the card as it gets covered
  const dimOpacity = useTransform(exitProgress, [0, 1], [0, 0.4]);

  return (
    <article 
      ref={cardRef} 
      className="sticky top-0 h-[100dvh] flex items-center justify-center w-full px-4 sm:px-6 lg:px-8 pt-20 pb-10"
      style={{ zIndex: index }}
    >
      <motion.div 
        className="relative w-full max-w-6xl mx-auto h-full max-h-[800px] rounded-3xl overflow-hidden shadow-2xl bg-white border border-gray-200"
        style={{
          scale,
          rotateX: isMobile ? 0 : rotateX,
          transformPerspective: 1200, // Necessary for 3D rotation
        }}
      >
        {/* Background Cover Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src={study.image}
            alt={`Image of ${study.headline} facility in ${study.city}`}
            fill
            sizes="(max-width: 768px) 100vw, 80vw"
            className="object-cover"
          />
          {/* Gradient Overlay for Text Readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/70 to-transparent" />
        </div>

        {/* Dim Overlay when being scrolled over */}
        <motion.div 
          className="absolute inset-0 bg-black z-20 pointer-events-none" 
          style={{ opacity: dimOpacity }} 
        />

        {/* Card Content (Real DOM) */}
        <div className="relative z-10 h-full flex flex-col justify-end p-6 md:p-12 text-white">
          <div className="mb-4">
            <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-md border border-white/30 rounded-full text-xs md:text-sm font-bold tracking-widest uppercase mb-4 shadow-sm">
              DISPATCH - {study.date}
            </span>
            <div className="flex flex-wrap items-center gap-3 mb-2">
              <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">
                {study.headline}
              </h2>
              <span className={`px-3 py-1 text-xs md:text-sm font-bold rounded-full ${study.badge === 'SOLD ABOVE ASKING' ? 'bg-secondary text-white' : 'bg-primary border border-white/20 text-white'}`}>
                {study.badge}
              </span>
            </div>
            <p className="text-lg md:text-xl font-medium text-white/80 flex items-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
              {study.city}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6 pt-6 border-t border-white/20">
            <div>
              <p className="text-sm text-white/60 uppercase tracking-wider font-bold mb-1">Final Price</p>
              <p className="text-3xl md:text-4xl font-black text-secondary">{study.price}</p>
            </div>
            <div>
              <p className="text-sm text-white/60 uppercase tracking-wider font-bold mb-1">Annual Revenue</p>
              <p className="text-2xl md:text-3xl font-bold">{study.revenue}</p>
            </div>
            <div>
              <p className="text-sm text-white/60 uppercase tracking-wider font-bold mb-1">Seller Discretionary Cash Flow</p>
              <p className="text-2xl md:text-3xl font-bold">{study.cashFlow}</p>
            </div>
          </div>

          <div className="pt-4 max-w-4xl">
            <p className="text-lg md:text-xl text-white/90 leading-relaxed font-medium">
              {study.story}
            </p>
          </div>
        </div>
      </motion.div>
    </article>
  );
}

export default function SuccessStoriesStack() {
  return (
    <div className="relative w-full pb-20">
      {caseStudies.map((study, index) => (
        <Card 
          key={study.id} 
          study={study} 
          index={index} 
          total={caseStudies.length} 
        />
      ))}
    </div>
  );
}
