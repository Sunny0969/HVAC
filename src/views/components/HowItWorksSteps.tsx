"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { steps } from "../../data/howItWorksSteps";

export default function HowItWorksSteps() {
  return (
    <section className="bg-[#FAF9F6] w-full py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 relative">
          
          {/* Left Sticky Column */}
          <div className="lg:w-[40%]">
            <div className="sticky top-32">
              <div className="inline-flex items-center gap-2 border border-gray-200 rounded-full px-4 py-1.5 text-sm font-semibold mb-6 bg-white shadow-sm text-gray-700">
                <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
                How it works
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold leading-tight text-[#022B3A] tracking-tight font-serif mb-6">
                From initial valuation to closing – <span className="text-[#EE5B2C] italic">in four steps.</span>
              </h2>
              <p className="text-gray-500 text-lg md:text-xl font-medium leading-relaxed">
                Our streamlined advisory process ensures you get a professional valuation and a profitable exit quickly and efficiently from start to finish.
              </p>
            </div>
          </div>

          {/* Right Scrolling Column */}
          <div className="lg:w-[60%] flex flex-col gap-8">
            {steps.map((step, index) => (
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                key={index} 
                className="bg-white rounded-[2rem] p-8 md:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 flex flex-col sm:flex-row gap-8 items-center"
              >
                <div className="flex-1">
                  <div className="text-5xl md:text-6xl font-black mb-4 bg-clip-text text-transparent bg-gradient-to-br from-[#EE5B2C] to-orange-300 drop-shadow-sm">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-[#022B3A] mb-4">
                    {step.title}
                  </h3>
                  <p className="text-gray-500 text-base md:text-lg leading-relaxed">
                    {step.description}
                  </p>
                </div>
                <div className="w-full sm:w-[45%] aspect-[4/3] relative rounded-2xl overflow-hidden shadow-inner border border-gray-50">
                  <Image 
                    src={step.image} 
                    alt={step.title}
                    fill
                    className="object-cover"
                  />
                  {/* Decorative Elements */}
                  <div className="absolute top-3 left-3 flex gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-red-400"></div>
                    <div className="w-2 h-2 rounded-full bg-amber-400"></div>
                    <div className="w-2 h-2 rounded-full bg-green-400"></div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
