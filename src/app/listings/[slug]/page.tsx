import { Metadata } from 'next';
import Link from 'next/link';
import BreadcrumbSchema from '@/views/components/BreadcrumbSchema';

type Props = {
  params: Promise<{ slug: string }>;
};

const listingsData: Record<string, {
  title: string;
  location: string;
  revenue: string;
  cashFlow: string;
  askingPrice: string;
  fleetCount: string;
  employees: string;
  pmaCount: string;
  overview: string;
}> = {
  "coastal-mechanical": {
    title: "Commercial Mechanical & Chillers Contractor",
    location: "Miami-Dade County, FL",
    revenue: "$8,200,000",
    cashFlow: "$1,500,000 (Adjusted EBITDA)",
    askingPrice: "Inquire for Guidance",
    fleetCount: "24 Service Vans & Box Trucks",
    employees: "38 Full-Time Technicians & Staff",
    pmaCount: "140+ Commercial Master Service Agreements",
    overview: "Dominant South Florida commercial contractor providing chiller maintenance, rooftop unit retrofits, and building management automation for premier commercial and hospitality properties."
  },
  "sunshine-cooling": {
    title: "Residential Service & Replacement Powerhouse",
    location: "Orlando Metro Area, FL",
    revenue: "$3,100,000",
    cashFlow: "$650,000 (Normalized SDE)",
    askingPrice: "$2,400,000",
    fleetCount: "12 Branded Late-Model Vans",
    employees: "16 Full-Time Technicians & Staff",
    pmaCount: "2,500+ Active Recurring PMAs",
    overview: "High-margin Central Florida residential service company with exceptional brand recognition, automated dispatch workflows, and heavy recurring agreement cash flow."
  },
  "gulf-coast-refrigeration": {
    title: "Niche Commercial Refrigeration & HVAC",
    location: "Tampa Bay Region, FL",
    revenue: "$4,500,000",
    cashFlow: "$900,000 (Adjusted EBITDA)",
    askingPrice: "$3,600,000",
    fleetCount: "18 Service Vehicles",
    employees: "22 Experienced Technicians",
    pmaCount: "320+ Commercial Preventative Accounts",
    overview: "Specialized cold chain and supermarket refrigeration contractor serving West Central Florida with mission-critical 24/7 contracted service agreements."
  },
  "panhandle-hvac": {
    title: "Premier Coastal HVAC Service Contractor",
    location: "Pensacola / Emerald Coast, FL",
    revenue: "$2,200,000",
    cashFlow: "$400,000 (Normalized SDE)",
    askingPrice: "$1,450,000",
    fleetCount: "7 Service Trucks",
    employees: "9 Full-Time Employees",
    pmaCount: "950+ Residential Maintenance Agreements",
    overview: "Turnkey North Florida mechanical business with pristine books and records, steady tourism-driven rental property maintenance contracts, and seasoned lead technicians."
  }
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  const listing = listingsData[slug];
  const title = listing ? listing.title : slug.charAt(0).toUpperCase() + slug.slice(1).replace(/-/g, ' ');

  return {
    title: `${title} | Florida HVAC For Sale`,
    description: `Confidential listing for ${title} in Florida. Verified financials, revenue, and cash flow. Request NDA and confidential profile now!`,
    alternates: {
      canonical: `https://www.hvacexitadvisors.com/listings/${slug}`,
    },
    openGraph: {
      title: `${title} | Florida HVAC For Sale | HVAC Exit Advisors`,
      description: `Confidential listing for ${title} in Florida. Verified financials and cash flow metrics.`,
      url: `https://www.hvacexitadvisors.com/listings/${slug}`,
    },
  };
}

export default async function Page({ params }: Props) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  const listing = listingsData[slug] || {
    title: slug.charAt(0).toUpperCase() + slug.slice(1).replace(/-/g, ' ') + " HVAC Business",
    location: "Florida (Confidential)",
    revenue: "Available upon NDA",
    cashFlow: "Available upon NDA",
    askingPrice: "Inquire with Broker",
    fleetCount: "Full fleet included",
    employees: "Tenured team in place",
    pmaCount: "Active recurring agreement base",
    overview: "A profitable Florida heating and air conditioning business with established accounts and strong regional market positioning."
  };

  const breadcrumbs = [
    { name: 'Home', item: 'https://www.hvacexitadvisors.com/' },
    { name: 'Listings', item: 'https://www.hvacexitadvisors.com/listings' },
    { name: listing.title, item: `https://www.hvacexitadvisors.com/listings/${slug}` }
  ];

  const numericPrice = parseInt(listing.askingPrice.replace(/[^0-9]/g, ''), 10);

  const listingSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": `${listing.title} - ${listing.location}`,
    "description": listing.overview,
    "category": "Business for Sale",
    "brand": {
      "@type": "Brand",
      "name": "HVAC Exit Advisors"
    },
    "offers": {
      "@type": "Offer",
      "url": `https://www.hvacexitadvisors.com/listings/${slug}`,
      "priceCurrency": "USD",
      ...(numericPrice > 0 ? { "price": numericPrice } : { "price": 0, "description": "Price upon confidential inquiry" }),
      "availability": "https://schema.org/InStock",
      "seller": {
        "@type": "Organization",
        "name": "HVAC Exit Advisors",
        "telephone": "+1-954-864-9161",
        "url": "https://www.hvacexitadvisors.com"
      }
    }
  };

  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(listingSchema) }}
      />
      <main className="w-full bg-[#F7F5F0] min-h-screen py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
          <nav aria-label="Breadcrumb" className="text-sm font-semibold text-gray-500 mb-6 flex items-center space-x-2">
            <Link href="/" className="hover:text-[#EE5B2C] transition-colors">Home</Link>
            <span>/</span>
            <Link href="/listings" className="hover:text-[#EE5B2C] transition-colors">Listings</Link>
            <span>/</span>
            <span className="text-[#022B3A] truncate">{listing.title}</span>
          </nav>

          <header className="mb-10">
            <div className="flex flex-wrap gap-2 mb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#EE5B2C] bg-orange-100 px-3 py-1 rounded-full">
                {listing.location}
              </span>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full">
                Active Opportunity
              </span>
            </div>
            <h1 className="text-3xl md:text-5xl font-black text-[#022B3A] tracking-tight leading-tight mb-4">
              {listing.title}
            </h1>
            <p className="text-lg text-gray-700 leading-relaxed font-medium">
              Confidential acquisition profile represented exclusively by HVAC Exit Advisors.
            </p>
          </header>

          {/* Key Metrics Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <span className="block text-xs font-bold text-gray-400 uppercase mb-1">Annual Revenue</span>
              <span className="text-2xl font-black text-[#022B3A]">{listing.revenue}</span>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <span className="block text-xs font-bold text-gray-400 uppercase mb-1">Cash Flow / SDE</span>
              <span className="text-2xl font-black text-[#EE5B2C]">{listing.cashFlow}</span>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <span className="block text-xs font-bold text-gray-400 uppercase mb-1">Asking Guidance</span>
              <span className="text-2xl font-black text-[#022B3A]">{listing.askingPrice}</span>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <span className="block text-xs font-bold text-gray-400 uppercase mb-1">Agreement Base</span>
              <span className="text-2xl font-black text-emerald-600">{listing.pmaCount}</span>
            </div>
          </div>

          <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100 space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-[#022B3A] mb-4">Business Overview</h2>
              <p className="text-gray-700 leading-relaxed text-base">
                {listing.overview}
              </p>
            </div>

            <div className="border-t border-gray-100 pt-6">
              <h3 className="text-xl font-bold text-[#022B3A] mb-4">Operational Highlights</h3>
              <div className="grid sm:grid-cols-2 gap-4 text-sm text-gray-700">
                <div className="p-4 bg-gray-50 rounded-xl">
                  <strong>Fleet & Equipment:</strong> {listing.fleetCount}
                </div>
                <div className="p-4 bg-gray-50 rounded-xl">
                  <strong>Workforce:</strong> {listing.employees}
                </div>
                <div className="p-4 bg-gray-50 rounded-xl">
                  <strong>Licensing:</strong> Qualifier transition support available for non-licensed buyers.
                </div>
                <div className="p-4 bg-gray-50 rounded-xl">
                  <strong>Financing:</strong> Pre-qualified for SBA 7(a) acquisition financing with vetted lenders.
                </div>
              </div>
            </div>

            {/* Confidentiality & NDA Callout */}
            <div className="bg-[#022B3A] text-white p-8 rounded-2xl mt-8">
              <h3 className="text-xl font-bold text-white mb-2">Request Blind Offering Memorandum (NDA Required)</h3>
              <p className="text-white/80 text-sm leading-relaxed mb-6">
                To protect the company's competitive position, employees, and client goodwill, detailed financial tax recasts and proprietary address information are provided only after execution of our mutual Non-Disclosure Agreement.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact-us"
                  className="px-6 py-3 bg-[#EE5B2C] hover:bg-orange-600 text-white font-bold rounded-lg transition-colors text-sm"
                >
                  Request Confidential Prospectus &rarr;
                </Link>
                <Link
                  href="/buy-an-hvac-business"
                  className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold rounded-lg transition-colors text-sm"
                >
                  View Buyer FAQ
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
