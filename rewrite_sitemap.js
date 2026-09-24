const fs = require('fs');
const content = `import { MetadataRoute } from 'next';
import { floridaCities, getRegionSlugForCity } from '../models/navigationModel';

let _rootUrl = (process.env.NEXT_PUBLIC_CMS_API_URL || "http://127.0.0.1:4000").trim();
_rootUrl = _rootUrl.replace(/\\/api\\/public\\/?$/, '').replace(/\\/api\\/?$/, '').replace(/\\/$/, '');
const API_URL = \`\${_rootUrl}/api/public\`;

async function getListings() {
  try {
    const res = await fetch(\`\${API_URL}/listings\`);
    if (!res.ok) return [];
    const data = await res.json();
    return data.listings || [];
  } catch (error) {
    return [];
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://www.hvacexitadvisors.com';
  
  const cityRoutes = floridaCities.map(city => {
    const slug = city.toLowerCase().replace(/\\s+/g, '-');
    return {
      url: \`\${baseUrl}/\${getRegionSlugForCity(city)}/\${slug}\`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    };
  });

  const listingsData = await getListings();
  const listingRoutes = listingsData.map((listing) => ({
    url: \`\${baseUrl}/listings/\${listing.slug}\`,
    lastModified: new Date(listing.updatedAt || new Date()),
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  return [
    { url: \`\${baseUrl}\`, lastModified: new Date(), changeFrequency: 'weekly', priority: 1.0 },
    { url: \`\${baseUrl}/sell-your-hvac-business\`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.95 },
    { url: \`\${baseUrl}/buy-an-hvac-business\`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.95 },
    { url: \`\${baseUrl}/free-confidential-valuation\`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: \`\${baseUrl}/hvac-business-valuation\`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: \`\${baseUrl}/hvac-business-valuation-calculator\`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.85 },
    { url: \`\${baseUrl}/listings\`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.85 },
    { url: \`\${baseUrl}/buyer-process\`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.85 },
    { url: \`\${baseUrl}/why-sell-with-us\`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: \`\${baseUrl}/how-it-works\`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: \`\${baseUrl}/about-us\`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: \`\${baseUrl}/contact-us\`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: \`\${baseUrl}/faqs\`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: \`\${baseUrl}/seller-guides\`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: \`\${baseUrl}/buyer-guides\`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: \`\${baseUrl}/resources/real-number-evaluating-hvac\`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.75 },
    { url: \`\${baseUrl}/resources/timing-purchase-florida\`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.75 },
    { url: \`\${baseUrl}/resources/hvac-business-multiples-explained\`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.75 },
    { url: \`\${baseUrl}/resources/florida-hvac-industry-guide\`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.75 },
    ...listingRoutes,
    ...cityRoutes,
    { url: \`\${baseUrl}/privacy-policy\`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
    { url: \`\${baseUrl}/terms-of-service\`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 }
  ];
}
`;
fs.writeFileSync('src/app/sitemap.ts', content);
console.log("Rewrote sitemap.ts correctly");
