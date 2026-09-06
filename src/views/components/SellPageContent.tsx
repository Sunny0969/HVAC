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

export default function SellPageContent() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8">
      
      {/* Block 1: Intro (Clean White Card) */}
      <motion.div 
        variants={fadeUpVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="bg-white rounded-[2rem] p-8 md:p-12 shadow-xl shadow-gray-200/50 border border-gray-100 mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-black text-[#022B3A] mb-6">Thinking About Selling Your HVAC Business? Here's Where to Start.</h2>
        <div className="grid md:grid-cols-2 gap-8 text-lg text-gray-700 leading-relaxed font-medium">
          <p>
            Deciding to sell the company you built is rarely simple - there's the business itself, your team, your customers, and what comes next for you. Most Florida HVAC owners we work with aren't asking "should I sell," they're asking "how do I sell without blowing up my business in the process." That's the part a specialist broker actually solves.
          </p>
          <p>
            SunState HVAC Brokers works exclusively with heating and cooling companies across Florida - we don't sell restaurants one week and HVAC shops the next. That focus means we already know how Florida buyers value seasonal service revenue, maintenance-agreement books, and technician retention, before we ever look at your P&L.
          </p>
        </div>
      </motion.div>

      {/* Block 2: Confidentiality (Dark Navy Card) */}
      <motion.div 
        variants={fadeUpVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="bg-[#022B3A] rounded-[2rem] p-8 md:p-12 shadow-2xl mb-12 text-white relative overflow-hidden"
      >
        {/* Subtle background glow */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#EE5B2C] opacity-10 rounded-full blur-[80px]" />
        
        <h2 className="text-3xl md:text-4xl font-black mb-6 relative z-10">Why Confidentiality Comes First When You Sell an HVAC Company</h2>
        <p className="text-lg text-white/80 leading-relaxed mb-6 relative z-10 max-w-3xl">
          The moment employees or customers suspect a sale is coming, things move fast - and not in your favor. Technicians start job-hunting. Commercial accounts start requesting backup bids. None of that helps your price.
        </p>
        <p className="text-lg text-white/80 leading-relaxed mb-10 relative z-10 max-w-3xl">
          Every step of <Link href="/how-it-works" className="text-[#EE5B2C] hover:underline font-bold transition-colors">our process</Link> - from the first conversation to signed documents - runs under strict confidentiality. Buyers sign an NDA before they see your name, address, or financials. Marketing materials describe your business by category and region rather than by name, until a qualified buyer is ready to move forward.
        </p>
        
        <div className="relative z-10 bg-white/5 border border-white/10 rounded-2xl p-8">
          <p className="text-xl font-bold mb-6 text-[#EE5B2C]">What this looks like in practice:</p>
          <motion.ul 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 gap-4 text-lg text-white/90"
          >
            {[
              "Blind marketing profile - no company name, no address, no identifying photos",
              "NDA required before any financial detail is released",
              "Buyer pre-screening for financial capability before an introduction happens",
              "You control who finds out, and when"
            ].map((text, i) => (
              <motion.li key={i} variants={fadeUpVariant} className="flex items-start bg-black/20 p-4 rounded-xl">
                <svg className="w-6 h-6 text-[#EE5B2C] mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
                <span className="font-medium">{text}</span>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </motion.div>

      {/* Block 3: Valuation (Vibrant Orange Gradient Card) */}
      <motion.div 
        variants={fadeUpVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="bg-gradient-to-br from-[#EE5B2C] to-orange-500 rounded-[2rem] p-8 md:p-12 shadow-2xl shadow-orange-500/20 mb-12 text-white relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white opacity-5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3" />
        
        <div className="md:flex gap-12 items-center relative z-10">
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-black mb-6 drop-shadow-md">What's Your Florida HVAC Business Actually Worth?</h2>
            <p className="text-lg text-white/90 leading-relaxed mb-6 font-medium">
              Most valuation guesses online come from rules of thumb ("2-3x SDE") that ignore what's actually driving Florida HVAC pricing right now - recurring maintenance revenue, install mix, fleet age, technician headcount, and how much of the business depends on the owner personally.
            </p>
            <p className="text-lg text-white/90 leading-relaxed mb-8 font-medium">
              We build your valuation from real, current market data: comparable Florida HVAC sales, buyer demand in your specific region, and the financial and operational details that move a multiple up or down. You'll walk away knowing what a serious buyer would actually pay - not a generic estimate.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/free-valuation" className="inline-block px-8 py-4 bg-[#022B3A] hover:bg-[#033b50] text-white font-bold rounded-lg transition-colors shadow-lg text-center">
                Get My Free Valuation &rarr;
              </Link>
              <Link href="/hvac-business-valuation-calculator" className="inline-block px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold rounded-lg transition-colors shadow-lg text-center backdrop-blur-sm">
                Try Free Calculator
              </Link>
            </div>
          </div>
          
          <div className="w-full md:w-80 mt-10 md:mt-0 bg-white/10 backdrop-blur-sm border border-white/20 p-8 rounded-2xl shadow-xl">
            <p className="text-xl font-bold mb-4 drop-shadow-sm">Free Valuation includes:</p>
            <ul className="space-y-4 text-white/90 font-medium">
              <li className="flex items-start">
                <span className="w-2 h-2 rounded-full bg-white mt-2 mr-3 flex-shrink-0 shadow-sm" />
                A real range based on comparable Florida HVAC deals
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 rounded-full bg-white mt-2 mr-3 flex-shrink-0 shadow-sm" />
                What's helping your number and what's holding it back
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 rounded-full bg-white mt-2 mr-3 flex-shrink-0 shadow-sm" />
                A no-obligation conversation - you decide if or when to move forward
              </li>
            </ul>
          </div>
        </div>
      </motion.div>

      {/* Block 4 & 5 Grid: Marketing & Closing */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <motion.div 
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="bg-white rounded-[2rem] p-8 shadow-xl shadow-gray-200/50 border border-gray-100 flex flex-col"
        >
          <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"/></svg>
          </div>
          <h2 className="text-2xl font-black text-[#022B3A] mb-4">Marketing Your Business to Buyers Who Can Actually Close</h2>
          <p className="text-gray-700 leading-relaxed mb-4 font-medium flex-1">
            A listing that reaches a thousand browsers and zero qualified buyers wastes your time and risks your confidentiality for nothing. Before we introduce anyone to your business, we verify they have the capital, financing, or backing to complete a deal at your price point.
          </p>
          <p className="text-gray-700 leading-relaxed font-medium">
            We also maintain an active network of buyers already looking specifically for Florida HVAC companies - private equity roll-ups, competitors looking to expand territory, and experienced operators.
          </p>
        </motion.div>

        <motion.div 
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="bg-white rounded-[2rem] p-8 shadow-xl shadow-gray-200/50 border border-gray-100 flex flex-col"
        >
          <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center mb-6">
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
          </div>
          <h2 className="text-2xl font-black text-[#022B3A] mb-4">From Offer to Closing Day - We Stay With You</h2>
          <p className="text-gray-700 leading-relaxed mb-6 font-medium">
            An accepted offer isn't a done deal. Due diligence, financing contingencies, lease assignments, licensing transfers, vehicle and equipment titles, and vendor agreements all have to close cleanly. We manage this alongside you and your CPA.
          </p>
          <div className="bg-gray-50 rounded-xl p-5 mt-auto">
            <p className="text-sm font-bold mb-3 text-[#022B3A] uppercase tracking-wider">We Handle:</p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-700 font-medium">
              <li className="flex items-center"><span className="text-[#EE5B2C] mr-2">✔</span> Due diligence coordination</li>
              <li className="flex items-center"><span className="text-[#EE5B2C] mr-2">✔</span> Lease and contract transfer</li>
              <li className="flex items-center"><span className="text-[#EE5B2C] mr-2">✔</span> Equipment & fleet valuation</li>
              <li className="flex items-center"><span className="text-[#EE5B2C] mr-2">✔</span> FL contractor license transfer</li>
              <li className="flex items-center"><span className="text-[#EE5B2C] mr-2">✔</span> Negotiation support</li>
            </ul>
          </div>
        </motion.div>
      </div>

      {/* Block 6 & 7: Right Time & Why Us */}
      <motion.div 
        variants={fadeUpVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="bg-white rounded-[2rem] shadow-xl shadow-gray-200/50 border border-gray-100 mb-12 overflow-hidden"
      >
        <div className="grid md:grid-cols-5">
          <div className="p-8 md:p-12 md:col-span-2 bg-[#F8FAFC]">
            <h2 className="text-3xl font-black text-[#022B3A] mb-6">Is Now the Right Time to Sell Your HVAC Business?</h2>
            <p className="text-lg text-gray-700 leading-relaxed font-medium">
              There's no universal right answer - it depends on your revenue trend, your team's readiness to operate without you, your personal goals, and current buyer demand in Florida's HVAC market. What we can tell you is what buyers are paying for businesses like yours right now - which is exactly what a <Link href="/free-valuation" className="text-[#EE5B2C] hover:underline font-bold transition-colors">free valuation</Link> gives you, with zero obligation to list.
            </p>
          </div>
          <div className="p-8 md:p-12 md:col-span-3 bg-white">
            <Link href="/why-sell-with-us" className="group inline-block mb-8">
              <h2 className="text-3xl font-black text-[#022B3A] group-hover:text-[#EE5B2C] transition-colors flex items-center">
                Why Florida HVAC Owners Choose SunState
                <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity">&rarr;</span>
              </h2>
            </Link>
            <motion.div 
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-4"
            >
              {[
                { title: "HVAC only", desc: <>we don't split focus across unrelated industries</> },
                { title: "Former owner-operator on our team", desc: <>we've sat on your side of the table</> },
                { title: "Florida-wide reach", desc: <>
                  <Link href="/florida/miami" className="text-[#EE5B2C] hover:underline font-semibold">Miami</Link>, <Link href="/florida/tampa" className="text-[#EE5B2C] hover:underline font-semibold">Tampa</Link>, <Link href="/florida/orlando" className="text-[#EE5B2C] hover:underline font-semibold">Orlando</Link>, <Link href="/florida/jacksonville" className="text-[#EE5B2C] hover:underline font-semibold">Jacksonville</Link>, <Link href="/florida/fort-myers" className="text-[#EE5B2C] hover:underline font-semibold">Fort Myers</Link>, <Link href="/florida/sarasota" className="text-[#EE5B2C] hover:underline font-semibold">Sarasota</Link>, and every market between
                </> },
                { title: "Buyer-qualified process", desc: <>no tire-kickers, no wasted disclosure</> },
                { title: "No fee until you close", desc: <>our incentive is your outcome, not a listing fee</> }
              ].map((item, i) => (
                <motion.div key={i} variants={fadeUpVariant} className="flex items-start bg-gray-50 p-4 rounded-xl border border-gray-100">
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
        </div>
      </motion.div>

      {/* Block 8: FAQs (Grid layout for cards) */}
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
            { q: "How long does it take to sell an HVAC business in Florida?", a: "Timelines vary with business size, financial documentation, and buyer demand in your region, but most Florida HVAC sales we handle move from listing to closing within several months once the business is properly prepared and priced." },
            { q: "Will my employees or customers find out I'm selling?", a: "Not through us. We market confidentially, require signed NDAs before releasing any identifying details, and control disclosure timing with you throughout the process." },
            { q: "What's my HVAC business worth?", a: "It depends on revenue mix (install vs. service vs. maintenance agreements), technician retention, fleet condition, and current Florida buyer demand. A free valuation gives you a real, data-backed range." },
            { q: "Do I need to have my financials perfectly organized before reaching out?", a: "No - many owners start the conversation before financials are fully clean. Part of what we do is help you understand what documentation buyers will expect and get you ready." },
            { q: "What does it cost to work with SunState HVAC Brokers?", a: "We don't charge a fee unless your business sells. Your free valuation and initial consultation carry no obligation." }
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
                      <p className="pt-4">
                        {faq.q === "What's my HVAC business worth?" ? (
                          <>
                            {faq.a} <Link href="/faqs" className="text-[#EE5B2C] hover:underline whitespace-nowrap ml-1">Read more in full FAQs &rarr;</Link>
                          </>
                        ) : (
                          faq.a
                        )}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Block 9: Success Stories Teasers */}
      <motion.div
        variants={fadeUpVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="mb-12"
      >
        <div className="flex justify-between items-end mb-8 px-2">
          <h2 className="text-3xl font-black text-[#022B3A]">Recent Florida HVAC Exits</h2>
          <Link href="/success-stories" className="text-[#EE5B2C] font-bold hover:underline hidden sm:block">View All Success Stories &rarr;</Link>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          <Link href="/success-stories/coastal-mechanical" className="group block bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-xl hover:border-orange-200 transition-all">
            <span className="text-xs font-bold tracking-wider text-gray-400 uppercase mb-2 block">Miami, FL</span>
            <h3 className="text-xl font-bold text-[#022B3A] group-hover:text-[#EE5B2C] transition-colors mb-3">Coastal Mechanical Group</h3>
            <p className="text-gray-600 font-medium line-clamp-3 mb-4">Acquired by a regional private equity group after a highly competitive 4-buyer bidding war. Closed at 25% above initial expectations.</p>
            <span className="text-sm font-bold text-[#EE5B2C] flex items-center">Read Case Study <span className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity">&rarr;</span></span>
          </Link>
          <Link href="/success-stories/sunshine-cooling" className="group block bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-xl hover:border-orange-200 transition-all">
            <span className="text-xs font-bold tracking-wider text-gray-400 uppercase mb-2 block">Orlando, FL</span>
            <h3 className="text-xl font-bold text-[#022B3A] group-hover:text-[#EE5B2C] transition-colors mb-3">Sunshine Cooling</h3>
            <p className="text-gray-600 font-medium line-clamp-3 mb-4">A flawless transition for a retiring founder. Secured a strategic buyer who retained 100% of the existing technician workforce.</p>
            <span className="text-sm font-bold text-[#EE5B2C] flex items-center">Read Case Study <span className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity">&rarr;</span></span>
          </Link>
          <Link href="/success-stories/gulf-coast-refrigeration" className="group block bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-xl hover:border-orange-200 transition-all">
            <span className="text-xs font-bold tracking-wider text-gray-400 uppercase mb-2 block">Tampa, FL</span>
            <h3 className="text-xl font-bold text-[#022B3A] group-hover:text-[#EE5B2C] transition-colors mb-3">Gulf Coast Refrigeration</h3>
            <p className="text-gray-600 font-medium line-clamp-3 mb-4">Leveraged commercial maintenance contracts to attract a national buyer looking for a strong foothold in the Tampa market.</p>
            <span className="text-sm font-bold text-[#EE5B2C] flex items-center">Read Case Study <span className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity">&rarr;</span></span>
          </Link>
        </div>
        <div className="mt-6 text-center sm:hidden">
          <Link href="/success-stories" className="text-[#EE5B2C] font-bold hover:underline">View All Success Stories &rarr;</Link>
        </div>
      </motion.div>

        </div>
        
        {/* Right Sticky Form Column */}
        <div className="lg:col-span-4">
          <div className="sticky top-32 bg-white rounded-[2rem] shadow-xl shadow-gray-200/50 border border-gray-100 p-8 max-h-[calc(100vh-10rem)] overflow-y-auto">
            <h3 className="text-2xl font-black text-[#022B3A] mb-3">Request a Free Valuation</h3>
            <p className="text-gray-600 mb-6 font-medium leading-relaxed">
              Confidential, no-obligation conversation about the value of your HVAC business.
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
                <label className="block text-sm font-bold text-[#022B3A] mb-1">Company Name *</label>
                <input type="text" required className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#EE5B2C] focus:border-transparent outline-none transition-all" placeholder="Sunshine HVAC" />
              </div>
              <div>
                <label className="block text-sm font-bold text-[#022B3A] mb-1">Additional Details (Optional)</label>
                <textarea rows={4} className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#EE5B2C] focus:border-transparent outline-none transition-all resize-none" placeholder="Any specific questions or details?"></textarea>
              </div>
              <button type="submit" className="w-full bg-[#EE5B2C] hover:bg-orange-600 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 mt-2">
                Submit Request
              </button>
            </form>
          </div>
        </div>
      </div>
    </article>
  );
}
