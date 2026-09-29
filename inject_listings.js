const fs = require('fs');
let file = 'src/app/[region]/[city]/page.tsx';
let content = fs.readFileSync(file, 'utf8');

if (!content.includes('import FeaturedOpportunities')) {
  content = content.replace(
    "import { cityDataMap } from '@/lib/florida-city-data';",
    "import { cityDataMap } from '@/lib/florida-city-data';\nimport FeaturedOpportunities from '@/views/components/FeaturedOpportunities';"
  );
}

// Add API base url and fetcher if not present
if (!content.includes('API_URL')) {
  const fetcherCode = `
let _rootUrl = (process.env.NEXT_PUBLIC_CMS_API_URL || "http://127.0.0.1:4000").trim();
_rootUrl = _rootUrl.replace(/\\/api\\/public\\/?$/, '').replace(/\\/api\\/?$/, '').replace(/\\/$/, '');
const API_URL = \`\${_rootUrl}/api/public\`;

async function getCityListings(citySlug: string, county: string, cityName: string) {
  try {
    const res = await fetch(\`\${API_URL}/listings\`, { next: { revalidate: 60 } });
    if (!res.ok) return [];
    const data = await res.json();
    const allListings = data.listings || [];
    
    // Filter logic
    const sCity = citySlug.toLowerCase();
    const sName = cityName.toLowerCase();
    const sCounty = (county || "").toLowerCase().replace(' county', '');
    
    return allListings.filter((l: any) => {
      if (!l.location) return false;
      const loc = l.location.toLowerCase();
      if (loc.includes(sCity) || loc.includes(sName)) return true;
      if (sCounty && loc.includes(sCounty)) return true;
      return false;
    });
  } catch (error) {
    return [];
  }
}

const formatMoney = (val?: number) => {
  if (val == null || val === 0) return '---';
  if (val >= 1000000) return \`\${(val / 1000000).toFixed(1)}M\`;
  if (val >= 1000) return \`\${Math.round(val / 1000)}k\`;
  return \`\${val}\`;
};
`;
  content = content.replace(
    'const customImages',
    fetcherCode + '\nconst customImages'
  );
}

// Add the fetch call in the component
if (!content.includes('await getCityListings')) {
  content = content.replace(
    'const lastUpdated = new Date().toISOString();',
    `const lastUpdated = new Date().toISOString();\n  \n  const rawListings = await getCityListings(citySlug, cityInfo.county, cityName);\n  const relevantListings = rawListings.slice(0, 3).map((l: any) => ({\n    id: l._id,\n    title: l.title,\n    subtitle: l.location || "Location not specified",\n    content: (l.description || l.title).replace(/<[^>]*>?/gm, "").substring(0, 150) + "...",\n    tags: [\`\${formatMoney(l.revenue)} Revenue\`, \`\${formatMoney(l.cashFlow)} Cash Flow\`],\n    href: \`/listings/\${l.slug}\`,\n    image: l.coverImage || "https://res.cloudinary.com/db05hw4ri/image/upload/v1789679440/hvac-assets/unsplash_asset_2_1789679439333.jpg"\n  }));`
  );
}

// Render FeaturedOpportunities at the end before footer
if (!content.includes('<FeaturedOpportunities')) {
  content = content.replace(
    '</main>',
    `  {relevantListings.length > 0 && (\n          <div className="bg-white">\n            <FeaturedOpportunities items={relevantListings} />\n          </div>\n        )}\n      </main>`
  );
}

fs.writeFileSync(file, content);
console.log("Injected listing fetch and display into city pages.");
