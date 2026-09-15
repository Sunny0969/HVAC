export interface Step {
  title: string;
  description: string;
  image: string;
}

export const steps: Step[] = [
  {
    title: "Consultation",
    description: "Private consultation to understand your objectives and timing.",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=400&q=75"
  },
  {
    title: "Financial Review",
    description: "Financial and operational review to identify value drivers and concerns.",
    image: "https://images.unsplash.com/photo-1557838923-2985c318be48?auto=format&fit=crop&w=400&q=75"
  },
  {
    title: "Market Positioning",
    description: "Market positioning and preparation of confidential buyer materials.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=75"
  },
  {
    title: "Buyer Outreach",
    description: "Controlled outreach to qualified buyers and investors.",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=400&q=75"
  },
  {
    title: "The Close",
    description: "Offer review, contract coordination, due diligence and closing support.",
    image: "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=400&q=75"
  }
];
