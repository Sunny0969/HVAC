import { Metadata } from 'next';
import Link from 'next/link';
import BreadcrumbSchema from '../../views/components/BreadcrumbSchema';

export const metadata: Metadata = {
  title: 'Florida HVAC Business Broker Team',
  description: 'Meet Florida\'s premier HVAC business brokerage firm. Former mechanical contractors helping owners achieve maximum exit value. Learn about our story!',
  alternates: {
    canonical: 'https://www.hvacexitadvisors.com/about-us',
  },
  openGraph: {
    title: 'Florida HVAC Business Broker Team | HVAC Exit Advisors',
    description: 'Meet Florida\'s premier HVAC business brokerage firm. Former mechanical contractors helping owners achieve maximum exit value.',
    url: 'https://www.hvacexitadvisors.com/about-us',
  },
};

export default function Page() {
  const breadcrumbs = [
    { name: 'Home', item: 'https://www.hvacexitadvisors.com/' },
    { name: 'About Us', item: 'https://www.hvacexitadvisors.com/about-us' }
  ];

  const aboutSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "mainEntity": {
      "@type": "Organization",
      "name": "HVAC Exit Advisors",
      "url": "https://www.hvacexitadvisors.com",
      "description": "A specialized division supported by KMF Business Advisors, working with owners and qualified buyers of HVAC and related mechanical-service businesses in Florida.",
      "founder": {
        "@type": "Person",
        "name": "Sanjay Wadhwani",
        "jobTitle": "Business, Franchise and Commercial Real-Estate Broker"
      },
      "areaServed": "Florida"
    }
  };

  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
      />
      <div className="w-full bg-[#F7F5F0] min-h-screen">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
          <nav aria-label="Breadcrumb" className="text-sm font-semibold text-gray-500 mb-8 flex items-center space-x-2">
            <Link href="/" className="hover:text-[#EE5B2C] transition-colors">Home</Link>
            <span>/</span>
            <span className="text-[#022B3A]">About Us</span>
          </nav>

          {/* H1 */}
          <h1 className="text-4xl md:text-5xl font-black text-[#022B3A] mb-10 tracking-tight">
            About HVAC Exit Advisors
          </h1>

          {/* About the firm */}
          <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-xl shadow-gray-200/50 border border-gray-100 mb-10">
            <p className="text-lg text-gray-700 font-medium leading-relaxed mb-6">
              HVAC Exit Advisors is a specialized division supported by KMF Business Advisors. We work with owners and qualified buyers of HVAC and related mechanical-service businesses, with particular attention to Florida opportunities.
            </p>
            <p className="text-lg text-gray-700 font-medium leading-relaxed">
              Our role is to help owners understand the information buyers will require, prepare a confidential market presentation, screen prospective buyers and coordinate the transaction process. We believe owners should understand both the value and the terms of an offer before making a decision.
            </p>
          </div>

          {/* About Sanjay */}
          <div className="bg-[#022B3A] rounded-[2rem] p-8 md:p-12 shadow-xl text-white mb-10">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-full bg-[#EE5B2C]/20 flex items-center justify-center flex-shrink-0">
                <svg className="w-7 h-7 text-[#EE5B2C]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-black text-white">About Sanjay Wadhwani</h2>
                <p className="text-white/60 text-sm font-medium mt-1">Business, Franchise &amp; Commercial Real-Estate Broker · KMF Business Advisors</p>
              </div>
            </div>
            <p className="text-lg text-white/85 font-medium leading-relaxed mb-6">
              Sanjay L. Wadhwani is a business, franchise and commercial real-estate broker with KMF Business Advisors. His work includes business valuations, confidential marketing, buyer qualification, negotiations and transaction coordination. He works directly with owners, buyers and professional advisers throughout the sale process.
            </p>
            <p className="text-lg text-white/85 font-medium leading-relaxed">
              Sanjay&apos;s approach emphasizes confidentiality, financial qualification and clear transaction procedures. His established buyer and investor network supports targeted outreach while each prospective buyer remains subject to the requirements of the individual opportunity.
            </p>
          </div>

          {/* Developer Note */}
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 mb-10">
            <div className="flex items-start gap-3">
              <svg className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              <div>
                <p className="text-sm font-bold text-amber-800 mb-1">Biography Verification Note</p>
                <p className="text-sm text-amber-700 font-medium leading-relaxed">
                  Add license numbers, memberships, awards, transaction totals and years of experience only after the owner verifies each statement and provides the exact approved wording.
                </p>
              </div>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <Link
              href="/contact-us"
              className="px-8 py-4 bg-[#EE5B2C] hover:bg-orange-600 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all"
            >
              Schedule a Private Consultation
            </Link>
            <Link
              href="/free-confidential-valuation"
              className="px-8 py-4 bg-[#022B3A] hover:bg-[#033b50] text-white font-bold rounded-xl transition-colors"
            >
              Request a Confidential Valuation
            </Link>
          </div>

        </div>
      </div>
    </>
  );
}
