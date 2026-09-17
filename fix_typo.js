const fs = require('fs');
const path = require('path');
const regions = ['atlantic-coast', 'central-florida', 'gulf-coast', 'north-florida', 'south-florida', 'southwest-florida', 'tampa-bay'];
regions.forEach(region => {
  const filePath = path.join(__dirname, 'src', 'app', region, 'page.tsx');
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    content = content.replace(/<\/strong>\. valuations/g, '</strong>. Valuations');
    fs.writeFileSync(filePath, content);
  }
});
