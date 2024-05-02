const fs = require("fs");

fs.writeFile("message_new.txt", "May the force be with you!", (err) => {
  if (err) throw err;
  console.log("File has been saved!");
});

fs.readFile("./message_new.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});
