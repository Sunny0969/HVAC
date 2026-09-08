import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import RoadmapAscent, { RoadmapStep } from '../../views/components/RoadmapAscent';
import BreadcrumbSchema from '../../views/components/BreadcrumbSchema';

export const metadata: Metadata = {
  title: 'How to Sell an HVAC Business in Florida',
  description: 'Learn our step-by-step process of selling a Florida HVAC business, from confidential valuation and marketing to expert negotiation. Start your exit journey!',
  alternates: {
    canonical: 'https://www.hvacexitadvisors.com/how-it-works',
  },
  openGraph: {
    title: 'How to Sell an HVAC Business in Florida | HVAC Exit Advisors',
    description: 'Learn our step-by-step process of selling a Florida HVAC business, from confidential valuation and marketing to expert negotiation.',
    url: 'https://www.hvacexitadvisors.com/how-it-works',
  },
};

const fullSteps: RoadmapStep[] = [
  { title: "Valuation & Prep", description: "Deep-dive financial analysis to establish maximum market value and package your business.", day: "DAYS 1-14" },
  { title: "Marketing Launch", description: "Going to market with discrete, blind profiles to our vetted buyer network of private equity and strategics.", day: "DAYS 15-30" },
  { title: "Buyer Matching", description: "Fielding inquiries, executing strict NDAs, and qualifying buyer financial capacity.", day: "DAYS 30-60" },
  { title: "Negotiation", description: "Reviewing LOIs and structuring the optimal deal terms for your exit, tax-efficiently.", day: "DAYS 60-90" },
  { title: "Due Diligence", description: "Managing the data room, CPA reviews, and legal drafting to keep the deal on track.", day: "DAYS 90-120" },
  { title: "The Close", description: "Final signatures, wire transfers, and securing your hard-earned legacy.", day: "DAYS 120+" }
];

export default function HowItWorksPage() {
  const breadcrumbs = [
    { name: 'Home', item: 'https://www.hvacexitadvisors.com/' },
    { name: 'How It Works', item: 'https://www.hvacexitadvisors.com/how-it-works' }
  ];

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Sell an HVAC Business in Florida",
    "description": "The step-by-step advisory roadmap for confidentially selling a heating and air conditioning company in Florida.",
    "step": fullSteps.map((step, index) => ({
      "@type": "HowToStep",
      "position": index + 1,
      "name": step.title,
      "text": step.description
    }))
  };

  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <main className="w-full bg-[#F7F5F0] min-h-screen">
        {/* Hero Section */}
        <section className="relative w-full h-[100dvh] overflow-hidden bg-gray-900 text-white flex items-center justify-center">
          <div className="absolute inset-0 z-0">
            <Image
              src="/how-to-sell-hvac-business-florida.jpg"
              alt="Florida HVAC business transition and handshake"
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
              <span className="text-white">How It Works</span>
            </nav>

            <h1 className="text-4xl md:text-5xl lg:text-7xl font-black mb-6 leading-tight tracking-tight drop-shadow-xl">
              How to Sell Your <br className="hidden sm:block" />
              <span className="text-[#EE5B2C]">Florida HVAC Business</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed font-medium mb-6 max-w-3xl drop-shadow-md">
              A proven 6-stage roadmap designed to maximize your transaction multiple while preserving total confidentiality from staff, competitors, and customers.
            </p>
          </div>
        </section>

        {/* Section Heading */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-black text-[#022B3A] mb-2">
            The 6 Phases of a Successful HVAC Exit
          </h2>
          <p className="text-gray-600 text-lg font-medium">
            From initial financial recasting to closing wire transfers, here is how our specialized process works.
          </p>
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
                    <label htmlFor="firstName" className="block text-sm font-bold text-[#022B3A] mb-2">First Name *</label>
                    <input id="firstName" type="text" required className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#EE5B2C] focus:border-transparent outline-none transition-all" placeholder="John" />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-bold text-[#022B3A] mb-2">Last Name *</label>
                    <input id="lastName" type="text" required className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#EE5B2C] focus:border-transparent outline-none transition-all" placeholder="Doe" />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-bold text-[#022B3A] mb-2">Email Address *</label>
                    <input id="email" type="email" required className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#EE5B2C] focus:border-transparent outline-none transition-all" placeholder="john@example.com" />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-bold text-[#022B3A] mb-2">Phone Number *</label>
                    <input id="phone" type="tel" required className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#EE5B2C] focus:border-transparent outline-none transition-all" placeholder="(555) 123-4567" />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-bold text-[#022B3A] mb-2">Company Name (Optional)</label>
                  <input id="company" type="text" className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#EE5B2C] focus:border-transparent outline-none transition-all" placeholder="Your HVAC Business" />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-bold text-[#022B3A] mb-2">How can we help?</label>
                  <textarea id="message" rows={5} className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#EE5B2C] focus:border-transparent outline-none transition-all resize-none" placeholder="Tell us a little bit about your timeline or goals..."></textarea>
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
    </>
  );
}
