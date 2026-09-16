import React from 'react';

export default function ValuationPeopleAlsoAsk() {
  return (
    <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-xl shadow-gray-200/50 border border-gray-100 mb-12">
      <h2 className="text-3xl font-black text-[#022B3A] mb-8">Related Questions on Valuing an HVAC Business</h2>
      
      <div className="space-y-8">
        <div>
          <h2 className="text-2xl font-bold text-[#022B3A] mb-3">What drives the value of a company?</h2>
          <p className="text-gray-700 font-medium leading-relaxed">
            The value of a company is primarily driven by its ability to generate predictable, transferable cash flow. Buyers evaluate historical earnings, revenue growth, profit margins, and the level of risk associated with sustaining those earnings after the current owner exits. A business with lower operational risk and higher recurring revenue commands a significantly higher valuation multiple.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-[#022B3A] mb-3">What are some examples of value drivers for a company?</h2>
          <p className="text-gray-700 font-medium leading-relaxed mb-4">
            Key value drivers for an HVAC company include:
          </p>
          <div className="overflow-x-auto bg-white rounded-2xl shadow-sm border border-gray-100 p-2">
            <table className="w-full text-left border-collapse min-w-[500px]">
              <thead>
                <tr>
                  <th className="p-4 font-black text-[#022B3A] bg-gray-50 border-b-2 border-gray-100 text-lg rounded-tl-xl w-1/3">Value Driver</th>
                  <th className="p-4 font-bold text-gray-700 bg-gray-50 border-b-2 border-gray-100 text-lg rounded-tr-xl">Impact on Business Value</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="p-4 font-bold text-[#EE5B2C] bg-orange-50/20">Preventative Maintenance Agreements (PMAs)</td>
                  <td className="p-4 font-medium text-gray-700">Provides guaranteed recurring revenue and a locked-in customer base.</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-[#EE5B2C] bg-orange-50/20">Customer Diversification</td>
                  <td className="p-4 font-medium text-gray-700">Ensures no single customer accounts for more than 10% of total revenue, lowering risk.</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-[#EE5B2C] bg-orange-50/20">Management Team</td>
                  <td className="p-4 font-medium text-gray-700">Capable leadership and dispatched technicians who operate independently of the owner.</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-[#EE5B2C] bg-orange-50/20">Clean Financials</td>
                  <td className="p-4 font-medium text-gray-700">CPA-prepared or verified tax returns matching daily bank deposits for smooth due diligence.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-[#022B3A] mb-3">How to market your HVAC company?</h2>
          <p className="text-gray-700 font-medium leading-relaxed">
            Marketing an HVAC company for sale is fundamentally different from marketing it for services. You must prepare a highly confidential blind profile (teaser) and a comprehensive Confidential Information Memorandum (CIM). These documents are then privately presented to pre-qualified private equity firms, strategic HVAC consolidators, and well-funded individual investors without tipping off your employees or local competitors.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-[#022B3A] mb-3">What are 5 skills a HVAC technician should have?</h2>
          <p className="text-gray-700 font-medium leading-relaxed">
            From an acquisition perspective, a highly valuable technician workforce possesses: (1) <strong>Technical Troubleshooting</strong> for complex diagnostics, (2) <strong>EPA Certification</strong> for safe refrigerant handling, (3) <strong>Customer Service</strong> to drive repeat business and positive reviews, (4) <strong>Sales Communication</strong> to ethically offer replacement systems or upgrades, and (5) <strong>Time Management</strong> to efficiently handle high-volume dispatch schedules.
          </p>
        </div>
      </div>
    </div>
  );
}
