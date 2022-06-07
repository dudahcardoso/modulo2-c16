require('dotenv').config();//envio das informações do banco
const express = require("express");
const path = require("path");
const app = express();
const routes = require("./src/routes/routes");

app.set("view engine", "ejs");
app.use(express.urlencoded());
app.use(express.static(path.join(__dirname, "public")));
app.use(routes);

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Servidor rodando em http://localhost:${port}`));