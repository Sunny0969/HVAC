const fs = require('fs');
let content = fs.readFileSync('src/app/buy-an-hvac-business/page.tsx', 'utf8');

content = content.replace(
  'title: "Buy an HVAC Business in Florida",',
  'title: "Business HVAC | Buy an HVAC Business in Florida",'
);
content = content.replace(
  'title: "Buy an HVAC Business in Florida",',
  'title: "Business HVAC | Buy an HVAC Business in Florida",'
);

content = content.replace(
  'description: "Search for Florida HVAC and mechanical-service acquisitions with a confidential and financially qualified buyer process.",',
  'description: "Looking for a business hvac opportunity? Search for Florida HVAC and mechanical-service acquisitions with a confidential and financially qualified buyer process.",'
);
content = content.replace(
  'description: "Search for Florida HVAC and mechanical-service acquisitions with a confidential and financially qualified buyer process.",',
  'description: "Looking for a business hvac opportunity? Search for Florida HVAC and mechanical-service acquisitions with a confidential and financially qualified buyer process.",'
);

content = content.replace(
  '>\n              Acquire an HVAC Business That Fits Your Objectives\n            </h1>',
  '>Business HVAC: Acquire a Company That Fits Your Objectives</h1>'
);
content = content.replace(
  '>Acquire an HVAC Business That Fits Your Objectives</h1>',
  '>Business HVAC: Acquire a Company That Fits Your Objectives</h1>'
);

fs.writeFileSync('src/app/buy-an-hvac-business/page.tsx', content);
console.log("Updated Buying SEO");
