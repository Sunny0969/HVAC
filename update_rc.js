const fs = require('fs');
const path = 'src/views/components/ResourcesContent.tsx';
let content = fs.readFileSync(path, 'utf8');

content = content.replace(
  'interface Props {\n  staticArticles: StaticArticle[];\n  cmsBlogs: CmsBlog[];\n}',
  'interface Props {\n  staticArticles: StaticArticle[];\n  cmsBlogs: CmsBlog[];\n  basePath?: string;\n}'
);

content = content.replace(
  'export default function ResourcesContent({ staticArticles, cmsBlogs }: Props) {',
  'export default function ResourcesContent({ staticArticles, cmsBlogs, basePath = "/resources" }: Props) {'
);

content = content.replace(
  'slug: `/resources/${b.slug}`,',
  'slug: `${basePath}/${b.slug}`,'
);

content = content.replace(
  'href: `/resources/${b.slug}`,',
  'href: `${basePath}/${b.slug}`,'
);

fs.writeFileSync(path, content);
console.log("Updated ResourcesContent to accept basePath");
