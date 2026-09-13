const fs = require('fs');
const file = 'src/app/page.tsx';
let text = fs.readFileSync(file, 'utf8');

if (!text.includes("import MarketInsightsFAQ")) {
  text = text.replace("import FeaturedOpportunities", "import MarketInsightsFAQ from '../views/components/MarketInsightsFAQ';\nimport FeaturedOpportunities");
}

if (!text.includes("<MarketInsightsFAQ />")) {
  text = text.replace("{realFeaturedListings.length > 0 && <FeaturedOpportunities items={realFeaturedListings} />}", "<MarketInsightsFAQ />\n      {realFeaturedListings.length > 0 && <FeaturedOpportunities items={realFeaturedListings} />}");
}

fs.writeFileSync(file, text, 'utf8');
