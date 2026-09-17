const fs = require('fs');
const filePath = 'src/app/[region]/[city]/page.tsx';
let content = fs.readFileSync(filePath, 'utf8');

content = content.replace(/params: Promise<\{ city: string \}>;/g, 'params: Promise<{ region: string; city: string }>;');

content = content.replace(/const citySlug = resolvedParams\.city\.toLowerCase\(\);/g, "const citySlug = resolvedParams.city.toLowerCase();\n  const regionSlug = resolvedParams.region.toLowerCase();");

content = content.replace(/https:\/\/www\.hvacexitadvisors\.com\/florida\/\$\{citySlug\}/g, "https://www.hvacexitadvisors.com/${regionSlug}/${citySlug}");

content = content.replace(/https:\/\/www\.hvacexitadvisors\.com\/florida\/miami/g, "https://www.hvacexitadvisors.com/${regionSlug}");

content = content.replace(/name: 'Florida Markets'/g, "name: `${regionSlug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}`");

fs.writeFileSync(filePath, content);
console.log('Updated [city]/page.tsx');
