import { Metadata } from "next";
import Image from "next/image";
import BreadcrumbSchema from "@/views/components/BreadcrumbSchema";
import ResourcesContent from "@/views/components/ResourcesContent";

const _base = (process.env.NEXT_PUBLIC_CMS_API_URL || "http://127.0.0.1:4000/api").replace(/\/$/, '');
const API_URL = _base.endsWith('/public') ? _base : _base + '/public';

export const metadata: Metadata = {
  title: "HVAC Business Resources & Exit Guides | Florida",
  description: "Explore comprehensive guides, valuation multiples, and market trend reports for Florida HVAC business owners and buyers. Read our expert resources now!",
  alternates: {
    canonical: "https://www.hvacexitadvisors.com/resources",
  },
  openGraph: {
    title: "HVAC Business Resources & Exit Guides | Florida | HVAC Exit Advisors",
    description: "Explore comprehensive guides, valuation multiples, and market trend reports for Florida HVAC business owners and buyers.",
    url: "https://www.hvacexitadvisors.com/resources",
  },
};

const staticArticles = [
  {
    title: "What's the Real Number That Matters When Evaluating an HVAC Business?",
    category: "Acquisition Guide",
    description: "Understand why gross revenue can be deceptive and why normalized Seller's Discretionary Earnings (SDE) and recurring maintenance agreements dictate true value.",
    href: "/resources/real-number-evaluating-hvac",
    readTime: "6 min read",
  },
  {
    title: "Timing Your HVAC Business Purchase: What Florida Buyers Should Know",
    category: "Market Trends",
    description: "How Florida's intensive cooling season and shoulder months impact working capital, technician onboarding, and first-year cash flow.",
    href: "/resources/timing-purchase-florida",
    readTime: "5 min read",
  },
  {
    title: "HVAC Business Valuation Multiples Explained: SDE vs. EBITDA",
    category: "Valuation Deep Dive",
    description: "A comprehensive breakdown of multiples applied to mechanical contractors, what drives premium 4x+ valuations, and how private equity evaluates your shop.",
    href: "/resources/hvac-business-multiples-explained",
    readTime: "7 min read",
  },
];

export default async function ResourcesPage() {
  let cmsBlogs: any[] = [];
  try {
    const res = await fetch(`${API_URL}/blogs`, { next: { revalidate: 60 } });
    if (res.ok) {
      const data = await res.json();
      cmsBlogs = data.blogs || [];
    }
  } catch {
    // ignore
  }

  const breadcrumbs = [
    { name: "Home", item: "https://www.hvacexitadvisors.com/" },
    { name: "Resources", item: "https://www.hvacexitadvisors.com/resources" },
  ];

  const hubSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Florida HVAC Business Valuation & M&A Resources",
    "description": "Guides, financial analyses, and educational resources for Florida HVAC business owners and prospective buyers.",
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": staticArticles.map((article, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": article.title,
        "description": article.description,
        "url": `https://www.hvacexitadvisors.com${article.href}`,
      })),
    },
  };

  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(hubSchema) }}
      />
      <main className="min-h-screen flex flex-col bg-[#F7F5F0]">

        {/* Hero Section - compact */}
        <section className="relative w-full h-[50dvh] overflow-hidden bg-gray-900 text-white flex items-center justify-center">
          <div className="absolute inset-0 z-0">
            <Image
              src="/florida-hvac-business-valuation.jpg"
              alt="Florida HVAC business resources and valuation guides"
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30" />
          </div>

          <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left mt-24 md:mt-28">
            <h1 className="max-w-3xl text-2xl md:text-3xl lg:text-4xl font-black mb-3 leading-tight tracking-tight drop-shadow-xl">
              HVAC Business <span className="text-[#EE5B2C]">Resources</span> &amp; Advisory
            </h1>
            <p className="max-w-xl text-sm md:text-base text-white/85 leading-relaxed font-medium drop-shadow-md">
              In-depth valuation methodologies, market insights, and transition strategies written by Florida HVAC brokerage veterans.
            </p>
          </div>
        </section>

        {/* Main Content - two columns with sticky sidebar */}
        <div id="articles">
          <ResourcesContent staticArticles={staticArticles} cmsBlogs={cmsBlogs} />
        </div>

      </main>
    </>
  );
}
