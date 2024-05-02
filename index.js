const express = require("express");
const https = require("https");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 3001;

app.get("/", (req, res) => {
  res.send("Hello");
});

const options = {
  key: fs.readFileSync(path.join(__dirname, "key.pem")),
  cert: fs.readFileSync(path.join(__dirname, "cert.pem")),
};

const server = https.createServer(options, app);

server.listen(PORT, () => {
  console.log(`Server started at port #${PORT}`);
});
