const fs = require('fs');

let sellPage = fs.readFileSync('src/app/sell-your-hvac-business/page.tsx', 'utf8');

sellPage = sellPage.replace(
  "title: 'Sell Your HVAC Business in Florida',",
  "title: 'HVAC Business for Sale | Sell Your Florida HVAC Business',"
);
sellPage = sellPage.replace(
  "title: 'Sell Your HVAC Business in Florida',",
  "title: 'HVAC Business for Sale | Sell Your Florida HVAC Business',"
);
sellPage = sellPage.replace(
  /description: 'Prepare, value and confidentially market your Florida HVAC business to qualified buyers with transaction support through closing.'/g,
  "description: 'Looking for an HVAC business for sale? Prepare, value and confidentially market your Florida HVAC business to qualified buyers with transaction support.'"
);
sellPage = sellPage.replace(
  '>A Structured Process for Selling Your HVAC Business</h1>',
  '>HVAC Companies for Sale</h1>'
);

fs.writeFileSync('src/app/sell-your-hvac-business/page.tsx', sellPage);
console.log("Updated Sell Page SEO & H1");
