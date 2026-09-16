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
                "name": "Why are some listing details limited?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Confidential HVAC listings usually omit the company name, exact address, customer identities, employee information, and other details that could identify the seller. Additional information is released only after buyer screening."
                }
              },
              {
                "@type": "Question",
                "name": "How do I request financial information for a listing?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Complete the inquiry, sign the NDA, and provide proof of funds. Once qualified, you may receive the confidential information memorandum and approved financial information before a broker-hosted seller conference."
                }
              },
              {
                "@type": "Question",
                "name": "Does an asking price include working capital, inventory, vehicles, and real estate?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Not automatically. Included assets and required working capital vary by listing and must be confirmed in the confidential materials and purchase contract. Real estate may be included, leased, or offered separately."
                }
              },
              {
                "@type": "Question",
                "name": "Can I submit an offer without an escrow deposit?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "A serious purchase contract should include an escrow deposit appropriate to the transaction. The deposit demonstrates commitment and supports an orderly due-diligence process; its disposition is governed by the signed contract."
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
            Confidential HVAC and{' '}
            <span className="text-[#EE5B2C]">Mechanical-Service Opportunities</span>
          </h1>
          <p className="text-lg md:text-xl text-white/85 font-medium max-w-3xl mx-auto leading-relaxed mb-4">
            Review available opportunities and request additional information through the qualification process. To protect confidentiality, listing summaries may omit the company name, exact address and other identifying information.
          </p>
          <div className="mt-4 p-2 bg-black/50 text-xs text-left overflow-hidden hidden">DEBUG: {debug}</div>
        </div>
      </section>

      <ListingsContent listings={listings} />

      {/* Frequently Asked Questions */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-xl border border-gray-100">
          <h2 className="text-3xl font-black text-[#022B3A] mb-8">Frequently Asked Questions</h2>
          
          <h3 className="text-xl font-bold text-[#022B3A] mb-2">Why are some listing details limited?</h3>
          <p className="text-gray-700 font-medium mb-6">
            Confidential HVAC listings usually omit the company name, exact address, customer identities, employee information, and other details that could identify the seller. Additional information is released only after buyer screening.
          </p>

          <h3 className="text-xl font-bold text-[#022B3A] mb-2">How do I request financial information for a listing?</h3>
          <p className="text-gray-700 font-medium mb-6">
            Complete the inquiry, sign the NDA, and provide proof of funds. Once qualified, you may receive the confidential information memorandum and approved financial information before a broker-hosted seller conference.
          </p>

          <h3 className="text-xl font-bold text-[#022B3A] mb-2">Does an asking price include working capital, inventory, vehicles, and real estate?</h3>
          <p className="text-gray-700 font-medium mb-6">
            Not automatically. Included assets and required working capital vary by listing and must be confirmed in the confidential materials and purchase contract. Real estate may be included, leased, or offered separately.
          </p>

          <h3 className="text-xl font-bold text-[#022B3A] mb-2">Can I submit an offer without an escrow deposit?</h3>
          <p className="text-gray-700 font-medium mb-6">
            A serious purchase contract should include an escrow deposit appropriate to the transaction. The deposit demonstrates commitment and supports an orderly due-diligence process; its disposition is governed by the signed contract.
          </p>
        </div>
      </section>

      {/* Contact CTA Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-[#022B3A] rounded-2xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-white text-2xl font-black mb-2">Not finding the right opportunity?</h2>
            <p className="text-white/80 font-medium">Register confidentially to receive appropriate future opportunities after qualification.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
            <Link href="/contact-us" className="px-6 py-3 min-h-[44px] bg-[#EE5B2C] text-white font-bold rounded-lg hover:bg-orange-600 transition-all text-center whitespace-nowrap">
              Register as a Qualified Buyer →
            </Link>
            <Link href="/free-confidential-valuation" className="px-6 py-3 min-h-[44px] bg-white/10 text-white font-bold rounded-lg border border-white/20 hover:bg-white/20 transition-all text-center whitespace-nowrap">
              Request a Valuation
            </Link>
          </div>
        </div>
      </section>

      {/* Information Table + Disclaimer */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-xl border border-gray-100 mb-12">

          {/* Required Listing Fields Table */}
          <h2 className="text-3xl font-black text-[#022B3A] mb-6">Required Listing Fields</h2>
          <p className="text-lg text-gray-700 font-medium mb-8 leading-relaxed">
            Public listing summaries contain general information to allow initial evaluation. Confidential details are released only after the buyer completes the required qualification and confidentiality process.
          </p>
          <div className="overflow-x-auto mb-12">
            <table className="w-full text-left border-collapse min-w-[600px]">
              <thead>
                <tr>
                  <th className="py-4 px-6 bg-gray-50 text-[#022B3A] font-bold border-b border-gray-200 rounded-tl-xl">Public Listing Information</th>
                  <th className="py-4 px-6 bg-[#022B3A] text-white font-bold border-b border-[#022B3A] rounded-tr-xl">Confidential Information Released Later</th>
                </tr>
              </thead>
              <tbody className="text-gray-700 font-medium">
                {[
                  ['General Florida region', 'Business name and exact address'],
                  ['Residential and commercial mix', 'Detailed customer information'],
                  ['Service and installation mix', 'Employee names and individual compensation'],
                  ['Asking price, revenue and SDE or EBITDA when approved', 'Full financial statements and tax returns'],
                  ['General reason for sale', 'Licenses, contracts and detailed operating records'],
                  ['Financing indication', 'Seller identity and direct contact information'],
                ].map(([pub, conf], i) => (
                  <tr key={i}>
                    <td className="py-4 px-6 border-b border-gray-100 align-top">
                      <div className="flex items-start gap-3">
                        <svg className="w-4 h-4 text-[#022B3A] flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                        {pub}
                      </div>
                    </td>
                    <td className="py-4 px-6 border-b border-gray-100 align-top bg-[#022B3A]/5">
                      <div className="flex items-start gap-3 text-[#022B3A]">
                        <svg className="w-4 h-4 text-[#EE5B2C] flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                        <span className="font-semibold">{conf}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Listing Disclaimer */}
          <div className="bg-[#022B3A] rounded-2xl p-6 md:p-8 text-white">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-[#EE5B2C]/20 flex items-center justify-center">
                <svg className="w-5 h-5 text-[#EE5B2C]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2">Listing Disclaimer</h3>
                <p className="text-white/85 font-medium leading-relaxed">
                  Information is provided by the seller and is subject to buyer verification. Availability, price, financing and transaction terms may change. Prospective buyers must complete the required confidentiality and qualification process before receiving protected information.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

    </main>
    </>
  );
}

