const fs = require('fs');
const path = 'src/app/florida/page.tsx';
let code = fs.readFileSync(path, 'utf8');

const oldAside = `<aside className="lg:w-[35%] xl:w-[30%]">
              <div className="sticky top-28 space-y-8 pb-10">`;
const newAside = `<aside className="lg:w-[35%] xl:w-[30%] sticky top-28 self-start">
              <div className="space-y-8 pb-10 max-h-[85vh] overflow-y-auto custom-scrollbar">`;

if(code.includes(oldAside)) {
    code = code.replace(oldAside, newAside);
}
fs.writeFileSync(path, code, 'utf8');
