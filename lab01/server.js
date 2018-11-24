var http = require('http');
var os = require("os");


var interfaces = os.networkInterfaces();
var addresses = [];
for (var k in interfaces) {
    for (var k2 in interfaces[k]) {
        var address = interfaces[k][k2];
        if (address.family === 'IPv4' && !address.internal) {
            addresses.push(address.address);
        }
    }
}

var handleRequest = function(request, response) {
  console.log('Received request for URL: ' + request.url);
  response.writeHead(200);
  response.end(`Hola M-Sonic: ${os.hostname()} - ${addresses}`);
};
var www = http.createServer(handleRequest);
www.listen(8888);
