const crypto = require('crypto');

async function upload(imageUrl, publicId) {
  const cloudName = 'db05hw4ri';
  const apiKey = '868297842448925';
  const apiSecret = 'w4eBW-D1QqbWMabfeCUgHvJZU-I';
  const timestamp = Math.floor(Date.now() / 1000);
  const folder = 'hvac-hero-images';
  
  const toSign = `folder=${folder}&public_id=${publicId}&timestamp=${timestamp}${apiSecret}`;
  const signature = crypto.createHash('sha1').update(toSign).digest('hex');
  
  const form = new FormData();
  form.append('file', imageUrl); 
  form.append('api_key', apiKey);
  form.append('timestamp', String(timestamp));
  form.append('signature', signature);
  form.append('folder', folder);
  form.append('public_id', publicId);
  
  const res = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, {
    method: 'POST',
    body: form,
  });
  
  const data = await res.json();
  console.log(data.secure_url);
}

upload('https://images.unsplash.com/photo-1503551723145-6c040742065b-v2?w=1200&auto=format&fit=crop&q=80', 'how_it_works_hero_bg');
