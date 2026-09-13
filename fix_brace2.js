const fs = require('fs');
let code = fs.readFileSync('src/app/page.tsx', 'utf8');
code = code.substring(0, code.lastIndexOf('}'));
fs.writeFileSync('src/app/page.tsx', code, 'utf8');
