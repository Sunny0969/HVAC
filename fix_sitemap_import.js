const fs = require('fs');
const filePath = 'src/app/sitemap.ts';
let content = fs.readFileSync(filePath, 'utf8');

if (!content.includes('getRegionSlugForCity')) {
  content = content.replace(/import \{ floridaCities \} from '.*?navigationModel';/, "import { floridaCities, getRegionSlugForCity } from '../models/navigationModel';");
} else {
  // If it's already there but wasn't imported correctly? 
  // Let's just force rewrite the import
  content = content.replace(/import \{ floridaCities \} from '.*?navigationModel';/, "import { floridaCities, getRegionSlugForCity } from '../models/navigationModel';");
}

fs.writeFileSync(filePath, content);
console.log('Fixed sitemap.ts import');
