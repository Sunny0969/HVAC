const fs = require('fs');
const filePath = 'src/views/components/BuyPageContent.tsx';
let content = fs.readFileSync(filePath, 'utf8');

content = content.replace(/\/florida\/miami/g, "/south-florida/miami");
content = content.replace(/\/florida\/tampa/g, "/tampa-bay/tampa");
content = content.replace(/\/florida\/orlando/g, "/central-florida/orlando");
content = content.replace(/\/florida\/jacksonville/g, "/atlantic-coast/jacksonville");
content = content.replace(/\/florida\/fort-myers/g, "/southwest-florida/fort-myers");
content = content.replace(/\/florida\/sarasota/g, "/gulf-coast/sarasota");

fs.writeFileSync(filePath, content);
console.log('Updated BuyPageContent');
