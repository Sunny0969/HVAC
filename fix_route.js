const fs = require('fs');

const path = 'src/admin/AdminApp.tsx';
let content = fs.readFileSync(path, 'utf8');

content = content.replace(
  '<Route path="blogs/edit/:id" element={<AdminBlogForm />} />',
  '<Route path="blogs/:id/edit" element={<AdminBlogForm />} />'
);

fs.writeFileSync(path, content);
console.log("Fixed AdminApp route for blogs edit");
