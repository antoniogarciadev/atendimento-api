const routerAtendimento = require('./atendimento.routes.js');
module.exports = (app) => {
    app.use(routerAtendimento);
}