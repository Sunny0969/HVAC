const fs = require('fs');
let code = fs.readFileSync('src/views/components/TestimonialSlider.tsx', 'utf8');
code = code.replace(/<h4/g, '<h3').replace(/<\/h4>/g, '</h3>');
fs.writeFileSync('src/views/components/TestimonialSlider.tsx', code, 'utf8');
