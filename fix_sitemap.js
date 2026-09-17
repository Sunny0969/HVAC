const fs = require('fs');
const filePath = 'src/app/sitemap.ts';
let content = fs.readFileSync(filePath, 'utf8');

if (!content.includes('getRegionSlugForCity')) {
  content = content.replace(/import \{ floridaCities \} from '\.\.\/models\/navigationModel';/, "import { floridaCities, getRegionSlugForCity } from '../models/navigationModel';");
}
content = content.replace(/url: `\$\{baseUrl\}\/florida\/\$\{slug\}`/g, "url: `${baseUrl}/${getRegionSlugForCity(city)}/${slug}`");

fs.writeFileSync(filePath, content);
console.log('Updated sitemap');
