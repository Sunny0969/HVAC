import { Metadata } from 'next';
import Hero from '../views/components/Hero';
import WhatBuyersEvaluate from '../views/components/WhatBuyersEvaluate';
import WhyOwnersContactUs from '../views/components/WhyOwnersContactUs';
import ClosingSection from '../views/components/ClosingSection';
import RoadmapAscent, { RoadmapStep } from '../views/components/RoadmapAscent';
import HowItWorksSteps from '../views/components/HowItWorksSteps';
import IndustriesWeServe from '../views/components/IndustriesWeServe';
import AreasWeServe from '../views/components/AreasWeServe';
import SpotlightCarousel, { CarouselItem } from '../views/components/SpotlightCarousel';
import MarketInsightsFAQ from '../views/components/MarketInsightsFAQ';
import FeaturedOpportunities from '../views/components/FeaturedOpportunities';
import TestimonialSlider from '../views/components/TestimonialSlider';
import HomeTopSummary from '../views/components/HomeTopSummary';
import HomeFaq from '../views/components/HomeFaq';

let _rootUrl = (process.env.NEXT_PUBLIC_CMS_API_URL || "http://127.0.0.1:4000").trim();
_rootUrl = _rootUrl.replace(/\/api\/public\/?$/, '').replace(/\/api\/?$/, '').replace(/\/$/, '');
const API_URL = `${_rootUrl}/api/public`;

async function getFeaturedListings() {
  try {
    const res = await fetch(`${API_URL}/listings`, { next: { revalidate: 60 } });
    if (!res.ok) return [];
    const data = await res.json();
    return data.listings || [];
  } catch (error) {
    return [];
  }
}

const formatMoney = (val?: number) => {
  if (val == null || val === 0) return '---';
  if (val >= 1000000) return `${(val / 1000000).toFixed(1)}M`;
  if (val >= 1000) return `${Math.round(val / 1000)}k`;
  return `${val}`;
};


export const metadata: Metadata = {
  title: 'Florida HVAC Business Broker and Valuation Advisor',
  description: 'Confidential guidance for selling, valuing or buying HVAC, refrigeration and mechanical-service businesses in Florida.',
  alternates: {
    canonical: 'https://www.hvacexitadvisors.com',
  },
  openGraph: {
    title: 'Florida HVAC Business Broker and Valuation Advisor',
    description: 'Confidential guidance for selling, valuing or buying HVAC, refrigeration and mechanical-service businesses in Florida.',
    url: 'https://www.hvacexitadvisors.com',
    type: 'website',
    images: [{ url: "https://www.hvacexitadvisors.com/why-sell-with-us.jpg" }]
  },
};

const homeSteps: RoadmapStep[] = [
  { title: "Consultation", description: "Private consultation to understand your objectives and timing.", day: "PHASE 1" },
  { title: "Financial Review", description: "Financial and operational review to identify value drivers and concerns.", day: "PHASE 2" },
  { title: "Market Positioning", description: "Market positioning and preparation of confidential buyer materials.", day: "PHASE 3" },
  { title: "Buyer Outreach", description: "Controlled outreach to qualified buyers and investors.", day: "PHASE 4" },
  { title: "The Close", description: "Offer review, contract coordination, due diligence and closing support.", day: "PHASE 5" }
];





export const revalidate = 60;

export default async function Home() {
  const listingsData = await getFeaturedListings();
  const realFeaturedListings = listingsData.slice(0, 5).map((l: any) => ({
    id: l._id,
    title: l.title,
    subtitle: l.location || "Location not specified",
    content: (l.description || l.title).replace(/<[^>]*>?/gm, "").substring(0, 150) + "...",
    tags: [`${formatMoney(l.revenue)} Revenue`, `${formatMoney(l.cashFlow)} Cash Flow`],
    href: `/listings/${l.slug}`,
    image: (l.coverImage && l.coverImage.includes('1622322363167')) ? "https://res.cloudinary.com/db05hw4ri/image/upload/v1789679440/hvac-assets/unsplash_asset_2_1789679439333.jpg" : l.coverImage || "https://res.cloudinary.com/db05hw4ri/image/upload/v1789679440/hvac-assets/unsplash_asset_2_1789679439333.jpg"
  }));

  const baseSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": "https://www.hvacexitadvisors.com/#localbusiness",
    "name": "HVAC Exit Advisors",
    "url": "https://www.hvacexitadvisors.com",
    "image": "https://www.hvacexitadvisors.com/florida-hvac-business-broker-home.jpg",
    "description": "Florida's premier HVAC business broker helping owners sell and buyers acquire profitable commercial and residential HVAC businesses.",
    "telephone": "+1-954-864-9161",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "10242 NW 47th St, Ste 39C",
      "addressLocality": "Sunrise",
      "addressRegion": "FL",
      "postalCode": "33351",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 26.1587,
      "longitude": -80.2858
    },
    "areaServed": [
      {
        "@type": "State",
        "name": "Florida"
      }
    ],
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "08:00",
        "closes": "18:00"
      }
    ]
  };

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://www.hvacexitadvisors.com/#webpage",
    "url": "https://www.hvacexitadvisors.com",
    "name": "Florida HVAC Business Broker & M&A Advisors",
    "description": "The premier Florida HVAC business broker. Buy or sell your Florida HVAC company with our confidential valuation and M&A advisory services.",
    "publisher": {
      "@id": "https://www.hvacexitadvisors.com/#organization"
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.hvacexitadvisors.com"
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What types of companies does HVAC Exit Advisors represent?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We focus on HVAC and related mechanical-service businesses, including residential and commercial heating and cooling contractors, refrigeration companies, maintenance-agreement businesses, indoor-air-quality providers, ductwork and controls specialists, and selected plumbing or electrical contractors connected to mechanical services."
        }
      },
      {
        "@type": "Question",
        "name": "Can I speak with an advisor before deciding to sell?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. An initial confidential conversation can help you understand likely value drivers, records buyers may request, possible timing, and whether the company is ready for the market. You are not required to make an immediate decision to sell."
        }
      },
      {
        "@type": "Question",
        "name": "How is confidentiality protected during an HVAC business sale?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The business can be marketed through a blind profile that excludes identifying details. Prospective buyers should sign a nondisclosure agreement and provide financial qualification before receiving protected information or speaking with the seller."
        }
      },
      {
        "@type": "Question",
        "name": "What makes an HVAC business attractive to buyers?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Buyers commonly examine adjusted earnings, recurring maintenance agreements, technician retention, management depth, service and replacement revenue, customer concentration, licensing arrangements, fleet condition, accurate records, reputation, and the degree to which the company can operate without the owner."
        }
      }
    ]
  };
  
  const homeSchema = [baseSchema, webPageSchema, breadcrumbSchema, faqSchema];


  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeSchema) }}
      />
      
      {/* 1. Hero Section */}
      <Hero />
      
      {/* 1.5 Top Summary & SEO Content */}
      <HomeTopSummary />

      {/* 2. Industries We Serve */}
      <IndustriesWeServe />

      {/* 3. What Buyers Evaluate */}
      <WhatBuyersEvaluate />

      {/* 4. How it Works */}
      <HowItWorksSteps />
      
      {/* 5. Why Owners Contact Us */}
      <WhyOwnersContactUs />

      

      {/* 5. Market Insights */}
      <MarketInsightsFAQ />

      {/* 6. Featured Opportunities */}
      {realFeaturedListings.length > 0 && <FeaturedOpportunities items={realFeaturedListings} />}

      {/* 7. Areas We Serve */}
      <AreasWeServe />

      {/* 8. Reviews (Testimonials) */}
      

      {/* 9. Explicit FAQ Section (Moved to Bottom) */}
      <HomeFaq />

      {/* 10. Closing Section */}
      <ClosingSection />
    </>
  );
}


