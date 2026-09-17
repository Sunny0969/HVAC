import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import BreadcrumbSchema from '../../views/components/BreadcrumbSchema';
import ContactForm from '../../views/components/ContactForm';
import WhySellFaq from '../../views/components/WhySellFaq';

export const metadata: Metadata = {
  title: 'Why Choose Our Florida HVAC Business Broker',
  description: 'Discover why HVAC Exit Advisors is the premier choice for selling your Florida HVAC business. Get unmatched confidentiality and maximum value. Learn more!',
  alternates: {
    canonical: 'https://www.hvacexitadvisors.com/why-sell-with-us',
  },
  openGraph: {
    title: 'Why Choose Our Florida HVAC Business Broker | HVAC Exit Advisors',
    description: 'Discover why HVAC Exit Advisors is the premier choice for selling your Florida HVAC business. Get unmatched confidentiality and maximum value.',
    url: 'https://www.hvacexitadvisors.com/why-sell-with-us',
    images: [{ url: 'https://res.cloudinary.com/db05hw4ri/image/upload/v1789679441/hvac-assets/unsplash_asset_3_1789679440217.jpg', width: 1200, height: 630, alt: 'Why Sell With Us' }]
  },
};

export default function WhySellWithUsPage() {
  const breadcrumbs = [
    { name: 'Home', item: 'https://www.hvacexitadvisors.com/' },
    { name: 'Why Sell With Us', item: 'https://www.hvacexitadvisors.com/why-sell-with-us' }
  ];

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Why Choose Our Florida HVAC Business Broker",
    "description": "Discover why HVAC Exit Advisors is the premier choice for selling your Florida HVAC business.",
    "url": "https://www.hvacexitadvisors.com/why-sell-with-us",
    "publisher": {
      "@type": "Organization",
      "name": "HVAC Exit Advisors"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Why use an HVAC-focused business broker?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "An HVAC-focused broker can evaluate maintenance agreements, technician capacity, licensing, seasonal working capital, service and installation mix, warranties, fleet requirements, and other industry-specific issues that may affect price and transaction structure."
        }
      },
      {
        "@type": "Question",
        "name": "How are prospective buyers screened?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A buyer should provide a completed profile, signed NDA, proof of funds, and, when financing is involved, evidence of lender or SBA readiness."
        }
      }
    ]
  };

  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      
      <main className="min-h-screen bg-[#F7F5F0] flex flex-col items-center">
        {/* Hero Section */}
        <section className="relative w-full h-[100dvh] overflow-hidden bg-gray-900 text-white flex items-center justify-center">
          <div className="absolute inset-0 z-0">
            <Image
              src="/why-sell-with-us.jpg"
              alt="Commercial HVAC units on a rooftop in Florida"
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
              <span className="text-white">Why Sell With Us</span>
            </nav>

            <h1 className="max-w-4xl text-4xl md:text-5xl lg:text-7xl font-black mb-6 leading-tight tracking-tight drop-shadow-xl">
              Partner With Florida&apos;s <span className="text-[#EE5B2C]">HVAC Specialists</span>
            </h1>
            <p className="max-w-3xl text-xl md:text-2xl text-white/90 leading-relaxed font-medium drop-shadow-md mb-12">
              HVAC Exit Advisors is a specialized brokerage division dedicated to achieving maximum exit value for Florida heating, cooling, and mechanical service companies.
            </p>
          </div>
        </section>

        {/* Top Summary / Key Takeaway */}
        <div className="max-w-5xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-12 -mb-8">
          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-2xl">
            <p className="text-lg text-blue-900 font-medium leading-relaxed">
              <strong>Key Takeaway for Sellers:</strong> This guide is designed for Florida HVAC business owners who are preparing to sell their company in 2026 and want to maximize their exit value. It explains our rigorous approach to valuing maintenance agreements, confidentially qualifying buyers, and executing a smooth <Link href="/sell-your-hvac-business" className="underline font-bold text-blue-700">HVAC business sale</Link>.
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-grow max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">

          {/* Card 1: HVAC Transaction Knowledge */}
          <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-xl shadow-gray-200/50 border border-gray-100 mb-10">
            <h2 className="text-3xl font-black text-[#022B3A] mb-4">Why is HVAC Transaction Knowledge Important?</h2>
            <p className="text-lg text-gray-700 font-medium leading-relaxed mb-4">
              <strong>What is transaction knowledge?</strong> It means understanding the precise value drivers specific to the mechanical trades that general business descriptions often miss. For example, in our first-hand experience advising over 50 mechanical contractors in Florida, proper documentation of Preventative Maintenance Agreements (PMAs) has consistently increased business valuations by up to 15%.
            </p>
            <p className="text-lg text-gray-700 font-medium leading-relaxed mb-4">
              In 2026 data models, HVAC businesses with more than 50% commercial service revenue are seeing valuations 20-30% higher than residential-only installation companies. We evaluate critical metrics to capture this premium, such as:
            </p>
            <ul className="mt-4 mb-6 space-y-2 list-disc list-inside text-lg text-gray-700 font-medium">
              <li>Maintenance agreement renewals</li>
              <li>Service-versus-installation revenue mix</li>
              <li>Technician retention and dispatch operations</li>
              <li>Fleet condition and seasonal working capital</li>
            </ul>
            <p className="text-lg text-gray-700 font-medium leading-relaxed">
              Find out how these factors apply to your business using our <Link href="/hvac-business-valuation-calculator" className="text-[#EE5B2C] hover:underline font-bold">HVAC business valuation calculator</Link>.
            </p>
          </div>

          {/* Card 2: Confidentiality */}
          <div className="bg-[#022B3A] rounded-[2rem] p-8 md:p-12 shadow-xl text-white mb-10">
            <h2 className="text-3xl font-black text-white mb-4">How Do We Ensure Complete Confidentiality?</h2>
            <p className="text-lg text-white/85 font-medium leading-relaxed mb-4">
              Protecting your business identity is our top priority. According to official documentation from the <a href="https://www.ibba.org/" target="_blank" rel="noopener noreferrer" className="text-[#EE5B2C] hover:underline font-bold">International Business Brokers Association (IBBA)</a>, maintaining strict confidentiality prevents disruption to your staff and customers.
            </p>
            <p className="text-sm text-white/60 font-medium italic mb-4">
              Source: IBBA Professional Standards on Confidential Marketing.
            </p>
            <p className="text-lg text-white/85 font-medium leading-relaxed">
              We control the release of identifying information through a rigorous step-by-step process:
            </p>
            <ol className="mt-4 space-y-2 list-decimal list-inside text-lg text-white/85 font-medium">
              <li>Initial blind marketing profiles</li>
              <li>Strict Non-Disclosure Agreements (NDAs)</li>
              <li>Verification of buyer funds and financing</li>
              <li>Controlled release of confidential information memorandums</li>
            </ol>
          </div>

          {/* Card 3: Established Buyer Reach */}
          <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-xl shadow-gray-200/50 border border-gray-100 mb-10">
            <h2 className="text-3xl font-black text-[#022B3A] mb-4">How Do We Connect You With The Right Buyers?</h2>
            <p className="text-lg text-gray-700 font-medium leading-relaxed">
              <strong>Should I list my business publicly?</strong> No, public listings can harm your business by alerting competitors and employees. Through KMF Business Advisors, we maintain an established private database of over <strong>12,000 active buyer and investor contacts</strong>. While database size is important, we emphasize targeted outreach and individual buyer qualification to find the right strategic fit. Read more about <Link href="/buy-an-hvac-business" className="text-[#EE5B2C] hover:underline font-bold">what HVAC buyers are looking for</Link>.
            </p>
          </div>

          {/* Card 4: Comparison Table */}
          <div className="bg-gray-50 rounded-[2rem] p-8 md:p-12 shadow-md border border-gray-100 mb-10">
            <h2 className="text-3xl font-black text-[#022B3A] mb-6">General Broker vs. HVAC Specialist</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr>
                    <th className="py-3 px-4 bg-white text-[#022B3A] font-bold border-b border-gray-200">Feature</th>
                    <th className="py-3 px-4 bg-white text-[#022B3A] font-bold border-b border-gray-200">General Business Broker</th>
                    <th className="py-3 px-4 bg-white text-[#022B3A] font-bold border-b border-gray-200">HVAC Exit Advisors</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700 text-sm font-medium">
                  <tr>
                    <td className="py-3 px-4 border-b border-gray-100">Industry Knowledge</td>
                    <td className="py-3 px-4 border-b border-gray-100">Generalist across all sectors</td>
                    <td className="py-3 px-4 border-b border-gray-100 font-bold text-[#EE5B2C]">Specialized in mechanical trades</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 border-b border-gray-100">Valuation Focus</td>
                    <td className="py-3 px-4 border-b border-gray-100">Revenue and standard SDE</td>
                    <td className="py-3 px-4 border-b border-gray-100 font-bold text-[#EE5B2C]">PMA retention, seasonal working capital</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 border-b border-gray-100">Buyer Network</td>
                    <td className="py-3 px-4 border-b border-gray-100">Local individual buyers</td>
                    <td className="py-3 px-4 border-b border-gray-100 font-bold text-[#EE5B2C]">PE groups & strategic HVAC buyers</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* FAQs */}
          <WhySellFaq />

          {/* CTA Button */}
          <div className="text-center mt-12 mb-20">
            <Link
              href="/contact-us"
              className="inline-block px-10 py-5 bg-[#EE5B2C] hover:bg-orange-600 text-white font-bold text-lg rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5"
            >
              Speak With an HVAC Business Advisor
            </Link>
          </div>

        </div>

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
