"use client";

import React from "react";
import { motion, Variants } from "framer-motion";

const fadeUpVariant: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

export default function TeamPageContent() {
  return (
    <div className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
      <div className="grid lg:grid-cols-12 gap-12">
        
        {/* Left Column: Team Profiles */}
        <div className="lg:col-span-8">
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="space-y-12"
          >
            {/* Sanjay Wadhwani Profile */}
            <motion.div variants={fadeUpVariant} className="bg-white rounded-[2rem] p-8 md:p-10 shadow-xl shadow-gray-200/50 border border-gray-100 flex flex-col md:flex-row gap-8 items-start">
              {/* Profile Image Silhouette / Placeholder */}
              <div className="w-40 h-40 md:w-48 md:h-48 rounded-2xl bg-gray-50 flex-shrink-0 border-2 border-gray-100 overflow-hidden relative shadow-inner">
                 <div className="absolute inset-0 flex items-center justify-center text-gray-300">
                    <svg className="w-24 h-24" fill="currentColor" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
                 </div>
              </div>
              
              <div>
                <span className="text-[#EE5B2C] font-bold tracking-wider uppercase text-sm mb-2 block">Owner & Principal Advisor</span>
                <h2 className="text-3xl font-black text-[#022B3A] mb-4">Sanjay Wadhwani</h2>
                <p className="text-gray-700 leading-relaxed font-medium mb-4">
                  Sanjay Wadhwani brings years of specialized expertise to the business brokerage sector. Under his leadership, HVAC Exit Advisors has grown into a premier brokerage firm focused strictly on matching serious buyers with financially-verified service companies across Florida.
                </p>
                <p className="text-gray-700 leading-relaxed font-medium">
                  With a deep understanding of complex acquisitions and real-world operational insights, Sanjay ensures every deal is structured for maximum confidentiality, accuracy, and mutual success.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Right Sticky Column: Contact Information */}
        <div className="lg:col-span-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="sticky top-32 bg-[#022B3A] text-white rounded-[2rem] shadow-2xl p-8 overflow-hidden relative"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#EE5B2C] opacity-20 rounded-full blur-[80px]" />
            
            <h3 className="text-2xl font-black mb-8 relative z-10 text-white">Contact Our Office</h3>
            
            <div className="space-y-8 relative z-10">
              
              {/* Florida Office */}
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mr-4 flex-shrink-0">
                  <svg className="w-6 h-6 text-[#EE5B2C]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                </div>
                <div>
                  <span className="block text-sm text-white/60 font-bold mb-1 uppercase tracking-wider">Florida Office</span>
                  <span className="block font-medium text-lg leading-snug">Serving Statewide Florida Operations</span>
                </div>
              </div>
              
              {/* Advisory Line */}
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mr-4 flex-shrink-0">
                  <svg className="w-6 h-6 text-[#EE5B2C]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                </div>
                <div>
                  <span className="block text-sm text-white/60 font-bold mb-1 uppercase tracking-wider">Direct Advisory Line</span>
                  <a href="https://wa.me/19548649161" target="_blank" rel="noopener noreferrer" className="block font-medium text-lg hover:text-[#EE5B2C] transition-colors">(954) 864-9161</a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mr-4 flex-shrink-0">
                  <svg className="w-6 h-6 text-[#EE5B2C]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </div>
                <div>
                  <span className="block text-sm text-white/60 font-bold mb-1 uppercase tracking-wider">Direct Email</span>
                  <a href="mailto:contact@hvacexitadvisors.com" className="block font-medium text-lg hover:text-[#EE5B2C] transition-colors break-all">contact@hvacexitadvisors.com</a>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mr-4 flex-shrink-0">
                  <svg className="w-6 h-6 text-[#EE5B2C]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <div>
                  <span className="block text-sm text-white/60 font-bold mb-1 uppercase tracking-wider">Business Hours</span>
                  <span className="block font-medium text-lg">Mon - Fri: 8:30 AM - 5:30 PM EST</span>
                </div>
              </div>
            </div>
            
            <div className="mt-10 pt-8 border-t border-white/10 relative z-10">
              <a href="mailto:contact@hvacexitadvisors.com" className="flex items-center justify-center w-full bg-[#EE5B2C] hover:bg-orange-600 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 text-center">
                Email Advisory Team &rarr;
              </a>
            </div>
          </motion.div>
        </div>
        
      </div>
    </div>
  );
}
