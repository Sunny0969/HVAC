"use client";

import React, { useState } from "react";

interface ContactFormProps {
  buttonText?: string;
}

export default function ContactForm({ buttonText = "Submit Inquiry" }: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call for lead capture
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  if (isSuccess) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center mt-4 h-full flex flex-col justify-center">
        <div className="w-16 h-16 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"></path>
          </svg>
        </div>
        <h4 className="text-xl font-bold mb-2 text-[#022B3A]">Request Received</h4>
        <p className="text-gray-600">Thank you for reaching out. Our advisory team will contact you shortly.</p>
        <button onClick={() => setIsSuccess(false)} className="mt-6 text-[#EE5B2C] font-bold text-sm hover:underline focus:outline-none">
          Submit another request
        </button>
      </div>
    );
  }

  return (
    <form className="flex flex-col space-y-6" onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-bold text-[#022B3A] mb-2">First Name *</label>
          <input type="text" required className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#EE5B2C] focus:border-transparent outline-none transition-all text-base" placeholder="John" />
        </div>
        <div>
          <label className="block text-sm font-bold text-[#022B3A] mb-2">Last Name *</label>
          <input type="text" required className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#EE5B2C] focus:border-transparent outline-none transition-all text-base" placeholder="Doe" />
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-bold text-[#022B3A] mb-2">Email Address *</label>
          <input type="email" required className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#EE5B2C] focus:border-transparent outline-none transition-all text-base" placeholder="john@example.com" />
        </div>
        <div>
          <label className="block text-sm font-bold text-[#022B3A] mb-2">Phone Number *</label>
          <input type="tel" required className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#EE5B2C] focus:border-transparent outline-none transition-all text-base" placeholder="(555) 123-4567" />
        </div>
      </div>

      <div>
        <label className="block text-sm font-bold text-[#022B3A] mb-2">Company Name (Optional)</label>
        <input type="text" className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#EE5B2C] focus:border-transparent outline-none transition-all text-base" placeholder="Your HVAC Business" />
      </div>

      <div>
        <label className="block text-sm font-bold text-[#022B3A] mb-2">How can we help?</label>
        <textarea rows={5} className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#EE5B2C] focus:border-transparent outline-none transition-all text-base resize-none" placeholder="Tell us a little bit about your timeline or goals..."></textarea>
      </div>

      <button type="submit" disabled={isSubmitting} className="w-full bg-[#EE5B2C] hover:bg-orange-600 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 text-lg mt-4 flex justify-center items-center">
        {isSubmitting ? (
          <span className="flex items-center gap-2">
            <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Submitting...
          </span>
        ) : buttonText}
      </button>
      
      <p className="text-sm text-gray-500 text-center mt-4">
        <span className="inline-block text-[#EE5B2C] mr-1">??</span> 100% Confidential. Your information is never shared.
      </p>
    </form>
  );
}
