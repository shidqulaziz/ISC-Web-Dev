const express = require("express");
const path = require("path");

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, "../")));

app.get("/api/greet", (req, res) => {
  res.json({ message: "Hello, welcome to the API!" });
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../index.html"));
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`); //  server berjalan di port 3000
});
