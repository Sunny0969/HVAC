import { Metadata } from 'next';
import Link from 'next/link';
import Colonnade from '../../views/components/Colonnade';
import { differentiators } from '../../data/differentiators';

export const metadata: Metadata = {
  title: 'Best HVAC Business Broker Florida',
  description: 'Expert services for best hvac business broker florida.',
};

export default function Page() {
  return (
    <main className="min-h-screen flex flex-col bg-gray-50">
      
      {/* Hero Section - Matches Buy/Sell Pages */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-24 overflow-hidden bg-[#022B3A] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left relative z-10">
          <h1 className="max-w-4xl text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight tracking-tight">
            Why Sell With Us?
          </h1>
          
          <p className="max-w-3xl text-xl text-white/90 leading-relaxed font-medium mb-10">
            We don't juggle unrelated industries. SunState HVAC Brokers is built specifically for Florida heating and cooling owners who want to maximize their exit value with zero disruptions to their daily operations.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-4 mb-12">
            <Link 
              href="/free-valuation" 
              className="w-full sm:w-auto px-8 py-4 bg-[#EE5B2C] hover:bg-orange-600 text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 text-center"
            >
              Get My Free Valuation &rarr;
            </Link>
            <Link 
              href="/contact-us" 
              className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold rounded-lg transition-colors text-center"
            >
              Talk to a Broker
            </Link>
          </div>

          <div className="flex flex-wrap items-center gap-x-8 gap-y-4 text-sm font-bold text-white/80">
            {[
              "HVAC only",
              "Florida-wide reach",
              "Financially-verified buyers",
              "No fee until you close"
            ].map((text, i) => (
              <div key={i} className="flex items-center">
                <svg className="w-5 h-5 text-[#EE5B2C] mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
                {text}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <h2 className="text-3xl font-black text-[#022B3A] mb-12 text-center">The HVAC Brokerage Advantage</h2>
        
        <Colonnade items={differentiators} />

        {/* Static Fallback for crawlers without JS, safely hidden from visual users */}
        <div className="sr-only">
          {differentiators.map((item) => (
            <article key={item.id}>
              <h3>{item.title}</h3>
              <p>{item.content}</p>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
