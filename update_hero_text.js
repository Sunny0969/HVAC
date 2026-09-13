const fs = require('fs');
let code = fs.readFileSync('src/views/components/Hero.tsx', 'utf8');

code = code.replace(
  'Expert valuation and discrete sales for HVAC companies across the Sunshine State.',
  'As the leading Florida HVAC Business Broker, we provide expert valuation and discrete sales for HVAC companies across the Sunshine State.'
);

fs.writeFileSync('src/views/components/Hero.tsx', code, 'utf8');
