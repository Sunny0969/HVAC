import { Metadata } from 'next';
import Link from 'next/link';
import BreadcrumbSchema from '@/views/components/BreadcrumbSchema';

export const metadata: Metadata = {
  title: 'HVAC Business Valuation Multiples Explained',
  description: 'Understand how SDE and EBITDA multiples work when valuing a Florida HVAC business, from recurring revenue premiums to private equity pricing. Learn more!',
  alternates: {
    canonical: 'https://www.hvacexitadvisors.com/resources/hvac-business-multiples-explained',
  },
  openGraph: {
    title: 'HVAC Business Valuation Multiples Explained | HVAC Exit Advisors',
    description: 'Understand how SDE and EBITDA multiples work when valuing a Florida HVAC business, from recurring revenue premiums to private equity pricing.',
    url: 'https://www.hvacexitadvisors.com/resources/hvac-business-multiples-explained',
    type: 'article',
  },
};

export default function HvacMultiplesExplainedPage() {
  const breadcrumbs = [
    { name: 'Home', item: 'https://www.hvacexitadvisors.com/' },
    { name: 'Resources', item: 'https://www.hvacexitadvisors.com/resources' },
    { name: 'HVAC Multiples Explained', item: 'https://www.hvacexitadvisors.com/resources/hvac-business-multiples-explained' }
  ];

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "HVAC Business Valuation Multiples Explained: SDE vs. EBITDA",
    "description": "An in-depth breakdown of transaction multiples applied to Florida heating, air conditioning, and refrigeration contracting businesses.",
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
        "url": "https://www.hvacexitadvisors.com/logo.png"
      }
    },
    "mainEntityOfPage": "https://www.hvacexitadvisors.com/resources/hvac-business-multiples-explained"
  };

  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <main className="w-full bg-[#F7F5F0] min-h-screen py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
          <nav aria-label="Breadcrumb" className="text-sm font-semibold text-gray-500 mb-6 flex items-center space-x-2">
            <Link href="/" className="hover:text-[#EE5B2C] transition-colors">Home</Link>
            <span>/</span>
            <Link href="/resources" className="hover:text-[#EE5B2C] transition-colors">Resources</Link>
            <span>/</span>
            <span className="text-[#022B3A] truncate">HVAC Multiples Explained</span>
          </nav>

          <header className="mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-[#EE5B2C] bg-orange-100 px-3 py-1 rounded-full inline-block mb-4">
              Valuation Deep Dive
            </span>
            <h1 className="text-3xl md:text-5xl font-black text-[#022B3A] tracking-tight leading-tight mb-6">
              HVAC Business Valuation Multiples Explained: What Determines Your Exit Price?
            </h1>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-medium">
              Why do two HVAC contractors in Florida with identical revenues of $3,000,000 sell for vastly different prices? The answer lies in the valuation multiple and the qualitative risk factors behind it.
            </p>
          </header>

          <article className="prose prose-lg max-w-none text-gray-800 bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100 space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-[#022B3A] border-b pb-3">
              SDE vs. EBITDA: When Does the Multiplier Basis Shift?
            </h2>
            <p>
              In business brokerage and mergers & acquisitions (M&A), the benchmark metric depends on transaction size:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Under $1M in Adjusted Profit (SDE):</strong> Most owner-operator HVAC businesses are priced as a multiple of <em>Seller's Discretionary Earnings (SDE)</em>. Current Florida market multiples typically range between <strong>2.5x to 4.2x SDE</strong>.
              </li>
              <li>
                <strong>Over $1M in Adjusted Profit (EBITDA):</strong> When a mechanical business has dedicated general managers, dispatch directors, and leadership teams that run without the owner's daily intervention, buyers value the business on <em>EBITDA</em> (Earnings Before Interest, Taxes, Depreciation, and Amortization). Multiples range from <strong>4.5x to 8.0x+ EBITDA</strong> when courting private equity platforms.
              </li>
            </ul>

            <h2 className="text-2xl md:text-3xl font-bold text-[#022B3A] border-b pb-3">
              What Drives Your Multiple to the Top of the Range?
            </h2>
            <p>
              Buyers don't just pay for past profits; they pay for the certainty and transferability of future cash flows. The following elements reliably push HVAC valuation multiples toward the premium end:
            </p>
            <div className="grid md:grid-cols-2 gap-6 my-6 not-prose">
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                <h3 className="text-lg font-bold text-[#022B3A] mb-2">High Multiple Drivers (3.5x - 5.0x+)</h3>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>&bull; 1,500+ active recurring maintenance contracts</li>
                  <li>&bull; Fully staffed with licensed, tenured technicians</li>
                  <li>&bull; Clean, GAAP-compliant financial records</li>
                  <li>&bull; Strong residential replacement margins (&gt;50%)</li>
                  <li>&bull; Owner works &lt;15 hours/week on strategy only</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                <h3 className="text-lg font-bold text-[#022B3A] mb-2">Multiple Discount Drivers (2.0x - 2.8x)</h3>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>&bull; Owner holds license and runs primary service calls</li>
                  <li>&bull; Heavy reliance on low-margin new construction</li>
                  <li>&bull; High technician turnover and fleet wear</li>
                  <li>&bull; No formal maintenance agreement base</li>
                  <li>&bull; Customer concentration (&gt;20% with one client)</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-[#022B3A] border-b pb-3">
              The Florida Market Premium
            </h2>
            <p>
              Florida HVAC companies consistently trade at a 15% to 25% premium compared to Midwest or Northern counterparts. Why? Year-round cooling demand eliminates the deep winter revenue troughs seen in cold climates, providing private equity platforms with uninterrupted quarterly returns.
            </p>

            <div className="bg-[#022B3A] text-white p-8 rounded-xl my-8">
              <h3 className="text-xl font-bold text-white mb-2">Discover What Multiple Your Business Commands</h3>
              <p className="text-white/90 mb-6">
                Get a comprehensive, data-backed valuation recast from brokers who specialize exclusively in Florida mechanical companies.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/free-valuation"
                  className="px-6 py-3 bg-[#EE5B2C] hover:bg-orange-600 text-white font-bold rounded-lg transition-colors"
                >
                  Request Free Confidential Valuation &rarr;
                </Link>
                <Link
                  href="/hvac-business-valuation-calculator"
                  className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold rounded-lg transition-colors"
                >
                  Calculate Multiple Online
                </Link>
              </div>
            </div>
          </article>
        </div>
      </main>
    </>
  );
}
