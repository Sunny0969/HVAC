const fs = require('fs');

let layoutContent = fs.readFileSync('src/app/layout.tsx', 'utf8');

if (!layoutContent.includes('publisher: "HVAC Exit Advisors"')) {
  layoutContent = layoutContent.replace(
    'metadataBase: new URL("https://www.hvacexitadvisors.com"),',
    'metadataBase: new URL("https://www.hvacexitadvisors.com"),\n  publisher: "HVAC Exit Advisors",'
  );
  fs.writeFileSync('src/app/layout.tsx', layoutContent);
  console.log("Added publisher to metadata object.");
}
