const fs = require('fs');

const sgPath = 'src/app/seller-guides/page.tsx';
let sgContent = fs.readFileSync(sgPath, 'utf8');
sgContent = sgContent.replace(
  '<ResourcesContent staticArticles={[]} cmsBlogs={cmsBlogs} />',
  '<ResourcesContent staticArticles={[]} cmsBlogs={cmsBlogs} basePath="/seller-guides" />'
);
fs.writeFileSync(sgPath, sgContent);

const bgPath = 'src/app/buyer-guides/page.tsx';
let bgContent = fs.readFileSync(bgPath, 'utf8');
bgContent = bgContent.replace(
  '<ResourcesContent staticArticles={[]} cmsBlogs={cmsBlogs} />',
  '<ResourcesContent staticArticles={[]} cmsBlogs={cmsBlogs} basePath="/buyer-guides" />'
);
fs.writeFileSync(bgPath, bgContent);

console.log("Updated guide pages to use basePath");
