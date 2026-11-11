const conn = require('../src/infra/conection');

class AtendimentoModel
{
    execQuery(sql, argumento = "", msg = ""){
        return new Promise((resolve, reject) => {
            conn.query(sql, argumento, (error, response) => {
                if(error){
                    console.log('Erro: ', error);
                    return reject(error);
                }
                console.log(msg);
                console.log(response);
                return resolve(response);
            });
        });
    }

    listar(){
        const sql = 'SELECT * FROM atendimentos';

        return this.execQuery(sql, 'Listando:');

        // return new Promise((resolve, reject) =>{
        //      conn.query(sql, {}, (error, resposta) => {
        //         if(error){
        //             console.log('Deu erro a listar');
        //             reject(error);
        //         }
        //         resolve(resposta);
        //     }); 
        // });
    }

    findById(id){
        const sql = 'SELECT * FROM atendimentos WHERE id = ?';

        return new Promise((resolve, reject) => {
            conn.query(sql, id, (error, resposta) => {
                if(error){
                    console.log('Atendimento: '+ id +' não encontrado.');
                    reject(error)
                }
                console.log('ID: ', id ,' Econtrado com sucesso');
                resolve(resposta);
            });
        });
    }

    criar(data){
        const sql = 'INSERT INTO atendimentos SET ?';
        return this.execQuery(sql, data, 'Criado com sucesso');
    }

    atualizar(dados, id){
        const sql = 'UPDATE atendimentos SET ? WHERE id = ?';
        return this.execQuery(sql, [dados, id], 'Dados atualizados com sucesso:');
    }

    deletar(id){
        const sql = 'DELETE FROM atendimentos WHERE id = ?';
        return this.execQuery(sql, id, `Eliminsfo com sucesso ${id}`);
    }
}           

module.exports = new AtendimentoModel();