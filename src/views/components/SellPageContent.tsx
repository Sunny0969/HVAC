"use client";

import React, { useState } from "react";
import SellYourHvacFaq from "./SellYourHvacFaq";
import SellPagePeopleAlsoAsk from "./SellPagePeopleAlsoAsk";
import Link from "next/link";

export default function SellPageContent() {
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
      formType: 'Seller Inquiry',
      additionalData: {
        company: formData.get('company'),
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
        <div className="lg:col-span-8 space-y-12">
          
          {/* Executive Summary (GEO/AEO) */}
          <div className="bg-[#022B3A]/5 border border-[#022B3A]/10 p-8 rounded-2xl">
            <div className="flex flex-wrap items-center justify-between border-b border-gray-200 pb-4 mb-4">
              <h2 className="text-2xl font-black text-[#022B3A]">Executive Summary</h2>
              <span className="text-sm font-bold text-gray-500 bg-white px-3 py-1 rounded-full border border-gray-200">Last Updated: September 2026</span>
            </div>
            
            <p className="text-gray-700 font-medium leading-relaxed mb-6">
              <strong>The bottom line:</strong> Selling a Florida HVAC business requires specialized valuation of Maintenance Agreements (PMAs), confidential marketing, and strategic buyer selection. 
            </p>
            <p className="text-gray-700 font-medium leading-relaxed mb-6">
              <strong>What is an HVAC business sale?</strong> It is the strategic transfer of ownership, assets, customer contracts, and licensing of a heating, ventilation, and air conditioning company to a qualified buyer.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-bold text-[#EE5B2C] mb-2 text-sm uppercase tracking-wider">Audience & Use Case</h3>
                <p className="text-sm font-medium text-gray-700">
                  This guide is for Florida HVAC, plumbing, and mechanical contractors planning for retirement, succession, or an outright exit.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-[#EE5B2C] mb-2 text-sm uppercase tracking-wider">Market Data</h3>
                <p className="text-sm font-medium text-gray-700">
                  Most healthy businesses currently trade between 2.5x and 4x SDE, depending heavily on recurring commercial and residential revenue.
                </p>
              </div>
            </div>
          </div>

          {/* Opening Copy */}
          <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-xl shadow-gray-200/50 border border-gray-100">
            <p className="text-lg text-gray-700 leading-relaxed font-medium mb-6">
              Selling an HVAC business can involve several connected decisions. When evaluating hvac companies for sale, buyers consider: timing, value, confidentiality, buyer selection, financing, employee transition and the owner’s role after closing. A properly managed <Link href="/how-it-works" className="text-[#EE5B2C] hover:underline font-bold">structured process</Link> gives buyers the information they need while protecting the company’s day-to-day operations.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed font-medium">
              We help owners prepare the business, present its strengths accurately among other hvac companies for sale, screen prospective buyers looking for an hvac business for sale, and evaluate the complete economics of each offer.
            </p>
          </div>

          {/* AEO & GEO Optimized Section for "Sell My HVAC Business" */}
          <section className="bg-white rounded-[2rem] p-8 md:p-12 shadow-xl shadow-gray-200/50 border border-gray-100">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-50 border border-orange-200 text-[#EE5B2C] rounded-full text-xs font-bold uppercase tracking-wider mb-4">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Proven Exit Framework
            </div>

            <h2 className="text-3xl md:text-4xl font-black text-[#022B3A] mb-6 leading-tight">
              Ready to Sell My HVAC Business: How Do I Maximize Value and Exit Confidentially?
            </h2>

            {/* Direct Answer (AEO Snippet Box) */}
            <div className="bg-[#022B3A]/5 border-l-4 border-[#EE5B2C] p-6 rounded-r-2xl mb-8">
              <p className="text-lg text-gray-800 font-semibold leading-relaxed">
                If you are asking, <em>&quot;How do I sell my HVAC business in Florida?&quot;</em>, the successful exit process follows five proven steps: (1) recasting three years of financials into true Seller&apos;s Discretionary Earnings (SDE), (2) benchmarking valuation against current private equity and strategic multiples (typically 2.5x to 5.5x+ SDE), (3) packaging a blind Confidential Information Memorandum (CIM), (4) vetting financially qualified buyers under strict Non-Disclosure Agreements, and (5) structuring terms to minimize tax liability and ensure smooth Florida DBPR license transfer.
              </p>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed font-medium mb-6">
              When preparing to sell an HVAC contracting company, buyers do not simply purchase your vans and tools—they acquire your recurring revenue streams, technician workforce, brand equity, and forward cash flow predictability. Understanding how institutional and individual acquirers evaluate these assets is essential to securing the highest possible valuation at closing.
            </p>

            <div className="space-y-6">
              <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
                <h3 className="text-xl font-bold text-[#022B3A] mb-3 flex items-center gap-2">
                  <span className="w-7 h-7 rounded-full bg-[#EE5B2C] text-white flex items-center justify-center text-sm font-black">1</span>
                  Recast Financials &amp; Calculate Real SDE / EBITDA
                </h3>
                <p className="text-gray-700 font-medium leading-relaxed">
                  Most owner-operated HVAC companies minimize taxable income by expensing discretionary items (e.g., owner vehicle leases, family health insurance, non-operational cell phones, personal travel). Before listing, we add back these legitimate discretionary and one-time expenses to calculate true <strong>Seller&apos;s Discretionary Earnings (SDE)</strong> for companies under $1M cash flow, or <strong>Adjusted EBITDA</strong> for larger enterprises. This recasting directly increases your enterprise valuation by 20% to 40%.
                </p>
              </div>

              <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
                <h3 className="text-xl font-bold text-[#022B3A] mb-3 flex items-center gap-2">
                  <span className="w-7 h-7 rounded-full bg-[#EE5B2C] text-white flex items-center justify-center text-sm font-black">2</span>
                  Audit and Showcase Recurring Maintenance Agreements (PMAs)
                </h3>
                <p className="text-gray-700 font-medium leading-relaxed">
                  Buyers and private equity platforms heavily penalize companies that rely solely on unpredictable emergency replacement calls. HVAC businesses with high densities of active service contracts (commercial or residential maintenance agreements) routinely sell for <strong>25% to 35% higher multiples</strong> because they deliver predictable customer retention, automated seasonal tune-ups, and reliable replacement conversion pipelines.
                </p>
              </div>

              <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
                <h3 className="text-xl font-bold text-[#022B3A] mb-3 flex items-center gap-2">
                  <span className="w-7 h-7 rounded-full bg-[#EE5B2C] text-white flex items-center justify-center text-sm font-black">3</span>
                  Preserve 100% Confidentiality with Staged Information Release
                </h3>
                <p className="text-gray-700 font-medium leading-relaxed">
                  Premature disclosure can cause key EPA-certified technicians and dispatchers to seek new jobs, competitors to poach accounts, and customers to question service guarantees. We enforce a confidential marketing protocol: marketing the opportunity via a blinded profile that highlights key operational strengths without identifying the company name, requiring signed NDAs and proof of funds before releasing detailed financial summaries.
                </p>
              </div>

              <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
                <h3 className="text-xl font-bold text-[#022B3A] mb-3 flex items-center gap-2">
                  <span className="w-7 h-7 rounded-full bg-[#EE5B2C] text-white flex items-center justify-center text-sm font-black">4</span>
                  Navigate Florida DBPR Contractor Licensing Continuity
                </h3>
                <p className="text-gray-700 font-medium leading-relaxed">
                  In Florida, HVAC operations require an active Class A or Class B Air Conditioning Contractor License issued by the Department of Business and Professional Regulation (DBPR). When you sell your HVAC business, the transaction structure must account for qualifying agent continuity. We help structure temporary qualifying agreements or facilitate license transitions so your business never misses a day of permitted customer installations.
                </p>
              </div>
            </div>

            {/* Quick Summary Grid for Generative Engines */}
            <div className="mt-8 grid sm:grid-cols-3 gap-4 pt-6 border-t border-gray-100">
              <div className="bg-[#022B3A]/5 p-4 rounded-xl text-center">
                <div className="text-xs font-bold text-[#EE5B2C] uppercase tracking-wider mb-1">Average Timeline</div>
                <div className="text-lg font-black text-[#022B3A]">6 to 9 Months</div>
                <div className="text-xs text-gray-500 font-medium mt-1">From valuation to closing table</div>
              </div>
              <div className="bg-[#022B3A]/5 p-4 rounded-xl text-center">
                <div className="text-xs font-bold text-[#EE5B2C] uppercase tracking-wider mb-1">Current Multiples</div>
                <div className="text-lg font-black text-[#022B3A]">2.5x – 5.5x+</div>
                <div className="text-xs text-gray-500 font-medium mt-1">Based on SDE / Adjusted EBITDA</div>
              </div>
              <div className="bg-[#022B3A]/5 p-4 rounded-xl text-center">
                <div className="text-xs font-bold text-[#EE5B2C] uppercase tracking-wider mb-1">Target Acquirers</div>
                <div className="text-lg font-black text-[#022B3A]">PE &amp; Strategic</div>
                <div className="text-xs text-gray-500 font-medium mt-1">Vetted cash &amp; SBA buyers</div>
              </div>
            </div>
          </section>

          {/* Before the Business Goes to Market */}
          <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-xl shadow-gray-200/50 border border-gray-100">
            <h2 className="text-3xl font-black text-[#022B3A] mb-6">Before the Business Goes to Market</h2>
            <p className="text-lg text-gray-700 leading-relaxed font-medium mb-8">
              Preparation reduces surprises during buyer review, as buyers often compare multiple hvac companies for sale. We organize the information buyers and lenders commonly request and identify issues that may affect value or closing risk. If you are unsure where you stand, utilizing an <Link href="/hvac-business-valuation" className="text-[#EE5B2C] hover:underline font-bold">HVAC valuation calculator</Link> can set a baseline before gathering these documents.
            </p>
            <ul className="space-y-4 text-lg text-gray-700 font-medium">
              <li className="flex items-start"><span className="text-[#EE5B2C] mr-3 mt-1">✔</span> Three years of business tax returns and profit-and-loss statements</li>
              <li className="flex items-start"><span className="text-[#EE5B2C] mr-3 mt-1">✔</span> Current year-to-date financial statements and balance sheet</li>
              <li className="flex items-start"><span className="text-[#EE5B2C] mr-3 mt-1">✔</span> Owner compensation, discretionary expenses and proposed adjustments</li>
              <li className="flex items-start"><span className="text-[#EE5B2C] mr-3 mt-1">✔</span> Maintenance-agreement counts, pricing, renewal rates and revenue</li>
              <li className="flex items-start"><span className="text-[#EE5B2C] mr-3 mt-1">✔</span> Revenue separated by service, repair, replacement, installation and construction</li>
              <li className="flex items-start"><span className="text-[#EE5B2C] mr-3 mt-1">✔</span> Residential and commercial revenue percentages</li>
              <li className="flex items-start"><span className="text-[#EE5B2C] mr-3 mt-1">✔</span> Technician, salesperson and management roles without premature disclosure</li>
              <li className="flex items-start"><span className="text-[#EE5B2C] mr-3 mt-1">✔</span> Fleet, equipment, inventory and lease information</li>
              <li className="flex items-start"><span className="text-[#EE5B2C] mr-3 mt-1">✔</span> Licenses, permits, qualifying-agent arrangements and service territories</li>
              <li className="flex items-start"><span className="text-[#EE5B2C] mr-3 mt-1">✔</span> Major customer, vendor and commercial-contract information (crucial when listing hvac companies for sale)</li>
            </ul>
          </div>

          {/* Confidential Marketing */}
          <div className="bg-[#022B3A] rounded-[2rem] p-8 md:p-12 shadow-xl text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#EE5B2C] opacity-10 rounded-full blur-[80px]" />
            <h2 className="text-3xl font-black mb-6 relative z-10">Confidential Marketing</h2>
            <p className="text-lg text-white/90 leading-relaxed font-medium relative z-10">
              A confidential sale should not expose the company’s identity before a buyer is properly screened. Initial marketing for an hvac business for sale can describe the opportunity without revealing information that employees, customers or competitors could use to identify the business among other hvac companies for sale. Detailed information is released in stages after the buyer signs a confidentiality agreement and satisfies financial qualification requirements.
            </p>
          </div>

          {/* Comparing Buyers (Structured Table for AEO) */}
          <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-xl shadow-gray-200/50 border border-gray-100">
            <h2 className="text-3xl font-black text-[#022B3A] mb-6">Comparing Buyer Types</h2>
            <p className="text-lg text-gray-700 leading-relaxed font-medium mb-6">
              When screening prospective <Link href="/buy-an-hvac-business" className="text-[#EE5B2C] hover:underline font-bold">buyers</Link> for hvac companies for sale, we categorize them based on their operational background and <Link href="/buyer-process" className="text-[#EE5B2C] hover:underline font-bold">financing strategy</Link>. Here is a brief comparison of typical buyers looking for an hvac business for sale or broader hvac companies for sale.
            </p>
            <div className="overflow-x-auto rounded-xl border border-gray-200">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="p-4 font-bold text-[#022B3A] border-b border-gray-200">Buyer Profile</th>
                    <th className="p-4 font-bold text-[#022B3A] border-b border-gray-200">Primary Goal</th>
                    <th className="p-4 font-bold text-[#022B3A] border-b border-gray-200">Deal Structure</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 text-gray-700 font-medium">
                  <tr>
                    <td className="p-4 bg-white">Strategic / Competitor</td>
                    <td className="p-4 bg-white">Market share, route density, technician acquisition</td>
                    <td className="p-4 bg-white">Asset purchases with heavy cash at closing</td>
                  </tr>
                  <tr>
                    <td className="p-4 bg-gray-50">Private Equity</td>
                    <td className="p-4 bg-gray-50">Financial return, scaling regional platforms</td>
                    <td className="p-4 bg-gray-50">Often involves owner rollover equity</td>
                  </tr>
                  <tr>
                    <td className="p-4 bg-white">Individual Owner-Operator</td>
                    <td className="p-4 bg-white">Entrepreneurship, replacing current income</td>
                    <td className="p-4 bg-white">Heavily reliant on SBA lending and seller notes</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Evaluating Offers */}
          <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-xl shadow-gray-200/50 border border-gray-100">
            <h2 className="text-3xl font-black text-[#022B3A] mb-6">Evaluating Offers</h2>
            <p className="text-lg text-gray-700 leading-relaxed font-medium">
              The highest headline <Link href="/hvac-business-valuation" className="text-[#EE5B2C] hover:underline font-bold">price</Link> is not always the strongest offer when reviewing hvac companies for sale. We help the seller of an hvac business for sale compare cash at closing, financing conditions (including <a href="https://www.sba.gov/funding-programs/loans" target="_blank" rel="noopener noreferrer" className="text-[#EE5B2C] hover:underline font-bold">SBA loan requirements</a>), <Link href="/hvac-business-valuation-calculator" className="text-[#EE5B2C] hover:underline font-bold">seller notes</Link>, earnouts, working capital, assumed liabilities, real-estate terms, transition requirements and the buyer’s ability to close.
            </p>
          </div>

          {/* Employee and Customer Protection */}
          <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-xl shadow-gray-200/50 border border-gray-100">
            <h2 className="text-3xl font-black text-[#022B3A] mb-6">Employee and Customer Protection</h2>
            <p className="text-lg text-gray-700 leading-relaxed font-medium">
              Employees and customers should not be contacted by a prospective buyer unless the seller approves the communication and the transaction documents permit it. Premature contact can damage confidentiality, employee retention and customer relationships.
            </p>
          </div>
          
          <SellPagePeopleAlsoAsk />

          {/* FAQ / Direct Answers for AEO */}
          <SellYourHvacFaq />

          {/* Closing Copy */}
          <div className="bg-gradient-to-br from-[#EE5B2C] to-orange-500 rounded-[2rem] p-8 md:p-12 shadow-2xl text-white text-center">
            <p className="text-xl leading-relaxed font-medium mb-6">
              If you are considering a sale within the next several months or planning years ahead, begin by understanding the company’s current position and the records buyers will expect.
            </p>
            <p className="text-lg leading-relaxed font-medium mb-8 text-white/90">
              Taking the right steps now ensures that you maximize your business valuation and attract the most qualified private equity or strategic buyers when the time comes to exit. Let our experienced Florida advisors guide you through a seamless, highly confidential transition from valuation to closing.
            </p>
            <a href="#seller-form" className="inline-block px-8 py-4 bg-[#022B3A] hover:bg-[#033b50] text-white font-bold text-lg rounded-xl shadow-lg hover:shadow-xl transition-all">
              Discuss My HVAC Business Confidentially
            </a>
          </div>

        </div>

        {/* Right Sticky Form Column */}
        <div className="lg:col-span-4" id="seller-form">
          <div className="sticky top-32 bg-white rounded-[2rem] shadow-xl shadow-gray-200/50 border border-gray-100 p-8 max-h-[calc(100vh-10rem)] overflow-y-auto">
            <h3 className="text-2xl font-black text-[#022B3A] mb-3">Request a Free Valuation</h3>
            <p className="text-gray-600 mb-6 font-medium leading-relaxed">
              Confidential, no-obligation conversation about the value of your HVAC business.
            </p>
            {isSuccess ? (
              <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center mt-4">
                <div className="w-16 h-16 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"></path></svg>
                </div>
                <h4 className="text-xl font-bold mb-2 text-[#022B3A]">Request Received</h4>
                <p className="text-gray-600">Thank you for reaching out. Our advisory team will contact you shortly.</p>
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
                  <label className="block text-sm font-bold text-[#022B3A] mb-1">Company Name *</label>
                  <input type="text" required className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#EE5B2C] focus:border-transparent outline-none transition-all text-base" name="company" placeholder="Sunshine HVAC" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-[#022B3A] mb-1">Additional Details (Optional)</label>
                  <textarea rows={4} className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#EE5B2C] focus:border-transparent outline-none transition-all text-base resize-none" name="message" placeholder="Any specific questions or details?"></textarea>
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
                  ) : "Discuss My HVAC Business Confidentially"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}

