const fs = require('fs');
const path = 'src/models/navigationModel.ts';
let content = fs.readFileSync(path, 'utf8');

content = content.replace(
  '{ label: "Buyer Process", href: "#" }',
  '{ label: "Buyer Process", href: "/buyer-process" }'
);

fs.writeFileSync(path, content);
console.log("Updated navigation model");
