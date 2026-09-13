const fs = require('fs');
let code = fs.readFileSync('src/views/components/ResourcesContent.tsx', 'utf8');

code = code.replace(
  'href={`/resources/`}',
  'href={`/resources/${post.slug}`}'
);

fs.writeFileSync('src/views/components/ResourcesContent.tsx', code, 'utf8');
