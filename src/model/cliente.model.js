const Sequelize = require("sequelize");
const connection = require("../database/database");

const Cliente = connection.define('cliente',{
    id:{
        type: Sequelize.BIGINT,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },nome:{
        type:Sequelize.STRING,
        allowNull:false
    }, cpf:{
        type:Sequelize.STRING,
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
 
// Cliente.sync({force:true});   

module.exports = Cliente;