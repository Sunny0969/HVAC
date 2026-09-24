const fs = require('fs');

function updateCanonical(path, categoryPath) {
    let content = fs.readFileSync(path, 'utf8');
    
    // It says:
    // alternates: { canonical: (blog.seo?.canonicalUrl || "").replace("/blog/", "/resources/") || `https://www.hvacexitadvisors.com/resources/${slug}` },
    const canonicalRegex = /alternates:\s*\{\s*canonical:\s*\(blog\.seo\?\.canonicalUrl\s*\|\|\s*""\)\.replace\("\/blog\/",\s*"\/resources\/"\)\s*\|\|\s*`https:\/\/www\.hvacexitadvisors\.com\/resources\/\$\{slug\}`\s*\}/;
    
    const newCanonical = `alternates: { canonical: (blog.seo?.canonicalUrl || "").replace("/blog/", "${categoryPath}/").replace("/resources/", "${categoryPath}/") || \`https://www.hvacexitadvisors.com${categoryPath}/\${slug}\` }`;
    
    content = content.replace(canonicalRegex, newCanonical);
    
    // Also fix the visual breadcrumb which was using a Link
    const navRegex2 = /<Link href="\/resources" className="hover:text-\[#EE5B2C\] transition-colors font-semibold">Resources<\/Link>/;
    content = content.replace(navRegex2, `<Link href="${categoryPath}" className="hover:text-[#EE5B2C] transition-colors font-semibold">${categoryPath.replace('/', '').replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}</Link>`);
    
    // Also fix the Schema Article URL
    content = content.replace(
      /"url":\s*`https:\/\/www\.hvacexitadvisors\.com\/resources\/\$\{slug\}`/g,
      `"url": \`https://www.hvacexitadvisors.com${categoryPath}/\${slug}\``
    );
    
    fs.writeFileSync(path, content);
}

updateCanonical('src/app/seller-guides/[slug]/page.tsx', '/seller-guides');
updateCanonical('src/app/buyer-guides/[slug]/page.tsx', '/buyer-guides');
updateCanonical('src/app/resources/[slug]/page.tsx', '/resources');

console.log("Updated canonicals and schema URLs");
