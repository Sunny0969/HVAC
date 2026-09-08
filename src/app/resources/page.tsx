import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import BreadcrumbSchema from '@/views/components/BreadcrumbSchema';

export const metadata: Metadata = {
  title: 'HVAC Business Resources & Exit Guides | Florida',
  description: 'Explore comprehensive guides, valuation multiples, and market trend reports for Florida HVAC business owners and buyers. Read our expert resources now!',
  alternates: {
    canonical: 'https://www.hvacexitadvisors.com/resources',
  },
  openGraph: {
    title: 'HVAC Business Resources & Exit Guides | Florida | HVAC Exit Advisors',
    description: 'Explore comprehensive guides, valuation multiples, and market trend reports for Florida HVAC business owners and buyers.',
    url: 'https://www.hvacexitadvisors.com/resources',
  },
};

export default function ResourcesPage() {
  const breadcrumbs = [
    { name: 'Home', item: 'https://www.hvacexitadvisors.com/' },
    { name: 'Resources', item: 'https://www.hvacexitadvisors.com/resources' }
  ];

  const resourceArticles = [
    {
      title: "What's the Real Number That Matters When Evaluating an HVAC Business?",
      category: "Acquisition Guide",
      description: "Understand why gross revenue can be deceptive and why normalized Seller's Discretionary Earnings (SDE) and recurring maintenance agreements dictate true value.",
      href: "/resources/real-number-evaluating-hvac",
      readTime: "6 min read"
    },
    {
      title: "Timing Your HVAC Business Purchase: What Florida Buyers Should Know",
      category: "Market Trends",
      description: "How Florida's intensive cooling season and shoulder months impact working capital, technician onboarding, and first-year cash flow.",
      href: "/resources/timing-purchase-florida",
      readTime: "5 min read"
    },
    {
      title: "HVAC Business Valuation Multiples Explained: SDE vs. EBITDA",
      category: "Valuation Deep Dive",
      description: "A comprehensive breakdown of multiples applied to mechanical contractors, what drives premium 4x+ valuations, and how private equity evaluates your shop.",
      href: "/resources/hvac-business-multiples-explained",
      readTime: "7 min read"
    }
  ];

  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <main className="min-h-screen flex flex-col bg-[#F7F5F0]">
        {/* Hero Section */}
        <section className="relative w-full h-[100dvh] overflow-hidden bg-gray-900 text-white flex items-center justify-center">
          <div className="absolute inset-0 z-0">
            <Image
              src="/florida-hvac-business-broker-home.jpg"
              alt="Florida HVAC business planning and resources"
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-black/70" />
          </div>

          <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left mt-16 md:mt-0">
            <h1 className="max-w-4xl text-4xl md:text-5xl lg:text-7xl font-black mb-6 leading-tight tracking-tight drop-shadow-xl">
              HVAC Business <span className="text-[#EE5B2C]">Resources</span> & Advisory
            </h1>
            
            <p className="max-w-3xl text-xl md:text-2xl text-white/90 leading-relaxed font-medium drop-shadow-md">
              In-depth valuation methodologies, market insights, and transition strategies written by Florida HVAC brokerage veterans.
            </p>
          </div>
        </section>

        {/* Main Content Area */}
        <div className="flex-grow w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-[#022B3A] mb-4">
              Featured Valuation & Exit Guides
            </h2>
            <p className="text-lg text-gray-600 font-medium">
              Actionable intelligence designed to help heating, ventilation, and air conditioning contractors protect their legacy and maximize exit valuation.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {resourceArticles.map((article) => (
              <Link 
                key={article.href}
                href={article.href}
                className="group flex flex-col bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-xl hover:border-orange-200 transition-all transform hover:-translate-y-1"
              >
                <div className="flex justify-between items-center mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#EE5B2C] bg-orange-50 px-3 py-1 rounded-full">
                    {article.category}
                  </span>
                  <span className="text-xs text-gray-400 font-medium">{article.readTime}</span>
                </div>
                
                <h3 className="text-xl font-bold text-[#022B3A] group-hover:text-[#EE5B2C] transition-colors mb-3 leading-snug">
                  {article.title}
                </h3>
                
                <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
                  {article.description}
                </p>

                <span className="text-sm font-bold text-[#EE5B2C] flex items-center mt-auto">
                  Read Full Guide <span className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity">&rarr;</span>
                </span>
              </Link>
            ))}
          </div>

          {/* Educational Callout Band */}
          <div className="mt-20 bg-[#022B3A] text-white p-8 md:p-12 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl">
              <h3 className="text-2xl md:text-3xl font-bold mb-3">Want an Estimate for Your Specific Business?</h3>
              <p className="text-white/80 text-base leading-relaxed">
                Try our interactive Florida HVAC valuation calculator to see what your cash flow, maintenance agreement base, and team structure are worth in today's market.
              </p>
            </div>
            <Link
              href="/hvac-business-valuation-calculator"
              className="px-8 py-4 bg-[#EE5B2C] hover:bg-orange-600 text-white font-bold rounded-xl shadow-lg transition-all whitespace-nowrap"
            >
              Open Valuation Calculator &rarr;
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
