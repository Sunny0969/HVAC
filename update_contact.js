const fs = require('fs');
const path = 'src/app/api/contact/route.ts';
let content = fs.readFileSync(path, 'utf8');

if (!content.includes('x-vercel-ip-city')) {
  // Add headers capture at the top
  content = content.replace(
    'const { name, email, phone, message, formType, additionalData } = body;',
    `const { name, email, phone, message, formType, additionalData } = body;
    
    // Extract headers for better WhatsApp tracking
    const city = request.headers.get('x-vercel-ip-city') || request.headers.get('x-real-ip') || 'Unknown City';
    const region = request.headers.get('x-vercel-ip-region') || '';
    const country = request.headers.get('x-vercel-ip-country') || '';
    const userAgent = request.headers.get('user-agent') || 'Unknown Device';
    
    const locationString = city !== 'Unknown City' ? \`\${city}\${region ? ', ' + region : ''}\${country ? ', ' + country : ''}\` : 'Unknown Location';
    
    const isMobile = /Mobile|Android|iP(hone|od|ad)/i.test(userAgent) ? 'Mobile' : 'Desktop';
    `
  );

  // Update additionalData logic to include this info
  content = content.replace(
    /const payload = {([\s\S]*?)location: additionalData\?\.pagePath \|\| ''\s*};/,
    `const enrichedAdditionalData = {
        ...additionalData,
        capturedLocation: locationString,
        deviceType: isMobile,
        userAgent: userAgent
      };

      const payload = {
$1location: locationString !== 'Unknown Location' ? locationString : (additionalData?.pagePath || ''),
        metadata: enrichedAdditionalData
      };`
  );
  
  // Update the email notification to include the captured location and device
  content = content.replace(
    /\$\{additionalData \? `<p><strong>Additional Info:<\/strong> <pre>\$\{JSON\.stringify\(additionalData, null, 2\)\}<\/pre><\/p>` : ''\}/,
    `\${'<p><strong>System Captured Location:</strong> ' + locationString + '</p>'}
      \${'<p><strong>Device Type:</strong> ' + isMobile + '</p>'}
      \${additionalData ? \`<p><strong>Additional Info:</strong> <pre>\${JSON.stringify(enrichedAdditionalData || additionalData, null, 2)}</pre></p>\` : ''}`
  );

  fs.writeFileSync(path, content);
  console.log("Updated contact route with Vercel IP tracking");
} else {
  console.log("Tracking already exists in contact route");
}
