import { Metadata } from 'next';
import Image from 'next/image';
import RoadmapAscent, { RoadmapStep } from '../../views/components/RoadmapAscent';

export const metadata: Metadata = {
  title: 'How To Sell An HVAC Business',
  description: 'Expert services for how to sell an hvac business.',
};

const fullSteps: RoadmapStep[] = [
  { title: "Valuation & Prep", description: "Deep-dive financial analysis to establish maximum market value and package your business.", day: "DAYS 1-14" },
  { title: "Marketing Launch", description: "Going to market with discrete, blind profiles to our vetted buyer network of private equity and strategics.", day: "DAYS 15-30" },
  { title: "Buyer Matching", description: "Fielding inquiries, executing strict NDAs, and qualifying buyer financial capacity.", day: "DAYS 30-60" },
  { title: "Negotiation", description: "Reviewing LOIs and structuring the optimal deal terms for your exit, tax-efficiently.", day: "DAYS 60-90" },
  { title: "Due Diligence", description: "Managing the data room, CPA reviews, and legal drafting to keep the deal on track.", day: "DAYS 90-120" },
  { title: "The Close", description: "Final signatures, wire transfers, and securing your hard-earned legacy.", day: "DAYS 120+" }
];

export default function Page() {
  return (
    <main className="w-full bg-[#F7F5F0] min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[100dvh] overflow-hidden bg-gray-900 text-white flex items-center justify-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/How it works.jpg"
            alt="Business transition and handshake"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          {/* Dark Overlay for Text Contrast */}
          <div className="absolute inset-0 bg-black/70" />
        </div>

        <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left mt-16 md:mt-0">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-black mb-6 leading-tight tracking-tight drop-shadow-xl">
            The Roadmap to a <br className="hidden sm:block" />
            <span className="text-[#EE5B2C]">Successful Exit</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 leading-relaxed font-medium mb-6 max-w-3xl drop-shadow-md">
            A step-by-step guide to how we maximize value and maintain absolute confidentiality when selling your Florida HVAC business.
          </p>
        </div>
      </section>

      {/* Hidden SEO header above the cinematic stage */}
      <div className="sr-only">
        <h1>How To Sell An HVAC Business</h1>
        <h2>Step-by-step roadmap to a successful exit.</h2>
      </div>
      <RoadmapAscent steps={fullSteps} />

      {/* Contact Us Form Section */}
      <section className="w-full bg-white py-24 border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-black text-[#022B3A] mb-4">Ready to Discuss Your Exit?</h2>
            <p className="text-lg text-gray-600 font-medium">Contact us today for a completely confidential, no-obligation conversation.</p>
          </div>
          
          <div className="bg-gray-50 rounded-[2rem] shadow-xl shadow-gray-200/50 border border-gray-100 p-8 md:p-12">
            <form className="flex flex-col space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-[#022B3A] mb-2">First Name *</label>
                  <input type="text" required className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#EE5B2C] focus:border-transparent outline-none transition-all" placeholder="John" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-[#022B3A] mb-2">Last Name *</label>
                  <input type="text" required className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#EE5B2C] focus:border-transparent outline-none transition-all" placeholder="Doe" />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-[#022B3A] mb-2">Email Address *</label>
                  <input type="email" required className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#EE5B2C] focus:border-transparent outline-none transition-all" placeholder="john@example.com" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-[#022B3A] mb-2">Phone Number *</label>
                  <input type="tel" required className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#EE5B2C] focus:border-transparent outline-none transition-all" placeholder="(555) 123-4567" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-[#022B3A] mb-2">Company Name (Optional)</label>
                <input type="text" className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#EE5B2C] focus:border-transparent outline-none transition-all" placeholder="Your HVAC Business" />
              </div>

              <div>
                <label className="block text-sm font-bold text-[#022B3A] mb-2">How can we help?</label>
                <textarea rows={5} className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#EE5B2C] focus:border-transparent outline-none transition-all resize-none" placeholder="Tell us a little bit about your timeline or goals..."></textarea>
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
    </main>
  );
}
