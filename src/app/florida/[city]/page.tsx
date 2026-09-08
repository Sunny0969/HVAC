import { Metadata } from 'next';
import Link from 'next/link';
import BreadcrumbSchema from '@/views/components/BreadcrumbSchema';

type Props = {
  params: Promise<{ city: string }>;
};

const cityDataMap: Record<string, {
  name: string;
  county: string;
  metroDescription: string;
  marketDrivers: string[];
  averageMultiple: string;
}> = {
  "miami": {
    name: "Miami",
    county: "Miami-Dade County",
    metroDescription: "South Florida's dense high-rise condo market and commercial hospitality sector create intense year-round demand for chiller maintenance, building automation, and high-velocity residential cooling.",
    marketDrivers: ["Subtropical climate with 3,500+ annual cooling degree days", "Heavy concentration of commercial chillers and rooftop units", "High influx of out-of-state private equity capital targeting mechanical roll-ups"],
    averageMultiple: "3.2x - 4.8x SDE / 5.5x - 7.5x EBITDA"
  },
  "tampa": {
    name: "Tampa",
    county: "Hillsborough & Pinellas Counties",
    metroDescription: "The booming Tampa Bay region features explosive single-family residential expansion alongside major healthcare and logistics distribution corridors, driving record service agreement volume.",
    marketDrivers: ["Rapid population growth across Riverview, Brandon, and St. Petersburg", "Booming residential maintenance agreement (PMA) customer bases", "Strong SBA 7(a) lender appetite for established West Coast mechanical contractors"],
    averageMultiple: "3.0x - 4.2x SDE / 5.0x - 6.8x EBITDA"
  },
  "orlando": {
    name: "Orlando",
    county: "Orange & Osceola Counties",
    metroDescription: "Central Florida represents the tourism and hospitality capital of North America, where commercial mechanical uptime is mission-critical for resorts, entertainment venues, and distribution centers.",
    marketDrivers: ["Unmatched commercial refrigeration and chiller service demand", "High-volume residential replacement market driven by newer subdivisions", "Strategic interstate logistics hub attracting national consolidators"],
    averageMultiple: "3.0x - 4.5x SDE / 5.2x - 7.0x EBITDA"
  },
  "jacksonville": {
    name: "Jacksonville",
    county: "Duval & St. Johns Counties",
    metroDescription: "As Florida's largest geographic market, Northeast Florida boasts a balanced blend of industrial marine logistics, commercial contracting, and fast-growing coastal residential communities.",
    marketDrivers: ["Steady military, port, and industrial mechanical servicing", "Lower technician cost structures yielding resilient operating margins", "Substantial new construction transition opportunities into long-term service contracts"],
    averageMultiple: "2.8x - 4.0x SDE / 4.8x - 6.5x EBITDA"
  },
  "fort-myers": {
    name: "Fort Myers",
    county: "Lee & Collier Counties",
    metroDescription: "Southwest Florida's premier retirement haven and construction corridor demands premium high-efficiency heat pump systems, indoor air quality retrofits, and seasonal concierge service.",
    marketDrivers: ["Affluent residential demographics willing to invest in premium high-SEER systems", "Heavy demand for seasonal resident remote monitoring and maintenance contracts", "Active post-storm rebuilding and hardening standards"],
    averageMultiple: "3.0x - 4.2x SDE / 5.0x - 6.5x EBITDA"
  },
  "sarasota": {
    name: "Sarasota",
    county: "Sarasota & Manatee Counties",
    metroDescription: "Known for luxury residential communities and rapid master-planned community expansion (Lakewood Ranch), Sarasota HVAC companies enjoy high average ticket sizes and premium margins.",
    marketDrivers: ["High concentration of high-net-worth homeowners and custom residential builds", "Extensive indoor air quality (IAQ) and whole-home dehumidification add-on revenue", "Strong technician retention rates among established local brands"],
    averageMultiple: "3.1x - 4.4x SDE / 5.2x - 6.8x EBITDA"
  }
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const citySlug = resolvedParams.city.toLowerCase();
  const cityInfo = cityDataMap[citySlug];
  const cityName = cityInfo ? cityInfo.name : citySlug.charAt(0).toUpperCase() + citySlug.slice(1).replace(/-/g, ' ');

  return {
    title: `Sell or Buy an HVAC Business in ${cityName}, FL`,
    description: `Confidential brokerage, valuation, and acquisition services for heating and air conditioning contractors in ${cityName}, FL. Get a free valuation today!`,
    alternates: {
      canonical: `https://www.hvacexitadvisors.com/florida/${citySlug}`,
    },
    openGraph: {
      title: `Sell or Buy an HVAC Business in ${cityName}, FL | HVAC Exit Advisors`,
      description: `Confidential brokerage, valuation, and acquisition services for heating and air conditioning contractors in ${cityName}, FL.`,
      url: `https://www.hvacexitadvisors.com/florida/${citySlug}`,
    },
  };
}

export default async function Page({ params }: Props) {
  const resolvedParams = await params;
  const citySlug = resolvedParams.city.toLowerCase();
  const city = cityDataMap[citySlug] || {
    name: citySlug.charAt(0).toUpperCase() + citySlug.slice(1).replace(/-/g, ' '),
    county: "Florida Metro Area",
    metroDescription: "A thriving Florida community with robust year-round air conditioning demand, expanding residential neighborhoods, and active commercial development.",
    marketDrivers: [
      "Consistent year-round cooling demand driving recurring service call volume",
      "High growth in residential and commercial replacement installations",
      "Competitive buyer interest from strategic acquirers and private equity"
    ],
    averageMultiple: "2.8x - 4.2x SDE / 5.0x - 7.0x EBITDA"
  };

  const breadcrumbs = [
    { name: 'Home', item: 'https://www.hvacexitadvisors.com/' },
    { name: 'Florida Markets', item: 'https://www.hvacexitadvisors.com/florida/miami' },
    { name: `${city.name}, FL`, item: `https://www.hvacexitadvisors.com/florida/${citySlug}` }
  ];

  const localSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "HVAC Business Brokerage",
    "name": `HVAC Business Brokerage in ${city.name}, FL`,
    "provider": {
      "@type": "LocalBusiness",
      "name": "HVAC Exit Advisors",
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
            <span className="text-[#022B3A]">{city.name}, Florida</span>
          </nav>

          <header className="mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#EE5B2C] bg-orange-100 px-3 py-1 rounded-full inline-block mb-3">
              {city.county}
            </span>
            <h1 className="text-3xl md:text-5xl font-black text-[#022B3A] tracking-tight leading-tight mb-4">
              Sell or Buy an HVAC Business in {city.name}, FL
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

          <article className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100 space-y-8 prose prose-lg max-w-none text-gray-800">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#022B3A] mb-4">
                The {city.name} HVAC Market Overview
              </h2>
              <p className="text-base md:text-lg leading-relaxed text-gray-700">
                {city.metroDescription}
              </p>
            </div>

            <div>
              <h3 className="text-xl md:text-2xl font-bold text-[#022B3A] mb-4">
                Key Value Drivers for {city.name} Contractors
              </h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 text-base">
                {city.marketDrivers.map((driver, idx) => (
                  <li key={idx}><strong>{driver}</strong></li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xl md:text-2xl font-bold text-[#022B3A] mb-4">
                Confidentiality: Protecting Your {city.name} Business
              </h3>
              <p className="text-base text-gray-700 leading-relaxed">
                In local markets like {city.name}, maintaining absolute confidentiality is critical when exploring a business sale. If technicians or competitors discover a company is on the market, it creates unwanted employee attrition and client poaching.
              </p>
              <p className="text-base text-gray-700 leading-relaxed">
                At HVAC Exit Advisors, we market your company exclusively through blind profiles that protect your company name, location, and staff until buyers have signed binding Non-Disclosure Agreements (NDAs) and demonstrated verified proof of funds.
              </p>
            </div>

            <div className="bg-[#022B3A] text-white p-8 rounded-2xl not-prose my-8">
              <h3 className="text-2xl font-bold text-white mb-3">
                Are You Ready to Discover What Your {city.name} HVAC Company Is Worth?
              </h3>
              <p className="text-white/80 text-base mb-6 leading-relaxed">
                We provide a comprehensive, 100% free financial recast and valuation consultation for owners in {city.name} and surrounding Florida counties.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/free-valuation"
                  className="px-6 py-3 bg-[#EE5B2C] hover:bg-orange-600 text-white font-bold rounded-lg transition-colors text-sm"
                >
                  Request Free {city.name} Valuation &rarr;
                </Link>
                <Link
                  href="/contact-us"
                  className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold rounded-lg transition-colors text-sm"
                >
                  Speak With an Advisor
                </Link>
              </div>
            </div>
          </article>
        </div>
      </main>
    </>
  );
}
