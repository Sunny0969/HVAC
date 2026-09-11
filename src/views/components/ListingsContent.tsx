"use client";

import { useState, useMemo } from 'react';
import Link from 'react-router-dom';

interface Props {
  listings: any[];
}

export default function ListingsContent({ listings }: Props) {
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [locationFilter, setLocationFilter] = useState('');
  const [industryFilter, setIndustryFilter] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [sortOrder, setSortOrder] = useState('newest');

  const locations = useMemo(() => Array.from(new Set(listings.map(l => l.location).filter(Boolean))).sort(), [listings]);
  const industries = useMemo(() => Array.from(new Set(listings.map(l => l.industry).filter(Boolean))).sort(), [listings]);

  const filtered = useMemo(() => {
    let result = listings;

    if (statusFilter) result = result.filter(l => l.status === statusFilter);
    if (locationFilter) result = result.filter(l => l.location === locationFilter);
    if (industryFilter) result = result.filter(l => l.industry === industryFilter);
    
    if (minPrice) result = result.filter(l => (l.askingPrice || 0) >= Number(minPrice));
    if (maxPrice) result = result.filter(l => (l.askingPrice || 0) <= Number(maxPrice));

    if (search.trim()) {
      const q = search.toLowerCase();
      result = result.filter(l => l.title?.toLowerCase().includes(q) || l.location?.toLowerCase().includes(q));
    }

    result = [...result].sort((a, b) => {
      if (sortOrder === 'price_asc') return (a.askingPrice || 0) - (b.askingPrice || 0);
      if (sortOrder === 'price_desc') return (b.askingPrice || 0) - (a.askingPrice || 0);
      // newest
      return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    });

    return result;
  }, [listings, search, statusFilter, locationFilter, industryFilter, minPrice, maxPrice, sortOrder]);

  const formatMoney = (val?: number) => {
    if (val == null || val === 0) return '---';
    if (val >= 1000000) return `$${(val / 1000000).toFixed(2)}m`;
    if (val >= 1000) return `$${Math.round(val / 1000)}k`;
    return `$${val}`;
  };

  return (
    <div className="w-full bg-[#F7F5F0] py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* Main Listings Grid */}
          <div className="flex-1 w-full order-2 lg:order-1">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-2xl md:text-3xl font-black text-[#022B3A]">
                Available <span className="text-[#EE5B2C]">Businesses</span>
              </h1>
              <select
                value={sortOrder}
                onChange={e => setSortOrder(e.target.value)}
                className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-semibold text-gray-800 shadow-sm focus:outline-none focus:border-[#EE5B2C]"
              >
                <option value="newest">Newest</option>
                <option value="price_asc">Price (Low to High)</option>
                <option value="price_desc">Price (High to Low)</option>
              </select>
            </div>

            {filtered.length === 0 ? (
              <div className="bg-white rounded-2xl p-12 text-center shadow-sm border border-gray-100">
                <p className="text-xl font-bold text-[#022B3A]">No listings match your criteria.</p>
                <button
                  onClick={() => {
                    setSearch(''); setStatusFilter(''); setLocationFilter(''); setIndustryFilter(''); setMinPrice(''); setMaxPrice('');
                  }}
                  className="mt-4 px-6 py-2 bg-[#EE5B2C] text-white rounded-xl font-bold"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="space-y-6">
                {filtered.map(l => (
                  <div key={l._id} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col sm:flex-row hover:shadow-lg transition-shadow">
                    {/* Image */}
                    <div className="sm:w-64 h-48 sm:h-auto bg-gray-200 relative flex-shrink-0">
                      {l.coverImage ? (
                        <img src={l.coverImage} alt={l.coverImageAlt || l.title} className="w-full h-full object-cover" />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#022B3A] to-blue-900 text-white font-bold text-center px-4">
                          {l.title}
                        </div>
                      )}
                    </div>
                    {/* Content */}
                    <div className="p-6 flex-1 flex flex-col">
                      <div className="flex justify-between items-start mb-2">
                        <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">{l.industry}</span>
                        <span className={`px-2 py-1 rounded text-xs font-bold ${l.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-orange-100 text-orange-800'}`}>
                          {l.status}
                        </span>
                      </div>
                      <h2 className="text-xl font-black text-[#022B3A] leading-tight mb-2">
                        {l.title}
                      </h2>
                      <div className="text-sm text-gray-500 flex items-center mb-6">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                        {l.location}
                      </div>

                      <div className="mt-auto grid grid-cols-2 md:grid-cols-4 gap-4 border-t border-gray-100 pt-4 items-center">
                        <div>
                          <p className="text-xs text-gray-500 mb-1">Asking Price</p>
                          <p className="text-lg font-black text-[#022B3A]">{formatMoney(l.askingPrice)}</p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-500 mb-1">Revenue</p>
                          <p className="text-base font-bold text-gray-800">{formatMoney(l.revenue)}</p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-500 mb-1">Cash Flow</p>
                          <p className="text-base font-bold text-gray-800">{formatMoney(l.cashFlow)}</p>
                        </div>
                        <div className="text-right">
                          <a href={`/listings/${l.slug}`} className="inline-block px-4 py-2 bg-gray-100 hover:bg-gray-200 text-[#022B3A] font-bold rounded-lg text-sm transition-colors whitespace-nowrap">
                            View Listing &rarr;
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Right Sidebar Filters */}
          <aside className="w-full lg:w-80 flex-shrink-0 lg:sticky lg:top-28 order-1 lg:order-2">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 space-y-6">
              <h3 className="text-lg font-black text-[#022B3A] border-b border-gray-100 pb-3 flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" /></svg>
                Filters
              </h3>

              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Search</label>
                <input
                  type="text"
                  placeholder="Keyword or location"
                  value={search}
                  onChange={e => setSearch(e.target.value)}
                  className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#EE5B2C] text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Status</label>
                <select
                  value={statusFilter}
                  onChange={e => setStatusFilter(e.target.value)}
                  className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#EE5B2C] text-sm"
                >
                  <option value="">All Statuses</option>
                  <option value="Active">Active</option>
                  <option value="Under Contract">Under Contract</option>
                  <option value="Sold">Sold</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Locations</label>
                <select
                  value={locationFilter}
                  onChange={e => setLocationFilter(e.target.value)}
                  className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#EE5B2C] text-sm"
                >
                  <option value="">All Locations</option>
                  {locations.map(loc => <option key={loc} value={loc}>{loc}</option>)}
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Industries</label>
                <select
                  value={industryFilter}
                  onChange={e => setIndustryFilter(e.target.value)}
                  className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#EE5B2C] text-sm"
                >
                  <option value="">All Industries</option>
                  {industries.map(ind => <option key={ind} value={ind}>{ind}</option>)}
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Asking Price</label>
                <div className="flex gap-2">
                  <input
                    type="number"
                    placeholder="Min"
                    value={minPrice}
                    onChange={e => setMinPrice(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#EE5B2C] text-sm"
                  />
                  <input
                    type="number"
                    placeholder="Max"
                    value={maxPrice}
                    onChange={e => setMaxPrice(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#EE5B2C] text-sm"
                  />
                </div>
              </div>

            </div>
          </aside>

        </div>
      </div>
    </div>
  );
}
