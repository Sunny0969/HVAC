"use client";

import React, { useState } from "react";
import BuyYourHvacFaq from "./BuyYourHvacFaq";
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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      message: formData.get('message'),
      formType: 'Buyer Inquiry',
      additionalData: {
        
        targets: formData.get('targets')
      ,
        pagePath: window.location.pathname,
        pageUrl: window.location.href
      }
    };

    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      setIsSuccess(true);
    } catch (err) {
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8">
      
          {/* Opening Copy */}
          <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-xl shadow-gray-200/50 border border-gray-100 mb-12">
            <p className="text-lg text-gray-700 leading-relaxed font-medium mb-8">
              An HVAC acquisition should match the buyer&apos;s experience, available capital, financing capacity, preferred geography and operational plan. We help qualified buyers define their criteria, review appropriate opportunities and follow a structured transaction process.
            </p>
            <h2 className="text-3xl font-black text-[#022B3A] mb-5">Buyer Qualification</h2>
            <p className="text-lg text-gray-700 leading-relaxed font-medium">
              Before receiving confidential company information or speaking with a seller, prospective buyers may be required to sign a nondisclosure agreement and provide proof of funds, a lender letter or other evidence of financial capacity. These requirements protect the seller and reduce unnecessary disclosure.
            </p>
          </div>

          {/* What Buyers Should Examine */}
          <div className="bg-gray-50 rounded-[2rem] p-8 md:p-12 shadow-md border border-gray-100 mb-12">
            <h2 className="text-3xl font-black text-[#022B3A] mb-6">What Buyers Should Examine</h2>
            <ul className="space-y-4">
              {[
                "Quality and consistency of reported earnings",
                "Maintenance agreements and recurring revenue",
                "Customer concentration and commercial-contract terms",
                "Technician retention and compensation",
                "Owner responsibilities and transition requirements",
                "Licensing and qualifying-agent continuity",
                "Fleet, equipment and expected capital expenditures",
                "Seasonality, service territory and marketing sources",
                "Lease, real estate and facility requirements",
                "Working capital, inventory and transaction structure",
              ].map((item, i) => (
                <li key={i} className="flex items-start bg-white p-4 rounded-xl shadow-sm border border-gray-100 text-gray-700 font-medium list-none">
                  <div className="w-8 h-8 rounded-full bg-[#EE5B2C]/10 text-[#EE5B2C] flex items-center justify-center flex-shrink-0 mr-4 mt-0.5">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Standard Transaction Process */}
          <div className="bg-[#022B3A] rounded-[2rem] p-8 md:p-12 shadow-xl text-white mb-12">
            <h2 className="text-3xl font-black mb-8">Standard Transaction Process</h2>
            <div className="space-y-4">
              {[
                "Define acquisition criteria and financial capacity.",
                "Complete confidentiality and qualification requirements.",
                "Review the confidential information memorandum.",
                "Submit an appropriate purchase contract and escrow deposit.",
                "Complete the agreed due-diligence review.",
                "Resolve financing, licensing, landlord and closing conditions.",
                "Complete closing and the agreed transition.",
              ].map((step, idx) => (
                <div key={idx} className="flex items-center bg-white/5 border border-white/10 p-4 rounded-xl">
                  <div className="w-10 h-10 rounded-full bg-[#EE5B2C] text-white font-bold flex items-center justify-center flex-shrink-0 mr-4 text-lg">
                    {idx + 1}
                  </div>
                  <p className="text-lg font-medium text-white/90">{step}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Communication Notice */}
          <div className="bg-orange-50 border border-orange-100 rounded-[2rem] p-8 md:p-10 mb-12">
            <div className="flex items-start gap-5">
              <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-[#EE5B2C]/15 flex items-center justify-center">
                <svg className="w-6 h-6 text-[#EE5B2C]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" /></svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#022B3A] mb-3">Communication With Employees and Customers</h3>
                <p className="text-lg text-gray-700 font-medium leading-relaxed">
                  Prospective buyers may not contact employees, customers, vendors or other parties connected with a confidential listing unless the seller gives written approval and the transaction process permits the communication.
                </p>
              </div>
            </div>
          </div>

          {/* Structured Answer: Comparison Table */}
          <div className="bg-white rounded-[2rem] p-8 shadow-xl shadow-gray-200/50 border border-gray-100 mb-12 overflow-hidden overflow-x-auto">
            <h2 className="text-2xl font-black text-[#022B3A] mb-6">Buying Unrepresented vs. With HVAC Exit Advisors</h2>
            <table className="w-full text-left border-collapse min-w-[600px]">
              <thead>
                <tr>
                  <th className="py-4 px-6 bg-gray-50 text-[#022B3A] font-bold border-b border-gray-200 rounded-tl-xl">Process Step</th>
                  <th className="py-4 px-6 bg-gray-50 text-gray-600 font-bold border-b border-gray-200">Unrepresented Buyer</th>
                  <th className="py-4 px-6 bg-[#022B3A] text-white font-bold border-b border-[#022B3A] rounded-tr-xl">With HVAC Exit Advisors</th>
                </tr>
              </thead>
              <tbody className="text-gray-700 font-medium">
                <tr>
                  <td className="py-4 px-6 border-b border-gray-100">Financial Verification</td>
                  <td className="py-4 px-6 border-b border-gray-100 text-gray-500">Must audit unadjusted tax returns manually</td>
                  <td className="py-4 px-6 border-b border-gray-100 bg-blue-50/30">We pre-vet SDE (Seller's Discretionary Earnings) and add-backs</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 border-b border-gray-100">Deal Origination</td>
                  <td className="py-4 px-6 border-b border-gray-100 text-gray-500">Public listings heavily picked over by competitors</td>
                  <td className="py-4 px-6 border-b border-gray-100 bg-blue-50/30">Access to exclusive, off-market Florida HVAC listings</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 border-b border-gray-100">Financing Support</td>
                  <td className="py-4 px-6 border-b border-gray-100 text-gray-500">Navigate SBA lenders independently</td>
                  <td className="py-4 px-6 border-b border-gray-100 bg-blue-50/30">Direct introductions to HVAC-friendly SBA preferred lenders</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Block 5: Why Us */}
          <motion.div 
            
            
            
            viewport={{ once: true, margin: "-50px" }}
            className="bg-white rounded-[2rem] shadow-xl shadow-gray-200/50 border border-gray-100 mb-12 overflow-hidden"
          >
            <div className="p-8 md:p-12">
              <h2 className="text-3xl font-black text-[#022B3A] mb-8">Why Buyers Work With HVAC Exit Advisors</h2>
              <motion.div 
                
                
                
                viewport={{ once: true }}
                className="space-y-4"
              >
                {[
                  { title: "HVAC only", desc: "we don't juggle unrelated industries, so our valuations and matches are sharper" },
                  { title: "Florida-wide reach", desc: <>active listings and relationships across <Link href="/south-florida/miami" className="text-[#EE5B2C] hover:underline font-bold">Miami</Link>, <Link href="/tampa-bay/tampa" className="text-[#EE5B2C] hover:underline font-bold">Tampa</Link>, <Link href="/central-florida/orlando" className="text-[#EE5B2C] hover:underline font-bold">Orlando</Link>, <Link href="/atlantic-coast/jacksonville" className="text-[#EE5B2C] hover:underline font-bold">Jacksonville</Link>, <Link href="/southwest-florida/fort-myers" className="text-[#EE5B2C] hover:underline font-bold">Fort Myers</Link>, and <Link href="/gulf-coast/sarasota" className="text-[#EE5B2C] hover:underline font-bold">Sarasota</Link></> },
                  { title: "Financially-verified listings", desc: "we vet sellers' numbers before you ever see them" },
                  { title: "Full-process support", desc: "financing conversations, due diligence, negotiation, and closing, start to finish" }
                ].map((item, i) => (
                  <motion.div key={i}  className="flex items-start bg-gray-50 p-5 rounded-xl border border-gray-100">
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
          
          {/* Block 7: Learn More Teasers */}
          <motion.div
            
            
            
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
            <div className="mt-6 text-center sm:hidden">
              <Link href="/resources" className="text-[#EE5B2C] font-bold hover:underline">View All Resources &rarr;</Link>
            </div>
          </motion.div>
      {/* Block 9: SEO Keywords Section for Buyers */}
      <motion.div
        
        
        
        viewport={{ once: true, margin: "-50px" }}
        className="mb-12 border-t border-gray-200 pt-12"
      >
                <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm mt-12">
          <h2 className="text-3xl font-black text-[#022B3A] mb-8">Common Questions When Buying an HVAC Business</h2>
          
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-[#022B3A] mb-3">What is the $5000 rule for HVAC systems?</h2>
            <p className="text-gray-700 font-medium leading-relaxed">
              The $5,000 rule is a common rule of thumb used by homeowners and contractors to decide whether to repair or replace an HVAC system. You multiply the age of the equipment by the estimated repair cost; if the result exceeds $5,000, the unit should be replaced. For buyers acquiring an HVAC business, understanding this rule helps evaluate the company's service-to-replacement conversion rate and future equipment sales potential.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold text-[#022B3A] mb-3">What type of business is an HVAC business?</h2>
            <p className="text-gray-700 font-medium leading-relaxed">
              An HVAC (Heating, Ventilation, and Air Conditioning) business is a skilled trade and mechanical services company. It operates in the construction, home services, and commercial facilities sectors. HVAC businesses are highly valued by private equity because they generate consistent, recurring revenue through preventative maintenance agreements (PMAs) and non-discretionary emergency repairs.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold text-[#022B3A] mb-3">Can HVAC make $100,000 a year?</h2>
            <p className="text-gray-700 font-medium leading-relaxed">
              Yes, a well-run independent HVAC business owner can easily make well over $100,000 a year in seller's discretionary earnings (SDE). In Florida, many established owner-operated HVAC companies generate between $200,000 and $500,000+ in annual SDE, while larger, manager-run mechanical contractors can produce multi-million dollar EBITDA figures.
            </p>
          </div>

          <div className="mb-0">
            <h2 className="text-2xl font-bold text-[#022B3A] mb-3">Why is the HVAC industry struggling?</h2>
            <p className="text-gray-700 font-medium leading-relaxed">
              While the HVAC industry is seeing record growth and consolidation, individual independent operators often struggle due to severe technician labor shortages, complex state licensing requirements (such as the Florida DBPR), and supply chain unpredictability. Acquiring an existing HVAC business with a stable, trained workforce allows buyers to bypass these common industry struggles.
            </p>
          </div>
        </div>
<BuyYourHvacFaq />
      </motion.div>

        </div>
        
        
      

        
        
        {/* Right Sticky Form Column (Reusing the requested layout) */}
        <div className="lg:col-span-4">
          <div className="sticky top-32 bg-white rounded-[2rem] shadow-xl shadow-gray-200/50 border border-gray-100 p-8 max-h-[calc(100vh-10rem)] overflow-y-auto">
            <h3 className="text-2xl font-black text-[#022B3A] mb-3">Get Matched with Listings</h3>
            <p className="text-gray-600 mb-6 font-medium leading-relaxed">
              Tell us what you're looking for in a Florida HVAC acquisition.
            </p>
            {isSuccess ? (
              <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center mt-4">
                <div className="w-16 h-16 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"></path></svg>
                </div>
                <h4 className="text-xl font-bold mb-2 text-[#022B3A]">Request Received</h4>
                <p className="text-gray-600">Thank you for reaching out. Our team will contact you shortly.</p>
                <button onClick={() => setIsSuccess(false)} className="mt-6 text-[#EE5B2C] font-bold text-sm hover:underline">Submit another request</button>
              </div>
            ) : (
              <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-sm font-bold text-[#022B3A] mb-1">Full Name *</label>
                  <input type="text" required className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#EE5B2C] focus:border-transparent outline-none transition-all text-base" name="name" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-[#022B3A] mb-1">Email Address *</label>
                  <input type="email" required className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#EE5B2C] focus:border-transparent outline-none transition-all text-base" name="email" placeholder="john@example.com" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-[#022B3A] mb-1">Phone Number *</label>
                  <input type="tel" required className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#EE5B2C] focus:border-transparent outline-none transition-all text-base" name="phone" placeholder="(555) 123-4567" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-[#022B3A] mb-1">Target Regions (Optional)</label>
                  <input type="text" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#EE5B2C] focus:border-transparent outline-none transition-all text-base" name="targets" placeholder="e.g. Tampa, Orlando" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-[#022B3A] mb-1">Acquisition Goals & Budget</label>
                  <textarea rows={4} className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#EE5B2C] focus:border-transparent outline-none transition-all text-base resize-none" placeholder="What kind of revenue and structure are you targeting?" name="message"></textarea>
                </div>
                <button type="submit" disabled={isSubmitting} className="w-full bg-[#EE5B2C] hover:bg-orange-600 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 mt-2 flex justify-center items-center">
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Submitting...
                    </span>
                  ) : "Submit Inquiry"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
      
      {/* Closing CTA Band */}
      <motion.div 
        
        
        
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

