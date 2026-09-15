"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import BreadcrumbSchema from '@/views/components/BreadcrumbSchema';
import { motion } from 'framer-motion';

export default function FreeConfidentialValuationPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const breadcrumbs = [
    { name: 'Home', item: 'https://www.hvacexitadvisors.com/' },
    { name: 'Free Confidential Valuation', item: 'https://www.hvacexitadvisors.com/free-confidential-valuation' }
  ];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      contactInfo: formData.get('contactInfo'),
      location: formData.get('location'),
      years: formData.get('years'),
      revenue: formData.get('revenue'),
      earnings: formData.get('earnings'),
      split: formData.get('split'),
      employees: formData.get('employees'),
      agreements: formData.get('agreements'),
      reason: formData.get('reason'),
      timing: formData.get('timing'),
      formType: 'Confidential Valuation Request',
    };

    try {
      await fetch('/api/public/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      setSubmitted(true);
    } catch (err) {
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 mt-12">
        <nav aria-label="Breadcrumb" className="text-sm font-semibold text-gray-500 mb-6 flex items-center space-x-2">
          <Link href="/" className="hover:text-[#EE5B2C] transition-colors">Home</Link>
          <span>/</span>
          <span className="text-[#022B3A]">Confidential Review</span>
        </nav>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Content Column */}
          <div className="lg:col-span-6">
            <h1 className="text-4xl md:text-5xl font-extrabold text-[#022B3A] mb-6 leading-tight tracking-tight">
              Begin With a Confidential Review of Your HVAC Business
            </h1>
            
            <p className="text-lg text-gray-700 leading-relaxed font-medium mb-8">
              The initial review helps us understand the company’s size, services, earnings, recurring revenue and ownership structure. It also helps determine what additional information may be required before discussing a potential market range.
            </p>

            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 mb-8 shadow-sm">
              <h3 className="text-xl font-bold text-[#022B3A] mb-6">Information Requested:</h3>
              <ul className="space-y-3">
                {[
                  "Owner name and preferred contact information",
                  "Business location and service territory",
                  "Years in operation",
                  "Approximate annual revenue",
                  "Approximate SDE or EBITDA, if known",
                  "Residential and commercial revenue split",
                  "Number of employees and technicians",
                  "Number and value of active maintenance agreements",
                  "Reason for considering a sale",
                  "Preferred timing"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-[#EE5B2C] mr-3 mt-1 font-bold">✓</span>
                    <span className="text-gray-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-orange-50 border-l-4 border-[#EE5B2C] p-6 rounded-r-xl">
              <p className="text-sm text-gray-700 font-bold leading-relaxed">
                Privacy Notice: Submitting this form does not obligate you to sell or engage our firm. Your information will be used to respond to your request and will not be shared with prospective buyers without authorization.
              </p>
            </div>
          </div>

          {/* Right Form Column */}
          <div className="lg:col-span-6">
            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-gray-100 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-2 bg-[#EE5B2C]"></div>
              
              {submitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <h3 className="text-2xl font-bold text-[#022B3A] mb-4">Request Received</h3>
                  <p className="text-gray-600 font-medium">Thank you for reaching out. A senior broker will review your information and contact you confidentially.</p>
                </motion.div>
              ) : (
                <form className="flex flex-col space-y-5" onSubmit={handleSubmit}>
                  <h3 className="text-2xl font-bold text-[#022B3A] mb-2">Confidential Review Request</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-1">Owner Name</label>
                      <input required type="text" name="name" className="w-full bg-gray-50 border border-gray-200 text-gray-900 rounded-lg focus:ring-[#EE5B2C] focus:border-[#EE5B2C] block p-3 font-medium transition-colors" placeholder="Full Name" />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-1">Preferred Contact</label>
                      <input required type="text" name="contactInfo" className="w-full bg-gray-50 border border-gray-200 text-gray-900 rounded-lg focus:ring-[#EE5B2C] focus:border-[#EE5B2C] block p-3 font-medium transition-colors" placeholder="Email or Phone" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1">Business Location & Territory</label>
                    <input required type="text" name="location" className="w-full bg-gray-50 border border-gray-200 text-gray-900 rounded-lg focus:ring-[#EE5B2C] focus:border-[#EE5B2C] block p-3 font-medium transition-colors" placeholder="e.g., Tampa Bay Area" />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-1">Years in Operation</label>
                      <input type="text" name="years" className="w-full bg-gray-50 border border-gray-200 text-gray-900 rounded-lg focus:ring-[#EE5B2C] focus:border-[#EE5B2C] block p-3 font-medium transition-colors" />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-1">Approx. Annual Revenue</label>
                      <input type="text" name="revenue" className="w-full bg-gray-50 border border-gray-200 text-gray-900 rounded-lg focus:ring-[#EE5B2C] focus:border-[#EE5B2C] block p-3 font-medium transition-colors" placeholder="$" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-1">Approx. SDE / EBITDA</label>
                      <input type="text" name="earnings" className="w-full bg-gray-50 border border-gray-200 text-gray-900 rounded-lg focus:ring-[#EE5B2C] focus:border-[#EE5B2C] block p-3 font-medium transition-colors" placeholder="If known" />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-1">Res / Comm Split</label>
                      <input type="text" name="split" className="w-full bg-gray-50 border border-gray-200 text-gray-900 rounded-lg focus:ring-[#EE5B2C] focus:border-[#EE5B2C] block p-3 font-medium transition-colors" placeholder="e.g. 70% Res / 30% Comm" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-1">Employees / Technicians</label>
                      <input type="text" name="employees" className="w-full bg-gray-50 border border-gray-200 text-gray-900 rounded-lg focus:ring-[#EE5B2C] focus:border-[#EE5B2C] block p-3 font-medium transition-colors" />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-1">Active PMAs</label>
                      <input type="text" name="agreements" className="w-full bg-gray-50 border border-gray-200 text-gray-900 rounded-lg focus:ring-[#EE5B2C] focus:border-[#EE5B2C] block p-3 font-medium transition-colors" placeholder="Number & Value" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-1">Reason for Sale</label>
                      <input type="text" name="reason" className="w-full bg-gray-50 border border-gray-200 text-gray-900 rounded-lg focus:ring-[#EE5B2C] focus:border-[#EE5B2C] block p-3 font-medium transition-colors" placeholder="e.g. Retirement" />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-1">Preferred Timing</label>
                      <input type="text" name="timing" className="w-full bg-gray-50 border border-gray-200 text-gray-900 rounded-lg focus:ring-[#EE5B2C] focus:border-[#EE5B2C] block p-3 font-medium transition-colors" placeholder="e.g. 3-6 months" />
                    </div>
                  </div>

                  <div className="pt-2">
                    <button type="submit" disabled={isSubmitting} className="w-full bg-[#EE5B2C] hover:bg-orange-600 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all text-lg">
                      {isSubmitting ? 'Submitting...' : 'Request My Confidential Review'}
                    </button>
                    <p className="text-xs text-gray-500 text-center mt-3 font-medium">
                      All submissions are protected under a strict non-disclosure policy.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
