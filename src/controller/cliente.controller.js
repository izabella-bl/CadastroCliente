const express = require("express");
const router = express.Router();
const Cliente = require("../model/cliente.model");
const service = require('../service/cliente.service')

router.get("/clientes", (req, res) => {
  Cliente.findAll().then((users) => {
    return users;
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
  console.log(cpf);

  Cliente.findOne({ where: { cpf:cpf } }).then((cliente) => {
    if (cliente == undefined && service.validarDados(clienteDados)) {
      Cliente.create({
        nome: clienteDados.nome,
        cpf: cpf,
        email: clienteDados.email,
        telefone: clienteDados.telefone,
        sexo: clienteDados.sexo,
        data_de_nascimento: clienteDados.data_de_nascimento,
      })
        .then(() => {
          res.status(201);
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
  var cpf = req.body.cpf;
  if (cpf != undefined) {
    if (service.validarCPF(cpf)) {
      Cliente.destroy({
        where: { cpf: cpf },
      }).then(() => {
        res.status(200);
      });
    } else {
      res.status(500);
    }
  } else {
    res.status(400).send("Cliente não existe");
  }
});

router.post("/cliente/update", (req, res) => {
  var clienteDados = {
    nome: req.body.nome,
    cpf: req.body.cpf,
    email: req.body.email,
    telefone: req.body.telefone,
    sexo: req.body.sexo,
    data_de_nascimento: req.body.data_de_nascimento,
  };

  if (service.validarDados(clienteDados)) {
    Cliente.update({ clienteDados },
      {
        where: {
          cpf: clienteDados.cpf,
        },
      }
    ).then(() => {
        res.status(200);
    }).catch((erro) => {
        res.status(500).send(erro);
    });
  }

});

module.exports = router;
