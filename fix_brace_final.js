const fs = require('fs');
let code = fs.readFileSync('src/app/page.tsx', 'utf8');

// The file should end with exactly:
//   );
// }
code = code.replace(/\);\s*}(\s*})*$/, ');\n}\n');
fs.writeFileSync('src/app/page.tsx', code, 'utf8');
