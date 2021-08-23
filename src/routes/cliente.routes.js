const express = require('express');
const router = express.Router();
const moment = require('moment');

const Cliente = require('./../models/cliente')
const Log = require('./../models/log');

router.get('/', async (req, res) => {
  try {
    const clientes = await Cliente.find({});
    const log = await new Log({
      typeAction: "R",
      action: `O Usuário acessou a lista de todos dos dados dos clientes em ${moment().format('DD/MM/YYYY')} as ${moment().format('HH:mm:ss')}`,
      user: `userRoot`
    }).save();
    res.json({ error: false, clientes, log });
  } catch (error) {
    res.json({ error: true, message: error.message })
  }
});

router.get('/:id', async (req, res) => {
  try {
    const cliente = await Cliente.findById(req.params.id);
    const log = await new Log({
      typeAction: "R",
      action: `O Usuário acessou o registro do ${cliente.nome} em ${moment().format('DD/MM/YYYY')} as ${moment().format('HH:mm:ss')}`,
      user: `userRoot`
    }).save();
    res.json({ error: false, cliente, log });
  } catch (error) {
    res.json({ error: true, message: error.message })
  }
});
router.post('/', async (req, res) => {
  try {
    const cliente = new Cliente(req.body);
    const log = await new Log({
      typeAction: "C",
      action: `O Usuário criou o registro do ${cliente.nome} em ${moment().format('DD/MM/YYYY')} as ${moment().format('HH:mm:ss')}`,
      user: `userRoot`
    }).save();
    cliente.save();
    res.json({ error: false, cliente });
  } catch (error) {
    res.json({ error: true, message: error.message })
  }
});


module.exports = router;
