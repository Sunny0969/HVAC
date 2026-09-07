import { Metadata } from 'next';
import Hero from '../views/components/Hero';
import RoadmapAscent, { RoadmapStep } from '../views/components/RoadmapAscent';
import SpotlightCarousel, { CarouselItem } from '../views/components/SpotlightCarousel';
import Colonnade from '../views/components/Colonnade';
import { differentiators } from '../data/differentiators';

export const metadata: Metadata = {
  title: 'Florida HVAC Business Broker',
  description: 'The premier Florida HVAC business broker.',
};

const homeSteps: RoadmapStep[] = [
  { title: "Valuation", description: "Establish maximum market value.", day: "PHASE 1" },
  { title: "Marketing", description: "Discrete blind profiles to vetted buyers.", day: "PHASE 2" },
  { title: "Matching & Negotiation", description: "Qualify buyers and structure optimal LOIs.", day: "PHASE 3" },
  { title: "The Close", description: "Due diligence, signatures, and wire transfers.", day: "PHASE 4" }
];

const featuredListings: CarouselItem[] = [
  { id: 1, title: "Coastal Mechanical Group", subtitle: "Miami, FL", content: "Highly profitable commercial HVAC contractor dominating the high-rise market.", tags: ["$8.2M Revenue", "$1.5M Cash Flow"], href: "/listings/coastal-mechanical", image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80" },
  { id: 2, title: "Sunshine Cooling & Heating", subtitle: "Orlando, FL", content: "Residential service powerhouse with 2,500+ active maintenance agreements.", tags: ["$3.1M Revenue", "$650k Cash Flow"], href: "/listings/sunshine-cooling", image: "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&q=80" },
  { id: 3, title: "Gulf Coast Refrigeration", subtitle: "Tampa, FL", content: "Niche B2B refrigeration and HVAC services for the restaurant industry.", tags: ["$4.5M Revenue", "$900k Cash Flow"], href: "/listings/gulf-coast-refrigeration", image: "https://images.unsplash.com/photo-1621905252472-747262ba94a4?auto=format&fit=crop&q=80" },
  { id: 4, title: "Panhandle HVAC Pro", subtitle: "Pensacola, FL", content: "Premier HVAC services with deep roots in the community.", tags: ["$2.2M Revenue", "$400k Cash Flow"], href: "/listings/panhandle-hvac", image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80" }
];

const testimonials: CarouselItem[] = [
  { id: 1, title: "John D.", subtitle: "Former Owner, Sunshine Cooling", content: "They understood exactly how to value our recurring revenue. We sold for 30% more than my CPA estimated.", rating: 5 },
  { id: 2, title: "Sarah M.", subtitle: "Buyer, Tampa FL", content: "The diligence process was incredibly smooth. The blind profile matched the actual numbers perfectly.", rating: 5 },
  { id: 3, title: "Robert & Elaine P.", subtitle: "Retired Founders", content: "Selling a family business of 40 years is emotional. HVAC Exit Advisors handled the transition with absolute grace and discretion.", rating: 5 }
];

export default function Home() {
  return (
    <>
      <Hero />
      <RoadmapAscent steps={homeSteps} isCompressed={true} />
      
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

      <SpotlightCarousel title="Featured Opportunities" items={featuredListings} />
      <SpotlightCarousel title="Client Success" items={testimonials} />
    </>
  );
}
