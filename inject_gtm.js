const fs = require('fs');
const path = 'src/app/layout.tsx';
let content = fs.readFileSync(path, 'utf8');

const htmlStart = `<html lang="en-US" className={\`\${geistSans.variable} \${geistMono.variable} h-full antialiased\`}>`;
const headCode = `
      <head>
        <script dangerouslySetInnerHTML={{ __html: \`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-56ZJLWX2');\` }} />
      </head>`;

const bodyStart = `<body className="min-h-full flex flex-col" suppressHydrationWarning>`;
const noScriptCode = `
        <noscript>
          <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-56ZJLWX2" height="0" width="0" style={{ display: 'none', visibility: 'hidden' }}></iframe>
        </noscript>`;

content = content.replace(htmlStart, htmlStart + headCode);
content = content.replace(bodyStart, bodyStart + noScriptCode);

fs.writeFileSync(path, content);
console.log("Injected GTM code successfully");
