const fs = require('fs');

const path = 'src/views/components/AreasWeServe.tsx';
let content = fs.readFileSync(path, 'utf8');

// Add Link import if not present
if (!content.includes('import Link from "next/link";')) {
  content = content.replace("import React from 'react';", "import React from 'react';\nimport Link from 'next/link';");
}

// Add slug mapping to regions
const mapReplace = `  {
    name: "South Florida",
    slug: "south-florida",`;
if (!content.includes('slug: "south-florida"')) {
  content = content.replace('name: "South Florida",', 'name: "South Florida",\n    slug: "south-florida",');
  content = content.replace('name: "Southwest Florida",', 'name: "Southwest Florida",\n    slug: "southwest-florida",');
  content = content.replace('name: "Central Florida",', 'name: "Central Florida",\n    slug: "central-florida",');
  content = content.replace('name: "Tampa Bay",', 'name: "Tampa Bay",\n    slug: "tampa-bay",');
  content = content.replace('name: "Atlantic Coast",', 'name: "Atlantic Coast",\n    slug: "atlantic-coast",');
  content = content.replace('name: "Gulf Coast",', 'name: "Gulf Coast",\n    slug: "gulf-coast",');
  content = content.replace('name: "North Florida & Panhandle",', 'name: "North Florida & Panhandle",\n    slug: "north-florida",');
}

// Replace the h3 with a Link
const h3Search = `<h3 className="text-lg font-bold text-[#022B3A]">{region.name}</h3>`;
const h3Replace = `<h3 className="text-lg font-bold text-[#022B3A]">
                  <Link href={\`/\${region.slug}\`} className="hover:text-[#EE5B2C] hover:underline transition-colors">
                    {region.name}
                  </Link>
                </h3>`;

if (content.includes(h3Search)) {
  content = content.replace(h3Search, h3Replace);
  fs.writeFileSync(path, content);
  console.log("Updated AreasWeServe.tsx with proper links.");
} else {
  console.log("Could not find h3 tag to replace.");
}

