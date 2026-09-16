"use client";

import React, { useState } from "react";

interface ContactFormProps {
  buttonText?: string;
}

export default function ContactForm({ buttonText = "Submit Inquiry" }: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('fullName'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      message: formData.get('message'),
      formType: 'General Contact',
      additionalData: {
        preferredContact: formData.get('preferredContact'),
        role: formData.get('role'),
        location: formData.get('location'),
        revenue: formData.get('revenue'),
        timeline: formData.get('timeline'),
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

  if (isSuccess) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center mt-4 h-full flex flex-col justify-center">
        <div className="w-16 h-16 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"></path>
          </svg>
        </div>
        <h4 className="text-xl font-bold mb-2 text-[#022B3A]">Request Received</h4>
        <p className="text-gray-600 font-medium">Thank you. Your confidential inquiry has been received. A representative will contact you using your preferred method.</p>
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
          <label className="block text-sm font-bold text-[#022B3A] mb-2">Full name *</label>
          <input type="text" required className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#EE5B2C] focus:border-transparent outline-none transition-all text-base" name="fullName" placeholder="Jane Doe" />
        </div>
        <div>
          <label className="block text-sm font-bold text-[#022B3A] mb-2">Phone number *</label>
          <input type="tel" required className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#EE5B2C] focus:border-transparent outline-none transition-all text-base" name="phone" placeholder="(555) 123-4567" />
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-bold text-[#022B3A] mb-2">Email address *</label>
          <input type="email" required className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#EE5B2C] focus:border-transparent outline-none transition-all text-base" name="email" placeholder="jane@example.com" />
        </div>
        <div>
          <label className="block text-sm font-bold text-[#022B3A] mb-2">Preferred contact method *</label>
          <select required className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#EE5B2C] focus:border-transparent outline-none transition-all text-base" name="preferredContact">
            <option value="">Select an option...</option>
            <option value="Phone">Phone</option>
            <option value="Email">Email</option>
            <option value="Text Message">Text Message</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-bold text-[#022B3A] mb-2">Seller, buyer or professional adviser *</label>
          <select required className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#EE5B2C] focus:border-transparent outline-none transition-all text-base" name="role">
            <option value="">Select an option...</option>
            <option value="Seller">Seller</option>
            <option value="Buyer">Buyer</option>
            <option value="Professional Adviser">Professional Adviser</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-bold text-[#022B3A] mb-2">Business location (City, State) *</label>
          <input type="text" required className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#EE5B2C] focus:border-transparent outline-none transition-all text-base" name="location" placeholder="e.g. Miami, FL" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-bold text-[#022B3A] mb-2">Approximate annual revenue range</label>
          <select className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#EE5B2C] focus:border-transparent outline-none transition-all text-base" name="revenue">
            <option value="">Select a range...</option>
            <option value="Under $1M">Under $1M</option>
            <option value="$1M - $3M">$1M - $3M</option>
            <option value="$3M - $5M">$3M - $5M</option>
            <option value="$5M - $10M">$5M - $10M</option>
            <option value="Over $10M">Over $10M</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-bold text-[#022B3A] mb-2">Desired timeline</label>
          <select className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#EE5B2C] focus:border-transparent outline-none transition-all text-base" name="timeline">
            <option value="">Select a timeline...</option>
            <option value="Immediately (0-3 Months)">Immediately (0-3 Months)</option>
            <option value="Short Term (3-6 Months)">Short Term (3-6 Months)</option>
            <option value="Medium Term (6-12 Months)">Medium Term (6-12 Months)</option>
            <option value="Planning phase (1+ Years)">Planning phase (1+ Years)</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-sm font-bold text-[#022B3A] mb-2">Brief message</label>
        <textarea rows={4} className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#EE5B2C] focus:border-transparent outline-none transition-all text-base resize-none" placeholder="Provide any additional context here..." name="message"></textarea>
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
      
      <p className="text-sm text-gray-500 text-center mt-4 font-medium leading-relaxed">
        <span className="inline-block text-[#EE5B2C] mr-1">🔒</span> 
        Your inquiry will be treated confidentially and used to respond to your request. Submitting the form does not create a brokerage engagement or obligate either party to proceed.
      </p>
    </form>
  );
}
