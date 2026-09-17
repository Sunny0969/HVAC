import { MetadataRoute } from 'next';
import { floridaCities, getRegionSlugForCity } from '../models/navigationModel';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.hvacexitadvisors.com';
  
  const cityRoutes: MetadataRoute.Sitemap = floridaCities.map(city => {
    const slug = city.toLowerCase().replace(/\s+/g, '-');
    return {
      url: `${baseUrl}/${getRegionSlugForCity(city)}/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    };
  });

  return [
    // Core Transactional Pages
    {
      url: `${baseUrl}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/sell-your-hvac-business`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/buy-an-hvac-business`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/free-confidential-valuation`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/hvac-business-valuation`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/listings`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.85,
    },

    // High-Priority Trust & Informational Pages
    {
      url: `${baseUrl}/why-sell-with-us`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/how-it-works`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about-us`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact-us`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/faqs`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/success-stories`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/seller-guides`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/buyer-guides`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },

    // Resources & Educational Guides
    {
      url: `${baseUrl}/resources/real-number-evaluating-hvac`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.75,
    },
    {
      url: `${baseUrl}/resources/timing-purchase-florida`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.75,
    },
    {
      url: `${baseUrl}/resources/hvac-business-multiples-explained`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.75,
    },

    // Success Story Case Studies
    {
      url: `${baseUrl}/success-stories/first-time-buyer-tampa`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.75,
    },
    {
      url: `${baseUrl}/success-stories/private-equity-roll-up`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.75,
    },

    // Florida City Landing Pages
    ...cityRoutes,

    // Active Featured Listings
    {
      url: `${baseUrl}/listings/coastal-mechanical`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/listings/sunshine-cooling`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/listings/gulf-coast-refrigeration`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/listings/panhandle-hvac`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },

    // Legal & Utility Pages
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms-of-service`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    }
  ];
}

