const fs = require('fs');

// 1. UPDATE HOMEPAGE (src/app/page.tsx)
let homePage = fs.readFileSync('src/app/page.tsx', 'utf8');

// Update SEO Title & Meta Description
homePage = homePage.replace(/title: '.*?'/, "title: 'HVAC Business for Sale | Florida HVAC Businesses'");
homePage = homePage.replace(/description: '.*?'/g, "description: 'Explore HVAC businesses for sale in Florida. Find established HVAC companies and acquisition opportunities with expert guidance from HVAC Exit Advisors.'");

// Update OpenGraph Title
homePage = homePage.replace(/title: '.*?'/, "title: 'HVAC Business for Sale | Florida HVAC Businesses'"); // Might need regex tuning if it catches the wrong one

fs.writeFileSync('src/app/page.tsx', homePage);
console.log("Updated Homepage SEO Metadata");
