const fs = require('fs');
const file = 'src/views/components/FeaturedOpportunities.tsx';
let text = fs.readFileSync(file, 'utf8');

text = text.replace('className="object-cover"', 'className="object-cover object-center"');
text = text.replace('className="object-cover transition-transform duration-700 hover:scale-110"', 'className="object-cover object-center transition-transform duration-700 hover:scale-110"');

fs.writeFileSync(file, text, 'utf8');
