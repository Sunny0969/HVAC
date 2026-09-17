const fs = require('fs');
const path = require('path');

const regions = [
  'atlantic-coast',
  'central-florida',
  'gulf-coast',
  'north-florida',
  'south-florida',
  'southwest-florida',
  'tampa-bay'
];

regions.forEach(region => {
  const filePath = path.join(__dirname, 'src', 'app', region, 'page.tsx');
  if (!fs.existsSync(filePath)) return;
  
  let content = fs.readFileSync(filePath, 'utf8');

  // 1. Fix Metadata
  content = content.replace(/title:\s*"([^"]+)",/g, 'title: { absolute: "$1" },');
  
  if (!content.includes('alternates: {')) {
    content = content.replace(/description:\s*("[^"]+"),/, 'description: $1,\n  alternates: {\n    canonical: "https://www.hvacexitadvisors.com/' + region + '"\n  },');
  }

  if (!content.includes('images: [')) {
    const ogRegex = /openGraph:\s*{([\s\S]*?)type:\s*"website",?\s*}/;
    content = content.replace(ogRegex, (match, inner) => {
      return 'openGraph: {' + inner + 'type: "website",\n    images: [{ url: "https://www.hvacexitadvisors.com/images/og-image.jpg", width: 1200, height: 630, alt: "HVAC Exit Advisors" }]\n  }';
    });
  }

  // 2. UI Fixes
  content = content.replace(/<main className="([^"]*)pt-36([^"]*)">/g, '<main className="$1$2">'.replace('  ', ' '));
  content = content.replace(/<main className="([^"]*)pt-32([^"]*)">/g, '<main className="$1$2">'.replace('  ', ' '));
  
  content = content.replace(/<section className="relative w-full bg-\[#022B3A\] py-20([^"]*)items-center\s+text-center">/g, '<section className="relative w-full bg-[#022B3A] pt-36 pb-20$1items-start text-left">');

  content = content.replace(/<div className="max-w-4xl mx-auto z-10 relative">/g, '<div className="max-w-4xl z-10 relative">');
  content = content.replace(/flex flex-col sm:flex-row items-center justify-center gap-4 mt-4/g, 'flex flex-col sm:flex-row items-start justify-start gap-4 mt-4');

  content = content.replace(/text-4xl md:text-5xl lg:text-6xl/g, 'text-3xl md:text-4xl lg:text-5xl');
  content = content.replace(/text-5xl md:text-6xl/g, 'text-4xl md:text-5xl');

  // 3. Form Scroller
  if (!content.includes('overflow-y-auto')) {
     content = content.replace(/<ContactForm buttonText="([^"]+)"\s*\/>/g, '<div className="max-h-[500px] overflow-y-auto custom-scrollbar pr-4 w-full"><ContactForm buttonText="$1" /></div>');
     content = content.replace(/<ContactForm \/>/g, '<div className="max-h-[500px] overflow-y-auto custom-scrollbar pr-4 w-full"><ContactForm /></div>');
  }

  // 4. Audience and Use-Case signal
  content = content.replace(/Whether you want to <strong>buy<\/strong> or <strong>sell<\/strong> a <strong>([^<]+)<\/strong>,/g, '<strong>Audience & Use-Case:</strong> This guide is designed for HVAC business owners preparing to sell, and buyers seeking acquisitions. Use this advice during your exit planning or due diligence phase to evaluate a <strong>$1</strong>.');
  
  fs.writeFileSync(filePath, content);
  console.log('Updated ' + region);
});
