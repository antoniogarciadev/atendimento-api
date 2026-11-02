// const Router = require('express').Router;
const { Router } = require('express');
const atendcontroller = require('../controllers/atendController.controller');

const router = Router();

router.get('/atendimentos', (req, res) => {
    const resposta = atendcontroller.buscar();
    resposta
    .then((atendimentos) => {
        res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5001');
        res.setHeader('Access-Control-Allow-Methods', 'GET');
        res.setHeader('Content-type', 'application/json');
        res.status(200).json(atendimentos)
    })
    .catch((error) => 
        res.status(400).json(error.message)
    );
});

router.get('/atendimento/:id', (req, res) => {
    const id = req.params.id;
    const resposta = atendcontroller.buscar(id);
    resposta
    .then((atendimento) => {
            res.status(200).json(atendimento)
        }
    )
    .catch((error) => 
        res.status(400).json(error.message)
    );
});

router.post('/atendimento', (req, res) => {
    const novoAtendimento = req.body;
    const atendimento = atendcontroller.criar(novoAtendimento);
    atendimento
    .then(atendimentoCriado => res.status(201)
    .send(atendimentoCriado))
    .catch((error) => res.status(400).json(error.message));
});

router.get('/atendimento/:id', (req, res) => {
    const id = req.params.id;
    res.send(`Id encontrado ${ id }`);
});

router.put('/atendimento/:id', (req, res) => {
    const id = req.params.id;
    const data = req.body;
    const atendimento = atendcontroller.atualizar(data, id);
    atendimento.then( atualizado => res.status(200).json(atualizado))
    .catch(error => res.status(400).json(error.message));
});

router.delete('/atendimento/:id', (req, res) => {
    const id = req.params.id;
    const atendimento = atendcontroller.deletar(id);
    atendimento.then( deletado => res.status(200).json(deletado))
    .catch(error => res.status(400).json(error.message));
});

module.exports = router;