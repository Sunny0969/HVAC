import { Metadata } from 'next';
import Link from 'next/link';
import Colonnade, { ColonnadeItem } from '../../views/components/Colonnade';
import BreadcrumbSchema from '../../views/components/BreadcrumbSchema';

export const metadata: Metadata = {
  title: 'Florida HVAC Business Broker Team',
  description: 'Meet Florida\'s premier HVAC business brokerage firm. Former mechanical contractors helping owners achieve maximum exit value. Learn about our story!',
  alternates: {
    canonical: 'https://www.hvacexitadvisors.com/about-us',
  },
  openGraph: {
    title: 'Florida HVAC Business Broker Team | HVAC Exit Advisors',
    description: 'Meet Florida\'s premier HVAC business brokerage firm. Former mechanical contractors helping owners achieve maximum exit value.',
    url: 'https://www.hvacexitadvisors.com/about-us',
  },
};

const storyChapters: ColonnadeItem[] = [
  { id: "c1", label: "Chapter 1", title: "In The Trenches", content: "Before we were brokers, we were operators. We spent decades building, scaling, and ultimately selling our own mechanical contracting firms in Florida.", gradientClass: "bg-gradient-to-tr from-slate-700 to-slate-500" },
  { id: "c2", label: "Chapter 2", title: "The Problem", content: "When we sold our businesses, we realized generalist brokers didn't speak our language. They didn't understand the value of maintenance contracts, fleet management, or technician retention.", gradientClass: "bg-gradient-to-br from-indigo-800 to-blue-600" },
  { id: "c3", label: "Chapter 3", title: "The Solution", content: "We founded HVAC Exit Advisors to be the brokerage we wish we had. A firm dedicated 100% exclusively to the HVAC industry.", gradientClass: "bg-gradient-to-br from-blue-500 to-cyan-400" },
  { id: "c4", label: "Chapter 4", title: "Our Mission", content: "Today, we protect the legacies of Florida's hardest-working entrepreneurs, securing life-changing exits that reward decades of early mornings and late nights.", gradientClass: "bg-gradient-to-r from-orange-500 to-amber-400" }
];

export default function Page() {
  const breadcrumbs = [
    { name: 'Home', item: 'https://www.hvacexitadvisors.com/' },
    { name: 'About Us', item: 'https://www.hvacexitadvisors.com/about-us' }
  ];

  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <div className="w-full bg-[#F7F5F0] min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
          <nav aria-label="Breadcrumb" className="text-sm font-semibold text-gray-500 mb-6 flex items-center space-x-2">
            <Link href="/" className="hover:text-[#EE5B2C] transition-colors">Home</Link>
            <span>/</span>
            <span className="text-[#022B3A]">About Us</span>
          </nav>

          <h1 className="text-4xl md:text-5xl font-black text-[#022B3A] mb-4 tracking-tight">
            About HVAC Exit Advisors: Florida HVAC Business Brokers
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold text-[#EE5B2C] mb-12">
            Built by Contractors, Exclusively for Florida Mechanical Contractors
          </h2>
          
          <Colonnade items={storyChapters} />

          {/* Deep Content Section to fulfill SEO requirements and provide rich value */}
          <div className="mt-20 bg-white rounded-3xl p-8 md:p-14 shadow-sm border border-gray-100">
            <h3 className="text-2xl md:text-3xl font-black text-[#022B3A] mb-6">
              Why Specialty Focus Matters When Selling an HVAC Company
            </h3>
            
            <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
              <p>
                Selling a heating, ventilation, and air conditioning company in Florida is fundamentally different from selling a restaurant, retail storefront, or general consulting business. Main Street business brokers frequently fail to understand the nuanced mechanics of an HVAC business:
              </p>
              
              <div className="grid md:grid-cols-2 gap-8 my-8 not-prose">
                <div className="p-6 rounded-2xl bg-[#F7F5F0] border border-gray-200">
                  <h4 className="text-lg font-bold text-[#022B3A] mb-2">1. Maintenance Contract Valuations</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    General brokers look only at past year EBITDA. We understand how to recast Planned Maintenance Agreement (PMA) renewal rates and replacement conversion metrics, driving buyers to pay top-of-market multiples.
                  </p>
                </div>
                <div className="p-6 rounded-2xl bg-[#F7F5F0] border border-gray-200">
                  <h4 className="text-lg font-bold text-[#022B3A] mb-2">2. Confidential Buyer Outreach</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    We maintain direct relationships with private equity groups, family offices, and regional strategic acquirers actively building Florida HVAC footprints, allowing us to market your business without public listings.
                  </p>
                </div>
                <div className="p-6 rounded-2xl bg-[#F7F5F0] border border-gray-200">
                  <h4 className="text-lg font-bold text-[#022B3A] mb-2">3. Licensing Transition Support</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Florida DBPR regulations require certified Class A or B contractors. We help structure legally compliant qualifying agent transition agreements so buyers without trade licenses can close without licensing delays.
                  </p>
                </div>
                <div className="p-6 rounded-2xl bg-[#F7F5F0] border border-gray-200">
                  <h4 className="text-lg font-bold text-[#022B3A] mb-2">4. Success-Only Fee Model</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    We do not charge upfront retainer fees or monthly listing expenses. Our commission is earned solely when your transaction closes successfully on terms you approve.
                  </p>
                </div>
              </div>

              <p>
                Whether you are contemplating an exit within the next six months or preparing your company for a multi-year value enhancement strategy, our advisory team brings empathy, discretion, and transactional precision to your side of the table.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap gap-4 pt-6 border-t border-gray-100">
              <Link
                href="/about-us/team"
                className="px-6 py-3 bg-[#022B3A] hover:bg-[#033b50] text-white font-bold rounded-lg transition-colors"
              >
                Meet Our Advisory Team &rarr;
              </Link>
              <Link
                href="/free-valuation"
                className="px-6 py-3 bg-[#EE5B2C] hover:bg-orange-600 text-white font-bold rounded-lg transition-colors"
              >
                Request Free Valuation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
