const fs = require('fs');
let path = 'src/app/resources/[slug]/page.tsx';
let code = fs.readFileSync(path, 'utf8');

if (!code.includes('SpeakableSpecification')) {
  code = code.replace(
    '"mainEntityOfPage": {',
    `"speakable": {
      "@type": "SpeakableSpecification",
      "xpath": [
        "/html/head/title",
        "/html/head/meta[@name='description']/@content"
      ]
    },
    "mainEntityOfPage": {`
  );
  fs.writeFileSync(path, code, 'utf8');
}
