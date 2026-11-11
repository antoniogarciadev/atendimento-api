// const Router = require('express').Router;
const { Router } = require('express');
const atendcontroller = require('../controllers/atendController.controller');

const router = Router();

router.get('/atendimentos', atendcontroller.buscar);

router.get('/atendimento/:id', atendcontroller.findById);

router.post('/atendimento', atendcontroller.criar);

router.put('/atendimento/:id', atendcontroller.atualizar);

router.delete('/atendimento/:id', atendcontroller.deletar);

module.exports = router;