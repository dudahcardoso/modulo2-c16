const { Sequelize } = require("sequelize");//importação do sequelize
const database = require("../database/bd");//importar a conexão com a model

const Filme = database.sequelize.define(
    //nome da tabela do postgres
    "filme",
    {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
        },
        nome:{
            type: Sequelize.STRING,
            allowNull: false,
        },
        descricao:{
            type: Sequelize.STRING,
            allowNull: false,
        },
        imagem:{
            type: Sequelize.STRING,
            allowNull: false,
        },
    },
    {
        freezeTableName: true, //o nome da tabela seja o mesmo que eu criei no banco
        timestamps: false,//registrar a criação de tempo e data
        createdAt: false,
        updateAt: false,
    }
);

module.exports = Filme;//exportar o Filme