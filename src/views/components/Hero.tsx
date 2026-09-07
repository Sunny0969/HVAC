"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobileOrReducedMotion, setIsMobileOrReducedMotion] = useState(true);

  useEffect(() => {
    // Check for mobile (<768px) or reduced motion preference
    const mediaQueryMobile = window.matchMedia("(max-width: 768px)");
    const mediaQueryMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    const updateStatus = () => {
      setIsMobileOrReducedMotion(mediaQueryMobile.matches || mediaQueryMotion.matches);
    };

    updateStatus();
    mediaQueryMobile.addEventListener("change", updateStatus);
    mediaQueryMotion.addEventListener("change", updateStatus);

    return () => {
      mediaQueryMobile.removeEventListener("change", updateStatus);
      mediaQueryMotion.removeEventListener("change", updateStatus);
    };
  }, []);

  // Scroll animations for HVAC EXIT ADVISORS
  const { scrollY } = useScroll();
  const letterSpacing = useTransform(scrollY, [0, 800], ["0em", "0.3em"]);
  const yOffset = useTransform(scrollY, [0, 800], [0, 150]);
  const opacityOffset = useTransform(scrollY, [0, 600], [0.15, 0]);

  // Mouse Parallax values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for mouse parallax
  const springConfig = { damping: 30, stiffness: 100, mass: 1 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // Multipliers for depth (Background moves slightly)
  const bgX = useTransform(smoothX, [-1, 1], [-15, 15]);
  const bgY = useTransform(smoothY, [-1, 1], [-15, 15]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isMobileOrReducedMotion || !containerRef.current) return;
    
    const { left, top, width, height } = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - left) / width - 0.5; // -0.5 to 0.5
    const y = (e.clientY - top) / height - 0.5; // -0.5 to 0.5
    
    // Clamp the values to -1 to 1
    mouseX.set(Math.max(-0.5, Math.min(0.5, x)) * 2); 
    mouseY.set(Math.max(-0.5, Math.min(0.5, y)) * 2); 
  };

  const sunstateLetters = "HVAC EXIT ADVISORS".split("");
  const tickerText = "Florida-Only · Confidential · Insider-Led · ";
  const tickerLoop = Array(4).fill(tickerText).join("");

  // Calculate per-character scroll transforms outside of the render loop
  const yOffsetEven = useTransform(scrollY, [0, 800], [0, 50]);
  const yOffsetOdd = useTransform(scrollY, [0, 800], [0, 100]);

  return (
    <section 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative w-full h-[100dvh] overflow-hidden bg-gray-900 flex items-center justify-center"
    >
      {/* Background Image with Parallax */}
      <motion.div 
        className="absolute inset-[-30px] z-0" 
        style={isMobileOrReducedMotion ? {} : { x: bgX, y: bgY }}
      >
        <Image
          src="https://images.unsplash.com/photo-1558442074-3c19857bc1dc?auto=format&fit=crop&q=80"
          alt="Florida commercial rooftop HVAC units at dusk"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Simple dark overlay for text readability without blue tint */}
        <div className="absolute inset-0 bg-black/60" />
      </motion.div>

      {/* Foreground Real DOM Content (SEO + LCP) */}
      <div className="relative z-20 px-4 max-w-7xl w-full mx-auto mt-16 md:mt-0 text-left">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 drop-shadow-xl tracking-tight">
          Florida's <span className="text-[#EE5B2C]">HVAC<br className="hidden md:block"/> Business</span> Broker
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-3xl font-medium drop-shadow-md">
          Expert valuation and discrete sales for HVAC companies across the Sunshine State.
        </p>
        <div className="flex flex-col sm:flex-row items-start justify-start gap-4 flex-wrap">
          <Link 
            href="/sell-your-hvac-business"
            className="w-full sm:w-auto px-8 py-4 bg-secondary text-white rounded-md font-bold text-lg hover:bg-white hover:text-secondary transition-colors shadow-xl text-center"
          >
            Sell Your Business
          </Link>
          <Link 
            href="/buy-an-hvac-business"
            className="w-full sm:w-auto px-8 py-4 bg-white/10 backdrop-blur-md border border-white/30 text-white rounded-md font-bold text-lg hover:bg-white/20 transition-all shadow-xl text-center"
          >
            Buy a Business
          </Link>
          <Link 
            href="/hvac-business-valuation-calculator"
            className="w-full sm:w-auto px-8 py-4 bg-white/10 backdrop-blur-md border border-white/30 text-white rounded-md font-bold text-lg hover:bg-white/20 transition-all shadow-xl text-center"
          >
            Free Valuation Calculator &rarr;
          </Link>
        </div>
      </div>

      {/* CSS Hardware-Accelerated Marquee Strip at Bottom */}
      <div className="absolute bottom-0 left-0 right-0 z-30 h-12 bg-white/10 backdrop-blur-md border-t border-white/20 overflow-hidden flex items-center">
        <div className="flex w-max animate-marquee whitespace-nowrap">
          <div className="text-white text-sm font-bold tracking-[0.2em] uppercase">
            {tickerLoop}
          </div>
          <div className="text-white text-sm font-bold tracking-[0.2em] uppercase">
            {tickerLoop}
          </div>
        </div>
      </div>
    </section>
  );
}
