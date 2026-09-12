const fs = require('fs');
const files = [
  'src/app/listings/page.tsx',
  'src/app/listings/[slug]/page.tsx',
  'src/app/resources/page.tsx',
  'src/views/components/ListingLeadForm.tsx'
];

files.forEach(f => {
  if (!fs.existsSync(f)) return;
  let text = fs.readFileSync(f, 'utf8');
  
  // Replace standard API_URL definition
  const oldApiDef1 = /const API_URL = process\.env\.NEXT_PUBLIC_CMS_API_URL \|\| "http:\/\/127\.0\.0\.1:4000\/api\/public";/g;
  const oldApiDef2 = /const API_URL = process\.env\.NEXT_PUBLIC_CMS_API_URL \|\| "http:\/\/127\.0\.0\.1:4000\/api";/g;
  
  const newApiDef = `const _base = (process.env.NEXT_PUBLIC_CMS_API_URL || "http://127.0.0.1:4000/api").replace(/\\/$/, '');
const API_URL = _base.endsWith('/public') ? _base : _base + '/public';`;

  if (text.match(oldApiDef1) || text.match(oldApiDef2)) {
    text = text.replace(oldApiDef1, newApiDef).replace(oldApiDef2, newApiDef);
    fs.writeFileSync(f, text, 'utf8');
    console.log('Fixed API_URL in ' + f);
  }
});
