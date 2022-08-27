const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const connection = require("./src/database/database");
const cors = require("cors");
const clienteController = require("./src/controller/cliente.controller");

app.use(cors());
app.use(express.static('public'));

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

connection
    .authenticate()
    .then(() =>{
        console.log("Conexão feita com sucesso")
    }).catch((error) =>{
        console.log(error)
    });

app.use("/",clienteController);


app.listen(8089,()=>{
    console.log("app rodando")
});