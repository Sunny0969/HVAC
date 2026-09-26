const fs = require('fs');

const path = 'cms-backend/src/models/Blog.js';
let content = fs.readFileSync(path, 'utf8');

if (!content.includes('guideType:')) {
  // Insert into schema
  content = content.replace(
    /category:\s*\{\s*type:\s*mongoose\.Schema\.Types\.ObjectId,\s*ref:\s*'Category',\s*default:\s*null,\s*\},/,
    `category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Category',
      default: null,
    },
    guideType: {
      type: String,
      enum: ['seller-guide', 'buyer-guide', 'resource'],
      default: 'resource',
    },`
  );

  // Expose in toFrontendCard
  content = content.replace(
    /category:\s*categoryName,/,
    `category: categoryName,
    guideType: this.guideType || 'resource',`
  );
  
  fs.writeFileSync(path, content);
  console.log("Added guideType to Blog.js");
} else {
  console.log("guideType already exists");
}
