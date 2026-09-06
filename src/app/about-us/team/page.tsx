import { Metadata } from "next";
import TeamPageContent from "@/views/components/TeamPageContent";

export const metadata: Metadata = {
  title: "Meet the Team | KMF Business Advisors",
  description: "Meet Sanjay Wadhwani and the team at KMF Business Advisors. We provide expert advisory services for Florida HVAC business acquisitions.",
};

export default function TeamPage() {
  return (
    <main className="min-h-screen flex flex-col bg-gray-50">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-24 overflow-hidden bg-[#022B3A] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left relative z-10">
          <h1 className="max-w-4xl text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight tracking-tight">
            Meet the Team
          </h1>
          <p className="max-w-3xl text-xl text-white/90 leading-relaxed font-medium mb-10">
            Led by industry veteran Sanjay Wadhwani, our team combines real-world business ownership experience with top-tier M&A expertise. We don't just broker businesses - we understand them.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <TeamPageContent />
    </main>
  );
}
