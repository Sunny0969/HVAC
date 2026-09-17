const fs = require('fs');
const filePath = 'src/views/components/Header.tsx';
let content = fs.readFileSync(filePath, 'utf8');

// MegaMenu
content = content.replace(/<Link key=\{item\} href=\{`\/florida\/\$\{slug\}`\} onClick=\{onClose\}/g, "<Link key={item} href={`/${activeCategory.toLowerCase().replace(/\\s+/g, '-')}/${slug}`} onClick={onClose}");

// Mobile Menu
content = content.replace(/<Link key=\{city\} href=\{`\/florida\/\$\{slug\}`\} onClick=\{toggleMobileMenu\}/g, "<Link key={city} href={`/${region.toLowerCase().replace(/\\s+/g, '-')}/${slug}`} onClick={toggleMobileMenu}");

fs.writeFileSync(filePath, content);
console.log('Updated Header');
