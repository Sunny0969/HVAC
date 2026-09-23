const fs = require('fs');
const path = require('path');
function getAllFiles(dirPath, arrayOfFiles) {
  const files = fs.readdirSync(dirPath);
  arrayOfFiles = arrayOfFiles || [];
  files.forEach(function(file) {
    if (fs.statSync(dirPath + "/" + file).isDirectory()) {
      arrayOfFiles = getAllFiles(dirPath + "/" + file, arrayOfFiles);
    } else {
      if (file.endsWith('.ts') || file.endsWith('.tsx') || file.endsWith('.js') || file.endsWith('.jsx')) {
        arrayOfFiles.push(path.join(dirPath, "/", file));
      }
    }
  });
  return arrayOfFiles;
}
const allFiles = getAllFiles('./src');
for (const file of allFiles) {
  const content = fs.readFileSync(file, 'utf8');
  if (content.includes('1622322363167-93cd26986dd0')) console.log('Image found in: ' + file);
  if (content.includes('/free-valuation')) console.log('/free-valuation found in: ' + file);
}
