const express = require("express");
const router = express.Router();
const Cliente = require("../model/cliente.model");
const service = require('../service/cliente.service')

router.get("/clientes", (req, res) => {
  Cliente.findAll().then((users) => {
     return res.status(200).json(users);
  }).catch((erro)=>{
    return res.sendStatus(400);
  });
});

router.post("/cliente/create", (req, res) => {
  var clienteDados = {
    nome: req.body.nome,
    cpf: req.body.cpf,
    email: req.body.email,
    telefone: req.body.telefone,
    sexo: req.body.sexo,
    data_de_nascimento: req.body.data_de_nascimento,
  };

  var cpf = service.validarCPF(req.body.cpf);
 
  Cliente.findOne({ where: { cpf:cpf } }).then((cliente) => {
    if (cliente == undefined && service.validarDados(clienteDados)) {
      Cliente.create({
        nome: clienteDados.nome,
        cpf: cpf,
        email: clienteDados.email,
        telefone: clienteDados.telefone,
        sexo: clienteDados.sexo,
        data_de_nascimento: clienteDados.data_de_nascimento,
      }).then((result) => {
          res.status(201).json(result);
        })
        .catch((erro) => {
          res.status(500).send(erro);
        });
    } else {
      res.status(400).send("Cliente já cadastrado ou dados invalidos.");
    }
  });
});

router.post("/cliente/delete", (req, res) => {
  var cpf = service.validarCPF(req.body.cpf);
  if (cpf != undefined) {
      Cliente.destroy({
        where: { cpf: cpf },
      }).then(() => {
        res.status(200).send("Deletetado com sucesso");
      });
  } else {
    res.status(400).send("Cliente não existe");
  }
});

router.post("/cliente/update", (req, res) => {
  var cpf = req.body.cpf;
  var clienteDados = {
    nome: req.body.nome,
    email: req.body.email,
    telefone: req.body.telefone,
    sexo: req.body.sexo,
    data_de_nascimento: req.body.data_de_nascimento,
  };

  if (service.validarDados(clienteDados)) {
    Cliente.update(clienteDados,
      {
        where: {
          cpf:cpf,
        },
      }
    ).then(() => {
        res.status(200).send("Atualizado com Sucesso");
    }).catch((erro) => {
        res.status(500).send(erro);
    });
  }

});

router.get("/cliente/edit/:id",(req,res) =>{
  var id = req.params.id;
  
  Cliente.findByPk(id).then(cliente => {
        if(cliente != undefined){
              cliente.findAll().then(clientes =>{
                    res.status(200).json({clientes:clientes,cliente:cliente});
              })
          
        }else{
              res.status(400).send("Cliente não encontrado");
        }
  }).catch(erro => {
        res.status(400).send("Cliente não encontrado");
  })
    
});

module.exports = router;
