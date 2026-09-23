const fs = require('fs');
let content = fs.readFileSync('src/app/hvac-business-valuation/page.tsx', 'utf8');

// Add import
content = content.replace(
  "import HvacValuationFaq from '../../views/components/HvacValuationFaq';",
  "import HvacValuationFaq from '../../views/components/HvacValuationFaq';\nimport HowMuchWorth from '../../views/components/HowMuchWorth';"
);

// Add component
content = content.replace(
  "{/* FAQs */}",
  "<HowMuchWorth />\n              {/* FAQs */}"
);

fs.writeFileSync('src/app/hvac-business-valuation/page.tsx', content);
console.log("Injected HowMuchWorth");
