import React from "react";
import Link from "next/link";

export default function WhyOwnersContactUs() {
  return (
    <section className="w-full bg-[#022B3A] py-20 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tight">
          Why Owners Contact Us
        </h2>
        <p className="text-xl md:text-2xl text-white/90 leading-relaxed font-medium">
          Owners contact us at different stages. Some are <Link href="/sell-your-hvac-business" className="text-[#EE5B2C] hover:underline font-bold">ready to sell</Link>. Others want to <Link href="/hvac-business-valuation" className="text-[#EE5B2C] hover:underline font-bold">understand value</Link>, strengthen the business or <Link href="/how-it-works" className="text-[#EE5B2C] hover:underline font-bold">plan an eventual exit</Link>. We begin with the owner's goals and provide a practical next step without requiring an immediate decision to sell.
        </p>
      </div>
    </section>
  );
}
