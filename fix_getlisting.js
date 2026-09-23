const fs = require('fs');

let content = fs.readFileSync('src/app/listings/[slug]/page.tsx', 'utf8');

// Undo the component specific patch
content = content.replace(`
  const listing = await getListing(slug);
  if (listing && listing.coverImage && listing.coverImage.includes('1622322363167')) {
    listing.coverImage = "https://res.cloudinary.com/db05hw4ri/image/upload/v1789679440/hvac-assets/unsplash_asset_2_1789679439333.jpg";
  }`, 'const listing = await getListing(slug);');

// Patch getListing function
const getListingFn = `async function getListing(slug: string) {
  try {
    const res = await fetch(\`\${API_URL}/listings/\${slug}\`, { next: { revalidate: 60 } });
    if (!res.ok) return null;
    const data = await res.json();
    let listing = data.listing;
    if (listing && listing.coverImage && listing.coverImage.includes('1622322363167')) {
      listing.coverImage = "https://res.cloudinary.com/db05hw4ri/image/upload/v1789679440/hvac-assets/unsplash_asset_2_1789679439333.jpg";
    }
    return listing;
  } catch {
    return null;
  }
}`;

content = content.replace(/async function getListing\(slug: string\) \{[\s\S]*?return null;\s*\}\s*\}/, getListingFn);

fs.writeFileSync('src/app/listings/[slug]/page.tsx', content);
console.log('Fixed getListing globally');
