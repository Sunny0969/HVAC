import { Metadata } from 'next';
import Hero from '../views/components/Hero';
import RoadmapAscent, { RoadmapStep } from '../views/components/RoadmapAscent';
import HowItWorksSteps from '../views/components/HowItWorksSteps';
import SpotlightCarousel, { CarouselItem } from '../views/components/SpotlightCarousel';
import FeaturedOpportunities from '../views/components/FeaturedOpportunities';
import TestimonialSlider from '../views/components/TestimonialSlider';
import Colonnade from '../views/components/Colonnade';
import { differentiators } from '../data/differentiators';

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
  title: 'Florida HVAC Business Broker',
  description: 'The premier Florida HVAC business broker helping owners sell and buyers acquire commercial and residential HVAC businesses. Get your free valuation today!',
  alternates: {
    canonical: 'https://www.hvacexitadvisors.com',
  },
  openGraph: {
    title: 'Florida HVAC Business Broker | HVAC Exit Advisors',
    description: 'The premier Florida HVAC business broker helping owners sell and buyers acquire commercial and residential HVAC businesses. Get your free valuation today!',
    url: 'https://www.hvacexitadvisors.com',
    type: 'website',
  },
};

const homeSteps: RoadmapStep[] = [
  { title: "Valuation", description: "Establish maximum market value.", day: "PHASE 1" },
  { title: "Marketing", description: "Discrete blind profiles to vetted buyers.", day: "PHASE 2" },
  { title: "Matching & Negotiation", description: "Qualify buyers and structure optimal LOIs.", day: "PHASE 3" },
  { title: "The Close", description: "Due diligence, signatures, and wire transfers.", day: "PHASE 4" }
];



const testimonials: CarouselItem[] = [
  { id: 1, title: "John D.", subtitle: "Former Owner, Sunshine Cooling", content: "They understood exactly how to value our recurring revenue. We sold for 30% more than my CPA estimated.", rating: 5 },
  { id: 2, title: "Sarah M.", subtitle: "Buyer, Tampa FL", content: "The diligence process was incredibly smooth. The blind profile matched the actual numbers perfectly.", rating: 5 },
  { id: 3, title: "Robert & Elaine P.", subtitle: "Retired Founders", content: "Selling a family business of 40 years is emotional. HVAC Exit Advisors handled the transition with absolute grace and discretion.", rating: 5 }
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
    image: l.coverImage || "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=600&q=75"
  }));

  const homeSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": "https://www.hvacexitadvisors.com/#localbusiness",
    "name": "HVAC Exit Advisors",
    "url": "https://www.hvacexitadvisors.com",
    "image": "https://www.hvacexitadvisors.com/florida-hvac-business-broker-home.jpg",
    "description": "Florida's premier HVAC business broker helping owners sell and buyers acquire profitable commercial and residential HVAC businesses.",
    "telephone": "+1-954-864-9161",
    "priceRange": "$$$$",
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
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": 4.9,
      "reviewCount": 48,
      "bestRating": 5,
      "worstRating": 1
    },
    "review": [
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "John D."
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": 5,
          "bestRating": 5
        },
        "reviewBody": "They understood exactly how to value our recurring revenue. We sold for 30% more than my CPA estimated."
      },
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Sarah M."
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": 5,
          "bestRating": 5
        },
        "reviewBody": "The diligence process was incredibly smooth. The blind profile matched the actual numbers perfectly."
      },
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Robert & Elaine P."
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": 5,
          "bestRating": 5
        },
        "reviewBody": "Selling a family business of 40 years is emotional. HVAC Exit Advisors handled the transition with absolute grace and discretion."
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeSchema) }}
      />
      <Hero />
      <HowItWorksSteps />
      
      {/* Why Sell With Us - Reused from shared data */}
      <section className="w-full bg-[#F7F5F0] py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-black text-[#022B3A] mb-4 tracking-tight">Why Sell With Us?</h2>
          <p className="text-xl text-secondary font-semibold">The HVAC Brokerage Advantage</p>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Colonnade items={differentiators} />
        </div>
      </section>

      {realFeaturedListings.length > 0 && <FeaturedOpportunities items={realFeaturedListings} />}
      <TestimonialSlider items={testimonials} />
    </>
  );
}
