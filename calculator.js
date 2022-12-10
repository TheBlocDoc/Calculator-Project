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
  let num1 = Number(req.body.n1);
  let num2 = Number(req.body.n2);

  let result = n1 + n2;
  res.send("The result of that calculation is " + result);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
