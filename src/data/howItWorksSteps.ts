export interface Step {
  title: string;
  description: string;
  image: string;
}

export const steps: Step[] = [
  {
    title: "Owner Consultation",
    description: "We discuss the owner's objectives, preferred timing, financial expectations, desired transition and any confidentiality concerns.",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=400&q=75"
  },
  {
    title: "Financial and Operational Review",
    description: "We examine financial statements, tax returns, service mix, maintenance agreements, staffing, fleet, licensing and owner responsibilities.",
    image: "https://images.unsplash.com/photo-1557838923-2985c318be48?auto=format&fit=crop&w=400&q=75"
  },
  {
    title: "Valuation and Market Positioning",
    description: "We estimate a supportable market range and identify the facts that should be emphasized or addressed before buyer outreach.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=75"
  },
  {
    title: "Confidential Marketing",
    description: "We prepare a blind summary and confidential information package. Marketing is directed toward buyer groups that fit the company's size, services and geography.",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=400&q=75"
  },
  {
    title: "Buyer Screening",
    description: "Prospective buyers complete an NDA and demonstrate financial capacity before receiving protected information or seller access.",
    image: "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=400&q=75"
  },
  {
    title: "Contract and Escrow",
    description: "For transactions below the firm's stated LOI threshold, the parties generally proceed through an appropriate purchase contract with an escrow deposit and a defined due-diligence period. Transactions of significant size or complexity may use an LOI when appropriate.",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=400&q=75"
  },
  {
    title: "Due Diligence",
    description: "The buyer verifies financial, operational, legal, licensing, lease, employee and asset information during the agreed review period. Extensions require agreement by the parties.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=75"
  },
  {
    title: "Closing and Transition",
    description: "The parties complete the closing conditions, finalize the transaction documents and begin the agreed ownership transition and training period.",
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=400&q=75"
  }
];

