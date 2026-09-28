const https = require('https');
https.get('https://hvac-36i3.onrender.com/api/public/blogs/hvac-business-for-sale-florida', (res) => {
  let data = '';
  res.on('data', (chunk) => data += chunk);
  res.on('end', () => {
    try {
      const parsed = JSON.parse(data);
      console.log(JSON.stringify(parsed.blog.seo, null, 2));
    } catch (e) {
      console.error(data);
    }
  });
});
