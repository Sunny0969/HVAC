const fs = require('fs');
let text = fs.readFileSync('src/views/components/MarketInsightsFAQ.tsx', 'utf8');

// Replace the replacement character and any common broken dashes with a simple ASCII dash
text = text.replace(//g, ' - ');
text = text.replace(/—/g, ' - '); // em-dash just in case
text = text.replace(/–/g, ' - '); // en-dash just in case
text = text.replace(/’/g, "'");    // smart apostrophe to standard

fs.writeFileSync('src/views/components/MarketInsightsFAQ.tsx', text, 'utf8');
