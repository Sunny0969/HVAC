const fs = require('fs');
const file = 'src/app/page.tsx';
let text = fs.readFileSync(file, 'utf8');

// 1. Add API_URL resolving at the top
const apiCode = `
let _rootUrl = (process.env.NEXT_PUBLIC_CMS_API_URL || "http://127.0.0.1:4000").trim();
_rootUrl = _rootUrl.replace(/\\/api\\/public\\/?$/, '').replace(/\\/api\\/?$/, '').replace(/\\/$/, '');
const API_URL = \`\${_rootUrl}/api/public\`;

async function getFeaturedListings() {
  try {
    const res = await fetch(\`\${API_URL}/listings\`, { next: { revalidate: 60 } });
    if (!res.ok) return [];
    const data = await res.json();
    return data.listings || [];
  } catch (error) {
    return [];
  }
}

const formatMoney = (val?: number) => {
  if (val == null || val === 0) return '---';
  if (val >= 1000000) return \`$\${(val / 1000000).toFixed(1)}M\`;
  if (val >= 1000) return \`$\${Math.round(val / 1000)}k\`;
  return \`$\${val}\`;
};
`;

text = text.replace("import { differentiators } from '../data/differentiators';", "import { differentiators } from '../data/differentiators';\n" + apiCode);

// 2. Change `export default function Home()` to `export default async function Home()`
text = text.replace('export default function Home() {', 'export const revalidate = 60;\n\nexport default async function Home() {\n  const listingsData = await getFeaturedListings();\n  const realFeaturedListings = listingsData.slice(0, 5).map((l: any) => ({\n    id: l._id,\n    title: l.title,\n    subtitle: l.location || "Location not specified",\n    content: (l.description || l.title).replace(/<[^>]*>?/gm, "").substring(0, 150) + "...",\n    tags: [\`${formatMoney(l.revenue)} Revenue\`, \`${formatMoney(l.cashFlow)} Cash Flow\`],\n    href: \`/listings/\${l.slug}\`,\n    image: l.coverImage || "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=600&q=75"\n  }));\n');

// 3. Update the component prop
text = text.replace('<FeaturedOpportunities items={featuredListings} />', '{realFeaturedListings.length > 0 && <FeaturedOpportunities items={realFeaturedListings} />}');

// 4. Remove the hardcoded featuredListings array
const startIdx = text.indexOf('const featuredListings: CarouselItem[] = [');
if (startIdx !== -1) {
  const endIdx = text.indexOf('];', startIdx) + 2;
  text = text.substring(0, startIdx) + text.substring(endIdx);
}

fs.writeFileSync(file, text, 'utf8');
