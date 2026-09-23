const fs = require('fs');

// 1. Update next.config.ts
let configContent = fs.readFileSync('next.config.ts', 'utf8');
if (!configContent.includes('X-Robots-Tag')) {
  configContent = configContent.replace(
    "{ key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' }",
    "{ key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },\n          { key: 'X-Robots-Tag', value: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' }"
  );
  fs.writeFileSync('next.config.ts', configContent);
  console.log("Updated next.config.ts with X-Robots-Tag.");
}

// 2. Update layout.tsx
let layoutContent = fs.readFileSync('src/app/layout.tsx', 'utf8');
let layoutUpdated = false;

if (layoutContent.includes('lang="en"')) {
  layoutContent = layoutContent.replace('lang="en"', 'lang="en-US"');
  layoutUpdated = true;
  console.log("Updated lang='en' to lang='en-US'.");
}

if (!layoutContent.includes('publisher:')) {
  layoutContent = layoutContent.replace(
    'metadataBase: new URL("https://www.hvacexitadvisors.com"),',
    'metadataBase: new URL("https://www.hvacexitadvisors.com"),\n  publisher: "HVAC Exit Advisors",'
  );
  layoutUpdated = true;
  console.log("Added publisher to metadata.");
}

if (layoutUpdated) {
  fs.writeFileSync('src/app/layout.tsx', layoutContent);
}
