import { MetadataRoute } from 'next';
import { areasWeServeData } from '../models/navigationModel';

let _rootUrl = (process.env.NEXT_PUBLIC_CMS_API_URL || "http://127.0.0.1:4000").trim();
_rootUrl = _rootUrl.replace(/\/api\/public\/?$/, '').replace(/\/api\/?$/, '').replace(/\/$/, '');
const API_URL = `${_rootUrl}/api/public`;

async function getListings() {
  try {
    const res = await fetch(`${API_URL}/listings`);
    if (!res.ok) return [];
    const data = await res.json();
    return data.listings || [];
  } catch (error) {
    return [];
  }
}

async function getBlogs() {
  try {
    const res = await fetch(`${API_URL}/blogs`);
    if (!res.ok) return [];
    const data = await res.json();
    return data.blogs || [];
  } catch (error) {
    return [];
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://www.hvacexitadvisors.com';
  
  const regionRoutes: MetadataRoute.Sitemap = [];
  const cityRoutes: MetadataRoute.Sitemap = [];

  for (const [regionName, cities] of Object.entries(areasWeServeData)) {
    const regionSlug = regionName.toLowerCase().replace(/\s+/g, '-');
    
    regionRoutes.push({
      url: `${baseUrl}/${regionSlug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    });

    for (const city of cities) {
      const citySlug = city.toLowerCase().replace(/\s+/g, '-');
      cityRoutes.push({
        url: `${baseUrl}/${regionSlug}/${citySlug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.7,
      });
    }
  }

  const listingsData = await getListings();
  const listingRoutes = listingsData.map((listing: any) => ({
    url: `${baseUrl}/listings/${listing.slug}`,
    lastModified: new Date(listing.updatedAt || new Date()),
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  const blogsData = await getBlogs();
  const sellerBlogSlugs = ["hvac-business-in-florida", "florida-hvac-industry-guide"];
  const buyerBlogSlugs = ["why-every-hvac-owner-in-florida-needs-an-exit-strategy", "timing-purchase-florida"];
  
  const blogRoutes = blogsData.map((blog: any) => {
    let prefix = 'resources';
    if (sellerBlogSlugs.includes(blog.slug)) {
      prefix = 'seller-guides';
    } else if (buyerBlogSlugs.includes(blog.slug)) {
      prefix = 'buyer-guides';
    }
    
    return {
      url: `${baseUrl}/${prefix}/${blog.slug}`,
      lastModified: new Date(blog.updatedAt || new Date()),
      changeFrequency: 'monthly',
      priority: 0.75,
    };
  });

  return [
    { url: `${baseUrl}`, lastModified: new Date(), changeFrequency: 'weekly', priority: 1.0 },
    { url: `${baseUrl}/sell-your-hvac-business`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.95 },
    { url: `${baseUrl}/buy-an-hvac-business`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.95 },
    { url: `${baseUrl}/free-confidential-valuation`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/hvac-business-valuation`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/hvac-business-valuation-calculator`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.85 },
    { url: `${baseUrl}/listings`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.85 },
    { url: `${baseUrl}/buyer-process`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.85 },
    { url: `${baseUrl}/why-sell-with-us`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/how-it-works`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/about-us`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/contact-us`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/faqs`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/seller-guides`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/buyer-guides`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    ...regionRoutes,
    ...cityRoutes,
    ...listingRoutes,
    ...blogRoutes,
    { url: `${baseUrl}/privacy-policy`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
    { url: `${baseUrl}/terms-of-service`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 }
  ];
}
