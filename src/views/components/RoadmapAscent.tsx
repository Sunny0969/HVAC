"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

export type RoadmapStep = {
  title: string;
  description: string;
  day: string;
};

interface RoadmapAscentProps {
  steps: RoadmapStep[];
  isCompressed?: boolean;
}

// Child component for the Split Flap Counter to obey Rules of Hooks
function SplitFlapItem({ step, i, stepsLength, scrollYProgress }: { step: RoadmapStep, i: number, stepsLength: number, scrollYProgress: any }) {
  const stepStart = i === 0 ? 0 : (i - 0.5) / (stepsLength - 1);
  const stepEnd = i === stepsLength - 1 ? 1 : (i + 0.5) / (stepsLength - 1);
  
  let opInput = [];
  let opOutput = [];
  let rotInput = [];
  let rotOutput = [];

  if (i === 0) {
    opInput = [0, stepEnd, Math.min(1, stepEnd + 0.05)];
    opOutput = [1, 1, 0];
    rotInput = [0, stepEnd, Math.min(1, stepEnd + 0.1)];
    rotOutput = [0, 0, -90];
  } else if (i === stepsLength - 1) {
    opInput = [Math.max(0, stepStart - 0.05), stepStart, 1];
    opOutput = [0, 1, 1];
    rotInput = [Math.max(0, stepStart - 0.1), stepStart, 1];
    rotOutput = [90, 0, 0];
  } else {
    opInput = [stepStart - 0.05, stepStart, stepEnd, stepEnd + 0.05];
    opOutput = [0, 1, 1, 0];
    rotInput = [stepStart - 0.1, stepStart, stepEnd, stepEnd + 0.1];
    rotOutput = [90, 0, 0, -90];
  }

  const opacity = useTransform(scrollYProgress, opInput, opOutput);
  const rotateX = useTransform(scrollYProgress, rotInput, rotOutput);

  return (
    <motion.div
      className="absolute inset-0 flex flex-col items-center justify-center backface-hidden"
      style={{ opacity, rotateX, transformOrigin: "center center" }}
    >
      <span className="text-xs text-lime-400 font-bold uppercase tracking-widest">{step.day}</span>
      <span className="text-sm font-bold truncate max-w-full px-2">{step.title}</span>
    </motion.div>
  );
}

// Child component for the Roadmap Node to obey Rules of Hooks
function RoadmapNode({ step, i, stepsLength, scrollYProgress }: { step: RoadmapStep, i: number, stepsLength: number, scrollYProgress: any }) {
  const threshold = i / (stepsLength - 1);
  
  // Bound inputs to [0, 1] strictly and ensure strictly increasing arrays
  const isLit = useTransform(
    scrollYProgress,
    i === 0 ? [0, 1] : [threshold - 0.05, threshold],
    i === 0 ? [1, 1] : [0.3, 1]
  );
  
  const isEven = i % 2 === 0;
  const nodeScale = useTransform(isLit, [0.3, 1], [1, 1.5]);
  const nodeColor = useTransform(isLit, [0.3, 1], ["rgba(255,255,255,0.2)", "#a3e635"]);

  return (
    <div 
      className={`absolute top-0 w-full flex items-center transition-all duration-300 md:w-[45%] ${
        isEven ? "md:left-0 md:justify-end" : "md:right-0 md:justify-start"
      }`}
      style={{ top: `${threshold * 100}%` }}
    >
      <motion.div 
        className={`pl-16 md:pl-0 flex flex-col ${isEven ? "md:text-right md:pr-12" : "md:text-left md:pl-12"}`}
        style={{ opacity: isLit }}
      >
        <span className="text-lime-400 font-bold text-sm tracking-widest mb-1">{step.day}</span>
        <h3 className="text-3xl font-black mb-3">{step.title}</h3>
        <p className="text-white/70 text-lg leading-relaxed max-w-md">{step.description}</p>
      </motion.div>
      
      {/* Step Connector Node (Stationary) */}
      <motion.div 
        className={`absolute left-8 md:left-auto ${isEven ? "md:right-[-2.5px]" : "md:left-[-2.5px]"} w-3 h-3 rounded-full bg-white/20 -translate-x-1/2 md:translate-x-0`}
        style={{ scale: nodeScale, backgroundColor: nodeColor }}
      />
    </div>
  );
}

export default function RoadmapAscent({ steps, isCompressed = false }: RoadmapAscentProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobileOrReducedMotion, setIsMobileOrReducedMotion] = useState(false);

  useEffect(() => {
    const checkMotion = () => {
      const isMobile = window.matchMedia("(max-width: 768px)").matches;
      const isReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      setIsMobileOrReducedMotion(isMobile || isReduced);
    };
    checkMotion();
    window.addEventListener("resize", checkMotion);
    return () => window.removeEventListener("resize", checkMotion);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Smooth the dot progress slightly
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const dotY = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);

  // Pixel Bloom Lime background SVG data URL
  const pixelPattern = `data:image/svg+xml,%3Csvg width='24' height='24' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='2' height='2' x='0' y='0' fill='%23a3e635' fill-opacity='0.15'/%3E%3C/svg%3E`;

  // Fallback static view for mobile / reduced motion
  if (isMobileOrReducedMotion) {
    return (
      <section className="bg-[#022c3b] py-20 px-4 sm:px-6 relative text-white overflow-hidden">
        <div className="absolute inset-0 z-0" style={{ backgroundImage: `url("${pixelPattern}")` }} />
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-3xl font-bold mb-12 text-center text-lime-400">
            {isCompressed ? "Our Process" : "How It Works"}
          </h2>
          <div className="space-y-12 border-l-2 border-white/20 pl-8 ml-4">
            {steps.map((step, i) => (
              <div key={i} className="relative">
                <div className="absolute -left-[39px] top-1 w-4 h-4 rounded-full bg-lime-400 shadow-[0_0_15px_rgba(163,230,53,0.5)]" />
                <span className="text-sm font-bold text-lime-400 tracking-widest">{step.day}</span>
                <h3 className="text-2xl font-bold mt-2 mb-3">{step.title}</h3>
                <p className="text-white/80">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section 
      ref={containerRef} 
      className="relative bg-[#022c3b] text-white"
      style={{ height: `${steps.length * 100}vh` }} // Tall wrapper for scroll space
    >
      <div className="sticky top-0 h-[100dvh] w-full overflow-hidden flex items-center justify-center">
        {/* Pixel Bloom Background Layer */}
        <div 
          className="absolute inset-0 z-0 opacity-40 pointer-events-none" 
          style={{ backgroundImage: `url("${pixelPattern}")` }} 
        />
        
        {/* Giant fading radial glow behind the stage */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-lime-500/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 h-full flex flex-col justify-center">
          
          {/* Top Title & Split Flap Counter Box */}
          <div className="absolute top-24 left-8 md:left-1/2 md:-translate-x-1/2 z-30 flex flex-col items-start md:items-center">
            <h2 className="text-3xl font-black tracking-tight mb-2 uppercase text-white/50">
              {isCompressed ? "The Ascent" : "Roadmap"}
            </h2>
            
            {/* Split Flap Style Counter Container */}
            <div className="relative w-48 h-12 bg-black/50 backdrop-blur-md border border-white/10 rounded-md overflow-hidden shadow-xl flex items-center justify-center perspective-[1000px]">
              {steps.map((step, i) => (
                <SplitFlapItem key={i} step={step} i={i} stepsLength={steps.length} scrollYProgress={scrollYProgress} />
              ))}
            </div>
          </div>

          {/* Vertical Spine */}
          <div className="absolute top-48 bottom-48 left-8 md:left-1/2 w-1 bg-white/5 md:-translate-x-1/2 rounded-full z-10">
            {/* Glowing Traveling Node */}
            <motion.div 
              className="absolute left-1/2 -translate-x-1/2 w-5 h-5 bg-lime-400 rounded-full shadow-[0_0_20px_#a3e635,0_0_40px_#a3e635]"
              style={{ top: dotY }}
            />
          </div>

          {/* Render Steps */}
          <div className="relative w-full h-[60vh] mt-24">
            {steps.map((step, i) => (
              <RoadmapNode key={i} step={step} i={i} stepsLength={steps.length} scrollYProgress={scrollYProgress} />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
