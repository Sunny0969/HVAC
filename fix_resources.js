const fs = require('fs');
let content = fs.readFileSync('src/app/resources/[slug]/page.tsx', 'utf8');

const search = `export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {`;

const replace = `export async function generateStaticParams() {
  try {
    let _rootUrl = (process.env.NEXT_PUBLIC_CMS_API_URL || "http://127.0.0.1:4000").trim();
    _rootUrl = _rootUrl.replace(/\\/api\\/public\\/?$/, '').replace(/\\/api\\/?$/, '').replace(/\\/$/, '');
    const res = await fetch(\`\${_rootUrl}/api/public/blogs\`);
    if (!res.ok) return [];
    const data = await res.json();
    return (data.blogs || []).map((blog: any) => ({ slug: blog.slug }));
  } catch {
    return [];
  }
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {`;

if (content.includes(search) && !content.includes('generateStaticParams')) {
  content = content.replace(search, replace);
  fs.writeFileSync('src/app/resources/[slug]/page.tsx', content);
  console.log("Updated resources");
}
