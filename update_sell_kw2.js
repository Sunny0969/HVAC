const fs = require('fs');
let content = fs.readFileSync('src/views/components/SellPageContent.tsx', 'utf8');

content = content.replace(
  'A confidential sale should not expose the company?Ts identity before a buyer is properly screened.',
  'A confidential sale should not expose the company?Ts identity before a buyer searching for hvac companies for sale is properly screened.'
);

content = content.replace(
  'Initial marketing can describe the opportunity without revealing information that employees, customers or competitors could use to identify the business.',
  'Initial marketing for an hvac business for sale can describe the opportunity without revealing information that employees, customers or competitors could use to identify the business among other hvac companies for sale.'
);

content = content.replace(
  'When screening prospective buyers, we categorize them based on their operational background and financing strategy.',
  'When screening prospective buyers for hvac companies for sale, we categorize them based on their operational background and financing strategy.'
);

content = content.replace(
  'Here is a brief comparison of typical HVAC buyers.',
  'Here is a brief comparison of typical buyers looking for an hvac business for sale or broader hvac companies for sale.'
);

content = content.replace(
  'The highest headline price is not always the strongest offer.',
  'The highest headline price is not always the strongest offer when reviewing hvac companies for sale.'
);

content = content.replace(
  'We help the seller compare cash at closing, financing conditions',
  'We help the seller of an hvac business for sale compare cash at closing, financing conditions'
);

fs.writeFileSync('src/views/components/SellPageContent.tsx', content);
console.log("Updated SellPageContent keywords 2");
