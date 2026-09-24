const fs = require('fs');
const path = 'src/app/sitemap.ts';
let content = fs.readFileSync(path, 'utf8');

content = content.replace(
  'const API_URL = ${_rootUrl}/api/public;',
  'const API_URL = `${_rootUrl}/api/public`;'
);

content = content.replace(
  'const res = await fetch(`${API_URL}/listings`);',
  'const res = await fetch(`${API_URL}/listings`);'
); // Just in case, let me double check what was rendered for other template strings

fs.writeFileSync(path, content);
console.log("Fixed backticks in sitemap");
