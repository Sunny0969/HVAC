const fs = require('fs');
const path = require('path');
let found = [];
function search(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const full = path.join(dir, file);
    if (fs.statSync(full).isDirectory()) {
      search(full);
    } else if (full.endsWith('.tsx') || full.endsWith('.ts')) {
      const content = fs.readFileSync(full, 'utf8');
      if (content.includes('/free-valuation') && !content.includes('/free-valuation-')) {
        found.push(full);
      }
    }
  }
}
search('./src');
console.log(found);
