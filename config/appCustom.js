const router = require('../routes');
const conn = require('../src/infra/conection');
const tabelas = require('../src/infra/tabelas');

module.exports = (app, express) => {
    router(app,);
    // tabelas.init(conn);
}