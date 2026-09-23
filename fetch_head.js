const http = require('https');

http.get('https://www.hvacexitadvisors.com/listings/miami-dade-fl-ac-replacement-service', (res) => {
  let data = '';
  res.on('data', (chunk) => {
    data += chunk;
  });
  res.on('end', () => {
    let headStart = data.indexOf('<head>');
    let headEnd = data.indexOf('</head>');
    console.log("HEAD CONTENTS:");
    console.log(data.substring(headStart, headEnd + 7));
  });
}).on("error", (err) => {
  console.log("Error: " + err.message);
});
