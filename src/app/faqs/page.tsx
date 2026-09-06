import { Metadata } from 'next';
import Link from 'next/link';
import FaqAccordionList from '../../views/components/FaqAccordionList';
import FaqSidebar from '../../views/components/FaqSidebar';
import { faqCategories } from '../../lib/faq-data';

export const metadata: Metadata = {
  title: 'HVAC Business Broker FAQs | Buying & Selling in Florida',
  description: 'Straight answers on valuing, selling, or buying an HVAC business in Florida - confidentiality, financing, timelines, and more.',
  alternates: {
    canonical: 'https://www.sunstatehvacbrokers.com/faqs'
  }
};

export default function FaqsPage() {
  const mainEntity = faqCategories.flatMap((cat) =>
    cat.items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    }))
  );

  const jsonLdData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity,
  };

  return (
    <main className="min-h-screen flex flex-col bg-[#F7F5F0]">
      
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-24 overflow-hidden bg-[#022B3A] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left relative z-10">
          <nav className="text-sm font-medium text-white/60 mb-6 flex items-center space-x-2">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white">Resources</span>
            <span>/</span>
            <span className="text-[#EE5B2C]">FAQs</span>
          </nav>
          
          <h1 className="max-w-4xl text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight tracking-tight">
            Buying & Selling an HVAC Business in Florida: FAQs
          </h1>
          
          <p className="max-w-3xl text-xl text-white/90 leading-relaxed font-medium">
            Whether you're a Florida HVAC owner thinking about your exit, or a buyer evaluating your first acquisition, these are the questions we hear most. If you don't see yours answered here, <Link href="/contact-us" className="text-[#EE5B2C] hover:underline font-bold">contact us directly</Link> - we'll walk you through it.
          </p>
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
              href="/free-valuation" 
              className="w-full sm:w-auto px-8 py-4 bg-[#EE5B2C] hover:bg-orange-600 text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 text-center"
            >
              Get Your Free Valuation &rarr;
            </Link>
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
  );
}
