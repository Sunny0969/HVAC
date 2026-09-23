const fs = require('fs');

function patchFile(filepath) {
  let content = fs.readFileSync(filepath, 'utf8');
  if (content.includes('const listing = await getListing(slug);')) {
    const fixCode = `
  const listing = await getListing(slug);
  if (listing && listing.coverImage && listing.coverImage.includes('1622322363167')) {
    listing.coverImage = "https://res.cloudinary.com/db05hw4ri/image/upload/v1789679440/hvac-assets/unsplash_asset_2_1789679439333.jpg";
  }`;
    content = content.replace('const listing = await getListing(slug);', fixCode);
    fs.writeFileSync(filepath, content);
    console.log("Patched " + filepath);
  }
}

patchFile('src/app/listings/[slug]/page.tsx');

let lcContent = fs.readFileSync('src/views/components/ListingsContent.tsx', 'utf8');
if (!lcContent.includes('1622322363167')) {
  lcContent = lcContent.replace(
    'src={listing.coverImage ||',
    'src={(listing.coverImage && listing.coverImage.includes("1622322363167") ? "https://res.cloudinary.com/db05hw4ri/image/upload/v1789679440/hvac-assets/unsplash_asset_2_1789679439333.jpg" : listing.coverImage) ||'
  );
  fs.writeFileSync('src/views/components/ListingsContent.tsx', lcContent);
  console.log("Patched ListingsContent.tsx");
}
