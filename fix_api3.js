const fs = require('fs');
const files = [
  'src/app/listings/page.tsx',
  'src/app/listings/[slug]/page.tsx',
  'src/app/resources/page.tsx',
  'src/app/blog/[slug]/page.tsx',
  'src/views/components/ListingLeadForm.tsx'
];

files.forEach(f => {
  if (!fs.existsSync(f)) return;
  let text = fs.readFileSync(f, 'utf8');
  
  const oldApiDef = /const _base = \(process\.env\.NEXT_PUBLIC_CMS_API_URL \|\| "http:\/\/127\.0\.0\.1:4000\/api"\)\.replace\(\/\\\/\\$\/, ''\);\r?\nconst API_URL = _base\.endsWith\('\/public'\) \? _base : _base \+ '\/public';/g;

  const newApiDef = `let _rootUrl = (process.env.NEXT_PUBLIC_CMS_API_URL || "http://127.0.0.1:4000").trim();
_rootUrl = _rootUrl.replace(/\\/api\\/public\\/?$/, '').replace(/\\/api\\/?$/, '').replace(/\\/$/, '');
const API_URL = \`\${_rootUrl}/api/public\`;`;

  if (text.match(oldApiDef)) {
    text = text.replace(oldApiDef, newApiDef);
    fs.writeFileSync(f, text, 'utf8');
    console.log('Fixed API_URL in ' + f);
  } else {
    console.log('No match found in ' + f);
  }
});
