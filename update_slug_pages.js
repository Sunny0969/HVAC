const fs = require('fs');

function updateSlugPage(path, categoryName, categoryPath) {
    let content = fs.readFileSync(path, 'utf8');
    
    // Replace breadcrumbs logic
    content = content.replace(
        "const breadcrumbs = [\n      { name: 'Home', item: 'https://www.hvacexitadvisors.com/' },\n      { name: 'Resources', item: 'https://www.hvacexitadvisors.com/resources' },\n      { name: blog.title, item: `https://www.hvacexitadvisors.com/resources/${blog.slug}` }\n    ];",
        `const breadcrumbs = [\n      { name: 'Home', item: 'https://www.hvacexitadvisors.com/' },\n      { name: '${categoryName}', item: 'https://www.hvacexitadvisors.com${categoryPath}' },\n      { name: blog.title, item: \`https://www.hvacexitadvisors.com${categoryPath}/\${blog.slug}\` }\n    ];`
    );

    // Replace <nav> breadcrumb
    content = content.replace(
        '<Link href="/resources" className="hover:text-[#EE5B2C] transition-colors">Resources</Link>',
        `<Link href="${categoryPath}" className="hover:text-[#EE5B2C] transition-colors">${categoryName}</Link>`
    );
    
    content = content.replace(
        '/resources/${blog.slug}',
        `${categoryPath}/\${blog.slug}`
    );

    fs.writeFileSync(path, content);
}

updateSlugPage('src/app/seller-guides/[slug]/page.tsx', 'Seller Guides', '/seller-guides');
updateSlugPage('src/app/buyer-guides/[slug]/page.tsx', 'Buyer Guides', '/buyer-guides');

console.log("Updated slug pages breadcrumbs");
