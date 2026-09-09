export interface Step {
  title: string;
  description: string;
  image: string;
}

export const steps: Step[] = [
  {
    title: "Valuation",
    description: "Establish maximum market value. We perform a deep-dive financial analysis to properly package your HVAC business.",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=400&q=75"
  },
  {
    title: "Marketing",
    description: "Going to market with discrete, blind profiles. We target our vetted network of private equity and strategic buyers.",
    image: "https://images.unsplash.com/photo-1557838923-2985c318be48?auto=format&fit=crop&w=400&q=75"
  },
  {
    title: "Matching & Negotiation",
    description: "We field inquiries, execute strict NDAs, qualify buyers, and structure optimal deal terms for your exit.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=75"
  },
  {
    title: "The Close",
    description: "Managing due diligence, CPA reviews, legal drafting, final signatures, and secure wire transfers.",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=400&q=75"
  }
];
