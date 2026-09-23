const fs = require('fs');
let content = fs.readFileSync('src/views/components/SellYourHvacFaq.tsx', 'utf8');

content = content.replace(
  'What should I prepare before selling my HVAC business?',
  'What should I prepare before listing hvac companies for sale?'
);

content = content.replace(
  'Prepare three years of tax returns and profit-and-loss statements,',
  'When preparing an hvac business for sale, gather three years of tax returns and profit-and-loss statements,'
);

content = content.replace(
  'Will employees and customers be told that the business is for sale?',
  'Will employees know the hvac business for sale is on the market?'
);

content = content.replace(
  'Not during confidential marketing.',
  'Not during confidential marketing of hvac companies for sale.'
);

content = content.replace(
  'How long does it take to sell an HVAC business?',
  'How long does it take to sell an hvac business for sale?'
);

content = content.replace(
  'Timing varies with preparation, price, buyer qualification,',
  'For hvac companies for sale, timing varies with preparation, price, buyer qualification,'
);

content = content.replace(
  'How do maintenance agreements affect the final valuation?',
  'How do maintenance agreements affect the value of hvac companies for sale?'
);

content = content.replace(
  'Active preventative maintenance agreements (PMAs) demonstrate predictable, recurring cash flow to a potential buyer.',
  'For any hvac business for sale, active preventative maintenance agreements (PMAs) demonstrate predictable, recurring cash flow to buyers reviewing hvac companies for sale.'
);

fs.writeFileSync('src/views/components/SellYourHvacFaq.tsx', content);
console.log("Updated FAQ keywords");
