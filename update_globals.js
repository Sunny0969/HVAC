const fs = require('fs');
let code = fs.readFileSync('src/app/globals.css', 'utf8');
code = code.replace('@import "tailwindcss";', '@import "tailwindcss";\n@plugin "@tailwindcss/typography";');
fs.writeFileSync('src/app/globals.css', code, 'utf8');
