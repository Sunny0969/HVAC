"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function AboutPageContent() {
  return (
    <div className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
      <div className="grid lg:grid-cols-12 gap-12">
        
        {/* Left Column: About Information */}
        <div className="lg:col-span-8 space-y-10">
          
          {/* About the firm */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-[2rem] p-8 md:p-12 shadow-xl shadow-gray-200/50 border border-gray-100"
          >
            <h2 className="text-3xl font-black text-[#022B3A] mb-6">Our Mission</h2>
            <p className="text-lg text-gray-700 font-medium leading-relaxed mb-6">
              HVAC Exit Advisors is a specialized division supported by KMF Business Advisors. We work with owners and qualified buyers of HVAC and related mechanical-service businesses, with particular attention to Florida opportunities.
            </p>
            <p className="text-lg text-gray-700 font-medium leading-relaxed">
              Our role is to help owners understand the information buyers will require, prepare a confidential market presentation, screen prospective buyers and coordinate the transaction process. We believe owners should understand both the value and the terms of an offer before making a decision.
            </p>
          </motion.div>

          {/* About Sanjay */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#022B3A] rounded-[2rem] p-8 md:p-12 shadow-xl text-white"
          >
            <div className="flex flex-col sm:flex-row sm:items-center gap-6 mb-8">
              <div className="w-24 h-24 sm:w-20 sm:h-20 rounded-full bg-[#EE5B2C]/20 flex items-center justify-center flex-shrink-0 border-2 border-[#EE5B2C]/30">
                <svg className="w-10 h-10 sm:w-8 sm:h-8 text-[#EE5B2C]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
              </div>
              <div>
                <span className="text-[#EE5B2C] font-bold tracking-wider uppercase text-xs mb-1 block">Owner & Principal Advisor</span>
                <h2 className="text-2xl md:text-3xl font-black text-white">Sanjay Wadhwani</h2>
                <p className="text-white/70 text-sm font-medium mt-1">Business, Franchise & Commercial Real-Estate Broker · KMF Business Advisors</p>
              </div>
            </div>
            <p className="text-lg text-white/90 font-medium leading-relaxed mb-6">
              Sanjay L. Wadhwani is a business, franchise and commercial real-estate broker with KMF Business Advisors. His work includes business valuations, confidential marketing, buyer qualification, negotiations and transaction coordination. He works directly with owners, buyers and professional advisers throughout the sale process.
            </p>
            <p className="text-lg text-white/90 font-medium leading-relaxed">
              Sanjay's approach emphasizes confidentiality, financial qualification and clear transaction procedures. His established buyer and investor network supports targeted outreach while each prospective buyer remains subject to the requirements of the individual opportunity.
            </p>
          </motion.div>

          {/* Developer Note */}
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6">
            <div className="flex items-start gap-3">
              <svg className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              <div>
                <p className="text-sm font-bold text-amber-800 mb-1">Biography Verification Note</p>
                <p className="text-sm text-amber-700 font-medium leading-relaxed">
                  Add license numbers, memberships, awards, transaction totals and years of experience only after the owner verifies each statement and provides the exact approved wording.
                </p>
              </div>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link
              href="/contact-us"
              className="px-8 py-4 bg-[#EE5B2C] hover:bg-orange-600 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all text-center"
            >
              Schedule a Private Consultation
            </Link>
            <Link
              href="/free-confidential-valuation"
              className="px-8 py-4 bg-white border-2 border-[#022B3A] hover:bg-gray-50 text-[#022B3A] font-bold rounded-xl transition-colors text-center"
            >
              Request a Confidential Valuation
            </Link>
          </div>

        </div>
        
        {/* Right Sticky Column: Contact Information (from old Team page) */}
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
                  <a href="https://wa.me/19548649161" target="_blank" rel="noopener noreferrer" className="block font-medium text-lg hover:text-[#EE5B2C] transition-colors py-2">(954) 864-9161</a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mr-4 flex-shrink-0">
                  <svg className="w-6 h-6 text-[#EE5B2C]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </div>
                <div>
                  <span className="block text-sm text-white/60 font-bold mb-1 uppercase tracking-wider">Direct Email</span>
                  <a href="mailto:contact@hvacexitadvisors.com" className="block font-medium text-lg hover:text-[#EE5B2C] transition-colors break-all py-2">contact@hvacexitadvisors.com</a>
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
