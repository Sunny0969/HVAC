const fs = require('fs');

const path = 'src/admin/AdminBlogForm.tsx';
let content = fs.readFileSync(path, 'utf8');

// Change default state to seller-guide
content = content.replace(
  "const [guideType, setGuideType] = useState('resource');",
  "const [guideType, setGuideType] = useState('seller-guide');"
);

// Change fallback to seller-guide
content = content.replace(
  "setGuideType(blog.guideType || 'resource');",
  "setGuideType(blog.guideType || 'seller-guide');"
);

// We need to insert the guideType dropdown right before the tags input if category fails, or right before category.
// Let's replace the whole Category row safely using Regex.
const categoryRowRegex = /<div className="admin-row">\s*<label className="admin-field">\s*<span>Category<\/span>[\s\S]*?<\/button>\s*<\/div>/;

const newSection = `<div className="admin-row">
          <label className="admin-field">
            <span>Show In Section</span>
            <select value={guideType} onChange={(e) => setGuideType(e.target.value)}>
              <option value="seller-guide">Seller Guides</option>
              <option value="buyer-guide">Buyer Guides</option>
            </select>
          </label>
        </div>`;

if (!content.includes('Show In Section')) {
  // First, capture the exact category row
  const match = content.match(categoryRowRegex);
  if (match) {
    content = content.replace(categoryRowRegex, newSection + '\n\n          ' + match[0]);
  } else {
    // If we can't find the category row, let's put it before the tags input
    const tagsRegex = /<label className="admin-field">\s*<span>Tags/;
    content = content.replace(tagsRegex, newSection + '\n\n          $&');
  }
} else {
  // If 'Show In Section' is already there but has 'resource', remove it
  content = content.replace(/<option value="resource">Resources<\/option>/, '');
}

fs.writeFileSync(path, content);
console.log("Updated AdminBlogForm.tsx with Section dropdown and removed Resources");
