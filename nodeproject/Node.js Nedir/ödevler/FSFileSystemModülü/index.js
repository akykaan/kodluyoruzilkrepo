const fs = require("fs");

//Bu veriyi okuyalım. (READ)
fs.readFile("employees.json", "utf8", (err, data) => {
  if (err) console.log(err);
  else console.log(data);
});

//Bu veriyi güncelleyelim.

fs.appendFile("employees.json", '{"name": "kaan1", "age": 27}', function (err) {
  if (err) throw err;
  console.log("Updated!");
});


