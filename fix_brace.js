const fs = require('fs');
let code = fs.readFileSync('src/app/page.tsx', 'utf8');
code = code.replace(/}\n}\n?$/, '}\n');
fs.writeFileSync('src/app/page.tsx', code, 'utf8');
