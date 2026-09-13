const fs = require('fs');
let code = fs.readFileSync('src/app/resources/page.tsx', 'utf8');

code = code.replace(
  '<Image\n              src="/florida-hvac-business-valuation.jpg"\n              alt="Florida HVAC business resources and valuation guides"\n              fill\n              priority\n              sizes="100vw"\n              className="object-cover object-center"\n            />',
  '<img src="/florida-hvac-business-valuation.jpg" alt="Florida HVAC business resources and valuation guides" className="w-full h-full object-cover object-center" />'
);

fs.writeFileSync('src/app/resources/page.tsx', code, 'utf8');
