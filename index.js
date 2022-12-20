const express = require("express");
const app = express();
const bodyParser = require("body-parser");

//renderizador de html
app.set("view engine", "ejs");
app.use(express.static('public'));

//o body parser vai decodificar os dados enviados pelo formulário
app.use(bodyParser.urlencoded({extended : false}))
app.use(bodyParser.json());

//rotas
app.get("/", (req, res) => {
  res.render("index");
});

app.get("/perguntar", (req, res) => {
  res.render("perguntar");
});

//rota criada para receber os dados enviados pelo formulário
app.post("/salvarpergunta", (req, res) => {
  var titulo = req.body.título;
  var descricao = req.body.descricao;
  res.send(`Formulário recebido! Titulo: ${titulo} Descrição: ${descricao}`);
});


app.listen(8000, () =>{console.log("app rodando!");});