const fs = require('fs');
const path = 'src/app/florida/page.tsx';
let code = fs.readFileSync(path, 'utf8');

// 1. Add FAQ Schema
const articleSchemaEnd = `    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.hvacexitadvisors.com/florida"
    }
  };`;

const combinedSchema = `    "mainEntityOfPage": {
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
  };`;

code = code.replace(articleSchemaEnd, combinedSchema);

// Replace the dangerouslySetInnerHTML for script to include both
code = code.replace(
  'dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}',
  'dangerouslySetInnerHTML={{ __html: `[${JSON.stringify(articleSchema)},${JSON.stringify(faqSchema)}]` }}'
);

// 2. Enhance Audience & Use-case clarity
const oldSummary = `<div className="bg-white/95 backdrop-blur-sm p-6 md:p-8 rounded-2xl shadow-xl border border-orange-200 mt-10 text-left text-gray-800 max-w-3xl mx-auto">
              <p className="font-black text-[#022B3A] text-xl mb-3">Executive Summary:</p>
              <p className="text-sm md:text-base font-medium leading-relaxed">This guide is explicitly for prospective buyers, investors, and technicians planning to start an HVAC business in Florida. <strong>The bottom line:</strong> You need 4 years of documented experience to qualify for a DBPR Class A or B license, should expect $15,000 to $60,000 in startup costs, and must prepare for strict High-Velocity Hurricane Zone (HVHZ) building codes in South Florida.</p>
            </div>`;

const newSummary = `<div className="bg-white/95 backdrop-blur-sm p-6 md:p-8 rounded-2xl shadow-xl border border-orange-200 mt-10 text-left text-gray-800 max-w-3xl mx-auto">
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
            </div>`;

code = code.replace(oldSummary, newSummary);

// 3. Fix the Sidebar layout
const oldSidebar = `{/* Right Sidebar - Sticky TOC & Form */}
            <aside className="lg:w-[35%] xl:w-[30%]">
              <div className="sticky top-28 space-y-8 pb-10">
                <TableOfContents items={tocItems} />
                
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8 relative z-10">
                  <h3 className="text-xl font-black text-[#022B3A] mb-2">Need Guidance?</h3>
                  <p className="text-sm text-gray-600 mb-6 font-medium">Contact our Florida HVAC experts.</p>
                  <ContactForm buttonText="Send Message" />
                </div>
              </div>
            </aside>`;

const newSidebar = `{/* Right Sidebar */}
            <aside className="lg:w-[35%] xl:w-[30%] space-y-8 relative pb-10">
              <TableOfContents items={tocItems} />
              
              <div className="sticky top-28 bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8 relative z-10">
                <h3 className="text-xl font-black text-[#022B3A] mb-2">Need Guidance?</h3>
                <p className="text-sm text-gray-600 mb-6 font-medium">Contact our Florida HVAC experts.</p>
                <ContactForm buttonText="Send Message" />
              </div>
            </aside>`;

code = code.replace(oldSidebar, newSidebar);

fs.writeFileSync(path, code, 'utf8');
