const fs = require('fs');

const sgPath = 'src/app/seller-guides/page.tsx';
let sgContent = fs.readFileSync(sgPath, 'utf8');
sgContent = sgContent.replace(
  /\.filter\(\(b: any\) => b\.slug === "[^"]+" \|\| b\.slug === "[^"]+"\)/,
  '.filter((b: any) => b.guideType === "seller-guide")'
);
fs.writeFileSync(sgPath, sgContent);

const bgPath = 'src/app/buyer-guides/page.tsx';
let bgContent = fs.readFileSync(bgPath, 'utf8');
bgContent = bgContent.replace(
  /\.filter\(\(b: any\) => b\.slug === "[^"]+" \|\| b\.slug === "[^"]+"\)/,
  '.filter((b: any) => b.guideType === "buyer-guide")'
);
fs.writeFileSync(bgPath, bgContent);

const sitemapPath = 'src/app/sitemap.ts';
let sitemapContent = fs.readFileSync(sitemapPath, 'utf8');
sitemapContent = sitemapContent.replace(
  /const sellerBlogSlugs = \[.*\];\s*const buyerBlogSlugs = \[.*\];\s*const blogRoutes = blogsData\.map\(\(blog: any\) => \{\s*let prefix = 'resources';\s*if \(sellerBlogSlugs\.includes\(blog\.slug\)\) \{\s*prefix = 'seller-guides';\s*\} else if \(buyerBlogSlugs\.includes\(blog\.slug\)\) \{\s*prefix = 'buyer-guides';\s*\}/g,
  `const blogRoutes = blogsData.map((blog: any) => {
    let prefix = 'resources';
    if (blog.guideType === 'seller-guide') {
      prefix = 'seller-guides';
    } else if (blog.guideType === 'buyer-guide') {
      prefix = 'buyer-guides';
    }`
);
fs.writeFileSync(sitemapPath, sitemapContent);

console.log("Updated filters to use guideType");
