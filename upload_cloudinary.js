const fs = require('fs');
const cloudinary = require('cloudinary').v2;

cloudinary.config({ 
  cloud_name: 'db05hw4ri', 
  api_key: '868297842448925', 
  api_secret: 'w4eBW-D1QqbWMabfeCUgHvJZU-I' 
});

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
      const result = await cloudinary.uploader.upload(unsplashUrl, {
        folder: 'hvac-cities',
        public_id: cityKey,
        overwrite: true
      });
      
      const newUrl = result.secure_url;
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
