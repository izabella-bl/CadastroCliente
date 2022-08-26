const Sequelize = require("sequelize");
const connection = require("../database/database");

const Cliente = connection.define('cliente',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },nome:{
        type:Sequelize.STRING,
        allowNull:false
    }, cpf:{
        type:Sequelize.INTEGER,
        allowNull:false
    }, email:{
        type:Sequelize.STRING,
        allowNull:false
    }, telefone:{
        type:Sequelize.STRING,
        allowNull:false
    }, sexo:{
        type:Sequelize.CHAR,
        allowNull:false
    }, data_de_nascimento:{
        type:Sequelize.DATE,
        allowNull:false
    }
});

 
module.exports = Cliente;