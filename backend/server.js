const express = require("express");
const path = require("path");
const exphbs = require("express-handlebars");

const app = express();
const port = 3000;

// Set Handlebars sebagai mesin template
app.engine("hbs", exphbs.engine({ extname: ".hbs", defaultLayout: false }));
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "../views"));

// Middleware untuk melayani file statis dari folder 'src'
app.use(express.static(path.join(__dirname, "../src")));

// Melayani file index.hbs di root
app.get("/", (req, res) => {
  res.render("index");
});

// Melayani halaman register
app.get("/register", (req, res) => {
  res.render("register");
});

// Menangani permintaan POST untuk '/register'
app.post("/register", (req, res) => {
  const { Name, emailAddress, password, retypePassword } = req.body;
  console.log(`Name: ${Name}, Email Address: ${emailAddress}, Password: ${password}, Retype Password: ${retypePassword}`);
  res.send("Pendaftaran berhasil!");
});

// Mulai server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
