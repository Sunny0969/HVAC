import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import BreadcrumbSchema from '@/views/components/BreadcrumbSchema';
import ListingLeadForm from '@/views/components/ListingLeadForm';

let _rootUrl = (process.env.NEXT_PUBLIC_CMS_API_URL || "http://127.0.0.1:4000").trim();
_rootUrl = _rootUrl.replace(/\/api\/public\/?$/, '').replace(/\/api\/?$/, '').replace(/\/$/, '');
const API_URL = `${_rootUrl}/api/public`;

async function getAllListings() {
  try {
    const res = await fetch(`${API_URL}/listings`, { next: { revalidate: 60 } });
    if (!res.ok) return [];
    const data = await res.json();
    return data.listings || [];
  } catch (error) {
    return [];
  }
}

async function getListing(slug: string) {
  try {
    const res = await fetch(`${API_URL}/listings/${slug}`, { next: { revalidate: 60 } });
    if (!res.ok) return null;
    const data = await res.json();
    return data.listing;
  } catch {
    return null;
  }
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const [listing, allListings] = await Promise.all([
    getListing(slug),
    getAllListings()
  ]);
  const otherListings = allListings.filter((l: any) => l._id !== listing?._id).slice(0, 10);
  if (!listing) return { title: 'Not Found' };

  const title = listing.seo?.metaTitle || `${listing.title} | HVAC Business for Sale`;
  const description = listing.seo?.metaDescription || `View details for ${listing.title}. Asking price: $${listing.askingPrice}, Revenue: $${listing.revenue}.`;
  
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: listing.coverImage ? [{ url: listing.coverImage }] : [],
    },
    alternates: {
      canonical: `https://www.hvacexitadvisors.com/listings/${listing.slug}`,
    }
  };
}

export default async function ListingDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const [listing, allListings] = await Promise.all([
    getListing(slug),
    getAllListings()
  ]);
  const otherListings = allListings.filter((l: any) => l._id !== listing?._id).slice(0, 10);

  if (!listing) {
    notFound();
  }

  const breadcrumbs = [
    { name: "Home", item: "https://www.hvacexitadvisors.com/" },
    { name: "Listings", item: "https://www.hvacexitadvisors.com/listings" },
    { name: listing.title, item: `https://www.hvacexitadvisors.com/listings/${listing.slug}` },
  ];

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": listing.title,
    "image": listing.coverImage || "",
    "description": listing.seo?.metaDescription || listing.title,
    "offers": {
      "@type": "Offer",
      "priceCurrency": "USD",
      "price": listing.askingPrice || 0,
      "availability": listing.status === 'Active' ? "https://schema.org/InStock" : "https://schema.org/SoldOut",
      "itemCondition": "https://schema.org/UsedCondition"
    }
  };

  let faqSchema = null;
  if (listing.faqs && listing.faqs.length > 0) {
    faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": listing.faqs.map((f: any) => ({
        "@type": "Question",
        "name": f.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": f.answer
        }
      }))
    };
  }

  const formatMoney = (val?: number) => {
    if (val == null || val === 0) return '---';
    if (val >= 1000000) return `$${(val / 1000000).toFixed(2)}m`;
    if (val >= 1000) return `$${Math.round(val / 1000)}k`;
    return `$${val}`;
  };

  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
      {faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />}
      
      <main className="min-h-screen bg-[#F7F5F0] py-12 md:py-24 mt-16 md:mt-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div className="flex flex-col lg:flex-row gap-8"><div className="flex-1 w-full lg:max-w-[70%]">
          
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden mb-8">
            {listing.coverImage && (
              <div className="w-full h-64 md:h-96 relative bg-gray-100">
                <img src={listing.coverImage} alt={listing.coverImageAlt || listing.title} className="w-full h-full object-cover" />
              </div>
            )}
            
            <div className="p-8 md:p-12">
              <div className="flex justify-between items-start mb-4">
                <span className="text-sm font-bold text-gray-500 uppercase tracking-wider">{listing.industry}</span>
                <span className={`px-3 py-1 rounded-full text-sm font-bold ${listing.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-orange-100 text-orange-800'}`}>
                  {listing.status}
                </span>
              </div>
              
              <h1 className="text-3xl md:text-5xl font-black text-[#022B3A] leading-tight mb-4">
                {listing.title}
              </h1>
              
              <div className="text-gray-500 flex items-center mb-8 text-lg">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                {listing.location || 'Location not specified'}
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-6 bg-gray-50 rounded-xl border border-gray-100">
                <div>
                  <p className="text-sm text-gray-500 mb-1 font-bold">Asking Price</p>
                  <p className="text-2xl font-black text-[#022B3A]">{formatMoney(listing.askingPrice)}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1 font-bold">Revenue</p>
                  <p className="text-xl font-bold text-gray-800">{formatMoney(listing.revenue)}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1 font-bold">EBITDA</p>
                  <p className="text-xl font-bold text-gray-800">{formatMoney(listing.ebitda)}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1 font-bold">Cash Flow</p>
                  <p className="text-xl font-bold text-gray-800">{formatMoney(listing.cashFlow)}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12 mb-8">
            <h2 className="text-2xl font-black text-[#022B3A] mb-6">Listing Description</h2>
            <div className="prose prose-lg prose-blue max-w-none text-gray-600 leading-relaxed mb-10" dangerouslySetInnerHTML={{ __html: listing.description || 'No description provided.' }} />

            <div className="grid md:grid-cols-2 gap-y-8 gap-x-12">
              {listing.realEstate && (
                <div>
                  <h3 className="text-lg font-bold text-[#022B3A] mb-2">Real Estate</h3>
                  <p className="text-gray-600">{listing.realEstate}</p>
                </div>
              )}
              {listing.ffe && (
                <div>
                  <h3 className="text-lg font-bold text-[#022B3A] mb-2">Furniture, Fixtures & Equipment</h3>
                  <p className="text-gray-600">{listing.ffe}</p>
                </div>
              )}
              {listing.inventory && (
                <div>
                  <h3 className="text-lg font-bold text-[#022B3A] mb-2">Inventory</h3>
                  <p className="text-gray-600">{listing.inventory}</p>
                </div>
              )}
              {listing.employees && (
                <div>
                  <h3 className="text-lg font-bold text-[#022B3A] mb-2">Number of Employees</h3>
                  <p className="text-gray-600">{listing.employees}</p>
                </div>
              )}
              {listing.yearEstablished && (
                <div>
                  <h3 className="text-lg font-bold text-[#022B3A] mb-2">Year Established</h3>
                  <p className="text-gray-600">{listing.yearEstablished}</p>
                </div>
              )}
              {listing.reasonSelling && (
                <div>
                  <h3 className="text-lg font-bold text-[#022B3A] mb-2">Reason for Selling</h3>
                  <p className="text-gray-600">{listing.reasonSelling}</p>
                </div>
              )}
            </div>

            {(listing.supportTraining || listing.marketCompetition) && (
              <div className="mt-8 pt-8 border-t border-gray-100 space-y-8">
                {listing.supportTraining && (
                  <div>
                    <h3 className="text-lg font-bold text-[#022B3A] mb-2">Support & Training</h3>
                    <p className="text-gray-600">{listing.supportTraining}</p>
                  </div>
                )}
                {listing.marketCompetition && (
                  <div>
                    <h3 className="text-lg font-bold text-[#022B3A] mb-2">Market & Competition</h3>
                    <p className="text-gray-600">{listing.marketCompetition}</p>
                  </div>
                )}
              </div>
            )}
          </div>

          {listing.faqs && listing.faqs.length > 0 && (
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12 mb-8">
              <h2 className="text-2xl font-black text-[#022B3A] mb-6">Frequently Asked Questions</h2>
              <div className="space-y-6">
                {listing.faqs.map((faq: any, i: number) => (
                  <div key={i}>
                    <h3 className="text-lg font-bold text-[#022B3A] mb-2">{faq.question}</h3>
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          <ListingLeadForm listingTitle={listing.title} />
            </div>

            <aside className="w-full lg:w-[30%] flex-shrink-0">
              <div className="sticky top-28 bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <h3 className="text-xl font-black text-[#022B3A] mb-4 border-b border-gray-100 pb-3">Other Listings</h3>
                <div className="space-y-5">
                  {otherListings.map((l: any) => (
                    <a href={`/listings/${l.slug}`} key={l._id} className="block group">
                      <h4 className="text-gray-800 font-bold group-hover:text-[#EE5B2C] transition-colors leading-snug">{l.title}</h4>
                      {l.location && <p className="text-xs text-gray-500 mt-1">{l.location}</p>}
                    </a>
                  ))}
                  {otherListings.length === 0 && <p className="text-sm text-gray-500">No other listings available.</p>}
                </div>
              </div>
            </aside>
          </div>

        </div>
      </main>
    </>
  );
}
