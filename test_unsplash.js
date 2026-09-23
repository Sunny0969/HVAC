const https = require('https');
https.get("https://images.unsplash.com/photo-1622322363167-93cd26986dd0?q=80&w=2070&auto=format&fit=crop", (res) => {
  console.log('Status code:', res.statusCode);
}).on('error', (e) => {
  console.error(e);
});
