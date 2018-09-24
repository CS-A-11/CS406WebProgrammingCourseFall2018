var express = require("express");
var app = express();
var bodyParser = require("body-parser");

// Create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.use(express.static("public"));
app.get("/index_2.html", function(req, res) {
  res.sendFile(__dirname + "/" + "index_2.html");
});

app.post("/process_post", urlencodedParser, function(req, res) {
  // Prepare output in JSON format
  response = {
    first_name: req.body.first_name,
    last_name: req.body.last_name
  };
  console.log(response);
  res.end(JSON.stringify(response));
});

var server = app.listen(8081, "127.0.0.1", function() {
  var host = server.address().address;
  var port = server.address().port;

  console.log("Example app listening at http://" + host + ":" + port);
});
//Accessing the HTML document using http://127.0.0.1:8081/index_2.html
