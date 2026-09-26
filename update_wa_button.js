const fs = require('fs');

const path = 'src/views/components/FloatingWhatsAppButton.tsx';
let content = fs.readFileSync(path, 'utf8');

const message = "Hi HVAC Exit Advisors! I would like to learn more about selling or buying an HVAC business. Can you please provide more information?";
const encodedMessage = encodeURIComponent(message);

content = content.replace(
  'href="https://wa.me/19548649161"',
  `href="https://wa.me/19548649161?text=${encodedMessage}"`
);

fs.writeFileSync(path, content);
console.log("Updated WhatsApp Button with custom message");
