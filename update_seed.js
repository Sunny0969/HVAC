const fs = require('fs');

const path = 'cms-backend/seed_blog.js';
let code = fs.readFileSync(path, 'utf8');

// Replace specific <h2> with id added
code = code.replace('<h2>HVAC Business in Florida: A Quick Overview</h2>', '<h2 id="overview" class="text-3xl font-black text-[#022B3A] border-b border-gray-100 pb-4 pt-12 mt-12 scroll-mt-32">HVAC Business in Florida: A Quick Overview</h2>');
code = code.replace('<h2>How to Start a HVAC Business in Florida</h2>', '<h2 id="how-to-start" class="text-3xl font-black text-[#022B3A] border-b border-gray-100 pb-4 pt-12 mt-12 scroll-mt-32">How to Start a HVAC Business in Florida</h2>');
code = code.replace('<h2>What Do You Need to Start an HVAC Business in Florida?</h2>', '<h2 id="what-you-need" class="text-3xl font-black text-[#022B3A] border-b border-gray-100 pb-4 pt-12 mt-12 scroll-mt-32">What Do You Need to Start an HVAC Business in Florida?</h2>');
code = code.replace('<h2>Requirements to Start HVAC Business in Florida</h2>', '<h2 id="requirements" class="text-3xl font-black text-[#022B3A] border-b border-gray-100 pb-4 pt-12 mt-12 scroll-mt-32">Requirements to Start HVAC Business in Florida</h2>');
code = code.replace('<h2>HVAC Business in Florida Cost: What It Actually Takes to Get Started</h2>', '<h2 id="startup-costs" class="text-3xl font-black text-[#022B3A] border-b border-gray-100 pb-4 pt-12 mt-12 scroll-mt-32">HVAC Business in Florida Cost: What It Actually Takes to Get Started</h2>');
code = code.replace('<h2>How Much Do HVAC Business Owners Make in Florida?</h2>', '<h2 id="owner-pay" class="text-3xl font-black text-[#022B3A] border-b border-gray-100 pb-4 pt-12 mt-12 scroll-mt-32">How Much Do HVAC Business Owners Make in Florida?</h2>');
code = code.replace('<h2>HVAC Business in Florida Pay: What Owners, Technicians, and Crews Earn</h2>', '<h2 id="pay-details" class="text-3xl font-black text-[#022B3A] border-b border-gray-100 pb-4 pt-12 mt-12 scroll-mt-32">HVAC Business in Florida Pay: What Owners, Technicians, and Crews Earn</h2>');
code = code.replace('<h2>Sunshine: A Plumbing and HVAC Business in Florida</h2>', '<h2 id="sunshine-case" class="text-3xl font-black text-[#022B3A] border-b border-gray-100 pb-4 pt-12 mt-12 scroll-mt-32">Sunshine: A Plumbing and HVAC Business in Florida</h2>');
code = code.replace('<h2>HVAC Business in Florida For Sale: What Buyers Should Know</h2>', '<h2 id="buyers-guide" class="text-3xl font-black text-[#022B3A] border-b border-gray-100 pb-4 pt-12 mt-12 scroll-mt-32">HVAC Business in Florida For Sale: What Buyers Should Know</h2>');
code = code.replace('<h2>HVAC Business for Sale in Tampa, Florida</h2>', '<h2 id="tampa-market" class="text-3xl font-black text-[#022B3A] border-b border-gray-100 pb-4 pt-12 mt-12 scroll-mt-32">HVAC Business for Sale in Tampa, Florida</h2>');
code = code.replace('<h2>HVAC Business for Sale in South Florida</h2>', '<h2 id="south-florida" class="text-3xl font-black text-[#022B3A] border-b border-gray-100 pb-4 pt-12 mt-12 scroll-mt-32">HVAC Business for Sale in South Florida</h2>');
code = code.replace('<h2>What Makes the Best HVAC Business in Florida?</h2>', '<h2 id="best-business" class="text-3xl font-black text-[#022B3A] border-b border-gray-100 pb-4 pt-12 mt-12 scroll-mt-32">What Makes the Best HVAC Business in Florida?</h2>');
code = code.replace('canonicalUrl: "https://www.hvacexitadvisors.com/blog/hvac-business-in-florida"', 'canonicalUrl: "https://www.hvacexitadvisors.com/resources/hvac-business-in-florida"');

fs.writeFileSync(path, code, 'utf8');
