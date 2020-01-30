const produtorController = require('../../controllers/produtor')

module.exports = (app) =>{
    app.get("/produtor/all",produtorController.getAll)
    app.get("/produtor/one/:id",produtorController.getOne)
    app.post("/produtor/cad",produtorController.cad)
    app.put("/produtor/edit",produtorController.edit)
    app.delete("/produtor/delete/:id",produtorController.delete)
}