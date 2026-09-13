const fs = require('fs');

function fixLayout(filePath) {
  let code = fs.readFileSync(filePath, 'utf8');
  
  // We want to move the "</div>" that comes immediately BEFORE the SEO Block
  // to be immediately AFTER the SEO Block.
  
  // Regex to match:
  // 1: \s*</div>\s*
  // 2: {/* Block (9|10): SEO Keywords Section[\s\S]*?</motion.div>
  // Replace with:
  // $2\n        </div>\n
  
  const regex = /(\s*<\/div>\s*)({\/\* Block (?:9|10): SEO Keywords Section[\s\S]*?<\/motion\.div>)/;
  
  if (regex.test(code)) {
    code = code.replace(regex, `\n      $2\n$1`);
    fs.writeFileSync(filePath, code, 'utf8');
    console.log(`Fixed ${filePath}`);
  } else {
    console.log(`Could not find pattern in ${filePath}`);
  }
}

fixLayout('src/views/components/SellPageContent.tsx');
fixLayout('src/views/components/BuyPageContent.tsx');
