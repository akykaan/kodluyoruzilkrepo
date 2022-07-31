const express = require("express");

const app = express();

const port = 3000;

app.use(express.static('public'))

app.get("/", (req, res) => {
    const photo={
        id:1,
        name:"photo name",
        des:"photo açıklama"
    }
  res.send("photo");
});

app.listen(port, () => {
  console.log(`Sunucu ${port} portunda başladı`);
});
