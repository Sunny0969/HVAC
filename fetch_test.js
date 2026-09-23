const http = require('https');

http.get('https://www.hvacexitadvisors.com/listings/miami-dade-fl-ac-replacement-service', (res) => {
  let data = '';
  res.on('data', (chunk) => {
    data += chunk;
  });
  res.on('end', () => {
    const headEndIndex = data.indexOf('</head>');
    const titleIndex = data.indexOf('<title>');
    console.log('</head> found at index:', headEndIndex);
    console.log('<title> found at index:', titleIndex);
    if (titleIndex > headEndIndex) {
      console.log('TITLE IS AFTER HEAD!');
      console.log(data.substring(titleIndex - 50, titleIndex + 100));
    } else {
      console.log('TITLE IS INSIDE HEAD.');
    }
  });
}).on("error", (err) => {
  console.log("Error: " + err.message);
});
