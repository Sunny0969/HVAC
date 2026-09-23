const fs = require('fs');
let content = fs.readFileSync('src/views/components/SellPageContent.tsx', 'utf8');

// Injecting keywords smoothly
content = content.replace(
  'Selling an HVAC business can involve several connected decisions',
  'Selling an HVAC business can involve several connected decisions. When evaluating hvac companies for sale, buyers consider'
);

content = content.replace(
  'We help owners prepare the business, present its strengths accurately, screen prospective buyers and evaluate the complete economics of each offer.',
  'We help owners prepare the business, present its strengths accurately among other hvac companies for sale, screen prospective buyers looking for an hvac business for sale, and evaluate the complete economics of each offer.'
);

content = content.replace(
  'Preparation reduces surprises during buyer review.',
  'Preparation reduces surprises during buyer review, as buyers often compare multiple hvac companies for sale.'
);

content = content.replace(
  'Major customer, vendor and commercial-contract information',
  'Major customer, vendor and commercial-contract information (crucial when listing hvac companies for sale)'
);

fs.writeFileSync('src/views/components/SellPageContent.tsx', content);
console.log("Updated SellPageContent keywords 1");
