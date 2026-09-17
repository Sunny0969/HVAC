const fs = require('fs');
const filePath = 'src/app/[region]/[city]/page.tsx';
let content = fs.readFileSync(filePath, 'utf8');

// Fix the single quotes issue in breadcrumbs schema
content = content.replace(/'https:\/\/www\.hvacexitadvisors\.com\/\$\{regionSlug\}'/g, '`https://www.hvacexitadvisors.com/${regionSlug}`');

// Fix the visual breadcrumbs in the UI
const visualBreadcrumbRegex = /<nav aria-label="Breadcrumb" className="text-sm font-semibold text-gray-500 mb-6 flex items-center[\s\S]*?<\/nav>/;
const newVisualBreadcrumb = `<nav aria-label="Breadcrumb" className="text-sm font-semibold text-gray-500 mb-6 flex items-center space-x-2">
            <Link href="/" className="hover:text-[#EE5B2C] transition-colors">Home</Link>
            <span>/</span>
            <Link href={\`/\${regionSlug}\`} className="hover:text-[#EE5B2C] transition-colors">{regionSlug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}</Link>
            <span>/</span>
            <span className="text-[#022B3A]">{city.name}, Florida</span>
          </nav>`;
          
content = content.replace(visualBreadcrumbRegex, newVisualBreadcrumb);

fs.writeFileSync(filePath, content);
console.log('Fixed visual and schema breadcrumbs in city page');
