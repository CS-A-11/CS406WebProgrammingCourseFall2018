const fs = require("fs");

let lyrics =
  "Dil dil Pakistan\n" + "Jaan Jaan Pakistan\n" + "Aisee zameen aur aasmaan...";

// write to a new file
fs.writeFile("dildil.txt", lyrics, err => {
  // throws an error, you could also catch it here
  if (err) throw err;

  // success case, the file was saved
  console.log("Lyric saved!");
});
