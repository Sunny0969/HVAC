const fs = require('fs');
const path = 'src/app/layout.tsx';
let content = fs.readFileSync(path, 'utf8');

content = content.replace(
  /google: process.env.NEXT_PUBLIC_GSC_VERIFICATION,/,
  'google: "gABNog4AJ9yVqmqpSNq5I3zNcIR3BbeM_Tqdq8y_T2I",'
);

fs.writeFileSync(path, content);
console.log("Updated Google site verification code");
