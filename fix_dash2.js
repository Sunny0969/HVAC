const fs = require('fs');
const path = 'src/views/components/Hero.tsx';
let content = fs.readFileSync(path, 'utf8');

content = content.replace(
  / Sell Your Business Confidentially./,
  '- Sell Your Business Confidentially.'
);

fs.writeFileSync(path, content);
console.log("Fixed dash to standard minus sign");
