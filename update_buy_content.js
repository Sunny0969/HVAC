const fs = require('fs');
let content = fs.readFileSync('src/views/components/BuyPageContent.tsx', 'utf8');

content = content.replace(
  'Purchasing an HVAC business requires evaluating more than just historical cash flow.',
  'Purchasing a business hvac requires evaluating more than just historical cash flow.'
);
content = content.replace(
  'Strategic buyers rely on us to identify acquisition targets',
  'Strategic buyers looking for a business hvac rely on us to identify acquisition targets'
);

fs.writeFileSync('src/views/components/BuyPageContent.tsx', content);
console.log("Updated Buying content");
