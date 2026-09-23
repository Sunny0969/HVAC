const fs = require('fs');
let content = fs.readFileSync('src/views/components/HowMuchWorth.tsx', 'utf8');

content = content.replace(
  'When determining how to value a heating and air conditioning business, buyers and brokers analyze several critical performance metrics and operational factors:',
  'When determining how to value a heating and air conditioning business, <a href="/buy-an-hvac-business" class="text-[#EE5B2C] hover:underline font-bold">buyers</a> and brokers analyze several critical performance metrics and operational factors to prepare the company for <a href="/listings" class="text-[#EE5B2C] hover:underline font-bold">listings</a>:'
);

fs.writeFileSync('src/views/components/HowMuchWorth.tsx', content);
console.log("Updated HowMuchWorth links");
