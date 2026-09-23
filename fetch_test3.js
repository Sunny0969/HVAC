const http = require('https');

http.get('https://www.hvacexitadvisors.com/listings/miami-dade-fl-ac-replacement-service', (res) => {
  let data = '';
  res.on('data', (chunk) => {
    data += chunk;
  });
  res.on('end', () => {
    let index = data.indexOf('<title');
    console.log(data.substring(0, index));
  });
}).on("error", (err) => {
  console.log("Error: " + err.message);
});
