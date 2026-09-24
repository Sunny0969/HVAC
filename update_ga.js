const fs = require('fs');
const path = 'src/app/layout.tsx';
let content = fs.readFileSync(path, 'utf8');

content = content.replace(
  'const gaId = process.env.NEXT_PUBLIC_GA_ID;',
  'const gaId = "G-N89TK8JF9G";'
);
content = content.replace(
  'const isRealGa = gaId && gaId !== "G-XXXXXXXXXX";',
  'const isRealGa = true;'
);

fs.writeFileSync(path, content);
console.log("Updated Google Analytics tag");
