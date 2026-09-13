const fs = require('fs');
let code = fs.readFileSync('src/app/hvac-business-valuation-calculator/page.tsx', 'utf8');

code = code.replace(
  'title: "Free Florida HVAC Business Valuation Calculator",',
  'title: "Free HVAC Business Valuation Calculator | Florida",'
);

fs.writeFileSync('src/app/hvac-business-valuation-calculator/page.tsx', code, 'utf8');
