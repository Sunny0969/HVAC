"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Is the initial confidential valuation a certified appraisal?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "No. The initial review is an advisory estimate intended to help an owner understand a potential market range. A certified appraisal or formal valuation engagement is separate and may be required for litigation, tax, partnership, or financing purposes."
              }
            },
            {
              "@type": "Question",
              "name": "What information is needed for the initial review?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Helpful information includes annual revenue, adjusted SDE or EBITDA, years in operation, service territory, residential and commercial mix, employee and technician counts, maintenance agreements, owner responsibilities, reason for selling, and desired timing."
              }
            },
            {
              "@type": "Question",
              "name": "Will submitting the valuation form obligate me to sell?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "No. The request begins a private discussion and does not create a listing obligation. Any brokerage engagement should be documented separately and reviewed before the business is marketed."
              }
            },
            {
              "@type": "Question",
              "name": "Will my information be shared with buyers?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Not merely because you requested a valuation. Protected company information should be shared only with your authorization and through a controlled process after the prospective buyer satisfies confidentiality and qualification requirements."
              }
            }
          ]
        }) }}
      />
      <main className="min-h-screen bg-[#F7F5F0]">

        {/* Hero Section */}
        <section className="relative w-full h-[100dvh] overflow-hidden bg-gray-900 text-white flex items-center justify-center">
          <div className="absolute inset-0 z-0">
            <Image
              src="https://res.cloudinary.com/db05hw4ri/image/upload/v1789541386/hvac-hero-images/free_confidential_hero.jpg"
              alt="Confidential HVAC Business Valuation"
              fill
              className="object-cover object-center"
              priority
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-black/65" />
          </div>
          <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left mt-16 md:mt-0">
            <nav aria-label="Breadcrumb" className="text-sm font-semibold text-white/70 mb-6 flex items-center space-x-2">
              <Link href="/" className="hover:text-[#EE5B2C] transition-colors">Home</Link>
              <span>/</span>
              <span className="text-white">Free Confidential Valuation</span>
            </nav>
            <h1 className="max-w-4xl text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight tracking-tight drop-shadow-xl">
              Begin With a{" "}
              <span className="text-[#EE5B2C]">Confidential Review</span>{" "}
              of Your HVAC Business
            </h1>
            <p className="text-xl text-white/90 leading-relaxed font-medium mb-10 max-w-3xl">
              The initial review helps us understand your company&apos;s size, services, earnings, recurring revenue and ownership structure — with no obligation to proceed.
            </p>
            <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm md:text-base font-medium text-white/80">
              {["100% Confidential", "No Obligation", "No Fee Until You Close", "Florida-Focused Specialists"].map((badge) => (
                <span key={badge} className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-[#EE5B2C]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Main Content + Sticky Form */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">

            {/* Left Content */}
            <div className="lg:col-span-7 space-y-10">
              <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-xl shadow-gray-200/50 border border-gray-100">
                <h2 className="text-3xl font-black text-[#022B3A] mb-6">What We Review</h2>
                <p className="text-lg text-gray-700 leading-relaxed font-medium mb-8">
                  Submitting this form starts a confidential conversation — not a formal listing engagement. A senior broker will review the information you provide and follow up to discuss next steps and any questions.
                </p>
                <ul className="space-y-4">
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
                    "Preferred timing",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start text-lg text-gray-700 font-medium list-none">
                      <span className="text-[#EE5B2C] mr-3 mt-1 font-bold flex-shrink-0">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Privacy card */}
              <div className="bg-[#022B3A] rounded-[2rem] p-8 md:p-10 shadow-xl text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#EE5B2C] opacity-10 rounded-full blur-[80px]" />
                <div className="relative z-10 flex items-start gap-5">
                  <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-[#EE5B2C]/20 flex items-center justify-center">
                    <svg className="w-6 h-6 text-[#EE5B2C]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3">Your Privacy Is Protected</h3>
                    <p className="text-white/85 font-medium leading-relaxed">Submitting this form does not obligate you to sell or engage our firm. Your information will be used only to respond to your request and will not be shared with prospective buyers without your explicit authorization.</p>
                  </div>
                </div>
              </div>

              {/* FAQ Section */}
              <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-xl shadow-gray-200/50 border border-gray-100 mt-10">
                <h2 className="text-3xl font-black text-[#022B3A] mb-8">Frequently Asked Questions</h2>
                
                <h3 className="text-xl font-bold text-[#022B3A] mb-2">Is the initial confidential valuation a certified appraisal?</h3>
                <p className="text-gray-700 font-medium mb-6">
                  No. The initial review is an advisory estimate intended to help an owner understand a potential market range. A certified appraisal or formal valuation engagement is separate and may be required for litigation, tax, partnership, or financing purposes.
                </p>
                
                <h3 className="text-xl font-bold text-[#022B3A] mb-2">What information is needed for the initial review?</h3>
                <p className="text-gray-700 font-medium mb-6">
                  Helpful information includes annual revenue, adjusted SDE or EBITDA, years in operation, service territory, residential and commercial mix, employee and technician counts, maintenance agreements, owner responsibilities, reason for selling, and desired timing.
                </p>

                <h3 className="text-xl font-bold text-[#022B3A] mb-2">Will submitting the valuation form obligate me to sell?</h3>
                <p className="text-gray-700 font-medium mb-6">
                  No. The request begins a private discussion and does not create a listing obligation. Any brokerage engagement should be documented separately and reviewed before the business is marketed.
                </p>

                <h3 className="text-xl font-bold text-[#022B3A] mb-2">Will my information be shared with buyers?</h3>
                <p className="text-gray-700 font-medium mb-6">
                  Not merely because you requested a valuation. Protected company information should be shared only with your authorization and through a controlled process after the prospective buyer satisfies confidentiality and qualification requirements.
                </p>
              </div>
            </div>

            {/* Sticky Form */}
            <div className="lg:col-span-5">
              <div className="sticky top-32 bg-white rounded-[2rem] shadow-xl shadow-gray-200/50 border border-gray-100 overflow-hidden max-h-[calc(100vh-9rem)] overflow-y-auto">
                <div className="w-full h-2 bg-[#EE5B2C]" />
                <div className="p-8">
                  {submitted ? (
                    <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-12">
                      <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                      </div>
                      <h3 className="text-2xl font-bold text-[#022B3A] mb-4">Request Received</h3>
                      <p className="text-gray-600 font-medium">Thank you for reaching out. A senior broker will review your information and contact you confidentially.</p>
                    </motion.div>
                  ) : (
                    <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
                      <div>
                        <h3 className="text-2xl font-black text-[#022B3A] mb-1">Confidential Review Request</h3>
                        <p className="text-sm text-gray-500 font-medium mb-2">Fields marked * are required.</p>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-bold text-[#022B3A] mb-1">Owner Name *</label>
                          <input required type="text" name="name" className="w-full bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#EE5B2C] focus:border-transparent outline-none p-3 font-medium transition-all text-base" placeholder="Full Name" />
                        </div>
                        <div>
                          <label className="block text-sm font-bold text-[#022B3A] mb-1">Preferred Contact *</label>
                          <input required type="text" name="contactInfo" className="w-full bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#EE5B2C] focus:border-transparent outline-none p-3 font-medium transition-all text-base" placeholder="Email or Phone" />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-[#022B3A] mb-1">Business Location & Territory *</label>
                        <input required type="text" name="location" className="w-full bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#EE5B2C] focus:border-transparent outline-none p-3 font-medium transition-all text-base" placeholder="e.g., Tampa Bay Area" />
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-bold text-[#022B3A] mb-1">Years in Operation</label>
                          <input type="text" name="years" className="w-full bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#EE5B2C] focus:border-transparent outline-none p-3 font-medium transition-all text-base" placeholder="e.g., 12" />
                        </div>
                        <div>
                          <label className="block text-sm font-bold text-[#022B3A] mb-1">Approx. Annual Revenue</label>
                          <input type="text" name="revenue" className="w-full bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#EE5B2C] focus:border-transparent outline-none p-3 font-medium transition-all text-base" placeholder="$" />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-bold text-[#022B3A] mb-1">Approx. SDE / EBITDA</label>
                          <input type="text" name="earnings" className="w-full bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#EE5B2C] focus:border-transparent outline-none p-3 font-medium transition-all text-base" placeholder="If known" />
                        </div>
                        <div>
                          <label className="block text-sm font-bold text-[#022B3A] mb-1">Res / Comm Split</label>
                          <input type="text" name="split" className="w-full bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#EE5B2C] focus:border-transparent outline-none p-3 font-medium transition-all text-base" placeholder="e.g. 70% Res / 30% Comm" />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-bold text-[#022B3A] mb-1">Employees / Technicians</label>
                          <input type="text" name="employees" className="w-full bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#EE5B2C] focus:border-transparent outline-none p-3 font-medium transition-all text-base" placeholder="e.g., 8 total / 5 techs" />
                        </div>
                        <div>
                          <label className="block text-sm font-bold text-[#022B3A] mb-1">Active PMAs</label>
                          <input type="text" name="agreements" className="w-full bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#EE5B2C] focus:border-transparent outline-none p-3 font-medium transition-all text-base" placeholder="Number & Value" />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-bold text-[#022B3A] mb-1">Reason for Sale</label>
                          <input type="text" name="reason" className="w-full bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#EE5B2C] focus:border-transparent outline-none p-3 font-medium transition-all text-base" placeholder="e.g. Retirement" />
                        </div>
                        <div>
                          <label className="block text-sm font-bold text-[#022B3A] mb-1">Preferred Timing</label>
                          <input type="text" name="timing" className="w-full bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#EE5B2C] focus:border-transparent outline-none p-3 font-medium transition-all text-base" placeholder="e.g. 3-6 months" />
                        </div>
                      </div>
                      <button type="submit" disabled={isSubmitting} className="w-full bg-[#EE5B2C] hover:bg-orange-600 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 text-lg flex justify-center items-center gap-2">
                        {isSubmitting ? (
                          <span className="flex items-center gap-2">
                            <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" /></svg>
                            Submitting...
                          </span>
                        ) : 'Request My Confidential Review'}
                      </button>
                      <p className="text-xs text-gray-500 text-center font-medium">All submissions are protected under a strict non-disclosure policy.</p>
                    </form>
                  )}
                </div>
              </div>
            </div>

          </div>
        </div>
      </main>
    </>
  );
}
