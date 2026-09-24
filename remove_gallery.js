const fs = require('fs');
const path = 'src/models/navigationModel.ts';
let content = fs.readFileSync(path, 'utf8');

content = content.replace(/\s*\{\s*label:\s*"Gallery",\s*href:\s*"#"\s*\},/g, '');

fs.writeFileSync(path, content);
console.log("Removed Gallery from navigation");
