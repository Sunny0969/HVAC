import React from 'react';

const regions = [
  {
    name: "South Florida",
    cities: ["Miami", "Fort Lauderdale", "West Palm Beach", "Boca Raton", "Hollywood", "Pompano Beach", "Coral Springs", "Pembroke Pines", "Miramar", "Hialeah", "Homestead"],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" /></svg>
    )
  },
  {
    name: "Southwest Florida",
    cities: ["Naples", "Fort Myers", "Cape Coral", "Bonita Springs"],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    )
  },
  {
    name: "Central Florida",
    cities: ["Orlando", "Kissimmee", "Sanford", "Lakeland", "Winter Haven"],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
    )
  },
  {
    name: "Tampa Bay",
    cities: ["Tampa", "St. Petersburg", "Clearwater", "Brandon"],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
    )
  },
  {
    name: "Atlantic Coast",
    cities: ["Jacksonville", "St. Augustine", "Daytona Beach", "Palm Bay", "Melbourne", "Port St. Lucie", "Fort Pierce"],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    )
  },
  {
    name: "Gulf Coast",
    cities: ["Sarasota", "Bradenton", "Venice", "North Port"],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
    )
  },
  {
    name: "North Florida & Panhandle",
    cities: ["Tallahassee", "Gainesville", "Ocala", "Pensacola", "Panama City"],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" /></svg>
    )
  }
];

export default function AreasWeServe() {
  return (
    <section className="w-full bg-white py-20 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-[#022B3A] tracking-tight mb-4">
            Florida Areas <span className="text-[#EE5B2C]">We Serve</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg font-medium">
            We represent HVAC business owners across the entire state of Florida, leveraging our specialized network in major metro areas and fast-growing coastal communities.
          </p>
          <div className="w-24 h-1 bg-[#EE5B2C] mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {regions.map((region, idx) => (
            <div key={idx} className="bg-[#F7F5F0] rounded-2xl p-6 border border-gray-200 hover:shadow-lg hover:border-orange-200 transition-all group">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#EE5B2C] shadow-sm group-hover:bg-[#EE5B2C] group-hover:text-white transition-colors">
                  {region.icon}
                </div>
                <h3 className="text-lg font-bold text-[#022B3A]">{region.name}</h3>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed font-medium">
                {region.cities.join(", ")}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-[#022B3A] rounded-2xl p-8 text-center shadow-lg border border-[#033b50]">
          <h4 className="text-white font-bold text-lg mb-2">Prominent Florida Metro Areas</h4>
          <p className="text-gray-300 text-sm max-w-4xl mx-auto leading-relaxed">
            Florida’s largest and most prominent cities include <strong>Jacksonville, Miami, Tampa, Orlando, St. Petersburg, Hialeah, Port St. Lucie, Cape Coral, Tallahassee, and Fort Lauderdale</strong>. We actively broker mechanical contractors and HVAC service companies in these high-demand markets.
          </p>
        </div>

      </div>
    </section>
  );
}
