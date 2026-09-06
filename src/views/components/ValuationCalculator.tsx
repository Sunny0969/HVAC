"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

// Helper to format currency safely
const formatCurrency = (value: string | number) => {
  if (!value) return "";
  const numericString = value.toString().replace(/[^\d.-]/g, "");
  if (isNaN(Number(numericString))) return "";
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(Number(numericString));
};

// Helper to extract raw number
const parseCurrency = (value: string) => {
  const numericString = value.replace(/[^\d.-]/g, "");
  return Number(numericString) || 0;
};

// Types
type Step = 1 | 2 | 3;
type Score = 0 | 0.5 | 1;

interface Financials {
  revenue: string;
  netIncome: string;
  depreciation: string;
  interest: string;
  ownerComp: string;
  addBacks: string;
}

interface Drivers {
  [key: string]: Score;
}

export default function ValuationCalculator() {
  const [step, setStep] = useState<Step>(1);
  
  // Step 1: Financials
  const [financials, setFinancials] = useState<Financials>({
    revenue: "",
    netIncome: "",
    depreciation: "",
    interest: "",
    ownerComp: "",
    addBacks: "",
  });

  // Calculate SDE live
  const sde = 
    parseCurrency(financials.netIncome) + 
    parseCurrency(financials.depreciation) + 
    parseCurrency(financials.interest) + 
    parseCurrency(financials.ownerComp) + 
    parseCurrency(financials.addBacks);

  const canProceedToStep2 = parseCurrency(financials.revenue) > 0 && financials.netIncome !== "";

  // Step 2: Drivers
  const [drivers, setDrivers] = useState<Drivers>({
    bookkeeping: 0.5,
    recurringRev: 0.5,
    mix: 0.5,
    customerConc: 0.5,
    ownerDep: 0.5,
    team: 0.5,
    fleet: 0.5,
    reputation: 0.5,
    revTrend: 0.5,
    grossMargin: 0.5,
    seasonality: 0.5,
  });

  const updateDriver = (key: string, value: Score) => {
    setDrivers(prev => ({ ...prev, [key]: value }));
  };

  // Step 3: Calculation Logic
  const calculateResults = () => {
    let multiple = 2.5;

    // Weighting Logic
    const adjustments: Record<string, { weight: number, name: string, score: Score }> = {
      recurringRev: { weight: 0.3, name: "Recurring maintenance-agreement revenue %", score: drivers.recurringRev },
      ownerDep: { weight: 0.3, name: "Owner dependency", score: drivers.ownerDep },
      customerConc: { weight: 0.3, name: "Customer concentration", score: drivers.customerConc },
      team: { weight: 0.2, name: "Technician team & licensing", score: drivers.team },
      revTrend: { weight: 0.2, name: "Revenue trend (last 3 years)", score: drivers.revTrend },
      grossMargin: { weight: 0.2, name: "Gross margin", score: drivers.grossMargin },
      bookkeeping: { weight: 0.2, name: "Bookkeeping quality", score: drivers.bookkeeping },
      reputation: { weight: 0.1, name: "Reputation & reviews", score: drivers.reputation },
      fleet: { weight: 0.1, name: "Fleet & equipment condition", score: drivers.fleet },
      mix: { weight: 0.1, name: "Residential vs. commercial revenue mix", score: drivers.mix },
      seasonality: { weight: 0.1, name: "Seasonality/predictability", score: drivers.seasonality },
    };

    let totalScore = 0;
    
    Object.keys(adjustments).forEach(key => {
      const { weight, score } = adjustments[key];
      // Normalize score: 0 -> -weight, 0.5 -> 0, 1 -> +weight
      const adjustment = (score - 0.5) * 2 * weight;
      multiple += adjustment;
      totalScore += score;
    });

    multiple = Math.max(2.0, Math.min(3.5, multiple));
    const readinessScore = Math.round((totalScore / 11) * 100);

    // Identify lowest scoring drivers for improvement bullets
    const lowestDrivers = Object.values(adjustments)
      .sort((a, b) => a.score - b.score)
      .slice(0, 2);

    return {
      multiple,
      readinessScore,
      lowestDrivers,
      conservative: sde * (multiple - 0.4),
      likely: sde * multiple,
      optimistic: sde * (multiple + 0.4)
    };
  };

  const results = step === 3 ? calculateResults() : null;

  const resetAll = () => {
    setStep(1);
    setFinancials({
      revenue: "",
      netIncome: "",
      depreciation: "",
      interest: "",
      ownerComp: "",
      addBacks: "",
    });
    setDrivers({
      bookkeeping: 0.5, recurringRev: 0.5, mix: 0.5, customerConc: 0.5,
      ownerDep: 0.5, team: 0.5, fleet: 0.5, reputation: 0.5,
      revTrend: 0.5, grossMargin: 0.5, seasonality: 0.5,
    });
  };

  return (
    <div className="bg-white rounded-[2rem] shadow-xl border border-gray-100 overflow-hidden relative">
      
      {/* Progress Header */}
      <div className="bg-gray-50 border-b border-gray-100 p-6 flex flex-col md:flex-row justify-between items-center relative">
        <div className="font-bold text-[#022B3A] mb-4 md:mb-0">
          Step {step} of 3: {step === 1 ? "Financial Snapshot" : step === 2 ? "HVAC Value Drivers" : "Estimate of Value"}
        </div>
        <div className="flex gap-2 w-full md:w-auto">
          {[1, 2, 3].map(i => (
            <div key={i} className={`h-2 rounded-full flex-grow md:w-16 transition-colors duration-500 ${step >= i ? 'bg-[#EE5B2C]' : 'bg-gray-200'}`} />
          ))}
        </div>
      </div>

      <div className="p-8 md:p-12">
        <AnimatePresence mode="wait">
          
          {/* STEP 1: FINANCIALS */}
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="max-w-2xl mx-auto"
            >
              <h2 className="text-3xl font-black text-[#022B3A] mb-2">Financial Snapshot</h2>
              <p className="text-gray-600 mb-8 font-medium">Please enter values from your last full fiscal year. We use plain-language terms to keep this simple.</p>
              
              <div className="space-y-6">
                {[
                  { id: 'revenue', label: 'Annual Revenue', sub: 'Total gross sales, last full year' },
                  { id: 'netIncome', label: 'Net Income', sub: 'As reported on your tax return / P&L' },
                  { id: 'depreciation', label: 'Depreciation & Amortization', sub: 'Standard add-back' },
                  { id: 'interest', label: 'Interest Expense', sub: 'Standard add-back' },
                  { id: 'ownerComp', label: 'Owner Salary/Compensation', sub: 'What you pay yourself, to be added back' },
                  { id: 'addBacks', label: 'Other Owner Add-Backs', sub: 'Personal vehicle, family-on-payroll, one-time expenses' },
                ].map((field) => (
                  <div key={field.id}>
                    <label className="block text-sm font-bold text-[#022B3A] mb-1">{field.label}</label>
                    <p className="text-xs text-gray-500 mb-2">{field.sub}</p>
                    <input 
                      type="text" 
                      placeholder="$0"
                      value={formatCurrency(financials[field.id as keyof Financials])}
                      onChange={(e) => setFinancials({...financials, [field.id]: e.target.value})}
                      className="w-full text-xl p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#EE5B2C] focus:border-transparent transition-shadow outline-none font-medium"
                    />
                  </div>
                ))}
              </div>

              <div className="mt-8 p-6 bg-[#F7F5F0] rounded-xl border border-gray-200 flex justify-between items-center">
                <div>
                  <div className="text-sm font-bold text-gray-500 uppercase tracking-wide">Live Calculation</div>
                  <div className="text-2xl font-black text-[#022B3A]">Adjusted SDE</div>
                </div>
                <div className="text-3xl font-black text-[#EE5B2C]">
                  {formatCurrency(sde)}
                </div>
              </div>

              <div className="mt-10 flex justify-end">
                <button
                  onClick={() => setStep(2)}
                  disabled={!canProceedToStep2}
                  className={`px-10 py-4 font-bold rounded-xl transition-all ${canProceedToStep2 ? 'bg-[#022B3A] hover:bg-gray-800 text-white shadow-lg' : 'bg-gray-200 text-gray-400 cursor-not-allowed'}`}
                >
                  Continue to Value Drivers &rarr;
                </button>
              </div>
            </motion.div>
          )}

          {/* STEP 2: DRIVERS */}
          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <h2 className="text-3xl font-black text-[#022B3A] mb-2 text-center">HVAC Value Drivers</h2>
              <p className="text-gray-600 mb-10 font-medium text-center max-w-2xl mx-auto">These operational specifics are what actually move the needle for HVAC buyers in Florida.</p>
              
              <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {/* 11 Drivers Config */}
                {[
                  { id: 'recurringRev', label: 'Recurring maintenance-agreement revenue %', opts: [{l: '< 10%', v: 0}, {l: '10-30%', v: 0.5}, {l: '> 30%', v: 1}] },
                  { id: 'ownerDep', label: 'Owner dependency', opts: [{l: 'Does sales/ops/field', v: 0}, {l: 'Mainly oversees', v: 0.5}, {l: 'Runs independently', v: 1}] },
                  { id: 'customerConc', label: 'Customer concentration (Top 5 clients)', opts: [{l: '> 30% of Rev', v: 0}, {l: '10-30%', v: 0.5}, {l: '< 10%', v: 1}] },
                  { id: 'team', label: 'Technician team & licensing', opts: [{l: 'Mostly subs', v: 0}, {l: 'Mixed team', v: 0.5}, {l: 'Fully staffed/licensed', v: 1}] },
                  { id: 'revTrend', label: 'Revenue trend (last 3 years)', opts: [{l: 'Declining / Flat', v: 0}, {l: 'Growing 5-15%', v: 0.5}, {l: 'Growing > 15%', v: 1}] },
                  { id: 'grossMargin', label: 'Gross margin', opts: [{l: '< 30%', v: 0}, {l: '30-45%', v: 0.5}, {l: '> 45%', v: 1}] },
                  { id: 'bookkeeping', label: 'Bookkeeping quality', opts: [{l: 'DIY / Messy', v: 0}, {l: 'Clean monthly', v: 0.5}, {l: 'CPA Reviewed', v: 1}] },
                  { id: 'reputation', label: 'Reputation & reviews', opts: [{l: 'Few / Poor', v: 0}, {l: 'Decent rating', v: 0.5}, {l: 'Strong (4.5+)', v: 1}] },
                  { id: 'fleet', label: 'Fleet & equipment condition', opts: [{l: 'Aging', v: 0}, {l: 'Adequate', v: 0.5}, {l: 'Newer / Excellent', v: 1}] },
                  { id: 'mix', label: 'Residential vs. commercial mix', opts: [{l: 'Mostly Commercial', v: 0.5}, {l: 'Mixed', v: 1}, {l: 'Mostly Residential', v: 0.5}] }, // Special case mapping for UI scale
                  { id: 'seasonality', label: 'Seasonality/predictability', opts: [{l: 'Highly seasonal', v: 0}, {l: 'Somewhat steady', v: 0.5}, {l: 'Steady year-round', v: 1}] },
                ].map(driver => (
                  <div key={driver.id} className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                    <label className="block text-sm font-bold text-[#022B3A] mb-3">{driver.label}</label>
                    <div className="flex flex-wrap gap-2">
                      {driver.opts.map(opt => (
                        <button
                          key={opt.l}
                          onClick={() => updateDriver(driver.id, opt.v as Score)}
                          className={`px-4 py-2 text-sm font-bold rounded-lg border transition-all ${drivers[driver.id] === opt.v ? 'bg-[#EE5B2C] border-[#EE5B2C] text-white shadow-md' : 'bg-white border-gray-200 text-gray-600 hover:border-[#EE5B2C] hover:text-[#EE5B2C]'}`}
                        >
                          {opt.l}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12 flex justify-between max-w-4xl mx-auto">
                <button onClick={() => setStep(1)} className="px-6 py-4 font-bold text-gray-500 hover:text-[#022B3A] transition-colors">
                  &larr; Back
                </button>
                <button
                  onClick={() => setStep(3)}
                  className="px-10 py-4 font-bold rounded-xl bg-[#022B3A] hover:bg-gray-800 text-white shadow-lg transition-all"
                >
                  Calculate My Estimate &rarr;
                </button>
              </div>
            </motion.div>
          )}

          {/* STEP 3: RESULTS */}
          {step === 3 && results && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="max-w-5xl mx-auto"
            >
              <div className="text-center mb-12">
                <h2 className="text-xl font-bold text-gray-500 uppercase tracking-widest mb-4">Estimated Value Range</h2>
                <div className="text-5xl md:text-7xl font-black text-[#022B3A] mb-4 tracking-tight">
                  {formatCurrency(results.likely)}
                </div>
                <p className="text-lg text-gray-600 font-medium bg-gray-50 inline-block px-6 py-2 rounded-full border border-gray-200">
                  Based on an Adjusted SDE of <strong className="text-[#022B3A]">{formatCurrency(sde)}</strong> and a <strong className="text-[#022B3A]">{results.multiple.toFixed(2)}x</strong> estimated multiple
                </p>
              </div>

              {/* Scenarios */}
              <div className="grid md:grid-cols-3 gap-6 mb-16">
                <div className="bg-white border border-gray-200 rounded-2xl p-6 text-center shadow-sm">
                  <div className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-2">Conservative</div>
                  <div className="text-2xl font-black text-[#022B3A] mb-1">{formatCurrency(results.conservative)}</div>
                  <div className="text-sm text-gray-500">{(results.multiple - 0.4).toFixed(2)}x Multiple</div>
                </div>
                <div className="bg-[#022B3A] border border-[#022B3A] rounded-2xl p-6 text-center shadow-lg transform md:-translate-y-2">
                  <div className="text-sm font-bold text-orange-400 uppercase tracking-wider mb-2">Likely Target</div>
                  <div className="text-3xl font-black text-white mb-1">{formatCurrency(results.likely)}</div>
                  <div className="text-sm text-gray-300">{results.multiple.toFixed(2)}x Multiple</div>
                </div>
                <div className="bg-white border border-gray-200 rounded-2xl p-6 text-center shadow-sm">
                  <div className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-2">Optimistic</div>
                  <div className="text-2xl font-black text-[#022B3A] mb-1">{formatCurrency(results.optimistic)}</div>
                  <div className="text-sm text-gray-500">{(results.multiple + 0.4).toFixed(2)}x Multiple</div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
                {/* Readiness Score & Improvements */}
                <div>
                  <h3 className="text-2xl font-black text-[#022B3A] mb-6">Sale-Readiness Score</h3>
                  <div className="flex items-center mb-8">
                    <div className="w-24 h-24 rounded-full border-8 flex items-center justify-center text-2xl font-black" style={{ borderColor: results.readinessScore > 70 ? '#10B981' : results.readinessScore > 40 ? '#F59E0B' : '#EF4444', color: '#022B3A' }}>
                      {results.readinessScore}
                    </div>
                    <div className="ml-6 flex-1">
                      <p className="text-gray-600 font-medium">This score reflects how attractive your business looks to buyers today based on your operational drivers.</p>
                    </div>
                  </div>
                  
                  <div className="bg-[#F7F5F0] rounded-xl p-6 border border-gray-200">
                    <h4 className="font-bold text-[#022B3A] mb-3">Highest-Leverage Improvements:</h4>
                    <ul className="space-y-3">
                      {results.lowestDrivers.map((ld, idx) => (
                        <li key={idx} className="flex text-sm text-gray-700 font-medium">
                          <svg className="w-5 h-5 text-[#EE5B2C] mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                          Improving your {ld.name.toLowerCase()} could significantly boost your valuation multiple.
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Recast Financials Breakdown */}
                <div>
                  <h3 className="text-2xl font-black text-[#022B3A] mb-6">Recast Financials Breakdown</h3>
                  <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
                    <div className="p-4 border-b border-gray-100 flex justify-between bg-gray-50">
                      <span className="text-gray-600 font-medium">Net Income</span>
                      <span className="font-bold">{formatCurrency(financials.netIncome)}</span>
                    </div>
                    {[
                      { label: '+ Depreciation & Amortization', val: financials.depreciation },
                      { label: '+ Interest Expense', val: financials.interest },
                      { label: '+ Owner Compensation', val: financials.ownerComp },
                      { label: '+ Other Add-Backs', val: financials.addBacks }
                    ].map((row, i) => parseCurrency(row.val) > 0 && (
                      <div key={i} className="p-4 border-b border-gray-100 flex justify-between text-green-700">
                        <span className="font-medium text-sm">{row.label}</span>
                        <span className="font-bold">{formatCurrency(row.val)}</span>
                      </div>
                    ))}
                    <div className="p-5 flex justify-between items-center bg-[#022B3A] text-white">
                      <span className="font-black text-lg">Adjusted SDE</span>
                      <span className="font-black text-2xl">{formatCurrency(sde)}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link 
                  href={{ pathname: '/free-valuation', query: { estimated: results.likely } }}
                  className="w-full sm:w-auto px-8 py-5 bg-[#EE5B2C] hover:bg-orange-600 text-white font-black rounded-xl shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1 text-center text-lg"
                >
                  Get a Broker's Review of This Estimate
                </Link>
                <button 
                  onClick={() => window.print()}
                  className="w-full sm:w-auto px-8 py-5 bg-gray-100 hover:bg-gray-200 text-[#022B3A] font-bold rounded-xl transition-colors text-center text-lg"
                >
                  Save/Email This Report
                </button>
              </div>

              <div className="text-center mt-12">
                <button onClick={resetAll} className="text-gray-400 hover:text-[#EE5B2C] font-bold text-sm underline transition-colors">
                  Start Over
                </button>
              </div>

            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
