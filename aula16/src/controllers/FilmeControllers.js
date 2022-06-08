const Filme = require("../models/Filmes");//trazendo o filme que está cadastrado os dados na tabela no meu banco de dados
let message = "";

//getAll - Lista todos
const getAll = async (req, res) => {//async, aguarda porque eu vou lá fazer a consulta espere as ações para renderizar a página
    try{//tente por esse caminho se der certo
        const filmes = await Filme.findAll();//aguardando
        res.render("index",{
            filmes,
            filmesPut: null,
            filmesDel: null,
            message,
        });
    }catch(err){//deu erro, venha nesse caminho
        res.status(500).send({err: err.message});//vem do objeto erro
    };
};


module.exports = {
    getAll
}