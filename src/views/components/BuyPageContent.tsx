"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence, Variants } from "framer-motion";

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

export default function BuyPageContent() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8">
      
          {/* Block 1: Why Buy (Clean White Card) */}
          <motion.div 
            variants={fadeUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="bg-white rounded-[2rem] p-8 md:p-12 shadow-xl shadow-gray-200/50 border border-gray-100 mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-black text-[#022B3A] mb-6">Why Buy an HVAC Business Instead of Starting One?</h2>
            <div className="text-lg text-gray-700 leading-relaxed font-medium space-y-6">
              <p>
                Air conditioning and heating systems in Florida wear out fast - the average residential unit lasts roughly 10-15 years in this climate, which means an established HVAC company already has something a startup doesn't: a customer base that keeps calling. This makes HVAC one of the most recession-resistant service categories in the state.
              </p>
              <p>
                Buying an existing business means you inherit trained technicians, a fleet, vendor relationships, and - most importantly - recurring revenue from service agreements and maintenance contracts, instead of spending years building that from zero.
              </p>
            </div>
          </motion.div>

          {/* Block 2: What to Look For (Checklist Card) */}
          <motion.div 
            variants={fadeUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="bg-gray-50 rounded-[2rem] p-8 md:p-12 shadow-md border border-gray-100 mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-black text-[#022B3A] mb-6">What to Look for Before You Buy an HVAC Company</h2>
            <p className="text-lg text-gray-700 leading-relaxed font-medium mb-8">
              Not every listing that looks good on paper is a good fit. Before you get attached to a number, you need real answers on:
            </p>
            
            <motion.ul 
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-4 mb-8"
            >
              {[
                { title: "Service area", desc: "is the territory big enough (or too spread out) for how you plan to operate?" },
                { title: "Residential vs. commercial mix", desc: "different margins, different growth ceilings" },
                { title: "New construction vs. service & maintenance", desc: "construction-heavy revenue is more cyclical; service and maintenance agreements are the steadier, more valuable base" },
                { title: "Team structure", desc: "is this a one-owner-operator shop, or does it run with staff who'll stay after the sale?" },
                { title: "Budget fit", desc: "purchase price relative to what you can finance or bring in cash" },
                { title: "True earning power", desc: "what the business actually generates once you normalize for owner perks and one-off expenses" }
              ].map((item, i) => (
                <motion.li key={i} variants={fadeUpVariant} className="flex items-start bg-white p-5 rounded-xl shadow-sm border border-gray-100">
                  <div className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0 mr-4 mt-1">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                  </div>
                  <div className="text-gray-700 font-medium">
                    <strong className="text-[#022B3A]">{item.title}</strong> - {item.desc}
                  </div>
                </motion.li>
              ))}
            </motion.ul>
            <p className="text-lg text-[#022B3A] font-bold">
              We walk through each of these with you against the specific listings you're considering - not as a generic checklist, but against real numbers.
            </p>
          </motion.div>

          {/* Block 3 & 4 Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <motion.div 
              variants={fadeUpVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="bg-white rounded-[2rem] p-8 shadow-xl shadow-gray-200/50 border border-gray-100 flex flex-col"
            >
              <div className="w-14 h-14 bg-orange-50 text-[#EE5B2C] rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              </div>
              <h2 className="text-2xl font-black text-[#022B3A] mb-4">You've Found a Business You Like - Now What?</h2>
              <p className="text-gray-700 leading-relaxed mb-6 font-medium">
                Finding the right company is only the first half of the deal. Before you move forward, you'll need clear answers on:
              </p>
              <ul className="space-y-3 mb-6 flex-1">
                {[
                  "Financing (SBA, seller financing, cash)",
                  "Which financing route fits this deal",
                  "Due diligence (financials, licensing, equipment)",
                  "Fair market value based on comparables",
                  "Transition planning (ownership, staff, customers)"
                ].map((item, i) => (
                  <li key={i} className="flex items-start text-sm text-gray-700 font-medium">
                    <span className="text-[#EE5B2C] mr-3 font-bold">•</span> {item}
                  </li>
                ))}
              </ul>
              <p className="text-sm font-bold text-[#022B3A] p-4 bg-gray-50 rounded-xl">
                We work through all of this alongside you so you're negotiating from an informed position, not guessing.
              </p>
            </motion.div>

            <motion.div 
              variants={fadeUpVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="bg-[#022B3A] text-white rounded-[2rem] p-8 shadow-xl shadow-[#022B3A]/20 flex flex-col relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#EE5B2C] opacity-20 rounded-full blur-[80px]" />
              <div className="w-14 h-14 bg-white/10 text-white rounded-2xl flex items-center justify-center mb-6 relative z-10">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
              </div>
              <h2 className="text-2xl font-black mb-4 relative z-10">Why Recurring Revenue Should Drive Your Search</h2>
              <p className="text-white/80 leading-relaxed mb-4 font-medium relative z-10">
                The most valuable HVAC businesses aren't necessarily the ones with the highest top-line revenue - they're the ones with the most predictable revenue. A company built around maintenance agreements and repeat service calls is worth more, and more stable to own, than one that depends heavily on new construction contracts that dry up when building slows down.
              </p>
              <p className="text-white/80 leading-relaxed font-medium mt-auto relative z-10 pt-6 border-t border-white/20">
                When we help you evaluate a listing, we look specifically at how much of the revenue is contracted and recurring versus one-time - because that number tells you more about your future cash flow than almost anything else on the P&L.
              </p>
            </motion.div>
          </div>

          {/* Block 5: Why Us */}
          <motion.div 
            variants={fadeUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="bg-white rounded-[2rem] shadow-xl shadow-gray-200/50 border border-gray-100 mb-12 overflow-hidden"
          >
            <div className="p-8 md:p-12">
              <h2 className="text-3xl font-black text-[#022B3A] mb-8">Why Buyers Work With SunState</h2>
              <motion.div 
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-4"
              >
                {[
                  { title: "HVAC only", desc: "we don't juggle unrelated industries, so our valuations and matches are sharper" },
                  { title: "Florida-wide reach", desc: <>active listings and relationships across <Link href="/florida/miami" className="text-[#EE5B2C] hover:underline font-bold">Miami</Link>, <Link href="/florida/tampa" className="text-[#EE5B2C] hover:underline font-bold">Tampa</Link>, <Link href="/florida/orlando" className="text-[#EE5B2C] hover:underline font-bold">Orlando</Link>, <Link href="/florida/jacksonville" className="text-[#EE5B2C] hover:underline font-bold">Jacksonville</Link>, <Link href="/florida/fort-myers" className="text-[#EE5B2C] hover:underline font-bold">Fort Myers</Link>, and <Link href="/florida/sarasota" className="text-[#EE5B2C] hover:underline font-bold">Sarasota</Link></> },
                  { title: "Financially-verified listings", desc: "we vet sellers' numbers before you ever see them" },
                  { title: "Full-process support", desc: "financing conversations, due diligence, negotiation, and closing, start to finish" }
                ].map((item, i) => (
                  <motion.div key={i} variants={fadeUpVariant} className="flex items-start bg-gray-50 p-5 rounded-xl border border-gray-100">
                    <div className="w-8 h-8 rounded-full bg-orange-100 text-[#EE5B2C] flex items-center justify-center flex-shrink-0 mr-4">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                    </div>
                    <div>
                      <strong className="text-[#022B3A] block">{item.title}</strong>
                      <span className="text-gray-600 text-sm">- {item.desc}</span>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>

          {/* Block 6: FAQs (Accordion) */}
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-black mb-10 text-center text-[#022B3A]">Frequently Asked Questions</h2>
            <div className="flex flex-col space-y-4">
              {[
                { q: "How much cash do I need to buy an HVAC business in Florida?", a: "It depends on the purchase price and financing structure - SBA loans, seller financing, and combinations of both are common in HVAC acquisitions. We'll walk you through what's realistic for the listings you're considering." },
                { q: "What should I check during due diligence on an HVAC company?", a: <>Financial statements and normalized earnings, customer contracts and maintenance-agreement retention, technician retention, equipment and fleet condition, licensing status, and any pending liabilities or warranty obligations. <Link href="/how-it-works" className="text-[#EE5B2C] hover:underline font-bold whitespace-nowrap ml-1">Learn more about our due diligence process &rarr;</Link></> },
                { q: "Is it better to buy a residential or commercial HVAC business?", a: "Both can work well - residential tends to offer more recurring maintenance revenue, while commercial often means larger contract sizes. The right fit depends on your goals, experience, and available capital." },
                { q: "How long does it typically take to buy an HVAC business?", a: "Timelines vary by financing and due diligence complexity, but most acquisitions move from serious interest to closing within a few months once financing is lined up." },
                { q: "Do you only work with buyers who already own HVAC experience?", a: "No - we work with first-time buyers, industry veterans, and companies looking to expand through acquisition. We match the guidance to your experience level." }
              ].map((faq, i) => (
                <motion.div 
                  key={i} 
                  variants={fadeUpVariant} 
                  className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
                >
                  <button 
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full text-left p-6 md:p-8 flex justify-between items-center focus:outline-none group"
                  >
                    <h3 className="text-xl font-black text-[#022B3A] group-hover:text-[#EE5B2C] transition-colors pr-6">
                      {faq.q}
                    </h3>
                    <span 
                      className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-[#EE5B2C] transition-transform duration-300" 
                      style={{ transform: openFaq === i ? 'rotate(180deg)' : 'rotate(0deg)' }}
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                    </span>
                  </button>
                  <AnimatePresence>
                    {openFaq === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <div className="px-6 md:px-8 pb-8 pt-0 text-gray-600 text-lg font-medium border-t border-gray-50 mt-2">
                          <p className="pt-4">{faq.a}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          {/* Block 7: Learn More Teasers */}
          <motion.div
            variants={fadeUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="mb-12"
          >
            <div className="flex justify-between items-end mb-8 px-2">
              <h2 className="text-3xl font-black text-[#022B3A]">Learn More Before You Buy</h2>
              <Link href="/resources" className="text-[#EE5B2C] font-bold hover:underline hidden sm:block">View All Resources &rarr;</Link>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              <Link href="/resources/real-number-evaluating-hvac" className="group block bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-xl hover:border-orange-200 transition-all">
                <span className="text-xs font-bold tracking-wider text-gray-400 uppercase mb-2 block">Acquisition Guide</span>
                <h3 className="text-xl font-bold text-[#022B3A] group-hover:text-[#EE5B2C] transition-colors mb-4">What's the Real Number That Matters When You're Evaluating an HVAC Business?</h3>
                <span className="text-sm font-bold text-[#EE5B2C] flex items-center">Read Article <span className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity">&rarr;</span></span>
              </Link>
              <Link href="/resources/timing-purchase-florida" className="group block bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-xl hover:border-orange-200 transition-all">
                <span className="text-xs font-bold tracking-wider text-gray-400 uppercase mb-2 block">Market Trends</span>
                <h3 className="text-xl font-bold text-[#022B3A] group-hover:text-[#EE5B2C] transition-colors mb-4">Timing Your HVAC Business Purchase: What Florida Buyers Should Know</h3>
                <span className="text-sm font-bold text-[#EE5B2C] flex items-center">Read Article <span className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity">&rarr;</span></span>
              </Link>
            </div>
          </motion.div>

          {/* Block 8: Success Stories Teasers */}
          <motion.div
            variants={fadeUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="mb-12"
          >
            <div className="flex justify-between items-end mb-8 px-2">
              <h2 className="text-3xl font-black text-[#022B3A]">Recent Buyer Success Stories</h2>
              <Link href="/success-stories" className="text-[#EE5B2C] font-bold hover:underline hidden sm:block">View All Success Stories &rarr;</Link>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              <Link href="/success-stories/first-time-buyer-tampa" className="group block bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-xl hover:border-orange-200 transition-all">
                <span className="text-xs font-bold tracking-wider text-gray-400 uppercase mb-2 block">First-Time Buyer • Tampa, FL</span>
                <h3 className="text-xl font-bold text-[#022B3A] group-hover:text-[#EE5B2C] transition-colors mb-3">Transitioning from Corporate to HVAC Ownership</h3>
                <p className="text-gray-600 font-medium line-clamp-3 mb-4">How we helped a former operations executive secure SBA financing to acquire a heavily residential, $3M revenue HVAC business with 800+ active maintenance agreements.</p>
                <span className="text-sm font-bold text-[#EE5B2C] flex items-center">Read Case Study <span className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity">&rarr;</span></span>
              </Link>
              <Link href="/success-stories/private-equity-roll-up" className="group block bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-xl hover:border-orange-200 transition-all">
                <span className="text-xs font-bold tracking-wider text-gray-400 uppercase mb-2 block">Strategic Acquisition • Orlando, FL</span>
                <h3 className="text-xl font-bold text-[#022B3A] group-hover:text-[#EE5B2C] transition-colors mb-3">Expanding Territory with Commercial Focus</h3>
                <p className="text-gray-600 font-medium line-clamp-3 mb-4">Navigating complex due diligence and commercial contract transfers for a regional group adding a $5M commercial HVAC operator to their portfolio.</p>
                <span className="text-sm font-bold text-[#EE5B2C] flex items-center">Read Case Study <span className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity">&rarr;</span></span>
              </Link>
            </div>
          </motion.div>

        </div>
        
        {/* Right Sticky Form Column (Reusing the requested layout) */}
        <div className="lg:col-span-4">
          <div className="sticky top-32 bg-white rounded-[2rem] shadow-xl shadow-gray-200/50 border border-gray-100 p-8 max-h-[calc(100vh-10rem)] overflow-y-auto">
            <h3 className="text-2xl font-black text-[#022B3A] mb-3">Get Matched with Listings</h3>
            <p className="text-gray-600 mb-6 font-medium leading-relaxed">
              Tell us what you're looking for in a Florida HVAC acquisition.
            </p>
            <form className="flex flex-col space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm font-bold text-[#022B3A] mb-1">Full Name *</label>
                <input type="text" required className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#EE5B2C] focus:border-transparent outline-none transition-all" placeholder="John Doe" />
              </div>
              <div>
                <label className="block text-sm font-bold text-[#022B3A] mb-1">Email Address *</label>
                <input type="email" required className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#EE5B2C] focus:border-transparent outline-none transition-all" placeholder="john@example.com" />
              </div>
              <div>
                <label className="block text-sm font-bold text-[#022B3A] mb-1">Phone Number *</label>
                <input type="tel" required className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#EE5B2C] focus:border-transparent outline-none transition-all" placeholder="(555) 123-4567" />
              </div>
              <div>
                <label className="block text-sm font-bold text-[#022B3A] mb-1">Target Regions (Optional)</label>
                <input type="text" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#EE5B2C] focus:border-transparent outline-none transition-all" placeholder="e.g. Tampa, Orlando" />
              </div>
              <div>
                <label className="block text-sm font-bold text-[#022B3A] mb-1">Acquisition Goals & Budget</label>
                <textarea rows={4} className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#EE5B2C] focus:border-transparent outline-none transition-all resize-none" placeholder="What kind of revenue and structure are you targeting?"></textarea>
              </div>
              <button type="submit" className="w-full bg-[#EE5B2C] hover:bg-orange-600 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 mt-2">
                Submit Inquiry
              </button>
            </form>
          </div>
        </div>
      </div>
      
      {/* Closing CTA Band */}
      <motion.div 
        variants={fadeUpVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="mt-16 bg-[#022B3A] rounded-[2rem] p-10 md:p-16 text-center shadow-2xl relative overflow-hidden"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-full bg-[#EE5B2C] opacity-10 rounded-full blur-[100px]" />
        
        <h2 className="text-3xl md:text-5xl font-black text-white mb-6 relative z-10 max-w-3xl mx-auto leading-tight">
          Ready to Find Your Next HVAC Acquisition?
        </h2>
        <p className="text-xl text-white/80 font-medium mb-10 relative z-10 max-w-2xl mx-auto">
          Browse vetted Florida listings or talk to a broker about what you're looking for - no pressure, no obligation.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
          <Link 
            href="/listings" 
            className="w-full sm:w-auto px-8 py-4 bg-[#EE5B2C] hover:bg-orange-600 text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 text-center"
          >
            See Current Listings &rarr;
          </Link>
          <Link 
            href="/contact-us" 
            className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold rounded-lg transition-colors text-center"
          >
            Talk to a Broker
          </Link>
        </div>
      </motion.div>
    </article>
  );
}
