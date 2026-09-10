import { Metadata } from 'next';
import Image from 'next/image';
import SuccessStoriesStack from '../../views/components/SuccessStoriesStack';
import Link from 'next/link';
import BreadcrumbSchema from '../../views/components/BreadcrumbSchema';

export const metadata: Metadata = {
  title: 'Sold HVAC Businesses & Success Stories',
  description: 'Discover how HVAC Exit Advisors helped Florida HVAC owners maximize valuation and complete smooth confidential transactions. Read our client success stories!',
  alternates: {
    canonical: 'https://www.hvacexitadvisors.com/success-stories',
  },
  openGraph: {
    title: 'Sold HVAC Businesses & Success Stories | HVAC Exit Advisors',
    description: 'Discover how HVAC Exit Advisors helped Florida HVAC owners maximize valuation and complete smooth confidential transactions.',
    url: 'https://www.hvacexitadvisors.com/success-stories',
  },
};

export default function SuccessStoriesPage() {
  const breadcrumbs = [
    { name: 'Home', item: 'https://www.hvacexitadvisors.com/' },
    { name: 'Success Stories', item: 'https://www.hvacexitadvisors.com/success-stories' }
  ];

  const storiesSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Florida HVAC Business Sale Case Studies & Success Stories",
    "description": "Real-world transaction case studies of Florida HVAC businesses successfully sold and acquired through HVAC Exit Advisors.",
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "First-Time Buyer Tampa HVAC Acquisition",
          "url": "https://www.hvacexitadvisors.com/success-stories/first-time-buyer-tampa"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Private Equity Commercial HVAC Roll-Up in Orlando",
          "url": "https://www.hvacexitadvisors.com/success-stories/private-equity-roll-up"
        }
      ]
    }
  };

  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(storiesSchema) }}
      />
      <main className="min-h-screen flex flex-col bg-[#F7F5F0]">
        
        {/* Hero Section */}
        <section className="relative w-full h-[100dvh] overflow-hidden bg-gray-900 text-white flex items-center justify-center">
          <div className="absolute inset-0 z-0">
            <Image
              src="/hvac-business-sale-success-stories.jpg"
              alt="Florida HVAC business closing success and handshake"
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-black/70" />
          </div>

          <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left mt-16 md:mt-0">
            <nav aria-label="Breadcrumb" className="text-sm font-semibold text-white/70 mb-6 flex items-center space-x-2">
              <Link href="/" className="hover:text-[#EE5B2C] transition-colors">Home</Link>
              <span>/</span>
              <span className="text-white">Success Stories</span>
            </nav>

            <h1 className="max-w-4xl text-4xl md:text-5xl lg:text-7xl font-black mb-6 leading-tight tracking-tight drop-shadow-xl">
              Success Stories & <span className="text-[#EE5B2C]">Sold HVAC Businesses</span>
            </h1>
            
            <p className="max-w-3xl text-xl md:text-2xl text-white/90 leading-relaxed font-medium mb-10 drop-shadow-md">
              See how we've helped Florida HVAC owners maximize their exit value and seamlessly transition to the next phase of their lives.
            </p>
            
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-start gap-4 mb-12">
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

          {/* Contact Us Form Section */}
          <section className="w-full bg-white py-24 border-t border-gray-200">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-black text-[#022B3A] mb-4">Ready to Discuss Your Exit?</h2>
                <p className="text-lg text-gray-600 font-medium">Contact us today for a completely confidential, no-obligation conversation.</p>
              </div>
              
              <div className="bg-gray-50 rounded-[2rem] shadow-xl shadow-gray-200/50 border border-gray-100 p-8 md:p-12">
                <form className="flex flex-col space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="success-first-name" className="block text-sm font-bold text-[#022B3A] mb-2">First Name *</label>
                      <input id="success-first-name" type="text" required className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#EE5B2C] focus:border-transparent outline-none transition-all" placeholder="John" />
                    </div>
                    <div>
                      <label htmlFor="success-last-name" className="block text-sm font-bold text-[#022B3A] mb-2">Last Name *</label>
                      <input id="success-last-name" type="text" required className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#EE5B2C] focus:border-transparent outline-none transition-all" placeholder="Doe" />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="success-email" className="block text-sm font-bold text-[#022B3A] mb-2">Email Address *</label>
                      <input id="success-email" type="email" required className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#EE5B2C] focus:border-transparent outline-none transition-all" placeholder="john@example.com" />
                    </div>
                    <div>
                      <label htmlFor="success-phone" className="block text-sm font-bold text-[#022B3A] mb-2">Phone Number *</label>
                      <input id="success-phone" type="tel" required className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#EE5B2C] focus:border-transparent outline-none transition-all" placeholder="(555) 123-4567" />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="success-company" className="block text-sm font-bold text-[#022B3A] mb-2">Company Name (Optional)</label>
                    <input id="success-company" type="text" className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#EE5B2C] focus:border-transparent outline-none transition-all" placeholder="Your HVAC Business" />
                  </div>

                  <div>
                    <label htmlFor="success-message" className="block text-sm font-bold text-[#022B3A] mb-2">How can we help?</label>
                    <textarea id="success-message" rows={5} className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#EE5B2C] focus:border-transparent outline-none transition-all resize-none" placeholder="Tell us a little bit about your timeline or goals..."></textarea>
                  </div>

                  <button type="submit" className="w-full bg-[#EE5B2C] hover:bg-orange-600 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 text-lg mt-4">
                    Submit Confidential Inquiry
                  </button>
                  
                  <p className="text-sm text-gray-500 text-center mt-4">
                    <span className="inline-block text-[#EE5B2C] mr-1">🔒</span> 100% Confidential. Your information is never shared.
                  </p>
                </form>
              </div>
            </div>
          </section>

        </div>
      </main>
    </>
  );
}

