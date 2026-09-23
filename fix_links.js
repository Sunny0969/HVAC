const fs = require('fs');

// 1. Fix next.config.ts redirects
let configContent = fs.readFileSync('next.config.ts', 'utf8');
if (!configContent.includes("source: '/free-valuation'")) {
  const redirectsInsert = `
      {
        source: '/free-valuation',
        destination: '/free-confidential-valuation',
        permanent: true,
      },`;
  
  // Find where redirects array starts
  configContent = configContent.replace('async redirects() {\n    return [', `async redirects() {\n    return [${redirectsInsert}`);
  fs.writeFileSync('next.config.ts', configContent);
  console.log("Updated next.config.ts with /free-valuation redirect.");
}

// 2. Fix page.tsx Unsplash URL mapping
let pageContent = fs.readFileSync('src/app/page.tsx', 'utf8');
const searchImg = `image: l.coverImage ||`;
const replaceImg = `image: (l.coverImage && l.coverImage.includes('1622322363167')) ? "https://res.cloudinary.com/db05hw4ri/image/upload/v1789679440/hvac-assets/unsplash_asset_2_1789679439333.jpg" : l.coverImage ||`;

if (pageContent.includes(searchImg) && !pageContent.includes('1622322363167')) {
  pageContent = pageContent.replace(searchImg, replaceImg);
  fs.writeFileSync('src/app/page.tsx', pageContent);
  console.log("Updated page.tsx with image fallback.");
} else {
  console.log("page.tsx not updated or already contains fix.");
}

