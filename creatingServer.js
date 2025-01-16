const http = require("http")
const fs = require("fs")
const filecontent = fs.readFileSync('ram.txt')

const server = http.createServer(function (request, response) {
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.end(filecontent);
}).listen(80);

console.log('Server running the link http://127.0.0.1:80/');
