const { configDotenv } = require("dotenv");
const express = require("express");
const app = express();
const path = require("path");
configDotenv();

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});
app.listen(3000, () => {
  console.log("Server Berjalan");
});
