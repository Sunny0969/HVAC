const fs = require('fs');

let content = fs.readFileSync('src/app/listings/[slug]/page.tsx', 'utf8');

// 1. Fix generateMetadata
const metaSearch = `export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const [listing, allListings] = await Promise.all([
    getListing(slug),
    getAllListings()
  ]);
  const otherListings = allListings.filter((l: any) => l._id !== listing?._id).slice(0, 10);`;

const metaReplace = `export async function generateStaticParams() {
  const listings = await getAllListings();
  return listings.map((listing: any) => ({
    slug: listing.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const listing = await getListing(slug);`;

if (content.includes(metaSearch)) {
  content = content.replace(metaSearch, metaReplace);
  console.log("Updated generateMetadata and added generateStaticParams");
} else {
  console.log("Could not find metaSearch string");
}

fs.writeFileSync('src/app/listings/[slug]/page.tsx', content);
