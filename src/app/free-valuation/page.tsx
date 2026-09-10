import { Metadata } from 'next';
import Link from 'next/link';
import BreadcrumbSchema from '@/views/components/BreadcrumbSchema';

export const metadata: Metadata = {
  title: 'Free Florida HVAC Business Valuation',
  description: 'Get a free, confidential valuation of your Florida HVAC business from expert industry brokers. Discover what your company is truly worth. Claim yours today!',
  alternates: {
    canonical: 'https://www.hvacexitadvisors.com/free-valuation',
  },
  openGraph: {
    title: 'Free Florida HVAC Business Valuation | HVAC Exit Advisors',
    description: 'Get a free, confidential valuation of your Florida HVAC business from expert industry brokers. Discover what your company is truly worth.',
    url: 'https://www.hvacexitadvisors.com/free-valuation',
  },
};

export default function FreeValuationPage() {
  const breadcrumbs = [
    { name: 'Home', item: 'https://www.hvacexitadvisors.com/' },
    { name: 'Free Valuation', item: 'https://www.hvacexitadvisors.com/free-valuation' }
  ];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "HVAC Business Valuation",
    "name": "Free Confidential Florida HVAC Business Valuation",
    "provider": {
      "@type": "LocalBusiness",
      "name": "HVAC Exit Advisors",
        "image": "https://www.hvacexitadvisors.com/icon.png",
        "priceRange": "$$$$",
      "telephone": "+1-954-864-9161",
      "url": "https://www.hvacexitadvisors.com/free-valuation"
    },
    "description": "Comprehensive SDE and EBITDA multiple recasting for Florida heating, ventilation, air conditioning, and mechanical contracting companies."
  };

  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 mt-12">
        <nav aria-label="Breadcrumb" className="text-sm font-semibold text-gray-500 mb-6 flex items-center space-x-2">
          <Link href="/" className="hover:text-[#EE5B2C] transition-colors">Home</Link>
          <span>/</span>
          <span className="text-[#022B3A]">Free Valuation</span>
        </nav>

        <h1 className="text-4xl font-bold text-primary mb-6">Get a Free Florida HVAC Business Valuation</h1>
        <h2 className="text-2xl font-semibold text-secondary mb-4">Discover Your Company's True Market Value</h2>
        <div className="prose max-w-none text-black mt-8">
          <p className="text-lg leading-relaxed mb-6">
            Are you wondering, "How much is my <strong>Florida HVAC business</strong> worth?" You are not alone. Determining the true market value of a heating, ventilation, and air conditioning company is the critical first step before deciding to sell. Our <strong>Florida HVAC business valuation</strong> services are completely free, strictly confidential, and designed specifically for owners in the Sunshine State.
          </p>
          
          <h3 className="text-2xl font-bold mt-8 mb-4">Why Do You Need an Accurate Valuation?</h3>
          <p className="mb-4">
            Many business owners either underestimate their value or rely on generic multiples that do not account for the unique recurring revenue of HVAC maintenance agreements. We look at the actual cash flow and strategic value of your operations to attract qualified buyers.
          </p>

          <ul className="list-disc pl-6 mb-8 space-y-2">
            <li><strong>Identify True Earnings:</strong> We adjust your financials to show maximum Seller's Discretionary Earnings (SDE).</li>
            <li><strong>Highlight Recurring Revenue:</strong> Your active maintenance contracts and commercial accounts add significant premium value.</li>
            <li><strong>Understand Market Multiples:</strong> Learn exactly what private equity and strategic buyers are paying for companies like yours right now.</li>
            <li><strong>Confidential Process:</strong> Your employees, competitors, and customers will never know you are exploring an exit until you are ready.</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">The HVAC Exit Advisors Difference</h3>
          <p className="mb-4">
            Unlike general business brokers who sell restaurants today and retail stores tomorrow, we exclusively specialize in the HVAC sector. This means we understand the difference between new construction margins and residential service profitability. We use this deep industry knowledge to position your <Link href="/sell-your-hvac-business" className="text-[#EE5B2C] hover:underline font-bold">company for the highest possible sale price</Link>. 
          </p>

          <p className="mb-4">
            Whether you are planning to retire in a few months or just exploring your exit strategy for the coming years, getting a baseline valuation is crucial. The market is currently highly active, with numerous <Link href="/buy-an-hvac-business" className="text-[#EE5B2C] hover:underline font-bold">buyers seeking established, profitable HVAC contractors</Link> across Florida.
          </p>

          <div className="bg-gray-100 p-8 rounded-2xl border-l-4 border-[#EE5B2C] not-prose mt-8">
            <h4 className="text-xl font-bold text-[#022B3A] mb-3">Ready to get started?</h4>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Contact us today to schedule your private consultation. There are no upfront fees, no obligation to sell, and absolute confidentiality is guaranteed from day one.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact-us" className="px-6 py-3 bg-[#EE5B2C] hover:bg-orange-600 text-white font-bold rounded-lg transition-colors text-sm">
                Schedule Private Consultation &rarr;
              </Link>
              <Link href="/hvac-business-valuation-calculator" className="px-6 py-3 bg-[#022B3A] hover:bg-[#033b50] text-white font-bold rounded-lg transition-colors text-sm">
                Use Free Online Calculator
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}


