const express = require('express');//cria variável express, o require vai na pasta node modules procura a pasta express e traz tudo que ela tem ali dentro
const path = require("path");//importando uma lib do proprio express chamada path
const app = express();//cria a const app que é a aplicação e chama todas as funções do express atrasvés desse app

app.set("view engine", "ejs"); //mortor engine da view é o ejs
app.use(express.static(path.join(__dirname,"public")));//dizendo ao express a pasta que irá guardar esses arquivos

app.get('/index', (req, res) => {//chamando a rota get, dentro do servidor que tem as rotas que o cliente está acessando o que chamamos de endpoints, o cliente faz a requisição e acessa o endpoint que é uma rota e dentro dessa rota é executada uma função e responde o meu cliente
    const devList = ["BackEnd", "FrontEnd", "FullStack"];
    const analyticsList = ["Engenharia de Dados", "Ciência de dados"];
    res.render('index',{titulo: "Blue", devList: devList, analyticsList: analyticsList});
});

app.post('/subscription', (req, res) => {
    res.send("Formulário recebido!")
});

app.listen(3000, () => console.log("Servidor rodando em http://localhost:3000"));//ouvindo a porta 3000, rodando nessa porta