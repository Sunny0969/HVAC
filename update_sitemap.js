const fs = require('fs');
const path = 'src/app/sitemap.ts';
let content = fs.readFileSync(path, 'utf8');

content = content.replace(
  '{ url: `${baseUrl}/hvac-business-valuation`, lastModified: new Date(), changeFrequency: \'monthly\', priority: 0.9 },',
  '{ url: `${baseUrl}/hvac-business-valuation`, lastModified: new Date(), changeFrequency: \'monthly\', priority: 0.9 },\n    { url: `${baseUrl}/hvac-business-valuation-calculator`, lastModified: new Date(), changeFrequency: \'monthly\', priority: 0.85 },'
);

fs.writeFileSync(path, content);
console.log("Added hvac-business-valuation-calculator to sitemap");
