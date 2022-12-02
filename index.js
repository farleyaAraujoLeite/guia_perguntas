const express = require("express");
const app = express();

//renderizador de html
app.set("view engine", "ejs");

//Maneira de como renderizar o html que está na pasta views
app.get("/", (req, res) => {
  res.render("index")
});

app.get("/home", (req, res) => {
  res.render("home")
});


app.listen(8000, () =>{console.log("app rodando!");});