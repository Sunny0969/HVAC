const fs = require('fs');

// 1. Delete resources/page.tsx
if (fs.existsSync('src/app/resources/page.tsx')) {
  fs.unlinkSync('src/app/resources/page.tsx');
  console.log('Deleted resources/page.tsx');
}

// 2. Update navigationModel.ts
const navPath = 'src/models/navigationModel.ts';
let navContent = fs.readFileSync(navPath, 'utf8');
navContent = navContent.replace(/\{ label: "Seller Guides", href: "\/resources" \}/, '{ label: "Seller Guides", href: "/seller-guides" }');
navContent = navContent.replace(/\{ label: "Buyer Guides", href: "\/resources" \}/, '{ label: "Buyer Guides", href: "/buyer-guides" }');
navContent = navContent.replace(/\{ label: "Industry Reports", href: "\/resources" \},\s*/, ''); // Remove Industry Reports since it points to resources
fs.writeFileSync(navPath, navContent);

// 3. Update Header.tsx (if it hardcodes /resources anywhere)
const headerPath = 'src/views/components/Header.tsx';
let headerContent = fs.readFileSync(headerPath, 'utf8');
headerContent = headerContent.replace(/"\/resources"/g, '"/seller-guides"'); // Or maybe just let the navModel handle it
fs.writeFileSync(headerPath, headerContent);

// 4. Update Footer.tsx 
const footerPath = 'src/views/components/Footer.tsx';
let footerContent = fs.readFileSync(footerPath, 'utf8');
footerContent = footerContent.replace(/"\/resources"/g, '"/seller-guides"');
fs.writeFileSync(footerPath, footerContent);

// 5. Update sitemap.ts
const sitemapPath = 'src/app/sitemap.ts';
let sitemapContent = fs.readFileSync(sitemapPath, 'utf8');
sitemapContent = sitemapContent.replace(/url: `\$\{baseUrl\}\/resources`,[\s\S]*?priority: 0\.8,/, 'url: `${baseUrl}/seller-guides`,\n      lastModified: new Date(),\n      changeFrequency: "weekly",\n      priority: 0.8,\n    },\n    {\n      url: `${baseUrl}/buyer-guides`,\n      lastModified: new Date(),\n      changeFrequency: "weekly",\n      priority: 0.8,');
fs.writeFileSync(sitemapPath, sitemapContent);

console.log('Updated navigation and deleted root resources page.');
