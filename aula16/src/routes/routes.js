const routes = require("express").Router();//nativo do express, caminho que ele será executado em routes
const FilmeController = require("../controllers/FilmeControllers");//acessa o controllers

routes.get("/", FilmeController.getAll);//listar tudo que tem na rota (cadastrado no banco)

module.exports = routes;//exporto ela para qualquer caminho
