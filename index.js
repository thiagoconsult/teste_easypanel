var express = require("express");
var app = express();

const path = require("path");

app.get("/", function (req, res) {
  res.send("Hello");
});

app.listen(process.env.PORT ?? 3000, function () {
  console.log(`Listening on port ${process.env.PORT ?? 3000}...`);
});
