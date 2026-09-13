
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import BreadcrumbSchema from '../../views/components/BreadcrumbSchema';
import TableOfContents from '../../views/components/TableOfContents';
import ContactForm from '../../views/components/ContactForm';

export const metadata: Metadata = {
  title: 'How to Start an HVAC Business in Florida (2026 Guide)',
  description: 'A complete licensing and market roadmap for Florida mechanical contractors. Learn about DBPR Class A/B licenses, EPA 608, HVHZ codes, and startup costs.',
  alternates: {
    canonical: 'https://www.hvacexitadvisors.com/florida',
  },
  openGraph: {
    title: 'How to Start an HVAC Business in Florida (2026 Guide) | HVAC Exit Advisors',
    description: 'A complete licensing and market roadmap for Florida mechanical contractors. Learn about DBPR Class A/B licenses, EPA 608, HVHZ codes, and startup costs.',
    url: 'https://www.hvacexitadvisors.com/florida',
    type: 'article',
  },
};

export default function FloridaStateGuidePage() {
  const breadcrumbs = [
    { name: 'Home', item: 'https://www.hvacexitadvisors.com/' },
    { name: 'Florida', item: 'https://www.hvacexitadvisors.com/florida' }
  ];

  const tocItems = [
    { id: 'requirements-at-a-glance', title: 'Florida HVAC Requirements at a Glance' },
    { id: 'path-to-licensing', title: 'The Path to Licensing, Step by Step' },
    { id: 'where-revenue-comes-from', title: 'Where the Revenue Actually Comes From' },
    { id: 'startup-costs', title: 'What It Actually Costs to Get Started' },
    { id: 'frequently-asked-questions', title: 'Frequently Asked Questions' }
  ];

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "How to Start an HVAC Business in Florida (2026)",
    "description": "A comprehensive licensing and market roadmap for Florida mechanical contractors covering DBPR licensing, costs, and market dynamics.",
    "datePublished": "2026-09-13",
    "author": {
      "@type": "Organization",
      "name": "HVAC Exit Advisors",
      "url": "https://www.hvacexitadvisors.com"
    },
    "publisher": {
      "@type": "Organization",
      "name": "HVAC Exit Advisors",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.hvacexitadvisors.com/icon.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.hvacexitadvisors.com/florida"
    }
  };

  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <main className="w-full bg-[#F7F5F0] min-h-screen font-sans pb-24">
        
        {/* Hero Section */}
        <section className="relative w-full h-[60vh] min-h-[400px] overflow-hidden bg-[#022B3A] text-white flex items-center justify-center">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-black/60 z-10" />
            <Image
              src="/why-sell-with-us.jpg"
              alt="Florida HVAC Contractor Guide"
              fill
              priority
              className="object-cover object-center"
            />
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 text-center mt-12">
            <span className="text-sm font-bold uppercase tracking-widest text-[#EE5B2C] bg-orange-100/10 px-4 py-2 rounded-full inline-block mb-6 border border-[#EE5B2C]/30">
              Statewide 2026 Guide
            </span>
            <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight tracking-tight drop-shadow-xl">
              How to Start an <span className="text-[#EE5B2C]">HVAC Business</span> in Florida
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto font-medium">
              A complete licensing and market roadmap for Florida mechanical contractors.
            </p>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
          
          <div className="mb-8 flex justify-between items-center">
            <Link href="/" className="inline-flex items-center text-sm font-bold text-[#EE5B2C] hover:text-[#c44922] transition-colors">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
              Back to Home
            </Link>
          </div>

          <div className="flex flex-col lg:flex-row gap-12 relative items-start">
            
            {/* Left Content Area */}
            <div className="lg:w-[65%] xl:w-[70%]">
              
              <article className="prose prose-lg max-w-none text-gray-800 bg-white p-8 md:p-12 rounded-[2rem] shadow-sm border border-gray-100">
                
                <p className="lead text-xl text-gray-700 font-medium mb-8">
                  Florida doesn't treat HVAC the way most states do. Four things make its rulebook heavier than what you'd find almost anywhere else in the country:
                </p>

                <ul className="space-y-4 mb-8">
                  <li className="flex items-start"><svg className="w-6 h-6 text-[#EE5B2C] mt-1 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/></svg><span><strong>State-issued License Required:</strong> It's one of the few states that requires a state-issued mechanical contractor license before you can touch a central HVAC system. A county competency card won't cut it here. The DBPR's Construction Industry Licensing Board (under Florida Statute 489) requires 4 years of documented field experience plus two proctored exams.</span></li>
                  <li className="flex items-start"><svg className="w-6 h-6 text-[#EE5B2C] mt-1 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/></svg><span><strong>High-Velocity Hurricane Zones (HVHZ):</strong> Miami-Dade and Broward carry the toughest wind-resistance standards in the continental U.S. (up to 195 mph). HVAC hardware often needs Miami-Dade product approval (NOA).</span></li>
                  <li className="flex items-start"><svg className="w-6 h-6 text-[#EE5B2C] mt-1 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/></svg><span><strong>Complex Sales Tax:</strong> Central, ducted HVAC work counts as a real property improvement. You pay tax on materials when buying them and don't charge the customer. Getting this wrong triggers audits.</span></li>
                  <li className="flex items-start"><svg className="w-6 h-6 text-[#EE5B2C] mt-1 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/></svg><span><strong>Strict Workers' Comp:</strong> HVAC is a construction classification, meaning workers' comp is required with just <em>one</em> employee instead of the usual four.</span></li>
                </ul>
                
                <p>
                  Before any of the above applies, your entity must exist. Filing a Florida LLC through Sunbiz costs $125 total and takes 3�5 days. 
                </p>
                <p>
                  On the upside, Florida HVAC work is incredibly lucrative. The cooling season runs 8 to 10 months a year, hurricane seasons generate replacement spikes, and the shift from R-410A under the AIM Act guarantees future work. What follows is the specific roadmap to operating legally and profitably.
                </p>

                {/* Section 1 */}
                <h2 id="requirements-at-a-glance" className="text-3xl font-black text-[#022B3A] border-b border-gray-100 pb-4 pt-12 mt-12 scroll-mt-32">
                  Florida HVAC Requirements at a Glance
                </h2>
                
                <div className="overflow-x-auto mt-6">
                  <table className="w-full text-left border-collapse min-w-[700px]">
                    <thead>
                      <tr className="bg-[#022B3A] text-white">
                        <th className="p-4 rounded-tl-lg font-bold">Requirement</th>
                        <th className="p-4 font-bold">Detail</th>
                        <th className="p-4 font-bold">Cost</th>
                        <th className="p-4 rounded-tr-lg font-bold">Timeline</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 border-b border-gray-200">
                      <tr className="bg-gray-50">
                        <td className="p-4 font-medium">4 years documented HVAC experience</td>
                        <td className="p-4 text-gray-600">Mandatory under F.S. 489 before exams</td>
                        <td className="p-4 text-gray-600">No direct fee</td>
                        <td className="p-4 text-gray-600">4 years minimum</td>
                      </tr>
                      <tr>
                        <td className="p-4 font-medium">Trade Knowledge Exam (Class A/B)</td>
                        <td className="p-4 text-gray-600">Proctored via Pearson VUE</td>
                        <td className="p-4 text-gray-600">$80 exam + $135 reg.</td>
                        <td className="p-4 text-gray-600">7.5 hrs (A) / 5 hrs (B)</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="p-4 font-medium">Business and Finance Exam</td>
                        <td className="p-4 text-gray-600">Pearson VUE</td>
                        <td className="p-4 text-gray-600">$80</td>
                        <td className="p-4 text-gray-600">6.5 hours</td>
                      </tr>
                      <tr>
                        <td className="p-4 font-medium">EPA Section 608 Certification</td>
                        <td className="p-4 text-gray-600">Federal requirement</td>
                        <td className="p-4 text-gray-600">$25�$150</td>
                        <td className="p-4 text-gray-600">Lifetime</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="p-4 font-medium">DBPR CILB Class A or B License</td>
                        <td className="p-4 text-gray-600">State mechanical contractor license</td>
                        <td className="p-4 text-gray-600">$145�$245 app + $205 renewal</td>
                        <td className="p-4 text-gray-600">4�8 weeks post-exams</td>
                      </tr>
                      <tr>
                        <td className="p-4 font-medium">Workers' Compensation</td>
                        <td className="p-4 text-gray-600">Construction class</td>
                        <td className="p-4 text-gray-600">Depends on payroll</td>
                        <td className="p-4 text-gray-600">Mandatory at 1+ employees</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Section 2 */}
                <h2 id="path-to-licensing" className="text-3xl font-black text-[#022B3A] border-b border-gray-100 pb-4 pt-12 mt-12 scroll-mt-32">
                  The Path to Licensing, Step by Step
                </h2>

                <h3 className="text-xl font-bold text-[#EE5B2C] mt-8">Step 1 &mdash; Bank Four Years of Documented Experience</h3>
                <p>
                  Florida Statute 489.111 requires 4 years of verifiable HVAC work. Valid paths include working under a licensed Florida HVAC contractor, military HVAC training (DD-214), or accredited trade schools (substituting up to 3 years). Out-of-state work counts if backed by verified employer letters.
                </p>

                <h3 className="text-xl font-bold text-[#EE5B2C] mt-8">Step 2 &mdash; Clear the Trade Knowledge and Business & Finance Exams</h3>
                <p>
                  Both exams are open-book. The <strong>Trade Knowledge Exam</strong> takes 7.5 hours for Class A (unrestricted) or 5 hours for Class B (capped at 25 tons cooling / 500k BTU heating). The <strong>Business and Finance Exam</strong> takes 6.5 hours. Passing score is 70%.
                </p>

                <h3 className="text-xl font-bold text-[#EE5B2C] mt-8">Step 3 &mdash; Pick Up Your EPA Section 608 Certification</h3>
                <p>
                  Federal law (40 CFR Part 82) requires this to handle refrigerants. It costs $25�$150. Crucially, the 2025 update now covers mildly flammable <strong>A2L refrigerants (R-32, R-454B)</strong>, aligning with the federal AIM Act's R-410A phase-down.
                </p>

                <h3 className="text-xl font-bold text-[#EE5B2C] mt-8">Step 4 &mdash; File Your Florida LLC</h3>
                <p>Articles of Organization go through Sunbiz.org for $125. Processed in 3 to 5 business days.</p>

                <h3 className="text-xl font-bold text-[#EE5B2C] mt-8">Step 5 &mdash; Submit Your DBPR Contractor License Application</h3>
                <p>
                  Include your application fee ($145�$245), exam transcripts, experience verification, and proof of General Liability insurance (at least $100k/$25k, though commercial work often requires $1M/$2M). You must also prove financial responsibility via a FICO score of 660+ or by securing a surety bond ($5,000�$10,000).
                </p>

                <h3 className="text-xl font-bold text-[#EE5B2C] mt-8">Step 6 &mdash; Workers' Comp: The One-Employee Trap</h3>
                <p>
                  Because HVAC is a construction trade, the threshold is just <strong>one employee</strong> (including LLC members). Class codes are 5537 (residential) and 5538 (commercial). Owners (min 10%) can file a Notice of Election to Be Exempt for $50.
                </p>

                <h3 className="text-xl font-bold text-[#EE5B2C] mt-8">Step 7 &mdash; Sales Tax: Know Which Rule Applies</h3>
                <p>
                  Central ducted systems are real property improvements (you pay tax on materials, don't charge the customer). Portable/PTAC units are tangible personal property (charge tax on parts and labor). Labor-only service calls aren't taxable. Mixing these up triggers Florida DOR audits.
                </p>

                <h3 className="text-xl font-bold text-[#EE5B2C] mt-8">Step 8 &mdash; Building Code Compliance and the HVHZ</h3>
                <p>
                  Miami-Dade and Broward counties are in the High-Velocity Hurricane Zone. Outdoor condensers need HVHZ-rated anchoring (approved straps and mounts). Expect longer permit timelines and engineering sign-offs.
                </p>

                <h3 className="text-xl font-bold text-[#EE5B2C] mt-8">Step 9 &mdash; Local Tax Receipts and Competency</h3>
                <p>
                  Cities and counties require a Local Business Tax Receipt ($25�$175 annually). Some may require local competency cards for limited-scope repairs.
                </p>

                <h3 className="text-xl font-bold text-[#EE5B2C] mt-8">Step 10 &mdash; Continuing Education</h3>
                <p>
                  14 hours of CE every two years (5 mandatory covering codes/safety, 9 electives). Missing the deadline incurs a $50 late fee.
                </p>

                {/* Section 3 */}
                <h2 id="where-revenue-comes-from" className="text-3xl font-black text-[#022B3A] border-b border-gray-100 pb-4 pt-12 mt-12 scroll-mt-32">
                  Where the Revenue Actually Comes From
                </h2>
                <ul className="space-y-4 mt-6">
                  <li><strong>A cooling season that barely stops:</strong> South Florida practically skips heating. The Panhandle sees 7-8 months of active cooling. High run-hours mean shorter lifespans and endless replacement cycles.</li>
                  <li><strong>Hurricane demand spikes:</strong> Storms damage outdoor units and flood air handlers. Post-storm work can account for 25% to 40% of annual revenue for prepared contractors.</li>
                  <li><strong>The refrigerant transition:</strong> Over 5 million R-410A systems are installed in Florida. The phase-down forces massive replacement to A2L systems over the next decade.</li>
                  <li><strong>Maintenance Agreements:</strong> Florida homeowners pay $150 to $400 annually for PMAs, smoothing out seasonal revenue and securing repeat business.</li>
                </ul>

                <div className="my-10 bg-orange-50 border border-orange-200 rounded-2xl p-8 flex flex-col md:flex-row items-center gap-8 shadow-sm">
                  <div className="flex-1">
                    <h3 className="text-2xl font-black text-[#022B3A] mb-3">Thinking about skipping the startup phase?</h3>
                    <p className="text-gray-700 font-medium mb-0">
                      Buying an existing, cash-flowing HVAC business gives you immediate revenue, a trained workforce, and established maintenance agreements.
                    </p>
                  </div>
                  <div className="flex-shrink-0">
                    <Link href="/buy-an-hvac-business" className="px-6 py-4 bg-[#EE5B2C] hover:bg-[#c44922] text-white font-bold rounded-xl transition-colors inline-block whitespace-nowrap shadow-md hover:shadow-lg">
                      View Businesses for Sale &rarr;
                    </Link>
                  </div>
                </div>

                {/* Section 4 */}
                <h2 id="startup-costs" className="text-3xl font-black text-[#022B3A] border-b border-gray-100 pb-4 pt-12 mt-12 scroll-mt-32">
                  What It Actually Costs to Get Started
                </h2>
                <h3 className="text-xl font-bold mt-6">Service-Only Startup (solo operator)</h3>
                <p>Rough total: <strong>$15,000�$30,000</strong>. Includes licensing ($550), EPA ($150), LLC ($175), Insurance ($1,000+), Used Van ($5K-$10K), Tools & Gauges ($5K-$10K), and Initial Inventory ($1K-$3K).</p>

                <h3 className="text-xl font-bold mt-6">Full-Service Residential Operation (1�2 crews)</h3>
                <p>Rough total: <strong>$30,000�$60,000</strong>. Adds Workers' Comp ($2K-$5K), Professional install tools & sheet metal ($10K-$20K), outfited vans ($10K-$20K), and dispatch software.</p>

                <h3 className="text-xl font-bold mt-6">Premium / Multi-Crew Install Operation</h3>
                <p>Rough total: <strong>$75,000�$200,000+</strong>. Includes commercial auto fleets, large warehouse space ($5K-$15K deposit), massive standing inventory ($10K-$25K), and aggressive SEO/marketing budgets ($3K-$10K/mo).</p>


                {/* Section 5 */}
                <h2 id="frequently-asked-questions" className="text-3xl font-black text-[#022B3A] border-b border-gray-100 pb-4 pt-12 mt-12 scroll-mt-32">
                  Frequently Asked Questions
                </h2>
                
                <h3 className="text-xl font-bold text-[#EE5B2C] mt-6">What license do I actually need to run an HVAC business in Florida?</h3>
                <p>A mechanical contractor license from the DBPR (Class A or Class B). It requires passing grades on the Trade Knowledge and Business & Finance exams, plus four years of documented experience.</p>

                <h3 className="text-xl font-bold text-[#EE5B2C] mt-6">Is EPA certification actually required?</h3>
                <p>Yes. Federal law (EPA Section 608) requires certification to handle refrigerants. It never expires and costs up to $150.</p>
                
                <h3 className="text-xl font-bold text-[#EE5B2C] mt-6">Are HVAC jobs taxable in Florida?</h3>
                <p>It depends. Ducted systems are real property improvements (tax on materials paid by you). Portable units are tangible property (tax charged to customer on parts and labor).</p>

              </article>

              {/* Lower CTA */}
              <div className="mt-12">
                <Link href="/contact-us" className="group block bg-[#022B3A] text-white rounded-[2rem] p-8 md:p-12 text-center hover:bg-[#033c52] transition-colors shadow-xl">
                  <h3 className="text-3xl md:text-4xl font-black mb-4">Want to shortcut the process?</h3>
                  <p className="text-lg text-white/80 font-medium max-w-2xl mx-auto mb-8">
                    Acquiring an established Florida HVAC business gives you immediate cash flow, trained crews, and a seasoned license holder. Let's discuss your acquisition strategy.
                  </p>
                  <span className="inline-flex items-center justify-center px-8 py-4 bg-[#EE5B2C] group-hover:bg-orange-500 text-white font-bold rounded-xl transition-colors shadow-lg">
                    Speak with an Advisor &rarr;
                  </span>
                </Link>
              </div>

            </div>

            {/* Right Sidebar - Sticky TOC & Form */}
            <aside className="lg:w-[35%] xl:w-[30%] space-y-8">
              <TableOfContents items={tocItems} />
              
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8">
                <h3 className="text-xl font-black text-[#022B3A] mb-2">Need Guidance?</h3>
                <p className="text-sm text-gray-600 mb-6 font-medium">Contact our Florida HVAC experts.</p>
                <ContactForm buttonText="Send Message" />
              </div>
            </aside>
            
          </div>
        </div>
      </main>
    </>
  );
}
