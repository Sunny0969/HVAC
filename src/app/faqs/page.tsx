import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import FaqAccordionList from '../../views/components/FaqAccordionList';
import FaqSidebar from '../../views/components/FaqSidebar';
import { faqCategories } from '../../lib/faq-data';
import BreadcrumbSchema from '../../views/components/BreadcrumbSchema';

export const metadata: Metadata = {
  title: 'Florida HVAC Broker FAQs | Buying & Selling',
  description: 'Get straight answers on valuing, selling, or buying an HVAC business in Florida. Explore FAQs about confidentiality, financing, and timelines.',
  alternates: {
    canonical: 'https://www.hvacexitadvisors.com/faqs'
  },
  openGraph: {
    title: 'Florida HVAC Broker FAQs | Buying & Selling',
    description: 'Get straight answers on valuing, selling, or buying an HVAC business in Florida. Explore FAQs about confidentiality, financing, and timelines.',
    url: 'https://www.hvacexitadvisors.com/faqs',
    images: [{ url: 'https://res.cloudinary.com/db05hw4ri/image/upload/v1789679438/hvac-assets/unsplash_asset_0_1789679436407.jpg', width: 1200, height: 630, alt: 'HVAC FAQs' }]
  },
};

export default function FaqsPage() {
  const breadcrumbs = [
    { name: 'Home', item: 'https://www.hvacexitadvisors.com/' },
    { name: 'FAQs', item: 'https://www.hvacexitadvisors.com/faqs' }
  ];

  const mainEntity = faqCategories.flatMap((cat) =>
    cat.items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: "" + item.a },
    }))
  );

  const jsonLdFAQ = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity,
  };

  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "Florida HVAC Broker FAQs",
    "description": "Comprehensive FAQs about buying and selling HVAC businesses in Florida.",
    "datePublished": "2026-09-01T08:00:00+00:00",
    "dateModified": new Date().toISOString(),
    "author": {
      "@type": "Organization",
      "name": "HVAC Exit Advisors"
    },
    "publisher": {
      "@type": "Organization",
      "name": "HVAC Exit Advisors",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.hvacexitadvisors.com/icon.png"
      }
    }
  };

  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <main className="min-h-screen flex flex-col bg-[#F7F5F0]">
        
        {/* JSON-LD Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: `[${JSON.stringify(jsonLdFAQ)},${JSON.stringify(blogSchema)}]` }}
        />

      {/* Hero Section */}
      <section className="relative w-full h-[100dvh] overflow-hidden bg-gray-900 text-white flex items-center justify-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://res.cloudinary.com/db05hw4ri/image/upload/v1789679438/hvac-assets/unsplash_asset_0_1789679436407.jpg?w=1600&auto=format&fit=crop&q=80"
            alt="FAQ Hero background"
            className="w-full h-full object-cover object-center"
          />
          {/* Dark Overlay for Text Contrast */}
          <div className="absolute inset-0 bg-black/70" />
        </div>

        <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left mt-16 md:mt-0">
          <nav className="text-sm font-medium text-white/60 mb-6 flex items-center space-x-2">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white">Resources</span>
            <span>/</span>
            <span className="text-[#EE5B2C]">FAQs</span>
          </nav>
          
          <h1 className="max-w-4xl text-4xl md:text-5xl lg:text-7xl font-black mb-6 leading-tight tracking-tight drop-shadow-xl">
            Florida HVAC Broker FAQs
          </h1>
          
          <p className="max-w-3xl text-xl md:text-2xl text-white/90 leading-relaxed font-medium drop-shadow-md">
            Whether you're a Florida HVAC owner thinking about your exit, or a buyer evaluating your first acquisition, these are the questions we hear most. If you don't see yours answered here, <Link href="/contact-us" className="text-[#EE5B2C] hover:underline font-bold transition-colors">contact us directly</Link>.
          </p>
        </div>
      </section>

      {/* Executive Summary */}
      <section className="w-full bg-white py-12 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#022B3A]/5 border border-[#022B3A]/10 p-8 rounded-2xl">
            <div className="flex flex-wrap items-center justify-between border-b border-gray-200 pb-4 mb-4">
              <h2 className="text-2xl font-black text-[#022B3A]">Executive Summary: Broker Insights</h2>
              <span className="text-sm font-bold text-gray-500 bg-white px-3 py-1 rounded-full border border-gray-200">Last Updated: Sept 2026</span>
            </div>
            
            <p className="text-gray-700 font-medium leading-relaxed mb-6">
              <strong>Key Takeaway:</strong> Selling an HVAC business requires specialized knowledge of maintenance agreements, tech retention, and local licensing laws. <strong>Definition:</strong> An HVAC Broker is a specialized M&A advisor who manages the confidential sale of mechanical contracting businesses. We use <a href="https://www.ibba.org/" target="_blank" rel="noopener noreferrer" className="text-[#EE5B2C] hover:underline">IBBA standards</a> to ensure accuracy.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-bold text-[#EE5B2C] mb-2 text-sm uppercase tracking-wider">Target Audience</h3>
                <ul className="space-y-2 text-sm font-medium text-gray-700">
                  <li>? HVAC business owners preparing for exit or retirement.</li>
                  <li>? Private Equity firms and strategic buyers looking to acquire in Florida.</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-[#EE5B2C] mb-2 text-sm uppercase tracking-wider">Use Case</h3>
                <p className="text-sm font-medium text-gray-700">
                  Use this FAQ database to resolve initial doubts about the M&A process before initiating a formal, confidential valuation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="flex-grow w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Sticky Left Sidebar TOC */}
          <aside className="hidden lg:block lg:col-span-4">
            <FaqSidebar categories={faqCategories} />
          </aside>

          {/* Accordion Component */}
          <div className="lg:col-span-8">
            <FaqAccordionList categories={faqCategories} />
          </div>
          
        </div>
      </div>

      {/* Bottom CTA */}
      <section className="bg-white border-t border-gray-200 py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-[#022B3A] mb-6">Still have questions?</h2>
          <p className="text-xl text-gray-600 mb-10 font-medium">
            Every HVAC business is different, and general answers can only take you so far. Talk to a broker who knows the Florida market and get a free, confidential valuation to see where you actually stand.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              href="/free-confidential-valuation" 
              className="w-full sm:w-auto px-8 py-4 bg-[#EE5B2C] hover:bg-orange-600 text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 text-center"
            >Request a Confidential Valuation</Link>
            <Link 
              href="/contact-us" 
              className="w-full sm:w-auto px-8 py-4 bg-gray-100 hover:bg-gray-200 text-[#022B3A] font-bold rounded-lg transition-colors text-center"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
      </main>
    </>
  );
}

