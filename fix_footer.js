const fs = require('fs');
const filePath = 'src/views/components/Footer.tsx';
let content = fs.readFileSync(filePath, 'utf8');

content = content.replace(/import \{ useFooterController \} from "\.\.\/\.\.\/controllers\/useFooterController";/, 'import { useFooterController } from "../../controllers/useFooterController";\nimport { getRegionSlugForCity } from "../../models/navigationModel";');

content = content.replace(/href=\{`\/florida\/\$\{slug\}`\}/g, "href={`/${getRegionSlugForCity(city)}/${slug}`}");

fs.writeFileSync(filePath, content);
console.log('Updated Footer');
