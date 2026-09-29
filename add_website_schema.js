const fs = require('fs');
let file = 'src/app/page.tsx';
let content = fs.readFileSync(file, 'utf8');

const websiteSchemaStr = `
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "HVAC Exit Advisors",
    "url": "https://www.hvacexitadvisors.com/",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://www.hvacexitadvisors.com/listings?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };
`;

content = content.replace(
  'const baseSchema = {',
  websiteSchemaStr + '\n  const baseSchema = {'
);

content = content.replace(
  'const homeSchema = [baseSchema, webPageSchema, breadcrumbSchema, faqSchema];',
  'const homeSchema = [baseSchema, webPageSchema, websiteSchema, breadcrumbSchema, faqSchema];'
);

fs.writeFileSync(file, content);
console.log("Added WebSite schema.");
