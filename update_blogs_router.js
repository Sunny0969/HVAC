const fs = require('fs');

const path = 'cms-backend/src/routes/blogs.js';
let content = fs.readFileSync(path, 'utf8');

if (!content.includes('body.guideType')) {
  content = content.replace(
    'if (body.category !== undefined) {',
    `if (body.guideType != null) blog.guideType = String(body.guideType).trim();
  if (body.category !== undefined) {`
  );

  fs.writeFileSync(path, content);
  console.log("Added guideType to applyBlogFields in blogs.js");
} else {
  console.log("guideType already in blogs.js");
}
