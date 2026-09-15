"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

// Formatter
const money = (n: number) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(Math.max(0, n));
const num = (v: string) => Number(v) || 0;

const labels: Record<string, Record<string, string>> = {
  recurring: { '-1': 'Limited recurring revenue', '1': 'Meaningful maintenance revenue', '2': 'Strong recurring maintenance base' },
  serviceMix: { '-2': 'Heavy construction/project exposure', '2': 'Service-and-replacement emphasis' },
  owner: { '-2': 'High dependence on owner as technician or salesperson', '-1': 'Daily operations depend on owner', '2': 'Independent management team' },
  team: { '-2': 'Technician shortage or turnover', '2': 'Strong technician and management bench' },
  concentration: { '-2': 'Very high customer concentration', '-1': 'Elevated customer concentration', '2': 'Diversified customer base' },
  license: { '-2': 'License or qualifying-agent continuity is uncertain', '2': 'License continuity is established' },
  fleet: { '-1': 'Fleet replacement requirements', '1': 'Modern, maintained fleet' },
  territory: { '-1': 'Scattered service territory', '1': 'Dense and efficient service routes' },
  growth: { '-2': 'Material revenue decline', '-1': 'Recent revenue decline', '1': 'Consistent growth', '2': 'Strong recent growth' },
  records: { '-2': 'Incomplete or unverifiable records', '-1': 'Limited financial reporting', '2': 'High-quality financial reporting and supported add-backs' }
};

export default function ValuationCalculator() {
  const [revenue, setRevenue] = useState<string>("");
  const [earnings, setEarnings] = useState<string>("");
  const [basis, setBasis] = useState<string>("SDE");

  const [growth, setGrowth] = useState<string>("0");
  const [records, setRecords] = useState<string>("0");
  
  const [recurring, setRecurring] = useState<string>("0");
  const [serviceMix, setServiceMix] = useState<string>("0");
  const [owner, setOwner] = useState<string>("0");
  const [team, setTeam] = useState<string>("0");
  const [concentration, setConcentration] = useState<string>("0");
  const [license, setLicense] = useState<string>("0");
  const [fleet, setFleet] = useState<string>("0");
  const [territory, setTerritory] = useState<string>("0");
  
  const [assets, setAssets] = useState<string>("");
  const [liabilities, setLiabilities] = useState<string>("");

  const [results, setResults] = useState<any>(null);

  const calculate = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    
    const rev = num(revenue);
    const earn = num(earnings);

    if (!rev || !earn) {
      alert("Please enter both annual revenue and normalized earnings.");
      return;
    }
    if (earn > rev) {
      alert("Normalized earnings should not exceed revenue. Please check the entries.");
      return;
    }

    const ids = [
      { id: 'growth', val: num(growth) },
      { id: 'records', val: num(records) },
      { id: 'recurring', val: num(recurring) },
      { id: 'serviceMix', val: num(serviceMix) },
      { id: 'owner', val: num(owner) },
      { id: 'team', val: num(team) },
      { id: 'concentration', val: num(concentration) },
      { id: 'license', val: num(license) },
      { id: 'fleet', val: num(fleet) },
      { id: 'territory', val: num(territory) }
    ];

    const raw = ids.reduce((s, x) => s + x.val, 0);
    const score = Math.max(0, Math.min(100, 50 + raw * 3.2));

    let baseLow, baseMid, baseHigh;
    if (basis === 'EBITDA') {
      if (earn < 500000) [baseLow, baseMid, baseHigh] = [3.0, 3.8, 4.6];
      else if (earn < 1000000) [baseLow, baseMid, baseHigh] = [3.8, 4.8, 5.8];
      else if (earn < 3000000) [baseLow, baseMid, baseHigh] = [4.8, 6.0, 7.2];
      else [baseLow, baseMid, baseHigh] = [5.8, 7.2, 8.8];
    } else {
      if (rev < 500000) [baseLow, baseMid, baseHigh] = [1.35, 1.75, 2.15];
      else if (rev < 1000000) [baseLow, baseMid, baseHigh] = [1.55, 2.05, 2.55];
      else if (rev < 2500000) [baseLow, baseMid, baseHigh] = [1.90, 2.55, 3.20];
      else if (rev < 5000000) [baseLow, baseMid, baseHigh] = [2.25, 3.05, 3.85];
      else [baseLow, baseMid, baseHigh] = [2.65, 3.55, 4.50];
    }

    const qualityAdj = raw * (basis === 'EBITDA' ? 0.08 : 0.055);
    const ml = Math.max(0.75, baseLow + qualityAdj);
    const mm = Math.max(1, baseMid + qualityAdj);
    const mh = Math.max(1.25, baseHigh + qualityAdj);

    const revBase = rev < 500000 ? [0.32, 0.48, 0.61] : rev < 2500000 ? [0.40, 0.57, 0.72] : [0.48, 0.68, 0.90];
    const revAdj = raw * 0.008;
    const rl = Math.max(0.15, revBase[0] + revAdj);
    const rm = Math.max(0.2, revBase[1] + revAdj);
    const rh = Math.max(0.25, revBase[2] + revAdj);

    const excess = num(assets);
    const debt = num(liabilities);

    const earnVals = [earn * ml, earn * mm, earn * mh];
    const revVals = [rev * rl, rev * rm, rev * rh];

    // Earnings 75%, Revenue 25%
    const estimates = earnVals.map((x, i) => x * 0.75 + revVals[i] * 0.25 + excess - debt);
    estimates.sort((a, b) => a - b);

    const strengths: string[] = [];
    const risks: string[] = [];

    ids.forEach(item => {
      const text = labels[item.id]?.[String(item.val)];
      if (text) {
        if (item.val > 0) strengths.push(text);
        else risks.push(text);
      }
    });

    if (!strengths.length) strengths.push('No premium factors were selected; broker verification may identify additional strengths.');
    if (!risks.length) risks.push('All selected factors appear favorable, subject to documentation and buyer due diligence.');

    setResults({
      low: money(estimates[0]),
      mid: money(estimates[1]),
      high: money(estimates[2]),
      earnMultiple: `${ml.toFixed(2)}x - ${mh.toFixed(2)}x ${basis}`,
      revMultiple: `${rl.toFixed(2)}x - ${rh.toFixed(2)}x revenue`,
      score,
      strengths,
      risks,
      basis
    });
  };

  const resetAll = () => {
    setRevenue(""); setEarnings(""); setBasis("SDE");
    setGrowth("0"); setRecords("0"); setRecurring("0"); setServiceMix("0");
    setOwner("0"); setTeam("0"); setConcentration("0"); setLicense("0");
    setFleet("0"); setTerritory("0"); setAssets(""); setLiabilities("");
    setResults(null);
  };

  return (
    <div className="w-full">
      <div className="bg-[#022B3A] text-white rounded-t-3xl p-8 md:p-10 shadow-lg">
        <div className="text-[#EE5B2C] font-bold text-sm tracking-widest uppercase mb-2">Confidential Preliminary Estimate</div>
        <h2 className="text-3xl md:text-4xl font-black mb-4">HVAC Business Valuation Calculator</h2>
        <p className="text-gray-300 font-medium text-lg leading-relaxed max-w-3xl">
          Receive an initial market range based on normalized earnings, revenue, reported sold-business benchmarks, and HVAC-specific value drivers.
        </p>
      </div>

      <div className="bg-white rounded-b-3xl shadow-xl border border-gray-100 p-6 md:p-10">
        <div className="bg-orange-50 border-l-4 border-[#EE5B2C] p-4 rounded-r-lg mb-10 text-gray-800 font-medium text-sm">
          <strong>Important:</strong> This calculator provides an educational preliminary Broker Opinion of Value range - not a certified appraisal, offer, or guaranteed sale price. A final broker opinion can be prepared only after reviewing financial statements, assets, service territories, and owner involvement.
        </div>

        <form onSubmit={calculate}>
          {/* Section 1 */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-[#022B3A] border-b border-gray-100 pb-2 mb-6">Financial Performance</h3>
            <p className="text-gray-500 text-sm mb-6">Use the most recent trailing 12-month figures. Do not include real estate in annual revenue.</p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Annual Revenue</label>
                <input type="number" required value={revenue} onChange={e => setRevenue(e.target.value)} placeholder="e.g. 1500000" className="w-full border border-gray-300 rounded-lg p-3 text-lg focus:ring-2 focus:ring-[#EE5B2C] focus:border-transparent outline-none transition-all" />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Normalized Annual Earnings</label>
                <input type="number" required value={earnings} onChange={e => setEarnings(e.target.value)} placeholder="e.g. 325000" className="w-full border border-gray-300 rounded-lg p-3 text-lg focus:ring-2 focus:ring-[#EE5B2C] focus:border-transparent outline-none transition-all" />
                <p className="text-xs text-gray-500 mt-1">Documented SDE or adjusted EBITDA - not gross profit.</p>
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-bold text-gray-700 mb-2">Earnings Basis</label>
                <div className="flex flex-wrap gap-4">
                  <label className="flex items-center gap-2 cursor-pointer bg-gray-50 px-4 py-3 rounded-lg border border-gray-200 hover:border-gray-300 flex-1">
                    <input type="radio" name="basis" value="SDE" checked={basis === 'SDE'} onChange={() => setBasis('SDE')} className="w-4 h-4 text-[#EE5B2C] focus:ring-[#EE5B2C]" />
                    <span className="font-medium text-gray-800">SDE (Owner-operated)</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer bg-gray-50 px-4 py-3 rounded-lg border border-gray-200 hover:border-gray-300 flex-1">
                    <input type="radio" name="basis" value="EBITDA" checked={basis === 'EBITDA'} onChange={() => setBasis('EBITDA')} className="w-4 h-4 text-[#EE5B2C] focus:ring-[#EE5B2C]" />
                    <span className="font-medium text-gray-800">Adjusted EBITDA (Management-operated)</span>
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">3-Year Revenue Trend</label>
                <select value={growth} onChange={e => setGrowth(e.target.value)} className="w-full border border-gray-300 rounded-lg p-3 bg-white focus:ring-2 focus:ring-[#EE5B2C] outline-none">
                  <option value="-2">Declining more than 10%</option>
                  <option value="-1">Declining up to 10%</option>
                  <option value="0">Stable</option>
                  <option value="1">Growing 5%–15%</option>
                  <option value="2">Growing more than 15%</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Financial-Record Quality</label>
                <select value={records} onChange={e => setRecords(e.target.value)} className="w-full border border-gray-300 rounded-lg p-3 bg-white focus:ring-2 focus:ring-[#EE5B2C] outline-none">
                  <option value="-2">Incomplete / cash not verified</option>
                  <option value="-1">Basic P&L only</option>
                  <option value="0">Tax returns and P&L available</option>
                  <option value="2">Accrual statements and clean add-backs</option>
                </select>
              </div>
            </div>
          </div>

          {/* Section 2 */}
          <div className="mb-10">
            <h3 className="text-2xl font-bold text-[#022B3A] border-b border-gray-100 pb-2 mb-6">HVAC Operating Quality</h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Maintenance / Recurring Revenue</label>
                <select value={recurring} onChange={e => setRecurring(e.target.value)} className="w-full border border-gray-300 rounded-lg p-3 bg-white focus:ring-2 focus:ring-[#EE5B2C] outline-none">
                  <option value="-1">Under 5%</option>
                  <option value="0">5%–15%</option>
                  <option value="1">16%–30%</option>
                  <option value="2">More than 30%</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Service and Replacement Mix</label>
                <select value={serviceMix} onChange={e => setServiceMix(e.target.value)} className="w-full border border-gray-300 rounded-lg p-3 bg-white focus:ring-2 focus:ring-[#EE5B2C] outline-none">
                  <option value="-2">Mostly new construction/projects</option>
                  <option value="0">Balanced mix</option>
                  <option value="2">Mostly service, repair and replacement</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Owner Dependence</label>
                <select value={owner} onChange={e => setOwner(e.target.value)} className="w-full border border-gray-300 rounded-lg p-3 bg-white focus:ring-2 focus:ring-[#EE5B2C] outline-none">
                  <option value="-2">Owner is lead technician/salesperson</option>
                  <option value="-1">Owner runs daily operations</option>
                  <option value="0">Manager and documented systems</option>
                  <option value="2">Independent management team</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Technician & Management Stability</label>
                <select value={team} onChange={e => setTeam(e.target.value)} className="w-full border border-gray-300 rounded-lg p-3 bg-white focus:ring-2 focus:ring-[#EE5B2C] outline-none">
                  <option value="-2">Short staffed / high turnover</option>
                  <option value="0">Adequate and stable</option>
                  <option value="2">Strong bench and management depth</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Largest Customer Share</label>
                <select value={concentration} onChange={e => setConcentration(e.target.value)} className="w-full border border-gray-300 rounded-lg p-3 bg-white focus:ring-2 focus:ring-[#EE5B2C] outline-none">
                  <option value="2">Under 10%</option>
                  <option value="0">10%–20%</option>
                  <option value="-1">21%–35%</option>
                  <option value="-2">Over 35%</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">License / Qualifying-Agent Continuity</label>
                <select value={license} onChange={e => setLicense(e.target.value)} className="w-full border border-gray-300 rounded-lg p-3 bg-white focus:ring-2 focus:ring-[#EE5B2C] outline-none">
                  <option value="-2">Uncertain after owner exits</option>
                  <option value="0">Transition needs planning</option>
                  <option value="2">Transferable continuity established</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Fleet and Equipment Condition</label>
                <select value={fleet} onChange={e => setFleet(e.target.value)} className="w-full border border-gray-300 rounded-lg p-3 bg-white focus:ring-2 focus:ring-[#EE5B2C] outline-none">
                  <option value="-1">Major replacement needed</option>
                  <option value="0">Average / maintained</option>
                  <option value="1">Modern and well maintained</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Routes / Service-Territory Density</label>
                <select value={territory} onChange={e => setTerritory(e.target.value)} className="w-full border border-gray-300 rounded-lg p-3 bg-white focus:ring-2 focus:ring-[#EE5B2C] outline-none">
                  <option value="-1">Scattered / long drive times</option>
                  <option value="0">Average coverage</option>
                  <option value="1">Dense, efficient routes</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Excess Non-Operating Assets</label>
                <input type="number" value={assets} onChange={e => setAssets(e.target.value)} placeholder="$0" className="w-full border border-gray-300 rounded-lg p-3 bg-white focus:ring-2 focus:ring-[#EE5B2C] outline-none" />
                <p className="text-xs text-gray-500 mt-1">Only assets not required to produce earnings.</p>
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Debt or Liabilities Assumed</label>
                <input type="number" value={liabilities} onChange={e => setLiabilities(e.target.value)} placeholder="$0" className="w-full border border-gray-300 rounded-lg p-3 bg-white focus:ring-2 focus:ring-[#EE5B2C] outline-none" />
              </div>
            </div>
          </div>

          <div className="flex gap-4 border-t border-gray-100 pt-8">
            <button type="submit" className="px-8 py-4 bg-[#EE5B2C] hover:bg-orange-600 text-white font-bold rounded-xl shadow-lg transition-all text-lg">
              Calculate Preliminary Range
            </button>
            <button type="button" onClick={resetAll} className="px-8 py-4 bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold rounded-xl transition-all text-lg">
              Clear
            </button>
          </div>
        </form>

        <AnimatePresence>
          {results && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-12 pt-12 border-t-2 border-gray-100"
            >
              <h2 className="text-3xl font-black text-[#022B3A] mb-2 text-center">Preliminary Broker Opinion Range</h2>
              <p className="text-center text-gray-500 mb-10 font-medium">Based primarily on normalized {results.basis}, with a revenue cross-check and operating-quality adjustments.</p>

              <div className="grid md:grid-cols-3 gap-6 mb-10">
                <div className="bg-gray-50 rounded-2xl p-6 text-center border border-gray-200">
                  <span className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-2 block">Low</span>
                  <strong className="text-2xl font-black text-[#022B3A]">{results.low}</strong>
                </div>
                <div className="bg-blue-50/50 rounded-2xl p-8 text-center border border-blue-100 shadow-md transform md:-translate-y-2">
                  <span className="text-sm font-bold text-[#EE5B2C] uppercase tracking-widest mb-2 block">Midpoint</span>
                  <strong className="text-4xl font-black text-[#022B3A]">{results.mid}</strong>
                </div>
                <div className="bg-gray-50 rounded-2xl p-6 text-center border border-gray-200">
                  <span className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-2 block">High</span>
                  <strong className="text-2xl font-black text-[#022B3A]">{results.high}</strong>
                </div>
              </div>

              <div className="mb-10">
                <div className="flex justify-between items-end mb-2">
                  <span className="font-bold text-gray-700">Transferability and Quality Score</span>
                  <span className="font-black text-[#022B3A] text-lg">{Math.round(results.score)}/100</span>
                </div>
                <div className="h-3 w-full bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-orange-400 to-green-500 rounded-full" style={{ width: `${results.score}%` }}></div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-12">
                <div className="border border-gray-200 rounded-xl p-5 bg-white">
                  <span className="block text-sm text-gray-500 font-medium mb-1">Applied Earnings Range</span>
                  <b className="text-lg text-[#022B3A]">{results.earnMultiple}</b>
                </div>
                <div className="border border-gray-200 rounded-xl p-5 bg-white">
                  <span className="block text-sm text-gray-500 font-medium mb-1">Revenue Cross-Check</span>
                  <b className="text-lg text-[#022B3A]">{results.revMultiple}</b>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-10">
                <div>
                  <h3 className="text-xl font-bold text-green-700 mb-4 flex items-center gap-2">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    Factors Supporting Value
                  </h3>
                  <ul className="space-y-3">
                    {results.strengths.map((str: string, i: number) => (
                      <li key={i} className="flex text-sm text-gray-700 font-medium">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-1.5 mr-2 flex-shrink-0"></span>
                        {str}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-orange-600 mb-4 flex items-center gap-2">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                    Items Requiring Broker Review
                  </h3>
                  <ul className="space-y-3">
                    {results.risks.map((risk: string, i: number) => (
                      <li key={i} className="flex text-sm text-gray-700 font-medium">
                        <span className="w-1.5 h-1.5 rounded-full bg-orange-400 mt-1.5 mr-2 flex-shrink-0"></span>
                        {risk}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 text-xs text-gray-500 leading-relaxed border border-gray-100">
                The estimate assumes an arm’s-length asset sale of a going concern and excludes real estate unless separately appraised. Working capital, inventory, accounts receivable, debt, taxes, financing, deal structure and transition terms can materially change proceeds.
              </div>

            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="mt-8 text-xs text-gray-400 text-center px-4 leading-relaxed">
        <strong>Methodology:</strong> The model uses a screened sample of HVAC sold comparables supplied from Business Brokers of Florida and national sold-business benchmarks published by BizBuySell. National BizBuySell data reports 2021–2025 HVAC sold-business quartiles of 1.99×–3.33× owner earnings and 0.38×–0.74× revenue. Results are adjusted for company-specific transferability and risk; they are not a substitute for broker analysis.
      </div>
    </div>
  );
}
