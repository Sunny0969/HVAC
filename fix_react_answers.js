const fs = require('fs');
let code = fs.readFileSync('src/views/components/SellPageContent.tsx', 'utf8');

// Revert string manipulation
code = code.replace(/<strong>Short Answer:<\/strong> /g, '');

// Now inject it into the JSX where faq.a is rendered
code = code.replace(
  '{faq.a} <Link',
  '<strong>Short Answer:</strong> {faq.a} <Link'
);

code = code.replace(
  '{faq.a}</p>',
  '<strong>Short Answer:</strong> {faq.a}</p>'
);

// Add Short Answer to the headings
code = code.replace(
  'Here\'s Where to Start.</h2>\n            <p className="text-lg md:text-xl text-gray-600 mb-8 font-medium">Start by',
  'Here\'s Where to Start.</h2>\n            <p className="text-lg md:text-xl text-gray-600 mb-8 font-medium"><strong>Short Answer:</strong> Start by'
);
code = code.replace(
  'Actually Worth?</h2>\n            <p className="text-xl text-white/90 mb-8 font-medium">Most Florida',
  'Actually Worth?</h2>\n            <p className="text-xl text-white/90 mb-8 font-medium"><strong>Short Answer:</strong> Most Florida'
);
code = code.replace(
  'Business?</h2>\n            <p className="text-lg text-gray-700 mb-6 font-medium">Yes, Florida',
  'Business?</h2>\n            <p className="text-lg text-gray-700 mb-6 font-medium"><strong>Short Answer:</strong> Yes, Florida'
);
code = code.replace(
  'How Much Can I Sell My Business For?</h2>\n        <p className="text-gray-700 leading-relaxed font-medium mb-6">Your sale',
  'How Much Can I Sell My Business For?</h2>\n        <p className="text-gray-700 leading-relaxed font-medium mb-6"><strong>Short Answer:</strong> Your sale'
);

fs.writeFileSync('src/views/components/SellPageContent.tsx', code, 'utf8');

// For page.tsx
let pageCode = fs.readFileSync('src/app/sell-your-hvac-business/page.tsx', 'utf8');
pageCode = pageCode.replace(
  'Ready to Find Out What Your Florida HVAC Business Is Worth?</h2>\n          <p className="text-xl text-white/80 mb-10 font-medium">Get a free,',
  'Ready to Find Out What Your Florida HVAC Business Is Worth?</h2>\n          <p className="text-xl text-white/80 mb-10 font-medium"><strong>Short Answer:</strong> Get a free,'
);
fs.writeFileSync('src/app/sell-your-hvac-business/page.tsx', pageCode, 'utf8');

