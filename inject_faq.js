const fs = require('fs');
let code = fs.readFileSync('src/app/how-it-works/page.tsx', 'utf8');

const faqSchema = `
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How long does it take to sell an HVAC business?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Generally, the entire process takes between 4 to 8 months from valuation to closing."
        }
      },
      {
        "@type": "Question",
        "name": "When is the right time to sell my HVAC business?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The best time to sell is when revenue has shown 3 consecutive years of upward growth."
        }
      },
      {
        "@type": "Question",
        "name": "How do you maintain confidentiality during the sale?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We use blind marketing profiles and require strict Non-Disclosure Agreements (NDAs) before revealing any identifying information."
        }
      }
    ]
  };
`;

code = code.replace(
  'const webPageSchema = {',
  faqSchema + '\n  const webPageSchema = {'
);

code = code.replace(
  '${JSON.stringify(howToSchema)},${JSON.stringify(webPageSchema)}',
  '${JSON.stringify(howToSchema)},${JSON.stringify(webPageSchema)},${JSON.stringify(faqSchema)}'
);

fs.writeFileSync('src/app/how-it-works/page.tsx', code, 'utf8');
