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
      { label: "Buyer Process", href: "/buyer-process" },
      { label: "Businesses for Sale", href: "/listings" },
    ]
  },
  {
    label: "Valuation",
    href: "#",
    children: [
      { label: "HVAC Business Valuation", href: "/hvac-business-valuation" },
      { label: "Valuation Calculator", href: "/hvac-business-valuation-calculator" },
      { label: "Value Drivers", href: "#" },
    ]
  },
  {
    label: "Resources",
    href: "#",
    children: [
      { label: "Seller Guides", href: "/seller-guides" },
      { label: "Buyer Guides", href: "/buyer-guides" },
      { label: "FAQs", href: "/faqs" },
    ]
  },
  {
    label: "About",
    href: "#",
    children: [
      { label: "About Us", href: "/about-us" },
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
  "Fort Lauderdale",
  "Boca Raton",
  "West Palm Beach",
  "Naples",
  "Fort Myers",
  "Tampa",
  "Orlando",
  "Jacksonville",
  "Sarasota"
];

export function getRegionSlugForCity(cityName: string): string {
  for (const [region, cities] of Object.entries(areasWeServeData)) {
    if (cities.includes(cityName)) {
      return region.toLowerCase().replace(/\s+/g, '-');
    }
  }
  return 'florida'; // fallback
}
