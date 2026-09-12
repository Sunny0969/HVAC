const fs = require('fs');
const file = 'src/app/listings/[slug]/page.tsx';
let text = fs.readFileSync(file, 'utf8');

// Reverse the mistake in generateMetadata
const mistakeRegex = /const \[listing, allListings\] = await Promise\.all\(\[\s*getListing\(slug\),\s*getAllListings\(\)\s*\]\);\s*const otherListings = allListings\.filter\(\(l: any\) => l\._id !== listing\._id\)\.slice\(0, 10\);/;
text = text.replace(mistakeRegex, 'const listing = await getListing(slug);');

// Apply it to the main component
const componentRegex = /export default async function ListingDetailPage\([^\{]*\{[^\}]*\}\s*\)\s*\{[\s\S]*?(const listing = await getListing\(slug\);)/;

const match = text.match(componentRegex);
if (match) {
  text = text.replace(match[1], `const [listing, allListings] = await Promise.all([
    getListing(slug),
    getAllListings()
  ]);
  const otherListings = allListings.filter((l: any) => l._id !== listing?._id).slice(0, 10);`);
}

fs.writeFileSync(file, text, 'utf8');
