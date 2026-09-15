export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export const navigationData: NavItem[] = [
  {
    label: "Selling",
    href: "#",
    children: [
      { label: "Sell Your HVAC Business", href: "/sell-your-hvac-business" },
      { label: "Free Confidential Valuation", href: "/free-confidential-valuation" },
      { label: "Why Sell With Us", href: "/why-sell-with-us" },
    ]
  },
  {
    label: "Buying",
    href: "#",
    children: [
      { label: "Buy an HVAC Business", href: "/buy-an-hvac-business" },
      { label: "Buyer Process", href: "#" },
      { label: "Businesses for Sale", href: "/listings" },
    ]
  },
  { label: "Listings", href: "/listings" },
  {
    label: "Valuation",
    href: "#",
    children: [
      { label: "HVAC Business Valuation", href: "#" },
      { label: "Valuation Calculator", href: "/hvac-business-valuation" },
      { label: "Value Drivers", href: "#" },
    ]
  },
  {
    label: "Resources",
    href: "#",
    children: [
      { label: "Seller Guides", href: "/resources" },
      { label: "Buyer Guides", href: "/resources" },
      { label: "FAQs", href: "/faqs" },
      { label: "Gallery", href: "#" },
      { label: "Resources", href: "/resources" },
    ]
  },
  {
    label: "About",
    href: "#",
    children: [
      { label: "About Us", href: "/about-us" },
      { label: "Team", href: "/about-us/team" },
      { label: "How It Works", href: "/how-it-works" },
      { label: "Contact", href: "/contact-us" },
    ]
  }
];

export const areasWeServeData = {
  "South Florida": ["Miami", "Fort Lauderdale", "West Palm Beach", "Boca Raton", "Hollywood", "Pompano Beach", "Coral Springs", "Pembroke Pines", "Miramar", "Hialeah", "Homestead"],
  "Southwest Florida": ["Naples", "Fort Myers", "Cape Coral", "Bonita Springs"],
  "Central Florida": ["Orlando", "Kissimmee", "Sanford", "Lakeland", "Winter Haven"],
  "Tampa Bay": ["Tampa", "St. Petersburg", "Clearwater", "Brandon"],
  "Atlantic Coast": ["Jacksonville", "St. Augustine", "Daytona Beach", "Palm Bay", "Melbourne", "Port St. Lucie", "Fort Pierce"],
  "Gulf Coast": ["Sarasota", "Bradenton", "Venice", "North Port"],
  "North Florida": ["Tallahassee", "Gainesville", "Ocala", "Pensacola", "Panama City"]
};

export const industriesData = {
  "HVAC & Mechanical": [
    "Residential HVAC",
    "Commercial HVAC",
    "Refrigeration",
    "Plumbing",
    "Electrical",
    "Mechanical Services"
  ]
};

export const floridaCities = [
    "Miami",
    "Orlando",
    "Tampa",
    "Jacksonville",
    "Naples",
    "Fort Lauderdale",
    "Boca Raton",
    "West Palm Beach",
    "Sarasota",
    "Clearwater"
];

