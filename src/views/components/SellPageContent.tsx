"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence, Variants } from "framer-motion";

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
          
          {/* Opening Copy */}
          <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-xl shadow-gray-200/50 border border-gray-100">
            <p className="text-lg text-gray-700 leading-relaxed font-medium mb-6">
              Selling an HVAC business can involve several connected decisions: timing, value, confidentiality, buyer selection, financing, employee transition and the owner’s role after closing. A properly managed process gives buyers the information they need while protecting the company’s day-to-day operations.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed font-medium">
              We help owners prepare the business, present its strengths accurately, screen prospective buyers and evaluate the complete economics of each offer.
            </p>
          </div>

          {/* Before the Business Goes to Market */}
          <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-xl shadow-gray-200/50 border border-gray-100">
            <h2 className="text-3xl font-black text-[#022B3A] mb-6">Before the Business Goes to Market</h2>
            <p className="text-lg text-gray-700 leading-relaxed font-medium mb-8">
              Preparation reduces surprises during buyer review. We organize the information buyers and lenders commonly request and identify issues that may affect value or closing risk.
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

          {/* Evaluating Offers */}
          <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-xl shadow-gray-200/50 border border-gray-100">
            <h2 className="text-3xl font-black text-[#022B3A] mb-6">Evaluating Offers</h2>
            <p className="text-lg text-gray-700 leading-relaxed font-medium">
              The highest headline price is not always the strongest offer. We help the seller compare cash at closing, financing conditions, seller notes, earnouts, working capital, assumed liabilities, real-estate terms, transition requirements and the buyer’s ability to close.
            </p>
          </div>

          {/* Employee and Customer Protection */}
          <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-xl shadow-gray-200/50 border border-gray-100">
            <h2 className="text-3xl font-black text-[#022B3A] mb-6">Employee and Customer Protection</h2>
            <p className="text-lg text-gray-700 leading-relaxed font-medium">
              Employees and customers should not be contacted by a prospective buyer unless the seller approves the communication and the transaction documents permit it. Premature contact can damage confidentiality, employee retention and customer relationships.
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
