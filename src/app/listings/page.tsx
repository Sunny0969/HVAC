import { Metadata } from 'next';
import Link from 'next/link';
import ListingsContent from '@/views/components/ListingsContent';
import BreadcrumbSchema from '@/views/components/BreadcrumbSchema';

export const metadata: Metadata = {
  title: 'HVAC Businesses for Sale | Listings | HVAC Exit Advisors',
  description: 'Browse our exclusive catalog of HVAC businesses for sale. Filter by location, revenue, and cash flow to find your next acquisition.',
  alternates: {
    canonical: 'https://www.hvacexitadvisors.com/listings',
  },
  openGraph: {
    title: 'HVAC Businesses for Sale | Listings | HVAC Exit Advisors',
    description: 'Browse our exclusive catalog of HVAC businesses for sale. Filter by location, revenue, and cash flow to find your next acquisition.',
    url: 'https://www.hvacexitadvisors.com/listings',
    type: 'website',
    images: [
      {
        url: '/images/og-listings.jpg',
        width: 1200,
        height: 630,
        alt: 'HVAC businesses for sale listings',
      },
    ],
  },
};

let _rootUrl = (process.env.NEXT_PUBLIC_CMS_API_URL || "http://127.0.0.1:4000").trim();
_rootUrl = _rootUrl.replace(/\/api\/public\/?$/, '').replace(/\/api\/?$/, '').replace(/\/$/, '');
const API_URL = `${_rootUrl}/api/public`;

export const revalidate = 0; // Disable static caching completely

export default async function ListingsPage() {
  let listings: any[] = [];
  let debug = '';
  try {
    const fetchUrl = `${API_URL}/listings`;
    debug += `Fetching: ${fetchUrl} | `;
    const res = await fetch(fetchUrl, { next: { revalidate: 60 } });
    debug += `Status: ${res.status} ${res.statusText} | `;
    if (res.ok) {
      const data = await res.json();
      listings = data.listings || [];
      debug += `Data length: ${listings.length}`;
    } else {
      debug += `Res not ok.`;
    }
  } catch (error: any) {
    debug += `Error: ${error?.message || String(error)}`;
    console.error("Failed to fetch listings", error);
  }

  const breadcrumbs = [
    { name: 'Home', item: 'https://www.hvacexitadvisors.com/' },
    { name: 'HVAC Listings', item: 'https://www.hvacexitadvisors.com/listings' }
  ];

  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "HVAC Businesses for Sale",
            "description": "Premium HVAC and mechanical contractor businesses for sale in Florida.",
            "url": "https://www.hvacexitadvisors.com/listings",
            "datePublished": "2026-09-01T08:00:00+08:00",
            "dateModified": "2026-09-13T08:00:00+08:00",
            "publisher": {
              "@type": "Organization",
              "name": "HVAC Exit Advisors",
              "logo": {
                "@type": "ImageObject",
                "url": "https://www.hvacexitadvisors.com/icon.png"
              }
            }
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What should I look for in HVAC businesses for sale?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Look for high recurring revenue from maintenance agreements, a strong technician team, clean financial records (SDE), and a reliable service area."
                }
              },
              {
                "@type": "Question",
                "name": "How much does it cost to buy an HVAC company in Florida?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "HVAC companies are typically valued at 2.5x to 4x their Seller's Discretionary Earnings (SDE). A company earning $300k SDE might sell for $750k to $1.2M."
                }
              }
            ]
          })
        }}
      />

    <main className="min-h-screen flex flex-col bg-[#F7F5F0]">
      {/* Short Hero */}
      <section className="bg-[#022B3A] text-white py-16 md:py-24 px-4 sm:px-6 lg:px-8 text-center mt-16 md:mt-0">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-black mb-6">
            HVAC Businesses <span className="text-[#EE5B2C]">for Sale</span>
          </h1>
          
          {/* Executive Summary & Audience Clarity (GEO/AEO Fix) */}
          <div className="bg-white/10 p-6 md:p-8 rounded-2xl text-left border border-white/20 mb-6 backdrop-blur-sm">
            <h2 className="text-xl font-bold text-[#EE5B2C] mb-2">Executive Summary & Who This Is For</h2>
            <p className="text-white font-medium mb-3">
              <strong>Target Audience:</strong> First-time buyers, strategic acquirers, and private equity firms looking to acquire vetted, cash-flowing HVAC businesses in Florida.
            </p>
            <p className="text-white font-medium mb-3">
              <strong>Key Takeaway:</strong> Purchasing an established HVAC business provides immediate cash flow, trained technicians, and recurring revenue. Browse our active listings below and work with our specialized brokers to evaluate, finance, and close your ideal acquisition securely.
            </p>
            <p className="text-xs text-white/60 mt-4">Last Updated: September 13, 2026</p>
          </div>

          <p className="text-lg md:text-xl text-white/80 font-medium">
            Explore premium mechanical contractors and HVAC service businesses available for acquisition.
          </p>
          <div className="mt-4 p-2 bg-black/50 text-xs text-left overflow-hidden hidden">DEBUG: {debug}</div>
        </div>
      </section>

      <ListingsContent listings={listings} />

      {/* Contact CTA Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-[#022B3A] rounded-2xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-white text-2xl font-black mb-2">Not finding the right business?</h2>
            <p className="text-white/80 font-medium">Tell us your criteria and we'll match you from our private off-market inventory.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
            <Link href="/contact-us" className="px-6 py-3 min-h-[44px] bg-[#EE5B2C] text-white font-bold rounded-lg hover:bg-orange-600 transition-all text-center whitespace-nowrap">
              Talk to a Broker →
            </Link>
            <Link href="/resources" className="px-6 py-3 min-h-[44px] bg-white/10 text-white font-bold rounded-lg border border-white/20 hover:bg-white/20 transition-all text-center whitespace-nowrap">
              Browse Resources
            </Link>
          </div>
        </div>
      </section>
      {/* SEO & Content Depth Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-xl border border-gray-100 mb-12">
          
          <h2 className="text-3xl font-black text-[#022B3A] mb-6">What to look for in HVAC businesses for sale?</h2>
          <p className="text-lg text-gray-700 mb-6 font-medium">
            <strong>Short Answer: Prioritize businesses with recurring maintenance revenue, clean financial records, and a stable technician team.</strong>
          </p>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            When you browse HVAC businesses for sale, the most critical factor is the quality of revenue. A business heavily reliant on new construction contracts is vulnerable to economic shifts, whereas a company with hundreds of residential maintenance agreements offers predictable, recession-resistant cash flow. We recommend consulting with the <a href="https://www.ibba.org/" target="_blank" rel="noopener noreferrer" className="text-[#EE5B2C] hover:underline font-bold">International Business Brokers Association (IBBA)</a> standards for business valuation to understand fair market multiples.
          </p>
          
          <h2 className="text-2xl font-bold text-[#022B3A] mt-10 mb-6">How to Evaluate an HVAC Listing</h2>
          <p className="text-lg text-gray-700 mb-6">
            Follow this 4-step checklist when reviewing the listings above:
          </p>
          <ul className="list-decimal pl-6 space-y-4 text-lg text-gray-700 mb-10 font-medium">
            <li><strong>Verify the SDE:</strong> Ensure the Seller's Discretionary Earnings (SDE) are accurately calculated with legitimate add-backs.</li>
            <li><strong>Analyze Revenue Mix:</strong> Aim for at least 30-40% of revenue coming from service and maintenance rather than pure installs.</li>
            <li><strong>Check Team Tenure:</strong> A business is only as good as its technicians. Review average employee tenure and licensing structures.</li>
            <li><strong>Review the Fleet:</strong> Are the service vans owned outright or leased? What is their mileage and condition?</li>
          </ul>

          <h2 className="text-2xl font-bold text-[#022B3A] mb-6">Commercial vs. Residential HVAC Acquisitions</h2>
          <div className="overflow-x-auto mb-10">
            <table className="w-full text-left border-collapse min-w-[600px]">
              <thead>
                <tr>
                  <th className="py-4 px-6 bg-gray-50 text-[#022B3A] font-bold border-b border-gray-200">Business Type</th>
                  <th className="py-4 px-6 bg-gray-50 text-gray-600 font-bold border-b border-gray-200">Pros</th>
                  <th className="py-4 px-6 bg-gray-50 text-gray-600 font-bold border-b border-gray-200">Cons</th>
                </tr>
              </thead>
              <tbody className="text-gray-700 font-medium">
                <tr>
                  <td className="py-4 px-6 border-b border-gray-100"><strong>Residential HVAC</strong></td>
                  <td className="py-4 px-6 border-b border-gray-100">High volume of recurring maintenance, recession-resistant.</td>
                  <td className="py-4 px-6 border-b border-gray-100">Requires larger marketing budgets to acquire retail customers.</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 border-b border-gray-100"><strong>Commercial HVAC</strong></td>
                  <td className="py-4 px-6 border-b border-gray-100">Large contract sizes, B2B relationships, high barrier to entry.</td>
                  <td className="py-4 px-6 border-b border-gray-100">Longer sales cycles, payment terms can strain cash flow (Net 30/60).</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold text-[#022B3A] mb-6">How much does it cost to buy an HVAC company in Florida?</h2>
          <p className="text-lg text-gray-700 mb-6 font-medium">
            <strong>Short Answer: Expect to pay 2.5x to 4x the business's SDE (Seller's Discretionary Earnings).</strong>
          </p>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            Valuations vary based on recurring revenue, fleet quality, and management structure. A highly systematized business with a general manager in place will command a premium multiple closer to 4x. To learn more about the acquisition process and how we assist buyers, read our comprehensive guide on <Link href="/buy-an-hvac-business" className="text-[#EE5B2C] hover:underline font-bold">how to buy an HVAC business</Link> or discover <Link href="/how-it-works" className="text-[#EE5B2C] hover:underline font-bold">how our brokerage process works</Link>. You can also explore our <Link href="/resources" className="text-[#EE5B2C] hover:underline font-bold">HVAC industry resources</Link> for deeper market insights.
          </p>

        </div>
      </section>

    </main>
    </>
  );
}
