const fs = require('fs');

let pageContent = fs.readFileSync('src/app/page.tsx', 'utf8');

// Add import
if (!pageContent.includes('import HomeFaq')) {
  pageContent = pageContent.replace(
    "import HomeTopSummary from '../views/components/HomeTopSummary';",
    "import HomeTopSummary from '../views/components/HomeTopSummary';\nimport HomeFaq from '../views/components/HomeFaq';"
  );
}

// Replace section
const startComment = "{/* 9. Explicit FAQ Section (Moved to Bottom) */}";
const endComment = "{/* 10. Closing Section */}";

const startIndex = pageContent.indexOf(startComment);
const endIndex = pageContent.indexOf(endComment);

if (startIndex !== -1 && endIndex !== -1) {
  const newSection = `
      {/* 9. Explicit FAQ Section (Moved to Bottom) */}
      <HomeFaq />

      `;
  
  pageContent = pageContent.substring(0, startIndex) + newSection.trim() + '\n\n      ' + pageContent.substring(endIndex);
  fs.writeFileSync('src/app/page.tsx', pageContent);
  console.log("Updated src/app/page.tsx to use HomeFaq");
} else {
  console.log("Could not find the bounds to replace");
}
