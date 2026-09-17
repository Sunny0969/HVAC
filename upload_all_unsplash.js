const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const cloud_name = 'db05hw4ri';
const api_key = '868297842448925';
const api_secret = 'w4eBW-D1QqbWMabfeCUgHvJZU-I';

async function uploadToCloudinary(url, index) {
  const timestamp = Math.round(new Date().getTime() / 1000);
  const folder = 'hvac-assets';
  const public_id = `unsplash_asset_${index}_${Date.now()}`;

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
    console.error(`Upload failed for ${url}: ${errorText}`);
    return null;
  }

  const data = await res.json();
  return data.secure_url;
}

function getAllFiles(dirPath, arrayOfFiles) {
  files = fs.readdirSync(dirPath);

  arrayOfFiles = arrayOfFiles || [];

  files.forEach(function(file) {
    if (fs.statSync(dirPath + "/" + file).isDirectory()) {
      arrayOfFiles = getAllFiles(dirPath + "/" + file, arrayOfFiles);
    } else {
      if (file.endsWith('.ts') || file.endsWith('.tsx') || file.endsWith('.js') || file.endsWith('.jsx')) {
        arrayOfFiles.push(path.join(dirPath, "/", file));
      }
    }
  });

  return arrayOfFiles;
}

async function run() {
  const allFiles = getAllFiles('./src');
  const urlMap = new Map();
  const unsplashRegex = /https:\/\/images\.unsplash\.com\/[^"'\`\s]+/g;

  // Find all unique URLs
  for (const file of allFiles) {
    const content = fs.readFileSync(file, 'utf8');
    const matches = content.match(unsplashRegex);
    if (matches) {
      for (let url of matches) {
        // clean trailing characters if any got caught
        url = url.replace(/[\\)>\]]+$/, '');
        if (!urlMap.has(url)) {
          urlMap.set(url, null);
        }
      }
    }
  }

  console.log(`Found ${urlMap.size} unique Unsplash URLs.`);

  // Upload each URL
  let idx = 0;
  for (const [url, _] of urlMap.entries()) {
    console.log(`Uploading ${idx + 1}/${urlMap.size}: ${url.substring(0, 50)}...`);
    const newUrl = await uploadToCloudinary(url, idx);
    if (newUrl) {
      urlMap.set(url, newUrl);
      console.log(`Success -> ${newUrl}`);
    }
    idx++;
  }

  // Replace in files
  let updatedFilesCount = 0;
  for (const file of allFiles) {
    let content = fs.readFileSync(file, 'utf8');
    let hasChanges = false;
    
    for (const [oldUrl, newUrl] of urlMap.entries()) {
      if (newUrl && content.includes(oldUrl)) {
        // Global replace (using split/join is safe for exact string replacement)
        content = content.split(oldUrl).join(newUrl);
        hasChanges = true;
      }
    }

    if (hasChanges) {
      fs.writeFileSync(file, content);
      updatedFilesCount++;
      console.log(`Updated file: ${file}`);
    }
  }

  console.log(`Finished processing. Updated ${updatedFilesCount} files.`);
}

run();
