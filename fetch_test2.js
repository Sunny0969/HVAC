const http = require('https');

http.get('https://www.hvacexitadvisors.com/listings/miami-dade-fl-ac-replacement-service', (res) => {
  let data = '';
  res.on('data', (chunk) => {
    data += chunk;
  });
  res.on('end', () => {
    let index = 0;
    while((index = data.indexOf('<title', index)) !== -1) {
      console.log('Found <title at:', index);
      console.log(data.substring(index - 50, index + 100));
      index += 5;
    }
    console.log('---');
    let headStart = data.indexOf('<head>');
    let headEnd = data.indexOf('</head>');
    console.log('<head> boundaries:', headStart, 'to', headEnd);
  });
}).on("error", (err) => {
  console.log("Error: " + err.message);
});
