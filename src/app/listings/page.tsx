import { Metadata } from 'next';
import ListingsContent from '@/views/components/ListingsContent';

export const metadata: Metadata = {
  title: 'HVAC Businesses for Sale | Listings',
  description: 'Browse our exclusive catalog of HVAC businesses for sale. Filter by location, revenue, and cash flow to find your next acquisition.',
};

let _rootUrl = (process.env.NEXT_PUBLIC_CMS_API_URL || "http://127.0.0.1:4000").trim();
_rootUrl = _rootUrl.replace(/\/api\/public\/?$/, '').replace(/\/api\/?$/, '').replace(/\/$/, '');
const API_URL = `${_rootUrl}/api/public`;

export const revalidate = 0; // Disable static caching completely

export default async function ListingsPage() {
  let listings: any[] = [];
  let debug = '';
  try {
    const fetchUrl = `${API_URL}/listings`;
    debug += `Fetching: ${fetchUrl} | `;
    const res = await fetch(fetchUrl, { next: { revalidate: 60 } });
    debug += `Status: ${res.status} ${res.statusText} | `;
    if (res.ok) {
      const data = await res.json();
      listings = data.listings || [];
      debug += `Data length: ${listings.length}`;
    } else {
      debug += `Res not ok.`;
    }
  } catch (error: any) {
    debug += `Error: ${error?.message || String(error)}`;
    console.error("Failed to fetch listings", error);
  }

  return (
    <main className="min-h-screen flex flex-col bg-[#F7F5F0]">
      {/* Short Hero */}
      <section className="bg-[#022B3A] text-white py-16 md:py-24 px-4 sm:px-6 lg:px-8 text-center mt-16 md:mt-0">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-black mb-4">
            HVAC Businesses <span className="text-[#EE5B2C]">for Sale</span>
          </h1>
          <p className="text-lg md:text-xl text-white/80 font-medium">
            Explore premium mechanical contractors and HVAC service businesses available for acquisition.
          </p>
          <div className="mt-4 p-2 bg-black/50 text-xs text-left overflow-hidden">DEBUG: {debug}</div>
        </div>
      </section>

      <ListingsContent listings={listings} />
    </main>
  );
}
