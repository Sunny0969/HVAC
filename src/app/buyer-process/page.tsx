import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import BuyerProcessContent from "../../views/components/BuyerProcessContent";
import BreadcrumbSchema from "../../views/components/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Buyer Process | Business HVAC Acquisitions",
  description: "Learn the step-by-step buyer process for acquiring a business HVAC in Florida. From qualification to closing, we guide you through every stage.",
  alternates: {
    canonical: "https://www.hvacexitadvisors.com/buyer-process",
  },
};

export default function BuyerProcessPage() {
  const breadcrumbs = [
    { name: 'Home', item: 'https://www.hvacexitadvisors.com/' },
    { name: 'Buyer Process', item: 'https://www.hvacexitadvisors.com/buyer-process' }
  ];

  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <main className="min-h-screen flex flex-col bg-gray-50">
        {/* Hero Section - Full Screen */}
        <section className="relative w-full h-[80dvh] min-h-[600px] overflow-hidden bg-gray-900 text-white flex items-center justify-center">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/florida-hvac-business-valuation.jpg"
              alt="business hvac - Buyer Process"
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/75" />
          </div>

          <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left mt-16 md:mt-0">
            <nav aria-label="Breadcrumb" className="text-sm font-semibold text-white/70 mb-6 flex items-center space-x-2">
              <Link href="/" className="hover:text-[#EE5B2C] transition-colors">Home</Link>
              <span>/</span>
              <span className="text-white">Buyer Process</span>
            </nav>
            <h1 className="max-w-4xl text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight tracking-tight drop-shadow-xl">
              Business HVAC: <br className="hidden md:block" /> <span className="text-[#EE5B2C]">The Acquisition Process</span>
            </h1>
            
            <p className="max-w-3xl text-xl text-white/90 leading-relaxed font-medium mb-10 drop-shadow-md">
              Acquiring a business HVAC operation requires a structured, confidential approach. Learn our step-by-step process for evaluating, financing, and closing on premium heating and air conditioning companies in Florida.
            </p>
            
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-start gap-4 mb-12">
              <Link 
                href="/listings" 
                className="w-full sm:w-auto px-8 py-4 bg-[#EE5B2C] hover:bg-orange-600 text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 text-center"
              >
                View Available Businesses &rarr;
              </Link>
            </div>
          </div>
        </section>

        {/* Main Content Area */}
        <BuyerProcessContent />

      </main>
    </>
  );
}
