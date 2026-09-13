const fs = require('fs');
let text = fs.readFileSync('src/views/components/MarketInsightsFAQ.tsx', 'utf8');

const badChar = String.fromCharCode(65533);
text = text.split(badChar).join(' - ');

fs.writeFileSync('src/views/components/MarketInsightsFAQ.tsx', text, 'utf8');
