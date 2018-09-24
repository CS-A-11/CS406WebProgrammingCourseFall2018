//Following is a very basic Express app which starts a server and listens on port 8081 for connection.
//This app responds with Hello World! for requests to the homepage.
//For every other path, it will respond with a 404 Not Found.
var express = require("express");
var app = express();

app.get("/", function(req, res) {
  res.send("Hello World");
});

var server = app.listen(8081, function() {
  var host = server.address().address;
  var port = server.address().port;

  console.log("Example app listening at http://%s:%s", host, port);
});
//Open http://127.0.0.1:8081/ in any browser to see the result.
