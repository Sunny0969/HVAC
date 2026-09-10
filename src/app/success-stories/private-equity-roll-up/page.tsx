import { Metadata } from 'next';
import Link from 'next/link';
import BreadcrumbSchema from '@/views/components/BreadcrumbSchema';

export const metadata: Metadata = {
  title: 'Case Study: Private Equity Commercial HVAC Roll-Up',
  description: 'Discover how HVAC Exit Advisors represented a $5.2M commercial mechanical contractor in Orlando in a confidential sale to a private equity platform. Read more!',
  alternates: {
    canonical: 'https://www.hvacexitadvisors.com/success-stories/private-equity-roll-up',
  },
  openGraph: {
    title: 'Case Study: Private Equity Commercial HVAC Roll-Up | HVAC Exit Advisors',
    description: 'Discover how HVAC Exit Advisors represented a $5.2M commercial mechanical contractor in Orlando in a confidential sale to a private equity platform.',
    url: 'https://www.hvacexitadvisors.com/success-stories/private-equity-roll-up',
    type: 'article',
  },
};

export default function PrivateEquityRollUpPage() {
  const breadcrumbs = [
    { name: 'Home', item: 'https://www.hvacexitadvisors.com/' },
    { name: 'Success Stories', item: 'https://www.hvacexitadvisors.com/success-stories' },
    { name: 'Commercial Roll-Up', item: 'https://www.hvacexitadvisors.com/success-stories/private-equity-roll-up' }
  ];

  const caseStudySchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Expanding Regional Footprint: $5.2M Commercial HVAC Acquisition in Orlando", 
    "image": ["https://www.hvacexitadvisors.com/florida-hvac-business-broker-home.jpg"],
    "description": "Case study analyzing the private equity backed strategic roll-up of a commercial mechanical and chiller service provider in Central Florida.",
    "author": { "@type": "Person", "name": "Sanjay Wadhwani", "jobTitle": "Owner & Principal Advisor", "url": "https://www.hvacexitadvisors.com/about-us/team" },
    "publisher": {
      "@type": "Organization",
      "name": "HVAC Exit Advisors",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.hvacexitadvisors.com/icon.png"
      }
    },
    "datePublished": "2024-03-02",
    "dateModified": "2026-09-08",
    "mainEntityOfPage": "https://www.hvacexitadvisors.com/success-stories/private-equity-roll-up"
  };

  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(caseStudySchema) }}
      />
      <main className="w-full bg-[#F7F5F0] min-h-screen py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
          <nav aria-label="Breadcrumb" className="text-sm font-semibold text-gray-500 mb-6 flex items-center space-x-2">
            <Link href="/" className="hover:text-[#EE5B2C] transition-colors">Home</Link>
            <span>/</span>
            <Link href="/success-stories" className="hover:text-[#EE5B2C] transition-colors">Success Stories</Link>
            <span>/</span>
            <span className="text-[#022B3A] truncate">Commercial Roll-Up</span>
          </nav>

          <header className="mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-[#EE5B2C] bg-orange-100 px-3 py-1 rounded-full inline-block mb-4">
              Strategic M&A &bull; Orlando, FL
            </span>
            <h1 className="text-3xl md:text-5xl font-black text-[#022B3A] tracking-tight leading-tight mb-6">
              Expanding Regional Footprint: $5.2M Commercial HVAC Acquisition
            </h1>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-medium">
              How our team navigated multi-party due diligence, commercial contract assignments, and institutional bidding to achieve an above-market EBITDA multiple for an Orlando contractor.
            </p>
          </header>

          <article className="prose prose-lg max-w-none text-gray-800 bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100 space-y-6">
            <div className="grid sm:grid-cols-3 gap-4 not-prose bg-gray-50 p-6 rounded-xl border border-gray-200 mb-8">
              <div>
                <span className="block text-xs font-bold text-gray-400 uppercase">Annual Revenue</span>
                <span className="text-2xl font-black text-[#022B3A]">$5,200,000</span>
              </div>
              <div>
                <span className="block text-xs font-bold text-gray-400 uppercase">Adjusted EBITDA</span>
                <span className="text-2xl font-black text-[#EE5B2C]">$1,120,000</span>
              </div>
              <div>
                <span className="block text-xs font-bold text-gray-400 uppercase">Buyer Type</span>
                <span className="text-2xl font-black text-[#022B3A]">Private Equity Platform</span>
              </div>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-[#022B3A] border-b pb-3">The Target Company</h2>
            <p>
              Based in Central Florida, the business specialized in commercial HVAC maintenance, chiller servicing, and building automation systems for municipal buildings, hospitality venues, and medical facilities. Over 70% of revenue came from multi-year preventive service contracts.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-[#022B3A] border-b pb-3">The Negotiation Process</h2>
            <p>
              Rather than listing on public marketplaces, we created a confidential Blind Information Memorandum (BIM) and initiated a competitive bidding process among four pre-qualified institutional buyers actively rolling up mechanical contractors across the Southeast.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-[#022B3A] border-b pb-3">The Outcome</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Competitive Multiple:</strong> Secured a 5.4x EBITDA valuation, yielding $6,050,000 in total enterprise value.</li>
              <li><strong>Equity Rollover Option:</strong> Structured an 80% cash payout at closing with a 20% equity rollover, allowing the founder to participate in the private equity sponsor's eventual second-bite exit.</li>
              <li><strong>Zero Customer Leakage:</strong> Seamlessly transferred 42 institutional contracts with 100% client retention through customized assignment protocols.</li>
            </ul>

            <div className="bg-[#022B3A] text-white p-8 rounded-xl my-8">
              <h3 className="text-xl font-bold text-white mb-2">Thinking of Selling Your HVAC Business?</h3>
              <p className="text-white/90 mb-6">
                Discover the institutional buyers actively seeking acquisitions in your Florida county today.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/free-valuation"
                  className="px-6 py-3 bg-[#EE5B2C] hover:bg-orange-600 text-white font-bold rounded-lg transition-colors"
                >
                  Request Confidential Valuation &rarr;
                </Link>
                <Link
                  href="/why-sell-with-us"
                  className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold rounded-lg transition-colors"
                >
                  Our Brokerage Process
                </Link>
              </div>
            </div>
          </article>
        </div>
      </main>
    </>
  );
}


