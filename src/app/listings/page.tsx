import { Metadata } from 'next';
import Link from 'next/link';
import BreadcrumbSchema from '../../views/components/BreadcrumbSchema';

export const metadata: Metadata = {
  title: 'Florida HVAC Companies For Sale',
  description: 'Browse our exclusive, vetted listings of highly profitable Florida HVAC companies currently for sale. Find the perfect business acquisition. View listings!',
  alternates: {
    canonical: 'https://www.hvacexitadvisors.com/listings',
  },
  openGraph: {
    title: 'Florida HVAC Companies For Sale | HVAC Exit Advisors',
    description: 'Browse our exclusive, vetted listings of highly profitable Florida HVAC companies currently for sale. Find the perfect business acquisition.',
    url: 'https://www.hvacexitadvisors.com/listings',
  },
};

const activeListings = [
  {
    slug: "coastal-mechanical",
    title: "Commercial Mechanical & Chillers Contractor",
    location: "Miami-Dade County, FL",
    revenue: "$8,200,000",
    cashFlow: "$1,500,000",
    description: "Highly profitable commercial HVAC contractor dominating high-rise and hospitality service contracts. 24 service vehicles, fully staffed management team."
  },
  {
    slug: "sunshine-cooling",
    title: "Residential Service & Replacement Powerhouse",
    location: "Orlando Metro Area, FL",
    revenue: "$3,100,000",
    cashFlow: "$650,000",
    description: "Established residential operator with over 2,500 active Planned Maintenance Agreements (PMAs). High margin changeout business with seasoned technicians."
  },
  {
    slug: "gulf-coast-refrigeration",
    title: "Niche Commercial Refrigeration & HVAC",
    location: "Tampa Bay Region, FL",
    revenue: "$4,500,000",
    cashFlow: "$900,000",
    description: "Specialized B2B refrigeration, cold storage, and mechanical servicing for institutional and restaurant chains. High barrier to entry."
  },
  {
    slug: "panhandle-hvac",
    title: "Premier Coastal HVAC Service Contractor",
    location: "Pensacola / Emerald Coast, FL",
    revenue: "$2,200,000",
    cashFlow: "$400,000",
    description: "Clean financial records, strong community reputation, and modern fleet. Excellent opportunity for first-time buyer or bolt-on acquisition."
  }
];

export default function ListingsPage() {
  const breadcrumbs = [
    { name: 'Home', item: 'https://www.hvacexitadvisors.com/' },
    { name: 'Listings', item: 'https://www.hvacexitadvisors.com/listings' }
  ];

  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 mt-12">
        <nav aria-label="Breadcrumb" className="text-sm font-semibold text-gray-500 mb-6 flex items-center space-x-2">
          <Link href="/" className="hover:text-[#EE5B2C] transition-colors">Home</Link>
          <span>/</span>
          <span className="text-[#022B3A]">Listings</span>
        </nav>

        <h1 className="text-4xl md:text-5xl font-black text-primary mb-4 tracking-tight">
          Florida HVAC Companies For Sale
        </h1>
        <h2 className="text-2xl font-semibold text-secondary mb-8">
          Explore Vetted, Confidentially Marketed Mechanical Acquisitions
        </h2>

        <p className="text-lg leading-relaxed text-gray-700 max-w-4xl mb-12">
          Browse our current portfolio of vetted <strong>Florida HVAC companies for sale</strong>. At HVAC Exit Advisors, we exclusively represent verified businesses with clean financials, documented maintenance agreements, and solid operational infrastructures.
        </p>

        {/* Listings Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {activeListings.map((listing) => (
            <div 
              key={listing.slug}
              className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg hover:border-orange-200 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-start mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#EE5B2C] bg-orange-50 px-3 py-1 rounded-full">
                    {listing.location}
                  </span>
                  <span className="text-xs font-semibold text-gray-400">Confidential</span>
                </div>
                
                <h3 className="text-xl font-bold text-[#022B3A] mb-3">
                  {listing.title}
                </h3>
                
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {listing.description}
                </p>

                <div className="grid grid-cols-2 gap-4 bg-[#F7F5F0] p-4 rounded-xl mb-6">
                  <div>
                    <span className="block text-xs font-bold text-gray-400 uppercase">Gross Revenue</span>
                    <span className="text-lg font-black text-[#022B3A]">{listing.revenue}</span>
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-gray-400 uppercase">Cash Flow / SDE</span>
                    <span className="text-lg font-black text-[#EE5B2C]">{listing.cashFlow}</span>
                  </div>
                </div>
              </div>

              <Link
                href={`/listings/${listing.slug}`}
                className="w-full text-center py-3 px-4 bg-[#022B3A] hover:bg-[#EE5B2C] text-white font-bold rounded-xl transition-colors text-sm"
              >
                View Acquisition Details &rarr;
              </Link>
            </div>
          ))}
        </div>

        <div className="prose max-w-none text-black mt-8">
          <h3 className="text-2xl font-bold mt-8 mb-4">Why Buy an HVAC Business in Florida?</h3>
          <p className="mb-4 text-gray-700">
            The Florida climate makes air conditioning an absolute necessity, not a luxury. This drives year-round demand for service, maintenance, and system replacements. Investing in a Florida HVAC company means acquiring a business in one of the most robust, recession-resistant industries in the nation.
          </p>

          <ul className="list-disc pl-6 mb-8 space-y-2 text-gray-700">
            <li><strong>Consistent Recurring Revenue:</strong> Many of our listings feature extensive maintenance agreement (PMA) bases, providing predictable cash flow from day one.</li>
            <li><strong>Strong Demographic Tailwinds:</strong> Florida continues to see massive population growth, driving continuous demand for residential and commercial HVAC services.</li>
            <li><strong>Essential Services:</strong> HVAC contractors provide non-discretionary services that remain stable even during broader economic downturns.</li>
            <li><strong>High Barrier to Entry:</strong> Acquiring an established business with licensed technicians, a trusted brand, and an existing customer base is far less risky than starting from scratch.</li>
          </ul>

          <div className="bg-gray-100 p-8 rounded-2xl border-l-4 border-[#EE5B2C] not-prose mt-12">
            <h4 className="text-xl font-bold text-[#022B3A] mb-2">Can't Find What You Are Looking For?</h4>
            <p className="text-gray-700 mb-4 leading-relaxed">
              If you have specific acquisition criteria—such as a specific Florida county, a minimum revenue threshold, or a preference for commercial vs. residential work—we maintain a private registry of off-market pocket listings.
            </p>
            <Link href="/contact-us" className="inline-block px-6 py-3 bg-[#EE5B2C] hover:bg-orange-600 text-white font-bold rounded-lg transition-colors text-sm">
              Contact Our Acquisition Team &rarr;
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
