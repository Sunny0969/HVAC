const fs = require('fs');
const path = 'src/views/components/WhatsAppTracker.tsx';
let content = fs.readFileSync(path, 'utf8');

content = content.replace(
  "headers: { 'Content-Type': 'application/json' },",
  "headers: { 'Content-Type': 'application/json' },\n            keepalive: true,"
);

fs.writeFileSync(path, content);
console.log("Added keepalive to fetch in WhatsAppTracker");
