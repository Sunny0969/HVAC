const fs = require('fs');

function fixStickyAndSchema(filePath, isFlorida) {
  let code = fs.readFileSync(filePath, 'utf8');

  // 1. Fix the sticky layout
  // Replace the flex container to remove items-start
  code = code.replace(
    'className="flex flex-col lg:flex-row gap-12 relative items-start"',
    'className="flex flex-col lg:flex-row gap-12 relative"'
  );
  
  // Replace the aside block to be a stretched container with a sticky inner div
  const oldAsideRegex = /<aside className="[^"]*w-\[35%\].*?sticky.*?>[\s\S]*?<\/aside>/;
  const newAside = `<aside className="hidden lg:block lg:w-[35%] xl:w-[30%] relative">
              <div className="sticky top-28 max-h-[85vh] overflow-y-auto custom-scrollbar space-y-8 pb-10">
                {tocItems && tocItems.length > 0 && (
                  <TableOfContents items={tocItems} />
                )}
              </div>
            </aside>`;
            
  // If we can't find it with sticky, maybe it's without sticky in resources?
  // Let's just replace the whole aside.
  const asideRegex = /<aside[^>]*>[\s\S]*?<\/aside>/;
  code = code.replace(asideRegex, newAside);

  // 2. Add HowTo and Speakable Schemas
  if (isFlorida) {
    // For florida/page.tsx, inject hardcoded HowTo and Speakable
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
    
    code = code.replace(
      'dangerouslySetInnerHTML={{ __html: `[${JSON.stringify(articleSchema)},${JSON.stringify(faqSchema)}]` }}',
      'dangerouslySetInnerHTML={{ __html: `[${JSON.stringify(articleSchema)},${JSON.stringify(faqSchema)},${JSON.stringify(howToSchema)},${JSON.stringify(speakableSchema)}]` }}'
    );
  }
  
  fs.writeFileSync(filePath, code, 'utf8');
}

fixStickyAndSchema('src/app/florida/page.tsx', true);
fixStickyAndSchema('src/app/resources/[slug]/page.tsx', false);

