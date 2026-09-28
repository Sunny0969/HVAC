const fs = require('fs');
const path = 'next.config.ts';
let content = fs.readFileSync(path, 'utf8');

content = content.replace(
  "destination: '/resources/:slug*'",
  "destination: '/seller-guides/:slug*'"
);

fs.writeFileSync(path, content);
console.log("Updated next.config.ts blog redirects");
