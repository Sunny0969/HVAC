const fs = require('fs');
let code = fs.readFileSync('src/app/sell-your-hvac-business/page.tsx', 'utf8');

if (!code.includes('JSON.stringify(articleSchema)')) {
  code = code.replace(
    'dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdService) }}',
    'dangerouslySetInnerHTML={{ __html: `[${JSON.stringify(articleSchema)},${JSON.stringify(jsonLdService)}]` }}'
  );
}

fs.writeFileSync('src/app/sell-your-hvac-business/page.tsx', code, 'utf8');
