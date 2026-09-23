const fs = require('fs');

// 1. HERO COMPONENT (Homepage H1)
let heroContent = fs.readFileSync('src/views/components/Hero.tsx', 'utf8');
heroContent = heroContent.replace(
  '>Sell Your HVAC Business Confidentially and With Confidence</h1>',
  '>HVAC Business for Sale</h1>'
);
fs.writeFileSync('src/views/components/Hero.tsx', heroContent);
console.log("Updated Hero H1");

// 2. CITY PAGES (H1 and SEO)
let cityPage = fs.readFileSync('src/app/[region]/[city]/page.tsx', 'utf8');
// Replace H1
cityPage = cityPage.replace(
  '<h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight tracking-tight drop-shadow-xl">{cityName} HVAC Business Sales</h1>',
  '<h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight tracking-tight drop-shadow-xl">HVAC Business Broker in {cityName}, Florida</h1>'
);
// Replace other potential variations if they differ
cityPage = cityPage.replace(
  '<h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight tracking-tight drop-shadow-xl capitalize">{cityName} HVAC Business Sales</h1>',
  '<h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight tracking-tight drop-shadow-xl capitalize">HVAC Business Broker in {cityName}, Florida</h1>'
);
fs.writeFileSync('src/app/[region]/[city]/page.tsx', cityPage);
console.log("Updated City Page H1");
