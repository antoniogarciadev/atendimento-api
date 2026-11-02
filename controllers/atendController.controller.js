const atendModel = require('../models/atendModel');

class AtendimentoController
{
    buscar(){
        return atendModel.listar();
    }

    findById(id){
        return atendModel.findById(id);
    }

    criar(data){
        return atendModel.criar(data);
    }

    atualizar(data, id){
        return atendModel.atualizar(data, id);
    }
    
    deletar(id){
        return atendModel.deletar(id);
    }
}

module.exports = new AtendimentoController();