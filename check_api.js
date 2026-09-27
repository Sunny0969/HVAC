const https = require('https');
https.get('https://hvac-36i3.onrender.com/api/public/blogs', (res) => {
  let data = '';
  res.on('data', (chunk) => data += chunk);
  res.on('end', () => {
    try {
      const parsed = JSON.parse(data);
      console.log(JSON.stringify(parsed.blogs.map(b => ({ title: b.title, guideType: b.guideType })), null, 2));
    } catch (e) {
      console.error(data);
    }
  });
}).on('error', (err) => {
  console.log('Error: ' + err.message);
});
