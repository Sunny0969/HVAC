const fs = require('fs');

// 1. Sell Page
let sellPage = fs.readFileSync('src/app/sell-your-hvac-business/page.tsx', 'utf8');
sellPage = sellPage.replace(
  'alt="Selling Florida HVAC Business"',
  'alt="hvac companies for sale - Selling Florida HVAC Business"'
);
fs.writeFileSync('src/app/sell-your-hvac-business/page.tsx', sellPage);

// 2. Buy Page
let buyPage = fs.readFileSync('src/app/buy-an-hvac-business/page.tsx', 'utf8');
buyPage = buyPage.replace(
  'alt="Business meeting for HVAC acquisition"',
  'alt="business hvac - Business meeting for HVAC acquisition"'
);
fs.writeFileSync('src/app/buy-an-hvac-business/page.tsx', buyPage);

// 3. Valuation Page
let valPage = fs.readFileSync('src/app/hvac-business-valuation/page.tsx', 'utf8');
valPage = valPage.replace(
  'alt="Florida HVAC Business Valuation and market multiples"',
  'alt="how to value a heating and air conditioning business - Florida HVAC Business Valuation"'
);
valPage = valPage.replace(
  'alt="HVAC Business Valuation"',
  'alt="how to value a heating and air conditioning business - HVAC Business Valuation"'
);
fs.writeFileSync('src/app/hvac-business-valuation/page.tsx', valPage);

// 4. Hero (Homepage)
let hero = fs.readFileSync('src/views/components/Hero.tsx', 'utf8');
hero = hero.replace(
  'alt="Florida commercial rooftop HVAC units at dusk"',
  'alt="hvac business for sale - Florida commercial rooftop HVAC units at dusk"'
);
fs.writeFileSync('src/views/components/Hero.tsx', hero);

console.log("Updated image alts for SEO");
