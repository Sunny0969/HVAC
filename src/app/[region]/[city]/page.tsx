import { Metadata } from 'next';
import Link from 'next/link';
import BreadcrumbSchema from '@/views/components/BreadcrumbSchema';
import ContactForm from '@/views/components/ContactForm';
import { cityDataMap } from '@/lib/florida-city-data';

type Props = {
  params: Promise<{ region: string; city: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const citySlug = resolvedParams.city.toLowerCase();
  const regionSlug = resolvedParams.region.toLowerCase();
  const cityInfo = cityDataMap[citySlug];
  const cityName = cityInfo ? cityInfo.name : citySlug.charAt(0).toUpperCase() + citySlug.slice(1).replace(/-/g, ' ');

  return {
    title: `${cityName} HVAC Business Broker | Sell or Buy`,
    description: `Confidential brokerage, valuation, and acquisition services for heating and air conditioning contractors in ${cityName}, FL. Get a free valuation today!`,
    alternates: {
      canonical: `https://www.hvacexitadvisors.com/${regionSlug}/${citySlug}`,
    },
    openGraph: {
      title: `${cityName} HVAC Business Broker | Sell or Buy`,
      description: `Confidential brokerage, valuation, and acquisition services for heating and air conditioning contractors in ${cityName}, FL.`,
      url: `https://www.hvacexitadvisors.com/${regionSlug}/${citySlug}`,
    },
  };
}

export default async function Page({ params }: Props) {
  const resolvedParams = await params;
  const citySlug = resolvedParams.city.toLowerCase();
  const regionSlug = resolvedParams.region.toLowerCase();
  
  const city = cityDataMap[citySlug] || {
    name: citySlug.charAt(0).toUpperCase() + citySlug.slice(1).replace(/-/g, ' '),
    county: "Florida Metro Area",
    localServiceAreaExplanation: "A thriving Florida community with robust year-round air conditioning demand, expanding residential neighborhoods, and active commercial development.",
    tradeCoverage: "Consistent year-round cooling demand driving recurring service call volume and high growth in residential replacement installations.",
    ownerConcerns: "Competitive buyer interest from strategic acquirers and private equity, managing technician shortages, and local permitting.",
    averageMultiple: "2.8x - 4.2x SDE / 5.0x - 7.0x EBITDA",
    faqs: []
  };

  const breadcrumbs = [
    { name: 'Home', item: 'https://www.hvacexitadvisors.com/' },
    { name: `${regionSlug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}`, item: `https://www.hvacexitadvisors.com/${regionSlug}` },
    { name: `${city.name}, FL`, item: `https://www.hvacexitadvisors.com/${regionSlug}/${citySlug}` }
  ];

  const localSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "HVAC Business Brokerage",
    "name": `${city.name} HVAC Business Broker`,
    "provider": {
      "@type": "LocalBusiness",
      "name": "HVAC Exit Advisors",
        "image": "https://www.hvacexitadvisors.com/icon.png",
        "priceRange": "$$$$",
      "telephone": "+1-954-864-9161",
      "url": "https://www.hvacexitadvisors.com",
      "areaServed": {
        "@type": "City",
        "name": city.name,
        "containedInPlace": {
          "@type": "State",
          "name": "Florida"
        }
      }
    },
    "description": `Professional brokerage and confidential business valuation services for heating and air conditioning companies in ${city.name}, Florida.`
  };

  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localSchema) }}
      />
      <main className="w-full bg-[#F7F5F0] min-h-screen py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
          <nav aria-label="Breadcrumb" className="text-sm font-semibold text-gray-500 mb-6 flex items-center space-x-2">
            <Link href="/" className="hover:text-[#EE5B2C] transition-colors">Home</Link>
            <span>/</span>
            <Link href={`/${regionSlug}`} className="hover:text-[#EE5B2C] transition-colors">{regionSlug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}</Link>
            <span>/</span>
            <span className="text-[#022B3A]">{city.name}, Florida</span>
          </nav>

          <header className="mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#EE5B2C] bg-orange-100 px-3 py-1 rounded-full inline-block mb-3">
              {city.county}
            </span>
            <h1 className="text-3xl md:text-5xl font-black text-[#022B3A] tracking-tight leading-tight mb-4">
              {city.name} HVAC Business Broker
            </h1>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-medium">
              Confidential M&A advisory, certified business recasting, and qualified buyer matchmaking for heating, cooling, and mechanical contractors across the {city.name} metropolitan area.
            </p>
          </header>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <span className="block text-xs font-bold text-gray-400 uppercase mb-1">Target Market</span>
              <span className="text-xl font-bold text-[#022B3A]">{city.name} Metro Area</span>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <span className="block text-xs font-bold text-gray-400 uppercase mb-1">Market Multiples</span>
              <span className="text-xl font-bold text-[#EE5B2C]">{city.averageMultiple}</span>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <span className="block text-xs font-bold text-gray-400 uppercase mb-1">Brokerage Focus</span>
              <span className="text-xl font-bold text-[#022B3A]">100% HVAC Exclusive</span>
            </div>
          </div>

          <article className="bg-white p-8 md:p-12 rounded-[2rem] shadow-sm border border-gray-100 space-y-10 prose prose-lg max-w-none text-gray-800">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#022B3A] mb-4">
                The {city.name} HVAC Market Overview
              </h2>
              <p className="text-base md:text-lg leading-relaxed text-gray-700">
                {city.localServiceAreaExplanation}
              </p>
            </div>

            <div>
              <h3 className="text-xl md:text-2xl font-bold text-[#022B3A] mb-4">
                Trade &amp; Service Coverage
              </h3>
              <p className="text-base text-gray-700 leading-relaxed">
                {city.tradeCoverage}
              </p>
            </div>

            <div>
              <h3 className="text-xl md:text-2xl font-bold text-[#022B3A] mb-4">
                Local Owner Considerations
              </h3>
              <p className="text-base text-gray-700 leading-relaxed">
                {city.ownerConcerns}
              </p>
            </div>

            <div>
              <h3 className="text-xl md:text-2xl font-bold text-[#022B3A] mb-4">
                Confidential Valuation &amp; Sale Process
              </h3>
              <p className="text-base text-gray-700 leading-relaxed">
                In local markets like {city.name}, maintaining absolute confidentiality is critical when exploring a business sale. If technicians or competitors discover a company is on the market, it creates unwanted employee attrition and client poaching.
              </p>
              <p className="text-base text-gray-700 leading-relaxed mt-4">
                At HVAC Exit Advisors, we market your company exclusively through blind profiles that protect your company name, location, and staff until buyers have signed binding Non-Disclosure Agreements (NDAs) and demonstrated verified proof of funds.
              </p>
            </div>

            {city.faqs && city.faqs.length > 0 && (
              <div className="pt-6 border-t border-gray-100">
                <h3 className="text-xl md:text-2xl font-bold text-[#022B3A] mb-6">
                  {city.name} Market FAQs
                </h3>
                <div className="space-y-6">
                  {city.faqs.map((faq: any, idx: number) => (
                    <div key={idx} className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                      <h4 className="text-lg font-bold text-[#022B3A] mb-2">{faq.q}</h4>
                      <p className="text-sm text-gray-700 leading-relaxed">{faq.a}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </article>
        </div>
      </main>

      <section className="w-full bg-[#022B3A] py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-5"></div>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
              Discover What Your {city.name} HVAC Company Is Worth
            </h2>
            <p className="text-lg text-white/80 font-medium">
              We provide a comprehensive, 100% free financial recast and valuation consultation for owners in {city.name}. Request a confidential conversation below.
            </p>
          </div>
          <div className="bg-white rounded-[2rem] shadow-2xl p-8 md:p-12">
            <ContactForm buttonText="Request Confidential Valuation" />
          </div>
        </div>
      </section>
    </>
  );
}


