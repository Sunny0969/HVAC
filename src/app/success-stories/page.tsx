import { Metadata } from 'next';
import SuccessStoriesStack from '../../views/components/SuccessStoriesStack';
import Link from 'next/link';
import { differentiators } from '../../data/differentiators';

export const metadata: Metadata = {
  title: 'Success Stories & Sold HVAC Businesses | Florida',
  description: 'See how we have helped Florida HVAC owners maximize their exit value and seamlessly transition to the next phase of their lives.',
};

export default function SuccessStoriesPage() {
  return (
    <main className="min-h-screen flex flex-col bg-[#F7F5F0]">
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-24 overflow-hidden bg-[#022B3A] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left relative z-10">
          <h1 className="max-w-4xl text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight tracking-tight">
            Success Stories & Sold HVAC Businesses
          </h1>
          
          <p className="max-w-3xl text-xl text-white/90 leading-relaxed font-medium mb-10">
            See how we've helped Florida HVAC owners maximize their exit value and seamlessly transition to the next phase of their lives.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-4 mb-12">
            <Link 
              href="/free-valuation" 
              className="w-full sm:w-auto px-8 py-4 bg-[#EE5B2C] hover:bg-orange-600 text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 text-center"
            >
              Get My Free Valuation &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="flex-grow w-full">
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-4xl font-black text-[#022B3A] mb-4 text-center tracking-tight">
            Recently Sold HVAC Businesses
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto font-medium">
            Explore our recent successful acquisitions. Each card represents a closed deal managed by our insider-led brokerage team.
          </p>
        </div>

        {/* The Sticky Stack */}
        <SuccessStoriesStack />

        {/* Why Our Clients Get Results Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 border-t border-gray-200 mt-12">
          <h2 className="text-4xl font-black text-[#022B3A] mb-12 text-center tracking-tight">
            Why Our Clients Get Results
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center text-[#EE5B2C] mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
              </div>
              <h3 className="text-2xl font-black text-[#022B3A] mb-4">HVAC Industry Experts</h3>
              <p className="text-gray-600 font-medium leading-relaxed">
                We don't juggle unrelated industries. We focus solely on HVAC, ensuring your business is correctly valued and perfectly pitched to the right buyers.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center text-[#EE5B2C] mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
              </div>
              <h3 className="text-2xl font-black text-[#022B3A] mb-4">Verified Serious Buyers</h3>
              <p className="text-gray-600 font-medium leading-relaxed">
                We pre-screen and financially verify every buyer in our Florida network before they ever see your sensitive data, protecting your confidentiality at every step.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center text-[#EE5B2C] mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              </div>
              <h3 className="text-2xl font-black text-[#022B3A] mb-4">Faster & Smoother Closings</h3>
              <p className="text-gray-600 font-medium leading-relaxed">
                Our team anticipates due diligence hurdles and manages financing complexities proactively, getting you from listed to closed smoothly and on your terms.
              </p>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}
