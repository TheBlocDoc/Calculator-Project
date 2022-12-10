const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

const port = 3000;
const dirName = __dirname;

app.get("/", (req, res) => {
  res.sendFile(dirName + "/index.html");
});

app.post("/", (req, res) => {
  console.log(req.body);
  res.send(`Thanks for posting that!`);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
