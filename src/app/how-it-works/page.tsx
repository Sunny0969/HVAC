import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import HowItWorksSteps from '../../views/components/HowItWorksSteps';
import { steps } from '../../data/howItWorksSteps';
import BreadcrumbSchema from '../../views/components/BreadcrumbSchema';
import ContactForm from '../../views/components/ContactForm';

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

            <h1 id="how-to-title" className="text-4xl md:text-5xl lg:text-7xl font-black mb-6 leading-tight tracking-tight drop-shadow-xl">
              How to Sell Your <br className="hidden sm:block" />
              <span className="text-[#EE5B2C]">Florida HVAC Business</span>
            </h1>
            
            <p id="how-to-description" className="text-xl md:text-2xl text-white/90 leading-relaxed font-medium mb-6 max-w-3xl drop-shadow-md">
              A proven roadmap designed to maximize your transaction multiple while preserving total confidentiality from staff, competitors, and customers.
            </p>
          </div>
        </section>

        {/* The Component replacing RoadmapAscent */}
        <HowItWorksSteps />

        {/* Contact Us Form Section */}
        <section className="w-full bg-white py-24 border-t border-gray-100">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-black text-[#022B3A] mb-4">Ready to Discuss Your Exit?</h2>
              <p className="text-lg text-gray-600 font-medium">Contact us today for a completely confidential, no-obligation conversation.</p>
            </div>
            
            <div className="bg-gray-50 rounded-[2rem] shadow-xl shadow-gray-200/50 border border-gray-100 p-8 md:p-12">
              <ContactForm buttonText="Submit Confidential Inquiry" />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
