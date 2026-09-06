export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export const navigationData: NavItem[] = [
  {
    label: "Services",
    href: "#",
    children: [
      { label: "Sell a Business", href: "/sell-your-hvac-business" },
      { label: "Buy a Business", href: "/buy-an-hvac-business" },
      { label: "Valuation Calculator", href: "/hvac-business-valuation-calculator" },
    ]
  },
  { label: "Listings", href: "/listings" },
  { label: "How It Works", href: "/how-it-works" },
  {
    label: "About",
    href: "/about-us",
    children: [
      { label: "Why Sell With Us", href: "/why-sell-with-us" },
      { label: "Meet the Team", href: "/about-us/team" },
      { label: "Success Stories", href: "/success-stories" },
      { label: "FAQs", href: "/faqs" },
    ],
  },
  { label: "Resources", href: "/resources" },
];

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
