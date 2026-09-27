const fs = require('fs');

const path = 'cms-backend/src/models/Blog.js';
let content = fs.readFileSync(path, 'utf8');

// Fix the syntax error at the top
if (content.startsWith("guideType: this.guideType || 'seller-guide',")) {
  content = content.replace("guideType: this.guideType || 'seller-guide',", "");
}

fs.writeFileSync(path, content);
console.log("Fixed syntax error in Blog.js");
