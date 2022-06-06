const express = require("express");
const app = express();
const path = require("path");

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded());

let cachorro = undefined;

const listaCachorros = [
    {
        id: 1,
        nome: "Cão-pelado-peruano",
        raca: "America/Peru",
        pelagem: "Sem pelo",
        imagem: "https://t1.ea.ltmcdn.com/pt/razas/2/8/7/cao-pelado-peruano_782_0_600.jpg"
    }
]

app.get("/", function (req, res) {
  res.render("index", {listaCachorros, cachorro});
});

app.post("/create", (req, res) =>{
    const cachorro = req.body;
    cachorro.id = listaCachorros.length + 1;
    listaCachorros.push(cachorro);
    res.redirect("/#cards")
});

app.get("detalhes/:id", (req, res) => {
    const id = Number(req.params.id);//body
    cachorro = listaCachorros.find((cachorro) => cachorro.id == id);
    res.redirect("/");
})

app.listen(3000, () => {
    console.log("Servidor rodando em http://localhost:3000")
});