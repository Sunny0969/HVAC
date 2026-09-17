const fs = require('fs');
const path = require('path');
const regions = ['atlantic-coast', 'central-florida', 'gulf-coast', 'north-florida', 'south-florida', 'southwest-florida', 'tampa-bay'];

regions.forEach(region => {
  const filePath = path.join(__dirname, 'src', 'app', region, 'page.tsx');
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');

    // 1. Hero Alignment
    content = content.replace(
      /<section className="relative w-full bg-\[#022B3A\] pt-36 pb-20 px-4 sm:px-6 lg:px-8 flex flex-col items-start text-left">/g,
      '<section className="relative w-full bg-[#022B3A] pt-36 pb-20 px-4 sm:px-6 lg:px-8">'
    );
    
    // Add the max-w-7xl wrapper around max-w-4xl
    // Look for `<div className="max-w-4xl z-10 relative">` and replace it
    content = content.replace(
      /<div className="max-w-4xl z-10 relative">/g,
      '<div className="max-w-7xl mx-auto relative z-10">\n            <div className="max-w-4xl">'
    );
    
    // Add closing div before </section>
    // Note: The Hero Section is the FIRST </section> in the file.
    let sectionIdx = content.indexOf('</section>');
    if (sectionIdx !== -1) {
      // check if we already added it so we don't double add if script is re-run
      const beforeStr = content.substring(sectionIdx - 30, sectionIdx);
      if (!beforeStr.includes('</div>\n        </section>')) {
        content = content.substring(0, sectionIdx) + '  </div>\n        ' + content.substring(sectionIdx);
      }
    }

    // 2. Form Width
    // Change lg:col-span-8 to lg:col-span-7
    content = content.replace(/<div className="lg:col-span-8 space-y-16">/g, '<div className="lg:col-span-7 space-y-16">');
    // Change lg:col-span-4 to lg:col-span-5
    content = content.replace(/<div className="lg:col-span-4 mt-12 lg:mt-0"/g, '<div className="lg:col-span-5 mt-12 lg:mt-0"');

    fs.writeFileSync(filePath, content);
    console.log(`Updated layout for ${region}`);
  }
});
