class Tabelas
{
    init(conn){
        this.conn = conn;
        this.createAtendimento();
    }

    createAtendimento(){
        const sql = `
            CREATE TABLE IF NOT EXISTS atendimentos (
                id INT AUTO_INCREMENT PRIMARY KEY,
                data DATE,
                service VARCHAR(100),
                cliente VARCHAR(100),
                status ENUM('ativo', 'realizado', 'cancelado')
        )`

        this.conn.query(sql, (error) => {
            if(error){
                console.log('Erro ao criar a tabela');
                console.log(error.message);
                return;
            }
            console.log("Tabela criada com sucesso");
        });
    }
}

module.exports = new Tabelas();