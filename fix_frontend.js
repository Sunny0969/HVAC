const fs = require('fs');
const path = 'src/app/seller-guides/page.tsx';
let content = fs.readFileSync(path, 'utf8');

content = content.replace(
  'cmsBlogs = (data.blogs || []).filter((b: any) => b.guideType === "seller-guide");',
  'cmsBlogs = (data.blogs || []).filter((b: any) => b.guideType === "seller-guide" || !b.guideType);'
);

fs.writeFileSync(path, content);
console.log("Updated seller-guides fallback");
