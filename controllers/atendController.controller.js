const atendModel = require('../models/atendModel');

class AtendimentoController
{
    async buscar(req, res){
        const resposta = atendModel.listar()
        
        return resposta.then((atendimentos) => {
            res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5001');
            res.setHeader('Access-Control-Allow-Methods', 'GET');
            res.setHeader('Content-type', 'application/json');
            res.status(200).json(atendimentos)
        })
        .catch((error) => 
            res.status(400).json(error.message)
        );
    }

    findById(req, res){
        const id = req.params.id;
        const encontrar = atendModel.findById(id);

        return encontrar
        .then((atendimento) => {
                res.status(200).json(atendimento)
            }
        )
        .catch((error) => 
            res.status(400).json(error.message)
        );
    }

    criar(req, res){
        const dados = req.body;

        const criarAtendimento = atendModel.criar(dados);

        return criarAtendimento
        .then(atendimentoCriado => res.status(201)
        .send(atendimentoCriado))
        .catch((error) => res.status(400).json(error.message));
    }

    atualizar(req, res){
        const dados = req.body;
        const id = req.params.id;

        const atendimentoAtualizado = atendModel.atualizar(dados, id);

        return atendimentoAtualizado
        .then( atualizado => res.status(200).json(atualizado))
        .catch(error => res.status(400).json(error.message));
    }
    
    deletar(req, res){
        const {id} = req.params;
        
        const atendimento = atendModel.deletar(id);

        return atendimento
        .then( deletado => res.status(200).json(deletado))
        .catch(error => res.status(400).json(error.message));
    }
}

module.exports = new AtendimentoController();