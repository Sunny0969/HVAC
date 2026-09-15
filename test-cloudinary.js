const crypto = require('crypto');
async function test() {
  const cloudName = 'HVAC';
  const apiKey = '868297842448925';
  const apiSecret = 'w4eBW-D1QqbWMabfeCUgHvJZU-I';
  const timestamp = Math.floor(Date.now() / 1000);
  const folder = 'test';
  const publicId = 'test_' + timestamp;
  const toSign = 'folder=' + folder + '&public_id=' + publicId + '&timestamp=' + timestamp + apiSecret;
  const signature = crypto.createHash('sha1').update(toSign).digest('hex');
  
  const form = new FormData();
  // fake 1 pixel image
  const buf = Buffer.from('R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7', 'base64');
  form.append('file', new Blob([buf]), 'test.gif');
  form.append('api_key', apiKey);
  form.append('timestamp', String(timestamp));
  form.append('signature', signature);
  form.append('folder', folder);
  form.append('public_id', publicId);
  
  const res = await fetch('https://api.cloudinary.com/v1_1/' + cloudName + '/image/upload', {
    method: 'POST',
    body: form,
  });
  const data = await res.json();
  console.log(res.status, data);
}
test();
