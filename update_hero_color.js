const fs = require('fs');
const path = 'src/views/components/Hero.tsx';
let content = fs.readFileSync(path, 'utf8');

// The target text:
//           <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-5 drop-shadow-xl tracking-tight leading-tight max-w-3xl">
//             Sell Your HVAC Business Confidentially and With Confidence
//           </h1>

content = content.replace(
  /Sell Your HVAC Business Confidentially and With Confidence/,
  'Sell Your HVAC Business <span className="text-[#EE5B2C]">Confidentially and With Confidence</span>'
);

fs.writeFileSync(path, content);
console.log("Updated Hero heading with 2 colors");
