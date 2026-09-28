const fs = require('fs');
const path = 'src/app/sitemap.ts';
let content = fs.readFileSync(path, 'utf8');

content = content.replace(
  "let prefix = 'resources';",
  "let prefix = 'seller-guides'; // fallback to seller-guides if missing"
);

fs.writeFileSync(path, content);
console.log("Updated sitemap.ts fallback to seller-guides");
