const fs = require('fs');
const path = require('path');

function copyFolderSync(from, to) {
    if (!fs.existsSync(to)) fs.mkdirSync(to, { recursive: true });
    fs.readdirSync(from).forEach(element => {
        if (fs.lstatSync(path.join(from, element)).isFile()) {
            fs.copyFileSync(path.join(from, element), path.join(to, element));
        } else {
            copyFolderSync(path.join(from, element), path.join(to, element));
        }
    });
}

copyFolderSync('src/app/resources/[slug]', 'src/app/seller-guides/[slug]');
copyFolderSync('src/app/resources/[slug]', 'src/app/buyer-guides/[slug]');

console.log("Copied slug folders");
