const fs = require('fs');
const path = 'src/views/components/Hero.tsx';
let content = fs.readFileSync(path, 'utf8');

const regex = /<h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-5 drop-shadow-xl tracking-tight leading-tight max-w-3xl">[\s\S]*?<\/h1>/m;

const replacement = `<h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-5 drop-shadow-xl tracking-tight leading-tight max-w-3xl">
            HVAC Business for Sale <br className="hidden md:block" /> <span className="text-[#EE5B2C]">- Sell Your Business Confidentially.</span>
          </h1>`;

content = content.replace(regex, replacement);

fs.writeFileSync(path, content);
console.log("Replaced H1 entirely");
