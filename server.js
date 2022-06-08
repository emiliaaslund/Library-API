const express = require("express");
const app = express();
const db = require("./database.js");

const PORT = 4001;

app.get("/", (req, res) => {
  console.log("hello world");
  res.json({ message: "Hello World" });
});

app.listen(PORT, () => {
  console.log("Servern kör på 4001");
});
