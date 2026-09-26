const fs = require('fs');

const path = 'cms-backend/src/routes/public.js';
let content = fs.readFileSync(path, 'utf8');

content = content.replace(
  /type:\s*'form',/,
  "type: req.body?.type === 'whatsapp' ? 'whatsapp' : 'form',"
);

// We should also store the extra data (IP location, user-agent) in `extra`
content = content.replace(
  /placement:\s*clip\(req\.body\?\.placement\s*\|\|\s*'',\s*80\),/,
  `placement: clip(req.body?.placement || '', 80),
        extra: req.body?.metadata || req.body?.extra || {},`
);

fs.writeFileSync(path, content);
console.log("Updated backend leads route to support whatsapp and extra data");
