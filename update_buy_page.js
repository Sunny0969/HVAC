const fs = require('fs');
let content = fs.readFileSync('d:/HVAC/src/app/buy-an-hvac-business/page.tsx', 'utf8');

if (!content.includes('import BuyTopSummary')) {
  content = content.replace(
    "import BuyPageContent from '../../views/components/BuyPageContent';",
    "import BuyPageContent from '../../views/components/BuyPageContent';\nimport BuyTopSummary from '../../views/components/BuyTopSummary';"
  );
}

content = content.replace(
  '<h1 className="max-w-4xl text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight tracking-tight drop-shadow-xl">\n            Acquire an HVAC Business That Fits Your Objectives\n          </h1>',
  '<h1 className="max-w-4xl text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight tracking-tight drop-shadow-xl">\n            Buy a Florida HVAC Business That Fits Your Strategic Objectives\n          </h1>'
);

if (!content.includes('<BuyTopSummary />')) {
  content = content.replace(
    '</section>\n\n      {/* Main Content Area */}',
    '</section>\n\n      <BuyTopSummary />\n\n      {/* Main Content Area */}'
  );
}

fs.writeFileSync('d:/HVAC/src/app/buy-an-hvac-business/page.tsx', content);
console.log('page.tsx updated');
