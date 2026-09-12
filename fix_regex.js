const fs = require('fs');
const file = 'src/app/listings/[slug]/page.tsx';
let text = fs.readFileSync(file, 'utf8');

text = text.replace(
  '  const { slug } = await params;\n  const listing = await getListing(slug);',
  `  const { slug } = await params;
  const [listing, allListings] = await Promise.all([
    getListing(slug),
    getAllListings()
  ]);
  const otherListings = allListings.filter((l: any) => l._id !== listing?._id).slice(0, 10);`
);

fs.writeFileSync(file, text, 'utf8');
