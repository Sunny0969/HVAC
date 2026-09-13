const fs = require('fs');

const path = 'src/views/components/Footer.tsx';
let code = fs.readFileSync(path, 'utf8');

// The replacement logic:
// We want to add a main Florida link above the city grid.
// Find:
// <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
// Replace with:
// <Link href="/florida" className="text-white hover:text-secondary font-bold transition-colors text-base block mb-3">Florida Statewide Guide &rarr;</Link>
// <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">

code = code.replace(
  '<div className="grid grid-cols-2 sm:grid-cols-3 gap-2">',
  '<Link href="/florida" className="text-white hover:text-secondary font-bold transition-colors text-base block mb-4">Florida State Guide &rarr;</Link>\n            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">'
);

fs.writeFileSync(path, code, 'utf8');
