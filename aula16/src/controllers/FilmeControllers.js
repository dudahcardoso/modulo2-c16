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

//rota para pegar o ID do filme selecionado
const getById = async (req,res) => {
    try{
        const filme = await Filme.findByPk(req.params.id);//encontrando o filme que foi escolhido pelo id, findByPk procurar pela chave primaria que é o id, e esse id vai chegar por parametro
        res.render("detalhes", {
            filme
        });
    }catch(err){//deu erro, venha nesse caminho
        res.status(500).send({err: err.message});//vem do objeto erro
    };
};

//rota de criação do filme
const criar = (req,res ) => {
    try{
        res.render("criar", {message});
    }catch(err){//deu erro, venha nesse caminho
        res.status(500).send({err: err.message});//vem do objeto erro
    };
};

const criacao  = async (req,res) =>{
    try{
        const filme = req.body;//a requisição que vem do body, pegando os dados que vem do body
        if(
            !filme.nome ||
            !filme.descricao ||
            !filme.imagem
        ){
            message = "Preencha todos os campos para cadastro!"
            type = "danger";
            return res.redirect("/criar");
        }
        await Filme.create(filme);//model filme e cria o filme que chegou, async espera essa transação
        res.redirect("/");
    }catch(err){//deu erro, venha nesse caminho
        res.status(500).send({err: err.message});//vem do objeto erro
    };
};

//rota editar filme
const editar1 = async (req,res) => {
    const filme = await Filme.findByPk(req.params.id);

    if(!filme){
        res.render("editar", {
            message: "Filme não foi encontrado!"
        });
    }
    res.render("editar",{
        filme,
        message:"",
    });
};

//rota de edição do filme
const editar = async (req,res) => {
    try{
        const filme = await Filme.findByPk(req.params.id);
        const {nome, descricao, imagem } = req.body;

        filme.nome = nome;
        filme.descricao = descricao;
        filme.imagem = imagem;

        const filmeEditado = await filme.save();
        // res.render("editar", {
        //     filme: filmeEditado,
        //     message:"Filme editado com sucesso!",
        // });
        res.redirect("/");
    }catch(err){//deu erro, venha nesse caminho
        res.status(500).send({err: err.message});//vem do objeto erro
    };
};

//rota deletar o filme
const deletar = async (req,res) => {
    try{
        await Filme.destroy({where : { id: req.params.id}});
        message = "Filme removido com sucesso"
        res.redirect("/");
    }catch(err){//deu erro, venha nesse caminho
        res.status(500).send({err: err.message});//vem do objeto erro
    };
}

module.exports = {
    getAll,
    getById,
    criar,
    criacao,
    editar1,
    editar,
    deletar
}