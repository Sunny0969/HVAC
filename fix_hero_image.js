const fs = require('fs');
let code = fs.readFileSync('src/app/hvac-business-valuation-calculator/page.tsx', 'utf8');

code = code.replace(
  '<Image\n              src="/florida-hvac-business-valuation.jpg"\n              alt="Florida HVAC Business Valuation and market multiples"\n              fill\n              priority\n              sizes="100vw"\n              className="object-cover object-center"\n            />',
  '<img src="/florida-hvac-business-valuation.jpg" alt="Florida HVAC Business Valuation and market multiples" className="w-full h-full object-cover object-center" />'
);

fs.writeFileSync('src/app/hvac-business-valuation-calculator/page.tsx', code, 'utf8');
