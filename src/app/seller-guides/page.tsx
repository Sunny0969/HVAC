import { Metadata } from "next";
import Image from "next/image";
import BreadcrumbSchema from "@/views/components/BreadcrumbSchema";
import ResourcesContent from "@/views/components/ResourcesContent";

let _rootUrl = (process.env.NEXT_PUBLIC_CMS_API_URL || "http://127.0.0.1:4000").trim();
_rootUrl = _rootUrl.replace(/\/api\/public\/?$/, '').replace(/\/api\/?$/, '').replace(/\/$/, '');
const API_URL = `${_rootUrl}/api/public`;

export const metadata: Metadata = {
  title: "HVAC Seller Guides | Florida",
  description: "Explore comprehensive guides, valuation multiples, and market trend reports for Florida HVAC business owners and buyers. Read our expert resources now!",
  alternates: {
    canonical: "https://www.hvacexitadvisors.com/seller-guides",
  },
  openGraph: {
    title: "HVAC Seller Guides | Florida | HVAC Exit Advisors",
    description: "Explore comprehensive guides, valuation multiples, and market trend reports for Florida HVAC business owners and buyers.",
    url: "https://www.hvacexitadvisors.com/seller-guides",
  },
};

export default async function SellerGuidesPage() {
  let cmsBlogs: any[] = [];
  try {
    const res = await fetch(`${API_URL}/blogs`, { next: { revalidate: 60 } });
    if (res.ok) {
      const data = await res.json();
      cmsBlogs = (data.blogs || []).filter((b: any) => b.slug === "hvac-business-in-florida" || b.slug === "florida-hvac-industry-guide");
    }
  } catch {
    // ignore
  }

  const breadcrumbs = [
    { name: "Home", item: "https://www.hvacexitadvisors.com/" },
    { name: "Seller Guides", item: "https://www.hvacexitadvisors.com/seller-guides" },
  ];

  const hubSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Florida HVAC Seller Guides",
    "description": "Guides, financial analyses, and educational resources for Florida HVAC business owners and prospective buyers.",
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": cmsBlogs.map((article: any, index: number) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": article.title,
        "description": article.metaDescription || article.title,
        "url": `https://www.hvacexitadvisors.com/seller-guides/${article.slug}`,
      })),
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Who are the HVAC business resources written for?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The guides are intended for HVAC owners considering an exit, buyers evaluating acquisitions, and contractors seeking to understand valuation, preparation, licensing, financing, confidentiality, and transaction planning."
        }
      },
      {
        "@type": "Question",
        "name": "Can the guides replace legal, tax, accounting, or licensing advice?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. The resources provide general educational information. Transaction parties should retain qualified attorneys, accountants, tax advisers, lenders, insurance professionals, and licensing specialists for advice based on their circumstances."
        }
      },
      {
        "@type": "Question",
        "name": "How should a seller use the resource library?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Begin with valuation and exit-planning materials, then assemble the financial, operational, employee, contract, asset, licensing, and lease records buyers will request. Address material weaknesses before confidential marketing begins."
        }
      },
      {
        "@type": "Question",
        "name": "How should a buyer use the resource library?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Use it to establish acquisition criteria, understand qualification requirements, prepare proof of funds or financing, create a due-diligence plan, and compare risks associated with residential, commercial, service, replacement, and installation revenue."
        }
      }
    ]
  };

  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      
      <main className="min-h-screen flex flex-col bg-[#F7F5F0]">

        {/* Hero Section - compact */}
        <section className="relative w-full h-[50dvh] overflow-hidden bg-gray-900 text-white flex items-center justify-center">
          <div className="absolute inset-0 z-0">
            <Image 
              src="https://res.cloudinary.com/db05hw4ri/image/upload/v1789541566/hvac-hero-images/resources_hero_bg.jpg" 
              alt="Florida HVAC business resources and valuation guides" 
              fill
              className="object-cover object-center" 
              priority
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30" />
          </div>

          <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left mt-24 md:mt-28">
            <h1 className="max-w-3xl text-2xl md:text-3xl lg:text-4xl font-black mb-3 leading-tight tracking-tight drop-shadow-xl">
              HVAC Business <span className="text-[#EE5B2C]">Seller Guides</span>
            </h1>
            <p className="max-w-xl text-sm md:text-base text-white/85 leading-relaxed font-medium drop-shadow-md">
              In-depth valuation methodologies, market insights, and transition strategies written by Florida HVAC brokerage veterans.
            </p>
          </div>
        </section>

        {/* Main Content - two columns with sticky sidebar */}
        <div id="articles">
          <ResourcesContent staticArticles={[]} cmsBlogs={cmsBlogs} basePath="/seller-guides" />
        </div>

      </main>
    </>
  );
}
