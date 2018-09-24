//The Node.js file system module allows you to work with the file system on your computer.
/*
Read files
Create files
Update files
Delete files
Rename files
*/
var http = require("http");
var fs = require("fs");
http
  .createServer(function(req, res) {
    fs.readFile("5_demofile1.html", function(err, data) {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    });
  })
  .listen(8080);
//fs.appendFile() method appends specified content to a file. If the file does not exist, the file will be created:
fs.appendFile("mynewfile1.txt", "Hello content!", function(err) {
  if (err) throw err;
  console.log("Saved!");
});
//fs.writeFile() method replaces the specified file and content if it exists.
//If the file does not exist, a new file, containing the specified content, will be created:
fs.writeFile("mynewfile3.txt", "Hello content!", function(err) {
  if (err) throw err;
  console.log("Saved!");
});
// fs.unlink() method deletes the specified file:
fs.unlink("mynewfile3.txt", function(err) {
  if (err) throw err;
  console.log("File deleted!");
});
//fs.rename() method renames the specified file:
fs.rename("mynewfile1.txt", "myrenamedfile.txt", function(err) {
  if (err) throw err;
  console.log("File Renamed!");
});
