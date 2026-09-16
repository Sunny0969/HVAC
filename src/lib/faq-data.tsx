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
    category: "Seller Questions",
    items: [
      {
        q: "How do I know what my HVAC business is worth?",
        a: "A preliminary valuation reviews normalized earnings together with recurring revenue, service mix, technicians, customer concentration, owner dependence, fleet, licensing and market conditions. A supportable range requires current and accurate company information."
      },
      {
        q: "What financial documents are needed?",
        a: "Owners should generally prepare three years of business tax returns and profit-and-loss statements, a current year-to-date statement, balance sheets and documentation for proposed financial adjustments."
      },
      {
        q: "Will the sale remain confidential?",
        a: "The company can be marketed without publicly revealing its identity. Prospective buyers must complete the required confidentiality and qualification process before receiving protected information."
      },
      {
        q: "When should employees be told?",
        a: "The timing depends on the transaction and the sellerâ€™s plan. Prospective buyers may not contact employees without authorization. The seller should coordinate the communication plan with legal and transaction advisers."
      },
      {
        q: "What makes an HVAC company attractive to buyers?",
        a: "Buyers often favor consistent earnings, recurring maintenance revenue, a stable team, transferable customer relationships, clean financial records and limited dependence on the owner."
      },
      {
        q: "How long does a sale take?",
        a: "Timing varies with preparation, buyer demand, financing, due diligence, licensing, leases and deal complexity. No responsible broker should guarantee a closing date."
      },
      {
        q: "Do I need to stay after closing?",
        a: "Many buyers request a transition or training period. The length and the ownerâ€™s responsibilities should be negotiated and documented before closing."
      },
      {
        q: "Can I sell the real estate with the business?",
        a: "The business and real estate may be sold together or handled separately, depending on ownership, buyer needs, financing and valuation. A qualified commercial real-estate professional should address the property component."
      },
      {
        q: "What happens to my license or qualifying agent?",
        a: "Licensing requirements depend on the jurisdiction and transaction structure. The parties should confirm continuity and transfer requirements with the applicable licensing authority and qualified counsel."
      },
      {
        q: "Should I accept the highest offer?",
        a: "The seller should compare price with cash at closing, financing risk, contingencies, seller financing, earnouts, working capital, transition duties and the buyerâ€™s ability to complete the transaction."
      }
    ]
  },
  {
    category: "Buyer Questions",
    items: [
      {
        q: "What is required before I receive financial information?",
        a: "A signed nondisclosure agreement is generally required. Proof of funds, lender information or other financial qualification may also be required before detailed financial information or seller access is provided."
      },
      
      {
        q: "Can I submit an offer without an escrow deposit?",
        a: "An appropriate escrow deposit is generally required to demonstrate commitment and support the transaction. The amount and timing depend on the opportunity and contract."
      },
      {
        q: "Is a letter of intent accepted?",
        a: "For this brokerage process, an LOI is generally reserved for transactions of $10 million or more or for situations where complexity makes it appropriate. Smaller transactions generally proceed through an asset-purchase contract with escrow and a defined due-diligence period."
      },
      
      {
        q: "Can I contact employees or customers during due diligence?",
        a: "No. The business is being sold confidentially. Any authorized communication must be coordinated by the seller and follow the NDA and transaction documents."
      },
      {
        q: "What financing information may be required?",
        a: "Depending on the opportunity, the buyer may provide proof of funds, a lender letter, SBA eligibility information or other evidence showing the ability to complete the purchase."
      },
      {
        q: "What should I verify during due diligence?",
        a: "The buyer and professional advisers should verify financial statements, tax returns, customers, contracts, employees, licenses, assets, fleet, leases, insurance, legal matters and the assumptions used in the offer."
      }
    ]
  },
  {
    category: "Transaction Process",
    items: [
      {
        q: "What is the first step for an HVAC owner considering a sale?",
        a: "The first step is a confidential review of goals, timing, financial performance, operating structure, licensing, recurring revenue, and owner involvement. This helps determine whether to prepare now, improve the company first, or begin a sale process."
      },
      {
        q: "What is required before a buyer can communicate with the seller?",
        a: "The buyer should sign the NDA and provide acceptable proof of funds or financing readiness. Approved questions can then be handled through a broker-hosted call or meeting without exposing employees or customers."
      },
      {
        q: "When does formal due diligence begin?",
        a: "Formal due diligence normally begins after the purchase contract is signed and the required escrow deposit is received. The contract establishes the review period, document access, extension rights, and remedies."
      },
      {
        q: "Can the due-diligence period be extended?",
        a: "It may be extended when additional time is reasonably needed and both parties agree in writing. Buyers should request an extension before the deadline and explain the remaining information or approval required."
      }
    ]
  }
];

