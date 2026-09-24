const fs = require('fs');
const path = 'src/views/components/Hero.tsx';
let content = fs.readFileSync(path, 'utf8');

// The target text:
// Sell Your HVAC Business <span className="text-[#EE5B2C]">Confidentially and With Confidence</span>

content = content.replace(
  'Sell Your HVAC Business <span className="text-[#EE5B2C]">Confidentially and With Confidence</span>',
  'HVAC Business for Sale <br className="hidden md:block" /> <span className="text-[#EE5B2C]">?? Sell Your Business Confidentially.</span>'
);

fs.writeFileSync(path, content);
console.log("Updated Hero heading to match exact SEO requirement with 2 colors");
