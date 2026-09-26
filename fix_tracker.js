const fs = require('fs');

const path = 'src/views/components/WhatsAppTracker.tsx';
let content = fs.readFileSync(path, 'utf8');

content = content.replace(
  /let target = e\.target as HTMLElement \| null;[\s\S]*?if \(target && target\.tagName === 'A'\) \{/m,
  `let target = e.target as HTMLElement | null;
      const anchor = target?.closest('a');
      
      if (anchor) {
        const href = anchor.href || '';`
);

// We should also replace the `const href = (target as HTMLAnchorElement).href || '';` since we are doing it above.
content = content.replace(
  /const href = \(target as HTMLAnchorElement\)\.href \|\| '';/g,
  ''
);

fs.writeFileSync(path, content);
console.log("Updated WhatsAppTracker to use closest('a')");
