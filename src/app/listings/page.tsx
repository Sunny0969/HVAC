import { Metadata } from 'next';
import ListingsContent from '@/views/components/ListingsContent';

export const metadata: Metadata = {
  title: 'HVAC Businesses for Sale | Listings',
  description: 'Browse our exclusive catalog of HVAC businesses for sale. Filter by location, revenue, and cash flow to find your next acquisition.',
};

const _base = (process.env.NEXT_PUBLIC_CMS_API_URL || "http://127.0.0.1:4000/api").replace(/\/$/, '');
const API_URL = _base.endsWith('/public') ? _base : _base + '/public';

export default async function ListingsPage() {
  let listings: any[] = [];
  try {
    const res = await fetch(`${API_URL}/listings`, { next: { revalidate: 60 } });
    if (res.ok) {
      const data = await res.json();
      listings = data.listings || [];
    }
  } catch (error) {
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
        </div>
      </section>

      <ListingsContent listings={listings} />
    </main>
  );
}
