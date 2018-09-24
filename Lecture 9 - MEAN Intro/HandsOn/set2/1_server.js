//The code tells the computer to write "Hello World!"
//if anyone (e.g. a web browser) tries to access your computer on port 8080.
var http = require("http");

http
  .createServer(function(req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("Hello World!");
  })
  .listen(8080);
//initiate the node.js file
//node 1_server.js
//write http://localhost:8080/ in the browser
