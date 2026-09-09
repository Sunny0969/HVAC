import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import TeamPageContent from "@/views/components/TeamPageContent";
import BreadcrumbSchema from "@/views/components/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Meet Our Florida HVAC Brokerage Team",
  description: "Meet Sanjay Wadhwani and our Florida HVAC business brokerage team. Former mechanical contractors and M&A experts. Connect with our advisors today!",
  alternates: {
    canonical: "https://www.hvacexitadvisors.com/about-us/team",
  },
  openGraph: {
    title: "Meet Our Florida HVAC Brokerage Team | HVAC Exit Advisors",
    description: "Meet Sanjay Wadhwani and our Florida HVAC business brokerage team. Former mechanical contractors and M&A experts.",
    url: "https://www.hvacexitadvisors.com/about-us/team",
  },
};

export default function TeamPage() {
  const breadcrumbs = [
    { name: 'Home', item: 'https://www.hvacexitadvisors.com/' },
    { name: 'About Us', item: 'https://www.hvacexitadvisors.com/about-us' },
    { name: 'Meet the Team', item: 'https://www.hvacexitadvisors.com/about-us/team' }
  ];

  const teamSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "Meet the Florida HVAC Brokerage Team",
    "description": "Leadership and M&A advisory team at HVAC Exit Advisors, led by Sanjay Wadhwani.",
    "mainEntity": {
      "@type": "Person",
      "name": "Sanjay Wadhwani",
      "jobTitle": "Owner & Principal Advisor",
      "worksFor": {
        "@type": "Organization",
        "name": "HVAC Exit Advisors",
        "url": "https://www.hvacexitadvisors.com"
      },
      "description": "Specialized HVAC business broker with extensive experience in Florida mechanical contractor mergers, acquisitions, and valuations.",
      "knowsAbout": [
        "HVAC Business Valuation",
        "Mergers & Acquisitions",
        "Florida Mechanical Contractor Licensing",
        "EBITDA Multiple Analysis"
      ]
    }
  };

  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(teamSchema) }}
      />
      <main className="min-h-screen flex flex-col bg-gray-50">
        {/* Hero Section */}
        <section className="relative w-full h-[100dvh] overflow-hidden bg-gray-900 text-white flex items-center justify-center">
          <div className="absolute inset-0 z-0">
            <Image
              src="/florida-hvac-brokers-team.jpg"
              alt="HVAC Exit Advisors Team"
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-black/70" />
          </div>

          <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left mt-16 md:mt-0">
            <nav aria-label="Breadcrumb" className="text-sm font-semibold text-white/70 mb-6 flex items-center space-x-2">
              <Link href="/" className="hover:text-[#EE5B2C] transition-colors">Home</Link>
              <span>/</span>
              <Link href="/about-us" className="hover:text-[#EE5B2C] transition-colors">About Us</Link>
              <span>/</span>
              <span className="text-white">Our Team</span>
            </nav>

            <h1 className="max-w-4xl text-4xl md:text-5xl lg:text-7xl font-black mb-6 leading-tight tracking-tight drop-shadow-xl">
              Meet the <span className="text-[#EE5B2C]">Team</span>
            </h1>
            <p className="max-w-3xl text-xl md:text-2xl text-white/90 leading-relaxed font-medium mb-10 drop-shadow-md">
              Led by industry veteran Sanjay Wadhwani, our team combines real-world business ownership experience with top-tier M&A expertise. We don't just broker businesses - we understand them.
            </p>
          </div>
        </section>

        {/* Main Content */}
        <TeamPageContent />

        {/* Contact Us Form Section */}
        <section className="w-full bg-white py-24 border-t border-gray-100">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-black text-[#022B3A] mb-4">Ready to Discuss Your Exit?</h2>
              <p className="text-lg text-gray-600 font-medium">Contact us today for a completely confidential, no-obligation conversation.</p>
            </div>
            
            <div className="bg-gray-50 rounded-[2rem] shadow-xl shadow-gray-200/50 border border-gray-100 p-8 md:p-12">
              <form className="flex flex-col space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="team-first-name" className="block text-sm font-bold text-[#022B3A] mb-2">First Name *</label>
                    <input id="team-first-name" type="text" required className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#EE5B2C] focus:border-transparent outline-none transition-all" placeholder="John" />
                  </div>
                  <div>
                    <label htmlFor="team-last-name" className="block text-sm font-bold text-[#022B3A] mb-2">Last Name *</label>
                    <input id="team-last-name" type="text" required className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#EE5B2C] focus:border-transparent outline-none transition-all" placeholder="Doe" />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="team-email" className="block text-sm font-bold text-[#022B3A] mb-2">Email Address *</label>
                    <input id="team-email" type="email" required className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#EE5B2C] focus:border-transparent outline-none transition-all" placeholder="john@example.com" />
                  </div>
                  <div>
                    <label htmlFor="team-phone" className="block text-sm font-bold text-[#022B3A] mb-2">Phone Number *</label>
                    <input id="team-phone" type="tel" required className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#EE5B2C] focus:border-transparent outline-none transition-all" placeholder="(555) 123-4567" />
                  </div>
                </div>

                <div>
                  <label htmlFor="team-company" className="block text-sm font-bold text-[#022B3A] mb-2">Company Name (Optional)</label>
                  <input id="team-company" type="text" className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#EE5B2C] focus:border-transparent outline-none transition-all" placeholder="Your HVAC Business" />
                </div>

                <div>
                  <label htmlFor="team-message" className="block text-sm font-bold text-[#022B3A] mb-2">How can we help?</label>
                  <textarea id="team-message" rows={5} className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#EE5B2C] focus:border-transparent outline-none transition-all resize-none" placeholder="Tell us a little bit about your timeline or goals..."></textarea>
                </div>

                <button type="submit" className="w-full bg-[#EE5B2C] hover:bg-orange-600 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 text-lg mt-4">
                  Submit Confidential Inquiry
                </button>
                
                <p className="text-sm text-gray-500 text-center mt-4">
                  <span className="inline-block text-[#EE5B2C] mr-1">🔒</span> 100% Confidential. Your information is never shared.
                </p>
              </form>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
