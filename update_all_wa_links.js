const fs = require('fs');
const path = require('path');

const message = "Hi HVAC Exit Advisors, I have a query about your services and would like some more information.";
const encodedMessage = encodeURIComponent(message);
const newWaLink = `https://wa.me/19548649161?text=${encodedMessage}`;

function replaceInFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;
  
  // Replace all variations
  content = content.replace(/https:\/\/wa\.me\/19548649161(\?text=[^"']*)?/g, newWaLink);
  content = content.replace(/https:\/\/api\.whatsapp\.com\/send\/\?phone=19548649161(&|&amp;)text=[^"']*/g, newWaLink);
  
  if (content !== originalContent) {
    fs.writeFileSync(filePath, content);
    console.log("Updated: " + filePath);
  }
}

function walkDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      walkDir(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
      replaceInFile(fullPath);
    }
  }
}

walkDir('src');
