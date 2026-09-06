import React from "react";
import Link from "next/link";

export type FaqItem = {
  q: string;
  a: string; // Plain text for JSON-LD
  aNode?: React.ReactNode; // Optional rich text for rendering
};

export type FaqCategory = {
  category: string;
  items: FaqItem[];
};

export const faqCategories: FaqCategory[] = [
  {
    category: "Deciding to Sell",
    items: [
      {
        q: "Is now a good time to sell my HVAC business?",
        a: "There's rarely one universal \"right time\" - it depends more on your business's trajectory and your personal goals than the calendar. That said, a few signals tend to point toward a strong window: your revenue and margins have been stable or growing for the past 2-3 years, your maintenance-agreement base is healthy, you're not mid-way through a major equipment or fleet investment, and you personally have the energy to support a smooth transition rather than selling under pressure. Buyer demand for well-run Florida HVAC companies has also stayed strong given the state's year-round cooling demand. The best way to know for sure is to start with a valuation conversation before you've fully decided - it costs you nothing to understand your options.",
        aNode: <>There's rarely one universal "right time" - it depends more on your business's trajectory and your personal goals than the calendar. That said, a few signals tend to point toward a strong window: your revenue and margins have been stable or growing for the past 2-3 years, your maintenance-agreement base is healthy, you're not mid-way through a major equipment or fleet investment, and you personally have the energy to support a smooth transition rather than selling under pressure. Buyer demand for well-run Florida HVAC companies has also stayed strong given the state's year-round cooling demand. The best way to know for sure is to start with a <Link href="/free-valuation" className="text-[#EE5B2C] hover:underline font-bold">valuation conversation</Link> before you've fully decided - it costs you nothing to understand your options.</>
      },
      {
        q: "Is my HVAC business too small to sell?",
        a: "Almost never, though \"small\" businesses are typically sold to a different type of buyer than larger ones. A smaller shop with a loyal customer base, decent margins, and a few trained technicians is often attractive to an individual buyer or another local operator looking to expand their service area, even if it wouldn't interest a large consolidator. The honest answer is size changes who buys your business and how the deal is structured - it rarely means your business isn't sellable at all."
      },
      {
        q: "What are the biggest reasons HVAC businesses fail to sell?",
        a: "The most common ones we see: the asking price isn't grounded in an actual valuation (it's based on what the owner \"needs\" rather than what the business supports), the financials are disorganized or commingled with personal expenses, the business is too dependent on the owner personally (no second-in-command, no documented processes), or the listing was marketed too broadly and lost its confidentiality - which spooks both staff and buyers. A proper valuation and preparation phase before you go to market avoids most of these.",
        aNode: <>The most common ones we see: the asking price isn't grounded in an actual valuation (it's based on what the owner "needs" rather than what the business supports), the financials are disorganized or commingled with personal expenses, the business is too dependent on the owner personally (no second-in-command, no documented processes), or the listing was marketed too broadly and lost its confidentiality - which spooks both staff and buyers. A <Link href="/sell-your-hvac-business" className="text-[#EE5B2C] hover:underline font-bold">proper valuation and preparation phase</Link> before you go to market avoids most of these.</>
      },
      {
        q: "When should I tell my employees I'm selling?",
        a: "Generally, as late as is practical - most owners wait until a deal is signed and moving toward close, sometimes only informing key staff earlier under NDA if their cooperation is needed for due diligence. Telling the team too early, before a sale is even close to certain, creates unnecessary anxiety and turnover risk with no upside. We'll walk you through the right timing for your specific situation as part of the process."
      },
      {
        q: "Can I still sell if my business has outstanding loans or debts?",
        a: "Yes, this is common and very manageable. Outstanding debt is typically settled at closing directly from sale proceeds, and your broker/attorney will structure the payoff as part of the closing statement. It affects your net proceeds, not your ability to sell."
      },
      {
        q: "What happens to real estate I own personally that my business operates from?",
        a: "This is handled separately from the business sale itself. Common structures include the buyer leasing the property from you going forward, or purchasing the real estate as a separate transaction alongside the business. We'll help you think through which makes more sense for your goals."
      }
    ]
  },
  {
    category: "Valuation & Financials",
    items: [
      {
        q: "How is my HVAC business actually valued?",
        a: "Valuation for a business your size is typically based on a multiple of your Seller's Discretionary Earnings (SDE) - essentially your true profit including your owner salary and add-backs - rather than revenue alone. That multiple moves up or down based on factors like your residential-vs-commercial mix, recurring maintenance-agreement revenue, technician retention, equipment condition/age, and how dependent the business is on you personally. Two shops with identical revenue can be worth very different amounts once these factors are weighed.",
        aNode: <>Valuation for a business your size is typically based on a multiple of your Seller's Discretionary Earnings (SDE) - essentially your true profit including your owner salary and add-backs - rather than revenue alone. That multiple moves up or down based on factors like your residential-vs-commercial mix, recurring maintenance-agreement revenue, technician retention, equipment condition/age, and how dependent the business is on you personally. Two shops with identical revenue can be worth very different amounts once these factors are weighed. <Link href="/free-valuation" className="text-[#EE5B2C] hover:underline font-bold">Get a free valuation estimate here.</Link></>
      },
      {
        q: "What is a \"multiple,\" and why does it matter so much?",
        a: "A multiple is the number your SDE (or sometimes EBITDA, for larger businesses) is multiplied by to estimate business value - for example, a business earning $300K in SDE at a 2.5x multiple would be valued around $750K. The multiple itself reflects risk and quality in the buyer's eyes: more recurring revenue, better documentation, and less owner-dependence generally support a higher multiple. This is exactly why oversimplified \"rule of thumb\" valuations you might find online can be misleading in either direction.",
        aNode: <>A multiple is the number your SDE (or sometimes EBITDA, for larger businesses) is multiplied by to estimate business value - for example, a business earning $300K in SDE at a 2.5x multiple would be valued around $750K. The multiple itself reflects risk and quality in the buyer's eyes: more recurring revenue, better documentation, and less owner-dependence generally support a higher multiple. This is exactly why oversimplified "rule of thumb" valuations you might find online can be misleading in either direction. <Link href="/resources/hvac-business-multiples-explained" className="text-[#EE5B2C] hover:underline font-bold">Read more about how multiples work.</Link></>
      },
      {
        q: "Why can oversimplifying my valuation actually hurt me?",
        a: "A number pulled from a generic online calculator or a rough industry rule of thumb ignores the specifics that actually move value - your maintenance-agreement base, your equipment mix, your labor structure, seasonality. Anchoring to an oversimplified number can lead you to either underprice the business (leaving money on the table) or overprice it (scaring off qualified buyers and burning months on the market). A proper valuation looks at your actual financials, not a shortcut formula."
      },
      {
        q: "What's the single most important number buyers look at?",
        a: "Most buyers start with your Seller's Discretionary Earnings (SDE) - your real, normalized profit - more than top-line revenue. A business doing $2M in revenue with thin margins can be worth less than a $1M-revenue shop with strong, well-documented profit. Getting your books clean enough to clearly show true earnings is one of the highest-leverage things you can do before going to market."
      },
      {
        q: "Am I really making as much as I think I am?",
        a: "It's worth checking carefully - many owners run personal expenses through the business, pay themselves inconsistently, or don't track owner add-backs cleanly, which can understate (or sometimes overstate) actual profitability on paper. Part of our process is helping you identify legitimate add-backs so your true earnings are represented accurately to buyers."
      },
      {
        q: "Do maintenance agreements really affect my valuation that much?",
        a: "Yes - a strong base of recurring maintenance agreements is one of the clearest signals of predictable future revenue, and buyers (and their lenders) weight it heavily. There's no single \"magic number,\" but generally, the higher the percentage of revenue coming from recurring agreements versus one-off service calls, the more attractive - and often more valuable - your business looks."
      },
      {
        q: "How do extended warranties get handled in a sale?",
        a: "Outstanding extended warranty obligations need to be disclosed and accounted for during due diligence, since the buyer will typically assume responsibility for honoring them going forward. We help make sure these obligations are clearly documented so they don't become a surprise at closing."
      },
      {
        q: "How is inventory handled when I sell?",
        a: "Inventory (parts, equipment, materials on hand) is usually valued separately from the core business value and settled at closing, either included in the purchase price or reconciled based on an actual count near the closing date. We'll walk through which approach fits your deal."
      },
      {
        q: "My HVAC business is a franchise - does that change anything?",
        a: "It can. Franchise agreements often include transfer approval requirements, franchisor fees, and territory restrictions that need to be factored into both the timeline and the buyer pool (some buyers specifically want a franchise, others avoid them). We'll review your franchise agreement early so there are no late surprises."
      },
      {
        q: "What should I be doing to my numbers before I list?",
        a: "Focus on: separating personal expenses from the business, documenting recurring revenue clearly, having 2-3 years of clean financials ready, and understanding your own SDE before a buyer calculates it for you. The stronger and more organized your numbers, the smoother - and often higher-value - your sale process will be."
      }
    ]
  },
  {
    category: "Buyers, Financing & Deal Structure",
    items: [
      {
        q: "What is an SBA loan, and how does it affect my sale?",
        a: "An SBA (Small Business Administration) loan is a government-backed financing option many buyers use to purchase businesses like HVAC companies, since it allows a buyer to put down a smaller amount of cash while a bank finances the rest. It's one of the most common ways HVAC business sales get funded, which is good news for sellers - it widens your buyer pool beyond only all-cash buyers."
      },
      {
        q: "How long does closing typically take with SBA financing involved?",
        a: "SBA-financed deals generally take longer than an all-cash sale because of the lender's underwriting and approval process - plan for a longer runway than a cash close, and build that expectation into your timeline from the start. Your broker should be managing this timeline actively with the lender, not just waiting on updates."
      },
      {
        q: "What's a Letter of Intent (LOI)?",
        a: "An LOI is a non-binding document a buyer submits once they're seriously interested, outlining the proposed price, structure, and key terms before full due diligence begins. It's not a done deal, but it signals real intent and typically kicks off an exclusivity period while the details get worked out."
      },
      {
        q: "What does \"co-brokering\" mean in an HVAC business sale?",
        a: "Co-brokering is when your listing broker works alongside the buyer's broker (or another cooperating broker) to bring a deal together, similar to how real estate agents cooperate on a home sale. It can expand your reach to buyers you wouldn't otherwise access, with commission typically shared between the two brokers rather than costing you extra."
      },
      {
        q: "Are all private equity (PE) buyers the same?",
        a: "No - PE buyers vary widely in strategy. Some are actively building a platform in the HVAC space and want to keep your management team and brand, others are more consolidation-focused and will integrate you fully into an existing operation. It's worth understanding a PE buyer's specific approach and track record before assuming what post-sale life looks like."
      },
      {
        q: "What should I expect at closing if I'm selling to a private equity buyer?",
        a: "PE deals often involve more structured due diligence, sometimes an earnout or rollover-equity component (where you retain a small ownership stake going forward), and more detailed legal documentation than a sale to an individual buyer. Your broker and attorney should walk you through exactly what's being asked for and why before you sign anything."
      },
      {
        q: "Do I need an HVAC license to buy an HVAC company?",
        a: "Requirements vary - in many cases a buyer can acquire the business and either hold or hire a licensed qualifying individual to meet state licensing requirements, rather than being personally licensed themselves. Florida's specific contractor licensing rules should be confirmed with a licensing attorney or the relevant state board as part of your due diligence."
      },
      {
        q: "What financing options exist for buying an HVAC business?",
        a: "Common paths include SBA 7(a) loans, conventional bank financing, seller financing (where you carry a portion of the note), or a combination of these. Which makes sense depends on your down payment, credit profile, and the specific deal structure - we help buyers understand realistic options early so they're not wasting time pursuing deals they can't finance."
      },
      {
        q: "Why can't I find HVAC companies for sale even though I'm ready to buy?",
        a: "Many quality HVAC businesses are sold confidentially and never appear on public \"businesses for sale\" marketplaces - sellers often don't want their staff, customers, or competitors to know they're exiting. Working with a broker who specializes in the trade gives you access to off-market and confidentially-marketed listings you won't find by searching public listing sites. Join our buyer list to get matched with opportunities as they come available.",
        aNode: <>Many quality HVAC businesses are sold confidentially and never appear on public "businesses for sale" marketplaces - sellers often don't want their staff, customers, or competitors to know they're exiting. Working with a broker who specializes in the trade gives you access to off-market and confidentially-marketed listings you won't find by searching public listing sites. <Link href="/contact-us" className="text-[#EE5B2C] hover:underline font-bold">Join our buyer list</Link> to get matched with opportunities as they come available.</>
      }
    ]
  },
  {
    category: "Process, Confidentiality & Costs",
    items: [
      {
        q: "How long does the whole process take, start to finish?",
        a: "It varies with deal structure and financing, but most HVAC business sales move through valuation, marketing, buyer matching, negotiation, due diligence, and closing over several months rather than weeks - cash deals tend to move faster, SBA-financed deals take longer due to lender underwriting. We'll give you a realistic timeline specific to your situation once we understand your numbers and goals."
      },
      {
        q: "How do you keep my sale confidential?",
        a: "Listings are marketed without identifying business names or exact locations, buyers sign a non-disclosure agreement (NDA) before receiving any identifying details or financials, and we qualify buyers' seriousness and financial capacity before granting deeper access. The goal is that your employees, customers, and competitors don't learn you're selling unless and until you choose to tell them."
      },
      {
        q: "What documents will I need to provide?",
        a: "Typically: 2-3 years of tax returns and financial statements, a current equipment/fleet list, any lease agreements, a summary of maintenance agreements/recurring contracts, and an organizational overview (staff, roles, licenses held). We'll give you a complete checklist early so you're not scrambling once a serious buyer shows interest."
      },
      {
        q: "Do I have to stay involved in the business after it sells?",
        a: "Not necessarily - it depends on the deal you negotiate. Some sellers exit immediately at closing, others agree to a transition period (often 30-90 days, sometimes longer) to introduce the new owner to staff and key customers, and some deals involve a longer consulting arrangement or partial equity rollover. This is a term you and the buyer negotiate, not something fixed by default."
      },
      {
        q: "What fees should I expect to pay when selling?",
        a: "Business brokers typically work on a success-fee/commission basis calculated as a percentage of the final sale price, paid at closing - meaning there's generally no large upfront cost to list. There are usually also standard closing costs (legal, any lender-related fees on the buyer's financing side, etc.). Ask for a clear, written breakdown before signing any agreement so there are no surprises."
      },
      {
        q: "How long does a typical broker listing agreement last?",
        a: "Listing agreements commonly run somewhere in the range of 6 to 12 months, though this varies by brokerage and deal complexity. What matters more than the exact length is understanding the terms for renewal, exclusivity, and what happens if you want to pause or exit the agreement - ask your broker to walk through this clearly before you sign."
      },
      {
        q: "What if I want to sell my HVAC business myself, without a broker?",
        a: "It's possible, but sellers going it alone often underestimate the time cost of vetting unqualified buyers, the risk of a confidentiality leak, and the difficulty of negotiating objectively about their own company. If you do go this route, at minimum get a proper valuation done first, use an NDA before sharing any financials, and involve a transaction attorney before signing anything binding."
      },
      {
        q: "What are the tax implications of selling my HVAC business?",
        a: "Tax treatment depends heavily on how the sale is structured (asset sale vs. stock sale), how the purchase price is allocated across assets, and your individual tax situation - this varies enough person to person that we won't give a one-size-fits-all number here. We work alongside your CPA or tax advisor throughout the process, and strongly recommend looping in a tax professional early, before terms are finalized, so the deal structure works in your favor."
      }
    ]
  }
];
