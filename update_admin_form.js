const fs = require('fs');

const path = 'src/admin/AdminBlogForm.tsx';
let content = fs.readFileSync(path, 'utf8');

if (!content.includes('guideType')) {
  content = content.replace(
    'const [categoryId, setCategoryId] = useState(\'\');',
    'const [categoryId, setCategoryId] = useState(\'\');\n  const [guideType, setGuideType] = useState(\'resource\');'
  );

  content = content.replace(
    /setTags\(\(blog\.tags \|\| \[\]\)\.join\(', '\)\);/,
    `setTags((blog.tags || []).join(', '));
        setGuideType(blog.guideType || 'resource');`
  );

  content = content.replace(
    /category:\s*categoryId\s*\|\|\s*null,/,
    `category: categoryId || null,
      guideType,`
  );

  // Inject UI right above the category dropdown
  const categoryUI = `<div className="admin-row">
          <label className="admin-field">
            <span>Category</span>`;
  const guideTypeUI = `<div className="admin-row">
          <label className="admin-field">
            <span>Show In Section</span>
            <select value={guideType} onChange={(e) => setGuideType(e.target.value)}>
              <option value="seller-guide">Seller Guides</option>
              <option value="buyer-guide">Buyer Guides</option>
              <option value="resource">Resources</option>
            </select>
          </label>
        </div>\n        ` + categoryUI;

  content = content.replace(categoryUI, guideTypeUI);

  fs.writeFileSync(path, content);
  console.log("Added guideType to AdminBlogForm.tsx");
} else {
  console.log("guideType already exists");
}
