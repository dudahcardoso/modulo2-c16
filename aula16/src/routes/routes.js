const routes = require("express").Router();//nativo do express, caminho que ele será executado em routes
const FilmeController = require("../controllers/FilmeControllers");//acessa o controllers

routes.get("/", FilmeController.getAll);//listar tudo que tem na rota (cadastrado no banco)
routes.get("/filmes/:id", FilmeController.getById);//rota para pegar o filme por id e estou chamando a rota detalhes
routes.get("/criar", FilmeController.criar);//rota de exibição da criação do filme
routes.post("/criacao", FilmeController.criacao);//rota de criacao dos filmes
module.exports = routes;//exporto ela para qualquer caminho
