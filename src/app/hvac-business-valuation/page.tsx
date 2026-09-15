import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import ContactForm from '../../views/components/ContactForm';
import BreadcrumbSchema from '../../views/components/BreadcrumbSchema';

export const metadata: Metadata = {
  title: "HVAC Business Valuation in Florida",
  description: "Learn how earnings, recurring agreements, technicians, service mix and owner dependence affect the value of an HVAC business.",
  alternates: {
    canonical: "https://www.hvacexitadvisors.com/hvac-business-valuation"
  },
  openGraph: {
    title: "HVAC Business Valuation in Florida",
    description: "Learn how earnings, recurring agreements, technicians, service mix and owner dependence affect the value of an HVAC business.",
    url: "https://www.hvacexitadvisors.com/hvac-business-valuation",
    images: [{ url: "/florida-hvac-business-valuation.jpg", width: 1200, height: 630, alt: "HVAC Business Valuation in Florida" }]
  }
};

export default function HVACBusinessValuationPage() {
  const breadcrumbs = [
    { name: 'Home', item: 'https://www.hvacexitadvisors.com/' },
    { name: 'HVAC Business Valuation', item: 'https://www.hvacexitadvisors.com/hvac-business-valuation' }
  ];

  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <main className="min-h-screen flex flex-col bg-[#F7F5F0]">
        
        {/* Hero Section */}
        <section className="relative w-full h-[100dvh] overflow-hidden bg-gray-900 text-white flex items-center justify-center">
          <div className="absolute inset-0 z-0">
            <Image src="/florida-hvac-business-valuation.jpg" alt="Florida HVAC Business Valuation" fill priority sizes="100vw" className="object-cover object-center" />
            <div className="absolute inset-0 bg-black/60" />
          </div>

          <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left mt-16 md:mt-0">
            <nav aria-label="Breadcrumb" className="text-sm font-semibold text-white/70 mb-6 flex items-center space-x-2">
              <Link href="/" className="hover:text-[#EE5B2C] transition-colors">Home</Link>
              <span>/</span>
              <span className="text-white">HVAC Business Valuation</span>
            </nav>

            <h1 className="max-w-4xl text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight tracking-tight drop-shadow-xl">
              Understand What Drives the Value of Your HVAC Company
            </h1>
            
            <p className="text-xl text-white/90 leading-relaxed font-medium mb-10 max-w-3xl">
              Learn how earnings, recurring agreements, technicians, service mix and owner dependence affect the value of an HVAC business.
            </p>
          </div>
        </section>

        {/* Content Section with Side Form */}
        <div className="flex-grow w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-12 gap-8 md:gap-12 lg:gap-16">
            
            {/* Main Column: Content */}
            <div className="lg:col-span-8 space-y-12">
              
              {/* Opening Copy & SDE */}
              <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-xl shadow-gray-200/50 border border-gray-100">
                <p className="text-lg text-gray-700 leading-relaxed font-medium mb-8">
                  An HVAC valuation begins with normalized earnings, but the multiple applied to those earnings depends on risk, growth, transferability and buyer demand. Two companies with similar revenue can receive different market reactions because their recurring revenue, workforce, customer mix and owner involvement are different.
                </p>
                <h2 className="text-3xl font-black text-[#022B3A] mb-6">SDE and EBITDA</h2>
                <p className="text-lg text-gray-700 leading-relaxed font-medium">
                  Seller discretionary earnings, commonly called SDE, is often used for smaller owner-operated companies. It generally begins with pretax business earnings and may add back one owner’s compensation and documented discretionary or nonrecurring expenses. EBITDA is more commonly used for larger, manager-operated businesses. Every proposed adjustment must be supportable because buyers and lenders will examine it during due diligence.
                </p>
              </div>

              {/* Factors That May Support Value */}
              <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-xl shadow-gray-200/50 border border-gray-100">
                <h2 className="text-3xl font-black text-[#022B3A] mb-6">Factors That May Support Value</h2>
                <ul className="space-y-4 text-lg text-gray-700 font-medium">
                  <li className="flex items-start"><span className="text-[#EE5B2C] mr-3 mt-1">✔</span> Consistent or growing revenue and earnings</li>
                  <li className="flex items-start"><span className="text-[#EE5B2C] mr-3 mt-1">✔</span> Accurate financial records that agree with tax filings and bank activity</li>
                  <li className="flex items-start"><span className="text-[#EE5B2C] mr-3 mt-1">✔</span> Documented recurring maintenance revenue and strong renewals</li>
                  <li className="flex items-start"><span className="text-[#EE5B2C] mr-3 mt-1">✔</span> A stable technician and management team</li>
                  <li className="flex items-start"><span className="text-[#EE5B2C] mr-3 mt-1">✔</span> Low dependence on the owner for sales and daily operations</li>
                  <li className="flex items-start"><span className="text-[#EE5B2C] mr-3 mt-1">✔</span> Diversified customers and transferable commercial relationships</li>
                  <li className="flex items-start"><span className="text-[#EE5B2C] mr-3 mt-1">✔</span> A balanced mix of service, repair and replacement revenue</li>
                  <li className="flex items-start"><span className="text-[#EE5B2C] mr-3 mt-1">✔</span> Well-maintained fleet and equipment</li>
                  <li className="flex items-start"><span className="text-[#EE5B2C] mr-3 mt-1">✔</span> Strong local reputation and customer reviews</li>
                  <li className="flex items-start"><span className="text-[#EE5B2C] mr-3 mt-1">✔</span> Documented procedures, dispatch systems and operating controls</li>
                </ul>
              </div>

              {/* Factors That May Reduce Value */}
              <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-xl shadow-gray-200/50 border border-gray-100">
                <h2 className="text-3xl font-black text-[#022B3A] mb-6">Factors That May Reduce Value or Change Deal Terms</h2>
                <ul className="space-y-4 text-lg text-gray-700 font-medium">
                  <li className="flex items-start"><span className="text-red-500 mr-3 mt-1">✖</span> Inconsistent or incomplete financial records</li>
                  <li className="flex items-start"><span className="text-red-500 mr-3 mt-1">✖</span> Heavy reliance on one customer, employee, vendor or referral source</li>
                  <li className="flex items-start"><span className="text-red-500 mr-3 mt-1">✖</span> Owner dependence that makes earnings difficult to transfer</li>
                  <li className="flex items-start"><span className="text-red-500 mr-3 mt-1">✖</span> High employee turnover or shortage of qualified technicians</li>
                  <li className="flex items-start"><span className="text-red-500 mr-3 mt-1">✖</span> Deferred fleet and equipment replacements</li>
                  <li className="flex items-start"><span className="text-red-500 mr-3 mt-1">✖</span> Unclear licenses or qualifying-agent transition</li>
                  <li className="flex items-start"><span className="text-red-500 mr-3 mt-1">✖</span> Revenue concentrated in project-based new construction</li>
                  <li className="flex items-start"><span className="text-red-500 mr-3 mt-1">✖</span> Aggressive financial adjustments without documentation</li>
                  <li className="flex items-start"><span className="text-red-500 mr-3 mt-1">✖</span> Legal, tax, insurance, lease or compliance concerns</li>
                </ul>
              </div>

              {/* Valuation Process */}
              <div className="bg-[#022B3A] rounded-[2rem] p-8 md:p-12 shadow-xl text-white">
                <h2 className="text-3xl font-black mb-8">Valuation Process</h2>
                <div className="space-y-6">
                  {[
                    "Review historical and current financial statements.",
                    "Normalize earnings using documented adjustments.",
                    "Analyze the company’s operations and transfer risks.",
                    "Consider relevant market information and likely buyer groups.",
                    "Estimate a supportable range and discuss the assumptions behind it."
                  ].map((step, idx) => (
                    <div key={idx} className="flex items-center bg-white/5 border border-white/10 p-4 rounded-xl">
                      <div className="w-10 h-10 rounded-full bg-[#EE5B2C] text-white font-bold flex items-center justify-center flex-shrink-0 mr-4 text-lg">
                        {idx + 1}
                      </div>
                      <p className="text-lg font-medium text-white/90">{step}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Disclaimer */}
              <div className="bg-gray-50 border border-gray-200 rounded-[2rem] p-8 text-sm text-gray-500 leading-relaxed text-center">
                <strong>Valuation Disclaimer:</strong> A preliminary broker opinion is intended to support planning and marketing discussions. It is not a certified appraisal and cannot guarantee a sale price, financing approval or closing result.
              </div>

            </div>
            
            {/* Right Sticky Form Column */}
            <div className="lg:col-span-4">
              <div className="sticky top-32 bg-white rounded-[2rem] shadow-xl shadow-gray-200/50 border border-gray-100 p-8 max-h-[calc(100vh-10rem)] overflow-y-auto">
                <h3 className="text-2xl font-black text-[#022B3A] mb-3">Professional Valuation</h3>
                <p className="text-gray-600 mb-6 font-medium leading-relaxed">
                  Confidential, no-obligation conversation about the value of your HVAC business.
                </p>
                <ContactForm buttonText="Request My Confidential Valuation" />
              </div>
            </div>

          </div>
        </div>
      </main>
    </>
  );
}
