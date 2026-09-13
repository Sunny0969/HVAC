const fs = require('fs');
let code = fs.readFileSync('src/views/components/SellPageContent.tsx', 'utf8');

code = code.replace(
  'faq.a\n                          )}',
  '<><strong>Short Answer:</strong> {faq.a}</>\n                          )}'
);

fs.writeFileSync('src/views/components/SellPageContent.tsx', code, 'utf8');
