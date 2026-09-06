import { Metadata } from 'next';
import RoadmapAscent, { RoadmapStep } from '../../views/components/RoadmapAscent';

export const metadata: Metadata = {
  title: 'How To Sell An HVAC Business',
  description: 'Expert services for how to sell an hvac business.',
};

const fullSteps: RoadmapStep[] = [
  { title: "Valuation & Prep", description: "Deep-dive financial analysis to establish maximum market value and package your business.", day: "DAYS 1-14" },
  { title: "Marketing Launch", description: "Going to market with discrete, blind profiles to our vetted buyer network of private equity and strategics.", day: "DAYS 15-30" },
  { title: "Buyer Matching", description: "Fielding inquiries, executing strict NDAs, and qualifying buyer financial capacity.", day: "DAYS 30-60" },
  { title: "Negotiation", description: "Reviewing LOIs and structuring the optimal deal terms for your exit, tax-efficiently.", day: "DAYS 60-90" },
  { title: "Due Diligence", description: "Managing the data room, CPA reviews, and legal drafting to keep the deal on track.", day: "DAYS 90-120" },
  { title: "The Close", description: "Final signatures, wire transfers, and securing your hard-earned legacy.", day: "DAYS 120+" }
];

export default function Page() {
  return (
    <div className="w-full">
      {/* Hidden SEO header above the cinematic stage */}
      <div className="sr-only">
        <h1>How To Sell An HVAC Business</h1>
        <h2>Step-by-step roadmap to a successful exit.</h2>
      </div>
      <RoadmapAscent steps={fullSteps} />
    </div>
  );
}
