"use client";

import { useState } from 'react';

export default function ListingLeadForm({ listingTitle }: { listingTitle: string }) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const API_URL = process.env.NEXT_PUBLIC_CMS_API_URL || "http://127.0.0.1:4000/api/public";

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    try {
      const payload = {
        type: 'contact',
        source: `Listing Inquiry: ${listingTitle}`,
        name: `${formData.firstName} ${formData.lastName}`.trim(),
        email: formData.email,
        phone: formData.phone,
        message: `I would like to request more information about the listing: ${listingTitle}`,
        pagePath: typeof window !== 'undefined' ? window.location.pathname : '',
        pageUrl: typeof window !== 'undefined' ? window.location.href : '',
        placement: 'listing_form'
      };

      const res = await fetch(`${API_URL}/leads`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error('Failed to submit');
      setSuccess(true);
      setFormData({ firstName: '', lastName: '', email: '', phone: '' });
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="bg-white rounded-2xl shadow-sm border border-green-100 p-8 md:p-12 text-center">
        <h3 className="text-2xl font-black text-green-700 mb-2">Request Received!</h3>
        <p className="text-gray-600">Thank you for your interest. Our team will contact you shortly.</p>
        <button onClick={() => setSuccess(false)} className="mt-6 px-6 py-2 bg-gray-100 text-gray-700 font-bold rounded-lg hover:bg-gray-200">
          Send another inquiry
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12">
      <h2 className="text-2xl font-black text-[#022B3A] mb-2">Request more information</h2>
      <p className="text-gray-500 mb-8">Please fill out the form below to learn more about this listing.</p>
      
      {error && <div className="mb-4 p-3 bg-red-50 text-red-700 rounded-lg text-sm font-bold">{error}</div>}
      
      <form onSubmit={onSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-bold text-[#022B3A] mb-2">First name</label>
            <input
              required
              type="text"
              value={formData.firstName}
              onChange={e => setFormData({ ...formData, firstName: e.target.value })}
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#EE5B2C]"
            />
          </div>
          <div>
            <label className="block text-sm font-bold text-[#022B3A] mb-2">Last name</label>
            <input
              required
              type="text"
              value={formData.lastName}
              onChange={e => setFormData({ ...formData, lastName: e.target.value })}
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#EE5B2C]"
            />
          </div>
          <div>
            <label className="block text-sm font-bold text-[#022B3A] mb-2">Email</label>
            <input
              required
              type="email"
              placeholder="you@company.com"
              value={formData.email}
              onChange={e => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#EE5B2C]"
            />
          </div>
          <div>
            <label className="block text-sm font-bold text-[#022B3A] mb-2">Phone number</label>
            <input
              required
              type="tel"
              placeholder="(xxx) xxx-xxxx"
              value={formData.phone}
              onChange={e => setFormData({ ...formData, phone: e.target.value })}
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#EE5B2C]"
            />
          </div>
        </div>
        
        <button
          type="submit"
          disabled={loading}
          className="px-8 py-3 bg-[#EE5B2C] hover:bg-[#d55026] text-white font-bold rounded-lg transition-colors shadow-sm disabled:opacity-70"
        >
          {loading ? 'Sending...' : 'Request more details'}
        </button>
        <p className="text-xs text-gray-400 mt-4">This site is protected by reCAPTCHA.</p>
      </form>
    </div>
  );
}
