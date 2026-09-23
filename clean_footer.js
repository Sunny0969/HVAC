const fs = require('fs');

const path = 'src/views/components/Footer.tsx';
let content = fs.readFileSync(path, 'utf8');

// remove imports
content = content.replace('import { useFooterController } from "../../controllers/useFooterController";\n', '');
content = content.replace('import { getRegionSlugForCity } from "../../models/navigationModel";\n', '');

// remove unused destructured variables
content = content.replace('  const { navigationData, floridaCities, isAreasOpen, toggleAreas } = useFooterController();\n', '');

fs.writeFileSync(path, content);
console.log("Cleaned up unused variables.");
