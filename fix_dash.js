const fs = require('fs');
const path = 'src/views/components/Hero.tsx';
let content = fs.readFileSync(path, 'utf8');

content = content.replace(
  '??',
  '—'
);

fs.writeFileSync(path, content);
console.log("Fixed dash");
