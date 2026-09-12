const fs = require('fs');
const file = 'src/app/listings/[slug]/page.tsx';
let text = fs.readFileSync(file, 'utf8');

// 1. Add getAllListings function
const getListingIndex = text.indexOf('async function getListing');
const getAllListingsCode = `async function getAllListings() {
  try {
    const res = await fetch(\`\${API_URL}/listings\`, { next: { revalidate: 60 } });
    if (!res.ok) return [];
    const data = await res.json();
    return data.listings || [];
  } catch (error) {
    return [];
  }
}\n\n`;
text = text.substring(0, getListingIndex) + getAllListingsCode + text.substring(getListingIndex);

// 2. Add fetching allListings
const fetchListingRegex = /const listing = await getListing\(slug\);/;
text = text.replace(fetchListingRegex, `const [listing, allListings] = await Promise.all([
    getListing(slug),
    getAllListings()
  ]);
  const otherListings = allListings.filter((l: any) => l._id !== listing._id).slice(0, 10);`);

// 3. Update Layout
text = text.replace('<div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">', '<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div className="flex flex-col lg:flex-row gap-8"><div className="flex-1 w-full lg:max-w-[70%]">');

const leadFormIndex = text.indexOf('<ListingLeadForm listingTitle={listing.title} />');
const sidebarHtml = `<ListingLeadForm listingTitle={listing.title} />
            </div>

            <aside className="w-full lg:w-[30%] flex-shrink-0">
              <div className="sticky top-28 bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <h3 className="text-xl font-black text-[#022B3A] mb-4 border-b border-gray-100 pb-3">Other Listings</h3>
                <div className="space-y-5">
                  {otherListings.map((l: any) => (
                    <a href={\`/listings/\${l.slug}\`} key={l._id} className="block group">
                      <h4 className="text-gray-800 font-bold group-hover:text-[#EE5B2C] transition-colors leading-snug">{l.title}</h4>
                      {l.location && <p className="text-xs text-gray-500 mt-1">{l.location}</p>}
                    </a>
                  ))}
                  {otherListings.length === 0 && <p className="text-sm text-gray-500">No other listings available.</p>}
                </div>
              </div>
            </aside>
          </div>`;
          
text = text.replace('<ListingLeadForm listingTitle={listing.title} />', sidebarHtml);

fs.writeFileSync(file, text, 'utf8');
