import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import FaqAccordionList from '../../views/components/FaqAccordionList';
import FaqSidebar from '../../views/components/FaqSidebar';
import { faqCategories } from '../../lib/faq-data';

export const metadata: Metadata = {
  title: 'HVAC Business Broker FAQs | Buying & Selling in Florida',
  description: 'Straight answers on valuing, selling, or buying an HVAC business in Florida - confidentiality, financing, timelines, and more.',
  alternates: {
    canonical: 'https://www.hvacexitadvisors.com/faqs'
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
      <section className="relative w-full h-[100dvh] overflow-hidden bg-gray-900 text-white flex items-center justify-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1665789318391-6057c533005e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZmFxc3xlbnwwfDB8MHx8fDI%3D"
            alt="FAQ Hero background"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
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
            Buying & Selling an <span className="text-[#EE5B2C]">HVAC Business</span> in Florida: FAQs
          </h1>
          
          <p className="max-w-3xl text-xl md:text-2xl text-white/90 leading-relaxed font-medium drop-shadow-md">
            Whether you're a Florida HVAC owner thinking about your exit, or a buyer evaluating your first acquisition, these are the questions we hear most. If you don't see yours answered here, <Link href="/contact-us" className="text-[#EE5B2C] hover:underline font-bold transition-colors">contact us directly</Link> - we'll walk you through it.
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
