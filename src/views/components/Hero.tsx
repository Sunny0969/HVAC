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
          src="/florida-hvac-business-broker-home.jpg"
          alt="hvac business for sale - Florida commercial rooftop HVAC units at dusk"
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
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-5 drop-shadow-xl tracking-tight leading-tight max-w-3xl">
          Sell Your HVAC Business Confidentially and With Confidence
        </h1>
        <p className="text-base md:text-lg text-white/90 mb-4 max-w-2xl font-medium drop-shadow-md leading-relaxed">
          You spent years building your company, serving customers and developing a skilled team. When you begin considering a sale, you deserve clear information about value, preparation, buyer qualifications and the terms that can affect what you ultimately receive.
        </p>
        <p className="text-base md:text-lg text-white/90 mb-8 max-w-2xl font-medium drop-shadow-md leading-relaxed">
          HVAC Exit Advisors helps business owners evaluate their options, prepare the company for qualified buyers and navigate a confidential sale from valuation through closing.
        </p>
        <div className="flex flex-col sm:flex-row items-start justify-start gap-4 flex-wrap">
          <Link 
            href="/free-confidential-valuation"
            className="w-full sm:w-auto px-6 py-3 bg-secondary text-white rounded-md font-bold text-base hover:bg-white hover:text-secondary transition-colors shadow-xl text-center"
          >
            Request a Confidential Valuation
          </Link>
          <Link 
            href="/contact-us"
            className="w-full sm:w-auto px-6 py-3 bg-white/10 backdrop-blur-md border border-white/30 text-white rounded-md font-bold text-base hover:bg-white/20 transition-all shadow-xl text-center"
          >
            Schedule a Private Consultation
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
