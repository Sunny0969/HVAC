import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import BreadcrumbSchema from '../../views/components/BreadcrumbSchema';
import TableOfContents from '../../views/components/TableOfContents';
import ContactForm from '../../views/components/ContactForm';

export const metadata: Metadata = {
  title: 'Start an HVAC Business in Florida: 2026 Guide',
  description: 'Thinking about how to start an HVAC business in Florida? Discover the exact licensing steps, startup costs, and owner salaries for 2026.',
  alternates: {
    canonical: 'https://www.hvacexitadvisors.com/florida',
  },
  openGraph: {
    title: 'Start an HVAC Business in Florida: 2026 Guide',
    description: 'Thinking about how to start an HVAC business in Florida? Discover the exact licensing steps, startup costs, and owner salaries for 2026.',
    url: 'https://www.hvacexitadvisors.com/florida',
    type: 'article',
    images: [
      {
        url: 'https://www.hvacexitadvisors.com/why-sell-with-us.jpg',
        width: 1200,
        height: 630,
        alt: 'Florida HVAC Contractor Guide',
      }
    ]
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
    "headline": "Start an HVAC Business in Florida: 2026 Guide",
    "description": "Thinking about how to start an HVAC business in Florida? Discover the exact licensing steps, startup costs, and owner salaries for 2026.",
    "datePublished": "2026-09-13",
    "dateModified": "2026-09-13",
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

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What license do I actually need to run an HVAC business in Florida?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Florida requires a DBPR Construction Industry Licensing Board mechanical contractor license - Class A or Class B - for any central HVAC installation or repair work."
        }
      },
      {
        "@type": "Question",
        "name": "How much does it cost to start an HVAC business in Florida?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Costs range from around $15,000 for a solo, service-only operation to $200,000 or more for a multi-crew commercial business."
        }
      },
      {
        "@type": "Question",
        "name": "Are HVAC jobs taxable in Florida?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "It depends. Ducted systems are real property improvements (tax on materials paid by you). Portable units are tangible property (tax charged to customer on parts and labor)."
        }
      }
    ]
  };


  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Start an HVAC Business in Florida",
    "description": "Step-by-step roadmap for starting, licensing, or acquiring a mechanical contracting operation in Florida.",
    "step": [
      { "@type": "HowToStep", "name": "Document Experience", "text": "Bank Four Years of Documented Experience under F.S. 489." },
      { "@type": "HowToStep", "name": "Pass Exams", "text": "Clear the Trade Knowledge and Business & Finance Exams." },
      { "@type": "HowToStep", "name": "EPA Certification", "text": "Pick Up Your EPA Section 608 Certification." },
      { "@type": "HowToStep", "name": "File LLC", "text": "File Your Florida LLC via Sunbiz." },
      { "@type": "HowToStep", "name": "Submit DBPR Application", "text": "Submit Your DBPR Contractor License Application." }
    ]
  };

  const speakableSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "url": "https://www.hvacexitadvisors.com/florida",
    "name": "Start an HVAC Business in Florida",
    "speakable": {
      "@type": "SpeakableSpecification",
      "xpath": [
        "/html/head/title",
        "/html/head/meta[@name='description']/@content"
      ]
    }
  };

  return (

    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: `[${JSON.stringify(articleSchema)},${JSON.stringify(faqSchema)},${JSON.stringify(howToSchema)},${JSON.stringify(speakableSchema)}]` }}
      />
      <main className="w-full bg-[#F7F5F0] min-h-screen font-sans pb-24">
        
        {/* Hero Section */}
        <section className="relative w-full min-h-[400px] overflow-hidden bg-[#022B3A] text-white flex items-center justify-center pt-24 pb-16">
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
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 text-center">
            <span className="text-sm font-bold uppercase tracking-widest text-[#EE5B2C] bg-orange-100/10 px-4 py-2 rounded-full inline-block mb-6 border border-[#EE5B2C]/30">
              Statewide 2026 Guide
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight tracking-tight drop-shadow-xl">
              Start an HVAC Business in Florida: 2026 Guide
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto font-medium mb-6">
              A complete licensing and market roadmap for Florida mechanical contractors.
            </p>
            
            <div className="mt-6 flex flex-wrap justify-center items-center gap-4 text-sm font-medium text-white/80">
              <span><strong className="text-white">Updated:</strong> Sept 13, 2026</span>
              <span className="opacity-50">|</span>
              <span><strong className="text-white">Industry:</strong> HVAC Services</span>
              <span className="opacity-50">|</span>
              <span><strong className="text-white">Audience:</strong> Technicians & Investors</span>
            </div>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
          
          <div className="mb-8 flex justify-between items-center">
            <Link href="/" className="inline-flex items-center text-sm font-bold text-[#EE5B2C] hover:text-[#c44922] transition-colors">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
              Back to Home
            </Link>
          </div>

          <div className="flex flex-col lg:flex-row gap-12 relative">
            
            {/* Left Content Area */}
            <div className="lg:w-[65%] xl:w-[70%]">
              
              <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-orange-200 mb-10 text-left text-gray-800">
                <h2 className="font-black text-[#022B3A] text-xl mb-3">Executive Summary & Target Audience</h2>
                <ul className="text-sm md:text-base font-medium leading-relaxed space-y-2 mb-4">
                  <li><strong className="text-[#EE5B2C]">Target Audience:</strong> Prospective business buyers, HVAC technicians, and private equity investors.</li>
                  <li><strong className="text-[#EE5B2C]">Industry:</strong> HVAC / Mechanical Contracting.</li>
                  <li><strong className="text-[#EE5B2C]">Primary Use Case:</strong> Step-by-step roadmap for starting, licensing, or acquiring a mechanical contracting operation.</li>
                  <li><strong className="text-[#EE5B2C]">Decision Context:</strong> Evaluating startup costs, licensing timelines, and market profitability in Florida.</li>
                </ul>
                <p className="text-sm md:text-base font-medium leading-relaxed border-t border-gray-200 pt-4 mt-2">
                  <strong>The bottom line:</strong> You need 4 years of documented experience to qualify for a DBPR Class A or B license, should expect $15,000 to $60,000 in startup costs, and must prepare for strict High-Velocity Hurricane Zone (HVHZ) building codes in South Florida.
                </p>
              </div>

              <article className="prose prose-lg max-w-none text-gray-800 bg-white p-8 md:p-12 rounded-[2rem] shadow-sm border border-gray-100">
                
                <p className="lead text-xl text-gray-700 font-medium mb-8">
                  Based on our firm's proprietary data from evaluating over 100 Florida HVAC acquisitions over the past five years, we know that Florida doesn't treat HVAC the way most states do. Four things make its rulebook heavier than what you'd find almost anywhere else in the country:
                </p>

                <ul className="space-y-4 mb-8">
                  <li className="flex items-start"><svg className="w-6 h-6 text-[#EE5B2C] mt-1 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/></svg><span><strong>State-issued License Required:</strong> It's one of the few states that requires a state-issued mechanical contractor license before you can touch a central HVAC system. A county competency card won't cut it here. The DBPR's Construction Industry Licensing Board (under Florida Statute 489) requires 4 years of documented field experience plus two proctored exams.</span></li>
                  <li className="flex items-start"><svg className="w-6 h-6 text-[#EE5B2C] mt-1 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/></svg><span><strong>High-Velocity Hurricane Zones (HVHZ):</strong> Miami-Dade and Broward carry the toughest wind-resistance standards in the continental U.S. (up to 195 mph). HVAC hardware often needs Miami-Dade product approval (NOA).</span></li>
                  <li className="flex items-start"><svg className="w-6 h-6 text-[#EE5B2C] mt-1 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/></svg><span><strong>Complex Sales Tax:</strong> Central, ducted HVAC work counts as a real property improvement. You pay tax on materials when buying them and don't charge the customer. Getting this wrong triggers audits.</span></li>
                  <li className="flex items-start"><svg className="w-6 h-6 text-[#EE5B2C] mt-1 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/></svg><span><strong>Strict Workers' Comp:</strong> HVAC is a construction classification, meaning workers' comp is required with just <em>one</em> employee instead of the usual four.</span></li>
                </ul>
                
                <p>
                  Before any of the above applies, your entity must exist. Filing a Florida LLC through <a href="https://dos.myflorida.com/sunbiz/" target="_blank" rel="noopener noreferrer" className="text-[#EE5B2C] font-bold hover:underline">Sunbiz.org</a> costs $125 total and takes 3-5 days. 
                </p>
                <p>
                  On the upside, Florida HVAC work is incredibly lucrative. The cooling season runs 8 to 10 months a year, hurricane seasons generate replacement spikes, and the shift from R-410A under the AIM Act guarantees future work. What follows is the specific roadmap to operating legally and profitably.
                </p>

                {/* Section 1 */}
                <h2 id="requirements-at-a-glance" className="text-3xl font-black text-[#022B3A] border-b border-gray-100 pb-4 pt-12 mt-12 scroll-mt-32">
                  Florida HVAC Requirements at a Glance
                </h2>
                
                <div className="overflow-x-auto mt-6 not-prose">
                  <table className="w-full text-left border-collapse min-w-[700px] shadow-sm rounded-lg overflow-hidden border border-gray-200">
                    <thead>
                      <tr className="bg-[#022B3A]">
                        <th className="p-4 font-bold text-white">Requirement</th>
                        <th className="p-4 font-bold text-white">Detail</th>
                        <th className="p-4 font-bold text-white">Cost</th>
                        <th className="p-4 font-bold text-white">Timeline</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 bg-white">
                      <tr className="hover:bg-gray-50 transition-colors">
                        <td className="p-4 font-bold text-[#022B3A]">4 years documented HVAC experience</td>
                        <td className="p-4 text-gray-600">Mandatory under F.S. 489 before exams</td>
                        <td className="p-4 text-gray-600">No direct fee</td>
                        <td className="p-4 text-gray-600">4 years minimum</td>
                      </tr>
                      <tr className="hover:bg-gray-50 transition-colors bg-gray-50/50">
                        <td className="p-4 font-bold text-[#022B3A]">Trade Knowledge Exam (Class A/B)</td>
                        <td className="p-4 text-gray-600">Proctored via Pearson VUE</td>
                        <td className="p-4 text-gray-600">$80 exam + $135 reg.</td>
                        <td className="p-4 text-gray-600">7.5 hrs (A) / 5 hrs (B)</td>
                      </tr>
                      <tr className="hover:bg-gray-50 transition-colors">
                        <td className="p-4 font-bold text-[#022B3A]">Business and Finance Exam</td>
                        <td className="p-4 text-gray-600">Pearson VUE</td>
                        <td className="p-4 text-gray-600">$80</td>
                        <td className="p-4 text-gray-600">6.5 hours</td>
                      </tr>
                      <tr className="hover:bg-gray-50 transition-colors bg-gray-50/50">
                        <td className="p-4 font-bold text-[#022B3A]">EPA Section 608 Certification</td>
                        <td className="p-4 text-gray-600">Federal requirement</td>
                        <td className="p-4 text-gray-600">$25-$150</td>
                        <td className="p-4 text-gray-600">Lifetime</td>
                      </tr>
                      <tr className="hover:bg-gray-50 transition-colors">
                        <td className="p-4 font-bold text-[#022B3A]">DBPR CILB Class A/B License</td>
                        <td className="p-4 text-gray-600">State mechanical contractor license</td>
                        <td className="p-4 text-gray-600">$145-$245 app + $205 renewal</td>
                        <td className="p-4 text-gray-600">4-8 weeks post-exams</td>
                      </tr>
                      <tr className="hover:bg-gray-50 transition-colors bg-gray-50/50">
                        <td className="p-4 font-bold text-[#022B3A]">Workers' Comp</td>
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

                <h3 className="text-xl font-bold text-[#EE5B2C] mt-8">Step 1 - Bank Four Years of Documented Experience</h3>
                <p>
                  <a href="http://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0400-0499/0489/0489.html" target="_blank" rel="noopener noreferrer" className="text-[#EE5B2C] font-bold hover:underline">Florida Statute 489.111</a> requires 4 years of verifiable HVAC work. Valid paths include working under a licensed Florida HVAC contractor, military HVAC training (DD-214), or accredited trade schools (substituting up to 3 years). Out-of-state work counts if backed by verified employer letters.
                </p>

                <h3 className="text-xl font-bold text-[#EE5B2C] mt-8">Step 2 - Clear the Trade Knowledge and Business & Finance Exams</h3>
                <p>
                  Both exams are open-book. The <strong>Trade Knowledge Exam</strong> takes 7.5 hours for Class A (unrestricted) or 5 hours for Class B (capped at 25 tons cooling / 500k BTU heating). The <strong>Business and Finance Exam</strong> takes 6.5 hours. Passing score is 70%.
                </p>

                <h3 className="text-xl font-bold text-[#EE5B2C] mt-8">Step 3 - Pick Up Your EPA Section 608 Certification</h3>
                <p>
                  Federal law (40 CFR Part 82) requires this to handle refrigerants. It costs $25-$150. Crucially, the 2025 update now covers mildly flammable <strong>A2L refrigerants (R-32, R-454B)</strong>, aligning with the federal AIM Act's R-410A phase-down.
                </p>

                <h3 className="text-xl font-bold text-[#EE5B2C] mt-8">Step 4 - File Your Florida LLC</h3>
                <p>Articles of Organization go through Sunbiz.org for $125. Processed in 3 to 5 business days.</p>

                <h3 className="text-xl font-bold text-[#EE5B2C] mt-8">Step 5 - Submit Your DBPR Contractor License Application</h3>
                <p>
                  Include your application fee ($145-$245), exam transcripts, experience verification, and proof of General Liability insurance (at least $100k/$25k, though commercial work often requires $1M/$2M). You must also prove financial responsibility via a FICO score of 660+ or by securing a surety bond ($5,000-$10,000).
                </p>

                <h3 className="text-xl font-bold text-[#EE5B2C] mt-8">Step 6 - Workers' Comp: The One-Employee Trap</h3>
                <p>
                  Because HVAC is a construction trade, the threshold is just <strong>one employee</strong> (including LLC members). Class codes are 5537 (residential) and 5538 (commercial). Owners (min 10%) can file a Notice of Election to Be Exempt for $50.
                </p>

                <h3 className="text-xl font-bold text-[#EE5B2C] mt-8">Step 7 - Sales Tax: Know Which Rule Applies</h3>
                <p>
                  Central ducted systems are real property improvements (you pay tax on materials, don't charge the customer). Portable/PTAC units are tangible personal property (charge tax on parts and labor). Labor-only service calls aren't taxable. Mixing these up triggers Florida DOR audits.
                </p>

                <h3 className="text-xl font-bold text-[#EE5B2C] mt-8">Step 8 - Building Code Compliance and the HVHZ</h3>
                <p>
                  Miami-Dade and Broward counties are in the High-Velocity Hurricane Zone. Outdoor condensers need HVHZ-rated anchoring (approved straps and mounts). Expect longer permit timelines and engineering sign-offs.
                </p>

                <h3 className="text-xl font-bold text-[#EE5B2C] mt-8">Step 9 - Local Tax Receipts and Competency</h3>
                <p>
                  Cities and counties require a Local Business Tax Receipt ($25-$175 annually). Some may require local competency cards for limited-scope repairs.
                </p>

                <h3 className="text-xl font-bold text-[#EE5B2C] mt-8">Step 10 - Continuing Education</h3>
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

                <div className="my-10 bg-orange-50 border border-orange-200 rounded-2xl p-8 flex flex-col md:flex-row items-center gap-8 shadow-sm not-prose">
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
                <p>Rough total: <strong>$15,000-$30,000</strong>. Includes licensing ($550), EPA ($150), LLC ($175), Insurance ($1,000+), Used Van ($5K-$10K), Tools & Gauges ($5K-$10K), and Initial Inventory ($1K-$3K).</p>

                <h3 className="text-xl font-bold mt-6">Full-Service Residential Operation (1-2 crews)</h3>
                <p>Rough total: <strong>$30,000-$60,000</strong>. Adds Workers' Comp ($2K-$5K), Professional install tools & sheet metal ($10K-$20K), outfited vans ($10K-$20K), and dispatch software.</p>

                <h3 className="text-xl font-bold mt-6">Premium / Multi-Crew Install Operation</h3>
                <p>Rough total: <strong>$75,000-$200,000+</strong>. Includes commercial auto fleets, large warehouse space ($5K-$15K deposit), massive standing inventory ($10K-$25K), and aggressive SEO/marketing budgets ($3K-$10K/mo).</p>

                {/* Section 5 */}
                <h2 id="frequently-asked-questions" className="text-3xl font-black text-[#022B3A] border-b border-gray-100 pb-4 pt-12 mt-12 scroll-mt-32">
                  Frequently Asked Questions
                </h2>
                
                <h3 className="text-xl font-bold text-[#EE5B2C] mt-6">What license do I actually need to run an HVAC business in Florida?</h3>
                <p className="bg-gray-50 border-l-4 border-[#EE5B2C] p-4 font-medium text-gray-800 my-4">You need a DBPR mechanical contractor license (Class A or B).</p>
                <p>Florida requires a DBPR Construction Industry Licensing Board mechanical contractor license - Class A or Class B - for any central HVAC installation or repair work. A county-level competency card isn't sufficient on its own.</p>

                <h3 className="text-xl font-bold text-[#EE5B2C] mt-6">How much does it cost to start an HVAC business in Florida?</h3>
                <p className="bg-gray-50 border-l-4 border-[#EE5B2C] p-4 font-medium text-gray-800 my-4">Startup costs range from $15,000 for solo operators to over $200,000 for commercial fleets.</p>
                <p>Costs range from around $15,000 for a solo, service-only operation to $200,000 or more for a multi-crew commercial business, depending on your fleet size, tools, insurance, and staffing.</p>
                
                <h3 className="text-xl font-bold text-[#EE5B2C] mt-6">Are HVAC jobs taxable in Florida?</h3>
                <p className="bg-gray-50 border-l-4 border-[#EE5B2C] p-4 font-medium text-gray-800 my-4">Yes, but the tax rules vary by equipment type.</p>
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
              
              {/* Contact Form at the end of the article */}
              <div className="mt-12 bg-white rounded-[2rem] shadow-sm border border-gray-100 p-8 md:p-12">
                <div className="text-center mb-8">
                  <h2 className="text-3xl md:text-4xl font-black text-[#022B3A] mb-4">Have More Questions?</h2>
                  <p className="text-lg text-gray-600 font-medium">Contact our Florida HVAC experts for a confidential discussion.</p>
                </div>
                <ContactForm buttonText="Send Confidential Message" />
              </div>

              {/* Related Resources Block */}
              <div className="mt-12 mb-20">
                <h3 className="text-2xl font-black text-[#022B3A] mb-6">Explore More Resources</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <Link href="/resources/hvac-business-multiples-explained" className="group block bg-white border border-gray-100 hover:border-orange-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#EE5B2C] mb-2 block">Valuation Deep Dive</span>
                    <h4 className="font-bold text-gray-900 group-hover:text-[#EE5B2C] transition-colors leading-snug">HVAC Business Valuation Multiples Explained: SDE vs. EBITDA</h4>
                  </Link>
                  <Link href="/resources/florida-hvac-industry-guide" className="group block bg-white border border-gray-100 hover:border-orange-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#EE5B2C] mb-2 block">Industry Insights</span>
                    <h4 className="font-bold text-gray-900 group-hover:text-[#EE5B2C] transition-colors leading-snug">Ultimate Guide to the Florida HVAC Industry Rules</h4>
                  </Link>
                  <Link href="/listings" className="group block bg-white border border-gray-100 hover:border-orange-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#EE5B2C] mb-2 block">Active Listings</span>
                    <h4 className="font-bold text-gray-900 group-hover:text-[#EE5B2C] transition-colors leading-snug">View Florida HVAC Businesses Currently for Sale</h4>
                  </Link>
                </div>
              </div>

            </div>

            {/* Right Sidebar - Sticky TOC */}
            <aside className="hidden lg:block lg:w-[35%] xl:w-[30%] relative">
              <div className="sticky top-28 max-h-[85vh] overflow-y-auto custom-scrollbar space-y-8 pb-10">
                {tocItems && tocItems.length > 0 && (
                  <TableOfContents items={tocItems} />
                )}
              </div>
            </aside>
            
          </div>
        </div>
      </main>
    </>
  );
}

