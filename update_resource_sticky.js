const fs = require('fs');
const path = 'src/app/resources/[slug]/page.tsx';
let code = fs.readFileSync(path, 'utf8');

// 1. Fix Published date label
code = code.replace(
  '{new Date(blog.date).toLocaleDateString("en-US"',
  'Published: {new Date(blog.date).toLocaleDateString("en-US"'
);

// 2. Fix Sticky Aside
// We want to replace the old aside block with a self-start sticky aside
const oldAside = `{/* Right Sidebar - Sticky TOC */}
            <aside className="lg:w-[35%] xl:w-[30%]">
              <div className="sticky top-28 space-y-8 pb-10">
                {tocItems.length > 0 && (
                  <TableOfContents items={tocItems} />
                )}
              </div>
            </aside>`;

const newAside = `{/* Right Sidebar - Sticky TOC */}
            <aside className="lg:w-[35%] xl:w-[30%] sticky top-28 self-start">
              <div className="space-y-8 pb-10 max-h-[85vh] overflow-y-auto custom-scrollbar">
                {tocItems.length > 0 && (
                  <TableOfContents items={tocItems} />
                )}
              </div>
            </aside>`;

if(code.includes(oldAside)) {
    code = code.replace(oldAside, newAside);
} else {
    // maybe it has ContactForm?
    const fallbackRegex = /<aside className="lg:w-\[35%\] xl:w-\[30%\]">([\s\S]*?)<\/aside>/;
    code = code.replace(fallbackRegex, `<aside className="lg:w-[35%] xl:w-[30%] sticky top-28 self-start max-h-[85vh] overflow-y-auto custom-scrollbar">$1</aside>`);
    // also remove any nested sticky top-28 inside it so they don't conflict
    code = code.replace(/<div className="sticky top-28/g, '<div className="');
}

fs.writeFileSync(path, code, 'utf8');
