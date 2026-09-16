"use client";

import React, { useState } from "react";
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
              Selling an HVAC business can involve several connected decisions: timing, value, confidentiality, buyer selection, financing, employee transition and the owner’s role after closing. A properly managed <Link href="/how-it-works" className="text-[#EE5B2C] hover:underline font-bold">structured process</Link> gives buyers the information they need while protecting the company’s day-to-day operations.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed font-medium">
              We help owners prepare the business, present its strengths accurately, screen prospective buyers and evaluate the complete economics of each offer.
            </p>
          </div>

          {/* Before the Business Goes to Market */}
          <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-xl shadow-gray-200/50 border border-gray-100">
            <h2 className="text-3xl font-black text-[#022B3A] mb-6">Before the Business Goes to Market</h2>
            <p className="text-lg text-gray-700 leading-relaxed font-medium mb-8">
              Preparation reduces surprises during buyer review. We organize the information buyers and lenders commonly request and identify issues that may affect value or closing risk. If you are unsure where you stand, utilizing an <Link href="/hvac-business-valuation" className="text-[#EE5B2C] hover:underline font-bold">HVAC valuation calculator</Link> can set a baseline before gathering these documents.
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
              <li className="flex items-start"><span className="text-[#EE5B2C] mr-3 mt-1">✔</span> Major customer, vendor and commercial-contract information</li>
            </ul>
          </div>

          {/* Confidential Marketing */}
          <div className="bg-[#022B3A] rounded-[2rem] p-8 md:p-12 shadow-xl text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#EE5B2C] opacity-10 rounded-full blur-[80px]" />
            <h2 className="text-3xl font-black mb-6 relative z-10">Confidential Marketing</h2>
            <p className="text-lg text-white/90 leading-relaxed font-medium relative z-10">
              A confidential sale should not expose the company’s identity before a buyer is properly screened. Initial marketing can describe the opportunity without revealing information that employees, customers or competitors could use to identify the business. Detailed information is released in stages after the buyer signs a confidentiality agreement and satisfies financial qualification requirements.
            </p>
          </div>

          {/* Comparing Buyers (Structured Table for AEO) */}
          <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-xl shadow-gray-200/50 border border-gray-100">
            <h2 className="text-3xl font-black text-[#022B3A] mb-6">Comparing Buyer Types</h2>
            <p className="text-lg text-gray-700 leading-relaxed font-medium mb-6">
              When screening prospective buyers, we categorize them based on their operational background and financing strategy. Here is a brief comparison of typical HVAC buyers.
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
              The highest headline price is not always the strongest offer. We help the seller compare cash at closing, financing conditions (including <a href="https://www.sba.gov/funding-programs/loans" target="_blank" rel="noopener noreferrer" className="text-[#EE5B2C] hover:underline font-bold">SBA loan requirements</a>), seller notes, earnouts, working capital, assumed liabilities, real-estate terms, transition requirements and the buyer’s ability to close.
            </p>
          </div>

          {/* Employee and Customer Protection */}
          <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-xl shadow-gray-200/50 border border-gray-100">
            <h2 className="text-3xl font-black text-[#022B3A] mb-6">Employee and Customer Protection</h2>
            <p className="text-lg text-gray-700 leading-relaxed font-medium">
              Employees and customers should not be contacted by a prospective buyer unless the seller approves the communication and the transaction documents permit it. Premature contact can damage confidentiality, employee retention and customer relationships.
            </p>
          </div>
          
          {/* FAQ / Direct Answers for AEO */}
          <div className="bg-[#F8FAFC] rounded-[2rem] p-8 md:p-12 shadow-xl shadow-gray-200/50 border border-gray-100">
            <h2 className="text-3xl font-black text-[#022B3A] mb-8">Frequently Asked Questions About Selling</h2>
            
            <h3 className="text-xl font-bold text-[#022B3A] mb-2">What should I prepare before selling my HVAC business?</h3>
            <p className="text-gray-700 font-medium mb-6">
              Prepare three years of tax returns and profit-and-loss statements, current year-to-date financials, a balance sheet, payroll and owner compensation details, maintenance-agreement data, revenue by service category, fleet and equipment schedules, lease information, licensing arrangements, and major customer or vendor information.
            </p>
            
            <h3 className="text-xl font-bold text-[#022B3A] mb-2">Will employees and customers be told that the business is for sale?</h3>
            <p className="text-gray-700 font-medium mb-6">
              Not during confidential marketing. Employees, customers, vendors, and competitors should not be contacted without the seller's prior written authorization and the permissions established in the transaction documents.
            </p>

            <h3 className="text-xl font-bold text-[#022B3A] mb-2">Is the highest offer always the best offer?</h3>
            <p className="text-gray-700 font-medium mb-6">
              No. A seller should compare cash at closing, financing contingencies, escrow, seller financing, earnouts, working-capital requirements, assumed liabilities, transition obligations, licensing conditions, and the buyer's actual ability to close.
            </p>

            <h3 className="text-xl font-bold text-[#022B3A] mb-2">How long does it take to sell an HVAC business?</h3>
            <p className="text-gray-700 font-medium mb-6">
              Timing varies with preparation, price, buyer qualification, financing, licensing, landlord approval, due diligence, and legal documentation. A well-prepared cash transaction may close faster, while an SBA-financed or more complex transaction can take several months.
            </p>
          </div>

          {/* Closing Copy */}
          <div className="bg-gradient-to-br from-[#EE5B2C] to-orange-500 rounded-[2rem] p-8 md:p-12 shadow-2xl text-white text-center">
            <p className="text-xl leading-relaxed font-medium mb-8">
              If you are considering a sale within the next several months or planning years ahead, begin by understanding the company’s current position and the records buyers will expect.
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

