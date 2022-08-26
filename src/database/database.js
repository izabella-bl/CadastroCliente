const Sequelize = require("sequelize");

const connection = new Sequelize('cliente','root','formulario',{
     host:'localhost',
     dialect:'mysql',
     timezone: "-03:00"
});

module.exports = connection;