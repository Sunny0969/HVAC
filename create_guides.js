const fs = require('fs');
const path = require('path');

// 1. Create seller-guides and buyer-guides directories
fs.mkdirSync('src/app/seller-guides', { recursive: true });
fs.mkdirSync('src/app/buyer-guides', { recursive: true });

// 2. Read resources/page.tsx
const resourcesPagePath = 'src/app/resources/page.tsx';
let resourcesContent = fs.readFileSync(resourcesPagePath, 'utf8');

// 3. Create seller-guides/page.tsx
let sellerContent = resourcesContent
  .replace(/<BreadcrumbSchema items=\{breadcrumbs\} \/>/, '<BreadcrumbSchema items={breadcrumbs} />\n      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `[${JSON.stringify(hubSchema)}]` }} />')
  .replace(/<script[\s\S]*?faqSchema\)}\]` \}\}[\s\S]*?\/>/, '')
  .replace(/HVAC Business Resources & Exit Guides \| Florida/g, 'HVAC Seller Guides | Florida')
  .replace(/Florida HVAC Business Valuation & M&A Resources/g, 'Florida HVAC Seller Guides')
  .replace(/https:\/\/www\.hvacexitadvisors\.com\/resources/g, 'https://www.hvacexitadvisors.com/seller-guides')
  .replace(/\{ name: "Resources", item: "https:\/\/www\.hvacexitadvisors\.com\/seller-guides" \}/, '{ name: "Seller Guides", item: "https://www.hvacexitadvisors.com/seller-guides" }')
  .replace(/HVAC Business <span className="text-\[#EE5B2C\]">Resources<\/span> &amp; Advisory/, 'HVAC Business <span className="text-[#EE5B2C]">Seller Guides</span>')
  .replace(/cmsBlogs = data\.blogs \|\| \[\];/, 'cmsBlogs = (data.blogs || []).filter((b: any) => b.slug === "hvac-business-in-florida" || b.slug === "florida-hvac-industry-guide");')
  .replace(/export default async function ResourcesPage/g, 'export default async function SellerGuidesPage');
  
fs.writeFileSync('src/app/seller-guides/page.tsx', sellerContent);

// 4. Create buyer-guides/page.tsx
let buyerContent = resourcesContent
  .replace(/<BreadcrumbSchema items=\{breadcrumbs\} \/>/, '<BreadcrumbSchema items={breadcrumbs} />\n      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `[${JSON.stringify(hubSchema)}]` }} />')
  .replace(/<script[\s\S]*?faqSchema\)}\]` \}\}[\s\S]*?\/>/, '')
  .replace(/HVAC Business Resources & Exit Guides \| Florida/g, 'HVAC Buyer Guides | Florida')
  .replace(/Florida HVAC Business Valuation & M&A Resources/g, 'Florida HVAC Buyer Guides')
  .replace(/https:\/\/www\.hvacexitadvisors\.com\/resources/g, 'https://www.hvacexitadvisors.com/buyer-guides')
  .replace(/\{ name: "Resources", item: "https:\/\/www\.hvacexitadvisors\.com\/buyer-guides" \}/, '{ name: "Buyer Guides", item: "https://www.hvacexitadvisors.com/buyer-guides" }')
  .replace(/HVAC Business <span className="text-\[#EE5B2C\]">Resources<\/span> &amp; Advisory/, 'HVAC Business <span className="text-[#EE5B2C]">Buyer Guides</span>')
  .replace(/cmsBlogs = data\.blogs \|\| \[\];/, 'cmsBlogs = (data.blogs || []).filter((b: any) => b.slug === "why-every-hvac-owner-in-florida-needs-an-exit-strategy" || b.slug === "timing-purchase-florida");')
  .replace(/export default async function ResourcesPage/g, 'export default async function BuyerGuidesPage');
  
fs.writeFileSync('src/app/buyer-guides/page.tsx', buyerContent);

console.log('Created seller and buyer guide pages.');
