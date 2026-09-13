const fs = require('fs');
let code = fs.readFileSync('src/app/florida/page.tsx', 'utf8');

const declarations = `
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
`;

code = code.replace('  return (', declarations);
fs.writeFileSync('src/app/florida/page.tsx', code, 'utf8');
