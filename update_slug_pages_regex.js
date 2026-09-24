const fs = require('fs');

function updateSlugPage(path, categoryName, categoryPath) {
    let content = fs.readFileSync(path, 'utf8');
    
    // Replace breadcrumbs logic using regex since it might have different spacing/quotes
    const breadcrumbRegex = /const breadcrumbs = \[\s*\{\s*name:\s*['"]Home['"],\s*item:\s*['"]https:\/\/www\.hvacexitadvisors\.com\/['"]\s*\},\s*\{\s*name:\s*['"][^'"]+['"],\s*item:\s*['"][^'"]+['"]\s*\},\s*\{\s*name:\s*blog\.title,\s*item:\s*`https:\/\/www\.hvacexitadvisors\.com\/resources\/\$\{slug\}`\s*\}\s*,?\s*\];/;
    
    const newBreadcrumb = `const breadcrumbs = [
    { name: "Home", item: "https://www.hvacexitadvisors.com/" },
    { name: "${categoryName}", item: "https://www.hvacexitadvisors.com${categoryPath}" },
    { name: blog.title, item: \`https://www.hvacexitadvisors.com${categoryPath}/\${slug}\` },
  ];`;
  
    content = content.replace(breadcrumbRegex, newBreadcrumb);

    const navRegex = /<Link href="\/seller-guides" className="hover:text-\[#EE5B2C\] transition-colors font-semibold">Guides<\/Link>/;
    content = content.replace(navRegex, `<Link href="${categoryPath}" className="hover:text-[#EE5B2C] transition-colors font-semibold">${categoryName}</Link>`);
    
    fs.writeFileSync(path, content);
}

updateSlugPage('src/app/seller-guides/[slug]/page.tsx', 'Seller Guides', '/seller-guides');
updateSlugPage('src/app/buyer-guides/[slug]/page.tsx', 'Buyer Guides', '/buyer-guides');
updateSlugPage('src/app/resources/[slug]/page.tsx', 'Resources', '/resources');

console.log("Updated slug pages breadcrumbs accurately");
