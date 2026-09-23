const http = require('https');

http.get('https://www.hvacexitadvisors.com/listings/miami-dade-fl-ac-replacement-service', (res) => {
  let data = '';
  res.on('data', (chunk) => {
    data += chunk;
  });
  res.on('end', () => {
    let headStart = data.indexOf('<head>');
    let titleIndex = data.indexOf('<title>');
    console.log("Elements between <head> and <title>:");
    console.log(data.substring(headStart + 6, titleIndex));
  });
}).on("error", (err) => {
  console.log("Error: " + err.message);
});
