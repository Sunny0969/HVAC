import { Metadata } from 'next';
import ValuationCalculator from '../../views/components/ValuationCalculator';

export const metadata: Metadata = {
  title: "Free HVAC Business Valuation Calculator | Florida",
  description: "Get an instant, directional estimate of your Florida HVAC business's value — free, private, no signup required.",
  alternates: {
    canonical: "https://www.sunstatehvacbrokers.com/hvac-business-valuation-calculator"
  }
};

export default function ValuationCalculatorPage() {
  return (
    <main className="min-h-screen flex flex-col bg-[#F7F5F0]">
      
      {/* Hero Section */}
      <section className="relative pt-40 pb-16 md:pt-48 md:pb-24 overflow-hidden bg-[#022B3A] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight tracking-tight">
            What's Your Florida HVAC Business Worth?
          </h1>
          
          <p className="text-xl text-white/90 leading-relaxed font-medium mb-6 max-w-3xl">
            Answer a few questions about your financials and how your business runs - get an instant estimate, right in your browser.
          </p>
          <div className="inline-block bg-white/10 px-4 py-2 rounded-lg border border-white/20">
            <p className="text-sm text-white font-bold flex items-center">
              <svg className="w-4 h-4 mr-2 text-[#EE5B2C]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
              100% Private. Nothing is sent anywhere or saved unless you choose to save your report.
            </p>
          </div>
        </div>
      </section>

      {/* Calculator Interactive Section */}
      <div className="flex-grow w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        
        <div className="mb-8">
          <h2 className="text-3xl font-black text-[#022B3A]">HVAC Valuation Calculator</h2>
          <p className="text-gray-600 font-medium mt-2">Enter your financial and operational details below to generate a real-time market estimate.</p>
        </div>

        <ValuationCalculator />
        
        {/* Disclaimer - Explicitly visible on the page per instructions */}
        <div className="mt-16 text-xs text-gray-500 border-t border-gray-200 pt-8 text-center max-w-4xl mx-auto leading-relaxed">
          <strong>Disclaimer:</strong> This calculator provides a directional, educational estimate only, based on the figures and answers you provide and general market assumptions for the HVAC service industry. It is not a formal business valuation, appraisal, or opinion of value, and should not be relied on for financial, tax, lending, or transaction decisions. Actual business value depends on a full review of your financial statements, industry conditions, buyer demand, and deal-specific factors. For a comprehensive valuation, contact us for a free consultation with a broker.
        </div>
      </div>
    </main>
  );
}
