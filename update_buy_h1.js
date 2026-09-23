const fs = require('fs');
let content = fs.readFileSync('src/app/buy-an-hvac-business/page.tsx', 'utf8');

content = content.replace(
  /Acquire an HVAC Business That Fits Your Objectives/g,
  'Business HVAC'
);

fs.writeFileSync('src/app/buy-an-hvac-business/page.tsx', content);
console.log("Updated Buying H1");
