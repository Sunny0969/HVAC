const fs = require('fs');
const path = 'cms-backend/src/models/Blog.js';
let content = fs.readFileSync(path, 'utf8');

content = content.replace(
  /enum: \['seller-guide', 'buyer-guide', 'resource'\],\s*default: 'resource',/,
  "enum: ['seller-guide', 'buyer-guide', 'resource'],\n      default: 'seller-guide',"
);

content = content.replace(
  /guideType: this.guideType || 'resource',/,
  "guideType: this.guideType || 'seller-guide',"
);

fs.writeFileSync(path, content);
console.log("Updated default guideType to seller-guide in schema");
