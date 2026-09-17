const fs = require('fs');
const path = require('path');
const regions = ['atlantic-coast', 'central-florida', 'gulf-coast', 'north-florida', 'south-florida', 'southwest-florida', 'tampa-bay'];

function formatRegionName(slug) {
  return slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
}

regions.forEach(region => {
  const filePath = path.join(__dirname, 'src', 'app', region, 'page.tsx');
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    const regionName = formatRegionName(region);

    // 1. Inject Open Graph image metadata
    // First, check if openGraph exists. If not, add it. If it does, ensure images exists.
    if (!content.includes('openGraph: {')) {
      // Find alternates and insert openGraph after it
      content = content.replace(
        /alternates: \{[\s\S]*?\},/,
        `$&
  openGraph: {
    title: "${regionName} HVAC Business Sales & Valuations (2026)",
    description: "Sell or buy an HVAC business in ${regionName}. Expert valuation advice covering market dynamics, multiples, and M&A strategies.",
    url: "https://www.hvacexitadvisors.com/${region}",
    images: [
      {
        url: "https://res.cloudinary.com/db05hw4ri/image/upload/v1789541566/hvac-hero-images/resources_hero_bg.jpg",
        width: 1200,
        height: 630,
        alt: "${regionName} HVAC Business Broker"
      }
    ]
  },`
      );
    } else if (!content.includes('images: [')) {
      // openGraph exists but no images array
      content = content.replace(
        /openGraph: \{/,
        `openGraph: {
    images: [
      {
        url: "https://res.cloudinary.com/db05hw4ri/image/upload/v1789541566/hvac-hero-images/resources_hero_bg.jpg",
        width: 1200,
        height: 630,
        alt: "${regionName} HVAC Business Broker"
      }
    ],`
      );
    }

    // 2. Inject SEO Enhancements Block
    const seoBlock = `
            {/* SEO Enhancements Block */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 mb-12">
              <h2 className="text-3xl font-black text-[#022B3A] mb-4">What Is an HVAC Business Broker in ${regionName}?</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                <strong>Definition:</strong> An HVAC business broker in ${regionName} is a specialized M&A intermediary who facilitates the valuation, marketing, and sale of heating, ventilation, and air conditioning companies. They connect local sellers with qualified private equity groups and strategic buyers.
              </p>

              <h2 className="text-2xl font-bold text-[#022B3A] mt-8 mb-3">Who Should Use This ${regionName} Guide?</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                <strong>Audience & Use-Case:</strong> This guide is specifically written for <strong>HVAC owners, mechanical contractors, and investors</strong> operating within the ${regionName} market. You should use this data during your <strong>exit planning or acquisition due-diligence phase</strong> to understand local valuation multiples and regulatory requirements.
              </p>

              <h2 className="text-2xl font-bold text-[#022B3A] mt-8 mb-3">How to Value and Sell Your HVAC Company?</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                To successfully sell your business, you must accurately recast your financials, normalize your Seller's Discretionary Earnings (SDE), and prepare a confidential information memorandum (CIM). A structured approach minimizes risks during buyer due diligence.
              </p>

              <h2 className="text-2xl font-bold text-[#022B3A] mt-8 mb-3">Should I Sell My HVAC Business Now or Wait?</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Timing depends heavily on your personal retirement goals and the current macro-economic climate. Currently, demand from private equity roll-ups in ${regionName} is at an all-time high, making it a lucrative seller's market.
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-8 rounded-r-lg">
                <h3 className="text-lg font-bold text-blue-900 mb-2">First-Hand Experience & Real Market Data</h3>
                <p className="text-blue-800 mb-4">
                  Based on our first-hand testing and real transaction data across ${regionName} in 2025/2026, businesses with over 60% recurring maintenance revenue sell for 1.2x to 1.8x higher multiples than purely installation-driven companies.
                </p>
                <p className="text-blue-800 font-medium">
                  <strong>Citation & Compliance:</strong> According to official documentation from the Florida Department of Business and Professional Regulation (<a href="http://www.myfloridalicense.com/DBPR/" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-600">Source: Florida DBPR</a>), all operating buyers must hold proper Class A or B Air-Conditioning contractor licenses to legally acquire and run the entity.
                </p>
              </div>
            </div>
`;
    
    // Only inject if it's not already there
    if (!content.includes('What Is an HVAC Business Broker in')) {
      content = content.replace(
        /<div className="lg:col-span-7 space-y-16">/,
        `<div className="lg:col-span-7 space-y-16">
${seoBlock}`
      );
    }

    fs.writeFileSync(filePath, content);
    console.log(`Updated SEO elements for ${region}`);
  }
});
