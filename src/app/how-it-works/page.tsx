import { Metadata } from 'next';
import Link from 'next/link';
import HowItWorksSteps from '../../views/components/HowItWorksSteps';
import { steps } from '../../data/howItWorksSteps';
import BreadcrumbSchema from '../../views/components/BreadcrumbSchema';
import ContactForm from '../../views/components/ContactForm';

export const metadata: Metadata = {
  title: 'How to Sell Your Florida HVAC Business | Expert Guide',
  description: 'Learn our step-by-step process of selling a Florida HVAC business, from confidential valuation and marketing to expert negotiation. Start your exit journey!',
  alternates: {
    canonical: 'https://www.hvacexitadvisors.com/how-it-works',
  },
  openGraph: {
    title: 'How to Sell Your Florida HVAC Business | HVAC Exit Advisors',
    description: 'Learn our step-by-step process of selling a Florida HVAC business, from confidential valuation and marketing to expert negotiation.',
    url: 'https://www.hvacexitadvisors.com/how-it-works',
    images: [{ url: '/how-to-sell-hvac-business-florida.jpg', width: 1200, height: 630, alt: 'Florida HVAC business transition' }]
  },
};

export default function HowItWorksPage() {
  const breadcrumbs = [
    { name: 'Home', item: 'https://www.hvacexitadvisors.com/' },
    { name: 'How It Works', item: 'https://www.hvacexitadvisors.com/how-it-works' }
  ];

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Sell Your Florida HVAC Business",
    "description": "The step-by-step advisory roadmap for confidentially selling a heating and air conditioning company in Florida.",
    "image": "https://www.hvacexitadvisors.com/how-to-sell-hvac-business-florida.jpg",
    "totalTime": "P120D",
    "speakable": {
      "@type": "SpeakableSpecification",
      "cssSelector": ["#how-to-title", "#how-to-description"]
    },
    "step": steps.map((step, index) => ({
      "@type": "HowToStep",
      "position": index + 1,
      "name": step.title,
      "text": step.description,
      "image": step.image,
      "url": `https://www.hvacexitadvisors.com/how-it-works#step-${index + 1}`
    }))
  };

  
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How long does it take to sell an HVAC business?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Generally, the entire process takes between 4 to 8 months from valuation to closing."
        }
      },
      {
        "@type": "Question",
        "name": "When is the right time to sell my HVAC business?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The best time to sell is when revenue has shown 3 consecutive years of upward growth."
        }
      },
      {
        "@type": "Question",
        "name": "How do you maintain confidentiality during the sale?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We use blind marketing profiles and require strict Non-Disclosure Agreements (NDAs) before revealing any identifying information."
        }
      }
    ]
  };

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "How to Sell Your Florida HVAC Business",
    "description": "The step-by-step advisory roadmap for confidentially selling a heating and air conditioning company in Florida.",
    "url": "https://www.hvacexitadvisors.com/how-it-works",
    "datePublished": "2026-09-01T08:00:00+00:00",
    "dateModified": new Date().toISOString(),
    "publisher": {
      "@type": "Organization",
      "name": "HVAC Exit Advisors"
    }
  };

  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: `[${JSON.stringify(howToSchema)},${JSON.stringify(webPageSchema)},${JSON.stringify(faqSchema)}]` }}
      />
      <main className="w-full bg-[#F7F5F0] min-h-screen">
        {/* Hero Section */}
        <section className="relative w-full h-[100dvh] overflow-hidden bg-gray-900 text-white flex items-center justify-center">
          <div className="absolute inset-0 z-0">
            <img 
              src="/how-to-sell-hvac-business-florida.jpg" 
              alt="Florida HVAC business transition and handshake" 
              className="w-full h-full object-cover object-center" 
            />
            <div className="absolute inset-0 bg-black/70" />
          </div>

          <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left mt-16 md:mt-0">
            <nav aria-label="Breadcrumb" className="text-sm font-semibold text-white/70 mb-6 flex items-center space-x-2">
              <Link href="/" className="hover:text-[#EE5B2C] transition-colors">Home</Link>
              <span>/</span>
              <span className="text-white">How It Works</span>
            </nav>

            <h1 id="how-to-title" className="text-4xl md:text-5xl lg:text-7xl font-black mb-6 leading-tight tracking-tight drop-shadow-xl">
              How to Sell Your <br className="hidden sm:block" />
              <span className="text-[#EE5B2C]">Florida HVAC Business</span>
            </h1>
            
            <p id="how-to-description" className="text-xl md:text-2xl text-white/90 leading-relaxed font-medium mb-6 max-w-3xl drop-shadow-md">
              A proven roadmap designed to maximize your transaction multiple while preserving total confidentiality from staff, competitors, and customers.
            </p>
          </div>
        </section>

        {/* Executive Summary */}
        <section className="w-full bg-white py-12 border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-[#022B3A]/5 border border-[#022B3A]/10 p-8 rounded-2xl">
              <div className="flex flex-wrap items-center justify-between border-b border-gray-200 pb-4 mb-4">
                <h2 className="text-2xl font-black text-[#022B3A]">Executive Summary: The M&A Sales Process</h2>
                <span className="text-sm font-bold text-gray-500 bg-white px-3 py-1 rounded-full border border-gray-200">Last Updated: Sept 2026</span>
              </div>
              
              <p className="text-gray-700 font-medium leading-relaxed mb-6">
                <strong>Key Takeaway:</strong> Successfully selling your HVAC company requires rigorous financial preparation, completely confidential marketing, and competitive buyer negotiations. We use first-hand transaction data and <a href="https://www.ibba.org/" target="_blank" rel="noopener noreferrer" className="text-[#EE5B2C] hover:underline">IBBA standards</a> to execute your exit strategy flawlessly.
                <br /><br />
                <strong>Definition:</strong> The M&A (Mergers and Acquisitions) exit process for HVAC businesses is a multi-step structured framework where a broker prepares the financial prospectus, vets potential strategic and private equity buyers, and negotiates terms to finalize the transfer of ownership.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-bold text-[#EE5B2C] mb-2 text-sm uppercase tracking-wider">Target Audience & Use Case</h3>
                  <ul className="space-y-2 text-sm font-medium text-gray-700">
                    <li>? <strong>Audience:</strong> Mechanical contracting business owners in Florida.</li>
                    <li>? <strong>Use Case:</strong> Preparing for retirement, partnership dissolution, or liquidity events.</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-[#EE5B2C] mb-2 text-sm uppercase tracking-wider">Internal Resources</h3>
                  <ul className="space-y-2 text-sm font-medium text-gray-700">
                    <li><Link href="/hvac-business-valuation" className="hover:text-orange-600 underline">Free Online Valuation Calculator</Link></li>
                    <li><Link href="/resources/hvac-business-in-florida" className="hover:text-orange-600 underline">The Complete Florida HVAC Industry Guide</Link></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Component replacing RoadmapAscent */}
        <HowItWorksSteps />

        {/* Comparison Section */}
        <section className="w-full bg-[#F7F5F0] py-20 border-t border-gray-100">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-black text-[#022B3A] text-center mb-10">Our Process vs. Traditional Brokers</h2>
            <div className="overflow-x-auto bg-white rounded-2xl shadow-sm border border-gray-100 p-2">
              <table className="w-full text-left border-collapse min-w-[500px]">
                <thead>
                  <tr>
                    <th className="p-4 font-bold text-gray-900 border-b-2 border-gray-100 text-lg">Process Step</th>
                    <th className="p-4 font-black text-[#022B3A] bg-orange-50/50 border-b-2 border-orange-100 text-lg rounded-tl-xl">HVAC Exit Advisors</th>
                    <th className="p-4 font-bold text-gray-500 border-b-2 border-gray-100 text-lg">General Brokers</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr>
                    <td className="p-4 font-medium text-gray-700">Valuation</td>
                    <td className="p-4 font-bold text-[#EE5B2C] bg-orange-50/30">Based heavily on PMAs and HVAC-specific EBITDA add-backs</td>
                    <td className="p-4 text-gray-500">Based on generic revenue multiples</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium text-gray-700">Marketing</td>
                    <td className="p-4 font-bold text-[#EE5B2C] bg-orange-50/30">Direct pitch to specialized Private Equity & Consolidators</td>
                    <td className="p-4 text-gray-500">Public listings on BizBuySell</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium text-gray-700">Due Diligence</td>
                    <td className="p-4 font-bold text-[#EE5B2C] bg-orange-50/30">In-house audit preparation specific to DBPR requirements</td>
                    <td className="p-4 text-gray-500">Hands-off, relies entirely on your CPA</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="w-full bg-white py-20 border-t border-gray-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-black text-[#022B3A] text-center mb-10">Frequently Asked Questions About the Process</h2>
            
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 mb-6">
              <h3 className="text-xl font-bold text-[#022B3A] mb-2">How long does it take to sell an HVAC business?</h3>
              <p className="text-gray-700 font-medium">
                Generally, the entire process takes between 4 to 8 months from valuation to closing.<br/>
                This timeframe depends heavily on how clean your financial statements are and the current demand for strategic acquisitions in your specific Florida territory.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 mb-6">
              <h3 className="text-xl font-bold text-[#022B3A] mb-2">When is the right time to sell my HVAC business?</h3>
              <p className="text-gray-700 font-medium">
                The best time to sell is when revenue has shown 3 consecutive years of upward growth.<br/>
                Buyers pay premium multiples for growing companies with high technician retention and a strong ratio of preventative maintenance agreements (PMAs) to new construction revenue.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 mb-6">
              <h3 className="text-xl font-bold text-[#022B3A] mb-2">How do you maintain confidentiality during the sale?</h3>
              <p className="text-gray-700 font-medium">
                We use blind marketing profiles and require strict Non-Disclosure Agreements (NDAs) before revealing any identifying information.<br/>
                Your employees, competitors, and customers will have no idea your business is on the market until the transaction is successfully closed.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Us Form Section */}
        <section className="w-full bg-[#022B3A] py-24 border-t border-gray-100">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-black text-white mb-4">Ready to Discuss Your Exit?</h2>
              <p className="text-lg text-white/80 font-medium">Yes, if you want to maximize your valuation. Contact us today for a completely confidential, no-obligation conversation.</p>
            </div>
            
            <div className="bg-white rounded-[2rem] shadow-2xl p-8 md:p-12">
              <ContactForm buttonText="Submit Confidential Inquiry" />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}


