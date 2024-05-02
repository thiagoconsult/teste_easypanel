import express from "express";
const app = express();

app.get("/", (req, res) => {
  res.send("Hello, Felipe!");
});

app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT ?? 3001}...`);
});
