import { Metadata } from 'next';
import Link from 'next/link';
import BreadcrumbSchema from '@/views/components/BreadcrumbSchema';

export const metadata: Metadata = {
  title: 'Case Study: First-Time Buyer Tampa HVAC Acquisition',
  description: 'Read how HVAC Exit Advisors helped an executive secure SBA financing to successfully acquire a $3M residential HVAC business in Tampa, FL. View case study!',
  alternates: {
    canonical: 'https://www.hvacexitadvisors.com/success-stories/first-time-buyer-tampa',
  },
  openGraph: {
    title: 'Case Study: First-Time Buyer Tampa HVAC Acquisition | HVAC Exit Advisors',
    description: 'Read how HVAC Exit Advisors helped an executive secure SBA financing to acquire a $3M residential HVAC business in Tampa, FL.',
    url: 'https://www.hvacexitadvisors.com/success-stories/first-time-buyer-tampa',
    type: 'article',
  },
};

export default function FirstTimeBuyerTampaPage() {
  const breadcrumbs = [
    { name: 'Home', item: 'https://www.hvacexitadvisors.com/' },
    { name: 'Success Stories', item: 'https://www.hvacexitadvisors.com/success-stories' },
    { name: 'Tampa Acquisition', item: 'https://www.hvacexitadvisors.com/success-stories/first-time-buyer-tampa' }
  ];

  const caseStudySchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Transitioning from Corporate Executive to HVAC Business Owner in Tampa",
    "description": "Case study on how HVAC Exit Advisors guided an executive to acquire a $3.1M residential HVAC contractor in Tampa, FL with SBA financing.",
    "author": {
      "@type": "Organization",
      "name": "HVAC Exit Advisors",
      "url": "https://www.hvacexitadvisors.com"
    },
    "publisher": {
      "@type": "Organization",
      "name": "HVAC Exit Advisors",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.hvacexitadvisors.com/icon.png"
      }
    },
    "datePublished": "2024-02-18",
    "dateModified": "2026-09-08",
    "mainEntityOfPage": "https://www.hvacexitadvisors.com/success-stories/first-time-buyer-tampa"
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
            <span className="text-[#022B3A] truncate">Tampa Acquisition</span>
          </nav>

          <header className="mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-[#EE5B2C] bg-orange-100 px-3 py-1 rounded-full inline-block mb-4">
              Case Study &bull; Tampa Bay, FL
            </span>
            <h1 className="text-3xl md:text-5xl font-black text-[#022B3A] tracking-tight leading-tight mb-6">
              Transitioning from Corporate Executive to HVAC Business Owner
            </h1>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-medium">
              How our confidential matchmaking and SBA loan structuring enabled a first-time buyer to acquire a $3.1M residential service contractor in Hillsborough County.
            </p>
          </header>

          <article className="prose prose-lg max-w-none text-gray-800 bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100 space-y-6">
            <div className="grid sm:grid-cols-3 gap-4 not-prose bg-gray-50 p-6 rounded-xl border border-gray-200 mb-8">
              <div>
                <span className="block text-xs font-bold text-gray-400 uppercase">Annual Revenue</span>
                <span className="text-2xl font-black text-[#022B3A]">$3,150,000</span>
              </div>
              <div>
                <span className="block text-xs font-bold text-gray-400 uppercase">Normalized SDE</span>
                <span className="text-2xl font-black text-[#EE5B2C]">$685,000</span>
              </div>
              <div>
                <span className="block text-xs font-bold text-gray-400 uppercase">Financing Structure</span>
                <span className="text-2xl font-black text-[#022B3A]">SBA 7(a) Loan</span>
              </div>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-[#022B3A] border-b pb-3">The Opportunity</h2>
            <p>
              The seller was a 63-year-old founder who had built a sterling reputation over 28 years in the Tampa Bay area. With 850 active residential maintenance agreements and an 8-van fleet, the business generated consistent, recurring cash flow. However, the owner lacked a natural family successor and sought complete retirement.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-[#022B3A] border-b pb-3">The Challenge</h2>
            <p>
              The qualified buyer possessed extensive executive operations experience from a corporate logistics background, but had never owned an HVAC company or held a Florida State Certified Class A/B Air Conditioning Contractor License.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-[#022B3A] border-b pb-3">The Advisory Solution</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Qualifier Transition Agreement:</strong> We structured a 12-month qualifying agent agreement with the seller's long-time lead master technician to ensure full compliance with the Florida Department of Business and Professional Regulation (DBPR).</li>
              <li><strong>SBA 7(a) Packaging:</strong> Our financial analysts recast 3 years of tax returns, validating $685K in normalized SDE, which secured 85% bank financing with just 10% equity injection from the buyer.</li>
              <li><strong>Staff Retention Assurance:</strong> Conducted blinded diligence interviews and retention bonus structures that kept all 11 technicians and office staff in place post-close.</li>
            </ul>

            <div className="bg-[#022B3A] text-white p-8 rounded-xl my-8">
              <h3 className="text-xl font-bold text-white mb-2">Ready to Acquire an HVAC Business in Florida?</h3>
              <p className="text-white/90 mb-6">
                Join our vetted buyer network to receive confidential acquisition opportunities before they hit public marketplaces.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/buy-an-hvac-business"
                  className="px-6 py-3 bg-[#EE5B2C] hover:bg-orange-600 text-white font-bold rounded-lg transition-colors"
                >
                  Join Buyer Network &rarr;
                </Link>
                <Link
                  href="/contact-us"
                  className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold rounded-lg transition-colors"
                >
                  Contact Our Brokers
                </Link>
              </div>
            </div>
          </article>
        </div>
      </main>
    </>
  );
}
