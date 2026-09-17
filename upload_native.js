const fs = require('fs');
const crypto = require('crypto');

const cloud_name = 'db05hw4ri';
const api_key = '868297842448925';
const api_secret = 'w4eBW-D1QqbWMabfeCUgHvJZU-I';

async function uploadToCloudinary(cityKey, url) {
  const timestamp = Math.round(new Date().getTime() / 1000);
  const folder = 'hvac-cities';
  const public_id = cityKey;

  const paramsToSign = `folder=${folder}&public_id=${public_id}&timestamp=${timestamp}`;
  const signature = crypto.createHash('sha1').update(paramsToSign + api_secret).digest('hex');

  const formData = new FormData();
  formData.append('file', url);
  formData.append('api_key', api_key);
  formData.append('timestamp', timestamp);
  formData.append('signature', signature);
  formData.append('folder', folder);
  formData.append('public_id', public_id);

  const res = await fetch(`https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`, {
    method: 'POST',
    body: formData
  });
  
  if (!res.ok) {
    const errorText = await res.text();
    throw new Error(`Upload failed for ${cityKey}: ${errorText}`);
  }

  const data = await res.json();
  return data.secure_url;
}

async function run() {
  const filePath = 'src/views/components/Header.tsx';
  let content = fs.readFileSync(filePath, 'utf8');

  // Regex to find all customImages entries
  const regex = /'([a-z.-]+)':\s*'([^']+unsplash[^']+)'/g;
  let matches = [...content.matchAll(regex)];

  console.log(`Found ${matches.length} Unsplash images to upload.`);

  for (const match of matches) {
    const cityKey = match[1];
    const unsplashUrl = match[2];
    console.log(`Uploading ${cityKey}...`);
    
    try {
      const newUrl = await uploadToCloudinary(cityKey, unsplashUrl);
      console.log(`Success: ${newUrl}`);
      
      // Replace exactly this unsplashUrl with the newUrl
      content = content.replace(unsplashUrl, newUrl);
    } catch (err) {
      console.error(`Failed to upload ${cityKey}:`, err);
    }
  }

  fs.writeFileSync(filePath, content);
  console.log('Finished updating Header.tsx');
}

run();
