const middlewares = require('./config/middlewares')
const routes = require('./config/routes')

const PORT = 3002

module.exports = (app)=>{
    middlewares(app)
    routes(app)
    app.listen(PORT,()=>{console.log("Servidor inicializado em ",PORT)})
}