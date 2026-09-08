import { Metadata } from 'next';
import Link from 'next/link';
import BreadcrumbSchema from '@/views/components/BreadcrumbSchema';

export const metadata: Metadata = {
  title: 'Evaluating an HVAC Business: Key Valuation Metrics',
  description: 'Learn the real financial metrics that determine HVAC business value in Florida, including SDE, add-backs, and recurring service agreements. Read the guide!',
  alternates: {
    canonical: 'https://www.hvacexitadvisors.com/resources/real-number-evaluating-hvac',
  },
  openGraph: {
    title: 'Evaluating an HVAC Business: Key Valuation Metrics | HVAC Exit Advisors',
    description: 'Learn the real financial metrics that determine HVAC business value in Florida, including SDE, add-backs, and recurring service agreements.',
    url: 'https://www.hvacexitadvisors.com/resources/real-number-evaluating-hvac',
    type: 'article',
  },
};

export default function RealNumberEvaluatingHvacPage() {
  const breadcrumbs = [
    { name: 'Home', item: 'https://www.hvacexitadvisors.com/' },
    { name: 'Resources', item: 'https://www.hvacexitadvisors.com/resources' },
    { name: 'Evaluating an HVAC Business', item: 'https://www.hvacexitadvisors.com/resources/real-number-evaluating-hvac' }
  ];

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "What's the Real Number That Matters When Evaluating an HVAC Business?",
    "description": "A comprehensive guide on evaluating HVAC businesses in Florida using normalized SDE and recurring revenue analysis.",
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
    "mainEntityOfPage": "https://www.hvacexitadvisors.com/resources/real-number-evaluating-hvac"
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
            <span className="text-[#022B3A] truncate">Evaluating an HVAC Business</span>
          </nav>

          <header className="mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-[#EE5B2C] bg-orange-100 px-3 py-1 rounded-full inline-block mb-4">
              Acquisition Guide
            </span>
            <h1 className="text-3xl md:text-5xl font-black text-[#022B3A] tracking-tight leading-tight mb-6">
              What's the Real Number That Matters When Evaluating an HVAC Business?
            </h1>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-medium">
              Gross revenue looks impressive on marketing flyers, but smart buyers and institutional lenders look past top-line numbers. In Florida HVAC acquisitions, cash flow recasting determines actual business value.
            </p>
          </header>

          <article className="prose prose-lg max-w-none text-gray-800 bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100 space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-[#022B3A] border-b pb-3">
              Why Top-Line Revenue Can Be Misleading
            </h2>
            <p>
              A common trap for prospective HVAC buyers is equating total annual revenue with investment quality. A Florida contractor reporting $5,000,000 in gross sales dominated by low-margin new construction installations may yield less net profit than a streamlined $2,500,000 shop focused on residential service and replacement.
            </p>
            <p>
              New residential construction contracts frequently experience retainage delays, severe material price fluctuations, and thin operating margins often below 8%. Conversely, service-driven HVAC businesses boast gross margins north of 45% and generate immediate receivable collections.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-[#022B3A] border-b pb-3">
              The Real Metric: Seller's Discretionary Earnings (SDE)
            </h2>
            <p>
              For HVAC companies generating under $5,000,000 in annual revenue, the primary benchmark used by brokers, private buyers, and SBA lenders is <strong>Seller's Discretionary Earnings (SDE)</strong>. SDE measures the total financial benefit generated by the business for a single full-time owner-operator.
            </p>
            <p>
              To calculate normalized SDE, professional advisors recast the company profit and loss statements through verified add-backs:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Owner Salary & Bonuses:</strong> Total compensation paid to the primary working shareholder.</li>
              <li><strong>Discretionary Personal Expenses:</strong> Personal vehicle leases, cell phones, travel, and owner health insurance billed to the company.</li>
              <li><strong>Non-Recurring Items:</strong> One-time legal disputes, non-standard facility renovations, or emergency fleet repairs.</li>
              <li><strong>Depreciation & Amortization:</strong> Non-cash accounting deductions that do not affect actual cash operations.</li>
              <li><strong>Interest Expense:</strong> Financing costs specific to the seller's capital structure that will not carry over post-close.</li>
            </ul>

            <h2 className="text-2xl md:text-3xl font-bold text-[#022B3A] border-b pb-3">
              Recurring Maintenance Agreements (PMAs): The Multiplier Effect
            </h2>
            <p>
              Once true SDE is established, the multiple applied to that earnings figure dictates the transaction price. In Florida, where cooling systems run practically 10 months a year, the single biggest multiple enhancer is an active base of Planned Maintenance Agreements (PMAs).
            </p>
            <p>
              A contractor with 2,000 enrolled residential agreement holders generates predictable seasonal cash flow, steady customer touchpoints, and higher system changeout close rates. While a purely reactionary shop might trade at 2.2x to 2.8x SDE, an agreement-rich business commands 3.5x to 4.5x SDE or higher.
            </p>

            <div className="bg-[#022B3A] text-white p-8 rounded-xl my-8">
              <h3 className="text-xl font-bold text-white mb-2">Need Help Evaluating a Target Acquisition?</h3>
              <p className="text-white/90 mb-6">
                HVAC Exit Advisors assists buyers and sellers in accurately recasting financials to uncover the true fair market value of Florida mechanical companies.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact-us"
                  className="px-6 py-3 bg-[#EE5B2C] hover:bg-orange-600 text-white font-bold rounded-lg transition-colors"
                >
                  Schedule a Consultation &rarr;
                </Link>
                <Link
                  href="/hvac-business-valuation-calculator"
                  className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold rounded-lg transition-colors"
                >
                  Try Free Valuation Calculator
                </Link>
              </div>
            </div>
          </article>
        </div>
      </main>
    </>
  );
}
